---
title: "Every region is on the same build, and that turns out to be checkable"
date: 2026-10-02
category: news
summary: "We had never checked whether wowdev2's four regions agree. They do, across six consecutive builds. Sharding betas normally diverge, so this is a small finding that constrains a big question."
---

Our CDN watcher reads the `wowdev2` manifest and reports a build number. It had never reported **which regions that number applies to**, because the question had not been asked.

It is answerable from the same first-party data, and the answer is more interesting than "yes".

## All four regions, six builds, no disagreement

Every `wowdev2` manifest entry returns **four regional records**, and across the last six pushes all four agree on the version:

| Sequence | Regions | Distinct versions |
| --- | --- | --- |
| 4054085 (70170) | 4 | 1.60.1.70170 |
| 4048898 (70100) | 4 | 1.60.1.70100 |
| 4045381 (70058) | 4 | 1.60.1.70058 |
| 4037765 (70009) | 4 | 1.60.1.70009 |
| 4035077 (69963) | 4 | 1.60.1.69963 |
| 4025733 (69913) | 4 | 1.60.1.69913 |

**In parity on every push.** No region has ever been a build behind in this window.

## Why that is worth checking

Because regional divergence is the normal failure mode for a sharded beta, and it has direct consequences for anyone reading our build reports.

Our own tracking records, and the [hit list](/news/forever-beta-verification-hit-list/) carries it as open, that Blizzard's next expansion has a **"Heroic" world tier** for retail's next expansion. If **Classic Plus shards per realm**, and those shards are region-scoped, then a player on the EU realm could be testing a different build from a player on the US realm, and every bug report, every datamine and every "is this fixed yet" would be region-qualified.

Right now they are not. **There is no region caveat on any of our six build reports**, and there should not be, because for six consecutive pushes the question does not arise.

That is a constraint, not a conclusion. Parity across six pushes in a four-week window is consistent with "they deploy globally every time" and is also consistent with "they have not yet started sharding to regions". We are not going to tell you which, and the moment one region lags a build, the six reports above stop being current in the way they intend.

## The method, since it is reusable

It is a two-line check against the same endpoint the watcher already reads, one query per sequence, comparing `version_name` across the regional records. No new dependency, no new data source, and it is the kind of thing that is worth five minutes once and then free forever.

Our build reports now include regional parity where we checked it. This is the first report to do so.

## What we cannot tell you

Whether parity will hold through launch, whether a region's manifest lags in a way the sequence number hides, and whether Classic Plus realms are region-scoped at all. That last one is the open question, and this finding only tells us it is not currently costing a build's worth of divergence.

SOURCES: the `wowdev2` manifest and its `seqn` history, read via the blizztrack API on October 2 2026, the same first-party CDN data our watcher reads. Six sequence numbers were queried individually and their regional records compared; every one returns four regions on a single version. Our watcher has been reading this endpoint since September and had not compared regions, which is why this is a new observation rather than a long-standing one. Related: [the 70170 build report](/news/forever-beta-build-70170-live-oct-2/), [retail's Heroic tier report](/news/retail-last-titan-heroic-tier/), and the [grading scale](/grading/).
