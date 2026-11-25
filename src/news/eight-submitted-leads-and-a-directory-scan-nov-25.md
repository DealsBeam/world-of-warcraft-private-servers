---
title: "Eight submitted leads, two new realms and a directory scan"
date: 2026-11-25
category: news
summary: "Eight links came in as leads. Two were new playable realms, four were already tracked, and two were repositories that belong in the links directory rather than the tracker. A separate read of Private Server Hub gave us leads, not facts."
---

Eight links arrived as leads on November 25 2026. We read each source directly, checked it against the tracker and applied the same rule as before: a project enters the tracker only when its own pages or API support a status and a population claim. Two passed as new realms, two already-tracked entries earned dated refreshes, and two repositories were filed as tools.

## Two new playable realms

**[Gravespire](/servers/gravespire/)** is a Wrath of the Lich King 3.3.5a PvP realm at 3x experience that runs in a browser on desktop, iPhone and Android with no install. Its own configuration enables account registration and login, and the play host sends unsigned visitors to the sign-in page. The armory feed reported 89 characters, 71 accounts, 0 level 80s, 248 played hours, 0 guilds and a 39 Alliance and 50 Horde split at our read. That is real activity, but it is not a concurrent count, so the population band stays **unknown**. The Spirebook and Armory pages say they are live while filters and leaderboards are still being polished.

**[Legacy of Azeroth](/servers/legacy-of-azeroth/)** is a private World of Warcraft Forever realm on build 1.60.1.70959. Its launcher sets the server address, certificate and automatic login on Windows, Linux and macOS. The homepage offered public account creation and showed 40 players online, and its status API returned `online: true` with 41 players at our read. Visible update posts name Launcher 1.3.6 and server WoWForever 0.1.39. We band it **tiny** on the 41-player API figure, not on a screenshot of the homepage counter.

## Two duplicate domains with dated refreshes

**[Triumvirate-WoW](/servers/triumvirate-wow/)** was already tracked at the submitted domain. The first-party header now reads 256 players online and 12,851 accounts, with 17,141 Alliance and 16,296 Horde characters, and the Phase 2 status line still says ICECROWN CITADEL IS LIVE. That is appended to the entry with a November 25 date. The band stays **small**.

**[SaberTooth](/servers/sabertooth/)** was also already tracked. Its October reading had a contradiction: the header claimed 119 online while a statistics panel showed 0 players. The homepage now reads 108 online, 372 accounts, 2,288 characters, 4 guilds and 2d 21h uptime. We recorded that as a dated correction and moved the band from **unknown** to **tiny** on the 108 first-party counter. New dated posts list Saber Housing, three new professions and a vote roulette tiger mount.

## Two domains with no new dated milestone

**Evergreen HC** and **LastWoW** were both already tracked at the exact domains submitted. Evergreen still says Server online and publishes no player counter. LastWoW still describes its TBC 2.4.3 realms and the September Black Temple notice already in the entry. Neither entry was silently refreshed.

## Two repositories are tools, not realms

**ManaWoW** is an experimental asyncio Python emulator for 3.3.5a build 12340, created November 22 and pushed November 25 with new flight-path commits. Its documentation lists local auth and world servers, SQLite storage and a long list of implemented systems, alongside named gaps such as no LFG and no battleground spirit guides. We found no public realm address in its README or docs, so it goes into the links directory with that limitation attached.

**AzerothCore Linux server** is a one-script self-hosted WotLK realm package. Its README says plainly that it is not a public server: you build it, own it and can move the finished folder. It wraps AzerothCore, playerbots, phased garrisons, about 3,400 pet battle species, a jukebox, a shop and an admin interface into a Linux build, and its own status line says playable with rough edges. That also belongs in links, not in a list of realms other people can join.

## What Private Server Hub told us, and what we did not take from it

We also read Private Server Hub's news and best-server pages as lead sources. The best page says it ranks 176 active servers from a 218-entry catalogue with 219 reviews, 20 coming soon and 22 closed, and puts Tauri WoW - Evermoon, ChromieCraft and UltimoWoW in the top three. The news page says it carries 200 articles, split 174 server news, 24 upcoming and 2 site news.

Its visible headlines point to Nozdor selling current raid gear, Emberveil adding an Android client and a phase two on November 20, Sirus opening Felyard, ForeverWoW postponing to December 21, Firestorm opening Silvermoon on November 23 and Season 1 on December 7, Whitemane denying a fake breach post, a Capybara Paradise and Ravencraft partnership, Project Ebonhold planning a January 2027 realm, Origins WoW Asia relaunching in Wrath on November 7, and Whitemane opening Stormstout on December 12.

Across those 200 news cards we counted 111 distinct named server labels. Fifty-two matched tracker names exactly and 17 were spelling or spacing variants. The rest need a per-name check, because some are realm labels, renamed projects or collisions rather than missing servers. Alterworld - Ashbound, BartCraft, Crusader-Storm, FirstLight, Fólkvangr, Kerrtarna WoW, Project Eclipse, PsychoFun, Uncapped, WoW MasterWork and Zone WoW had no close entry under those names. The ranking page also carries traps: its Rising Gods row is described as WotLK running since 2008, while our Rising Gods - Back2Basics entry is TBC, and its Warmane realm rows are not separate entries in our tracker. Every one of these PSH claims is **third-party**. None of those dates, populations or descriptions became a tracker fact in this batch; each would need its own first-party read first.

We did not create accounts, download launchers, run installers or connect to a realm. We did not turn character totals into a player count, and we did not copy a competitor's date into our data. The two duplicate domains keep their identity as single entries, and the dated refresh text shows exactly what changed when something did.

SOURCES: all eight submitted links were read first-party on November 25 2026. Gravespire's homepage, published JavaScript, armory API and play host were read directly. Legacy of Azeroth's homepage and status API were read directly. Triumvirate-WoW, SaberTooth, Evergreen HC and LastWoW were re-read at their own domains. Both repositories were read through GitHub's API and raw README or documentation files. Private Server Hub's two pages were read the same day and are attributed throughout as a third-party lead source. Related: [the tracker](/), [how we review a private server](/blog/how-we-review-a-private-server/) and [the correction policy](/blog/tracker-correction-policy-explained/).
