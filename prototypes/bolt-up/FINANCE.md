# FINANCE — "Bolt Up" (RAS scorecard)

*owner: finance-analyst · framework: docs/revenue-assurance.md*

## Build cost (v2 — incl. meta-progression + monetization)
| Item | Est. |
|---|---|
| Engineering — core + juice | ~24 hrs |
| Engineering — meta loop (level generator, workshop renovation, lives, daily, persistence) | ~22 hrs |
| Engineering — monetization surface (rewarded/interstitial/IAP store + metrics panel) | ~10 hrs |
| Design + art-direction (primitives, no asset spend) | ~10 hrs |
| QA (solver + generator fuzz + headless smoke harness) | ~8 hrs |
| **Total ~74 hrs × $60 blended** | **≈ $4,440** |
| Asset / tool spend | **$0** (all code-drawn, royalty-free) |

> Retention note: v1 was a core loop only (no D1/D7). v2 adds the full hybrid-casual meta + monetization, which is what publishers actually price. Demand factor stays 95; build-feasibility now demonstrated end-to-end (generator always-solvable + 14/14 smoke interactions).

## RAS scorecard
```
Prototype: bolt-up
Revenue path at build time: BOOTSTRAP (self-funded calling card) → converts to A/B
Factor 1 Buyer commitment:     35/100   no signed brief yet — this is the asset we pitch to GET one
Factor 2 Payment mechanism:    60/100   target programs pay per-test/iteration + burn-rate retainer
Factor 3 Acceptance/perf risk: 55/100   structured programs exist, but a scaled hit is CPI-gated (~1%)
Factor 4 Demand evidence:      95/100   hybrid-casual puzzle = 60%+ of HC revenue, +100–114% YoY (cited)
Factor 5 Build feasibility:    98/100   built, runs, levels machine-verified solvable
--------------------------------------------------
RAS (weakest-link floor):      35%      ❌ below 90 as a SPECULATIVE build
```

## Verdict — and the honest exception
**As a spec build chasing a hit, Bolt Up scores 35% — it would FAIL the 90% gate.** That is the framework working correctly: no speculative prototype clears 90%.

We build it anyway, **once, deliberately, as the bootstrap calling card**, because:
1. It is cheap (~$2.2k, $0 asset spend) and lives in the **capped moonshot/bootstrap lane**, not core runway.
2. Its real ROI is **conversion**, not a sale: a working, differentiated hybrid-puzzle slice is the credential that lands a **burn-rate / pay-per-prototype relationship** (Azur covers monthly costs after 2–4 prototypes; Supersonic/Homa pay per test). *Those* relationships are where the ≥90%-assured income lives.

## How the NEXT prototype clears 90%
Once Bolt Up secures a program slot or a WFH/co-dev brief, the next prototype's scorecard flips:
```
Factor 1 Buyer commitment:     92/100   signed brief / accepted program slot + deposit
Factor 2 Payment mechanism:    93/100   escrowed milestones OR monthly burn-rate coverage
Factor 3 Acceptance/perf risk: 90/100   build-to-brief (we control the deliverable)
RAS floor:                     ≥90%     ✅ GREENLIGHT
```

## Walk-away terms (for deal-closer)
- **Burn-rate retainer:** do not accept below covered monthly cost + 15% margin.
- **Per-prototype/iteration:** floor of build cost ($4.4k) + $1.6k margin = **$6k**; never iterate for free.
- **Rev-share upside:** accept 50–55%-to-dev structures *as upside only* — never as the basis for greenlighting a build.

## KPI contribution
Adds 1 to "prototypes shipped"; counts as a **business-development asset**, not booked revenue, until a contract is signed.
