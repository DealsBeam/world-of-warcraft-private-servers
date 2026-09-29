---
title: "Beta build 1.60.1.70058 is live, and the fan sites have not noticed"
date: 2026-09-29
category: news
summary: "A new Forever beta build landed on the CDN early on September 29, up from 70009. Our build watcher caught it. All three fan references we track are still on 70009. Nobody has published notes."
---

A new World of Warcraft: Forever beta build is live: **1.60.1.70058**, up from 1.60.1.70009. Our CDN watcher recorded it, and it is the only source in this coverage that has.

**What we do not know is what changed in it.** There are no developer notes for 70058 from Blizzard, and none of the fan references has written one up. Anyone reading this is ahead of the published record and behind the actual build, which is an uncomfortable but useful position to be in during a beta.

## What the watcher actually saw

Two sequence bumps on the `wowdev2` track, both dated September 29 by the CDN:

| Time (UTC) | Build |
| --- | --- |
| Sep 29, earlier | 1.60.1.70009 re-pushed, sequence 4045250 |
| Sep 29 | **1.60.1.70058**, sequence 4045381 |

The 70009 re-push matters more than it looks. The same build number appearing under a new sequence usually means a repackaged or re-uploaded manifest rather than a code change, and the 70058 entry arrived after it in the same window. That is a normal deploy pattern, not evidence of a second hidden build.

The recent build history, for scale:

```
1.60.0.69818   Sep 12
1.60.0.69800   Sep 16
1.60.0.69876   Sep 16
1.60.1.69913   Sep 18
1.60.1.69963   Sep 23
1.60.1.70009   Sep 24
1.60.1.70058   Sep 29   <- now
```

Six bumps in seventeen days, and 70058 is the fifth distinct 1.60.1 build of the beta. If you are testing classes, talents or racials, the ground under your numbers moved again overnight.

## The fan references are all one build behind

We re-read all three on September 27 and again this morning. Every one is still describing 70009:

- **classicwowforever.com**, stamped "Last updated 26 Sept 2026", tracking build 70009, with its latest article still titled for the September 24 notes.
- **wowforevertalent.com**, data revision `beta-20260926-9c23ce23`, built from the September 26 export.
- **wow-forever.top**, beta tracker "updated September 26, 2026", tracking build 1.60.1.70009.

That is not a criticism. They publish dated, sourced material on a schedule and were accurate as of their stamps. It is a reminder that on a fast-moving beta, a "last updated" date is the most important field on any reference page, and all three carry one honestly.

## Two open questions that a new build may or may not have moved

**The auto-shot and wand cast bug** is the one worth testing first. Kaivax confirmed on September 23 that the 0.5-second cast before a Hunter auto-shot or wand use was not functioning, and promised a fix for a future build. The September 24 notes did not include it, and 70009 was the build they shipped in. Whether 70058 contains the fix is exactly what a tester can check in a minute, and it is a change with an official promise attached rather than a datamined value.

**Server Slam** is still unannounced by anyone. The most specific line any source has published is wowforevertalent's, citing the official now-live note: "21 October is the last full test day; the Server Slam window is still to be announced." A new build on the 29th does not make a Server Slam more likely on the 22nd, but it does mean the final test days are now being decided on a build that launched this morning.

## What to do with this

If you are in the beta, pull the new client and re-check whatever you were measuring. Class and racial tuning moved on the 24th and there is no reason to think it stopped.

If you are tracking Forever rather than playing it, the honest position is that the published record now describes a build that is no longer the one in the test. We are updating the [hub's build watch](/classic-plus/) to read the live value rather than a hardcoded number, precisely so that this page does not go stale the same way.

And if you are one of the sites above: a new build is up, and there is space on a build page.

SOURCES: the Blizzard `wowdev2` CDN manifest via [blizztrack.com](https://blizztrack.com/view/tact/wowdev2), read September 29 2026 at 02:26 UTC, giving the current version and the last ten sequence bumps. Fan-reference currency from classicwowforever.com, wowforevertalent.com and wow-forever.top, all re-read September 27 and again the morning of the 29th. The auto-shot bug status is our [verification hit list](/news/forever-beta-verification-hit-list/), which records Kaivax's September 23 confirmation and the absence of a fix in the September 24 notes. Whether 70058 changes anything is not established here and we did not test the client.
