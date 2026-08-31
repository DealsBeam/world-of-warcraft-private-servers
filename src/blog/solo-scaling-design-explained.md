---
title: "Solo Scaling Design, Explained"
date: 2026-08-30
heroImage: /images/hero-4.jpeg
category: explainers
summary: "Why solo-friendly servers — TheraWoW, OnlyFunsWoW, Hellgarve, Warstorm — scale dungeons and raids for one player, what it breaks, and why AI playerbots changed the design space."
---

Solo is the fastest-growing way to play private WoW — and the hardest to balance without making grouping feel pointless.

## Two schools: scaling vs. bots

| Approach | How it works | Example servers | Feels like | Tradeoff |
|---|---|---|---|---|
| **Stat scaling** | Multiply your stats or divide boss stats so one player = five. TheraWoW scales dungeons/raids for 1-5; Hellgarve Legion solocraft scales artifacts/XP 1-3×. | `TheraWoW` (WotLK scalable), `OnlyFunsWoW` (WotLK scaled raids), `Hellgarve` (Legion artifacts) | You are the raid | Loot inflation, mechanics that require two bodies break (e.g., Sapphiron ice block) |
| **Playerbots (AI party)** | Spawn AI companions that execute rotations, CC and dungeon strategies. You lead a party, not a god-mode solo. | `Warstorm` (WotLK, bots do ICC25 HC strats, dungeon finder, 1-5× XP, transmog), `Stormgarde` (Playerbot AI since Feb 2020), `SoloCraft` (Vanilla PartyBots + BattleBots) | You are the leader | Bot CPU, pathfinding, and strategy scripts cost; bots can be uncanny |
| **Hybrid** | Scale a little, bots fill the rest. Warstorm does both — scaled dungeons + bots that *queue* and *execute* strats. | `Warstorm` (both), `NycterMoon` (Vanilla hireable Companions from innkeepers) | Solo with fallback | Most servers pick this now |

## What scaling breaks

Scaling by stats is cheap (one `Spell.dbc`/`Creature` multiplier) and works for ZG/MC. It fails where mechanics require roles:

- **Soaks** (e.g., Sartharion void zones) — one player can't be in two places.
- **Mind control / MC breaks** — bots must break it.
- **Vehicles** (Ulduar, ICC gunship) — scaled damage doesn't fix scripting.
- **Loot** — if you scale for 1, do you drop 5× loot for 1? Most solo servers tune to 1× loot but let you run more often (TheraWoW `x1-3` rates, Warstorm `1-5× XP`).

## Why playerbots changed the space

`mod-playerbots` on `AzerothCore` (and Warstorm's in-house AI) moved solo from "multiply stats" to "execute strats":

- **Rotation scripts** — bot picks spells like a player, not a pet.
- **Strategy execution** — Warstorm advertises bots that *do* ICC25 HC strats, not just DPS. That's not stat scaling; that's encounter AI.
- **Group finder illusion** — Warstorm, Stormgarde and SoloCraft queue bots into dungeon finder so you never wait. You still need to lead.
- **Cost** — bots eat CPU and DB, and their `PlayerbotAI` configs (see [Playerbot Architecture, Explained](/blog/playerbot-architecture-explained/)) decide whether they feel like teammates or leashed pets.

## Which solo server fits you?

- Want to *feel* like the raid? Stat-scaled `TheraWoW` / `OnlyFunsWoW` (instant, no bot management).
- Want to *lead* a raid? Bot-driven `Warstorm` (WotLK) or `SoloCraft` (Vanilla) — manage roster, bags, groups, raid fill.
- Want hireable companions, not a swarm? `NycterMoon` Vanilla companions.

Filter `WotLK` + `small` on [tracker](/) and check `Pop: Tiny` — solo servers are often small by design; `large` here would mean crowded, not better.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Can I play WoW private servers solo?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Solo servers scale dungeons/raids for 1-5 or spawn AI playerbots that form your party. TheraWoW and OnlyFunsWoW scale; Warstorm and SoloCraft use bots that execute raid strats."}},
    {"@type": "Question", "name": "What are playerbots?", "acceptedAnswer": {"@type": "Answer", "text": "AI companions from mod-playerbots (AzerothCore) that queue, fight, and follow strats like ICC25 HC. You lead them; they don't just multiply your stats."}},
    {"@type": "Question", "name": "Do solo servers give more loot?", "acceptedAnswer": {"@type": "Answer", "text": "Most give 1× loot but let you run more often or at higher XP (1-5×). Scaling loot 5× for one player would inflate economy, so servers tune rates not drops."}}
  ]
}
</script>
