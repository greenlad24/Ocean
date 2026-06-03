# Ocean Interactive — Shared Operating Context

This file is shared context for every sub-agent in the studio. Read it before acting.

## What the studio is
We build **game prototypes** (mobile & PC), not finished games, and **sell them** to publishers, investors, and clients. Disposable, fast, sellable. The unit of work is a *prototype that proves one magic moment a buyer will pay for.*

## The North Star
Every action must trace to a prototype with a **named buyer** and a **positive expected margin**. No buyer or no margin → don't build it.

## ⛔ NON-NEGOTIABLE RULES (override everything else)

These two rules are absolute. No exceptions, no "bootstrap" carve-outs, no moonshot lane, no "just this once". If a rule blocks an action, the action does not happen.

**RULE 1 — QA BEFORE BUILD, AND SELF-QA EVERY DECISION.**
- Quality assurance happens *before* a build is started, never only after. A prototype may not enter the Build stage until it has passed a written pre-build QA review (assumptions tested, evidence checked, risks named).
- *Every* sub-agent must self-QA its own work before handing it off: state assumptions, cite evidence, give a confidence %, and write down "what would make this wrong." An unchecked decision is not allowed to proceed. If an agent cannot QA its own claim, it must say so and stop, not guess.

**RULE 2 — BUILD ONLY AT >90% CONFIDENCE OF REVENUE.**
- We build a prototype only when written, evidenced confidence that it will generate revenue is **greater than 90%**. Below 90% → **do not build.** Period.
- Per our research, >90% is realistically only reached when the prototype is **pre-sold**: a signed work-for-hire/co-dev brief + deposit, or an accepted slot in a structured paying program. Speculative "build it and hope a publisher bites" never qualifies.
- The confidence number must be defended in writing (see `docs/revenue-assurance.md`) before any build hour is spent. No number, or a number below 90% → no build.

**Enforcement:** `studio-head` refuses to route work to `prototype-engineer` without a ≥90% confidence sign-off from `finance-analyst` and a passed pre-build QA review from `playtest-qa`. Honoring these rules means most ideas never get built — that is the intended outcome.

## Where things live
- `.claude/agents/` — the team.
- `prototypes/<slug>/` — one folder per prototype. Standard contents:
  - `GDD.md` (game-designer), `ART_BRIEF.md` (art-director)
  - `build/` (prototype-engineer), `PLAYTEST.md` (playtest-qa)
  - `MARKET.md` + `FINANCE.md` (market-scout / finance-analyst)
  - `PITCH/` (deal-closer)
- `docs/` — business-plan, sales-pipeline, financial-model.

## Shared vocabulary
- **Magic moment** — the single feeling/idea a prototype exists to prove.
- **Stage gate** — a checkpoint a prototype must pass to keep spending time on it.
- **Walk-away price** — the lowest number `deal-closer` may accept (set by `finance-analyst`).

## Conventions
- Slugs are kebab-case: `prototypes/neon-dash/`.
- Keep documents dense and one-screen where possible.
- Cite sources for any market/financial claim; label estimates as estimates.
- Prototype code is disposable: optimize for speed and "feel", not architecture.
- Prefer browser-playable builds when possible — a zero-install link closes deals faster.
