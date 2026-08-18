const ERA_MAP = { "Vanilla": "Vanilla", "TBC": "TBC", "WotLK": "WotLK", "Cataclysm": "Cataclysm", "MoP": "MoP", "Legion": "Legion", "TWW": "TWW", "Vanilla+": "Vanilla", "Classless": "Vanilla", "Multi": "Multi", "MOBA": "Other", "": "Other" };
const ERA_ORDER = ["Vanilla", "TBC", "WotLK", "Cataclysm", "MoP", "Legion", "TWW", "Multi", "Other"];

const servers = require("./servers.js");

module.exports = (() => {
    const groups = {};
    servers.forEach(s => {
        const era = ERA_MAP[s.tag] || "Other";
        (groups[era] = groups[era] || []).push(s);
    });
    return ERA_ORDER.filter(e => groups[e]).map(e => ({ era: e, servers: groups[e] }));
})();