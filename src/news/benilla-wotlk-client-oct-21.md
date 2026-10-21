---
title: "Benilla-WotLK: a 3.3.5a client written from scratch in Rust now reaches the world"
date: 2026-10-21
category: news
summary: "A standalone fork of the Benilla client targets Wrath build 12340, authenticates against real servers, renders streamed terrain and runs the stock FrameXML interface plus third-party addons. It has no releases, and Warden is not implemented yet."
---

The from-scratch client scene has been a 1.12.1 story. Benilla proved a clean-room Vanilla client could render, network and play, and Open Vanilla built a browser realm on top of it. As of this week there is a second target: **`Onixaz/benilla-wotlk`**, a standalone project building the same kind of client for **Wrath of the Lich King 3.3.5a, build 12340**.

The repository was created on **6 October 2026**, is **Apache-2.0**, written in Rust on Bevy, and had **38 stars and 5 forks** at our read this morning. It has been pushed to today. It is **not a GitHub fork** in the platform sense; the README describes it as "originally based on the Benilla project" that "has since evolved into a standalone project focused exclusively on version 3.3.5a".

## What the author says works

The status section is unusually specific, and it is a status section, not a release note:

> The 3.3.5a port is in progress. The client can authenticate, enter the world, and run the stock 3.3.5a interface, but parts of the data and gameplay layers still use 1.12.1 layouts or behavior.

What is claimed as built:

- **Formats:** the MPQ patch chain, BLP, DBC, ADT, WDT, WDL, M2 and WMO, exposed to Bevy as an asset source.
- **World:** streamed terrain, portal-culled buildings with interior lighting, doodads, swimmable water, weather, and day and night lighting with reference-style fog.
- **Models:** GPU-skinned M2 with animation, particles, ribbons, spell visuals, character customisation, armor compositing, enchant glows, forms and mounts.
- **Movement:** bidirectional networked movement, server-granted movement modes, transports and taxi flights.
- **Networking:** SRP6 authentication and world-session crypto, plus an ECS object mirror covering movement, chat, combat, spells, groups, raids, quests, trade, mail, auctions and battlegrounds.
- **Interface:** a FrameXML and Lua engine that runs the stock 3.3.5a interface and third-party addons from the player's own installation and local configuration.
- **Audio:** music, ambience and effects with crossfade rules, interior and underwater transitions, and zone reverb.

That addon line is the one that separates this from a rendering demo. The stock Wrath interface is thousands of Lua files, and running it means the client has to implement enough of the FrameXML API that existing addons do not notice the swap. Most from-scratch clients reimplement their own UI instead, which is why they feel like ports.

## What it does not do

Three limits matter more than the feature list.

**No releases.** There are no tags and no published binaries, so using it means cloning the repository, pointing `WOW_DATA` at the `Data` directory of your own 3.3.5a install, and running `cargo play` with a stable Rust toolchain and a C compiler, because the vendored Lua runtime builds from source. `cargo ship` produces a self-contained release binary. The first build "takes a while".

**Warden is not implemented.** The README says "Warden will come later" and instructs the reader to "use a 3.3.5a server with Warden disabled for now". Warden is Blizzard's client-side anti-cheat; a client that does not speak it cannot connect to a server that enforces it. The practical consequence is that anyone testing this client is testing on a server with its anti-cheat switched off, which is a server-operator decision with its own risk, not a property of the client.

**It reads your install and ships nothing.** The project states it does not distribute Blizzard's client code or game assets and that users must supply their own data. Per the README, Benilla reads the 3.3.5a installation but never writes to it.

The author also closes the door on scope creep: "Other client versions are not planned." This is a 3.3.5a project, and the 1.12.1 Benilla remains a separate codebase.

## Why 3.3.5a is the interesting target

Vanilla has a clean-room client. Wrath, which is the client most private servers actually run, did not, at least not one that runs the original interface and loads the addons players already have. The nearest neighbours are different kinds of project: **wowser** compiles a JavaScript reimplementation to WebAssembly, and **wow.export** and the decompilation projects work on assets and binaries rather than a playable engine.

If this holds up, the interesting consequences are not about playing Wrath in a browser. They are about what a client that is not a patched Blizzard binary can do: run on platforms the original cannot, expose the interface to tooling, and let servers ship changes without redistributing a client.

## How to read it today

Treat it as research code with an honest status line, not a drop-in client. Fifteen days old, no releases, a data layer that is explicitly part 1.12.1, and an anti-cheat integration that does not exist yet. The claim worth watching is narrow and testable: a from-scratch Rust client that authenticates against a real 3.3.5a realm, streams the world, and runs the stock interface with third-party addons loaded from the player's folder.

The repository is in our links list, with the same caveats attached, and the 1.12.1 original is covered in [our piece on the browser realm built on it](/blog/wow-in-a-browser-tab-open-vanilla-oct-20/).
