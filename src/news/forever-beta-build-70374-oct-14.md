---
title: "Both Forever tracks jump to 70374, again on different binaries"
date: 2026-10-14
category: news
summary: "Beta and dev both read 1.60.1.70374 within 36 minutes on October 13. Same version string, different build configs and product configs. Beta's build landed three times with three different CDN configs."
---

Both Forever tracks now read **1.60.1.70374**: dev first at **22:49 UTC on October 13**, beta at **23:25 UTC**, thirty-six minutes later. On both sides it is a large jump. Beta's previous distinct build was 70338 earlier that evening; dev's previous distinct build was 70334 on October 9.

Two tracks reaching the same number within 36 minutes is the tightest convergence since 70334 on October 9, and it carries the same caveat as before: **same version string, different binaries.**

| Field | Beta (wow_classic_beta) | Dev (wowdev2) |
| --- | --- | --- |
| Version | 1.60.1.70374 | 1.60.1.70374 |
| Build config | `25822068` | `87fa87ca` |
| Product config | `fcfd1bc3` | `ec1375ca` |
| Manifest encrypted | no | yes |

The build configs differ per track, exactly as the two-track split predicted: a version number is a label each track wears, not a shared build. The product configs differ too, and the manifests even differ in encryption, so nothing here says the two tracks are the same artifact.

## One build, three sequences

Beta's 70374 appeared **three times in five hours**: 23:25, 23:59 and 02:02 UTC. All three carry the identical build config `25822068` with three different CDN configs (`dffb7f63`, `048a775d`, `a0408f97`). That is **one build, re-pointed three times**, the same shape as the 70100 double-upload we documented on September 30. Reading the version column alone, you would count three builds; reading the config columns, it is one.

No Blizzard notes are attached yet, and neither diffing reference has published 70374. The hub picked the build up automatically through the two-track watcher.

SOURCES: both manifests and their `seqn` history via the blizztrack API, read October 14 2026, the same first-party CDN data our watcher reads. Every version, sequence, timestamp and config value above is transcribed from those manifest responses, and the identification of beta's three entries as one build plus re-points is our comparison of their config fields, not a published claim. Related: [the 70334 convergence](/news/forever-beta-build-70334-oct-9/), [the 70100 re-point](/news/forever-beta-build-70100-live-sep-30/), [the two-track fix](/news/watcher-read-wrong-track-two-tracks-oct-7/), and [what our build reports mean](/blog/forever-beta-build-reports-explained/).
