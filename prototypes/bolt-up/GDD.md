# GDD — "Bolt Up" (working title)

*One-page Game Design Document · owner: game-designer · niche: hybrid-casual puzzle (see docs/niche-research-2026.md)*

## Hook
A satisfying workshop sort-puzzle where you unscrew tangled colored bolts onto matching rods — with a **rust-chain twist**: completing one rod de-rusts bolts on its neighbours, setting off a cascade of "unlocks". *"Ball-sort, but every solve pops the next one loose."*

## Core loop (15–30s)
1. Tap a rod → its top bolt lifts.
2. Tap another rod → the bolt drops onto it (legal only if that rod is empty or its top bolt matches colour, and isn't full).
3. Fill a rod with 4 matching bolts → it **LOCKS** with a clunk-pop (the dopamine).
4. Each lock **de-rusts** the top rusted bolt on neighbouring rods → new moves open → chain.
5. Sort every colour onto its own rod to win.

## The magic moment (the one thing the prototype must prove)
**The lock-and-cascade:** that physical *clunk*, screwshake, and the spark of an adjacent rusted bolt breaking free — the feeling that one good move pays off two more. If this doesn't feel great, nothing else matters.

## Platform & controls
Mobile-first (one-thumb tap-tap), browser-playable for zero-install buyer demos. Portrait orientation.

## Comparables
- **Screwdom** (iKame, ~$29M/quarter) and **Color Block Jam** (Rollic, ~$33M/quarter) — proven screw/sort demand.
- **Ball Sort / Water Sort** — billions of installs; our core is this family.
- **We differ by:** the **rust-chain meta** — sorting isn't just tidying, it actively unlocks the board, adding a strategy/combo layer that pure sort games lack and that seeds a progression/booster economy.

## Meta-progression layer (the retention engine — BUILT in v2)
A core loop alone has no D1/D7 retention, so the slice now ships the full hybrid-casual meta:
- **Endless solvable levels** — runtime generator, difficulty-scaled (colours 3→5, rust scaling), every board machine-verified solvable. Replaces the 3 fixed levels.
- **"Restore the Workshop" renovation meta** — the proven puzzle-meta pattern (Royal Match / Homescapes lineage). Clear levels → earn coins → spend coins restoring workshop stations across 3 chapters. The long-term goal that pulls players back.
- **Lives / energy** — 5 lives, lose one on a failed level, regen 1 / 10 min. Paces sessions and drives refill monetization.
- **Daily-reward streak** — escalating coin rewards; the core D1/D7 return hook.
- **Star rating** (moves vs par) + **best-stars** persistence.
- **Persistence** via localStorage — progress, coins, lives, streak all survive between sessions (retention is meaningless without this).

## Monetization — wired end-to-end (simulated SDKs, real surfaces)
- **Rewarded video:** double level coins, free spare-rod continue (the 19–25%-of-IAP fail-offer), free booster when inventory is empty, +1 life refill, double daily reward.
- **Interstitial:** between levels, frequency-capped (every 2nd level), suppressed by Remove Ads.
- **IAP store:** coin packs, booster bundle, refill lives, **Remove Ads**, one-time **Starter Pack**.
- **Publisher metrics panel** (📊): live simulated ARPDAU, ads watched, IAP count, retention day — so a buyer reads the monetization surface at a glance.

## Scope guardrails (still NOT in the prototype)
No real ad/IAP SDK (mediation is simulated client-side), no backend/accounts, no server economy, no sound-design pass, no art beyond clean primitives + polish. Workshop is 3 chapters (9 tasks) as a vertical slice of the meta.

## Target metrics this concept is designed to hit
D1 ≥ 35–45%, D7 ≈ 20%, D30 ≥ 10%; test CPI sub-$2.50 (Tier 2/3). Sort puzzles are highly ad-creative-friendly (the "oddly satisfying" lock clip → high IPM).

## Risk (the one assumption that kills it)
That the rust-chain adds *satisfying* depth rather than *friction*. If players read rust as "arbitrary lock that blocks me" instead of "reward that cascades", cut rust and ship the clean sort core. The prototype exists to settle exactly this question.
