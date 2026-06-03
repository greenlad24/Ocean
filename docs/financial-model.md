# Ocean Interactive — Financial Model (v1)

> All figures are **illustrative planning assumptions**, not guarantees. Replace with real numbers as they arrive. `finance-analyst` keeps this current.

## Assumptions (edit these)
| Input | Assumption | Note |
|---|---|---|
| Blended build rate | **$60 / hr** | Loaded cost of build time |
| Prototype build effort | **40–80 hrs** | One magic moment, slice only |
| Build cost / prototype | **$2.4k–$4.8k** | rate × effort |
| Asset/tool cost | **$0–$300** | Royalty-free / owned |
| Prototypes shipped / month | **2–3** | Portfolio throughput |
| Monthly fixed burn | **$3k** | Tools, hosting, overhead (lean) |

## Unit economics per prototype
```
Expected value (EV) = price_anchor × probability_of_sale
Margin              = EV − build_cost
GO if               EV > 3 × build_cost   (Concept gate)
```

### Illustrative price anchors by path
| Path | Typical range* | Studio upside |
|---|---|---|
| Outright sale (hyper-casual hook) | $3k–$25k | none (clean cash) |
| Outright sale (premium slice / IP) | $15k–$75k+ | none |
| License / co-dev | $5k–$50k advance **+ 5–15% royalty** | high (long tail) |
| Work-for-hire prototype | $4k–$20k / project (day-rate based) | none (but reliable) |

\* *Ranges vary widely by genre, buyer, and quality — validate per deal with `market-scout`.*

## Worked example (illustrative)
- Build cost: 60 hrs × $60 = **$3,600**
- Buyer: casual mobile publisher; price anchor **$15,000**; probability of sale **40%**
- EV = $15,000 × 0.40 = **$6,000**
- Margin (expected) = $6,000 − $3,600 = **+$2,400**
- Concept gate: best-case path $15k > 3 × $3.6k = $10.8k? **Yes → GO**
- Walk-away price = build cost + target margin = $3,600 + $1,400 = **$5,000 floor**

## Portfolio P&L (monthly, illustrative)
| Line | Low | Base | High |
|---|---|---|---|
| Work-for-hire revenue | $5,000 | $10,000 | $18,000 |
| Outright sales | $0 | $8,000 | $25,000 |
| Licensing advances + royalties | $0 | $2,000 | $10,000 |
| **Total revenue** | **$5,000** | **$20,000** | **$53,000** |
| Build costs (2–3 protos) | $7,200 | $9,600 | $12,000 |
| Fixed burn | $3,000 | $3,000 | $3,000 |
| **Total cost** | **$10,200** | **$12,600** | **$15,000** |
| **Net** | **−$5,200** | **+$7,400** | **+$38,000** |

**Read:** the **work-for-hire base load** is what carries the studio to break-even; **outright sales** push it profitable; **licensing royalties** are the compounding upside. Path to profitability = land 1 WFH client + 1 sale per month.

## Cash discipline rules
1. **Runway first.** Keep ≥3 months of fixed burn in reserve before taking licensing-only (low-cash, high-upside) bets.
2. **No build without a buyer segment.** Concept gate is non-negotiable.
3. **Never sell below the walk-away price.** Hold the line in negotiation.
4. **Throughput over perfection.** More cheap, buyer-backed prototypes = more shots on goal.
5. **Kill early.** A killed doomed prototype is realized profit (cost avoided).

## KPIs `finance-analyst` reports each cycle
- Monthly revenue vs. burn (the survival number)
- Prototypes shipped / sold / killed
- Average margin per sold prototype
- Pipeline expected value (Σ EV across open opportunities)
- Runway in months
