---
title: "Vanilla+'s own counters read zero, and we would rather downgrade than repeat a number we cannot source"
date: 2026-10-02
category: news
summary: "Our entry claimed 60 to 80 players on weekdays peaking at 200 on weekends. The site's counters read zero accounts, zero players and zero faction split, and we cannot tell whether that means empty or broken."
---

Our Vanilla+ entry claimed **roughly 60 to 80 players on weekdays, peaking near 200 on weekends**. We checked it today and the site's own counters do not support a number we are willing to repeat.

## What the page says

Three counters, rendered in the order the site presents them:

- **Accounts Created: 0**
- **Players online: 0**
- **Alliance / Horde online: 0% | 0%**

We could not determine whether that means the realm is empty or whether the counters are broken, and the distinction matters in both directions.

**What we tested.** Over a plain HTTP request the three figures render as literal placeholders rather than numbers, which is what an unfilled counter looks like. In a browser they still did not populate: the page rendered with the labels and no values, and the only figures in the document were **2023** twice, from the copyright line and the project's own "new flavour in 2023" description.

So we have a counter that reads zero and does not appear to be reading anything.

## What we did about it

**popTier small to unknown.** That is the whole correction, and it is the fourth such downgrade this week for the same underlying reason.

The reasoning is worth stating because it is the part that gets argued with. A tracker that publishes a population figure is making a claim a reader might act on. Ours was sourced to a Discord estimate or an observation with no date attached to it, and today we cannot refresh it, cannot confirm it, and cannot even see the project's own attempt at a figure. **Under those conditions the honest answer is `unknown`, not a remembered number.**

We are not calling it dead. A broken counter is not a dead server, and this is the fourth time this week that distinction has done real work.

## Everything else on the page checks out

Confirmed first-party and unchanged:

- A **launcher**, and a **manual patch** route for dropping into a Data folder.
- **Realmlist**: `set realmlist logon.vanillaplus.org`.
- A **wiki**, a **class-changes page**, a **talent calculator**, a **bug tracker**, and a **rewards page**.
- Its own positioning, which we quoted when we first recorded it: "new challenges, discarded features, community-driven development based on suggestions from veteran players and freshmen alike", with rebalanced classes and reworked dungeons, bosses and battlegrounds.

This is a **PvP** project by its own footer, "Vanilla+ PvP Server", dating itself to **2023**, which means it is past the point where a shutdown would be surprising and well short of one where its long-term survival is a question.

## What would restore the tier

Someone loading the page in a browser with the counters populated, and reading what they say. That is a five-minute job for a person and we could not do it, which is the honest reason this entry is `unknown` rather than `small` on 2 October 2026.

If a reader loads it and sees a real figure, that is worth telling us. We will record it with the date and restore the band.

SOURCES: Vanilla+'s own homepage at vanillaplus.org, read October 2 2026 over plain HTTP and again in a browser with a control domain probed in the same batch. The three counter values, the realmlist string, the navigation pages and the project's own description are quoted or transcribed from that page. We did not create an account and did not play. Related: [the six-entry downgrade post](/news/six-entries-downgraded-unverifiable-oct-2/), [the grading scale](/grading/), and [the correction policy](/blog/tracker-correction-policy-explained/).
