# GATES — confidence + pre-build QA (must pass BEFORE a build hour)

*owners: finance-analyst (>90% gate) + playtest-qa (pre-build QA) · per CLAUDE.md non-negotiable rules*

## Revenue-confidence gate (finance-analyst)

**Current state, today, with no buyer committed:**
```
Confidence a spec-built sort-fork generates revenue ≥ walk-away price:  ~25–40%
Verdict: ❌ NO-BUILD. Fails the >90% rule. No exceptions.
```

**What specifically moves it to >90% (and unlocks a build):**
| Trigger (must be in writing) | Resulting confidence |
|---|---|
| Signed co-dev / WFH brief + deposit to build forks to a buyer's spec | **~92–96%** ✅ |
| Signed burn-rate / pay-per-prototype agreement (e.g., Azur cadence) | **~90%** ✅ (income is the relationship, not one hit) |
| A buyer's written commitment to test + pay-per-test, with our build cost pre-covered | **~90%** ✅ |
| Only a positive fake-door CPI signal, but no payer committed | ~50–60% ❌ still NO-BUILD |
| "A publisher will probably like it" | ~30% ❌ NO-BUILD |

**Build cost to defend the floor (when greenlit):** a single fork ≈ 2–4 wks; est. ~60–100 hrs × $60 = **$3.6k–$6k**, $0 asset spend. Walk-away = build cost + margin.

**Self-QA (finance-analyst):** the 90% number is defended by a *committed payer*, not by trend enthusiasm. If I ever find myself writing an "exception" to greenlight a sub-90% build, that is the rule working — the answer is NO-GO. Confidence in *this* assessment: high; the binary (committed payer y/n) is unambiguous.

## Pre-build QA gate (playtest-qa) — required before `prototype-engineer` starts
Sign-off only if ALL pass:
- [ ] **Skin whitespace confirmed** — `market-scout` verified the chosen skin isn't already shipped/saturated (store scan, dated).
- [ ] **Magic moment is testable** — the skin's resolution is defined as a measurable "is it more satisfying than plain sort?" check (e.g., a fake-door creative test or a 10-person clip test).
- [ ] **Cheapest kill-test identified** — what could invalidate it *before* a full build, and it's been run or scheduled.
- [ ] **CPI assumption sourced** — target CPI/IPM benchmark cited, not guessed.
- [ ] **>90% gate already GREEN** — a committed payer exists in writing.

No sign-off, or the confidence gate is red → **no build.**

**Self-QA (playtest-qa):** this review checks the *concept and its commitment*, before code — QA-first as mandated. I will not sign off to be agreeable; a missing payer or an untested magic moment is an automatic hold. I separated "broken/blocking" (no payer, no whitespace) from "preference" — all the boxes above are blocking.

---

### Status: 🔴 BOTH GATES RED — build not authorised. Next action is `deal-closer` + `market-scout` securing a committed payer, not engineering.
