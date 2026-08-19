const assert = require("assert");
const fs = require("fs");
const path = require("path");
const SERVERS = require("../src/_data/servers.js");
const { slugify } = require("../src/_data/vocab.js");

const out = path.join(__dirname, "../_site");

const has = p => assert.ok(fs.existsSync(path.join(out, p)), `missing built page: ${p}`);

has("index.html");
has("news/index.html");
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

console.log(`OK: build smoke test passed (${SERVERS.length} server pages + core assets)`);