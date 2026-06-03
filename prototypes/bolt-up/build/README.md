# Bolt Up — playable build (v2: full meta loop)

A zero-install, browser-playable hybrid-casual puzzle with a complete meta-progression + monetization loop. Single self-contained file.

## Run it
- **Easiest:** double-click `index.html` — opens and plays in any browser. No server, no build step, no dependencies. Progress saves to your browser (localStorage).
- **Mobile feel:** open on a phone, or use the browser device-toolbar in portrait. One-thumb design.
- **Local server (optional):** `python3 -m http.server`, then visit `http://localhost:8000`.

## The loop
1. **Play** a level from the Workshop home screen (costs nothing; failing costs 1 ❤️).
2. Tap a rod to lift its top bolt, tap another to drop it. Match colours; fill a rod with 4 to **lock** it (gold ring + pop) and **de-rust** a bolt on each neighbour.
3. Win → earn 🪙 (more for fewer moves / 3 stars). Optionally watch an ad to **double** it.
4. Spend 🪙 in the Workshop to **restore stations** across 3 chapters — the long-term goal.
5. Come back daily for an escalating **streak reward**. Run out of ❤️ → wait for regen or refill.

## Systems in the build
- **Endless level generator** (difficulty-scaled, rust-scaled) — every board verified solvable at generation time by the embedded solver.
- **Workshop renovation meta** (3 chapters / 9 tasks), **lives/energy** (regen 1/10 min), **daily streak**, **star ratings**, **localStorage persistence**.
- **Boosters:** Undo, De-Rust, Spare Rod (use inventory or watch a rewarded ad when empty).
- **Monetization (simulated):** rewarded video (double coins / continue / boosters / life / daily), interstitials (every 2nd level, capped, killed by Remove Ads), and an **IAP store** (coin packs, booster bundle, refill lives, Remove Ads, Starter Pack).
- **📊 Publisher metrics panel** — live simulated ARPDAU, ad counts, IAP count, retention day, workshop progress. (📊 also has "Reset save" to demo the new-player experience.)

## What's real vs stubbed
- **Real:** all gameplay, the meta economy, progression, persistence, lives/daily timers, the full ad/IAP *surface* and event accounting.
- **Stubbed:** ad networks & store billing are simulated client-side (a fake "ad" overlay; purchases always succeed). No backend, no accounts, no analytics SDK.

## QA
- `node verify_levels.mjs` — fuzz-tests the generator across 80 difficulty levels; asserts **zero unsolvable boards** (run it a few times).
- Headless smoke test (`/tmp/smoke.mjs` during dev) exercised boot, daily, play, moves, all boosters, win, shop/IAP, out-of-lives, and metrics with no exceptions.
