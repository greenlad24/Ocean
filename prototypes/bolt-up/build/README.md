# Bolt Up — playable build

A zero-install, browser-playable hybrid-casual puzzle slice. Single self-contained file.

## Run it (any of these)
- **Easiest:** double-click `index.html` — it opens in your browser and plays. No server, no build step, no dependencies.
- **Mobile feel:** open the file in a mobile browser, or use your desktop browser's device-toolbar (portrait) — it's designed one-thumb portrait.
- **Local server (optional):** `python3 -m http.server` in this folder, then visit `http://localhost:8000`.

## How to play
Tap a rod to lift its top bolt, tap another rod to drop it. A bolt only lands on a matching colour (or an empty rod). Fill a rod with 4 matching bolts → it **locks** (gold ring + pop) and **de-rusts** a bolt on each neighbour. Sort every colour to win. 3 levels; level 2 introduces rust, level 3 is the full cascade.

## What's real vs stubbed
- **Real:** core sort mechanic, the rust-cascade twist, lift/drop/lock animations, particles, screenshake, win/stuck detection, the fail-offer overlay.
- **Stubbed:** the "$0.99 / Watch ad" buttons just grant a spare rod (no real ad/IAP SDK). No backend, no accounts, no analytics.

## QA
`node verify_levels.mjs` machine-proves all 3 levels are solvable (including the rust mechanic). Exit 0 = all good.
