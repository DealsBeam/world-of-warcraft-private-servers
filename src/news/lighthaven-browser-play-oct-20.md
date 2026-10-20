---
title: "Lighthaven turns its 3.3.5a realm into a browser game that streams the files it needs"
date: 2026-10-20
category: news
summary: "The educational AzerothCore realm now plays in a browser tab, with a first visit costing about 60 MB before character selection instead of 186 MB. Its changelog also documents touch controls for phones and tablets and a 12 hour sign-in key."
---

**Lighthaven**, the educational AzerothCore WotLK realm we have tracked since September, now runs in a browser. The operator announced it on **October 19 2026** on r/wowservers, at the same time as an account-wide **Master Banker**, **dungeon entrance teleports** and **instant flights**.

The same login works in the browser and in the desktop client, and the changelog entry for **19 to 25 October 2026** is unusually specific about how the browser version avoids a full client download.

## What it costs to load

The browser game fetches game files in pieces rather than as one archive. Its own numbers:

- **About 60 MB** before character selection, against **186 MB** before.
- **About 130 MB** once you are in the world, against **450 MB** on a first visit.
- It reads several files at once when you arrive somewhere new, and portraits draw faster.

That is the difference between a browser client that works and one that asks you to wait for half a gigabyte before your first login. It also explains why this is not the same thing as the browser projects that ship a client compiled to run in the page: Lighthaven is streaming its own 3.3.5a data to a web client, on the realm's existing account system.

## Phones, tablets, and a 12 hour key

The changelog adds that the browser game now starts on **phones and tablets held sideways**, with a movement stick, buttons for jump, target, run and sit, a tap for a click and a long press for a right click, drag to turn, and two fingers to zoom. On iPhone and iPad the suggestion is to add the page to the Home Screen for fullscreen. The project is candid that the issue is not solved: "On a phone the game's own buttons are still small: larger action bars come next."

Signing in is also documented. The site keeps a key for **12 hours** after you type your password; after that, Play asks for it once and then starts the game. Under the hood the changelog says that key is stored in the session encrypted with **XChaCha20-Poly1305** (libsodium), bound to the account id, username, salt and expiry. Logging out is a CSRF protected form submission so a third party page cannot sign you out.

## The realm behind it

The census page at our read showed **2,644 human characters** and **2,000 bots**. The header on every page read "Lighthaven online 3 players and 2000 bots connected", which is why its band stays **tiny**: a three person reading is real, but it is a three person reading.

The realm remains what it was when we last refreshed it: an educational, open-source, non-profit AzerothCore 3.3.5a realm with strict x1 defaults and opt-in personal rates, a PlayerBots population, and no shop. Browser play does not change any of that. It changes how much work it takes to look at it.
