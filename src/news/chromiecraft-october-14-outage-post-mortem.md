---
title: "ChromieCraft's October 14 outage: the server shut itself down because item IDs ran out"
date: 2026-10-17
category: news
summary: "A post-mortem published October 15 explains it: item GUIDs reached the 32-bit ceiling, overflowed to zero, and the server's own cleanup code wiped equipment from character inventory, mail, the auction house and guild banks."
---

On **October 14** ChromieCraft had a couple of crashes and then a much longer outage than usual. Players who logged back in found **they had lost their equipment**. The project published a **post-mortem on October 15**, written by heyitsgmch, and the cause is worth reading because it can happen to any long-running AzerothCore realm.

## The server did not crash, it stopped itself

ChromieCraft's own words: "the server didn't crash per se, but instead was forcing itself to shut down." The database had accumulated **too many items over the server's life**, which is approaching **six years**. To players it looked like a crash. It was the realm trying to prevent worse.

The mechanism is a ceiling, not a bug in the usual sense:

- The `item_instance` table held only about **20 million items**, but their **Globally Unique Identifiers had climbed past 4 billion**, because **AzerothCore does not recycle or reorder item GUIDs**. Sell a sword and buy a mace, and the mace gets a higher number rather than the freed one.
- The database's hard limit is **4,294,967,295**. On October 14 the highest GUID in the table was **exactly that number**.
- The server's next-GUID logic added one, which **overflowed to zero**, and its safety cleanup code then deleted every row in `character_inventory`, `mail_items`, `auctionhouse` and `guild_bank_item` with an item GUID at or above that value. That deletion is the missing gear.

## The backups were not there either

The post-mortem is unusually blunt about this. The project **could not reach its primary backup** because of the timing of the instability, and "discovered that our secondary method of backing up was malfunctioning and hadn't properly backed up in approximately **2 days**". Some data was rolled back. The backup was used to restore **existing item links**, so items created between the backup and the incident were not linked to any player, though the team says they can be reconciled manually.

## Who was affected

- **If your last login was before October 12**, your character is unchanged.
- **If you logged in after that**, bags, bank, mailbox and equipment may have changed, mostly through items being unlinked from the database.
- Restored items have been going out **to mailboxes**, and the project notes only **50 mails show at once**, with more arriving a minute or two later.
- Anything still missing should go to a **Discord ticket** with as much detail as possible.

## The make-good

ChromieCraft has brought back **Joyous Journeys for one week, 50% more experience, running until October 21 at 23:59 UTC**, as compensation for roughly **6 hours** of lost play. That is a dated window, so it is worth knowing about now rather than after.

## Why this is bigger than one realm

ChromieCraft exists to find and fix problems in **AzerothCore**, the open-source core that a large share of the private server scene runs on, and its fixes are upstreamed. The project's own framing is that this is the payoff of a long-running server: "servers using Azerothcore in the future will not have to worry about this issue affecting them." An item-ID ceiling that takes six years to reach is not something a short-lived test realm would ever surface.

A note on our own timing: the post-mortem was published **October 15** and we are reporting it on **October 17**. We would rather publish a dated incident late than skip it, and this one has an active change to a live realm behind it.

SOURCES: ChromieCraft's own post "October 14th Post-Mortem", written by heyitsgmch and published October 15 2026, read from chromiecraft.com on October 17 2026. The GUID ceiling, the overflow, the affected tables, the backup failure and the Joyous Journeys window are quoted or transcribed from it. Related: [the ChromieCraft deep dive](/blog/chromiecraft-deep-dive/) and [the tracker entry](/servers/chromiecraft/).
