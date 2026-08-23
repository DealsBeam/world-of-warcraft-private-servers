const STATUS = {
    playable: { label: "Playable", cls: "badge-green" },
    dev: { label: "In-Development", cls: "badge-yellow" },
    dead: { label: "Dead", cls: "badge-red" }
};

const POPTIER = ["large", "medium", "small", "tiny", "unknown"];

const HTYPE = {
    core: { label: "Core Emulators", icon: "server" },
    web: { label: "Web & Analytics", icon: "globe" },
    tools: { label: "Development Tools", icon: "wrench" }
};

const ERA = {
    "Vanilla": "Vanilla", "TBC": "TBC", "WotLK": "WotLK", "Cataclysm": "Cataclysm",
    "MoP": "MoP", "Legion": "Legion", "TWW": "TWW",
    "Vanilla+": "Vanilla", "Classless": "Vanilla",
    "Multi": "Multi", "MOBA": "Other", "": "Other"
};
const ERA_ORDER = ["Vanilla", "TBC", "WotLK", "Cataclysm", "MoP", "Legion", "TWW", "Multi", "Other"];

const ICONS = {
    server: "M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3zM7 5h.01M7 12h.01M7 19h.01",
    globe: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z",
    wrench: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
};

const slugify = s => String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const matches = (s, { status = "all", tag = "all", pop = "all", search = "" } = {}) => {
    if (status !== "all" && s.status !== status) return false;
    if (tag !== "all" && s.tag !== tag) return false;
    if (pop !== "all" && (s.popTier || "unknown") !== pop) return false;
    if (search) {
        const hay = (s.name + " " + s.details + " " + s.group + " " + s.tag).toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
    }
    return true;
};

const groupByEra = servers => {
    const groups = {};
    servers.forEach(s => {
        const era = ERA[s.tag] || "Other";
        (groups[era] = groups[era] || []).push(s);
    });
    return ERA_ORDER.filter(e => groups[e]).map(e => ({ era: e, servers: groups[e] }))
        .concat(Object.keys(groups).filter(e => ERA_ORDER.indexOf(e) === -1).map(e => ({ era: e, servers: groups[e] })));
};

const countByStatus = (servers, status) => servers.filter(s => s.status === status).length;

module.exports = { STATUS, POPTIER, HTYPE, ERA, ERA_ORDER, ICONS, slugify, matches, groupByEra, countByStatus };