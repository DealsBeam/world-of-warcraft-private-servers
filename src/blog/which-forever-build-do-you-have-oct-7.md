---
title: "Which Forever build do you actually have? A two-track guide"
date: 2026-10-07
category: guides
heroImage: /images/hero-2.jpeg
summary: "Blizzard ships Forever on two CDN tracks with sometimes-matching version numbers on different binaries. How to tell which one you downloaded, and why it matters for every bug report you read."
---

If you play the Forever beta, the client on your machine came from one of **two tracks**, and the version number in the corner of your screen does not tell you which one.

This guide explains the two tracks, how to identify yours, and why every bug report, datamine and "is it fixed yet" you read needs a track attached to be meaningful.

## The two tracks

| | Beta track | Dev track |
| --- | --- | --- |
| Manifest | wow_classic_beta | wowdev2 |
| Who downloads it | Beta testers | Internal (usually) |
| Current build | 1.60.1.70245 | 1.60.1.70249 |
| Updated | Oct 7 | Oct 6 |

The dev track is usually ahead. It is not the game anyone plays.

## Same version, different binary

The finding that makes this guide necessary: **70205 carries build_config `73256751` on wowdev2 and `842b2e5d` on the beta track.** Same version string, different builds.

Version numbers are labels applied per track, not identities. Two players comparing notes on "70205" could be running different binaries with different content, and neither would know from the number alone.

Practical consequence: **any datamine, bug report or fix claim needs the track as well as the version.** A talent value datamined from the dev client may not exist in the beta client with the same number on it. Our own reporting now carries both, and any reference that does not is a source you should discount by one grade.

## How to tell which you have

The honest answer is that most players cannot, from inside the game. The version string is the same. What distinguishes them is provenance: **where you downloaded from.**

- Beta access through Blizzard's beta program downloads from the **beta track**. If you are a tester playing normally, you have the beta build.
- Anything else, a manual manifest pull, a third-party client package, a datamining setup, may be either. Check the source documentation, and if it does not say, assume nothing.

Fan references that diff builds (wow-forever.gg, Forever Codex) work from recorded clients. Their diffs are valid for the track they recorded, which both label as beta. Trust those labels exactly as far as they go.

## Why the tracks diverge

Because they serve different purposes. The dev track accumulates internal work continuously; the beta track receives promoted snapshots. Between promotions the dev track runs ahead, sometimes by a full build number (70249 versus 70245 today).

Promotions are visible in the beta history as repeated pushes of the same version: 70245 appears three times, 70205 twice, 70170 three times. Same binary, re-pointed CDN. That is routine deploy behavior, not hidden content.

## What this means for launch

At some point before November 4, the beta track has to become the launch client, or be replaced by one. Watching the two tracks converge, same version with matching configs on both, is the most reliable signal available that the launch client exists.

Until then: **quote the track with the version, every time.** It costs four words and it is the difference between a checkable claim and a guess.

SOURCES: both manifests and both seqn histories via the blizztrack API, read October 7 2026. The config divergence is our comparison, not a published claim. Related: [the watcher correction](/news/watcher-read-wrong-track-two-tracks-oct-7/), [what our build reports mean](/blog/forever-beta-build-reports-explained/), and [the grading scale](/grading/).
