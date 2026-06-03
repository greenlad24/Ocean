# Ocean Interactive — Sales Pipeline & Stage Gates

Every prototype moves through these stages. A prototype may only advance by passing the gate. `studio-head` enforces this; `finance-analyst` owns the money gates.

## Operating model: SELL FIRST, BUILD SECOND

Per the **90%+ revenue-assurance rule** (`docs/revenue-assurance.md`), the core studio does **not** build speculatively. We secure a buyer — a signed contract, PO, or an accepted slot in a structured paying program — **before** any build work starts. The **RAS GATE** (Revenue Assurance Score ≥ 90%) sits *before* engineering, not after.

## Stages (contract-first order)

| # | Stage | Owner | Exit gate (must pass to advance) |
|---|---|---|---|
| 0 | **Spark** | game-designer | A one-line hook + a named likely buyer type |
| 1 | **Demand check** | market-scout | Hard market data shows the niche has real, current demand (Factor 4) |
| 2 | **Secure buyer** | deal-closer + market-scout | A specific buyer is engaged: signed WFH/co-dev brief, PO, or accepted program slot |
| 3 | **🚦 RAS GATE** | finance-analyst | **Revenue Assurance Score ≥ 90%** AND walk-away price set. Below 90 → moonshot lane or kill |
| 4 | **Design** | game-designer | One-page GDD with a single, testable magic moment matched to the brief |
| 5 | **Build** | prototype-engineer + art-director | Build runs; magic moment implemented; hero shot exists |
| 6 | **Playtested** | playtest-qa | Magic moment lands; P0 bugs cleared; delivery-ready |
| 7 | **Deliver & invoice** | deal-closer + finance-analyst | Buyer accepts deliverable; milestone/final payment invoiced & collected |
| 8 | **Closed–Won / Closed–Lost** | deal-closer | Paid in full, OR logged loss with learnings |

### Moonshot lane (Path C, capped ≤15% capacity)
Spec IP prototypes that *can't* clear the RAS gate may still be built **only** when runway > 3 months, funded from profits not reserves. They follow the original build-then-pitch order and carry an explicit "this is a bet" label. They are never allowed to starve a Path A contract.

## Customer acquisition channels
- **Publisher submission portals** — most mobile/indie publishers have "submit your game" pages; fastest repeatable inbound.
- **Hyper-casual testing programs** — publishers run CPI tests on prototypes; built-in buying process.
- **Pitch events & showcases** — Day of the Devs, GDC pitch sessions, Pocket Gamer Connects, etc.
- **Direct outreach** — tailored cold emails to named scouts (deal-closer + market-scout).
- **Work-for-hire inbound** — list capability publicly; brands/studios brief us.

## Pipeline health (kept current by studio-head)
Track every prototype as a row:

| Prototype | Stage | Target buyer(s) | Walk-away $ | Expected value | Next action / owner |
|---|---|---|---|---|---|
| _(example)_ neon-dash | 4 Playtested | Voodoo, Homa | TBD | $X × p | Set price → finance-analyst |

## Rules of thumb
- Kill fast: a prototype stuck >2 weeks at one stage with no progress is a NO-GO.
- Never advance past Slice without a named buyer and a price anchor.
- Always be working the next touch on any open opportunity — silence kills deals.
