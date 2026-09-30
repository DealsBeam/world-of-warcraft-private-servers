---
title: "Beta build 1.60.1.70100 is live, and it is one build, not three"
date: 2026-09-30
category: news
summary: "A third manifest push in 24 hours, up from 70058. Comparing build_config across all three shows exactly one new build and one CDN re-point. Nobody has written notes for 70058 or 70100, including us."
---

The `wowdev2` manifest moved again overnight: **1.60.1.70100**, up from 1.60.1.70058. Our CDN watcher caught it.

The naive read of the sequence log is "three builds in 24 hours". That is wrong, and the reason it is wrong is the reason this watcher exists.

## One build, pushed twice

Three manifest entries landed since yesterday morning, at sequences **4045250**, **4045381** and then **4048898**, with an intermediate **4047813**. The build numbers read 70009, 70058, 70100, 70100. But the manifest carries more than a version string, and the extra fields disagree with the version numbers:

| Sequence | Time (UTC) | Build | build_config | cdn_config |
| --- | --- | --- | --- | --- |
| 4045250 | Sep 29, 00:12 | 1.60.1.70009 | `125bce18` | `9c21df5e` |
| 4045381 | Sep 29, 01:22 | 1.60.1.70058 | `0f4f79ca` | `8f9c7cd7` |
| 4047813 | Sep 29, 20:18 | 1.60.1.70100 | `bda4c31c` | `b1239a1d` |
| 4048898 | Sep 29, 23:01 | 1.60.1.70100 | `bda4c31c` | `6c33386e` |

Read the two right-hand columns together and the picture is unambiguous:

- The **20:18 and 23:01 entries carry an identical `build_config`**, `bda4c31c`. Same build, uploaded twice.
- Their **`cdn_config` differs**, `b1239a1d` against `6c33386e`. The content delivery configuration moved while the build stayed put.
- **`build_config` does differ between 70058 and 70100**, `0f4f79ca` against `bda4c31c`, so 70100 is genuinely a new build and not a repackage of 70058.
- `product_config` (`ec1375ca`) and `keyring` (`3ca57fe7`) are stable across all four.

So the accurate statement is: **one new build, 70100, published at 20:18 UTC on September 29, then re-pointed on the CDN at 23:01 UTC.** Not three builds. A CDN re-point is a routine deploy artefact and it is the same pattern we saw on the 70009 re-push yesterday morning.

The build number itself jumped **70058 to 70100**, a gap of 42, where the previous step was 49. We do not read anything into that. Build IDs are not sequential in any way we can verify, and guessing at the pattern would be exactly the kind of unfalsifiable story this coverage is supposed to avoid.

## Nobody has written notes for either of the last two builds

**70058** and **70100** are both completely undocumented, by us and by every reference we track.

The last build anyone has actually written up is **70009**, and classicwowforever published notes for it on **25 September**: two talents cut, two renamed, Wrath and Holy Strike buffs, a flat Eureka! discount, easier campfires, and quest fixes with a known-issues list. That is genuinely useful work and it is five days stale.

The other two are behind it:

- **classicwowforever** still leads with its 70009 notes.
- **wow-forever.top** still reads "Current tracked client build: 1.60.1.70009", last updated 26 September, and still has no Server Slam or Onyxia coverage.
- **wowforevertalent** publishes game data rather than build notes, so it is not a comparison here.

So the published record is two builds behind the deployed client, and the gap is now roughly forty hours of unattended beta.

## What this is and is not evidence of

It is evidence of **deploy cadence**: two distinct new builds in about nineteen hours, plus a CDN re-point, across a beta six weeks from launch on 4 November. That is consistent with a team shipping continuously rather than staging.

It is **not** evidence about content. Nothing in the manifest says what changed. We have no developer notes for 70058 or 70100, we have not played either, and we are not going to guess at whether the auto-shot and wand cast bug we have been tracking since 23 September got fixed in a build nobody has documented. Our [verification hit list](/news/forever-beta-verification-hit-list/) carries that claim as open, and it stays open.

The honest position, restated because it is the same one from yesterday: **a build number is infrastructure news, and treating it as a content signal is how trackers end up reporting things nobody verified.** Anyone reading this is ahead of the published record and behind the actual client.

SOURCES: the `wowdev2` manifest and its `seqn` history, read via the blizztrack API on September 30 2026, which is the same first-party CDN data our watcher reads. Every build number, sequence, timestamp, `build_config`, `cdn_config`, `product_config` and `keyring` value in the table is transcribed from those manifest responses, and the identity of the two 70100 entries is our comparison of their fields, not a published claim. The fan-reference status is from classicwowforever's own notes page, wow-forever.top's beta updates page and wowforevertalent, all read September 30 2026. We have not played either build. Related: [the 70058 report](/news/forever-beta-build-70058-live-sep-29/), the [grading scale](/grading/), and the [correction policy](/blog/tracker-correction-policy-explained/).
