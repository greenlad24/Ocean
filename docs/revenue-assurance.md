# Ocean Interactive — Revenue Assurance Framework (the "90%+ rule")

> **Founder directive:** build prototypes only when there is **≥90% assurance of revenue**.
> This document turns that directive into a hard, testable gate. `finance-analyst` and `studio-head` enforce it.

## The uncomfortable truth this rule forces

You cannot get to 90% revenue assurance on a *speculative* prototype. Spec IP — build something cool, then hope a publisher buys it — is structurally a **5–20% hit-rate game**. No amount of polish moves a spec mobile hook or a spec Steam slice to 90%.

**90%+ assurance is only reachable when the prototype is effectively pre-sold** before we build it. That means our default operating model shifts to **contract-first / demand-first**:

> We do not build and then look for a buyer. We secure the buyer (or a structured paying program), *then* build.

This is a deliberate, profitable constraint. It trades lottery-ticket upside for a near-guaranteed paycheck per build. Per the **non-negotiable rules in CLAUDE.md, there is no moonshot lane and no exceptions**: if confidence isn't >90% in writing, we don't build — we sell first or we kill it. The studio builds Tier A work only.

## Revenue Assurance Score (RAS)

For every proposed prototype, `finance-analyst` scores **RAS = the probability the prototype is paid for at/above its walk-away price.** Greenlight only at **RAS ≥ 90%.**

RAS is built from five factors. Score each 0–100, then RAS = the **weighted product-style floor**: a single weak factor caps the whole score (revenue assurance is a chain — it's only as strong as its weakest link).

| # | Factor | What 90%+ looks like | What kills it |
|---|---|---|---|
| 1 | **Buyer commitment** (×weight: gatekeeper) | Signed contract / PO / a standing structured program we're accepted into | "A publisher might like it" = speculative |
| 2 | **Payment mechanism** | Upfront deposit + milestone payments, or guaranteed day rate | Pure post-launch rev-share with no advance |
| 3 | **Acceptance/performance risk** | Build-to-brief (we control the deliverable) | Gated on a CPI/marketability test we can fail |
| 4 | **Demand evidence** | Hard, recent market data backs the niche | Vibes / a trend that already peaked |
| 5 | **Build feasibility** | Magic moment is provably achievable in budget | Tech risk that could blow the cost side |

**Rule:** If Factor 1 (buyer commitment) is below 90, the prototype is NOT Tier A and the core studio does not build it. Full stop.

## The three revenue paths, ranked by real assurance

| Path | Realistic assurance | Why | Studio stance |
|---|---|---|---|
| **A. Work-for-hire / co-dev with signed contract + deposit** | **90–98%** | Payment is a contractual obligation; deposit de-risks cash; we build to a brief so there's no "test we can fail" | **PRIMARY — this is the studio's bread and butter** |
| **B. Structured publisher prototype-testing programs** (hyper/hybrid-casual CPI tests) | **30–60%** | Repeatable process and real money, BUT each build is gated on hitting a CPI/retention bar we can miss | **SECONDARY — only with a warm publisher relationship + portfolio approach to average out the hit rate** |
| **C. Spec IP sale / prototype-funding pitches** (Steam slices, publisher submissions) | **5–20%** | High variance, selective, no payment until someone says yes | **DO NOT BUILD — fails the >90% rule. Pitch only finished/owned assets, never a spec build** |

**Conclusion the data will sharpen, but the logic already dictates:** the 90% rule means **Path A is the engine of the company.** Path B is pursued only via a *standing* paying relationship (so the income is wage-like, not a gamble). Path C is **not a build path at all** under the non-negotiable rules — we never spend a build hour on it.

## How this changes our operating model

1. **Sell first, build second.** `market-scout` + `deal-closer` secure a signed brief or a program slot *before* `prototype-engineer` writes a line of code.
2. **Pipeline reorders:** Concept → **Secure buyer/contract (RAS gate)** → Design → Build → Deliver → Invoice. (See updated `sales-pipeline.md`.)
3. **Build capacity is sold like a service.** We market "we prototype your game idea, fast, fixed-bid" — that demand is real and contract-backed.
4. **QA gates the build.** Pre-build QA review (`playtest-qa`) + written >90% confidence (`finance-analyst`) are both required before a single build hour. No gates → no build. (There is no moonshot lane; that exception was removed by founder mandate.)

## RAS scorecard template (per prototype → `prototypes/<slug>/FINANCE.md`)

```
Prototype: <slug>
Revenue path: A / B / C
Factor 1 Buyer commitment:     __/100   evidence: <contract? program slot? email?>
Factor 2 Payment mechanism:    __/100   evidence: <deposit %, milestones>
Factor 3 Acceptance/perf risk: __/100   evidence: <build-to-brief? CPI-gated?>
Factor 4 Demand evidence:      __/100   evidence: <cited market data>
Factor 5 Build feasibility:    __/100   evidence: <scope vs budget>
--------------------------------------------------
RAS (weakest-link floor):      __%      GREENLIGHT if >= 90
Walk-away price: $____   Expected margin: $____
```

This framework is intentionally strict. Most ideas will fail it — that's the point. A failed RAS check is **cost avoided = profit**.
