# Cable Sort — playable build (premium)

Zero-install, browser-playable. The lead concept from `../CONCEPT.md`, built with premium design, meta progression, and monetization.

> ⚠️ Built under a **founder-authorized exception** to the >90% rule (see `../GATES.md`). Revenue confidence is ~25–40%, not >90%; this is a business-development / calling-card build, not a forecast hit.

## Run it
- **Easiest:** double-click `index.html` — opens and plays in any browser. No server, no dependencies. Progress saves to your browser (localStorage). Audio starts on first tap.
- **Mobile feel:** open on a phone or use the browser device toolbar in portrait.
- **Local server (optional):** `python3 -m http.server`, then `http://localhost:8000`.

## The loop
Untangle colour-coded cables: tap an outlet to lift its top plug, tap another to drop it (matching colour or empty). Fill an outlet with 4 matching plugs → it **powers on** (LED lights, cables snap straight + glow, power-on chord). Win → earn coins → spend them to **power up the neighborhood** (3 districts, 9 buildings). Daily streak + lives pace the sessions.

## What makes it "premium" (all code-drawn / synthesized — no asset files)
- Glossy gradient plugs, glowing bezier **cables**, panel shadows, animated LED power-on, particle bursts, screen shake, smooth easing.
- **Synthesized audio** via WebAudio (pick / drop / power-on chord / win arpeggio / coin) — no audio files. Mute toggle in the HUD (🔊).
- Cohesive dark-tech UI with gradients, soft shadows, and pop/fade transitions.

## Systems
- **Endless level generator**, difficulty-scaled, every board verified solvable (`verify_levels.mjs`).
- Neighborhood **renovation meta** (3 districts), coins, star ratings, lives (regen 1/10 min), daily streak, localStorage persistence.
- **Boosters:** Undo, Spare Outlet, Hint (inventory or watch a rewarded ad when empty).
- **Monetization (simulated):** rewarded video (double coins / continue / boosters / life / daily), interstitials (every 2nd level, capped, killed by Remove Ads), IAP store. **📊 publisher metrics** panel shows simulated ARPDAU / ads / IAP / retention.

## QA
- `node verify_levels.mjs` — fuzz-tests the generator across 100 levels; asserts **0 unsolvable** (run a few times; verified 300 levels clean).
- `node smoke_test.mjs` — runs the real game JS against a DOM/audio shim; **15/15 interaction paths** pass with no exceptions.
