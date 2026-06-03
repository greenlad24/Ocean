# GDD — "Burger Stack"

*game-designer · sibling of Cable Sort (same engine) · ⚠️ spec/calling-card build under the standing >90% exception (gates RED, ~25–40% confidence) — see note below*

## Hook
The satisfying sort puzzle, reskinned as a diner: **prep the ingredients, build the perfect burger, make the customer smile.**

## Core loop (same rules as Cable Sort)
Tap a plate to lift its top ingredient → tap another to drop it (only onto the **same ingredient**, or an empty plate). Gather **4 of the same** ingredient and it's **prepped** → it stacks onto the burger at the top, in correct recipe order.

## The magic moment
Prep the last ingredient → the kitchen **assembles the whole burger in front of you**, layer by layer (drop + thud + sizzle), then the **customer reacts**: a perfect burger → 😄 happy; getting stuck → 😞 sad.

## The design wrinkle (and how it's resolved)
A sort puzzle completes a container when it holds 4 of the **same** item; a burger is **different** ingredients in order. Resolution: plates still sort same-on-same (proven, solvable), but each *prepped ingredient becomes one burger layer*, placed at its correct recipe position regardless of prep order. So the **exact same rules + verified-solvable generator** deliver "all ingredients stacked into a burger." Win = all ingredients prepped (which equals the level being fully sorted).

## Ingredients (recipe order, bottom→top)
bottom bun → patty → cheese → lettuce → tomato → top bun. A level with 3 ingredient types = a 3-layer burger; 6 types = the full stack.

## Feedback (happy/sad customer)
A customer face sits beside the burger: **sad** before you start, **content** as layers go on, **happy** when served. Failing a level (stuck → give up) shows the disappointed customer.

## Carried over from Cable Sort (tested)
Endless solvable generator · sealed-when-complete rule · combo/“sizzle” momentum + 🔥 combo bonus · lives, daily streak, coins, diner-upgrade meta · boosters (Undo / Spare Plate / Hint) · monetization (rewarded video, capped interstitials, IAP) · 📊 publisher metrics · first-run onboarding (once, ever).

## Self-QA
- *Assumption:* "sort same → stack into a burger" reads intuitively and the assembly finale feels rewarding. *Confidence it's a sound, buildable design:* high (~85%, reuses a proven engine). *Confidence it lifts retention/sells:* unproven (~40%) until a real playtest + CPI test.
- *What would make it wrong:* players expect to stack *different* ingredients directly and find "sort 4 same" off-theme; the finale drags. *Cheapest kill-test:* 5-player "did you understand the goal, did serving feel good?" + a CPI A/B of the assembly clip.

## Exception note
This is a **spec build**, not a >90% greenlit one. Built on founder instruction as a calling-card under the standing exception; gates remain RED. It does not change the rule for any other prototype.
