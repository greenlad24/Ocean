# 🌊 Ocean Interactive

**A lean studio that builds mobile & PC game *prototypes* and sells them to the right customers.**

We don't ship finished games. We prove *one* compelling idea per prototype — fast and cheap — and sell or license it to publishers, investors, and clients who pay for proven concepts. The business model is **portfolio throughput**: many small, cheap, sellable prototypes beat one expensive bet.

## The team (Claude Code sub-agents)

Each role below is a real, invokable sub-agent in `.claude/agents/`. Invoke one directly, or let **`studio-head`** orchestrate the whole pipeline.

| Agent | Role | Owns |
|---|---|---|
| `studio-head` | Executive Producer / Orchestrator | Routes work, enforces stage gates, protects margin |
| `game-designer` | Creative Director | Concepts, core loops, one-page GDDs |
| `prototype-engineer` | Prototype Engineer | Playable vertical slices (mobile/PC/web) |
| `art-director` | Art & UX Lead | Visual identity, hero shot, asset plan |
| `playtest-qa` | Playtest & QA Lead | Validates the magic moment, buyer-readiness |
| `market-scout` | Market & BizIntel | *Who* buys this and at what price |
| `deal-closer` | Sales & BizDev | Decks, sell sheets, outreach, closing the deal |
| `finance-analyst` | Acting CFO | Unit economics, margin gates, "does this make money?" |

## How a prototype flows (and how money happens)

```
 idea
  │
  ▼
[market-scout]  → is there a buyer? ──no──► kill it
  │ yes
  ▼
[game-designer] → one-page GDD (the magic moment)
  │
  ▼
[finance-analyst] CONCEPT GATE → expected value > 3× build cost? ──no──► kill it
  │ yes
  ▼
[prototype-engineer] + [art-director] → playable slice + hero shot
  │
  ▼
[playtest-qa] → does the magic moment land? buyer-ready?
  │
  ▼
[finance-analyst] SLICE GATE → recompute margin with real buyer + price
  │
  ▼
[deal-closer] → deck + outreach to named buyers → SALE / LICENSE / WFH
  │
  ▼
💰  revenue → funds the next 3 prototypes
```

## Make money three ways
1. **Outright sale** of the prototype/IP — clean cash for runway.
2. **License / co-development** — advance + royalties on high-potential IP.
3. **Work-for-hire** — build prototypes to a client's brief at a day rate (steady cash that funds 1 & 2).

See `docs/business-plan.md`, `docs/sales-pipeline.md`, and `docs/financial-model.md`.

## Quick start
Ask the studio to spin up a prototype, e.g.:
> "Use **studio-head** to take a one-button mobile arcade game from concept to a sale-ready pitch."

Each prototype lives in `prototypes/<slug>/` with its GDD, art brief, build, playtest, market analysis, and pitch.
