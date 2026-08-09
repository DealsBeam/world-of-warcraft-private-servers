const SERVERS = [
  { name: "Ascension", status: "playable", details: "Classless WoW (Vanilla+, Classless, Custom Classes/CoA, Epoch)", tag: "Classless", group: "Ascension", url: "https://ascension.gg/en" },
  { name: "Project Epoch", status: "playable", details: "Active Development", tag: "", group: "" },
  { name: "Bronzebeard", status: "playable", details: "Ascension Vanilla+", tag: "Vanilla+", group: "Ascension" },
  { name: "Conquest of Azeroth", status: "playable", details: "Ascension Vanilla+ Custom Classes", tag: "Vanilla+", group: "Ascension" },
  { name: "Revelation WoW", status: "playable", details: "Beta Stage / In Development", tag: "", group: "" },
  { name: "Epsilon", status: "playable", details: "Active Development (RP/Sandbox)", tag: "", group: "" },
  { name: "Anarchy 2.0", status: "playable", details: "Active Development", tag: "", group: "" },
  { name: "Chromiecraft", status: "playable", details: "PVE, WotLK progressive", tag: "WotLK", group: "", url: "https://www.chromiecraft.com/en" },
  { name: "Octo WoW", status: "playable", details: "Turtle WoW clone, Vanilla+", tag: "Vanilla+", group: "", url: "https://octowow.st" },
  { name: "Capybara WoW", status: "playable", details: "Chinese Turtle clone, Vanilla+", tag: "Vanilla+", group: "", url: "https://capycraft.io" },
  { name: "Whitemane — Gilneas", status: "playable", details: "Cataclysm Expansion", tag: "Cataclysm", group: "Whitemane", url: "https://gilneas.whitemane.gg/en" },
  { name: "Whitemane — Maelstrom", status: "playable", details: "WotLK client, Vanilla-WotLK progressive", tag: "WotLK", group: "Whitemane", url: "https://maelstrom.millenium-servers.com" },
  { name: "Tauri", status: "playable", details: "PVE, Legion", tag: "Legion", group: "", url: "https://tauriwow.com" },
  { name: "Faebright", status: "playable", details: "TBC on WotLK client, RP-PvE", tag: "TBC", group: "", url: "https://www.faebright.online" },
  { name: "Warmane", status: "playable", details: "WotLK", tag: "WotLK", group: "", url: "https://www.warmane.com" },
  { name: "Vanilla+", status: "playable", details: "Vanilla+, PVP", tag: "Vanilla+", group: "", url: "https://vanillaplus.org" },
  { name: "Triumvirate-WoW", status: "playable", details: "WotLK funserver", tag: "WotLK", group: "", url: "https://triumvirate-wow.com" },
  { name: "Kronos V", status: "playable", details: "Vanilla PVP", tag: "Vanilla", group: "", url: "https://www.kronos-wow.com" },
  { name: "Turtle WoW", status: "playable", details: "Vanilla+", tag: "Vanilla+", group: "" },
  { name: "Emberveil", status: "dev", details: "Vanilla UE5", tag: "Vanilla", group: "", url: "https://emberveil.org/", release: "TBD" },
  { name: "Caverns of Time", status: "dev", details: "Turtle+", tag: "Vanilla+", group: "", url: "https://emberveil.org/", release: "Aug 15" },
  { name: "Ravencraft", status: "dev", details: "Turtle clone", tag: "Vanilla+", group: "", url: "https://ravencraft.io/", release: "Aug 22" },
  { name: "Whitemane — Frostmourne", status: "dev", details: "WotLK+", tag: "WotLK", group: "Whitemane", url: "https://frostmourne.whitemane.gg/en", release: "Sep 9" },
  { name: "Duskhaven", status: "dev", details: "Launch Date TBD", tag: "", group: "", url: "https://duskhaven.net" },
  { name: "WallCraft", status: "dev", details: "Vanilla+", tag: "Vanilla+", group: "", url: "https://www.wallcraft.org" },
  { name: "Azeroth at War", status: "dev", details: "Expected 2026", tag: "", group: "" },
  { name: "Hour of Twilight", status: "dev", details: "Expected 2026", tag: "", group: "" },
  { name: "Prophecy: Fall of Lordaeron", status: "dev", details: "Launch Date TBD", tag: "", group: "" },
  { name: "Warsworn", status: "dev", details: "WoW MOBA Concept (Launch TBD)", tag: "MOBA", group: "" },
  { name: "Whitemane — Stormstout", status: "dev", details: "Mists of Pandaria", tag: "MoP", group: "Whitemane" },
  { name: "Whitemane — Sunwell", status: "dev", details: "The Burning Crusade", tag: "TBC", group: "Whitemane" },
  { name: "Stormforge (Mistblade)", status: "closed", details: "Season 3 Ended", tag: "", group: "Stormforge" },
  { name: "Stormforge (Wrath)", status: "closed", details: "Season 1 Ended", tag: "", group: "Stormforge" },
  { name: "Felmyst", status: "closed", details: "Offline", tag: "", group: "" },
  { name: "Everlook", status: "closed", details: "Offline", tag: "", group: "" },
  { name: "WORS (World of RuneScape)", status: "closed", details: "Project Discontinued", tag: "", group: "" }
];

const NEWS = [
  { title: "Unreal Azeroth official release August 15", url: "https://unrealazeroth.ru" },
  { title: "Ascension accelerated content timeline for CoA and S10", url: "https://ascension.gg/en/timeline" },
  { title: "Blizzard RICO lawsuit against Ascension ongoing", url: "https://www.courtlistener.com/docket/73480810/blizzard-entertainment-inc-v-derek-s-powell/" }
];

const GUILDS = [
  { name: "gulag", server: "Tauri", realm: "Evermoon", faction: "Alliance" },
  { name: "tang", server: "Chromie", realm: "", faction: "Alliance" }
];

const LINKS = [
  { title: "Mods, Tutorials, Singleplayer & /wpsg/ Creations", url: "https://pastebin.com/StKbZ90j" },
  { title: "EQWOW (Everquest + WoW)", url: "https://github.com/NathanHandley/EQWOWConverter" }
];

if (typeof module !== "undefined") module.exports = { SERVERS, NEWS, GUILDS, LINKS };