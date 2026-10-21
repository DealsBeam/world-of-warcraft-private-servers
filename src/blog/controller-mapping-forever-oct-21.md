---
title: "Your generic controller probably works in Forever, and one missing text line is why it might not"
date: 2026-10-21
category: guides
summary: "Blizzard's official gamepad support covers the game, but SDL only sees pads it has a mapping for. A one-page MIT tool built during the beta generates that line from any DInput controller, and it documents where the client's addon restrictions still bite."
---

World of Warcraft: Forever has **official controller support**, and it is not a mod: press one button and the interface switches between keyboard and mouse and a pad, standard menus become a radial menu, more than 20 ability assignments fit on the action keys plus both back shoulder buttons and a freely assignable D-pad, and the front shoulders target allies and enemies. Area effects still snap to the current target rather than being placed by hand. That is where the alpha stood when press played it at BlizzCon, and it is the part Blizzard has confirmed.

What Blizzard has not solved is the boring half: **whether the game can see your controller at all**.

## The line that decides it

WoW bundles SDL, and SDL only recognises a controller if it has a mapping for that controller's vendor and product ID. Xbox and PlayStation pads are in the database. A generic DInput pad, a 2.4 GHz dongle from a brand SDL has never heard of, or anything that reports itself as a plain HID device is not. The game starts, the pad lights up, and nothing happens.

On macOS it is worse, and the reason is Apple's framework rather than Blizzard's: generic DInput pads register as HID devices, Apple's GameController framework ignores them, so the game never receives them. Chrome's Gamepad API does read them. That mismatch is the gap a small tool has filled.

**ForeverPad** is a **single HTML page**, MIT licensed, created on **18 October 2026**, published on GitHub Pages and Cloudflare Pages. It has no installer, no backend and no database. You open it in Chrome or Edge, it reads the pad through the Gamepad API, then asks you to press every button and stick direction while flashing the target on a diagram of an Xbox, PlayStation or Switch pad. When you are done it prints an SDL mapping line, or downloads a ready `gamecontrollerdb.txt`.

## Where the file goes

The mapping lives beside the game's configuration, not inside the addon folder:

```
Windows:  World of Warcraft\_retail_\WTF\gamecontrollerdb.txt
          World of Warcraft\_cn_beta_\WTF\gamecontrollerdb.txt
          World of Warcraft\_classic_\WTF\gamecontrollerdb.txt
macOS:    /Applications/World of Warcraft/_retail_/WTF/gamecontrollerdb.txt
```

Create the file if it is missing, paste the line at the end, and replace any existing line with the same GUID rather than adding a second one. Then restart the client completely, which means not just closing the window, and enable pad input with `/console GamePadEnable 1`. Bindings live under **Key Bindings, Gamepad**.

Two details from the tool's own instructions are worth repeating because they cause most of the failures. Put the pad in **DInput, 2.4 GHz or wired mode**, not the Bluetooth keyboard mode, which is invisible to SDL. And if your browser saves the download as `gamecontrollerdb (1).txt`, rename it back before overwriting.

## What the author tested, and what is still blocked

The repository records one device as verified: a **Migu MGV2170** on a 2.4 GHz dongle, on **macOS 26.5.2 on an M4**, against **World of Warcraft 1.60.1**, the Forever beta build. That is a narrow test, and the author says so.

The more useful line in the README is about addons: **ConsolePort 3.3.10 is blocked by the client's addon restrictions for now, and native gamepad bindings work**. ConsolePort is the addon that has done controller play on private servers for years. If Forever's beta client restricts it, then the native binding path is the path, and the mapping file is what makes a non-standard pad visible to it.

## Read it as a configuration tool, not a driver

ForeverPad writes one line into a text file. It does not install a driver, run in the background, or intercept input. That is the reason it can exist as a single page, and it is also the limit of what it fixes: if the pad is not visible to Chrome, the tool cannot invent it.

Normal caution applies. It is a community project created three days ago with no stars at our read, and the repository is the whole audit surface: one HTML file, MIT, no network calls beyond the page itself. Back up the existing `gamecontrollerdb.txt` before you overwrite it, and do not paste a mapping from a stranger into your game folder.

## The wider picture

Controller play is quietly becoming normal across the scene rather than a retail curiosity. **Hordes of Azeroth**, the survivors mode we covered today, ships Xbox and PlayStation pad support with prompts that switch with the last input used. Steam Deck and handheld play has its own stack of workarounds. Forever's official support is the first time Blizzard has shipped it in a Classic-era client, and the alpha limits, target-centred area effects and all, are visible.

For the rest of the beta schedule, including the stress test today and the November 4 launch, see [the last fifteen days](/blog/forever-last-fifteen-days-oct-20/). The tool itself is in our links list.
