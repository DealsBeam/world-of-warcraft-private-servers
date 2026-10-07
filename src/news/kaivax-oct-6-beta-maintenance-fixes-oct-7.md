---
title: "Kaivax restarted the beta realms October 6 with three fixes"
date: 2026-10-07
category: news
summary: "Realm restarts at 3:00 p.m. PDT picked up fixes for missing restocked quest items, elevator disconnects, and guild join errors. The first documented beta fixes in four builds."
---

Blizzard restarted the Forever beta realms on **October 6 at 3:00 p.m. PDT** for maintenance, and community manager Kaivax documented what went in. It is the first documented set of beta fixes since the September 24 development notes.

## The three fixes

From Kaivax's two notices (17:20 and 17:52 PDT):

1. **Missing restocked quest items.** Quests where items are supposed to restock in a chest had gone missing; fixed.
2. **Elevator and transport disconnects.** A bug that could occasionally disconnect players riding elevators or transports; fixed.
3. **Guild join and leave errors.** An error that could occur when joining or leaving a guild; addressed.

The 17:20 notice announced the restarts "about 40 minutes from now" to pick up priority fixes. The 17:52 notice added the second and third items as "a couple more fixes going in with this restart."

## Why three small fixes are worth an article

Because they are the **first documented beta changes in four builds**. Our watcher recorded 70235, 70245 and 70249 with no Blizzard notes attached, and the two fan references that diff builds found zero player-facing changes in all of them. These three fixes arrived via **realm restart**, not via client build, which is why the build diffs showed nothing: server-side fixes do not appear in client manifests.

That distinction is worth stating plainly because it corrects something our own coverage implied. We have been treating "no documented changes" as "nothing changed", and these fixes show the gap: **the beta changes in two places, the client and the realm, and only the client leaves a manifest trail.**

## The uptime trend

The independent probe monitor read **92.6% uptime** with **657 reports recorded** on October 7, against **97.8% with 158 reports** on October 5. Zero outages in both readings.

The drop is consistent with maintenance restarts: the monitor counts only fully-online periods toward uptime, and two restart windows plus degraded periods would move the number exactly this way. It is not evidence of instability, and the monitor's own accounting says as much. But it is the first movement in the number, and movement with an explanation is worth recording.

## Timezone note

Kaivax gave the restart as **3:00 p.m. PDT**. October 6 is inside daylight time (ends November 1), so PDT is correct here with no conversion dispute.

SOURCES: Kaivax's two October 6 server notices as mirrored by the Forever Status monitor's blue-post feed, read October 7 2026, with the fix descriptions quoted. The uptime figures are the monitor's own readings on October 5 and 7. The build-diff context is from wow-forever.gg's published changelogs. We did not play the beta. Related: [the two-track watcher fix](/news/watcher-read-wrong-track-two-tracks-oct-7/), [what our build reports mean](/blog/forever-beta-build-reports-explained/), and [the grading scale](/grading/).
