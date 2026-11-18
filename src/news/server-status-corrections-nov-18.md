---
title: "Conquest Reborn closes, and we correct Everlook's shutdown date"
date: 2026-11-18
category: news
game: wow
summary: "Conquest Reborn's own site now returns a closure notice, so it moves from in development to dead using our check date. The Everlook entry is corrected from a December 2023 abandonment to the EU realm's 22 September 2025 closure at Blizzard's request. OnlyFunsWoW is still withheld."
---

Two tracker entries changed today after first-party checks, and a third did not change because the evidence is still not good enough.

## Conquest Reborn has closed

Conquest Reborn was the third Conquest-named project we track, a free 3.3.5a realm built around custom classes and a node-based progression system called Forging. Our last reading, on October 19, had it in closed testing with 35 players on its own status feed.

Today its site, conquestreborn.com, returns **HTTP 410 Gone** with this notice:

> Conquest Reborn has closed. Thank you to everyone who played, tested, reported bugs and shared these months with me. It was a privilege to build this world with you.

The `/status/` endpoint returns the same page. That is a first-party closure statement, so the entry moves from **in development** to **dead**. The notice carries no date. We are using **November 18, 2026**, the date of our check, as the recorded shutdown date rather than adopting a third-party date. Private Server Hub dates the closure November 16; we have not seen a first-party statement with that date.

There is no sign this was a legal closure. We are recording the reason as **abandoned**, which in our two-value scheme means the operator chose to stop.

## Everlook's date was wrong

Our Everlook entry said the realm was abandoned on **December 1, 2023**. That date is not supported by the first-party record.

The original Everlook EU realm closed on **22 September 2025** after Blizzard contacted the team. Administrator Neto's announcement was posted on **September 8, 2025** and quoted by several outlets, including Massively Overpowered and GameRant. Our own archive already recorded a September 2025 cease-and-desist affecting Everlook. The entry now carries the corrected date and the reason **C&D**.

One important distinction: **Everlook Asia (Warsong)** is a separate realm, opened in September 2023 and run by a Chinese-speaking team. Its own site read **ONLINE** today with a weekly peak of **9,371**. That realm is not covered by this entry, and it is not dead.

The old December 2023 date appeared in several of our older posts. Those posts keep their historical figures, and each now carries a dated correction note pointing at the tracker entry. We are not silently rewriting them.

## OnlyFunsWoW stays as it is

The domain onlyfunswow.com still does not resolve when checked today. Private Server Hub lists the realm as closed in October 2026, with a deleted domain and a dead Discord invite.

We have no dated statement from the operator. Our entry already records the site being unreachable on October 20, and now records today's recheck. We are not adding a shutdown date or changing the status on a third-party report alone.

## Why this matters

A tracker is only useful if its dates survive a check. These three cases show the difference:

- A first-party closure notice with no date gives us a closure and a check date, but not a claimed shutdown day.
- A quoted first-party announcement gives us an exact date and a reason.
- A third-party listing, even a good one, gives us a lead to verify, not a fact to publish.

SOURCES: the closure notice served at conquestreborn.com and /status/ in HTTP 410 responses, read November 18 2026; Neto's September 8 2025 announcement as quoted by Massively Overpowered and GameRant, read November 18 2026; the live first-party status at everlook-wow.net, read November 18 2026; a DNS resolution check for onlyfunswow.com, read November 18 2026. Related: [the tracker](/), [our correction policy](/blog/tracker-correction-policy-explained/), and the shutdown roundup for [2026](/blog/private-servers-shut-down-2026/).
