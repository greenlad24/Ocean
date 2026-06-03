# Cable Sort: SURGE — playable build

Zero-install, browser-playable. The lead concept, **rebuilt around an engineered dopamine arc** (see `../JOY.md`) so it isn't just a flat sort clone.

> ⚠️ Built under a **founder-authorized exception** to the >90% rule (see `../GATES.md`). Revenue confidence ~25–40%, not >90% — a calling-card build, not a forecast hit.

## Run it
- **Double-click `index.html`** — plays in any browser, no server. Progress saves locally. Audio starts on first tap; 🔊 to mute.
- Mobile feel: open on a phone or use the browser device toolbar (portrait).
- **First launch** drops you straight into **Level 1** (no menu) with a one-time **5-step onboarding** that teaches the first moves. It is shown **once, ever** (a saved `onboarded` flag) — returning players go to the menu. (`📊 → Reset save`, then reload, replays it.)

## The USP (why this isn't v1)
**"Untangle the chaos — feel the SURGE."** Plain sort puzzles are emotionally flat. This one builds an **anticipation→release** curve: chaining good moves charges a **Flow meter** (rising pitch, brightening board), and clearing outlets in quick succession detonates a **Surge** — a slow-mo, screen-filling, coin-showering peak. That escalation is the differentiator and the ad-creative hook.

## Engineered-joy systems (each maps to a principle in JOY.md)
- **Feedback on every input** — pick / drop / invalid each get distinct sound + motion (no dead taps).
- **Flow meter** — momentum charges it; audio pitch + colour intensity rise with it (manufactured anticipation).
- **Combo → SURGE** — fast consecutive completions chain; ×2 = Surge, ×3+ = MEGA SURGE (bigger flash, ascending arpeggio, bonus coins, brief slow-mo).
- **Telegraph** — outlets "charge up" ~0.24s before completing, so every release has a wind-up.
- **Near-win tension** — vignette + low pulse when one outlet remains, resolved by the final clear (Zeigarnik).
- **Peak-end win** — every level ends on a climax + a **variable bonus** (sometimes ×2/×3) — surprise reward.
- **Goal-gradient meta** — "1 to light up the district!" messaging near completion.

- **Junction grid (deliver → power the other side)** — completing an outlet **ships its plugs up into a junction box** that **powers a device on the grid above**. The goal is reframed as "POWER THE GRID  N/N": a concrete objective + a per-completion reveal + cause→effect agency. Completed outlets seal (can't be unplugged); solver kept in sync so levels stay provably solvable.

## Underlying systems (carried over, tested)
Endless solvable generator · "power up the neighborhood" renovation meta (3 districts) · coins, stars, lives, daily streak, persistence · boosters (Undo / Spare Outlet / Hint) · monetization (rewarded video, capped interstitials, IAP store) · 📊 publisher metrics panel (now also tracks **surges triggered** — the engagement signal to A/B vs. flat sort).

## QA
- `node verify_levels.mjs` — generator fuzz, **0 unsolvable** across 100+ levels.
- `node smoke_test.mjs` — real game JS on a DOM/audio shim across **both boot paths** (new-player onboarding + auto Level 1, and returning-player menu incl. the home-phase null-guard regression) — **16/16 checks, no exceptions**.

## Honest status
The joy systems are grounded in established design psychology (Tetris/match-3 cascades, ASMR puzzles, peak-end rule), but "this feels good / lifts retention" is a **hypothesis** until a real on-device playtest + a CPI A/B on the Surge ad creative. See JOY.md self-QA.
