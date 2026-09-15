---
title: "Ascension archive opens: community project preserves CoA game data before it's gone"
date: 2026-09-15
game: wow
tags: [ascension, classic-plus, preservation]
summary: "A community-run Ascension Archive now collects WDB and addon data from former Ascension players to preserve Conquest of Azeroth game data. Backed by the same 21-class AzerothCore port effort."
---

September 15, 2026 — A community preservation project called the Ascension Archive has opened, collecting game data from former Ascension players before it disappears. The archive belongs to the wider effort to keep Ascension's classless systems alive after the [September 4 shutdown](/news/ascension-shutdown-sep-4/).

## What the archive does

The archive runs on Cloudflare Workers infrastructure and asks former players to upload two kinds of local data: the **WDB cache** (items, creatures, quests, auction prices, spawn observations) from `ascension-live\Cache\WDB`, and the **Account folder** (addon data) from `ascension-live\WTF\Account`. Uploads are capped at 512 MiB per submission, WDB files split automatically, and supported addon formats include MobSpells, GatherMate2, Auctionator, CoASniff, WildcardHarvest, Ascension_CoAReader and AscensionHarvest.

Nothing uploads without explicit selection — the tool says "Uploads are not open yet" until a player picks files. Filters strip personal data before transfer, and the server re-validates before anything reaches the public archive. Published upload copies are deleted after processing; the consolidated dataset is what's retained.

The GitHub backing it is [hertigservices/ascension-data](https://github.com/hertigservices/ascension-data), and a browsable explorer lives at ascension-db.ascension-archive.workers.dev. Players who already shared files in the Conquest of AzerothCore Discord don't need to re-upload.

## Why it matters

This is the preservation track to the [21-class AzerothCore port](/news/ascension-classes-azerothcore-port/) announced September 6: the port depends on class trees, item data and spawn data that only exist on dead Ascension realms. The archive is the community's attempt to save that data from players, not from the studio — Ascension, like [Turtle WoW](/news/turtle-wow-source-leak/) before it, shuts down but its systems get a second life through what players walk away with.

The archive is independent ("Not affiliated with Project Ascension," per the site). Scope is real but content-dependent: preservation is only as good as the data players actually submit, and the outcomes that matter (class trees surviving into the port, auction and spawn datasets going public) are still ahead.