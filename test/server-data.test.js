const SERVERS = require("../data.js");
const assert = require("assert");

const STATUSES = ["playable", "dev", "closed"];

for (const s of SERVERS) {
    assert.ok(typeof s.name === "string" && s.name.length, `missing name: ${JSON.stringify(s)}`);
    assert.ok(STATUSES.includes(s.status), `bad status on ${s.name}: ${s.status}`);
    assert.ok(typeof s.details === "string", `missing details on ${s.name}`);
}

const names = new Set(SERVERS.map(s => s.name));
assert.strictEqual(names.size, SERVERS.length, "duplicate server names");

assert.strictEqual(SERVERS.length, 27, "server count changed");
assert.strictEqual(SERVERS.filter(s => s.status === "playable").length, 13);
assert.strictEqual(SERVERS.filter(s => s.status === "dev").length, 8);
assert.strictEqual(SERVERS.filter(s => s.status === "closed").length, 6);

function matches(s, { status = "all", tag = "all", search = "" } = {}) {
    if (status !== "all" && s.status !== status) return false;
    if (tag !== "all" && s.tag !== tag) return false;
    if (search) {
        const hay = (s.name + " " + s.details + " " + s.group + " " + s.tag).toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
    }
    return true;
}

assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable" })).length, 13);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Cataclysm" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "whitemane" })).length, 5);
assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable", search: "whitemane" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "does-not-exist" })).length, 0);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "WotLK" })).length, 1);

console.log(`OK: ${SERVERS.length} servers, all checks passed`);