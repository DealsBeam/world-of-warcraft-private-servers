---
title: "Forever patches in two places, and only one of them leaves a trail"
date: 2026-10-07
category: guides
heroImage: /images/hero-3.jpeg
summary: "Client builds move through CDN manifests. Realm fixes ship through restarts and forum notices. Our coverage tracked only the first kind for a week, and Kaivax's October 6 fixes prove the gap."
---

For a week this site tracked Forever's patches through a single instrument: the CDN manifest. New build, new number, new post. On October 6, Blizzard fixed three beta bugs through a channel that leaves no manifest trail at all, and the gap in our coverage became visible.

This is the durable version of that lesson.

## The two channels

**Client builds** move through CDN manifests on two tracks. They carry version numbers, build configs, region records and timestamps. Everything about them is checkable after the fact, which is why a watcher can report them with precision.

**Realm fixes** move through restarts and forum notices. Kaivax's October 6 posts announced restarts "about 40 minutes from now" and listed three fixes: missing restocked quest items, elevator disconnects, guild join errors. No version number, no manifest entry, no diff anyone can run later.

A build diff that finds zero player-facing changes, like the three our references published for 70205, is therefore **a statement about the client, not about the game**. The game changed on October 6 in ways no manifest records.

## What each channel is good for

Manifests answer: what client exists, when it shipped, whether regions agree, whether a push was a new build or a re-point. They are infrastructure truth, precise and narrow.

Restart notices answer: what was fixed for players, when the realm was down, what to expect on login. They are operational truth, timely and perishable. A forum notice from October 6 is hard to find on October 20, and nobody diffs them.

Neither answers the other's question, and there is no page that lists both. Blizzard's hotfix log covers six other products and not this branch. The fan references diff clients. Our watcher reads manifests. **Nobody was watching the restart channel until the status monitor started mirroring blue posts**, and that mirror is now the only durable record of half the branch's changes.

## The correction to our own method

We published "no documented changes" for three builds, meaning no notes and no diffs. That was accurate and incomplete: it meant no *client* changes we could document, while realm fixes shipped in between. The honest statement going forward names the channel: no client changes documented, realm channel unchecked, or both checked.

Concretely, our build reports now carry both halves where they exist: the manifest comparison and whatever the restart channel shows. The Kaivax article is the first report in the new form.

## What a reader should do

Read both channels and trust each for its own half. The manifest tells you whether your client is current. The restart notices tell you whether yesterday's bug is gone. Anyone selling you one of those answers from the other channel is guessing.

SOURCES: Kaivax's October 6 server notices as mirrored by the Forever Status monitor, read October 7 2026; the wowdev2 and wow_classic_beta manifests via the blizztrack API; wow-forever.gg's published per-build diffs. The two-channel framing is our analysis, labelled as such. Related: [the Kaivax maintenance](/news/kaivax-oct-6-beta-maintenance-fixes-oct-7/), [the watcher correction](/news/watcher-read-wrong-track-two-tracks-oct-7/), and [what our build reports mean](/blog/forever-beta-build-reports-explained/).
