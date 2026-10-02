---
title: "Six servers we rated tiny or small, downgraded because we cannot find them any more"
date: 2026-10-02
category: news
summary: "Six playable entries had no URL and were rated on Discord counts or old estimates we can no longer check. All six are downgraded to unknown, with every domain we probed recorded. None is called dead, because no website is not a closed server."
---

Six of our entries were rated `playable` with a population band and **no website at all**. That is a number a reader would act on with nothing behind it, and tonight we went looking for the addresses and mostly failed.

All six are downgraded to `unknown`, and the reasoning is recorded on each entry domain by domain.

| Entry | Was | Now | What we found |
| --- | --- | --- | --- |
| **Atlantiss** | small | unknown | Both known addresses gone. `atlantiss.com` is a domain for sale, `atlantiss.org` lapsed in May |
| **ThoriumWoW** | small | unknown | 8 candidate domains, none resolve |
| **Galaxyofdrone WoW** | small | unknown | 5 candidates, none resolve |
| **Feenix** | tiny | unknown | 7 candidates, none resolve |
| **True Azeroth** | tiny | unknown | 6 candidates, none resolve |
| **Dragonborn WoW** | tiny | unknown | 6 candidates, none resolve |

## The word we are not using

**None of these is marked dead.** A server with no website is not a shut-down server, and the evidence points the other way for two of them: Atlantiss and ThoriumWoW were both rated on **Discord member counts**, which keep working long after a domain dies.

This is the same reasoning that was wrong in both directions this week. We marked ArgusWoW dead for four years too late because a page answered, and we marked Warmane's liveness unverified because two routes 404'd. Here the honest answer is "we cannot reach it", which is not the same as "it is gone", and it is a worse thing to publish than a number we cannot refresh.

What changed is the band. A `small` or `tiny` on these entries was doing work it could not support, because both were derived from figures we can no longer check: Discord counts of about 1.2k for Atlantiss and about 105 for ThoriumWoW, and outright estimates for the others, one of them written as "pop 0-100", which is a range containing zero and is not a reading.

## Atlantiss has now lost both of its addresses

Worth separating from the rest, because it is the only one where we know something specific.

It was the **Cataclysm 4.3.4 flagship of the Tauri/Atlantiss network**, relaunched in February 2026, also running MoP 5.4.8 and TBC 2.4.3 realms. That is a multi-expansion operation, not a hobby realm, and a month ago it was the largest thing on this list.

Its `.org` stopped resolving around May 2026. Its `.com` now serves a page reading **"Click here to Buy atlantiss.com as your website name"** with a sales phone number. We probed eleven more candidates: `atlantiss.net` returns **HTTP 403**, so a host exists there and is refusing automated requests, and `.gg`, `.io`, `.tk`, `.ga`, `.cf`, `.es`, `.fr`, `atlantis-wow.com` and `atlantiss-wow.net` do not resolve.

A 403 is the one interesting result. It is the only candidate in the whole batch where something is answering, and it is worth a human opening in a browser.

## What actually went wrong, methodologically

Two things, both worth recording because both cost time rather than producing findings.

**Domain guessing is not a search method.** We tried twenty-five plausible hostnames across the six entries. Exactly one produced anything, and it was a sales page. These projects advertise on Discord and in community channels, and their addresses are not derivable from their names. I should have said that up front instead of running the batch.

**Search engines blocked every automated query.** DuckDuckGo's HTML endpoint returned its own homepage for a query that had worked earlier in the session, the `lite` endpoint served a bot challenge, and the browser version returned the homepage with no results. A third-party directory, `ironforge.pro`, responded but is a 779-byte JavaScript shell with no server list in it. So there was no index to check, and the six domains will have to come from a person or from a Discord invite we can read.

The control domain mattered here. The first batch of probes returned an error for every candidate including ones that were live seconds earlier, which was the instrument failing rather than thirty dead servers, and running the control in the same batch is what told the difference.

## A gate, so this cannot recur

Six ratings could sit on unnamed sources for months because nothing checked. There is now a build gate that fails if a **non-dead entry carries a population band with no URL**, unless the entry explicitly says its basis is unverifiable.

It currently passes with 94 rated entries and 0 offenders, and it bites: restoring ThoriumWoW to `small` fails the build with `rated popTier on an entry with no url: ThoriumWoW (small)`.

That is the real lesson of the last three days. Every error we have published, ArgusWoW, Warmane, Epsilon, the 6d50f73 sweep, and these six, was a value with no source attached. Three of the four gates we added this week exist to catch exactly that.

SOURCES: the candidate domains listed above, each probed on October 2 2026 with a control domain probed in the same batch to confirm the network was working. Atlantiss's two historical addresses were read directly: `atlantiss.com` serves the sales page and `atlantiss.org` does not resolve. The February 2026 relaunch, the multi-expansion realms and the Discord counts in our entry are our own earlier first-party readings, dated in the entry, and are flagged as unverified rather than repeated as current. We did not join any Discord, did not create an account, and did not play. Related: [the no-URL batch of four](/news/four-entries-rated-playable-with-no-url-oct-1/), [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), the [correction policy](/blog/tracker-correction-policy-explained/) and the [grading scale](/grading/).
