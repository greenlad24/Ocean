# PLAYTEST — "Bolt Up"

*owner: playtest-qa · build: prototypes/bolt-up/build/*

## Method
Two-part QA: (1) **automated** solvability proof of every level via `verify_levels.mjs` (a brute-force search modelling the rust-cascade); (2) **static design/UX review** against the GDD's magic moment. Human on-device retention playtest is the recommended next step before a buyer sends real CPI traffic (see "Buyer-readiness").

## Automated results ✅
- `node verify_levels.mjs` → **L1, L2, L3 all SOLVABLE** (states explored: 25 / 153 / 986).
- An earlier L3 was caught as **UNSOLVABLE** (rust deadlock: both starter colours trapped under rusted bolts) and redesigned so colour A is always free to trigger the first cascade. This is exactly the P0 the QA gate exists to catch — an unsolvable level in front of a buyer would have been fatal.
- JS syntax validated (`node --check`).

## Magic-moment verdict
**Lands (by design), pending feel-tuning on device.** The lock → screwshake → de-rust sparkle chain is implemented and is the intended dopamine beat. The rust mechanic converts a passive "tidy" loop into an active "unlock" loop — the differentiator vs. plain ball-sort.

## First-30-seconds report (cold player)
- L1 has no rust and 2 spare rods → teaches the core with near-zero friction. Good onboarding.
- Colour + hex-silhouette makes bolt identity instantly readable; the gold lock-ring makes "solved" unmistakable.
- Risk: a brand-new player may not immediately connect "I completed a rod" with "a rusted bolt freed." L2's first cascade needs to be visually loud (it is sparked) — confirm on device that the eye catches it.

## Bug list
- **P0:** none known (levels solvable; no crash paths in static review).
- **P1:** none blocking.
- **P2 (polish):** add SFX (currently silent); add a one-time tooltip the first time rust appears; subtle haptic on lock for mobile; confirm tap target width feels right at narrow rod counts (5–7 rods).

## Feel notes
- Hop animation is fast (0.16s) — reads snappy. Lock burst + shake gives weight.
- Recommend on-device tuning of shake magnitude and de-rust spark brightness; these are the two "perceived-value" levers.

## Buyer-readiness
**YES to demo / pitch as a vertical slice; NOT YET for live CPI spend.** It is ready to put in front of a publisher as a playable concept + hero loop. Before a publisher runs paid UA, the standard next step is a 20–50 person retention test to validate D1 (target ≥35%) and confirm the rust-chain reads as reward not friction (the GDD's named risk).

**The one thing to do first:** a short on-device retention playtest to settle the rust-as-reward question and tune the cascade's visual punch.
