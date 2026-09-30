---
title: "A tracker entry was demoted to satisfy a spreadsheet, not a server"
date: 2026-09-30
category: news
summary: "Epsilon had no URL on file and was moved from playable to dev by a data-cleanup sweep that never opened the site. It is a finished product with a phasing system, a live Discord, and no published way to connect."
---

Epsilon sat in our tracker as a `dev` project with **no URL on file** and the details field reading "Active Development (RP/Sandbox)". The first half of that was wrong, the second half was invented, and we can show exactly when and why.

## The entry was demoted by a data cleanup, not by a check

Git history is unambiguous. Epsilon was `playable` from the project's first data commit on **10 August 2026** and stayed that way through 30 commits. Then commit `6d50f73` on **25 August** moved it to `dev` and gave it a `Vanilla+` tag.

That commit's own message states its goal: **"PopTier sweep complete: 0 playable unknowns (was 38)"**. The same commit moved **Revelation WoW** and **Anarchy 2.0** the same way, and all three still have **no URL on file today**, a month later.

So the sequence was: we had entries with unknown population tiers, we wanted none of them to be `playable`, and three entries with no source material at all were the easiest way to get the number down. Nobody opened a website. The commit that did it changed 131 lines of `servers.js` and 2 lines of `icons.js` and cited no source for any of it.

**That is worse than the stale-date failures this sweep has been correcting.** A stale date is a true fact in the wrong place. This manufactured a status change out of a tidiness goal, and a reader would reasonably read `dev` as a statement that somebody had looked at the project and found it in development.

## What the site actually says

Having now read it, Epsilon presents as a **finished product**, not a development announcement. Its own words:

- It is **"the pioneer of the phasing system that allows you to create your own customized world, developed from the first core to introduce player-based phasing."**
- From login you get commands to build your own version of the world in "phases", **rotate objects, spawn NPCs, give them waypoint routines**, then invite friends in to play it.
- A **streaming system** pushes server-wide custom content straight to the client, "no need to download anything".
- Custom items, a catalog of cosmetic spells, and **character creation options usually locked**, specifically **demon hunter horns for Blood Elves and Night Elves** plus extra base-race skins, and **Allied Races**.
- "Use your phase as a vehicle to tell stories! Epsilon is primarily a roleplay server."

None of that is a roadmap. It is a feature list for something that was built.

So: ~~`dev`~~ **corrected to `playable`**, the pre-sweep value, because the demotion was never earned.

## What we still cannot verify, stated plainly

Liveness is **not** confirmed, and we are not going to claim it is:

- The **How To Connect** page renders with navigation only. No connection instructions, no client, no realmlist. It is the site's own `/download` route and it is empty.
- **`/news`, `/changelog`, `/about` and `/updates` all return 404.**
- The **only year anywhere on the site is 2021**, in the footer copyright.
- The Discord invite at `discord.gg/epsilon` **resolves to a live server titled Epsilon**, so the community exists. A valid invite is evidence of a community, not of running realms.

A project with a finished feature list, a live Discord, a working register flow, and no published way to connect is most likely gated behind account creation, or paused. We do not know which, and the difference matters to a reader, so we are saying so rather than picking the comfortable answer.

**The `Vanilla+` tag is cleared.** The site never names a client version anywhere. Demon hunter character creation options and Allied Races point at Legion or Battle for Azeroth era content, but that is our inference from a feature list rather than a stated version, and we are not publishing a tag we cannot source. The tag came from the same unfounded sweep as the status change.

## Why this one matters more than the others

ArgusWoW was a real server with a real number that we failed to re-read. Sunwell.pl was a real tier that a stale reading had inflated. Epsilon is different: **there was never a reading.** The entry was shaped by a goal, and the goal was written into the commit message.

Our tracker has **31 entries with no URL at all**, so most of them are in exactly this position, whether or not anyone has noticed. Two of the three that `6d50f73` moved are still among them. That is the queue I am working, and this is the first entry where the origin of the error was recoverable from git rather than merely suspected.

SOURCES: Epsilon's own homepage and `/download` page, read over HTTP and re-read in a browser on September 29 and 30 2026, plus its `discord.gg/epsilon` invite and its asset host, all first-party. The phasing, streaming, customisation and roleplay claims are Epsilon's own marketing copy and we have not verified any of them in game, because there is no published way to connect. The demotion's origin is our own git history, commit `6d50f73` of 25 August 2026, quoted verbatim. Superseded values are struck through per our [correction policy](/blog/tracker-correction-policy-explained/). Related: [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), [the Warmane self-correction](/blog/the-client-you-did-not-build/), and [how we review a private server](/blog/how-we-review-a-private-server/).
