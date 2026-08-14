const SERVERS = require("../src/_data/servers.js");
const LINKS = require("../src/_data/links.js");
const HISTORY = require("../src/_data/history.js");
const CLASSPLUS_ENTRIES = require("../src/_data/classicplus.js").entries;
const assert = require("assert");
const fs = require("fs");
const path = require("path");

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

const newsDir = path.join(__dirname, "../src/news");
const newsFiles = fs.readdirSync(newsDir).filter(f => f.endsWith(".md"));
assert.ok(newsFiles.length >= 11, "news collection shrank");
for (const f of newsFiles) {
    const txt = fs.readFileSync(path.join(newsDir, f), "utf8");
    const m = txt.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(m, `missing front matter in ${f}`);
    const fm = m[1];
    const title = fm.match(/^title:\s*["']?([^"'\n]+)/m);
    const date = fm.match(/^date:\s*(\d{4}-\d{2}-\d{2})/m);
    const link = fm.match(/^link:\s*["']?([^\s"']+)/m);
    assert.ok(title, `missing title in ${f}`);
    assert.ok(date, `bad date in ${f}: ${fm.match(/^date:\s*([^\n]+)/m)?.[1]}`);
    assert.ok(fm.includes("draft: true") || link, `non-draft post missing link in ${f}`);
    if (link) assert.ok(/^https?:\/\//.test(link[1]), `bad link in ${f}: ${link[1]}`);
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

assert.ok(CLASSPLUS_ENTRIES.length >= 25, "classicplus too small");
const CP_CATS = ["news", "leak", "rumor"];
for (const e of CLASSPLUS_ENTRIES) {
    assert.ok(e.date && /^\d{4}-\d{2}-\d{2}$/.test(e.date), `bad date in classicplus: ${JSON.stringify(e)}`);
    assert.ok(CP_CATS.includes(e.category), `bad category in classicplus: ${e.category}`);
    assert.ok(e.title && e.summary && e.url, `missing field in classicplus: ${JSON.stringify(e)}`);
    assert.ok(/^https?:\/\//.test(e.url), `bad url in classicplus: ${e.url}`);
}
assert.strictEqual(new Set(CLASSPLUS_ENTRIES.map(e => e.title)).size, CLASSPLUS_ENTRIES.length, "duplicate classicplus titles");
for (const c of CP_CATS) assert.ok(CLASSPLUS_ENTRIES.filter(e => e.category === c).length >= 5, `category ${c} too thin`);

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

console.log(`OK: ${SERVERS.length} servers, ${newsFiles.length} news, ${LINKS.length} links, ${HISTORY.length} history events, ${CLASSPLUS_ENTRIES.length} classicplus — all checks passed`);