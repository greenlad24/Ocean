# "Junction Trays" — cables fall into boxes that power the other side

*game-designer + game-psychologist + ux-designer · developing the founder's idea · design only, no build*

## Your idea, restated
Cables fall into **trays / boxes**; filling a box **unlocks something on the other side** of the board. The goal becomes *deliver cables to power the circuit*, not just *sort everything*.

## The developed mechanic
The level is a **circuit with two sides**:
- **Supply side** — tangled outlets full of coloured plugs (our existing sort core).
- **Junction trays** — a row of boxes, each labelled with a colour + capacity (e.g. `4× blue`).
- **The other side** — gated/caged stuff that's *powered on* as trays fill.

**Loop:** sort a plug → it **drops into its matching tray** (satisfying fall + clink + stack) → a tray fills and **seals** → current runs across a wire and **unlocks one thing on the other side**:
- a **gate** opens → a fresh batch of cables drips in (paced content), or
- a **caged outlet** (a Surge Lock) is freed → you can now use it, or
- a **device** powers on (coins + visual payoff), or
- the **main breaker** flips → all trays filled = **level powered = win.**

So you're not tidying — you're **building a working circuit, one delivery at a time.**

## Making it a *decision*, not just an animation
- A plug only drops into a **matching** tray (or an open one); trays have capacity.
- Limited trays → if nothing fits, you're cornered → **"add a junction" (+1 tray)** = the same proven fail-offer as the sort "stuck" state, but more frequent and more *felt*.
- Mis-routing wastes a slot → real planning tension.

## Why this is better (honest scorecard)
| Dimension | Plain sort | Junction trays |
|---|---|---|
| **Goal clarity** | "sort it all" (abstract) | **"fill the box, power the gate" (concrete, casual-friendly → better CPI/onboarding)** |
| **Reveal / retention** | none mid-level | **every filled tray unlocks the other side = repeated anticipation→reveal + content drip** |
| **Ad-creative hook** | a rod completes | **cables *falling into place* + a side *lighting up* — "oddly satisfying" + cause-effect, both proven install hooks** |
| **Agency / mastery** | tidy | **"I powered that" — visible cause→effect across the board** |
| **Originality** | sort clone | the *power-the-other-side circuit* framing is genuinely fresher than generic order boxes |

## Fits our existing inventions perfectly
- **Surge Lock = the caged thing on the other side.** Filling a tray sends current that **discharges a clamp** → frees an outlet/reward. The lock and the unlock are now the *same system*.
- **Surge meter:** fill trays in quick succession → charge → MEGA SURGE (slow-mo, the other side floods with light). The anticipation→release arc now rides the delivery loop.
- **Peak-end:** the final tray flips the main breaker → whole circuit lights = the level's climax.

## Honest risks
- **Readability on a phone.** Two sides + gravity + sorting can get busy. Must stay legible — likely show the "other side" as a compact powered strip/top bar, not a full second board.
- **Genre drift toward order-fulfillment** (Match Factory / Goods Sort fill-the-order space) — proven but competitive. The *circuit/power* framing is our differentiator; keep it front-and-centre.
- **Risk it's cosmetic.** The tray must impose real constraints (capacity, mis-route cost) or it's just animation.

## Self-QA
- **Assumptions:** concrete "fill the box → power the gate" goals out-convert abstract sort; the reveal loop lifts session length; falling-cables reads as satisfying.
- **Confidence it's a better *core* than plain sort:** **~70%** — it adds goal clarity, a reveal loop, and a stronger ad hook, and unifies our lock/surge systems.
- **Confidence it's a *winning* commercial game:** **~35%** — still needs premium feel + a real CPI test; readability is the make-or-break.
- **What would make it wrong:** the two-sided board overwhelms a phone screen; the delivery loop feels like busywork; the genre's past peak.
- **Cheapest kill-test (before code):** a click-through mock of one circuit (3 trays → 3 unlocks) + a 5-player "do you get the goal in 10s, does filling a box feel good?" test + a CPI A/B of a "falling cables → side lights up" clip.
