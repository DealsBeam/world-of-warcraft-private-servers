const { ICON_PATHS, ICON_VIEWBOX, ICON_AUTHORS } = require("./iconpaths.js");
const { ERA } = require("./vocab.js");

const ERA_ICON = {
    Vanilla: "mountain",
    TBC: "magic-portal",
    WotLK: "frostfire",
    Cataclysm: "dragon-orb",
    MoP: "monk-face",
    Legion: "eclipse-flare",
    TWW: "bolt",
    Multi: "stack",
    Other: "question"
};

const SERVER_ICON = {
    "Turtle WoW": "turtle-shell",
    "Ascension": "magic-portal",
    "Warmane": "ancient-sword",
    "Kronos V": "ancient-columns",
    "Firestorm": "flame",
    "Stormforge (Mistblade)": "hammer-break",
    "Stormforge (Wrath)": "hammer-break",
    "Whitemane — Gilneas": "wolf-head",
    "Whitemane — Maelstrom": "wolf-head",
    "Whitemane — Frostmourne": "wolf-head",
    "Whitemane — Stormstout": "wolf-head",
    "Whitemane — Sunwell": "wolf-head",
    "Helios": "concentration-orb",
    "Tauri": "shield",
    "Project Epoch: Reborn": "dungeon-gate",
    "WORS (World of RuneScape)": "rune-stone",
    "Chromiecraft": "hourglass",
    "Caverns of Time": "ancient-ruins",
    "Everlook": "snowflake-1",
    "Felmyst": "nested-eclipses",
    "Ravencraft": "raven",
    "Duskhaven": "werewolf",
    "Warsworn": "war-axe",
    "Conquest of Azeroth": "crown"
};

const eraIcon = era => ERA_ICON[era] || "question";

const iconFor = (name, tag) => (name && SERVER_ICON[name]) || eraIcon(ERA[tag] || "Other");

const pathFor = ic => ICON_PATHS[ic] || ICON_PATHS.question;

const viewFor = ic => ICON_VIEWBOX[ic] || "0 0 512 512";

module.exports = { ERA_ICON, SERVER_ICON, eraIcon, iconFor, pathFor, viewFor, ICON_AUTHORS, ICON_PATHS, ICON_VIEWBOX };