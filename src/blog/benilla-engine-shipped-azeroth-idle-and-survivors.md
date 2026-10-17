---
title: "The Benilla engine has shipped: Azeroth Idle and Azeroth Survivors"
date: 2026-10-17
category: guides
summary: "The from-scratch Rust and Bevy Vanilla client we covered in September said no downloads exist yet. It is now running two finished things: a browser roguelite and a live online realm where the game plays itself."
---

In September we wrote about **[Benilla](/blog/benilla-rust-bevy-vanilla-client/)**, a solo developer's from-scratch rebuild of the 1.12.1 client in Rust and Bevy: its own MPQ, BLP, M2 and ADT readers, its own FrameXML and Lua engine, networked movement, and the note that because it was an engine and not a game, **there were no downloads yet**. That last part is now out of date, and this is the update.

Two finished things run on it.

## Azeroth Survivors: the client engine as a roguelite

**Azeroth Survivors** is a fan-made survivors roguelite built on the same client engine. Its own repository describes it as "a survivors roguelite running on a from-scratch World of Warcraft 1.12.1 client engine (Rust + Bevy)", and credits the original to **Aethus**, playable in the browser at **wow.aethus.pl**.

The shape will be familiar to anyone who has played the genre: pick a class and a battleground, move with WASD, and your abilities cast themselves while enemies arrive in waves and you pick upgrades as you level, with a boss every few minutes. It is **fully offline**: no server, no login, no account. The browser build is compiled to WebAssembly, which the project calls **wenilla**, benilla built for the web.

Some details worth knowing:

- **It reads a real WoW client at runtime.** The game loads a 1.12.1 client's `Data` folder, which you supply, and its build script can download the English 1.12.1 client (build 5875) from archive.org, about 5.5 GB, or reuse a client you already own.
- **The pick screen is built from the client's own art**, with eight races, both genders, every class each race can be, and sixteen zones from the starting zones through Naxxramas and the Gates of Ahn'Qiraj. Each zone fights with its own creatures and bosses taken from that zone's spawns.
- **It needs WebGPU in the browser.** Its own page explains the laptop problem directly: if a machine has two GPUs, set the browser to the high performance one, or enable graphics acceleration, and check `chrome://gpu` to see why WebGPU is off. When the browser version is swamped it tells you so and points at a Windows download.

## Azeroth Idle: an online realm where the game plays itself

**Azeroth Idle** is the stranger one, and it is live. Its own description is "an online vanilla MMORPG that plays itself" on the **1.12 client**, with **real players on one shared realm** and a hero that quests, grinds and levels in real time **while you are away**. You set its policies, gear and talents, and an inbox tells you what happened.

At our read on **17 October 2026** its front page showed:

- **Realm online**, version **v0.1.4**, with a patch dated 17 October 2026 covering settings moved to the options menu, heroes running from extra mobs that would otherwise kill them, and fixes for swimming across rivers and lakes and for the camera on elevators, boats and zeppelins.
- **162 players online now**, its own counter.
- A browser client plus an optional desktop build, and a **WebGPU requirement** with the same driver advice as Survivors.

Two practical notes from its own code. The browser client pulls a realm of roughly **2.7 GB** into browser storage, and its queue code names a **2.9 GB browser storage limit**, so expect to grant extra storage. And its client handoff code references a **benilla config path**, which is the same engine, recorded here as an artefact of shipped code rather than an official statement by either project.

## Updated later the same day: it is more than two

While verifying the links for this page we found that the engine now has a wider ecosystem than we first described, so this is the addendum rather than a rewrite.

- **A second survivors roguelite exists**, independent of Azeroth Survivors and by a different author: **warcraft-survivors** (github.com/AdamMcWilliam/warcraft-survivors) describes itself as "a Vampire Survivors style roguelite in the World of Warcraft", built on benilla, where you pick a class and a hero, pick a battleground, and survive fifteen minutes against a growing horde. Two unrelated roguelites on the same rebuilt client is the clearest sign the engine has become a platform rather than one person's experiment.
- **The web build has its own maintainer and repository.** **Wenilla** (github.com/Arnesen/wenilla) is the 1.12.1 client "compiled to WebAssembly", published under a different account from benilla itself, which is what lets the roguelites run in a browser tab with no download.
- **There is a graphics fork**, **benilla-everwood_graphics** (github.com/pkuzic/benilla-everwood_graphics), aimed at pushing the rebuilt renderer.
- The benilla author also publishes **wow-1121-client-internals**, a documentation repository on how the retail Vanilla client renders terrain, lights a scene and decodes the wire protocol.
- A separate clean-room Android client, **project_obsidian**, targets Vanilla on a different engine entirely (github.com/n0social/project_obsidian). And a browser-first server we added to [the tracker](/servers/jankcraft/) on the same day, **Jankcraft**, pairs its own web client with an optional local AI agent the player can pair and revoke.

The corrected short version: two finished things had our attention when we published this page, and there are at least three, under more than one maintainer, on more than one platform.

## Why this is the interesting part of 2026

A year ago, the custom-client conversation was theoretical: could anyone rebuild the Vanilla client from scratch and get it to run? The answer turned out to be yes, and the natural next step is that **the engine becomes a platform**. One offshoot makes an offline roguelite; another runs a live multiplayer realm with an idle twist. Neither is a traditional private server, and Azeroth Idle is the first entry of its kind on [the tracker](/).

That is also the practical advice: **if you want to see where this scene is going, watch the client projects, not the realm lists.** Client ownership is what lets a project change the rules, and it is why we track the engine work alongside the servers. See [the client you did not build](/blog/the-client-you-did-not-build/) for the other side of that argument, where a realm's client comes from someone else entirely.

## A correction on our own coverage

Our September 6 post on Benilla said there were no downloads. That was true then and is wrong now, so we are recording it here rather than quietly editing the old page: the engine has shipped, and the count has grown past two. The original piece is still the best description of how the client itself works, and this page is what came after it.

Related: [Benilla, the Rust and Bevy Vanilla client](/blog/benilla-rust-bevy-vanilla-client/), [Azeroth Idle on the tracker](/servers/azeroth-idle/), [the client you did not build](/blog/the-client-you-did-not-build/), and [Conquest of Azeroth: which one](/blog/conquest-of-azeroth-which-one/).
