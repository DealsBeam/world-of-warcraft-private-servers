const { SERVERS, NEWS, GUILDS, LINKS } = require("../data.js");
const assert = require("assert");

const STATUSES = ["playable", "dev", "closed"];

for (const s of SERVERS) {
    assert.ok(typeof s.name === "string" && s.name.length, `missing name: ${JSON.stringify(s)}`);
    assert.ok(STATUSES.includes(s.status), `bad status on ${s.name}: ${s.status}`);
    assert.ok(typeof s.details === "string", `missing details on ${s.name}`);
    if (s.url) assert.ok(/^https?:\/\//.test(s.url), `bad url on ${s.name}: ${s.url}`);
    if (s.release) {
        assert.strictEqual(s.status, "dev", `release set on non-dev ${s.name}`);
        assert.ok(typeof s.release === "string" && s.release.length, `bad release on ${s.name}`);
    }
}

const names = new Set(SERVERS.map(s => s.name));
assert.strictEqual(names.size, SERVERS.length, "duplicate server names");

assert.strictEqual(SERVERS.length, 44, "server count changed");
assert.strictEqual(SERVERS.filter(s => s.status === "playable").length, 25);
assert.strictEqual(SERVERS.filter(s => s.status === "dev").length, 13);
assert.strictEqual(SERVERS.filter(s => s.status === "closed").length, 6);

for (const arr of [NEWS, GUILDS, LINKS]) {
    assert.ok(Array.isArray(arr) && arr.length > 0, "empty section");
}
for (const n of NEWS) {
    assert.ok(n.title && /^https?:\/\//.test(n.url), `bad news: ${JSON.stringify(n)}`);
}
for (const l of LINKS) {
    assert.ok(l.title && /^https?:\/\//.test(l.url), `bad link: ${JSON.stringify(l)}`);
}
for (const g of GUILDS) {
    assert.ok(g.name && g.server, `bad guild: ${JSON.stringify(g)}`);
}

function matches(s, { status = "all", tag = "all", search = "" } = {}) {
    if (status !== "all" && s.status !== status) return false;
    if (tag !== "all" && s.tag !== tag) return false;
    if (search) {
        const hay = (s.name + " " + s.details + " " + s.group + " " + s.tag).toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
    }
    return true;
}

assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable" })).length, 25);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Cataclysm" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "WotLK" })).length, 9);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Vanilla+" })).length, 9);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "whitemane" })).length, 5);
assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable", search: "whitemane" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "stormforge" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "does-not-exist" })).length, 0);

console.log(`OK: ${SERVERS.length} servers, ${NEWS.length} news, ${GUILDS.length} guilds, ${LINKS.length} links — all checks passed`);