#!/usr/bin/env node
//
// build-projection.js — Compute the 20-year Plan G cost projection.
//
// Single source of truth: carrier base premiums and rate history are read
// straight out of docs/index.html (the CARRIERS and RATE_HISTORY literals),
// so nothing is restated. From those this script:
//   1. writes src/18b-20-year-projection.md (methodology + ranked tables), and
//   2. injects a PROJECTION data object into docs/index.html (between the
//      PROJECTION_DATA markers) for the "20-Year Outlook" charts.
//
// Run via ./build.sh (which runs this first), or directly: node build-projection.js
//
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const HTML = path.join(ROOT, "docs", "index.html");
const SECTION = path.join(ROOT, "src", "18b-20-year-projection.md");

// ---- Model assumptions (documented on the page and in the section) ----
const INFLATION = 3.0;            // %/yr general medical-cost baseline (shared by all carriers)
const AGING = { attained: 2.5, community: 1.5, issue: 0 }; // %/yr from getting older, by pricing method
const INDUSTRY_DEFAULT = 6.5;     // %/yr trend for carriers with no filing history
const START_AGE = 65;
const HORIZON = 20;               // years of increases (age 65 -> 85)

// Pricing method is not stored on the carrier objects; only two differ from attained-age.
const METHOD = {
  "AARP / UnitedHealthcare": "community",   // community-rated with a declining age discount
  "Everence Association": "issue",          // issue-age: price locked to age at purchase
};
const TOP_PICKS = [
  "Blue Cross Blue Shield of Michigan",
  "Mutual of Omaha",
  "AARP / UnitedHealthcare",
];

// ---- Pull CARRIERS + RATE_HISTORY out of the HTML (no data duplication) ----
function loadCarrierData(html) {
  const start = html.indexOf("const CARRIERS = [");
  const end = html.indexOf("const TOP3 = [");
  if (start < 0 || end < 0) throw new Error("Could not locate CARRIERS/RATE_HISTORY in docs/index.html");
  const slice = html.slice(start, end);
  const fn = new Function(slice + "\nreturn { CARRIERS, RATE_HISTORY };");
  return fn();
}

function basePremium(prem) {
  const m = prem.match(/\$([\d,]+)/);        // lowest tier when a range is given
  if (!m) throw new Error("No premium parsed from: " + prem);
  return parseInt(m[1].replace(/,/g, ""), 10);
}

function histTrend(name, RATE_HISTORY) {
  const vals = (RATE_HISTORY[name] || []).map(e => e.n).filter(v => typeof v === "number");
  if (!vals.length) return { trend: INDUSTRY_DEFAULT, nPts: 0 };
  return { trend: vals.reduce((a, b) => a + b, 0) / vals.length, nPts: vals.length };
}

function methodOf(name) { return METHOD[name] || "attained"; }

// Golden-angle hue spread gives well-separated colors for adjacent lines.
function color(i) { return `hsl(${Math.round((i * 137.508) % 360)} 64% 46%)`; }

function project(base, growthPct) {
  const g = 1 + growthPct / 100;
  const prem = [], cum = [];
  let total = 0;
  for (let t = 0; t <= HORIZON; t++) {
    cum.push(Math.round(total));            // total paid BY this age (age 65 -> 0)
    const p = base * Math.pow(g, t);
    prem.push(Math.round(p));
    total += p * 12;                        // you pay this year's 12 months
  }
  return { prem, cum };                      // total20 = cum[HORIZON]
}

function build() {
  const html = fs.readFileSync(HTML, "utf8");
  const { CARRIERS, RATE_HISTORY } = loadCarrierData(html);

  const ages = Array.from({ length: HORIZON + 1 }, (_, t) => START_AGE + t);

  const carriers = CARRIERS.map((c, i) => {
    const base = basePremium(c.prem);
    const method = methodOf(c.name);
    const { trend, nPts } = histTrend(c.name, RATE_HISTORY);
    const aging = AGING[method];
    const growth = trend + aging;
    const { prem, cum } = project(base, growth);
    return {
      name: c.name, color: color(i), method, base,
      histTrend: +trend.toFixed(1), realTrend: +(trend - INFLATION).toFixed(1),
      aging, growth: +growth.toFixed(1), nPts,
      prem, cum, total20: cum[HORIZON],
    };
  });

  const cheapest5 = [...carriers].sort((a, b) => a.base - b.base).slice(0, 5).map(c => c.name);

  const PROJECTION = {
    startAge: START_AGE, horizon: HORIZON, ages,
    inflation: INFLATION, aging: AGING, industryDefault: INDUSTRY_DEFAULT,
    topPicks: TOP_PICKS, cheapest5, carriers,
  };

  injectHtml(html, PROJECTION);
  writeSection(carriers);
  console.log(`Projection built: ${carriers.length} carriers, age ${START_AGE}–${START_AGE + HORIZON}`);
}

function injectHtml(html, PROJECTION) {
  const block =
    "/* PROJECTION_DATA_START */\n" +
    "const PROJECTION = " + JSON.stringify(PROJECTION) + ";\n" +
    "/* PROJECTION_DATA_END */";
  const re = /\/\* PROJECTION_DATA_START \*\/[\s\S]*?\/\* PROJECTION_DATA_END \*\//;
  if (!re.test(html)) throw new Error("PROJECTION_DATA markers not found in docs/index.html");
  fs.writeFileSync(HTML, html.replace(re, block));
}

function writeSection(carriers) {
  const ranked = [...carriers].sort((a, b) => a.total20 - b.total20);
  const dollar = n => "$" + Math.round(n).toLocaleString();
  const methodLabel = { attained: "Attained-age", community: "Community", issue: "Issue-age" };

  const rows = ranked.map(c => {
    const at75 = c.prem[10], at85 = c.prem[20];
    const trendNote = c.nPts === 0 ? `${c.histTrend}% ‡` : c.nPts === 1 ? `${c.histTrend}% †` : `${c.histTrend}%`;
    return `| ${c.name} | ${methodLabel[c.method]} | ${dollar(c.base)} | ${trendNote} | +${c.aging}% | ${c.growth}% | ${dollar(at75)} | ${dollar(at85)} | **${dollar(c.total20)}** |`;
  }).join("\n");

  const robust = ranked.filter(c => c.nPts >= 2);
  const cheapest = robust[0], priciest = ranked[ranked.length - 1];
  const thinCheapest = ranked.find(c => c.nPts < 2);

  const md = `## Plan G — 20-Year Cost Projection (Age ${START_AGE} → ${START_AGE + HORIZON})

> **Generated file — do not edit by hand.** Produced by \`build-projection.js\` from the carrier
> premiums and rate-increase history. Rebuild with \`./build.sh\`. The interactive version of these
> figures (two charts) is the "20-Year Outlook" tab of \`index.html\`.

Today's premium is the *starting* price, not the price you'll pay for the two decades you may hold the
plan. This section grows each carrier's 2026 Plan G premium forward to age ${START_AGE + HORIZON} so the
**long-run cost** can be compared, not just the sticker price.

### How each carrier is grown

Each carrier compounds at its own estimated annual rate, decomposed into three transparent parts so no
factor is double-counted:

1. **Inflation baseline — ${INFLATION}%/yr.** General medical-cost inflation, shared by every carrier.
2. **Carrier trend.** The carrier's own historical filed increases (the average of the per-year filings
   in the *Historical Rate Increase Analysis* section), measured *relative to* that ${INFLATION}% baseline.
   A history of steep hikes adds to growth; a calm history subtracts. Carriers with no usable filing
   history are grown at the Plan G industry average of **${INDUSTRY_DEFAULT}%/yr**.
3. **Attained-age aging.** The extra you pay each year simply for getting older:
   **+${AGING.attained}%/yr** for attained-age plans, **+${AGING.community}%/yr** for the community-rated
   AARP/UnitedHealthcare plan (its age discount declines with age), and **+${AGING.issue}%** for the
   issue-age Everence plan (its price is locked to your age at purchase).

A carrier's **annual growth = carrier trend + attained-age aging** (inflation is already inside the trend
figure — adding it again would double-count). Because the filed increases *already embed* inflation and
claims experience, this keeps the model honest.

> **These are illustrations, not quotes.** Real rate increases are lumpy and unknowable. Ranged premiums
> use the lowest tier. Read the *shape* — which carriers stay calm and which compound fastest — not the
> third decimal of a 20-year forecast.

### 20-year cost, ranked cheapest to most expensive

| Carrier | Pricing | 2026 $/mo | Carrier trend | Aging | Annual growth | Premium @75 | Premium @85 | 20-yr total |
|---------|---------|----------:|--------------:|------:|--------------:|------------:|------------:|------------:|
${rows}

**† Carrier trend rests on a single rate filing** — often a one-off, so the projected total is
low-confidence and can look artificially calm or harsh. **‡ No filing history**; grown at the
${INDUSTRY_DEFAULT}% industry average. Carriers with two or more filings are the only ones whose
trajectory should be read with much confidence.

**Reading the table.** Over 20 years the spread is enormous. Among carriers with a real (multi-year)
filing history, **${cheapest.name}** has the lowest projected lifetime cost at about
**${dollar(cheapest.total20)}**, while **${priciest.name}** runs to about **${dollar(priciest.total20)}**
— even though their *starting* premiums are far closer together. (A few carriers such as
**${thinCheapest.name}** project even lower, but only because their trend rests on a single filing — see
the † note; don't read that as durable.) Two carriers priced within a few dollars today can diverge by
tens of thousands of dollars once their rate-increase trajectories compound. A calm rate history is worth
real money, which is why it weighs so heavily in the top picks.
`;
  fs.writeFileSync(SECTION, md);
}

build();
