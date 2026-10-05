---
title: "Nine more servers from a vote-ranked list, and six of its entries are dead domains"
date: 2026-10-05
category: news
summary: "A 22-realm directory yielded nine new entries after first-party reads. Six of its listings point at domains that do not resolve, including its number-two ranked server."
---

A third directory crawl, this time a vote-ranked list of **22 realms**. Sixteen were not ours. Nine verified first-party and added today. Six point at dead domains.

## The nine

| Server | What it is | Tier basis |
| --- | --- | --- |
| **EternalWoW Remorse** | 255 instant on rebuilt AzerothCore, Anubis gear, top of their votes | unknown, votes are not players |
| **Heroes WoW** | 255 Reborn funserver, counter reads 0 | **tiny**, site's own zero |
| **MegaForge** | Solo-journey server, Warsong Online | unknown, no counter published |
| **Nostalgia Servers** | Three realms, two Online one Offline | unknown, no counter published |
| **Demontold** | Site title reads Coming Soon | **dev**, their words |
| **GrandMU** | Blizzlike x5, five languages, 2 online | **tiny**, site's own 2 |
| **Rupture WoW** | 100x with level-120 endgame, listed elsewhere as Areos | unknown, counter did not load |
| **Winterkage** | WotLK plus TBC off one realmlist | unknown, counters read Loading |

Plus **Ivalice Reborn** ([server page](/servers/ivalice-reborn/)): opened October 1 per its own news, level-80 fun server with required custom patches.

Two bands from live counters, five `unknown`, two `dev`.

## Six dead domains on a ranked list

Their number-two entry by votes, **ForeverWoW**, does not resolve at root or on three alternate TLDs. Neither do HeroWoW, Twistedfate, Marble-WoW, Shadow of Azeroth or Asgard WoW (the last returning Cloudflare 403 rather than DNS failure).

A ranked directory that keeps dead domains listed is measuring its own staleness, not the scene. Votes accumulate on entries nobody re-checks, which is the same failure our own sweep spent a week correcting, except we publish the correction and they publish the ranking.

Whispers of Nyalotha, a Vanilla+ project with a custom Blademaster class, has **no website at all**, only a directory page describing active development with no ETA. Evaluated and skipped: no URL means no entry.

## The rename worth recording

Rupture WoW's site carries the title **Rupture WoW** while a directory lists it as **Areos WoW**. The entry follows the site's own title and notes the alias, because a tracker that names a server differently from its own front page is manufacturing confusion.

Its published realmlist is a **bare IP address**, which is worth stating plainly: no hostname means no DNS to lapse, but also no identity beyond four numbers.

SOURCES: each project's own site, read October 4 and 5 2026 with a control domain probed in the same batches; the directory's pages, used solely to discover project URLs. Player counts are the projects' own widgets, self-reported. We did not create accounts and did not play. Related: [how we review a private server](/blog/how-we-review-a-private-server/), [the correction policy](/blog/tracker-correction-policy-explained/), and [the fifteen-server batch](/news/fifteen-servers-from-a-competitors-list-oct-4/).
