## Plan G — 20-Year Cost Projection (Age 65 → 85)

> **Generated file — do not edit by hand.** Produced by `build-projection.js` from the carrier
> premiums and rate-increase history. Rebuild with `./build.sh`. The interactive version of these
> figures (two charts) is the "20-Year Outlook" tab of `index.html`.

Today's premium is the *starting* price, not the price you'll pay for the two decades you may hold the
plan. This section grows each carrier's 2026 Plan G premium forward to age 85 so the
**long-run cost** can be compared, not just the sticker price.

### How each carrier is grown

Each carrier compounds at its own estimated annual rate, decomposed into three transparent parts so no
factor is double-counted:

1. **Inflation baseline — 3%/yr.** General medical-cost inflation, shared by every carrier.
2. **Carrier trend.** The carrier's own historical filed increases (the average of the per-year filings
   in the *Historical Rate Increase Analysis* section), measured *relative to* that 3% baseline.
   A history of steep hikes adds to growth; a calm history subtracts. Carriers with no usable filing
   history are grown at the Plan G industry average of **6.5%/yr**.
3. **Attained-age aging.** The extra you pay each year simply for getting older:
   **+2.5%/yr** for attained-age plans, **+1.5%/yr** for the community-rated
   AARP/UnitedHealthcare plan (its age discount declines with age), and **+0%** for the
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
| Nassau Life | Attained-age | $183 | -1.7% † | +2.5% | 0.8% | $198 | $215 | **$47,424** |
| Michigan Farm Bureau Health Plans | Attained-age | $113 | 6.5% ‡ | +2.5% | 9% | $268 | $633 | **$69,373** |
| Bankers Fidelity Assurance | Attained-age | $226 | 1% | +2.5% | 3.5% | $319 | $450 | **$76,694** |
| MedMutual Protect (Medical Mutual of Ohio) | Attained-age | $148 | 6.5% ‡ | +2.5% | 9% | $350 | $829 | **$90,860** |
| State Farm | Attained-age | $149 | 7.4% † | +2.5% | 9.9% | $383 | $984 | **$101,252** |
| Humana | Attained-age | $157 | 7.2% | +2.5% | 9.7% | $396 | $1,000 | **$104,298** |
| Blue Cross Blue Shield of Michigan | Attained-age | $191 | 6.5% | +2.5% | 9% | $452 | $1,070 | **$117,259** |
| Bankers Life (Washington National) | Attained-age | $219 | 5.4% † | +2.5% | 7.9% | $468 | $1,002 | **$118,939** |
| Physicians Life | Attained-age | $203 | 6.5% ‡ | +2.5% | 9% | $481 | $1,138 | **$124,626** |
| First Health (Aetna) | Attained-age | $205 | 6.5% ‡ | +2.5% | 9% | $485 | $1,149 | **$125,854** |
| Cigna / HealthSpring | Attained-age | $173 | 8.7% | +2.5% | 11.2% | $500 | $1,446 | **$136,383** |
| Medico Life and Health | Attained-age | $151 | 9.9% | +2.5% | 12.4% | $486 | $1,564 | **$136,765** |
| American Benefit Life | Attained-age | $182 | 9.5% † | +2.5% | 12% | $565 | $1,756 | **$157,363** |
| USAA | Attained-age | $179 | 10% † | +2.5% | 12.5% | $581 | $1,888 | **$164,023** |
| AARP / UnitedHealthcare | Community | $182 | 10.9% | +1.5% | 12.4% | $584 | $1,877 | **$164,364** |
| Mutual of Omaha | Attained-age | $220 | 8.4% | +2.5% | 10.9% | $616 | $1,726 | **$166,604** |
| McLaren Health Plan | Attained-age | $159 | 11.3% | +2.5% | 13.8% | $579 | $2,110 | **$169,635** |
| Guarantee Trust Life | Attained-age | $292 | 6.5% ‡ | +2.5% | 9% | $691 | $1,636 | **$179,265** |
| Everence Association | Issue-age | $230 | 11.9% † | +0% | 11.9% | $708 | $2,179 | **$196,574** |
| United American (Globe Life) | Attained-age | $253 | 8.8% | +2.5% | 11.3% | $736 | $2,140 | **$200,987** |
| Priority Health | Attained-age | $183 | 11.6% † | +2.5% | 14.1% | $684 | $2,560 | **$202,260** |
| Health Alliance Plan (HAP) | Attained-age | $178 | 12.9% † | +2.5% | 15.4% | $746 | $3,123 | **$229,460** |
| Continental Life (Aetna) | Attained-age | $197 | 12.7% | +2.5% | 15.2% | $809 | $3,319 | **$247,012** |
| Wisconsin Physicians Service (WPS) | Attained-age | $273 | 10.3% | +2.5% | 12.8% | $910 | $3,036 | **$259,059** |
| AFLAC | Attained-age | $190 | 14.6% | +2.5% | 17.1% | $921 | $4,466 | **$300,051** |
| WoodmenLife | Attained-age | $214 | 14% † | +2.5% | 16.5% | $986 | $4,539 | **$314,524** |
| GPM Health and Life | Attained-age | $373 | 16.2% | +2.5% | 18.7% | $2,071 | $11,501 | **$714,075** |

**† Carrier trend rests on a single rate filing** — often a one-off, so the projected total is
low-confidence and can look artificially calm or harsh. **‡ No filing history**; grown at the
6.5% industry average. Carriers with two or more filings are the only ones whose
trajectory should be read with much confidence.

**Reading the table.** Over 20 years the spread is enormous. Among carriers with a real (multi-year)
filing history, **Bankers Fidelity Assurance** has the lowest projected lifetime cost at about
**$76,694**, while **GPM Health and Life** runs to about **$714,075**
— even though their *starting* premiums are far closer together. (A few carriers such as
**Nassau Life** project even lower, but only because their trend rests on a single filing — see
the † note; don't read that as durable.) Two carriers priced within a few dollars today can diverge by
tens of thousands of dollars once their rate-increase trajectories compound. A calm rate history is worth
real money, which is why it weighs so heavily in the top picks.
