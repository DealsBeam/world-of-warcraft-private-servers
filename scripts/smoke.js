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

console.log(`OK: build smoke test passed (${SERVERS.length} server pages + core assets)`);