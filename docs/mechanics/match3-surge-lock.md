# Match-3 Lock Mechanic — "The Surge Lock"

*game-designer + game-psychologist + ux-designer · design spec only (no build) · theme-portable*

## The invention in one line
A lock that isn't dead weight you grind off — it's a **charged battery you pop for a payoff.** Removing it *feeds* the dopamine engine instead of just relieving friction. (Skin shown is electric to fit the SURGE universe; the mechanic is theme-portable — clamp ↔ ice ↔ chain ↔ rust.)

---

## 1. What the lock IS (rules)
- A **locked tile** is a normal coloured tile pinned by a crackling **clamp** that shows **charge pips** (1–3 little lightning bolts = layers).
- **It cannot be swapped or moved** by the player — the clamp holds it in place. (A locked tile reshapes the board; you route around it.)
- It is **not** removed by matching the locked tile itself (that's Candy Crush licorice — we do something fresher).

## 2. How the player REMOVES it — *discharge by adjacency*
- Make a match in any cell **orthogonally adjacent** to the clamp. Each adjacent match **strips one pip** — a spark visibly arcs from the cleared tiles into the clamp (clear cause→effect), one pip shatters with a "tink".
- When pips hit **0, the clamp BURSTS**:
  1. the tile is **freed** (becomes normal & swappable), and
  2. it **discharges** — fires a bolt to up to 2 neighbours, clearing them (a built-in mini-cascade) and **dumping charge into the Flow/Surge meter.**
- So clearing a lock is a *designed micro-peak*, not just relief. **Obstacle → reward delivery system.**

*Why adjacency (not "match the locked colour")?* It turns locks into a **spatial-planning** puzzle — set up matches NEXT to the clamp — which is more interesting than colour-targeting and keeps the board obstacle meaningful.

## 3. Escalation ladder (teach one at a time)
| Tier | Lock | What it adds |
|---|---|---|
| L1 | **Single clamp** (1 pip) | teaches "match beside it" |
| L2 | **Charged clamp** (2–3 pips) | a visible "almost cracking" final-pip state → anticipation |
| L3 | **Grounded clamp** (colour-keyed) | only discharges from an adjacent match of its *own* colour → planning |
| L4 | **Fused pair** | two clamps wired together; bursting one sends current down the wire and strips a pip from the other → chain-burst combos |
| L5 | **Overload clamp** (move-timer) | if not cleared in N moves it overloads (re-locks a neighbour / drops junk) → urgency + loss-aversion. Use sparingly; always telegraphed |

## 4. Special-piece interactions (power fantasy)
- **Line blast (match-4)** passing an adjacent cell = strips a pip per pass; sweep a row of clamps → a chain of pops.
- **Bomb (match-5)** adjacent = strips **all** pips at once (instant free + big discharge).
- **Colour bomb** on the clamp's colour = frees **every clamp of that colour at once → MEGA SURGE.**
These make special pieces feel *incredible* against locks, reinforcing the peaks players clip & share (the ad-creative hook).

## 5. UX / feel (ux-designer)
- **No dead taps:** trying to swap a locked tile → clamp jiggles + low buzz, so the player instantly learns it's pinned.
- **Telegraph:** clamp idles with a soft hum; each pip break = spark arc + bright flash + "tink". Pip count always readable.
- **Anticipation at last pip:** clamp strains, flickers faster, hum **rises in pitch** — a wind-up before the release.
- **The burst (release):** bolt-shower + ~150ms slow-mo + power-on chord + screenshake + the discharge cascade → straight into the Surge meter.
- **First-time teach:** first lock appears isolated, pulsing arrow on an adjacent cell, one-line tip: *"Match next to the clamp to discharge it!"*

## 6. Why it manufactures joy (game-psychologist)
- **Reframe:** standard blockers (ice/jelly) pay only *relief* when cleared. The Surge Lock pays a *positive* discharge → a dopamine hit, escalating.
- **Pips = a visible progress bar** → goal-gradient effect (players push harder as it nears 0).
- **Multi-pip strain + rising pitch = manufactured anticipation; the burst = release** — the same anticipation→release curve as the SURGE arc.
- **Special-piece clears = agency/mastery spikes** ("I'm a genius" moments).
- **Overload timer = tension** (loss-aversion), used sparingly so it motivates without souring.

## 7. Balancing / don't-break-it notes
- Never let a lock create a soft-lock (no-moves) state — every lock level must guarantee a discharge route.
- Don't over-use overload/spread (chocolate-spread fatigue is real frustration).
- Keep the adjacency rule and pip count unambiguous — readability first.

## 8. Self-QA (per the non-negotiable rules)
- **Assumptions:** "blocker-as-reward" feels better than a standard blocker; adjacency-discharge reads as intuitive, not fiddly.
- **Confidence it's a sound, buildable design:** **~85%** — it composes proven match-3 primitives (pip layers, adjacency clears, special-piece interactions) with one genuinely fresh twist (discharge-as-reward).
- **Confidence it actually lifts retention:** **unproven hypothesis (~50%)** until tested.
- **What would make it wrong:** players find adjacency fiddly; the discharge cascade makes boards too easy/random; the burst doesn't read.
- **Cheapest kill-test (before any build):** a paper/Figma mock + a 5-player comprehension test ("how do you remove this?") + one CPI A/B on the burst as ad creative.
