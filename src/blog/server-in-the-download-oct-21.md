---
title: "The server moved into the download: three projects that stopped needing an operator"
date: 2026-10-21
category: analysis
summary: "Hordes of Azeroth installs its own VMaNGOS server and plays offline. Open Vanilla ships a self-host package. Lighthaven streams the client into a browser tab. Each removes a different dependency from the same assumption: somebody else has to run the world."
---

World of Warcraft was built on one assumption that has survived every private server since 2004: there are many clients and one world, and somebody runs that world. You find a realm, you make an account, you connect. The interesting thing about this week's projects is that they each delete a different half of that sentence.

## The operator becomes optional

**Hordes of Azeroth** shipped version 0.1.0 on **20 October** and 0.1.1 on **21 October**. It is a survivors game mode, and its install is not an addon. The launcher builds a patched copy of your own 1.12.1 client, then installs **a VMaNGOS fork with a database, a login server and a world server**, all bound to your own machine, plus an addon, a spell effects patch and a graphics fix.

The README is explicit that the connection never leaves the PC. After the install, the game plays offline; the launcher only goes online to check for updates. Asked whether friends can join, the answer is "not yet", because each player runs their own server.

That is what turns a private server into a product. There is no realm to keep alive, no population to fill, no queue, no downtime window, no donation goal. The operator is not just optional, they are gone.

## The client becomes optional

**Lighthaven** did the other half. Its browser client fetches game files in pieces, about **60 MB** before character selection instead of 186 MB, and about **130 MB** in the world instead of 450 MB, and it starts on phones and tablets held sideways. The server still exists, still runs 2,000 bots, and still has an operator. What disappeared is the install.

**Open Vanilla** cut a third seam: it publishes a self-host package, SPP Classics with playerbots, Server Studio and a GM console, so the browser realm's stack can also be run locally. Its desktop path still needs the player's own 1.12 build 5875 until its rewritten game data ships.

## And the one that keeps both halves

The counterexample is the most technically impressive project of the week. **Benilla-WotLK** is a from-scratch Wrath client in Rust: it authenticates, renders, and runs the stock FrameXML interface with third-party addons. It still needs a **3.3.5a server with Warden disabled**, because a shared world is what it is for. Replacing the client does not remove the operator, it just changes which side of the connection is being rebuilt.

That is the useful way to read the trend. Three different projects, three different missing dependencies:

| Project | Removes | Still needs |
|---|---|---|
| Hordes of Azeroth | the operator | your own client and disk space |
| Lighthaven browser | the install | an operator and a connection |
| Open Vanilla self-host | the hosted operator | your time and a server package |
| Benilla-WotLK | the original client | an operator |

## What is actually lost

Every one of these trades the same thing for the same reason. A local server has no other players. A browser client has no addon folder in the old sense and a different latency profile. A survivors mode is, by design, not an MMO.

The scene has spent twenty years building communities, and these projects are honest about the trade: Hordes of Azeroth is single player and says so, Open Vanilla's self-host package is aimed at people who want to run their own world, and Lighthaven still keeps a server with real players in it.

What they prove is narrower and more interesting than "single player WoW is possible". They show that the barrier was never the game's content. It was a pairing of client and server that Blizzard's architecture assumed and the community inherited. Once both halves can be rebuilt, the pairing becomes a design choice.

## What does not change

The legal position does not move. These projects ship no Blizzard assets and require a client you already own, which is the standard defence, and it has not stopped cease-and-desist letters. A local server reduces exposure in one specific way, in that there is no public realm to point at, and it does nothing about the distribution of patched clients or the use of Blizzard's protocol and content. Enforcement risk follows distribution and public play, not hosting location, and anyone reading this as a way around that has misread it.

What does change is who the audience is. A player who wants a shared world still needs an operator, and the operators are the ones taking the legal risk. A player who wants the game running at all now has three routes that did not exist a year ago, and the most interesting question is whether any of them becomes a feature that ordinary private servers ship rather than a separate project.

For the technical end of that, see [the 3.3.5a client built from scratch](/news/benilla-wotlk-client-oct-21/) and [the survivors mode with a server in the launcher](/news/hordes-of-azeroth-survivors-oct-21/). For the browser side, [the three browser paths we compared yesterday](/blog/browser-wow-three-ways-oct-20/).
