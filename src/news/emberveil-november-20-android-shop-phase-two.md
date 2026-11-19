---
title: "Emberveil sets November 20 for Android open beta, an in-game shop and phase two"
date: 2026-11-19
category: news
game: wow
summary: "Emberveil's own devlog dates three changes to November 20 at 13:00 UTC: the Android client opens to everyone on the live realm with no further wipes, a cosmetic-only token shop opens, and phase two adds Dire Maul, Azuregos, Lord Kazzak, the Maul arena and the Elemental Invasion. A WotLK-shaped Lua API is already live, with a FrameXML update, a Turtle WoW content port and a winter Modern Mode on the road ahead."
---

Emberveil published its biggest update since launch on **November 18, 2026**, and it puts three changes on one date. On **November 20, 2026 at 13:00 UTC**, the Android client leaves closed testing, the in-game shop opens, and the realm moves to phase two. The same post lays out a roadmap that includes porting Turtle WoW content and a winter release for the modern renderer.

Everything here comes from Emberveil's own news page, read November 19. We have not downloaded the client or played on the realm.

## What happens on November 20

| Change | What the team says |
|---|---|
| Android open beta | Open to everyone on the live realm, free to play, with characters carried forward |
| Downloads | Client moves from torrent to a CDN, with no torrent client needed |
| In-game shop | Tokens come from tributes on the donate page; cosmetic rewards only |
| Phase two, "The Wilds Awaken" | Dire Maul's three wings, Azuregos, Lord Kazzak, the Maul arena and the Elemental Invasion |
| Closed mobile test realm | Retires the same day and is wiped, as promised when it opened |

The team calls the mobile release an **open beta**, not a launch, for one stated reason: the interface. A FrameXML update is still coming, and until it lands the mobile UI is not where they want it. Everything else is meant to be permanent. Characters created from November 20 stay, and the team says the live realm is never wiped.

## The shop is cosmetic only

The in-game shop opens with tokens bought through tributes on the project's donate page. Emberveil repeats its existing rule in the post: the shop carries cosmetic rewards and never gameplay advantages. That matters for a realm whose tracker entry has always described it as non-commercial. The project still describes itself as a free fan project, and we are recording the shop announcement without changing that status.

## Phase two is named

Phase two is called **"The Wilds Awaken"**. The list is specific:

- **Dire Maul**, all three wings
- **Azuregos** in Azshara
- **Lord Kazzak** in the Blasted Lands
- **The Maul** arena
- **The Elemental Invasion**

That is a real endgame step for a 1.12.1 realm running in an Unreal Engine 5 client, and it gives the November 20 date substance beyond the mobile release.

## The Lua API now looks like 3.3.5a

The post describes an addon API change that is larger than a documentation refresh. A layer of Lua functions from the Wrath 3.3.5a client is now live so addons written for later clients need less work to port. The named additions include:

- **Focus targets:** `FocusUnit`, the focus token, `PLAYER_FOCUS_CHANGED`, and a 3.3.5a-style focus frame with its own cast bar.
- **Macro conditionals:** `/cast [@focus,harm] Counterspell`, plus `/castsequence`, `/startattack` and `#showtooltip`.
- **Unit auras and casts:** `UnitAura`, `UnitCastingInfo` and `UnitChannelInfo`.
- **A modern combat log:** `COMBAT_LOG_EVENT_UNFILTERED` with 3.3.5a argument order, the events damage meters are built on.
- **Safe hooking:** `hooksecurefunc` and `HookScript`.
- **No artificial locks:** addons may call every 1.12 function. Only a handful of engine functions stay protected.

A FrameXML update is underway next, which the team says will make interface work easier for both itself and addon authors, and will noticeably improve the mobile UI.

## The road past November 20

Two items are dated only in broad terms:

- **Turtle WoW content.** The team says it plans to port the latest Turtle WoW version "in the near future", then build its own content on top. No date.
- **Modern Mode.** The optional modern renderer is still planned for winter, "most likely February", with explicit room to move. The post says the timing will follow how busy Legacy and the mobile client are.

Neither is a November 20 change, and neither has a firm date. We are recording them as stated intent.

## The October gap in our record is closed

Our previous entry said the devlog had been quiet since September 15. That was true when we checked on October 3, but it is no longer current. Emberveil published **"Two Months of Emberveil" on October 15**, covering builds **2381 through 2432**: lighting inside buildings, swimming, combat feedback, sound and the phone client. Four build numbers in that range, 2385, 2420, 2421 and 2422, were internal work with no player-facing changes and no notes.

The tracker entry now carries a dated correction rather than the old "devlog quiet" line.

SOURCES: Emberveil's own news page, read November 19 2026; the full posts "One Date, Three Launches", dated November 18 2026, and "Two Months of Emberveil", dated October 15 2026, at emberveil.org/news. Every date, item name, function name and quoted phrase above is transcribed from those pages. We did not download the launcher, execute anything or play. Related: [the tracker entry](/servers/emberveil/), [our first Emberveil story](/news/emberveil-unreal-engine-5/), [the Android beta report](/news/emberveil-android-live-and-dated-devlog-oct-3/) and [the launch calendar](/blog/launch-calendar/).
