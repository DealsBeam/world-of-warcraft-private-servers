---
title: "Scene scan: 14 new servers added, and why a listing catalog overstates the count"
date: 2026-10-14
category: news
summary: "A sweep of a 179-entry listing catalog turned up 87 slugs we did not track. After de-duplicating against our own URLs and probing every domain, 14 are real enough to grade, three were already tracked, and one is a shutdown notice. Here is what survived and what did not."
---

We ran the tracker's periodic gap sweep this week. The source was a public listing catalog that profiles **179 private-server slugs**. Of those, **87 were not in our tracker**. That sounds like we had been missing half the scene. It is not.

Listing catalogs are optimistic by design. They keep a server long after it dies, and squatters reuse dead servers' names and domains. So every candidate gets two filters before it can be graded: a **domain de-duplication pass** against our own tracked URLs, and a **reachability probe from a control domain** in the same batch. What is left after that is much smaller than the raw number.

## What survived: 14 new entries

Fourteen candidates held up and are now graded entries:

- **[Shadowsong](/servers/shadowsong/)** (WotLK, **dev**): an ultra-fun 3.3.5 realm with Monk and Demon Hunter, 255 talents and MoP and Legion spells, carrying a dated launch of **October 25 2026**.
- **[WowMythic](/servers/wowmythic/)** (Legion): timed Mythic+ dungeons, PvE ladders and solo-queue arena, but the newest news dates to 2024 and the site reads 0 online.
- **[IceCold](/servers/icecold/)** (Cataclysm 4.3.4): a conventional forum-and-launcher stack, operating but publishing no counter.
- **[Zamolxia](/servers/zamolxia/)** (WotLK): playerbots, AutoBalance and transmog, news dated September 16 2026.
- **[Evolution-WoW](/servers/evolution-wow/)** (WotLK): a level-255 funserver with Mythic+ and PvP ranking. Its header's "1,794 online" is site traffic, not players, and is deliberately not counted as population.
- **[BasedWoW](/servers/basedwow/)** (Vanilla 1.12.1): a single AzerothCore realm, Lightbringer, with news as recent as October 6 2026.
- **[WoW 163](/servers/wow-163/)** (WotLK, Russian): two realms at x10 and x1; the site's own counter read 13 online.
- **[Azure Outback](/servers/azure-outback/)** (WotLK, Australian): AzerothCore, built for relaxed progression; realm status read 1 of 1,000.
- **[Spectrum WoW](/servers/spectrum-wow/)**, **[CruzadaServer](/servers/cruzadaserver/)** and **[DF MeWe](/servers/df-mewe/)** (WotLK): three funserver or community realms, none publishing a counter.
- **[WoW Eras](/servers/wow-eras/)** (LaTam): three eras per character on a 3.3.5a client, opening Outland and then Northrend as each character clears the prior tier's dungeons.
- **[Aether](/servers/aether/)** (Brazilian): phase-based progression with a market and contracts system.
- **[Hijos del Tiempo](/servers/hijos-del-tiempo/)** (Spanish): a multi-expansion project with a hardcore, permanent-death Northrend path.

Three more candidates the scan surfaced turned out to be **already tracked**, just under names the catalog did not use: **Freedom WoW**, **Hellgarve** and **Emervoid**. Rather than add duplicates, we folded the fresh readings into the existing entries, including the October 14 population snapshot for Freedom WoW (385 online, down from 531 on September 23) and Emervoid's move to its own domain at emervoid.de.

**Update, October 15 2026: five more from the same sweep passed verification.** [wowserver Romania](/servers/wowserver-romania/) (WotLK 3.3.5a, with a .NET 8 launcher dated September 12 and AI dungeon auto-fill), [Warriorland](/servers/warriorland/) (French blizzlike 4.3.4, home-hosted, its own counter reading 0 of 255), [RaguWoW](/servers/raguwow/) (TBC 2.4.3 at x10, home-hosted, news through August 4), [illiwow](/servers/illiwow/) (a TBC 2.4.3 arena that runs in the browser), and [WoW OneLove](/servers/wow-onelove/) (a Russian free project across 3.3.5a, 7.3.5 and 5.4.8 built for solo play). Two others the same day went the other way: **srwow1.com** now serves an unrelated advertising page, and **voidmaster.xyz** returns an empty body to every request we made, so neither can be graded.

**Update two, October 15 2026: two more from a later sweep passed verification, taking the tracker to 232.** [InfernoWoW](/servers/infernowow/) is a custom level-60 adventure built on the 3.3.5a client and described by its own site as "WotLK meets Vanilla," with reworked Death Knights, a fourth Priest specialization, downported Cataclysm battlegrounds and a Mythic+ system; the site is reachable and its changelog documents work through the week of May 31 2026. [Shadowburn](/servers/shadowburn/) is a non-commercial custom WotLK 3.3.5a project in active development that dates its own launch to December 15 2027. A third candidate, listed in the catalog as **Alterworld-Ashbound**, could not be matched to any first-party site and is withheld rather than guessed at.

## The dated claim that matters

**Shadowsong opens October 25 2026.** The site also advertises a 24-hour peak of **4,891 players**, but that is a pre-launch promotional figure rather than an audited count, so the entry records it as a claim and the population band stays unknown until the realm is open.

## What we rejected, and why

- **WoWSEA**: its site is now a shutdown notice reading "WoWSEA is shutting down. Thank you all for playing!" There is **no date** on it. We require a dated shutdown before we mark a server dead, so WoWSEA is **withheld** rather than guessed at. It is not in the tracker.
- **anubiswow.com**: the domain now serves a Firefox-China landing page. A dead server's domain, resold.
- **felborne.com**: parked.
- **wotlkplus.com**: the page reads "no longer available".
- **Roughly two dozen unreachable domains**, probed twice on separate days: foreverwow.org, sunwellreborn.com, firemaw.org, astranaar.eu, stormcrown.net and others. Dormant or gone.
- **Several Cloudflare-walled or bot-walled sites** (403, 522, or a challenge page) that cannot be graded from outside.
- **Sixteen slugs were already ours under other names**, from twinstar (tracked as Apollo II) to wowmania (WoW-Mania).

## Why the number is smaller on purpose

A listing site's raw count is not a count of live servers. Our tracker grades **reachability**, **first-party evidence**, and a **population band** instead. That is why a sweep that starts at 87 ends at 14 additions and one withheld, and why the same discipline that keeps the count honest is the one that catches a squatted domain before it becomes a wrong entry.

The tracker carried **224 graded servers** after that first pass and **232** after the two October 15 follow-ups above.

SOURCES: every candidate was fetched directly from its own domain on October 14 2026, with a control domain probed in the same batch and unreachable hosts retried. Listing-catalog slugs and names are from the public catalog's own select list, used only to find candidates, never as evidence of a server's health. Related: [how we review a private server](/blog/how-we-review-a-private-server/), [the correction policy](/blog/tracker-correction-policy-explained/), and the [October dates calendar](/news/october-dates-calendar-oct-8/).
