---
title: "Frontier is coming soon, and the beta has an independent health monitor"
date: 2026-10-05
category: news
summary: "A Vanilla+ PvP project with nothing published beyond its positioning, plus a fan-built probe monitor showing the Forever beta at 97.8% uptime with zero outages."
---

Two additions from user-supplied URLs, one for the tracker and one for the reference list.

## Frontier: a name and a promise, nothing else

**Frontier** is a Vanilla+ PvP realm for the EU on the 3.3.5a client, describing itself as **"Coming soon"** and as a free non-commercial fan project.

That positioning line is the entire site. No realms, no dates, no news, no client information. Recorded `dev` with an `unknown` tier, because a project that describes itself as not yet open is a dev entry no matter how finished the website looks.

## The beta has an independent health monitor

**wowforeverstatus.com** is an unofficial probe monitor for the Forever beta, built by a player, and it is the first independent liveness source we have seen for this branch.

Read October 5, it showed:

- **ONLINE**, with login, realm and character services all responding
- **Last probe minutes old**, with per-service states: patch service online, Battle.net frontend reachable, login successful, realm list available, join successful, connection connected, authentication successful, character service available, game data loaded
- **158 status reports recorded**, **97.8% uptime**, **0 outages**, longest outage 0 minutes
- A 24-hour, 72-hour and 7-day history chart distinguishing online, degraded, offline and unknown periods

It also documents its own failure modes honestly: **degraded** means login works but game services do not, **data stale** means no update in 15 minutes (possibly a login queue rather than an outage), and **unknown** means the client's connection log changed format after an update.

## Why this matters to our coverage

Our CDN watcher tracks **builds**. This tracks **liveness**. Those are complementary instruments with different blind spots: we can tell you Blizzard shipped 70205, and this can tell you whether anyone can log into it.

The 97.8% uptime with zero outages is also the first measured availability figure for the beta from any source. It is a fan probe, not an official SLA, and it measures the probe's ability to log in rather than the quality of the game. But it is a number with a methodology attached, which is more than any other beta health claim we have published.

Added to our reference list with today's currency date.

SOURCES: frontierrealm.org and wowforeverstatus.com, both read October 5 2026 in a browser. The Frontier description is quoted from the site's full text. Every probe state, count and percentage above is transcribed from the monitor's rendered page. We did not log into the beta and verified none of its readings independently. Related: [what our build reports mean](/blog/forever-beta-build-reports-explained/), [the grading scale](/grading/), and [how we review a private server](/blog/how-we-review-a-private-server/).
