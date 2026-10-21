---
title: "Conquest of AzerothCore publishes its own uptime record, and the changelog is written by the build server"
date: 2026-10-21
category: explainers
summary: "The public test realm's site is not a marketing page. Its status feed separates restarts from outages over 30 days, its changelog is generated from development commits with GitHub issue numbers, and its roadmap archives every week and month automatically."
---

Most private server sites are a banner, a donation link and a Discord invite. The Conquest of AzerothCore public test realm runs something closer to a software project page, and it is worth taking apart, because the way it publishes is the interesting part.

## The status page has a definition of downtime

The status page at `coa-development.org/status` checks the realms and the login server every 30 seconds and shows a 30 day history. The detail that makes it useful is the rule it states up front: **a break of up to 15 minutes counts as a restart, anything longer is an outage**. The page then reports uptime, restart counts and outage counts per day, per week and per month, and it says so when the realm is up but something is wrong with it.

Our read at **11:42 UTC today** returned:

| Realm | Online | Players | Up since | Known since | Restarts, week | Outages, week |
|---|---|---|---|---|---|---|
| CoA | yes | 27 | 10:19 UTC today | September 14 | 49 | 0 |
| Wildcard | yes | 1 | 10:20 UTC today | October 2 | | |
| Warcraft Reborn | yes | 9 | 15:06 UTC on October 20 | October 19 | | |

CoA's own figures read 96.63 percent uptime for the day, 96.8 percent for the week and 95.74 percent for the month, with 437 restarts this month and 5 outages. A player count of 27, 1 and 9 is a very small public realm, and the site is honest that this is a bug test rather than a live server: its own about page says accounts, characters and progress can be wiped or reset at any time without notice.

## The changelog is generated, not written

Every entry on the changelog page is **written automatically from the development commits**, with the GitHub issue number attached. That is why the page reads like a work log: on October 19 it recorded 63 changes, three of them new and sixty fixes, and on October 20, 57 fixes. The October 21 post fills itself in as the day goes, and it had seven entries when we read it.

Entries are grouped two ways: by **realm kind** and by **class**. The realm kinds on the filter are Conquest of Azeroth, Wildcard, Warcraft Reborn, Area 52, Freepick and Hero Only, and as of our mid-October pass the counts were 1,026, 47, 28, 0, 14 and 37. A count of zero for Area 52 means nothing has ever been filed against it, which is itself a signal about which realms the team actually works on.

The feed is also available as RSS at `coa-development.org/changelog.rss`, which is how we catch up on it without scraping.

## The roadmap is a machine summary of the changelog

The roadmap page states its own method: "What we have built so far: the big changes of every week and month, picked from the changelog, and how many bugs get fixed per day, week and month." It shows a running total, charts of fixes and commits, and an archive that is saved two hours after each week or month ends, so later edits to the changelog cannot rewrite history. That is a small thing and a rare one.

## What is actually in there

Beyond the plumbing, the changelog is a readable record of a project with 22 custom classes. The October 17 post, for example, announced **Manastorm Endless** back: a SQL-driven endless dungeon wired into the native Ascension UI, 61 rooms across 19 dungeon maps, depth scaling to a native limit of 16,384, rotating affixes from depth 6, separate solo, duo, trio and group progression, and level 80 gear from item level 187 to 232 beyond depth 25. Other entries cover class abilities, Chromie prestige for the original classes in Warcraft Reborn, and bug fixes tagged with issue numbers such as #8354 and #4007.

There is also a **Talents** page, an **Armory**, a **FAQ**, a **Known Bugs** page and a **Bugs** page that links straight to the GitHub issue tracker on the AzerothCore fork the project runs.

## Why it is worth studying

Three habits in a row, none of them common in this scene:

**A machine-generated changelog means the numbers cannot drift from the code.** Every claim in it points at an issue, and the issue points at a commit.

**A published definition of downtime.** "Up to 15 minutes is a restart" is a measurement standard, and it is stricter than the "we were down for a bit" that most operators get away with.

**An automatic history.** The roadmap archive freezes each week, so the record cannot be tidied up later.

The other side of that is the same one every test realm has. The characters can be wiped at any time, the population is tiny, and the site says plainly that it is not a permanent server. A guild that treats it as a home will get burned eventually.

If you want the same content without the public realm, [the community server manager we covered today](/news/coa-server-manager-oct-21/) installs and runs the same content on your own machine, including the Wildcard realm. The rest of the Conquest family is in [our four-server piece](/blog/four-conquest-of-azeroth-servers-oct-20/), and the project's own entry in the tracker is at [Conquest of AzerothCore](/servers/conquest-of-azerothcore/).

SOURCES: coa-development.org, read on 21 October 2026: the status page and its JSON feed at 11:42 UTC, the changelog page and its RSS feed, the roadmap page, the about and FAQ pages, and the changelog entries for 17, 19, 20 and 21 October 2026.
