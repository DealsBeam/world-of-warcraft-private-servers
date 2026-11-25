---
title: "Five submitted domains: three new tracker entries and two we already had"
date: 2026-11-25
category: news
summary: "Five domains were submitted as new leads. Three passed first-party checks and are now graded entries; two were already in the tracker at the same addresses. No duplicates were added and no population number was invented."
---

Five server domains came in as leads on November 25 2026. We fetched each one directly, checked it against the tracker and graded what the projects publish about themselves. Three are new entries. Two were already present at the exact same addresses.

## Three new entries

**[SoloShell](/servers/soloshell/)** is a solo-friendly Vanilla+ realm running Mysteries of Azeroth 1.18.1 content on the classic 1.12 client. Its own feature page marks hired AI companions and the Warband as "Live" and defines that word as "in the game and ready for you today". The play page offers account creation, a launcher and a direct client download. The launcher feed published version 1.4.4 on November 23, with SHA-256 values for the installer, portable launcher and source zip. The direct client zip has no hash in that feed. No player counter is published, so the population band is **unknown**.

**[Azeroth Ascended](/servers/azeroth-ascended/)** describes itself as custom Vanilla content on the 3.3.5a client at x1, with a PvP realm, custom Gilneas content and optional visual upgrades. Its first-party API was the strongest evidence in this batch: the health endpoint reported registration, database, web login and donations enabled, and the status endpoint reported the realm online at 12:55 UTC on November 25 with 3,430 total characters, 643 online characters and highest level 80. The same response says `mayIncludeBots: true` and names `world_tcp` as the status source, so the 643 is a character count rather than a human headcount. We record it as **medium** with that caveat attached.

**[Twisted](/servers/twisted/)** runs realm Antique on VMaNGOS, 1.12.1 build 5875, at x1 with double XP weekends. Its timeline marks the Vanilla era "Live Now", with Molten Core and Onyxia checked and later tiers unchecked. The download page offers a full client, a realmlist file and addons. Every page carried the same realm snapshot: Antique online, 39 accounts, age 29 days and **0 active players** at our read. That is a nameable first-party number, so the band is **tiny**, but it is one snapshot and not proof that nobody ever plays. Future TBC, WotLK, Cataclysm and MoP stages are listed as planned.

## Two that were already tracked

**Project Legacy** and **Frozen Throne** were already in the tracker at the submitted domains. We did not add duplicate entries.

Project Legacy's homepage still describes the independent Vanilla+ project we already record, with Prestige Mode, Lorewalker Mode and permanent progression. Nothing on the homepage gave a new dated milestone, so the existing entry keeps its September 14 check date rather than being silently refreshed.

Frozen Throne returned an HTTP 403 challenge page on this read. That is not a shutdown notice and not evidence of a status change, so the existing entry stays as it was. We could not re-verify its population figure today.

## What we did not do

We did not create accounts, download clients, run installers or connect to any realm. We did not turn a character count into a player count, and we did not assign a band to SoloShell without a published counter. The two duplicates remain single entries with their older check dates, which is more useful than two rows with the same name and conflicting dates.

SOURCES: all five submitted domains were fetched on November 25 2026. SoloShell's homepage, published bundle, play page, launcher feed and API identity response were read directly. Azeroth Ascended's framed first-party site, published bundle, API health response and API server status response were read directly. Twisted's homepage, download page and timeline were read directly. Project Legacy's homepage and Frozen Throne's HTTP 403 response were read the same day. Related: [the tracker](/), [how we review a private server](/blog/how-we-review-a-private-server/) and [the correction policy](/blog/tracker-correction-policy-explained/).
