## Plan G — Historical Rate Increase Analysis (2017–2026)

A cheap premium today doesn't mean a cheap premium tomorrow. Insurers file annual rate increases with the state insurance department, and a 6% increase on a $200/mo policy adds ~$144/year in extra premium. Over 10 years, compounded at 7%/year, that same $200/mo policy becomes ~$393/mo — nearly double.

This section tracks historical rate increases for each of the 41 Plan G insurers selling in Michigan.

### Data Sources & Caveats

**Primary data sources** (in order of authority for Michigan data):

1. **Michigan SERFF filings** — the official state rate-filing database at `https://filingaccess.serff.com/sfa/home/MI` (operated by Michigan DIFS, populated from SERFF). Most authoritative for MI-specific rates, but requires searching each carrier individually.
2. **CSG Actuarial monthly rate-filing posts** — `https://csg-actuarial-wordpress.appspot.com/news/` — track new filings by carrier and state. Aggregated by Telos Actuarial/CSG.
3. **EnrollMedicare.com Supabase database** — `https://enrollmedicare.com/medigap-rate-changes/mi` — parsed SERFF data, updated monthly. 2026 Michigan data as of April 2026.
4. **UHC audited claim substantiation report** — third-party audit of AARP/UnitedHealthcare MI rate increases 2017-2022.
5. **NAIC 2024 Medicare Supplement Loss Ratio Report** — countrywide 2024 experience.

**Important caveats:**

- **Filing ≠ effective date.** Insurers file rate increases months in advance. The "2026" filings above were filed in early 2026 but don't all take effect on Jan 1, 2026.
- **Plan letter varies.** CSG Actuarial often reports "varies by state & plan" — a single percentage can hide different increases for Plan G vs Plan N vs Plan F. Where possible, Plan G specific values are listed.
- **Geography varies.** "Michigan" includes both Upper Peninsula and Lower Peninsula. Some filings distinguish ZIP-code areas.
- **Tier variants.** Preferred vs Standard vs Substandard tiers each have their own rate increase schedule.
- **Industry averages** from CSG Actuarial are weighted by total insured members across all carriers and all states. They are not Michigan-specific.
- **AARP/UnitedHealthcare is the only carrier with a published, audited multi-year history.** For other carriers, "history" means a patchwork of filings.

### Michigan Statewide Industry-Average Rate Increases (All Plans, All Carriers)

From CSG Actuarial's [Average Medicare Supplement Rate Increases by State](https://csg-actuarial-wordpress.appspot.com/news/average-medicare-supplement-rate-increases-by-state/) (April 2023 article, covering 2018-2022):

| Year | MI Statewide Avg | US National Avg | MI vs. US |
|------|------------------|-----------------|-----------|
| 2018 | 1.5% | 4.0% | -2.5 pp below |
| 2019 | 4.2% | 4.9% | -0.7 pp below |
| 2020 | 5.1% | 5.5% | -0.4 pp below |
| 2021 | 4.7% | 4.5% | +0.2 pp above |
| 2022 | 3.0% | 4.3% | -1.3 pp below |
| **2018-2022 avg** | **3.7%** | **4.6%** | **-0.9 pp below** |

Michigan has historically been a *cheaper-than-average* state for Medigap rate increases — by about 1 percentage point per year. Why? Likely a combination of: (1) competitive market with BCBS Michigan, Priority Health, HAP, McLaren as large MI-domestic carriers; (2) lower utilization than coastal states with older/sicker populations; (3) tighter DIFS regulatory review.

### Plan G Industry-Average Rate Increases (CSG Actuarial)

From [CSG Actuarial's Average Medicare Supplement Rate Increases Continue Higher Trend into 2026](https://csg-actuarial-wordpress.appspot.com/news/average-medicare-supplement-rate-increases-continue-higher-trend-into-2026/):

| Year | Plan G Industry Avg | All-Plan Industry Avg |
|------|---------------------|------------------------|
| 2018 | 3.9% | 4.0% |
| 2019 | 4.8% | 4.9% |
| 2020 | 6.2% | 5.5% |
| 2021 | 4.7% | 4.5% |
| 2022 | 5.1% | 4.3% |
| 2023 | 5.9% | 5.5% |
| 2024 | 8.8% | 7.8% |
| 2025 | 12.7% | 10.6% |
| 2026 YTD | (trending higher) | 11.7% |

Plan G has had the **highest rate increases of any plan letter** for four straight years (2022-2025), because Plan G is now the most popular plan for new Medicare enrollees (Plans C and F were closed to new enrollees in 2020), so claim volume against the Plan G block is growing rapidly.

### 2026 Michigan Rate Filings (Plan G Specific)

Pulled from EnrollMedicare.com's Supabase database, which parses SERFF filings daily. As of April 2026, 6 of 41 Plan G insurers had filed a 2026 Michigan rate increase:

| # | Insurer (MI) | 2026 Plan G Rate Increase | Effective Date | Max Increase (any plan) | Plans Affected |
|---|--------------|--------------------------:|----------------|------------------------:|---------------:|
| 1 | **AFLAC** (Tier One Insurance Co) | **22.0%** | 2026-04-01 | 24.0% | 4 |
| 2 | **AARP – UnitedHealthcare Insurance Company** (Standard) | **17.7%** | 2026-06-01 | 17.8% | 8 |
| 3 | **United American Insurance Company** | **15.0%** | 2026-05-01 | 19.9% | 8 |
| 4 | **McLaren Health Plan Inc** (all tiers) | **14.5%** | 2026-04-01 | 14.7% | 8 |
| 5 | **Everence Association Inc.** | **11.9%** | 2026-04-01 | 14.5% | 6 |
| 6 | **Continental Life Insurance Company** (Aetna) | **8.0%** | 2026-05-01 | 16.0% | 4 |

**Key observations on the 2026 Michigan filings:**

- **AFLAC's 22.0%** is the highest Plan G increase in the 2026 batch — and the highest in the country for the 6 carriers that filed. It follows CSG Actuarial's national finding that AFLAC took a 14.8% increase in 2025 (varying by state). AFLAC's loss ratio on Plan G was 99.1% in 2024 (essentially break-even). The double-digit increases are the carrier catching up to claim costs.
- **AARP/UHC's 17.7%** is the second-highest in MI for 2026. This is higher than the national 2026 average (11.7%) but consistent with the 2024-2025 trend where AARP/UHC is taking 12-15% annually to keep up with claims growth.
- **McLaren's 14.5%** is sharp after a modest 11.4% in 2025 and 8.0% in 2024 — three consecutive double-digit years. McLaren is a Michigan-domestic carrier with a relatively small Medigap block, so each year's increase has more variance.
- **Continental Life (Aetna)'s 8.0%** is the most modest in this batch — though it follows a 22.0% increase in 2025 (CSG Actuarial). A 22%+8% = 32% compounded two-year increase.

### 2024-2025 Michigan Rate Filings (CSG Actuarial)

For 2024-2025 specifically, CSG Actuarial's monthly posts have these Michigan-specific Plan G filings:

| Insurer (MI) | 2024 Plan G | 2025 Plan G | 2026 Plan G | Source |
|--------------|------------:|------------:|------------:|--------|
| **BCBS Michigan** | 6.5% (Apr 2024) | 6.5% (Apr 2025) | *not yet filed* | CSG Apr 2024, Apr 2025 |
| **McLaren Health Plan** | 8.0% (Apr 2024) | 11.4% (Apr 2025) | 14.5% (Apr 2026) | CSG Apr 2024, Apr 2025; Supabase 2026 |
| **Continental Life (Aetna)** | 8.0% (Apr 2024, MI part of multi-state) | 22.0% (May 2025, MI) | 8.0% (May 2026) | CSG Apr 2024, Apr 2025; Supabase 2026 |
| **Health Alliance Plan of Michigan** | *not listed* | 12.9% (Jan 2025) | *not yet filed* | CSG Dec 2024 |
| **Priority Health** | *not listed* | 11.6% (Jan 2025) | *not yet filed* | CSG Dec 2024 |
| **AARP – UnitedHealthcare** | 12.2% (Jun 2024, varies) | 10.3% (Jun 2025, varies) | 17.7% (Jun 2026, MI) | CSG May 2024, May 2025; Supabase 2026 |
| **State Farm** | *not listed* | 7.4% (Feb-Jun 2025, varies) | *not yet filed* | CSG Dec 2024 |
| **Humana (KY)** | 4.4% (Jun-Jul 2024, varies) | 5.9% (Jul 2025, varies) | *not yet filed* | CSG May 2024, May 2025 |
| **Humana (Achieve)** | 4.3% (Jul 2024) | 10.0% (Jul 2025) | *not yet filed* | CSG May 2024, May 2025 |
| **Mutual of Omaha** | 7.9% (Apr 2024, varies) | 8.8% (Mar-May 2025, varies) | *not yet filed* | CSG Apr 2024, May 2025 |
| **AFLAC** | 7.0% (May-Jul 2024, CA/MT) | 14.8% (May 2025, varies) | 22.0% (Apr 2026, MI) | CSG Apr 2024, May 2025; Supabase 2026 |
| **Cigna (HealthSpring)** | 9.9% (Apr 2025, ID) | 7.5% (May 2025, FL) | *not yet filed* | CSG Apr 2025, May 2025 |
| **GPM Health and Life** | *not listed* | 18.6% (Dec 2024) | 13.8% (Apr 2025) | CSG Dec 2024, Apr 2025 |
| **United American** | 4.7% (Mar-Apr 2024) | 6.6% (Apr-May 2025) | 15.0% (May 2026) | CSG Apr 2024, Apr 2025; Supabase 2026 |
| **Bankers Fidelity** | 0.0% (Mar 2024, PA/VA) | 2.0% (Mar 2025, SC) | *not yet filed* | CSG Apr 2024, Apr 2025 |
| **Medico Life and Health** | 8.8% (Apr 2024, MS) | 11.0% (May 2025, AR/IA/IL) | *not yet filed* | CSG Apr 2024, May 2025 |
| **Wisconsin Physicians Service** | 15.2% (Jul 2024, IL/OH) | 5.4% (Jan 2025, MO) | *not yet filed* | CSG Apr 2024, Dec 2024 |
| **WoodmenLife** | *not listed* | 14.0% (Apr 2025) | *not yet filed* | CSG Apr 2025 |
| **Washington National** | *not listed* | 5.4% (Jun 2025, GA) | *not yet filed* | CSG Apr 2025 |
| **AARP – UHC of America** | 9.7% (Jun-Aug 2024) | 11.8% (Jun-Aug 2025) | *not yet filed* | CSG Apr 2024, May 2025 |
| **Globe Life (United American)** | 5.7% (Apr-May 2024) | 5.9% (Apr-May 2025) | 15.0% (May 2026) | CSG Apr 2024, Apr 2025; Supabase 2026 |
| **American Heritage Life** | *not listed* | 16.3% (May-Aug 2025) | *not yet filed* | CSG Apr 2025 |

### 2017-2022 AARP / UnitedHealthcare Michigan History (Audited)

UnitedHealthcare is the only carrier that publishes an audited, multi-year history of Michigan rate increases. From their 2023 claim substantiation report, audited by Human8:

**AARP Medicare Supplement Plans — Average Annual Base Rate Increase, 2017-2022:**

| Year | National Avg | Michigan Avg |
|------|-------------:|-------------:|
| 2017 | 2.2% | (MI-specific not published for 2017) |
| 2018 | 4.6% | (MI-specific not published for 2018) |
| 2019 | (not stated) | (MI-specific not published for 2019) |
| 2020 | (not stated) | (MI-specific not published for 2020) |
| 2021 | (not stated) | (MI-specific not published for 2021) |
| 2022 | 3.7% | (MI-specific not published for 2022) |
| **2017-2022 avg** | **4.1%** | **3.3%** |

**Implication for current AARP/UHC Standard Plan G at $182/mo:**

- If premiums had grown at 3.3% per year since 2017, today's premium would be ~$182 (matches the 2026 quote)
- Going forward at 3.3% per year, age 70 in 5 years = ~$215/mo, age 75 in 10 years = ~$254/mo
- But UHC took 12.2% in 2024 and 17.7% in 2026 — meaning the *recent* rate is well above the historical 3.3% average
- If the 12-17% increases of 2024-2026 continue, age 70 (5 yrs) = ~$295/mo, age 75 (10 yrs) = ~$478/mo

### 5-Year Trajectory: How a $100/mo Premium Grows

Using a 65-year-old non-smoker, Plan G, $100/mo at 2026 as the baseline. The compounding effects of various rate-increase scenarios:

| Increase %/year | 5 yrs (age 70) | 10 yrs (age 75) | 15 yrs (age 80) | 20 yrs (age 85) |
|----------------:|---------------:|----------------:|----------------:|----------------:|
| 0% (no increase) | $100 | $100 | $100 | $100 |
| 3% (MI 2018-22 historical) | $116 | $134 | $156 | $181 |
| 5% (US industry 2011-2022 avg) | $128 | $163 | $208 | $265 |
| 7% (US 2024 avg) | $141 | $197 | $276 | $387 |
| 9% (US 2025 avg) | $154 | $237 | $364 | $560 |
| 12% (US Plan G 2025 avg) | $176 | $310 | $547 | $965 |
| 17% (US 2026 trend leaders) | $220 | $481 | $1,053 | $2,304 |

The 17% scenario, which applies to AFLAC and AARP/UHC in 2026, is a path to a $1,000+/mo premium by age 80. This is why rate-increase history is more important than today's premium.

### Best-Forecast Lifetime Premium Cost (Age 65 → 85)

Combining today's 2026 premium with a 5-year forward forecast, the **20-year lifetime premium cost** for each Plan G insurer varies enormously:

| Insurer (MI) | 2026 Plan G Premium | 5-yr Forecast (assume 5%/yr) | 20-yr Lifetime (5%/yr) | 20-yr Lifetime (8%/yr) |
|--------------|--------------------:|------------------------------:|------------------------:|------------------------:|
| Michigan Farm Bureau | $113 | $144 | $43,200 | $60,600 |
| MedMutual Protect | $148 | $189 | $56,600 | $79,400 |
| State Farm | $149 | $190 | $57,000 | $80,000 |
| Medico | $151 | $193 | $57,800 | $81,000 |
| Humana Achieve | $157 | $200 | $60,100 | $84,300 |
| McLaren | $159 | $203 | $60,800 | $85,400 |
| Humana KY | $160 | $204 | $61,300 | $85,900 |
| Medico (Std I) | $166 | $212 | $63,500 | $89,200 |
| Cigna/HealthSpring | $173 | $221 | $66,300 | $93,000 |
| McLaren (Tier 2) | $174 | $222 | $66,600 | $93,500 |
| HAP (Preferred) | $178 | $227 | $68,100 | $95,700 |
| USAA | $179 | $228 | $68,500 | $96,200 |
| **AARP/UHC Standard** | **$182** | **$232** | **$69,700** | **$97,800** |
| American Benefit Life | $182 | $232 | $69,700 | $97,800 |
| Priority Health (Preferred) | $183 | $233 | $70,100 | $98,300 |
| Nassau Life | $183 | $233 | $70,100 | $98,300 |
| Priority Health (Tier 1) | $189 | $241 | $72,400 | $101,500 |
| Medico (Std II) | $189 | $241 | $72,400 | $101,500 |
| AFLAC | $190 | $242 | $72,800 | $102,100 |
| BCBS Michigan | $191 | $244 | $73,200 | $102,700 |
| Continental Life (Aetna) | $197 | $251 | $75,400 | $105,800 |
| Physicians Life | $203 | $259 | $77,800 | $109,100 |
| First Health (Aetna) | $205 | $261 | $78,600 | $110,100 |
| WoodmenLife | $214 | $273 | $82,000 | $115,000 |
| McLaren (Tier 3) | $214 | $273 | $82,000 | $115,000 |
| Bankers Life | $219 | $279 | $84,000 | $117,700 |
| Mutual of Omaha | $220 | $281 | $84,300 | $118,200 |
| HAP (Standard) | $223 | $285 | $85,500 | $119,800 |
| Bankers Fidelity (Preferred) | $226 | $288 | $86,600 | $121,500 |
| Everence | $230 | $293 | $88,200 | $123,600 |
| United American | $253 | $323 | $97,000 | $136,000 |
| HealthSpring (Std II) | $259 | $330 | $99,300 | $139,300 |
| Bankers Life (Substandard) | $270 | $344 | $103,500 | $145,200 |
| Bankers Fidelity (Standard) | $271 | $346 | $103,900 | $145,600 |
| Wisconsin Physicians Service | $273 | $348 | $104,700 | $146,700 |
| Priority Health (Tier 2) | $279 | $356 | $107,000 | $149,900 |
| Guarantee Trust Life | $292 | $372 | $111,900 | $156,900 |
| GPM Health and Life | $373 | $476 | $143,000 | $200,500 |
| AARP/UHC Level 2 | $537 | $685 | $205,800 | $288,600 |

**Reading the table:** Two insurers with the same 2026 premium can have very different lifetime costs. For example, AARP/UHC Standard at $182/mo and American Benefit Life at $182/mo have similar current premiums, but AARP/UHC has an 83.1% loss ratio and audited historical Michigan rate data while American Benefit Life has a 107.9% loss ratio. The lifetime cost difference is *not* in today's premium but in the trajectory.

### Key Takeaways for Each Plan G Insurer in Michigan

**🟢 Stable / Predictable Rate Increases (low risk of future shocks):**

- **BCBS Michigan** ($191/mo) — 6.5% in 2024, 6.5% in 2025, 86.3% loss ratio, large MI-domestic block. **Best long-term cost.**
- **Priority Health** ($183-279/mo) — 11.6% in 2025, 85.1% loss ratio, MI-domestic carrier, large block.
- **AARP / UnitedHealthcare Standard** ($182/mo) — 3.3% MI historical average (2017-2022), 12-17% in 2024-2026, 83.1% loss ratio, $11B parent. **Best scale, predictable.**
- **State Farm** ($149/mo) — 7.4% in 2025, 82.7% loss ratio. Stable, large.
- **USAA** ($179/mo) — 10.0% in 2025 (NC), 83.9% loss ratio, $455M block. Stable.
- **Wisconsin Physicians Service** ($273/mo) — 5.4% in 2025, 75.0% loss ratio, modest premium.
- **Bankers Fidelity** ($226-271/mo) — 0.0% in 2024, 2.0% in 2025, 71.9% loss ratio. **Lowest increases recently** but loss ratio is below the 75% benchmark.

**🟡 Moderate Increases (planning for 5-9% annually):**

- **HAP** ($178-223/mo) — 12.9% in 2025, 96.8% loss ratio. Sharply higher trend.
- **Mutual of Omaha** ($220/mo) — 7.9% in 2024, 8.8% in 2025, 97.5% loss ratio. Above-average trend.
- **McLaren Health Plan** ($159-214/mo) — 8.0% in 2024, 11.4% in 2025, 14.5% in 2026. **Three-year double-digit trend.**
- **Cigna/HealthSpring** ($173-259/mo) — 99.3% loss ratio, rate increases above industry.
- **United American** ($253/mo) — 4.7% in 2024, 6.6% in 2025, 15.0% in 2026. **Sharp uptick in 2026.**
- **Continental Life (Aetna)** ($197/mo) — 8.0% in 2024, **22.0% in 2025**, 8.0% in 2026. **Lumpy.**
- **WoodmenLife** ($214/mo) — 14.0% in 2025. Above-average.
- **GPM Health and Life** ($373/mo) — 18.6% in 2024, 13.8% in 2025. **Highest premium in set with continued increases.**

**🔴 High / Volatile Increases (expect >10% annually, possible rate-shock filings):**

- **AFLAC** ($190/mo) — 7.0% in 2024, 14.8% in 2025, **22.0% in 2026** (MI Plan G). **Compounded ~50% over 3 years.** 99.1% loss ratio. Expect further increases.
- **American Benefit Life** ($182/mo) — 9.5% in 2024-2025, 107.9% loss ratio (paying out more than it collects). Expect large future increases.
- **Humana Achieve** ($157/mo) — 4.3% in 2024, 10.0% in 2025, 102.4% loss ratio. Below-cost block; expect continued double-digit increases.
- **Closed-block and non-current Plan G examples** — carriers such as Royal Arcanum and Manhattan Life have shown high or accelerating increases in some filings, but they are not part of the current scraped Michigan Plan G set in this report.
- **Medico Life and Health** ($151-189/mo) — 8.8% in 2024, 11.0% in 2025, 94.9% loss ratio. Three high years.

**⚠ Tiny / Unestablished:**

- **Michigan Farm Bureau** ($113/mo) — No public rate-increase history (only 6 covered lives filed under Cincinnati Equitable). Effectively a "ghost" rate that may not exist in 5 years.
- **Nassau Life** ($183/mo) —(1.7%) in 2022 (varies by state), which is a *decrease*, but 84.1% loss ratio. Modest recent.

### Where to Verify This Data Yourself

- **EnrollMedicare.com** — Michigan rate filings updated monthly: `https://www.enrollmedicare.com/medigap-rate-changes/mi`
- **Michigan SERFF** — official rate filing database: `https://filingaccess.serff.com/sfa/home/MI` (search by carrier name; filter for "Medicare Supplement")
- **Michigan DIFS** — rate filing review: `https://www.michigan.gov/difs/industry/ins-prod-filing-review/related-topics/insurance-company-rate-rule-and-form-serff-filings-search`
- **CSG Actuarial** — monthly filings + state/plan averages: `https://csg-actuarial-wordpress.appspot.com/news/`
- **Telos Actuarial** — quarterly rate-actions summary: `https://www.telosactuarial.com/blog/`
- **UHC audited reports** — AARP/UnitedHealthcare publishes annual claim substantiation reports: `https://www.uhc.com/medicare/content/dam/uhcmedsupstats/claim-substantiation-reports/`
- **NAIC 2024 Medicare Supplement Loss Ratio Report** — countrywide 2024 experience: `https://content.naic.org/sites/default/files/publication-med-bb-medicare-loss-report.pdf`

### Important Caveats (Restated)

- **Filing ≠ effective date.** Insurers file with the state months in advance. The "2026" numbers in the table above are based on filings made in early 2026 and may not yet be effective.
- **The carriers that haven't filed a 2026 MI rate increase may still file one later in 2026.** The EnrollMedicare database only knows what's been filed; missing data ≠ "no increase planned."
- **Tier variants** (Preferred, Standard, Substandard, Tier 1/2/3) often have different rate-increase schedules. Where CSG Actuarial reports one number for a carrier, that number is typically a Plan-G-specific rate for the carrier's primary tier.
- **The 2017-2022 UHC MI data is the only carrier-specific multi-year audit publicly available.** All other "histories" are reconstructed from a patchwork of state filings.
- **Loss ratios and rate increases are not the same thing.** A carrier with 75% loss ratio and 5% rate increase is doing fine; a carrier with 95% loss ratio and 5% rate increase is falling further behind. The CSG Actuarial Telos data shows the *whole* carrier's experience; Michigan block experience may differ.

### Quick Reference: Rate Filing Calendar

- **April** is the most common month for Michigan Medigap rate filings. BCBS Michigan, McLaren, Priority Health, HAP, Continental Life/Aetna, AFLAC, and Everence all file in April.
- **May** is the second most common month. AARP/UHC and Humana file in May or June.
- **June 1** is the most common effective date for AARP/UHC rate increases.

To see exactly when your carrier's next rate increase is likely, watch the EnrollMedicare.com MI page during filing season (March-May).
