---
title: "Beta build 1.60.1.70205 is live, and all four regions moved together"
date: 2026-10-03
category: news
summary: "A fifth build in seven days, up from 70170. Four regions in parity, and the published record on this branch is now three builds behind with no notes for any of them."
---

The `wowdev2` manifest moved to **1.60.1.70205** on 3 October, up from 70170. Our watcher caught it.

## One clean push

| Sequence | Time (UTC) | Build | build_config | cdn_config |
| --- | --- | --- | --- | --- |
| 4045381 | Sep 29, 01:22 | 1.60.1.70058 | `0f4f79ca` | `8f9c7cd7` |
| 4048898 | Sep 29, 23:01 | 1.60.1.70100 | `bda4c31c` | `6c33386e` |
| 4054085 | Oct 1, 21:44 | 1.60.1.70170 | `431d25c9` | `03e38411` |
| **new** | **Oct 3, 00:39** | **1.60.1.70205** | **`73256751`** | see below |

`build_config` differs from 70170's, so this is a genuinely new build rather than a repackage or a CDN re-point, and it is a single sequence rather than the paired push that 70100 produced. `product_config` (`ec1375ca`) and `keyring` (`3ca57fe7`) remain stable, which is what a normal patch looks like.

The `build_id` step is **+35**. We do not read anything into it. That is now three steps of +42, +70 and +35 with nothing verifiable behind them, and a pattern invented from three points is not a finding.

## Regional parity holds

All four regions are on 70205. That is now **seven consecutive pushes** in parity across us, eu, sg and the xx region, checked individually against the manifest.

This is the check we added on 2 October and it keeps returning the same answer, which is the useful outcome: there is still no regional caveat on any of our build reports, because for seven pushes the question does not arise. If Classic Plus shards per realm and those shards are region-scoped, at present nothing is being qualified by region.

## Five builds in seven days, none documented

The cadence has not slowed: **70058, 70100, 70170, 70205**, plus a CDN re-point, across 29 September to 3 October.

The written record is unchanged and further behind. **No developer notes exist for 70058, 70100, 70170 or 70205** from Blizzard, from us, or from any of the three references we track. The last build anyone has actually written up remains **70009**, with classicwowforever's genuine notes from 25 September: two talents cut, two renamed, Wrath and Holy Strike buffs, a flat Eureka! discount, easier campfires, and quest fixes.

That is **eight days and four builds**.

There is also still no public hotfix channel for this branch, as established by the 1 October hotfix post, which covers six products and not this one.

## What this is not evidence of

It says nothing about content. No manifest field contains a changelog. The **auto-shot and wand cast bug** we have carried as open since 23 September is unverified in all four of these builds and stays open.

**Launch is 32 days out**, on 4 November at 23:00 UTC, and the beta close is 21 October, which is 18 days from today. Whatever is going to be fixed is presumably being fixed in this window, and we will not know from any source we can reach.

SOURCES: the `wowdev2` manifest and its `seqn` history, read via the blizztrack API on October 3 2026, the same first-party CDN data our watcher reads. Every build number, sequence, timestamp and config value is transcribed from those manifest responses. Regional parity was confirmed by comparing the regional records on the current manifest and on six prior sequences. The bug status is from our own [verification hit list](/news/forever-beta-verification-hit-list/), which carries it as open. Related: [the 70170 report](/news/forever-beta-build-70170-live-oct-2/), [the regional parity finding](/news/forever-regional-build-parity-oct-2/), and [what our build reports mean](/blog/forever-beta-build-reports-explained/).
