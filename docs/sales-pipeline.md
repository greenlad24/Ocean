# Ocean Interactive — Sales Pipeline & Stage Gates

Every prototype moves through these stages. A prototype may only advance by passing the gate. `studio-head` enforces this; `finance-analyst` owns the money gates.

## Stages

| # | Stage | Owner | Exit gate (must pass to advance) |
|---|---|---|---|
| 0 | **Spark** | game-designer | A one-line hook + a named likely buyer type |
| 1 | **Concept** | market-scout + finance-analyst | A named buyer *segment* exists AND expected value > 3× build cost (CONCEPT GATE) |
| 2 | **Design** | game-designer | One-page GDD with a single, testable magic moment |
| 3 | **Vertical Slice** | prototype-engineer + art-director | Build runs; magic moment is implemented; hero shot exists |
| 4 | **Playtested** | playtest-qa | Magic moment lands; P0 bugs cleared; marked buyer-ready |
| 5 | **Priced** | finance-analyst | Named buyers + price anchor → walk-away price set (SLICE GATE) |
| 6 | **Pitched** | deal-closer | Deck + sell sheet + outreach sent to ≥5 named buyers |
| 7 | **Negotiation** | deal-closer + finance-analyst | Live offer at or above walk-away price |
| 8 | **Closed–Won / Closed–Lost** | deal-closer | Signed deal & paid, OR logged loss with learnings |

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
