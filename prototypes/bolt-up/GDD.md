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

## Scope guardrails (NOT in the prototype)
No accounts, no real ads/IAP SDK (stubbed), no backend, no level editor, no sound-design pass beyond placeholder blips, no art beyond clean primitives + one hero polish pass. 3 hand-built levels only.

## Monetization (stubbed, but designed in — this is what publishers test)
- **Fail offer** ("+1 Spare Rod") on the stuck state — the documented 19–25%-of-IAP hybrid-casual driver.
- **Rewarded booster** ("De-Rust") — opt-in ad moment.
- Meta hook: rust-chain naturally extends into a level-progression + booster economy.

## Target metrics this concept is designed to hit
D1 ≥ 35–45%, D7 ≈ 20%, D30 ≥ 10%; test CPI sub-$2.50 (Tier 2/3). Sort puzzles are highly ad-creative-friendly (the "oddly satisfying" lock clip → high IPM).

## Risk (the one assumption that kills it)
That the rust-chain adds *satisfying* depth rather than *friction*. If players read rust as "arbitrary lock that blocks me" instead of "reward that cascades", cut rust and ship the clean sort core. The prototype exists to settle exactly this question.
