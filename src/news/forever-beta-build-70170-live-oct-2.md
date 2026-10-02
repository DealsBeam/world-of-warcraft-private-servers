---
title: "Beta build 1.60.1.70170 is live, and the last three builds have no notes"
date: 2026-10-02
category: news
summary: "A fourth build in five days, up from 70100, and unlike yesterday's double upload it is a single clean push. Nobody, including us, has written notes for 70058, 70100 or 70170."
---

The `wowdev2` manifest moved to **1.60.1.70170** on 1 October, up from 70100. Our watcher caught it.

Unlike yesterday, this one is unambiguous. Yesterday's 70100 appeared twice with the same `build_config` and a different `cdn_config`, which is one build plus a CDN re-point. This time there is a single entry:

| Sequence | Time (UTC) | Build | build_config | cdn_config |
| --- | --- | --- | --- | --- |
| 4045250 | Sep 29, 00:12 | 1.60.1.70009 | `125bce18` | `9c21df5e` |
| 4045381 | Sep 29, 01:22 | 1.60.1.70058 | `0f4f79ca` | `8f9c7cd7` |
| 4047813 | Sep 29, 20:18 | 1.60.1.70100 | `bda4c31c` | `b1239a1d` |
| 4048898 | Sep 29, 23:01 | 1.60.1.70100 | `bda4c31c` | `6c33386e` |
| **4054085** | **Oct 1** | **1.60.1.70170** | **`431d25c9`** | **`03e38411`** |

`build_config` differs from 70100, so this is a genuinely new build, and there is no second entry to explain. `product_config` (`ec1375ca`) and `keyring` (`3ca57fe7`) are unchanged across all five, which is what a normal patch looks like.

The `build_id` step is **+70** from 70100, where the previous step was +42. We are not reading anything into that. Build IDs are not verifiably sequential and a pattern invented from three data points is not a finding.

## The gap is now three builds deep

The published record is further behind than it was:

- **70058**, 29 September, still undocumented by anyone.
- **70100**, 29 September, undocumented.
- **70170**, 1 October, undocumented.

The last build anybody has actually written up remains **70009**, and classicwowforever published real notes for it on 25 September: two talents cut, two renamed, Wrath and Holy Strike buffs, a flat Eureka! discount, easier campfires, and quest fixes with a known-issues list. That is now **eight days stale**.

The other two references we track are behind as well. **wow-forever.top** still reads "Current tracked client build: 1.60.1.70009" and its beta tracker was last updated 26 September. **wowforevertalent** publishes game data rather than build notes, so it is not a comparison here.

So: four distinct builds in five days, and the written record covers one of them.

## What this is and is not

It is evidence of **deploy cadence**, and the cadence has been sustained: 70009, 70058, 70100 and 70170 across five days, plus a CDN re-point. That is consistent with a team shipping continuously through a beta that now has **33 days to launch** on 4 November.

It is **not** evidence about content. Nothing in a manifest says what changed. We have no developer notes for any of the last three builds and we have not played any of them. The auto-shot and wand cast bug we have been tracking since 23 September is unverified in all three, and our [verification hit list](/news/forever-beta-verification-hit-list/) still carries it as open.

The honest position has not changed since 29 September: **a build number is infrastructure news, and treating it as a content signal is how trackers end up reporting things nobody verified.** Anyone reading this is ahead of the published record and behind the actual client, which during a beta is a real position to be in and a bad thing to pretend otherwise about.

SOURCES: the `wowdev2` manifest and its `seqn` history, read via the blizztrack API on October 2 2026, which is the same first-party CDN data our watcher reads. Every build number, sequence and config value in the table is transcribed from those manifest responses, and the identification of yesterday's double upload as one build plus a re-point is our comparison of the `build_config` and `cdn_config` fields, not a published claim. Fan-reference currency is from classicwowforever's notes page, wow-forever.top's beta updates page and wowforevertalent, all read October 2 2026. Related: [the 70100 report](/news/forever-beta-build-70100-live-sep-30/), [the 70058 report](/news/forever-beta-build-70058-live-sep-29/), the [grading scale](/grading/), and the [correction policy](/blog/tracker-correction-policy-explained/).
