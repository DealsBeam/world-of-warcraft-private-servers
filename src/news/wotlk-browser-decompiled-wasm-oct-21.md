---
title: "A browser WotLK project bundles a client built from decompiled Blizzard code"
date: 2026-10-21
category: news
summary: "Pucur/wotlk-browser delivers client files in 64 KB blocks and bridges browser WebSockets to a real 3.3.5a server. The 8.7 MB WebAssembly client inside it carries build paths from a C++ decompilation of the retail Wrath client, and the repository is MIT licensed without mentioning it."
---

A new repository, **`Pucur/wotlk-browser`**, does the plumbing that browser Wrath has been missing: it serves client files over HTTPS in 64 KB blocks, ships a JavaScript and WebAssembly client, tunnels browser WebSockets to a real TCP game server, and includes an SRP account backend on MySQL.

It is **MIT licensed**, created on **21 October 2026**, and had **2 stars and 1 fork** at our read.

It also contains a licensing problem that the README does not mention.

## What the repository actually is

Three pieces, and the split matters:

- **`bridge.mjs`** serves the web client over HTTPS, supports byte-range and block delivery, and tunnels WebSocket connections to TCP destinations configured through `REALM_HOSTS`, `REALM_PORTS` and `REDIRECT_<port>` variables.
- **`server.mjs`, `srp.mjs` and `admin.mjs`** implement account registration, SRP challenge and login, password and email changes, and session tokens against a MySQL `acore_auth` database. The README labels this section **"Untested"**.
- **`web/`** holds the client: `Wow.js`, 323 KB of Emscripten glue, `Wow.wasm` at 8.7 MB, an index page, manifests, four loading images and a font, plus `slicer.py`, which cuts an enUS game folder into the `web/blocks` the bridge serves.

Setup is documented as: set the realmlist to `127.0.0.1`, slice the client, run the bridge, which then forwards to the real server. The client is delivered by the project; the server is yours.

## Where the WASM came from

The WebAssembly binary answers that itself, if you read its strings. It carries build paths from the machine that compiled it:

```
C:/Users/Liam-/Developer/wowdecomp/WoW/Source/WowServices/WowConnection.cpp
C:/Users/Liam-/Developer/wowdecomp/WoW/Source/WowServices/Grunt.cpp
C:/Users/Liam-/Developer/wowdecomp/WoW/Source/WowServices/PatchFiles.cpp
C:/Users/Liam-/Developer/wowdecomp/WoW/Source/WowServices/BattlenetLogin.cpp
C:/Users/Liam-/Developer/wowdecomp/WoW/Source/WowServices/WDataStore.cpp
C:/Users/Liam-/Developer/wowdecomp/WoW/Source/WowServices/Web/WowConnection.cpp
```

It also contains the strings **3.3.5a**, **12340**, **AzerothCore** and **Wrath of the Lich King**. Those are consistent with one reading: the client was compiled from a local checkout of **`SatyPardus/wowdecomp`**, a C++ decompilation of the retail 3.3.5a client.

That project is public and active: **368 stars**, created on **2 October 2026**, no licence file, and a progress table claiming **24,515 of 27,157 functions** tagged to their original addresses, **90.3%** of the binary, with the client building into a complete executable. Its own README is explicit that it is a decompilation of `Wow.exe`, build 12340.

A `Web/` variant of `WowConnection.cpp` in the paths suggests the browser port is a fork of that tree rather than a clean-room client, which is exactly what an Emscripten build of a C++ client would need.

## Why that is the story, not a footnote

There are two very different kinds of project in this space, and the difference is where the code comes from.

**wowser** is a JavaScript reimplementation. **Benilla** is a from-scratch Rust client, with a published reverse-engineering reference that ships symbols and docs but no Blizzard code. Both are derived works in the sense that they depend on Blizzard's formats and data, and both avoid redistributing Blizzard's compiled code.

A build of a decompilation is a different thing. The decompilation itself is already of contested legality: it reconstructs the client function by function from the original binary. Compiling that tree to WebAssembly and publishing the result under an MIT licence adds two problems. The MIT grant cannot cover code the publisher does not own, and the repository gives no attribution to `wowdecomp` and no indication that its output is inside the bundle.

That is a statement about provenance and licensing, not about anyone's intent. The bridge, the block delivery and the account backend look like ordinary infrastructure work, and the author may simply not have thought about where the binary came from. But the licence text is the first thing a host, a CDN or a lawyer will read.

## The rest of the caveats

**It is a scaffold.** There is no demo link, no playability claim, and the account manager is marked untested. The index page still contains a hardcoded `http://192.168.50.46/` link, a private network address, alongside a self-hosted Umami analytics script and a Discord invite.

**It needs your client.** The slicer takes an enUS 3.3.5a installation and cuts it into blocks, which means the project ships no game data. That is the standard defence and it does not change the code question above.

**Security deserves a second look before anyone exposes it.** A WebSocket-to-TCP tunnel that accepts configurable destinations is useful and dangerous; the README's own security section says to restrict destinations and permitted ports, keep credentials out of version control and validate sessions. An account backend that stores SRP verifiers and issues session tokens is a real service with real responsibilities, and this one says it is untested.

## What would make it interesting

The direction is right. 3.3.5a is the client most private servers run, and no clean-room project has put it in a browser tab yet. Delivery in blocks, a WebSocket bridge and an SRP backend are the correct pieces.

What it needs is a client it has the right to ship. Either the project replaces the WASM with a clean-room build, or it stops distributing a binary and documents the bridge and slicer only, which would still be useful to anyone porting a legitimate client.

Until then, read it as infrastructure work attached to a binary whose origin is stated in its own strings. The 1.12.1 side has a published, citable reverse-engineering reference in [benilla-re](/news/benilla-re-address-book-oct-21/), and the 3.3.5a clean-room client we covered today is [Benilla-WotLK](/news/benilla-wotlk-client-oct-21/).
