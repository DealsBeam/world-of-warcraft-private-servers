---
title: "Azeroth Universe's host is down, and a flaw in how I have been running this sweep"
date: 2026-10-03
category: news
summary: "Azeroth Universe returns Cloudflare 521. Separately, counting the queue today showed 24 entries checked and unchanged still carrying a five-week-old date, which is a method bug that stopped the queue draining."
---

Two things, one about a server and one about how I have been working.

## Azeroth Universe's site is not returning a connection

Checked this morning, **Azeroth Universe returns Cloudflare error 521**, "Web server is down". The same page reports **the browser working, Cloudflare working, and the host as Error**, which is the useful part: this is the origin being unreachable, not a block on us and not a certificate problem.

We could verify nothing about the realm. Everything in the entry, **WotLK 3.3.9a with Cataclysm Azeroth and Pandaria content, max level 90, 31 races, custom classes, mythic+ and Eluna Lua**, is last confirmed from our **25 August** read and is now six weeks old.

**popTier tiny to unknown.** That is the correction, and it is the same reasoning as the six downgrades earlier this week: a population band on a server whose site is not answering is a number we can neither refresh nor check.

We are not calling it dead. A site down and a realm down are different facts, and we have made that distinction do real work four times in five days.

## The method bug, which is the more useful half

Counting the queue this morning, **24 live entries were still carrying a 24 and 25 August date.** That looked like 24 entries nobody had checked.

They had been checked. I probed all of them on **29 September** as part of the ArgusWoW batch, found ten of them correct, and **only wrote the date back on the one I corrected.**

So the sweep never drained. Every entry that turned out to be accurate stayed in the queue, and on the next pass I re-probed it, found it still accurate, and again did not stamp it. The queue was measuring "entries I changed" plus "entries I never looked at", which is not the same thing as "entries I have not looked at".

That is a real error and it inflates the apparent backlog, which matters because **the backlog is how I decide what to work on**. It would have me re-probing the same twenty-four entries indefinitely instead of moving to the 116 genuinely unverified ones behind them.

### What I changed

Every entry re-checked today gets its date written back **whether or not it needed correcting**, and a verification note is only added when something changed. Twenty-two entries were re-verified and re-stamped with no change, and two were corrected: Azeroth Universe above, and Emberveil, whose Android client we had recorded as pending when it now runs.

The count of live entries still dated before 1 September dropped from **24 to 11** without any of them being wrong in the meantime. That gap was pure bookkeeping error on my part.

## The lesson, stated so it is usable next time

**A sweep that only records changes is not a sweep.** It is an edit log.

The reason it happened is that stamping a date feels like writing a correction, and it is not. Re-reading a server, finding it healthy, and recording that it is healthy is the majority of the work in a verification queue and produces no visible output, which is exactly why I kept skipping it.

If this continues, the honest metric for the tracker is not "entries changed today" but **entries whose `updated` date is within the last N days**, and that metric is only meaningful if unchanged entries get dated too.

SOURCES: Azeroth Universe's own site at azeroth-universe.eu, read October 3 2026 over HTTP and again in a browser with a control domain probed in the same batch; Cloudflare's own error 521 page as served by their CDN. The entry's feature list is our own 25 August reading and is flagged as six weeks old in the entry. The sweep counts are from our own data file on October 3 2026. Related: [the six downgrades](/news/six-entries-downgraded-unverifiable-oct-2/), [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), and [how we review a private server](/blog/how-we-review-a-private-server/).
