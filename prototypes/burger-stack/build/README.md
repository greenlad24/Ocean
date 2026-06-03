# Burger Stack — playable build (ordered assembly)

Zero-install, browser-playable diner puzzle: read the order, stack the burger in the right order, serve the customer.

> ⚠️ Spec / calling-card build under the standing **>90% exception** (gates RED, ~25–40% confidence) — see `../GDD.md`.

## Run it
- **Double-click `index.html`** — plays in any browser, no server. Progress saves locally. Audio on first tap; 🔊 to mute.
- **First launch** drops you straight into **Level 1** with a one-time onboarding (shown once, ever). `📊 → Reset save`, then reload, replays it.

## How to play
- The **order ticket** (top-left) shows the customer's burger: bottom bun first → top bun last. **Level 1 = bun, patty, bun.**
- Tap a **plate** to lift its top ingredient; tap another plate to set it down (matching ingredient, or an empty plate = a buffer).
- Tap the **serving plate** (on the counter) to add the ingredient — only if it's the **next** the order needs.
- Build the burger in order → **serve → coins → 😄**. Get jammed → **😞** (grab a Spare Plate to continue).

## What's in it (your requests)
- **Ordered assembly** — the customer wants a specific burger; only the correct order serves.
- **Restaurant scene** at the top — awning, window, OPEN sign, clock, counter, the seated **customer**, the pinned **order ticket**, and the **serving plate**.
- **Colourblind-safe ingredients** — each has a **distinct shape** (bun base, bumpy patty, dripping cheese, frilly lettuce, round tomato, sesame top bun), not just colour.

## Systems (carried over)
Endless **solver-verified** levels · lives · daily streak · coins · diner-upgrade meta · boosters (Undo / Spare Plate / Hint — Hint uses the real solver) · monetization (rewarded video, capped interstitials, IAP) · 📊 publisher metrics.

## QA
- `node verify_levels.mjs` — fuzz-proves the ordered-assembly generator is **always solvable** (BFS solver), ≤12 items/board.
- `node smoke_test.mjs` — real game JS on a DOM/audio shim, **3 scenarios / 16 checks**: new-player onboarding + auto Level 1, returning-player menu + home-phase null-guard, and a **solver-driven full playthrough → serve → win**. No exceptions.
- Still worth a real-browser look for feel/layout (headless can't judge readability).
