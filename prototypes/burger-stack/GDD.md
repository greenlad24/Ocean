# GDD — "Burger Stack" (ordered-assembly)

*game-designer · ⚠️ spec/calling-card build under the standing >90% exception (gates RED, ~25–40% confidence)*

## Hook
A cooking puzzle: **read the customer's order, dig the ingredients out of a jumble, and stack the burger in the exact right order to serve them.**

## Core loop (ordered assembly)
- Each customer has a **recipe** shown on an order ticket: always **bottom bun → fillings → top bun**, in order. **Level 1 = bun, patty, bun.**
- Plates hold scrambled stacks of ingredients. Tap a plate to lift its **top** ingredient; tap another plate to set it down (onto a **matching** ingredient or an **empty** plate — buffering).
- Tap the **serving plate** to add an ingredient — but only if it's the **next** one the recipe needs. Wrong order won't stick.
- Complete the burger in order → **serve → coins**. Higher levels = longer recipes (cheese/lettuce/tomato, double patties) and **multiple customers** per level.

## The magic moment
Digging the last buried ingredient free, dropping it on in order, and the burger **completing → the customer lights up 😄** and the bell dings. Getting jammed with no moves → 😞.

## Graphics (colourblind-safe — explicit requirement)
Every ingredient has a **distinct silhouette**, not just colour:
- **bottom bun** flat-topped rounded base · **patty** thick dark bumpy slab · **cheese** square with drip points · **lettuce** frilly ruffle · **tomato** round slices · **top bun** tall dome with sesame seeds.
Shape alone distinguishes them, so it reads for colourblind players.

## Restaurant feel (explicit request)
The top of the screen is a **diner scene**: striped awning + window with sky, an "OPEN ★" sign, wall clock, a wooden **counter**, the **customer** seated behind it, a pinned **order ticket**, and the **serving plate** on the counter where the burger builds. The plates you dig from sit below the counter.

## Solvability & QA (QA-first, per studio rules)
The ordered-assembly puzzle is a new rule set, so it has a **new generator + BFS solver**; `verify_levels.mjs` fuzz-proves every generated level is solvable **before** the UI uses it (≤12 items/board). The same solver powers the **Hint** booster and a **headless solver-driven playthrough** in `smoke_test.mjs` (boots, builds, serves, wins — no exceptions).

## Carried over
Lives, daily streak, coins, diner-upgrade meta, boosters (Undo / Spare Plate / Hint), monetization (rewarded video, capped interstitials, IAP), 📊 publisher metrics, first-run straight-to-Level-1 onboarding (once, ever).

## Self-QA
- *Confidence it's a sound, solvable, on-theme design:* high (~85%, solver-verified).
- *Confidence it lifts retention / sells:* unproven (~40%) until a real playtest + CPI test.
- *What would make it wrong:* the dig-and-order puzzle feels fiddly on a phone; the order ticket isn't read; difficulty curve too steep. *Cheapest test:* 5-player "did you understand the order + did serving feel good?" + a CPI A/B.

## Exception note
Spec/calling-card build on founder instruction; gates remain RED. Does not change the >90% rule for any other prototype.
