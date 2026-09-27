---
layout: base.njk
surface: dashboard
permalink: /grading/
title: "How we grade WoW private-server information"
canonical: "https://wowprivateservers.vercel.app/grading/"
hero: "Grading"
subtitle: "What each confidence level on this site means, and what evidence it takes to move an item up"
description: "The A to D confidence scale used across the tracker, the hub and the newsroom: what each grade means, what evidence moves an item between grades, and how to check our work."
eleventyComputed:
  description: "The A to D confidence scale used across the tracker, the hub and the newsroom: what each grade means, what evidence moves an item between grades, and how to check our work."
---

We have been grading sources in our prose for months and never published the scale. That is a real gap, because grading you cannot see is grading you cannot check, and a reader who does not already trust us gets no way to tell a client read from a press paraphrase. This page is the fix.

Two of the fan sites we cite publish their own scheme. wowforeverclassic.com uses an A to D confidence scale. wow-forever.top separates official information, panel reporting and beta-unverified data. Ours is stricter about *what counts as independent*, and it is the only one of the three that says plainly that a client read is a different kind of evidence from a press release. The thresholds below are ours and are deliberately stricter than a single-source fan site will usually be.

## The scale

| Grade | Means | What it takes |
| --- | --- | --- |
| **A: Official** | Stated by the publisher or operator, and reachable | Blizzard's own article, forum post, roadmap or storefront; the realm's own site, patch notes or status feed |
| **B: Verified** | Two or more genuinely independent sources agree | Independent outlets, or two separate captures of the same first-party surface |
| **C: Reported** | One source says it, shown and clearly marked | A single outlet, a single datamine, a single playthrough, or a fan reference that states it without sourcing |
| **D: Unconfirmed** | Asserted somewhere, unsupported, or in open conflict | Forums, video, screenshots with no context, and any claim where two sources actively disagree |

Two rules sit on top of the letters, and they are the parts that matter.

**One source is Reported. Two agreeing sources are Verified.** Never promote a single source to Verified no matter how authoritative it looks. If the only evidence is one outlet's word, it stays C.

**Disagreements wait for review.** When two sources conflict, neither wins by default and we do not average them. The item stays open, both values appear, and it is named in the [verification hit list](/news/forever-beta-verification-hit-list/) until something settles it.

## Two distinctions we refuse to blur

**A client read is not official, and it is not nothing either.** Reading values out of a game client is the strongest evidence available in a scene where the publisher is not documenting much. It is also unrepeatable by a reader, and it can be wrong about intent while being right about bytes. We grade it **C: Reported** and we name the method every time, because what it establishes is what the build does, not what Blizzard meant. Where a client read contradicts an official note, the official note wins and the client read is reported as an observation.

**A self-reported number is not a measurement.** A realm saying it has 650 players online is the realm's claim. We record it as self-reported, every time, in the tracker entry itself rather than in a footnote. We will not turn a marketing page into a population tier.

## What moves an item up or down

- **Up, one step:** a better source arrives. A named official post replaces a press paraphrase. Two independent outlets agree where one did.
- **Up, two steps:** the first-party surface is reachable and the value is read from it directly rather than reported.
- **Down, one step:** a source we relied on is corrected or withdraws. We keep the old claim visible.
- **Down, to open:** a second source appears and disagrees. Both values go on the page, dated, and the item moves to the hit list.
- **Down, to rejected:** the operator states it, or the surface is unreachable, and neither can be reconciled with a reachability check.

## Corrections, and why the old value stays

When we change a claim, the old value stays on the page, struck through, with a date. A tracker that quietly fixes its errors looks identical to one that never had errors, and a reader cannot tell "we were right" from "we were wrong and hid it".

The live record is the [correction policy](/blog/tracker-correction-policy-explained/), the working document is the [Forever verification hit list](/news/forever-beta-verification-hit-list/), and every entry in the tracker carries a `Last checked` date so you can see how stale a given claim is. The [census page](/census/) defines the population bands and now derives its snapshot date from the newest check in the data, so it cannot quietly go out of date.

Two worked examples, both from this week:

**A population tier we got wrong.** Our entry for one realm read `large`, taken from a headline figure on its own dashboard. That figure counted bots. The same dashboard broke it down and showed four concurrent human players. The tier moved to `tiny` on September 27 and the old value stayed visible.

**A date we got early.** Our entry for another realm dated a raid unlock to August 22, from our own earlier check. The project's news page said 20:00 on August 28. Corrected, old value struck, both dates visible.

## What we refuse to do

- We do not run binaries from a realm's launcher or client. Hashing and static reading are fine; execution is not.
- We do not list a server on a Discord invite, a toplist entry or a friend's recommendation. Discovery tools, not evidence.
- We do not publish a population number a realm has not published about itself.
- We do not carry a "no pay-to-win" framing we have not verified. Several realms we track sell boosts or finished legendaries outright, and that is recorded in the entry.
- We do not link directly to tracked private-server domains. Every realm page routes out through a name search.

## Where to check our work

- [Tracker](/servers/) for status, tier and a `Last checked` date on all 145 entries
- [Census](/census/) for what the population bands mean, derived live from the data
- [Verification hit list](/news/forever-beta-verification-hit-list/) for every open Forever question and its current state
- [Links directory](/#tab-links) where our graded fan references carry a dated note saying what we checked and where they disagree with us

If something here is wrong, the fastest path to a fix is the one we use: find a better source, grade it, change the claim, leave the old value visible. We would rather be caught correcting than caught being confidently wrong.

SOURCES: our own published standard, derived from the [correction policy](/blog/tracker-correction-policy-explained/) and the [verification hit list](/news/forever-beta-verification-hit-list/), and from a source audit of three Forever fan references on September 27, 2026. Two of them publish comparable scales: wowforeverclassic.com uses A to D where one tester is Reported and two agreeing is Verified, and wow-forever.top separates official information, panel reporting and beta-unverified data.
