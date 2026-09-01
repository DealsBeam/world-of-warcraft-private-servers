---
title: "Centurion joins the tracker — Vanilla 1.12 mechanics on a 3.3.5 client"
date: 2026-09-01
summary: "Solo-dev project porting Vanilla 1.12 class mechanics, ranks, cast times and CC into the WotLK 3.3.5 engine. Legionnaire+ is the live PvP realm; Barracks+ is the open-beta PvE sister. No paywall, custom balance, factionless play."
---

A new network joined the tracker today. **Centurion** is a solo-dev project that takes the original Vanilla 1.12 spell and class data — Feign Death traps, fast Rank 1 Frostbolt, 3-second mount cast time, long CC with heartbeat resist, no hit/crit rating — and ports it into the 3.3.5 WotLK client and engine. Two realms are live:

- [Centurion — Legionnaire+](/servers/centurion-legionnaire/) — PvP, instant 60, live since March 22, 2026. Custom talent/racial/gear balance, full collision, factionless quest and flightmaster support, opt-in hardcore, opt-in transmog, 76 custom item sets, 15 arenas and 8 battlegrounds (4 custom). No cash shop, no donations, no financial layer at all.
- [Centurion — Barracks+](/servers/centurion-barracks/) — PvE, open beta. Same Vanilla-1.12-in-3.3.5 base, plus no-bind loot, world PvP via playerbots that roam the world (hostile in PvP zones, buy and sell on the auction house), warmode flagging from capital inns that doubles XP and gold gain.

The interesting design move is the inversion of the usual Classic+ direction. Most 2026 Vanilla+ projects took Turtle WoW's 1.18.1 base and added more content. Centurion took the 1.12 spell and ability data and rebuilt it on top of the 3.3.5 client — which means the result has the WotLK engine's QoL (dual spec, cleaner cast bars, account banks, modern addon support) but the Vanilla numbers. The PvP balance, the dev argues, is the closest you can get in 2026 to what Classic-era arena would have felt like if Arena had existed at level 60 with 1.12 tuning.

## Why it is on the tracker

Three reasons it earns a row alongside the 105 already there:

1. **Different core, different lineage.** The recent Vanilla+ growth has all been from the Turtle 1.18.1 leak family — Octo WoW, Capybara, Ravencraft, Everwood. Centurion is a clean WotLK-engine build that is not downstream of any leaked core.
2. **Live and not pre-launch.** The Legionnaire+ realm has been online since March 22 with active development, a public ladder, a public talent calculator and a Discord. The current PvP ladder is dominated by playerbot opponents (the project ships its own bots for solo queue), which is unusual in the scene but consistent with the "make Classic PvP playable at 1.12 balance" pitch.
3. **No paywall, no shop, no donation perk.** The dev is explicit about this: there is no PayPal, no Cashapp, no Venmo. The site has a "Donate" link in the footer but the dev disclaims it as cost recovery and it does not gate any in-game benefit.

## What to watch

- **The Barracks+ open beta.** PvE realms with playerbots-as-population are a 2026 trend (Warstorm, SoloCraft, Project Legacy all use variants). Centurion's take is the most aggressive — bots buy and sell on the auction house, fight back in PvP zones, and give XP when killed. Whether the economy stays functional at scale is the open question.
- **The 1.12→3.3.5 port integrity.** Custom talent calculators and a public demo exist. The risk with cross-client ports is that some spells behave differently in 3.3.5 than in 1.12 (drift in the ability database over 4 expansions of fixes). We will see how the team handles the inevitable bug reports.
- **Single-point-of-failure dev.** Solo dev, no public team. If the developer steps away the project stops. The same is true of any number of smaller 2026 projects (Elwynnkeep, Epsilon, etc.) but it is worth flagging.

## Tracker entry

Both realms are now in the [Vanilla+ section](/). Legionnaire+ is `playable` and `tiny` (the live ladder is mostly bots, no public population count for human players). Barracks+ is `dev` and `unknown` (open beta, no population data). Both share the `Centurion` group tag and the centurionpvp.com site.

If you have played a session and want to share notes, the [Project Legacy milestone post](/news/project-legacy-1000-accounts/) (also today) and this Centurion entry mark the first real movement in the Vanilla+ column since Turtle's May shutdown. Two new entries in 24 hours is unusual for a column that has been net-zero for most of 2026.
