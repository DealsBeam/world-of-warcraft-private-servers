---
title: "A live server is shipping a dead project's client, and it is not the only odd thing about that client"
date: 2026-09-29
category: blog
heroImage: /images/hero-4.jpeg
summary: "Frozen Throne hands new players a Warmane client torrent as a supported option. We probed ten WotLK servers and Warmane appears in exactly one. What that does and does not tell you about a client you did not build."
---

If you start a new account on [Frozen Throne](/servers/frozen-throne/) today, its setup page gives you two options. The first is its own recommended 3.3.5a client. The second, listed as an equal alternative with its own download button, is **the Warmane client**.

Warmane is a project that our own tracker has carried as shut down since 2022, while simultaneously listing an active [Warmane entry](/servers/warmane/) because the site still responds. Both of those facts are true at once, which is the sort of thing that ought to make a tracker nervous, and it does.

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

That last detail is the one worth sitting with. A dead project's client is being redistributed by a live server, as a torrent, and the live server does not control the thing it is handing you. If the Warmane client were ever repacked, re-versioned, or quietly altered by whoever controls that torrent now, Frozen Throne's users would be the ones running it, and the server would have no way to know. The client is outside the server's trust boundary and outside ours.

We are not alleging that anything has happened. We are pointing out that the arrangement has no owner and no audit path, and that a reader should know that before they pick option 2.

## The Warmane problem, which is larger

Separately from the client, there is a question about Warmane itself that we cannot currently answer, and it is embarrassing enough to state plainly.

Warmane's site carries news items dated **September 6, 2026**, **August 9, 2026**, **June 22, 2026** and **April 4, 2026**. The content attached to those dates is Onyxia-phase material: the Icecrown Citadel release, the Battlegroup 1 arena season concluding, Call of the Crusade, Ulduar. That is **2018 and 2019 content stamped with 2026 dates**, and the years actually present in the page are only 2025 and 2026.

So either Warmane is operating and its news system is generating fresh timestamps over an old archive, or it is not operating and the dates are a rendering artifact. We could not distinguish those. Its `/register` and `/armory` paths return **"Warmane | Not Found"** while the root, `/download` and `/information` return real pages, and its forum, which would settle it, needs JavaScript to render anything.

**We are not going to tell you Warmane is dead when we cannot see its forum.** Our tracker currently lists it as playable and large, and after today's ArgusWoW correction we are acutely aware of what happens when a tracker asserts liveness it has not verified. The honest position is that our Warmane entry is now an **unverified liveness claim on a `large` rating**, and it is the biggest remaining hole in our own data.

## Why this matters more than one client

The general pattern is the same one behind today's ArgusWoW correction, and behind the Valanior entry that now sits at `dev` with a stock OVH placeholder behind it. Three different failure shapes, one shared cause:

- **A page that answers is not a server that runs.** ArgusWoW answers beautifully and shut down in 2022.
- **A client is not owned by the server handing it to you.** Frozen Throne's Warmane option is a torrent it does not control.
- **A plausible date is not a publication.** Warmane's 2026 timestamps sit on 2018 content.

None of these are anybody's dishonesty. They are all what happens when a tracker or a server reads a URL and treats HTTP 200 as an answer. Catching them requires reading what the page actually says and being willing to write "we could not verify this" instead of a confident sentence.

## What we are doing about it

Three things, all concrete:

1. The Warmane entry's details now say the liveness claim is unverified and name the specific evidence: 2026 dates on Onyxia-era content, `years present: 2025, 2026`, and 404s on `/register` and `/armory`. It stays `playable` and `large` for now because downgrading it on absence of evidence would be the mirror image of the error we just corrected.
2. Our browser-bundle gate already asserts the client-side data runs. This is a different failure, in a layer we cannot reach from Node, and we are noting it rather than pretending a build gate covers it.
3. Any server that ships a third-party client gets that fact recorded in its entry, with the infohash, because a reader deserves to know whose torrent they are about to run.

SOURCES: Frozen Throne's own setup and FAQ pages, read September 29 2026, which name the Warmane client, state the realmlist caveat and link the magnet; Warmane's own homepage, download, information, register and armory pages plus its embedded news block, all first-party, read the same day; and the remaining nine servers' own homepages, read the same day. The table above is our probe result, not a survey: we checked ten servers, and we are not claiming the pattern extends further. The infohash is transcribed from the magnet link on Frozen Throne's page. We did not download any client, did not run any binary, and did not create an account anywhere. Related: [the ArgusWoW correction](/news/stale-sweep-batch-3-arguswow-dead-sep-29/), [how we review a private server](/blog/how-we-review-a-private-server/), the [correction policy](/blog/tracker-correction-policy-explained/), and the [grading scale](/grading/).
