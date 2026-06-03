# Ocean Interactive — Shared Operating Context

This file is shared context for every sub-agent in the studio. Read it before acting.

## What the studio is
We build **game prototypes** (mobile & PC), not finished games, and **sell them** to publishers, investors, and clients. Disposable, fast, sellable. The unit of work is a *prototype that proves one magic moment a buyer will pay for.*

## The North Star
Every action must trace to a prototype with a **named buyer** and a **positive expected margin**. No buyer or no margin → don't build it.

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
