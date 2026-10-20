---
title: "A WoW realm in a browser tab: what Open Vanilla actually runs on"
date: 2026-10-20
category: analysis
summary: "A 1.12.1 client rewritten from scratch in Rust and Bevy, a guest mode that stores heroes on your device, and a realm directory carried over encrypted relays. The interesting part is not that it runs in a browser. It is what had to be rebuilt to make that possible."
---

Most "play WoW in your browser" projects are a remote desktop with a coat of paint: a real client running on someone's server, streamed to a canvas. **Open Vanilla** is not that. It is an alpha project at `openvanilla.app` that ships an actual client compiled for the browser, backed by a client codebase that was rewritten from scratch rather than patched.

That distinction is the whole story, and it is worth walking through what it actually implies.

## The client is the interesting artifact

Private servers almost never write a client. They ship Blizzard's binary, point it at a different realmlist, and patch the data. That is why the tracker's [client sweep](/blog/vanilla-family-client-sweep-oct-19/) is mostly a list of which Blizzard build a project expects.

Open Vanilla's native engine is built on **[benilla](https://github.com/samwhosung/benilla)**: "A complete World of Warcraft 1.12.1 client, written from scratch in Rust and Bevy." It is Apache-2.0, it had **766 stars** on the day we checked, and it was created in July 2026. A from-scratch client is a rare thing in this scene, and it is the only reason a browser build is possible at all: you cannot compile a 2005 Windows binary to WebGPU.

The site's "Open Vanilla in Rust" line is doing some work here. The **launcher** is Python, the **server package** is Python and JavaScript, and the Rust is the client engine plus the Forge creator app. That is not a criticism, but it is the difference between a project that is written in Rust and a project with a Rust client.

## What "nothing to install" means, and what it does not

Browser play needs no files. You open `play.openvanilla.app` and you are at a login screen.

The desktop path is the opposite, and this is the part the marketing line skips. Until Open Vanilla's own rewritten game data ships, the launcher plays from **your own Vanilla game files, build 5875**. The "Get Vanilla Data" button on the site currently reads "coming soon", and the README is careful about the reason: the project "never ships or changes anyone else's files".

So there are two products with two different requirements:

| Path | What you need |
|---|---|
| Browser | Nothing installed |
| Desktop launcher | Your own 1.12 game data, build 5875 |
| Solo offline | SPP Classics, set up for you by the launcher |

That is a sane split, and it is honest about the Blizzard-files problem that every 1.12 project has to solve somehow. It also means "free" is accurate for the browser and conditional for the desktop.

## Guest mode is real, and the privacy policy is the surprise

The play page offers three doors: Discord sign-in, a realm username and password, or **"Play free as a guest"**. The guest line is explicit: "No sign-up. Your heroes stay on this device; link Discord any time to keep them everywhere."

That is a good default for a browser game. It also raises the obvious question of what the realm keeps, and here Open Vanilla does something most private servers do not: it publishes a **privacy policy with version, date and retention periods**.

Version 4, dated 20 October 2026, states that the official realm records gameplay **once a minute** while a character is online: level, experience, money, zone, position, whether the character is dead, and quest progress. It is stored "under a pseudonym (a keyed code made from the character, not its name or your account)", on the realm server only, with raw records deleted after **30 days** and only summaries kept longer. The policy says it does not include names, accounts, IP addresses, chat or anything outside the game, and that there is no separate switch because the data is part of running the realm, but that you can ask for deletion.

You can argue about whether once-a-minute telemetry should be opt-in. What you cannot argue with is that it is written down, dated, and bounded. Most server websites in this scene do not tell you what they log at all.

## The realm directory is the genuinely new idea

The `realms.html` page describes three tiers:

- **Verified realms**: Open Vanilla's own, plus community realms the maintainer has vetted.
- **Community P2P realms**: hosted by players, "checked automatically, not vetted".
- **Verified P2P nodes**: volunteer relays that carry traffic so "hosts open no ports and nobody's address is shown", carrying "only end-to-end encrypted game traffic".

That is a different model from every tracker, including ours. A normal private-server directory is a list of URLs with varying degrees of checking. This is a directory where the entry is a **machine-checkable object**, and the connection itself can be relayed so that neither side learns the other's address.

It also comes with an honest caveat on the same page: if you host "direct from my home connection", your friends see your home IP, so only invite people you trust. The relay tier exists precisely to avoid that, and the page is clear that direct mode does not.

The live numbers on that page were: **0 verified nodes, 0 being checked, 0 GB relayed in 30 days**. The relay network is brand new and empty. The design is more interesting than the current state.

## Where the claims run ahead of the paperwork

Three things we checked that do not line up:

1. **The licence.** The project is presented as open source, and ten repositories are public, most of them MIT. The main repository, `orionopenwow/OpenVanilla`, has **no licence file** in its root, and GitHub reports no licence. Source available is not open source, and the strongest licence evidence is in the sub-projects rather than the repository the site points at.
2. **The security wording.** There is no audit. `security.html` is a **disclosure policy**: report privately, we reply within a week, we credit you. The "scanned and checked" line refers to **Workshop packages**, not the client or the realm.
3. **The addon count.** The README says **19** built-in addons. The site's trailer line says **11**. Both are on the same front page.

None of these are scandals. They are the normal state of a project that is a few weeks old and shipping faster than it is documenting. The version numbers do the same thing: the site badges **Alpha v0.1.8** while the repository's `VERSION` file and latest release both read **1.30.8**.

## Should you try it

If you want to see a browser WoW client that is not a stream, yes, and guest mode costs you nothing but a tab. Two cautions from the project's own pages: the README calls it "a private alpha with testers from our Discord", and its public census feed returned `online: false` with **0 players** at 12:03 UTC on 20 October 2026, alongside 36 adventurers and 45 Discord members. The realm comes and goes.

We have it [on the tracker as **dev**](/servers/open-vanilla/), tagged `Vanilla`, band **unknown**. If you want a vanilla realm that is reliably up today, the [1.12.1 group in the client sweep](/blog/vanilla-family-client-sweep-oct-19/) is the safer list, and [how to tell whether a server is actually alive](/blog/how-to-tell-if-a-private-server-is-dead-oct-8/) applies to this one too: watch the census feed rather than the homepage.

What makes Open Vanilla worth the tab is not the browser trick. It is that someone rebuilt the client, published the server package, wrote down what it logs, and put the realm behind encrypted relays. That is a more ambitious project than the pitch suggests, even if the paperwork is still catching up.
