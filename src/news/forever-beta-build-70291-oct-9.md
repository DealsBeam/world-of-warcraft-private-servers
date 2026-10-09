---
title: "Beta build 70291 is live with a new build config"
date: 2026-10-09
category: news
summary: "Single push on the beta track with build config e8dd824c, distinct from 70245. No fan reference has covered it yet."
---

The beta track moved to **1.60.1.70291**, up from 70245, with build config `e8dd824c` against 70245's `0bf14126`.

Single push, new binary, not a re-point. Product config and keyring stable, regions in parity per the manifest record.

## Coverage gap, reopened

Neither fan reference that diffs builds has published 70291 yet. Their latest remains the 70245-versus-70235 comparison at zero changes. The gap between our manifest reading and their written record, which closed briefly this week, is open again by one build.

No Blizzard notes are attached to it. The Kaivax maintenance fixes of October 6 shipped through realm restarts, not through this client, so there is no reason to link the two beyond timing.

SOURCES: the wow_classic_beta manifest and seqn history via the blizztrack API, read October 9 2026. Version, timestamp and config values transcribed. Related: [the two-track fix](/news/watcher-read-wrong-track-two-tracks-oct-7/), [the 70205 report](/news/forever-beta-build-70205-live-oct-3/), and [what our build reports mean](/blog/forever-beta-build-reports-explained/).
