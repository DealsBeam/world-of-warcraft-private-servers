---
title: "Our build watcher was reading the wrong track, and three beta builds passed through unseen"
date: 2026-10-07
category: news
summary: "The watcher read Blizzard's internal dev track while players download the beta track. Fixed today: both tracks are now read, the player build is 70245 not 70249, and the 70124 mystery is resolved."
---

Our CDN watcher has been reporting the wrong build as live. Not a wrong number: the right number from the wrong place.

## Two tracks, different builds

Blizzard's CDN carries Forever 1.60 builds on **two tracks**:

- **wow_classic_beta**: the client beta testers download. Currently **1.60.1.70245**.
- **wowdev2**: internal development. Currently **1.60.1.70249**.

Our watcher read only the second one. So every "latest build" we published since September, including this morning's hub reading of 70249, was the **dev build**, not the player build. The actual client in testers' hands is 70245.

## Three builds we never saw

The beta track's history contains builds that never appeared in ours:

| Date | Beta track | Our watcher showed |
| --- | --- | --- |
| Sep 30 | **70124** | 70009 (then 70058) |
| Oct 5 | **70235** | 70205 |
| Oct 6 and 7 | **70245** | 70205 (then 70249) |

**70124 resolves an open discrepancy from October 4.** A fan reference dated 70170 as 45 hours after 70124, a build our history did not contain. It exists: pushed September 30 at 01:57 on the beta track, exactly 45 hours before 70170's beta push. Neither a second mystery nor their error. Our history was incomplete and theirs was not.

70235 and 70245 both diffed at zero player-facing changes by the same reference, so nothing about the game was missed. What was missed was the reporting: our build posts for those days describe a quieter CDN than the one that existed.

## Same version is not the same build

The comparison that makes the two-track reading load-bearing: **70205 carries build_config `73256751` on wowdev2 and `842b2e5d` on the beta track.** Same version string, different builds.

Version numbers are labels applied per track, not identities. Anyone comparing a datamine against a manifest needs the track as well as the number, or the comparison is against the wrong binary. Every build ID step we have ever published (+42, +70, +35) was computed within one track and stays valid; across tracks the numbers are meaningless.

## The fix, and what changed on the site

The watcher now reads **both tracks**. The hub's "Latest build" line and the build-watch panel lead with the **beta** build, with the dev build beside it labelled internal. The beta history on the hub now runs 70124, 70170, 70205, 70235, 70245.

The build test was extended to require both tracks present and every version string on both well-formed. It passes with beta at five bumps and dev at eight.

## What this costs

Every build report before today that said "latest build" meant the dev track without saying so. The numbers in those posts were accurate transcriptions of the manifest we read; the framing presented a dev number as the player number. That is now corrected in the data, and this post is the visible correction.

The honest summary of what we actually know this morning: **players have 70245, internal is at 70249, all four regions agree on each, and the last documented content change anywhere remains 70170's two class abilities.**

SOURCES: the wowdev2 and wow_classic_beta manifests and both seqn histories, read via the blizztrack API on October 7 2026. Every version, timestamp and build_config value above is transcribed from those responses. The 70124 push (September 30, 01:57) and the per-track config divergence are our comparisons, not published claims. Related: [the 70205 report](/news/forever-beta-build-70205-live-oct-3/), [the 70170 report](/news/forever-beta-build-70170-live-oct-2/), and [what our build reports mean](/blog/forever-beta-build-reports-explained/).
