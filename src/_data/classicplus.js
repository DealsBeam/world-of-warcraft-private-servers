const entries = [
    {
        "date": "2019-08-26",
        "category": "news",
        "title": "WoW Classic Launches — Demand Exceeds Content",
        "summary": "The Vanilla re-release launched to huge player counts, but content was cleared far faster than expected, seeding years of demand for a 'Classic+' expansion.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/classic"
    },
    {
        "date": "2023-11-30",
        "category": "news",
        "title": "Season of Discovery Announced",
        "summary": "Blizzard's experimental seasonal Vanilla with rune-based class changes. It was the community's first taste of modernized Classic, though it never became Classic+.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/classic/guide/season-of-discovery"
    },
    {
        "date": "2025-07-17",
        "category": "news",
        "title": "Titan Reforged Revealed (China)",
        "summary": "Revealed at the WoW 20th anniversary CN event: a China-exclusive project merging Vanilla, TBC and Wrath at a level-80 endgame — effectively the first full Classic+ style release.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/news/wow-titan-reforged"
    },
    {
        "date": "2025-08-12",
        "category": "leak",
        "title": "Internal Franchise Timeline Leaks",
        "summary": "A leaked internal franchise timeline surfaced on Reddit showing 'Camelot' targeting Q3 2026 under 'Live Ops' — the first concrete leak linking Blizzard's next Classic project to a date.",
        "source": "reddit.com",
        "url": "https://www.reddit.com/r/wow/comments/1onh2xk/wow_internal_roadmap_leak/"
    },
    {
        "date": "2025-10-20",
        "category": "leak",
        "title": "Encrypted 'Classic 1.60' Builds Hit the CDN",
        "summary": "Roughly 29 encrypted 'Classic 1.60' builds began appearing on Blizzard's CDN from late October 2025 — verifiable technical traces that Blizzard is actively building a new Classic patch.",
        "source": "kami-labs.fr",
        "url": "https://www.kami-labs.fr/guides/wow-classic-plus-blizzcon-2026/"
    },
    {
        "date": "2025-10-30",
        "category": "leak",
        "title": "'Infinite Classic+' 4chan Leak",
        "summary": "An anonymous 4chan post detailed a seasonal-model Classic+ with a battle pass, a new 'Spellblade' class and new zones. The community exploded; Blizzard stayed silent, confirming nothing.",
        "source": "boostmatch.gg",
        "url": "https://boostmatch.gg/blog/classic-plus-leaks-2026"
    },
    {
        "date": "2025-11-18",
        "category": "news",
        "title": "Titan Reforged Launches to Millions",
        "summary": "Titan Reforged went live in China with account-wide progression, 25-man rescaled raids, upgradeable legendaries and player-driven unlocks — reportedly 2.4M+ players at peak.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/news/wow-titan-reforged-launch"
    },
    {
        "date": "2025-12-19",
        "category": "news",
        "title": "Blizzard Teases 'Long-Term Future' of Classic",
        "summary": "The 2025 year-in-review promised Blizzard is 'cooking on the long-term future of WoW Classic' — with a deliberate row of plus signs in the graphic.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/news/classic-2025-year-in-review"
    },
    {
        "date": "2026-01-29",
        "category": "news",
        "title": "State of Azeroth Tease",
        "summary": "At the State of Azeroth presentation, Holly Longdale said 'all Classic players have a lot to look forward to', with the Classic future promised after The Black Temple at BlizzCon 2026.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/news/state-of-azeroth-classic"
    },
    {
        "date": "2026-05-11",
        "category": "news",
        "title": "NDA Creator Summit at Blizzard HQ",
        "summary": "Streamers Xaryu, Sodapoppin and Esfand were flown to Blizzard Irvine for a secret NDA'd event widely assumed to preview the Classic+ announcement.",
        "source": "allusanewshub.com",
        "url": "https://allusanewshub.com/news/classic-plus-might-actually-be-real/"
    },
    {
        "date": "2026-06-16",
        "category": "leak",
        "title": "Project Camelot Datamined",
        "summary": "Dataminer Stiven_SRB found 'World of Warcraft: Camelot' Heroic and Epic store licenses on Blizzard's servers, using the same bundle framework as Midnight. Patch 1.60 is described as the mainline Camelot patch.",
        "source": "eurogamer.net",
        "url": "https://www.eurogamer.net/world-of-warcraft-classic-plus-camelot-datamine"
    },
    {
        "date": "2026-06-18",
        "category": "leak",
        "title": "Internal Roadmap Screenshot Leaks",
        "summary": "A leaked internal roadmap (screenshot via GottaSmokeEmAll) showed Camelot launching fall 2026, a Warcraft Chronicles RTS in 2028 and an Arthas ARPG in 2029.",
        "source": "notebookcheck.net",
        "url": "https://www.notebookcheck.net/World-of-Warcraft-Classic-Plus-leaks-and-rumors-Collected-news-on-Project-Camelot-etc.html"
    },
    {
        "date": "2026-06-20",
        "category": "rumor",
        "title": "Release Date Speculation",
        "summary": "An anonymous MMO-Champion post floated an October 13 2026 release; others argue late September or not until 2027. Nothing official.",
        "source": "boostmatch.gg",
        "url": "https://boostmatch.gg/blog/classic-plus"
    },
    {
        "date": "2026-06-20",
        "category": "rumor",
        "title": "Spellblade Class Rumored",
        "summary": "The leaked Spellblade class (mail armor, tank/heal/DPS roles) is the most disputed rumor — some dataminers flag it, others call it fabricated.",
        "source": "icy-veins.com",
        "url": "https://www.icy-veins.com/forums/topic/75126-wow-classic-classic-plus/"
    },
    {
        "date": "2026-06-25",
        "category": "rumor",
        "title": "Heroic & Epic Editions, Battle Pass",
        "summary": "Datamined store licenses suggest paid Heroic/Epic editions and a 6-month seasonal battle pass layered on top of the subscription.",
        "source": "boostmatch.gg",
        "url": "https://boostmatch.gg/blog/classic-plus-leaks-2026"
    },
    {
        "date": "2026-06-25",
        "category": "rumor",
        "title": "Neutral Dalaran & New Races",
        "summary": "Rumors point to a neutral Dalaran hub, faction-agnostic Blood Elves, and playable races chosen at level 5 rather than at character creation.",
        "source": "boostmatch.gg",
        "url": "https://boostmatch.gg/blog/classic-plus"
    },
    {
        "date": "2026-06-25",
        "category": "rumor",
        "title": "New Zones Rumored",
        "summary": "Speculated zones include Mount Hyjal, Uldum, Gilneas, pirate islands near Booty Bay, the Ruins of Quel'Thalas and an expanded Silithus.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/classic/guide/classic-plus-overview"
    },
    {
        "date": "2026-06-25",
        "category": "rumor",
        "title": "Achievements & Midnight Cosmetics",
        "summary": "A leaked feature survey and forum claims suggest an achievements system, with some unlocks granting cosmetics redeemable in Midnight.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/classic/guide/classic-plus-overview"
    },
    {
        "date": "2026-07-01",
        "category": "rumor",
        "title": "Timeline Math: Classic+ Could Be 2027",
        "summary": "The leaked timeline chart shows TBC Anniversary leading to WotLK Anniversary and a Fresh Vanilla in 2028, suggesting Classic+ may not land until late 2027.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/classic/guide/classic-plus-overview"
    },
    {
        "date": "2026-07-08",
        "category": "leak",
        "title": "IronSeer Alternate-Timeline Leak",
        "summary": "MMO-Champion's IronSeer leaked an alternate-timeline Classic+: Scarlet Crusade zone, faction-locked Deadmines/Ragefire Chasm as first raids, Scarlet Monastery raid, Stratholme raid with Death Knights, and Blackwing Lair with Molten Core downgraded to a dungeon.",
        "source": "mmo-champion.com",
        "url": "https://www.mmo-champion.com/content/"
    },
    {
        "date": "2026-07-15",
        "category": "leak",
        "title": "Leaked Feature Survey",
        "summary": "An internal survey leaked gauging interest in Mount Hyjal/Uldum/Gilneas zones, 10- and 20-man raids, seasonal world events and cross-realm play — while rejecting pet battles and housing.",
        "source": "wowhead.com",
        "url": "https://www.wowhead.com/classic/guide/classic-plus-overview"
    },
    {
        "date": "2026-07-22",
        "category": "leak",
        "title": "Death Knights & Karazhan Raid Leak",
        "summary": "New leak points to a playable Death Knight class and a Karazhan raid before Naxxramas. Flagged by Icy Veins as plausible but entirely unconfirmed by Blizzard.",
        "source": "happygamer.com",
        "url": "https://www.happygamer.com/wow-classic-plus-leak-death-knights-karazhan/"
    },
    {
        "date": "2026-08-01",
        "category": "rumor",
        "title": "Technical Rumors",
        "summary": "Community leaks claim no public PTR, an engine shared with Midnight, expanded UI customization and restrictions on automated boss-timer addons.",
        "source": "boostmatch.gg",
        "url": "https://boostmatch.gg/blog/classic-plus"
    },
    {
        "date": "2026-08-12",
        "category": "rumor",
        "title": "Community Backlash Fears",
        "summary": "MassivelyOP asks whether the announcement will anger the community — so much Classic news arriving so fast risks whiplash over what was 'just a re-release'.",
        "source": "massivelyop.com",
        "url": "https://massivelyop.com/2026/08/12/wow-classic-plus-announcement-fears/"
    },
    {
        "date": "2026-08-14",
        "category": "news",
        "title": "BlizzCon 2026 Set — Reveal Expected",
        "summary": "BlizzCon 2026 is confirmed for September 12-13 in Anaheim. With Longdale's promise on the table and Camelot datamined, a Classic+ reveal is widely expected on stage.",
        "source": "blizzard.com",
        "url": "https://blizzcon.com"
    }
];

module.exports = {
    entries,
    counts: {
        news: entries.filter(e => e.category === "news").length,
        leak: entries.filter(e => e.category === "leak").length,
        rumor: entries.filter(e => e.category === "rumor").length
    }
};