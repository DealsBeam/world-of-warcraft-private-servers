#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const RAW = "https://raw.githubusercontent.com/game-icons/icons/master";

const ICONS = {
    mountain: "badges/mountain",
    "magic-portal": "lorc/magic-portal",
    frostfire: "lorc/frostfire",
    "dragon-orb": "delapouite/dragon-orb",
    "monk-face": "delapouite/monk-face",
    "eclipse-flare": "lorc/eclipse-flare",
    bolt: "badges/bolt",
    stack: "delapouite/stack",
    question: "badges/question",
    "turtle-shell": "lorc/turtle-shell",
    "ancient-sword": "delapouite/ancient-sword",
    "ancient-columns": "delapouite/ancient-columns",
    flame: "carl-olsen/flame",
    "hammer-break": "delapouite/hammer-break",
    "wolf-head": "lorc/wolf-head",
    "concentration-orb": "lorc/concentration-orb",
    shield: "badges/shield",
    "dungeon-gate": "delapouite/dungeon-gate",
    "rune-stone": "lorc/rune-stone",
    hourglass: "lorc/hourglass",
    "ancient-ruins": "delapouite/ancient-ruins",
    "snowflake-1": "lorc/snowflake-1",
    "nested-eclipses": "lorc/nested-eclipses",
    raven: "lorc/raven",
    werewolf: "lorc/werewolf",
    "war-axe": "delapouite/war-axe",
    crown: "badges/crown"
};

async function main() {
    const d = {};
    const authors = {};
    const views = {};
    let ok = 0;
    for (const [name, rel] of Object.entries(ICONS)) {
        const url = `${RAW}/${rel}.svg`;
        const res = await fetch(url);
        if (!res.ok) { console.error(`FAIL ${name} (${res.status}) ${url}`); continue; }
        const svg = await res.text();
        const paths = [...svg.matchAll(/<path[^>]*\bd="([^"]*)"/g)]
            .map(x => x[1])
            .filter(p => !/^M0 0h(512|256|128)v(512|256|128)/.test(p));
        if (!paths.length) { console.error(`NO PATH ${name}`); continue; }
        const author = rel.split("/")[0];
        d[name] = paths.join(" ");
        const vb = svg.match(/viewBox="([^"]*)"/);
        views[name] = vb ? vb[1] : "0 0 512 512";
        authors[name] = author;
        ok++;
    }
    if (ok < Object.keys(ICONS).length) { console.error(`only ${ok}/${Object.keys(ICONS).length} fetched`); process.exit(1); }
    const out = `const ICON_PATHS = ${JSON.stringify(d, null, 4)};\n\nconst ICON_VIEWBOX = ${JSON.stringify(views, null, 4)};\n\nconst ICON_AUTHORS = ${JSON.stringify(authors, null, 4)};\n\nmodule.exports = { ICON_PATHS, ICON_VIEWBOX, ICON_AUTHORS };\n`;
    fs.writeFileSync(path.join(__dirname, "..", "src", "_data", "iconpaths.js"), out);
    console.log(`wrote ${ok} icons`);
}

main();