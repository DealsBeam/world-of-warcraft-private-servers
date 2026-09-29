---
title: "A live server ships another project's client torrent, and we got that project's own status wrong in public"
date: 2026-09-29
category: blog
heroImage: /images/hero-4.jpeg
summary: "Frozen Throne hands new players a Warmane client torrent as a supported option. We probed ten WotLK servers and Warmane appears in exactly one. We also got Warmane itself wrong twice in a day, in public, and the second correction is the better half of this."
---

If you start a new account on [Frozen Throne](/servers/frozen-throne/) today, its setup page gives you two options. The first is its own recommended 3.3.5a client. The second, listed as an equal alternative with its own download button, is **the Warmane client**.

Warmane is a separate, older operation that runs four WotLK realms of its own, and by the time you have read the second half of this post you will have seen us state publicly that we could not tell whether it was even still running. We were wrong about that. It runs.

Before writing this I expected to find that Warmane's client had quietly become the community default, with half the WotLK scene redistributing it. **That is not what is happening.** I probed ten servers and Warmane's client appears in exactly one:

| Server | Warmane client offered |
| --- | --- |
| Frozen Throne | yes, as option 2 of 2 |
| TheraWoW | no |
| Elwynnkeep | no |
| Azerotica | no |
| TrueWoW | no |
| AmberWoW | no |
| Eternal Gaming | no |
| Chromiecraft | no |
| Blackrock | no |

One server, offering it as a convenience rather than as a recommendation. The wider claim was mine, made before I checked, and it was wrong.

## What is actually verifiable here

Frozen Throne's page says three things that we can read directly: the recommended client is ready to play, the realmlist is pre-configured so no changes are required, and if you prefer the Warmane 3.3.5a client you may use it **but you will have to change the realmlist before connecting**. The download is a magnet link with infohash `5B65D1928A3025A820B45E6DB2451AAAABC5347C`.

That last detail is the one worth sitting with, and it holds up after we got the server's own status wrong (see below). **A client is being redistributed across project boundaries as a torrent, and the server handing it to you does not control the thing it is offering.** If the Warmane client were repacked, re-versioned, or quietly altered by whoever controls that torrent, Frozen Throne's users would be the ones running it and the server would have no way to know. The client sits outside the server's trust boundary and outside ours.

Whether Warmane is a healthy project or a running one with a neglected website turned out not to matter for this point, which is exactly why the point is worth making: **the client's provenance is a separate question from the server's health, and only one of the two is visible from the server page.**

We are not alleging that anything has happened. We are pointing out that the arrangement has no owner and no audit path, and that a reader should know that before they pick option 2.

## The Warmane problem, and how we got it wrong twice

~~Separately from the client, there is a question about Warmane itself that we cannot currently answer.~~ **Warmane is operating. We checked in a real browser and were wrong the first time.**

Here is the sequence, because the wrong turn is the useful part.

This morning we read Warmane with a plain HTTP request and found a site whose news block carries items dated **September 6, August 9, June 22 and April 4, all 2026**, attached to Onyxia-phase content: the Icecrown Citadel release, the Battlegroup 1 arena season concluding, Call of the Crusade, Ulduar. That is 2018 and 2019 writing. Its `/register` and `/armory` paths returned **"Not Found"** while the root, `/download` and `/information` returned real pages. We concluded we could not tell whether the server ran, left it as playable and large, and published it as an unverified claim we called the biggest hole in our own data.

**That reasoning was wrong in two separate ways.**

The first error was treating 404s as evidence. A missing `/register` and a missing `/armory` say something about those two routes, which may simply not exist under those names. They say nothing about whether realms are up. We had just spent the morning correcting ArgusWoW on exactly this reasoning, where a page that answered beautifully hid a server that had been dead since 2022, and we then turned around and made the mirror-image inference from a page that did not.

The second error was ours to have made at all: **we had a browser and used an HTTP request.** When our own notes said the forum "needs JavaScript to render anything," that was not a finding, it was a limit of the tool we happened to be using.

In the browser, Warmane is unambiguously alive:

- **The forum renders in full** and carries four realm boards: **Onyxia** (progressive), **Lordaeron**, **Icecrown** and **Blackrock**.
- **There is a post from one hour before we looked**, alongside threads active at one day and one week.
- The site publishes a **devlog** and a **320-line changelog** with dated bug-report numbers.
- The devlog's most recent entries are operational decisions, not announcements: a change to the **Wintergrasp queue** so multiboxers can no longer take multiple of the 120 spots, and **Ring of Valor** added to rated arena.

The 2026 dates on 2018 content are simply a **stale archive that nobody pruned**. That is a cosmetic defect on a running server, and we read a cosmetic defect as a death certificate.

## What this costs, and what it teaches

The entry was not downgraded, so the rating survived, but for the wrong reason and on a claim we had publicly labelled unverifiable. A reader who read this post at lunchtime and checked the tracker an hour later would have found the same rating with the justification reversed underneath it. That is the specific damage of an unverifiable claim: not that it is wrong, but that it is unaccountable, and nobody can tell which it is.

The teachable part is that both of today's major data errors, ArgusWoW and Warmane, came from the same move: **treating a page-level fact as a server-level conclusion.** ArgusWoW answered, so we assumed it lived. Warmane's routes 404'd, so we assumed it did not. Both times the answer was somewhere else, in a layer the probe never reached, and both times a browser or one more page would have settled it.

The rule we are taking from it: **absence of a signal is not a signal of absence, and a page that fails to answer is a fact about the page.**

## The pattern, three times over

The same move produced today's ArgusWoW correction, this morning's Warmane error, and the Valanior entry now sitting at `dev` behind a stock OVH placeholder. Four failure shapes, one shared cause:

- **A page that answers is not a server that runs.** ArgusWoW answers beautifully and shut down in 2022.
- **A page that fails to answer is not a server that stopped.** Warmane 404s two routes, looks abandoned to a plain request, and has a forum post from an hour ago.
- **A client is not owned by the server handing it to you.** Frozen Throne's Warmane option is a torrent it does not control.
- **A plausible date is not a publication.** Warmane's 2026 timestamps sit on 2018 content.

None of these are anybody's dishonesty. They are all what happens when a tracker or a server reads a URL and treats HTTP 200 as an answer. Catching them requires reading what the page actually says and being willing to write "we could not verify this" instead of a confident sentence.

## What we are doing about it

Four things, all concrete:

1. The Warmane entry now says **confirmed operating**, names the four realms, the one-hour-old post, the devlog and the 320-line changelog, and carries the morning's unverified claim **struck through** with the reason it was wrong. Its `playable` and `large` rating now rests on evidence rather than on a shrug.
2. Any server that ships a third-party client has that recorded in its entry, **with the infohash**, because a reader deserves to know whose torrent they are about to run. There is a build gate for this now: an entry naming another project as a client source fails unless it records a 40-character hash. Verified by stripping Frozen Throne's hash and watching the gate name the entry.
3. Our browser-bundle gate asserts the client-side data executes. That is a different failure from this one, in a layer Node cannot reach, and we are not pretending one gate covers both.
4. The remaining lesson is a habit, not a rule: **anything we conclude from a single HTTP response gets re-checked in a browser before it goes in a rating.** Warmane cost us one wrong public claim. ArgusWoW cost us four years of a dead server rated medium. Both were one probe deep.

SOURCES: Frozen Throne's own setup and FAQ pages, read September 29 2026, which name the Warmane client, state the realmlist caveat and link the magnet; Warmane's own homepage, download, information, register and armory pages plus its embedded news block, all first-party, read the same day; and the remaining nine servers' own homepages, read the same day. The table above is our probe result, not a survey: we checked ten servers, and we are not claiming the pattern extends further. The infohash is transcribed from the magnet link on Frozen Throne's page. We did not download any client, did not run any binary, and did not create an account anywhere. Related: [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), [how we review a private server](/blog/how-we-review-a-private-server/), the [correction policy](/blog/tracker-correction-policy-explained/), and the [grading scale](/grading/).
