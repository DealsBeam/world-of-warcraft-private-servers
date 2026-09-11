const assert = require("assert");
const fs = require("fs");
const path = require("path");
const SERVERS = require("../src/_data/servers.js");
const { slugify } = require("../src/_data/vocab.js");

const out = path.join(__dirname, "../_site");

const has = p => assert.ok(fs.existsSync(path.join(out, p)), `missing built page: ${p}`);

has("index.html");
has("news/index.html");
has("blog/index.html");
has("classic-plus/index.html");
has("guides/octowow/index.html");
has("radio/index.html");
has("llms.txt");
has("feed.xml");
has("sitemap.xml");
has("data.js");
has("style.css");
has("app.js");
has("theme.js");
has("radio.js");
has("favicon.svg");
has("og.png");
has("robots.txt");

for (const s of SERVERS) has(`servers/${slugify(s.name)}/index.html`);

for (const f of fs.readdirSync(path.join(__dirname, "../src/blog"))) {
    if (!f.endsWith(".md")) continue;
    const fm = fs.readFileSync(path.join(__dirname, "../src/blog", f), "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] || "";
    if (fm.includes("draft: true")) continue;
    has(`blog/${f.replace(/\.md$/, "")}/index.html`);
}

const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
const EXEMPT = ["attribution", "404", "llms"];
const pageDirs = [];
for (const entry of fs.readdirSync(out, { withFileTypes: true })) {
    if (entry.isDirectory() && !EXEMPT.some(e => entry.name.startsWith(e)) && fs.existsSync(path.join(out, entry.name, "index.html"))) {
        pageDirs.push(`${entry.name}/`);
    }
}
for (const d of pageDirs) {
    assert.ok(sitemap.includes(`https://wowprivateservers.vercel.app/${d}`), `page missing from sitemap.xml: /${d}`);
}

// Bodies must render visible text: an unclosed HTML comment once hid 4 posts
// (valid HTML source, zero browser-visible words). Count article text only —
// nav/footer chrome would mask an empty body. Floor is 20: May-era briefs run
// 28+ words intentionally; the bug class renders near zero.
const textOf = html => {
    const m = html.match(/<article[\s\S]*?<\/article>/);
    const body = m ? m[0] : "";
    return body.replace(/<!--[\s\S]*?-->/g, " ").replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ").trim();
};
for (const d of ["news/", "blog/"]) {
    for (const entry of fs.readdirSync(path.join(out, d))) {
        const p = path.join(out, d, entry, "index.html");
        if (!fs.existsSync(p)) continue;
        const html = fs.readFileSync(p, "utf8");
        // Unclosed HTML comments swallow bodies in browsers while looking
        // fine in source (partial tag-strip can even pass word counts).
        const opens = (html.match(/<!--/g) || []).length;
        const closes = (html.match(/-->/g) || []).length;
        assert.strictEqual(opens, closes, `unclosed HTML comment: /${d}${entry}/ (${opens} opens, ${closes} closes)`);
        const words = textOf(html).split(" ").filter(Boolean).length;
        assert.ok(words > 20, `page renders almost no text: /${d}${entry}/ (${words} words)`);
    }
}

console.log(`OK: build smoke test passed (${SERVERS.length} server pages + core assets)`);

// Internal link integrity: every same-site href must resolve to a built file.
// Catches renamed slugs, removed servers, typo paths, and links to drafts.
{
    const pages = new Set();
    const walk = dir => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) walk(p);
            else if (e.name === "index.html") pages.add("/" + path.relative(out, p).replace(/\\/g, "/").replace(/index\.html$/, ""));
        }
    };
    walk(out);
    const broken = [];
    const check = dir => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) { check(p); continue; }
            if (e.name !== "index.html") continue;
            const html = fs.readFileSync(p, "utf8");
            const from = "/" + path.relative(out, p).replace(/\\/g, "/").replace(/index\.html$/, "");
            for (const m of html.matchAll(/href="(\/[^"#]*?)"/g)) {
                const clean = m[1].split("?")[0];
                const target = clean.endsWith("/") ? clean : clean + "/";
                if (pages.has(target) || fs.existsSync(path.join(out, clean.replace(/^\//, "")))) continue;
                broken.push(`${from} -> ${m[1]}`);
            }
        }
    };
    check(out);
    assert.strictEqual(broken.length, 0, `broken internal links:\n${broken.join("\n")}`);
    console.log(`OK: internal links resolve (${pages.size} pages)`);
}

// No direct hyperlinks to tracked private-server domains anywhere in built HTML.
{
    const hosts = new Set();
    for (const s of SERVERS) {
        if (!s.url) continue;
        hosts.add(new URL(s.url).hostname.replace(/^www\./, ""));
    }
    const hits = [];
    const scan = dir => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) { scan(p); continue; }
            if (e.name !== "index.html") continue;
            const html = fs.readFileSync(p, "utf8");
            for (const m of html.matchAll(/(?:href|src)="https?:\/\/([^"'#/?]+)/g)) {
                const h = m[1].replace(/^www\./, "");
                if (hosts.has(h)) hits.push(`${path.relative(out, p)} -> ${m[0]}"`);
            }
        }
    };
    scan(out);
    assert.strictEqual(hits.length, 0, `direct links to private servers:\n${hits.join("\n")}`);
    console.log(`OK: no direct private-server links (${hosts.size} domains checked)`);
}