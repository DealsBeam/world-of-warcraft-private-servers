const { ERA, ERA_ORDER } = require("./vocab.js");

const servers = require("./servers.js");

module.exports = (() => {
    const groups = {};
    servers.forEach(s => {
        const era = ERA[s.tag] || "Other";
        (groups[era] = groups[era] || []).push(s);
    });
    return ERA_ORDER.filter(e => groups[e]).map(e => ({ era: e, servers: groups[e] }));
})();