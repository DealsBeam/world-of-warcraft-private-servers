---
title: "Four new Forever references, and 70205 finally has documented content: nothing"
date: 2026-10-04
category: news
summary: "Three fan references on the current build plus a talent calculator on 70170, all found tonight. Two of them independently diffed 70205 against 70170 and found zero player-facing changes."
---

Four Forever reference sites crossed our path tonight that we were not tracking. Three of them are on the current build, and two of them have done the thing nobody had done: **documented what 70205 actually changed.**

The answer is nothing.

## 70205 versus 70170: zero changes, twice

**wow-forever.gg** publishes a per-build changelog that diffs each build against the last. Its 70205 page, compared October 3, checked **9 record kinds** (spells and abilities, items, talents, classes, races, zones, maps/dungeons/raids, professions and skills, factions) and found **0 changes for players**. None added, removed or changed.

**Forever Codex** independently agrees on its front page: **"Build 70205 · Oct 3. No changes that affect play."**

Two independent datamines, same conclusion, both dated. That closes the gap this coverage has carried since September 29, when we started reporting builds with no notes. The honest statement was always "a build number is infrastructure news", and now there is a content statement to put beside it: **the infrastructure moved and the game did not.**

## The four references, ranked by currency

| Reference | Build | What it is |
| --- | --- | --- |
| **wow-forever.gg** | 70205, checked Oct 3 | Talent calculator, 22,007-item database, atlas, per-build diffs, Legacy calculator |
| **Forever Codex** | 70205, updated 8h ago | Bilingual guide and database, per-build comparisons from game files plus mirrored blue posts |
| **theforeverera.com** | 70205, Oct 3 | Guides, per-class change counts, countdown |
| **wowclassicforever.info** | 70170, Oct 4 | Talent calculator read from the beta client, rebuilt on each build |

Against the three we already tracked: **classicwowforever.com is still on 70009 notes**, and **wow-forever.top still reads 70009**. The published record has split. Three references are current, one is a build behind, and two are four builds behind.

One open question inside this: wowclassicforever.info and classicwowforever.com share a name stem but are **different domains with different functions** (calculator versus notes). Whether they are the same project or a fork is unresolved, and we are not going to assert either.

## The discrepancy worth naming

The Codex dates 70170 as 45 hours after **build 70124**, a build number that **does not appear anywhere in the wowdev2 manifest history we read**. Ten sequence pushes checked, back to mid-September, and the builds run 70009, 70058, 70100, 70170, 70205 with no 70124 between them.

Two candidate explanations, neither confirmed. It comes from a different manifest track than the wowdev2 one our watcher reads, or it is their error. A September 30 build would fall in a gap in the push history, so a second track is plausible, but plausible is not confirmed and we are recording it as open rather than picking one.

If you run a reference and know where 70124 lives, that is worth telling us.

## Dates the Codex carries that we did not have

Its front page is a better launch calendar than ours on three items:

- **Early name reservation, October 27 to November 3.** We carry the Server Slam and Onyxia questions as open; a dated reservation window is new.
- **Hallow's End, October 18 to November 2**, as a world event.
- **Hardcore ruleset, Winter 2026-27.** Dated by season rather than day, but the firstlantern we have seen for it.
- **Beta level cap 20, then 30 with no announced date.** We have carried 30 as the beta cap from the hub; the Codex says the step up has no date, which is more precise.
- **Weekly reset, Americas, Tuesday 16:00 UTC.** Operational detail, useful for anyone timing testing.

All five are their claims from game files and blue-post mirrors, recorded here as theirs. The reservation window in particular is now on our calendar to verify.

## Cross-validation, both directions

Their **Legacy calculator** reads 20 talents, 3 trees, 16 points, out of 65 account-wide: **identical to our Legacy reporting** from Blizzard's own post. Independent implementations converging on the same numbers is the cheapest verification available and it passed.

Their countdown reads **"November 4, 2026 · 3:00 PM PST"**, and wow-forever.gg renders launch as 3:00 p.m. PT with a per-timezone conversion. Both agree with our own PST resolution from September 29 rather than with the announcement's PDT. Three independent readings now say PST.

## What we are doing about it

Adding all four to our reference list, with currency dates. The grading stands: first-party game files read by a third party are reported claims, not measurements, and every figure above is labelled with whose it is.

The open items this creates: the 70124 discrepancy, the reservation window to verify, and whether classicwowforever.com's 70009 notes are abandoned or merely slow. Our own build reports continue from the manifest, which remains the only source that cannot be stale in the way a written page can.

SOURCES: forever-codex.com (homepage and changes page), wow-forever.gg (homepage and 70170-to-70205 changelog), theforeverera.com (homepage) and wowclassicforever.info (homepage), all read October 4 2026 in a browser. Build numbers, change counts, dates and the 70124 reference are quoted or transcribed from those pages. The wowdev2 seqn history (10 pushes back to mid-September, no 70124) was re-read via the blizztrack API the same day. We did not play any build. Related: [the 70205 report](/news/forever-beta-build-70205-live-oct-3/), [the Legacy System guide](/blog/forever-legacy-system-horizontal-progression-guide/), and [the grading scale](/grading/).
