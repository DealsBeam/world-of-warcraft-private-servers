---
title: "Browser WoW is arriving three different ways: streaming, compiled and JavaScript"
date: 2026-10-20
category: analysis
summary: "Lighthaven streams 3.3.5a files to a web client in 60 MB chunks. Open Vanilla compiles a from-scratch Rust client to WebGPU. Jankcraft ships a JavaScript client on 3.3.5a assets. Same promise, three very different engineering bets."
---

The biggest reason people bounce off a private server is not the server. It is the twenty gigabyte download, the client version hunt, the realmlist edit and the addon folder. For nineteen years the scene's answer has been a better install guide. This month three projects are testing a different answer: **remove the install entirely**.

They are not doing the same thing. The differences matter, because they decide what you can play on, what you keep, and how long you wait before your first character.

| Project | How it reaches the browser | What the browser pulls | Account model |
|---|---|---|---|
| [Lighthaven](/servers/lighthaven/) | 3.3.5a web client streaming the realm's game files | About 60 MB before character select, 130 MB in world | The realm's normal account, same as the desktop client |
| [Open Vanilla](/servers/open-vanilla/) | Native client compiled for the browser (Rust to WebGPU) | The client is the download, once | Discord, username and password, or guest |
| [Jankcraft](/servers/jankcraft/) | JavaScript client (wowser) on a 3.3.5a asset base | Client bundle plus assets | Site account with an optional local AI agent |

## Streaming: Lighthaven

Lighthaven is a stock AzerothCore 3.3.5a realm, which means it has a normal 3.3.5a client and normal 3.3.5a data. Its browser version works by **fetching that data in pieces** instead of asking you to hold all of it.

The numbers from its own changelog for 19 to 25 October 2026 are the most useful thing anybody has published about browser WoW so far: a first visit costs **about 60 MB before character selection** against 186 MB before the change, and **about 130 MB in the world** against 450 MB. It reads several files at once when you enter a new area, and it now starts on **phones and tablets held sideways**, with a touch stick, tap and long press for click and right click, drag to turn and two fingers to zoom.

This is the least exotic approach and probably the most immediately practical. It keeps the realm's existing accounts, it runs the same world, and the engineering is really a delivery problem: fetch only what the scene needs, decrypt and cache it, keep it fast on a phone. The cost is that the browser is still doing a large amount of work with a lot of data, and the changelog is honest that phone action bars are still too small.

## Compiled: Open Vanilla

Open Vanilla went the other way. Instead of streaming Blizzard-era data to a web page, it builds a client that runs in the page. Its native engine is built on **[benilla](https://github.com/samwhosung/benilla)**, an Apache-2.0 project described as "A complete World of Warcraft 1.12.1 client, written from scratch in Rust and Bevy", and the browser build runs on hardware accelerated **WebGPU**.

That is why it can offer something neither of the others can: **guest play**. "No sign-up. Your heroes stay on this device; link Discord any time to keep them everywhere." No realm account, no session key, no data account. The client is the product, so the account is optional until you want to move a character.

The trade is maturity. Open Vanilla is an alpha, its own README calls the current phase a private alpha with Discord testers, and its census feed returned `online: false` with zero players when we read it on 20 October. A from-scratch client is also the only one of these three that does not inherit two decades of addon behaviour for free. [We looked at its engine in more detail here](/blog/wow-in-a-browser-tab-open-vanilla-oct-20/).

## JavaScript: Jankcraft

Jankcraft is the odd one, and it has been running longest. Its bundle is named `wowser-client`, so the engine is **wowser**, an existing JavaScript client project, fed with a 3.3.5a asset base: its asset loader refuses anything but build **12340**, and its version strings read 3.3.5.

On top of that it runs a large **custom class roster**, with specs named Ox Guard, Windwalker, Juggernaut, Tether, Valkyrie, Inquisitor, Houndmaster and others, several drawing spells from Turtle WoW and Warcraft III. It also ships an optional **local AI agent** that pairs with a code shown by a separate app, is driven by a model provider you choose, and stops moving when you use the keyboard.

Jankcraft shows the ceiling and the floor of the JavaScript route. The ceiling is reach: a browser client that also works on mobile, with custom content far beyond what the base game allows. The floor is that a JavaScript reimplementation of a 2005 client is an enormous compatibility surface, and the class roster is where that bet is most visible.

## What is actually hard here

Three problems show up in all three projects, and they explain why this took until 2026:

1. **Data volume.** Patch archives were never designed to be fetched per scene. Lighthaven's 60 MB and 130 MB numbers are the result of splitting them up and reading several at once, not a setting.
2. **Input.** A 2005 client assumes a keyboard, a mouse, right click to interact and a cursor for the world. Touch needs a mapping for every one of those, and the honest state of the art is "a stick, a tap, a long press and a drag".
3. **State that used to live on your disk.** Addons, keybinds, saved variables, screenshots, the WTF folder. A browser client has to decide what survives a cleared cache. Guest mode in Open Vanilla and the 12 hour sign-in key in Lighthaven are two different answers to the same question.

## Why this matters for the scene

Private servers have always competed on content, rates and population. The install was treated as a fixed tax on everyone. Browser play attacks that tax directly, and the effects are predictable:

- **Trial becomes free.** Clicking a link and being in the world in a minute is a different decision from a 20 GB download.
- **Mobile becomes a real audience.** Not a secondary client, but the first one for people without a gaming PC.
- **Populations get harder to read.** A browser session that lasts four minutes looks like a player in a counter and behaves nothing like one. The counters we already distrust get noisier, which is why we still [read them carefully](/blog/how-to-tell-if-a-private-server-is-dead-oct-8/).

If you are choosing a realm on this basis, ask four things before you click: does it need your own game files, does it stream or compile, what happens to your character if you clear the cache, and can you move that character to an account. The project that answers all four plainly is the one to trust.

Two of these three are playable today, and one of them is an alpha whose realm comes and goes. That ratio is normal for a month like this. The interesting part is that all three exist at once, and none of them is a remote desktop stream. That was the cheap trick, and it is no longer the only option.
