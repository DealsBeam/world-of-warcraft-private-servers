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

const STATUSES = ["playable", "dev", "dead"];
const POPTIERS = ["large", "medium", "small", "tiny", "unknown"];
const TAGS = ["Vanilla", "Vanilla+", "TBC", "WotLK", "Cataclysm", "MoP", "Legion", "TWW", "Multi", "Classless", "MOBA", ""];
const TODAY = new Date().toISOString().slice(0, 10);

for (const s of SERVERS) {
    assert.ok(typeof s.name === "string" && s.name.length, `missing name: ${JSON.stringify(s)}`);
    assert.ok(STATUSES.includes(s.status), `bad status on ${s.name}: ${s.status}`);
    assert.ok(typeof s.details === "string" && s.details.length, `missing details on ${s.name}`);
    if (s.url) assert.ok(/^https:\/\//.test(s.url), `bad url on ${s.name}: ${s.url}`);
    assert.ok(TAGS.includes(s.tag), `bad tag on ${s.name}: ${JSON.stringify(s.tag)}`);
    if (s.updated) assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(s.updated) && s.updated <= TODAY, `bad updated date on ${s.name}: ${s.updated}`);
    if (s.release) {
        assert.strictEqual(s.status, "dev", `release set on non-dev ${s.name}`);
        assert.ok(typeof s.release === "string" && s.release.length, `bad release on ${s.name}`);
    }
    assert.ok(POPTIERS.includes(s.popTier || "unknown"), `bad popTier on ${s.name}: ${JSON.stringify(s.popTier)}`);
    if (s.status === "dead") {
        assert.ok(/^\d{4}-\d{2}-\d{2}$/.test(s.shutdown || ""), `dead server missing valid shutdown date: ${s.name}`);
        // ponytail: allow announced future shutdown (Ascension Sep 4) — was strict <= TODAY
        assert.ok(s.shutdown <= "2026-09-30", `bad shutdown date on ${s.name}: ${s.shutdown}`);
        assert.ok(["C&D", "abandoned"].includes(s.shutdownReason), `bad shutdownReason on ${s.name}: ${JSON.stringify(s.shutdownReason)}`);
        assert.ok(!s.url, `dead server should not link a site: ${s.name}`);
        assert.ok(!s.release, `dead server should not have release: ${s.name}`);
    } else {
        assert.ok(!s.shutdown && !s.shutdownReason, `non-dead server has shutdown fields: ${s.name}`);
    }
}

const names = new Set(SERVERS.map(s => s.name));
assert.strictEqual(names.size, SERVERS.length, "duplicate server names");

const slugs = SERVERS.map(s => slugify(s.name));
assert.strictEqual(new Set(slugs).size, slugs.length, `slug collision: ${slugs.filter((v, i) => slugs.indexOf(v) !== i).join(", ")}`);

assert.ok(SERVERS.length >= 40, "server list unexpectedly small");
const byStatus = {};
for (const s of SERVERS) byStatus[s.status] = (byStatus[s.status] || 0) + 1;
for (const st of STATUSES) assert.ok(byStatus[st] > 0, `no servers with status ${st}`);
assert.strictEqual(byStatus.playable + byStatus.dev + byStatus.dead, SERVERS.length, "status counts don't sum to total");

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
    assert.ok(title, `missing title in ${f}`);
    assert.ok(date, `bad date in ${f}: ${fm.match(/^date:\s*([^\n]+)/m)?.[1]}`);
    assert.ok(date[1] <= TODAY || fm.includes("draft: true"), `future date in ${f}: ${date[1]}`);
}

// BOUNDARY RULE — read before writing:
// "About something that happened → news. Something people will still search in six months → blog."
// Cross-section duplicate guard:
const titleWords = s => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter(Boolean);
const similarity = (a, b) => {
    const sa = new Set(titleWords(a));
    const sb = new Set(titleWords(b));
    const inter = [...sa].filter(x => sb.has(x)).length;
    const union = new Set([...sa, ...sb]).size;
    return inter / union;
};

const titles = [];
for (const f of newsFiles) {
    const fm = fs.readFileSync(path.join(newsDir, f), "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1];
    if (fm && !fm.includes("draft: true")) {
        const t = fm.match(/^title:\s*["']?([^"'\n]+)/m)?.[1];
        if (t) titles.push({title: t, source: "news"});
    }
}
const blogDir = path.join(__dirname, "../src/blog");
for (const f of fs.readdirSync(blogDir)) {
    if (!f.endsWith(".md")) continue;
    const fm = fs.readFileSync(path.join(blogDir, f), "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1];
    if (fm && !fm.includes("draft: true")) {
        const t = fm.match(/^title:\s*["']?([^"'\n]+)/m)?.[1];
        if (t) titles.push({title: t, source: "blog"});
    }
}

for (let i = 0; i < titles.length; i++) {
    for (let j = i + 1; j < titles.length; j++) {
        if (titles[i].source === titles[j].source) continue;
        const sim = similarity(titles[i].title, titles[j].title);
        if (sim >= 0.6) {
            assert.fail(`Near-duplicate titles across sections (sim ${sim.toFixed(2)}): "${titles[i].title}" (${titles[i].source}) vs "${titles[j].title}" (${titles[j].source})`);
        }
    }
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

assert.ok(SERVERS.filter(s => matches(s, { status: "playable" })).length >= 30, "playable filter broken");
assert.ok(SERVERS.filter(s => matches(s, { tag: "Cataclysm" })).length >= 2, "Cataclysm tag broken");
assert.ok(SERVERS.filter(s => matches(s, { tag: "WotLK" })).length >= 8, "WotLK tag broken");
assert.ok(SERVERS.filter(s => matches(s, { tag: "Vanilla+" })).length >= 8, "Vanilla+ tag broken");
assert.ok(SERVERS.filter(s => matches(s, { search: "whitemane" })).length >= 4, "search broken");
assert.ok(SERVERS.filter(s => matches(s, { status: "playable", search: "whitemane" })).length >= 1, "combined filter broken");
assert.strictEqual(SERVERS.filter(s => matches(s, { search: "does-not-exist" })).length, 0);
assert.ok(SERVERS.filter(s => matches(s, { pop: "large" })).length >= 3, "popTier large filter broken");
assert.ok(SERVERS.filter(s => matches(s, { pop: "unknown" })).length > 0, "popTier unknown filter broken");
assert.strictEqual(SERVERS.filter(s => matches(s, { pop: "all" })).length, SERVERS.length, "popTier all filter broken");
assert.ok(SERVERS.filter(s => s.status === "dead").length >= 3, "dead audit lost servers");

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
        assert.ok(Array.isArray(w.history) && w.history.length >= 4, "cdn history too thin");
        for (const h of w.history) assert.ok(/^\d+\.\d+\.\d+\.\d+$/.test(h.version), `bad history version: ${h.version}`);
    }
    console.log(`CDN watch: ${w.ok ? "live" : "offline"}${w.ok ? " — " + w.current + " (" + w.history.length + " bumps)" : " — " + w.error}`);
})();