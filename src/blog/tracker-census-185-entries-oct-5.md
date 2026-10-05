---
title: "185 servers, 87 without a population band, and why that is the honest number"
date: 2026-10-05
category: guides
heroImage: /images/hero-1.jpeg
summary: "A census of our own tracker after a week of corrections: nearly half the entries carry no population band, WotLK is nearly half the scene, and thirteen dead servers stay listed on purpose."
---

Our tracker holds **185 entries** as of this morning: **138 playable, 34 in development, 13 dead.** Six days ago it held 145. Forty entries were added, almost entirely from two directory diffs, and every one was read first-party before it went in.

That growth is worth a census, because what the numbers say about the scene is less flattering than the growth itself.

## Nearly half the tracker has no population band

**87 of 185 entries are rated `unknown`.** That is 47%, and it is the largest single tier by far. The rest: 48 tiny, 31 small, 8 medium, 11 large.

A week ago the unknown count was lower, and the reason it grew is that we spent the week **removing bands we could not source**: six entries downgraded for carrying Discord counts as population figures, three more for dead domains, one for a zero that could not be refreshed, and a standing gate that now fails the build if any rated entry lacks a website behind it.

The alternative to 87 unknowns is not 87 measured populations. It is 87 invented ones. Every band on this tracker is either a project's own live counter read on a date, or it does not exist.

## WotLK is nearly half the scene

By client era, **85 of 185 run Wrath of the Lich King 3.3.5a.** That is 46%, and it explains most of what follows.

The rest: 24 Vanilla+, 20 Vanilla, 9 Cataclysm, 8 each for Legion, TBC and MoP, 6 Multi, 6 Classless, 3 TWW, 2 MOBA, 1 WoD, and 5 blank where we cleared unsourced tags rather than guess.

WotLK's share is not an accident of our coverage. The 3.3.5a client is the one with mature cores, botting frameworks, twenty years of tooling, and the largest audience. Every custom project that wants players starts from the client the players already have, and that client is Wrath.

## Thirteen dead servers stay listed on purpose

The dead entries are not removed when projects close. ArgusWoW has been dead since May 2022 and it is still in the file, because a reader searching the name should find "closed" with a date rather than nothing.

The same logic covers the five closed projects a competitor lists that we never tracked: without a shutdown date they cannot enter, because our dead-entry gate requires one. A dateless dead entry is the exact value this tracker refuses to publish.

## 160 have addresses, 25 do not

Thirteen of the 25 are dead, which is correct: a shut-down server needs no address. The remaining twelve are dev projects with no locatable website, each flagged unverifiable with the search attempts recorded.

That last number used to be higher. Thirty entries had no URL a week ago, and the difference is fourteen found addresses plus Epsilon's, which arrived as a user-supplied URL. The queue metric that governs this tracker is entries verified within N days, and it currently reads zero stale.

## What the census does not tell you

Whether any of these servers are good. We have played none of them, and a count of entries is a count of records, not a review. The census exists so a reader can see the shape of what we hold and, more importantly, the shape of what we refuse to claim.

SOURCES: our own data file on October 5 2026. Every count above is computed from it, not estimated. Related: [the correction policy](/blog/tracker-correction-policy-explained/), [how we review a private server](/blog/how-we-review-a-private-server/), and [the grading scale](/grading/).
