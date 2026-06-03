# Burger Stack — playable build

Zero-install, browser-playable. Cable Sort's proven engine, reskinned as a burger-building diner game.

> ⚠️ Spec / calling-card build under the standing **>90% exception** (gates RED, ~25–40% confidence) — see `../GDD.md`.

## Run it
- **Double-click `index.html`** — plays in any browser, no server. Progress saves locally. Audio on first tap; 🔊 to mute.
- **First launch** drops you straight into **Level 1** with a one-time onboarding (shown once, ever). `📊 → Reset save`, then reload, replays it.

## How to play
Tap a plate to lift its top ingredient, tap another to drop it on a **matching** ingredient (or an empty plate). Gather **4 of the same** → it's **prepped** and stacks onto the burger (top of screen) in recipe order. Prep every ingredient → **the burger assembles in front of you**, then a **happy customer 😄** is served. Get stuck → **sad customer 😞**.

## What's special
- **End-of-level assembly animation** — when you solve it, the burger resets and **rebuilds layer-by-layer** (drop + thud + sizzle) before the result is revealed.
- **Customer mood** — a face beside the burger goes sad → content → happy as the burger comes together.
- Code-drawn ingredients (buns/patty/cheese/lettuce/tomato), synthesized audio — no asset files.

## Systems (carried over, tested)
Endless solvable generator · sealed-when-complete plates · combo/“sizzle” momentum + 🔥 combo bonus · lives, daily streak, coins, diner-upgrade meta · boosters (Undo / Spare Plate / Hint) · monetization (rewarded video, capped interstitials, IAP store) · 📊 publisher metrics.

## QA
- `node verify_levels.mjs` — generator fuzz, **0 unsolvable** across 100+ levels (same engine as Cable Sort).
- `node smoke_test.mjs` — real game JS on a DOM/audio shim, **both boot paths** (new-player onboarding + returning-player menu incl. home-phase null-guard): **16/16, no exceptions**.
- *Not yet covered headlessly:* the end-of-level **assembly finale** (can't force a level-solve from the shim) — confirm it in a real browser.
