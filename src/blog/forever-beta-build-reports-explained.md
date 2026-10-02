---
title: "What our build number means, and the four things it does not tell you"
date: 2026-10-02
category: guides
heroImage: /images/hero-1.jpeg
summary: "We have reported five beta builds in a week. This is what each one is evidence of, and why a build number is not a content signal no matter how often it moves."
---

Our CDN watcher has now caught **1.60.1.70058, 70100 and 70170**, and we reported each. That is three reports about a game we cannot play, which deserves an explanation of what a build number is actually evidence of.

It is worth writing down because the alternative, a tracker that reports builds as though they were content, is how coverage ends up saying things nobody verified.

## What a build number is

A beta client served from Blizzard's CDN, on a branch tracked as `wowdev2`. Our watcher reads that manifest on a schedule and records the version string when it changes.

The manifest carries more than a version string, and the extra fields are where the useful reading is:

- **`build_config`** identifies the build itself. Same value, same build.
- **`cdn_config`** identifies the delivery configuration. It changes when the files are re-pointed.
- **`product_config`** and **`keyring`** identify the product and its encryption keys. These have been stable across every push we have recorded.

That is why yesterday's 70100 was **one build and not two**. It appeared at two sequences, 20:18 and 23:01, carrying an identical `build_config` and a different `cdn_config`. One build, uploaded, then re-pointed. Anyone reading only the version column would have counted two.

And it is how we tell a genuine new build from a repackage: **`build_config` has to change**. 70170's is `431d25c9` against 70100's `bda4c31c`, so 70170 is real.

## What four builds in five days means

It means a studio is deploying continuously through a beta. That is a cadence reading and it is the only thing it is.

It does **not** tell you:

- **What changed.** No manifest field contains a changelog. We have no developer notes for 70058, 70100 or 70170, and neither does anyone else we track.
- **Whether a bug was fixed.** We have been tracking an **auto-shot and wand cast bug** since 23 September. It is unverified in all three of those builds, and it stays unverified. Three new builds is not evidence of a fix.
- **What the build number sequence means.** `build_id` went +42 then +70 across those steps. That is three data points and no verifiable sequence, so we do not read anything into it. Inventing a pattern from it would be the exact failure this post is about.
- **Which regions it applies to.** We checked this on 2 October, and for the last six pushes all four regions are on the same build, in parity every time. That is a real constraint on "is this fixed yet" questions, and it is the kind of thing worth knowing precisely because it is usually assumed rather than checked.

## Why we report them at all

Because nobody else does. Over the last four days we published 70058, 70100 and 70170, and the three fan references we track were all still on **70009**, the last build any of them had written about.

The last build with real published notes remains 70009, from 25 September: two talents cut, two renamed, Wrath and Holy Strike buffs, a flat Eureka! discount, easier campfires, and quest fixes. Those notes are now **eight days stale**, and they cover a client four builds behind.

So our position is: **ahead of the published record, behind the actual client.** That is uncomfortable and it is also the only useful place to be during a beta, as long as we say which one we are in.

## The honest summary for a reader

If you want to know what changed in Forever, this site's build reports will tell you **that something shipped**, and they will tell you with a precision the fan sites do not have, including whether a build was genuinely new or just re-pointed.

They will not tell you what is in it. For that, the class deep dives and the Legacy System post are worth far more than four build numbers, because those have numbers in them you can argue with.

## What we cannot tell you

Whether any of this is good. We have not played a single build, we have no beta client, and every figure here is infrastructure metadata rather than a game experience. A build that adds a raid and a build that fixes a crash are the same line in a manifest.

SOURCES: the `wowdev2` manifest and its `seqn` history, read via the blizztrack API on 2 October 2026, the same first-party CDN data our watcher reads. Every build number, sequence, timestamp and config value quoted here is transcribed from those manifest responses. The bug status is from our own [verification hit list](/news/forever-beta-verification-hit-list/), which is dated and carries it as open. Related: [the 70170 report](/news/forever-beta-build-70170-live-oct-2/), [the regional parity finding](/news/forever-regional-build-parity-oct-2/), and [the class deep dives](/news/forever-class-deep-dives-hunter-druid-sep-30/).
