const SERVERS = require("../src/_data/servers.js");
const NEWS = require("../src/_data/news.js");
const LINKS = require("../src/_data/links.js");
const HISTORY = require("../src/_data/history.js");
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

const slugify = s => String(s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const slugs = SERVERS.map(s => slugify(s.name));
assert.strictEqual(new Set(slugs).size, slugs.length, `slug collision: ${slugs.filter((v, i) => slugs.indexOf(v) !== i).join(", ")}`);

assert.strictEqual(SERVERS.length, 44, "server count changed");
assert.strictEqual(SERVERS.filter(s => s.status === "playable").length, 24);
assert.strictEqual(SERVERS.filter(s => s.status === "dev").length, 14);
assert.strictEqual(SERVERS.filter(s => s.status === "closed").length, 6);

for (const arr of [NEWS, LINKS]) {
    assert.ok(Array.isArray(arr) && arr.length > 0, "empty section");
}
for (const n of NEWS) {
    assert.ok(n.title && /^https?:\/\//.test(n.url), `bad news: ${JSON.stringify(n)}`);
}
for (const l of LINKS) {
    assert.ok(l.title && /^https?:\/\//.test(l.url), `bad link: ${JSON.stringify(l)}`);
}

assert.ok(HISTORY.length >= 30, "history too small");
for (const h of HISTORY) {
    assert.ok(h.id && h.title && h.date, `bad history event: ${JSON.stringify(h)}`);
    assert.ok(["core", "web", "tools"].includes(h.category), `bad category on ${h.title}`);
    assert.ok(Array.isArray(h.paragraphs) && h.paragraphs.length > 0, `bad paragraphs on ${h.title}`);
    if (h.githubRepo) assert.ok(/^[\w.-]+\/[\w.-]+$/.test(h.githubRepo), `bad githubRepo on ${h.title}`);
}
assert.strictEqual(new Set(HISTORY.map(h => h.id)).size, HISTORY.length, "duplicate history ids");

function matches(s, { status = "all", tag = "all", search = "" } = {}) {
    if (status !== "all" && s.status !== status) return false;
    if (tag !== "all" && s.tag !== tag) return false;
    if (search) {
        const hay = (s.name + " " + s.details + " " + s.group + " " + s.tag).toLowerCase();
        if (!hay.includes(search.toLowerCase())) return false;
    }
    return true;
}

assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable" })).length, 24);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Cataclysm" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "WotLK" })).length, 9);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Vanilla+" })).length, 10);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "whitemane" })).length, 5);
assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable", search: "whitemane" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "stormforge" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "does-not-exist" })).length, 0);

console.log(`OK: ${SERVERS.length} servers, ${NEWS.length} news, ${LINKS.length} links, ${HISTORY.length} history events — all checks passed`);