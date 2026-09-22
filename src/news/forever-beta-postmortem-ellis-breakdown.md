---
title: "Forever beta post-mortem: one regional realm, Oracle tables, hot WORLD pools"
date: 2026-09-22
game: wow
description: "Blizzard producer Tom Ellis breaks down the Forever beta day-one failures: a single regional realm bottleneck, Oracle tables needing a manual analyze, and WORLD pools running hot on empty maps."
tags: [wow, blizzcon-2026, classic-plus, beta]
---

September 18, 2026: the popularity story ([reception numbers](/news/forever-beta-reception-numbers/)) now has its technical companion. Senior game producer Tom Ellis posted a full breakdown of the day-one failures, reported by [GamesRadar](https://www.gamesradar.com/games/world-of-warcraft/the-craziest-numbers-ive-seen-in-17-years-working-at-blizzard-wow-forever-devs-seem-genuinely-shocked-the-beta-is-so-popular-as-they-explain-why-their-mmo-servers-keep-breaking/) (Dustin Bailey, Sep 18), and the causes are threefold.

First, capacity planning missed. The beta environment is not the production stack, and WoW betas are usually not big meter movers, so the environment was sized small. Worse, the whole beta ran through **one regional realm**, so a single connection point funneled every login. That is why queues stretched and players disconnected after waiting. Diagnosis took about half an hour because the game and Battle.net services both showed little load; Ellis notes it is the first time the team has seen this system kick in with no obvious CPU issue alongside, quote: 20 years, always something new.

Second, the database. Slow looting, quest acceptance and NPC interaction traced to Oracle tables that needed a **manual analyze** plus automated jobs to keep repeating it. Default rates could not keep up under the player flood. Once the engineers ran it, database performance cleared up instantly.

Third, simulation load. Hours in, the WORLD pools running the game simulation ran hot on CPU and nearly out of memory because **empty maps were not shutting down correctly**, clogging both. The fix needed restarts to take effect, and Blizzard used the window to add worlds and expand the regional service.

Greenfield's excitement quote stays where it belongs in the reception piece. This one is the repair log: undersized beta stack, one funnel, stale table stats, leaked empty maps. Fixes landed same-day, which matters more than the metaphors.

SOURCES: Tom Ellis X post (Sep 18) and Josh Greenfield X post (Sep 18), via GamesRadar (Sep 18).
