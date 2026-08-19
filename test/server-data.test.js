const SERVERS = require("../src/_data/servers.js");
const LINKS = require("../src/_data/links.js");
const HISTORY = require("../src/_data/history.js");
const CLASSPLUS_ENTRIES = require("../src/_data/classicplus.js").entries;
const CLASSPLUS_LATEST = require("../src/_data/classicplus.js").latest;
const CDNWATCH = require("../src/_data/cdnwatch.js");
const { slugify, matches } = require("../src/_data/vocab.js");
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

const slugs = SERVERS.map(s => slugify(s.name));
assert.strictEqual(new Set(slugs).size, slugs.length, `slug collision: ${slugs.filter((v, i) => slugs.indexOf(v) !== i).join(", ")}`);

assert.strictEqual(SERVERS.length, 53, "server count changed");
assert.strictEqual(SERVERS.filter(s => s.status === "playable").length, 35);
assert.strictEqual(SERVERS.filter(s => s.status === "dev").length, 12);
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
    if (e.discuss) assert.ok(/^https?:\/\//.test(e.discuss), `bad discuss in classicplus: ${e.discuss}`);
}
assert.strictEqual(new Set(CLASSPLUS_ENTRIES.map(e => e.title)).size, CLASSPLUS_ENTRIES.length, "duplicate classicplus titles");
for (const c of CP_CATS) assert.ok(CLASSPLUS_ENTRIES.filter(e => e.category === c).length >= 5, `category ${c} too thin`);

const CP_DATES = CLASSPLUS_ENTRIES.map(e => e.date).sort();
assert.strictEqual(CLASSPLUS_LATEST.date, CP_DATES[CP_DATES.length - 1], "latest date mismatch");
assert.ok(Number.isInteger(CLASSPLUS_LATEST.daysAgo) && CLASSPLUS_LATEST.daysAgo >= 0, "bad daysAgo");
assert.ok(CLASSPLUS_LATEST.daysAgo <= Math.floor((Date.now() - Date.parse(CP_DATES[0])) / 86400000), "daysAgo exceeds range");

assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable" })).length, 35);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Cataclysm" })).length, 3);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "WotLK" })).length, 12);
assert.strictEqual(SERVERS.filter(s => matches(s, { tag: "Vanilla+" })).length, 12);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "whitemane" })).length, 5);
assert.strictEqual(SERVERS.filter(s => matches(s, { status: "playable", search: "whitemane" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "stormforge" })).length, 2);
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "does-not-exist" })).length, 0);

const css = fs.readFileSync(path.join(__dirname, "../src/style.css"), "utf8");
const blocks = css.split(/\}/).filter(b => b.trim() && b.includes("{"));
const baseSel = sel => sel.trim().split(/\s+/).pop();
const textFillSels = new Set(
    blocks.filter(b => /-webkit-text-fill-color:\s*transparent/.test(b))
        .map(b => baseSel(b.split("{")[0]))
);
for (const b of blocks) {
    const [selRaw, body] = b.split("{");
    if (!body) continue;
    if (!/background:\s/.test(body)) continue;
    if (/background-clip:\s*text/.test(body)) continue;
    const sel = baseSel(selRaw);
    assert.ok(!textFillSels.has(sel),
        `CSS: "${selRaw}" sets background shorthand but not background-clip: text while "${sel}" uses transparent text-fill — glyphs invisible`);
}

console.log(`OK: ${SERVERS.length} servers, ${newsFiles.length} news, ${LINKS.length} links, ${HISTORY.length} history events, ${CLASSPLUS_ENTRIES.length} classicplus — all checks passed`);

(async () => {
    const w = await CDNWATCH();
    assert.ok(w.tact === "wowdev2", `bad tact: ${w.tact}`);
    if (w.ok) {
        assert.ok(/^\d+\.\d+\.\d+\.\d+$/.test(w.current), `bad current version: ${w.current}`);
        assert.ok(Array.isArray(w.history) && w.history.length >= 5, "cdn history too thin");
        for (const h of w.history) assert.ok(/^\d+\.\d+\.\d+\.\d+$/.test(h.version), `bad history version: ${h.version}`);
    }
    console.log(`CDN watch: ${w.ok ? "live" : "offline"}${w.ok ? " — " + w.current + " (" + w.history.length + " bumps)" : " — " + w.error}`);
})();