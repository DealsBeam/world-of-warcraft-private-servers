const assert = require("assert");
const fs = require("fs");
const path = require("path");
const SERVERS = require("../src/_data/servers.js");
const { slugify } = require("../src/_data/vocab.js");

const out = path.join(__dirname, "../_site");

const has = p => assert.ok(fs.existsSync(path.join(out, p)), `missing built page: ${p}`);

has("index.html");
has("servers/index.html");
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

const census = fs.readFileSync(path.join(out, "census/index.html"), "utf8");
assert.ok(!census.includes("{{"), "census contains an unrendered template expression");
assert.ok(census.includes(`${SERVERS.length} servers`), "census server count is not rendered");

for (const f of fs.readdirSync(path.join(__dirname, "../src/blog"))) {
    if (!f.endsWith(".md")) continue;
    const fm = fs.readFileSync(path.join(__dirname, "../src/blog", f), "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] || "";
    if (fm.includes("draft: true")) continue;
    has(`blog/${f.replace(/\.md$/, "")}/index.html`);
}

// Every built page must appear as an exact <loc> in the sitemap. This used to
// substring-match top-level directory names only, which meant a directory whose
// children were listed always passed (/guides/ matched via /guides/octowow/)
// and individual pages inside it were never checked. That is how
// /guides/spp-classics/ shipped unlisted.
//
// Dead server pages are excluded on purpose: we keep shut-down realms in the
// dataset for historical accuracy, but we do not want to rank for them. The
// sitemap template applies the same rule, and this gate has to match it or it
// will fail on a decision rather than on a mistake.
const sitemap = fs.readFileSync(path.join(out, "sitemap.xml"), "utf8");
const EXEMPT = ["attribution", "404", "llms", "sitemap", "news-sitemap", "api", "images", "fonts", "files"];
const ORIGIN = "https://wowprivateservers.vercel.app";
const deadSlugs = new Set(SERVERS.filter(s => s.status === "dead").map(s => slugify(s.name)));
const listed = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].replace(/\/$/, "")));
const missingFromSitemap = [];
const walkForPages = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (dir === out && EXEMPT.some(e => entry.name === e || entry.name.startsWith(e))) continue;
            walkForPages(p);
            continue;
        }
        if (entry.name !== "index.html") continue;
        const route = "/" + path.relative(out, p).replace(/\\/g, "/").replace(/index\.html$/, "");
        const bare = route.replace(/\/$/, "");
        if (bare.startsWith("/servers/") && deadSlugs.has(bare.slice("/servers/".length))) continue;
        if (!listed.has(ORIGIN + bare)) missingFromSitemap.push(route);
    }
};
walkForPages(out);
assert.strictEqual(missingFromSitemap.length, 0, `pages missing from sitemap.xml:\n${missingFromSitemap.join("\n")}`);

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
        // The table scroll wrapper is injected by a markdown-it renderer rule.
        // An unbalanced wrapper is an unclosed <div>, which browsers mis-render
        // without any build-time complaint, so count them here.
        const wrapOpen = (html.match(/<div class="table-scroll">/g) || []).length;
        const wrapClose = (html.match(/<\/table><\/div>/g) || []).length;
        assert.strictEqual(wrapOpen, wrapClose, `unbalanced table-scroll wrapper: /${d}${entry}/ (${wrapOpen} open, ${wrapClose} close)`);
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
            for (const m of html.matchAll(/href="(\/(?!\/)[^"]*?)"/g)) {
                const clean = m[1].split(/[?#]/)[0];
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

// Markdown written into a .njk template never reaches markdown-it, so it renders
// as literal "[text](/url)" with no anchor. The internal-link gate cannot see
// this, because there is no link to check when the markdown is inert: writing
// /grading/ as a .njk file produced a page whose text was all present and whose
// links and tables did not exist. Catch the syntax in the built HTML instead.
{
    const leaked = [];
    const walk = dir => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) { walk(p); continue; }
            if (e.name !== "index.html") continue;
            const html = fs.readFileSync(p, "utf8");
            const m = html.match(/\[[a-z][^\]]{2,60}\]\(\/(?!\/)[^)\s]{2,80}\)/g);
            if (m) leaked.push(`${"/" + path.relative(out, p).replace(/index\.html$/, "")} -> ${m[0]}`);
        }
    };
    walk(out);
    assert.strictEqual(leaked.length, 0, `unrendered markdown links (is this page a .njk template written as markdown?):\n${leaked.join("\n")}`);
    console.log("OK: no unrendered markdown links");
}

// Fragment links must point at a real id. The check above strips "#..." before// resolving, and a bare href="#id" does not even start with "/", so neither
// path covered same-page anchors. A dead #fragment reads as a working link to
// both a reader and a crawler, so verify the id exists in the target page.
{
    const htmlCache = new Map();
    const relToFile = rel => (rel === "" || rel.endsWith("/") ? rel + "index.html" : rel);
    const readPage = rel => {
        if (!htmlCache.has(rel)) {
            htmlCache.set(rel, fs.readFileSync(path.join(out, relToFile(rel)), "utf8"));
        }
        return htmlCache.get(rel);
    };
    const hasId = (rel, id) => {
        const html = readPage(rel);
        return new RegExp(`\\sid="${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(html);
    };
    const bad = [];
    const walk = dir => {
        for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
            const p = path.join(dir, e.name);
            if (e.isDirectory()) { walk(p); continue; }
            if (e.name !== "index.html") continue;
            const html = fs.readFileSync(p, "utf8");
            const fromRel = path.relative(out, p).replace(/\\/g, "/").replace(/index\.html$/, "");
            const from = "/" + fromRel;
            for (const m of html.matchAll(/href="([^"]*#[^"]*)"/g)) {
                const [href, frag] = m[1].split("#");
                const targetRel = frag === "" ? null
                    : (href === "" ? fromRel : (href.startsWith("/") ? href.replace(/^\//, "").replace(/index\.html$/, "") : null));
                if (targetRel === null) continue; // external or non-page target, out of scope
                if (!hasId(targetRel, frag)) bad.push(`${from} -> #${frag}`);
            }
        }
    };
    walk(out);
    assert.strictEqual(bad.length, 0, `dead fragment links:\n${bad.join("\n")}`);
    console.log("OK: fragment links resolve");
}

// A single UI string rendered from two places (the nunjucks card include and the
// client-side cardHtml) is a string that will be changed in one and missed in the
// other. "Website known" survived a fix to app.js because the server-rendered card
// lives in src/_includes/card.njk, which is what crawlers and no-JS readers see.
{
    const offenders = [];
    for (const f of ["index.html", "servers/index.html"]) {
        const p2 = path.join(out, f);
        if (!fs.existsSync(p2)) continue;
        if (fs.readFileSync(p2, "utf8").includes("Website known")) offenders.push(f);
    }
    assert.strictEqual(offenders.length, 0, `stale 'Website known' label still rendered in: ${offenders.join(", ")}`);
    const home = fs.readFileSync(path.join(out, "index.html"), "utf8");
    assert.ok(home.includes("Site listed"), "homepage cards are missing the 'Site listed' label");
    const appSrc = fs.readFileSync(path.join(__dirname, "../src/app.js"), "utf8");
    assert.ok(appSrc.includes("Site listed"), "src/app.js cardHtml is missing the 'Site listed' label");
    console.log("OK: site-link label consistent in both render paths");
}

// The browser bundle must actually work. src/data.11ty.js ships functions to the
// browser with `.toString()`, which serialises the body but not the module scope
// around it, so a function closing over a module-level const throws
// ReferenceError in the browser while working in Node. That shipped twice in one
// sitting: `statusRank` referenced STATUS_ORDER, the sort comparator threw, and
// the throw aborted renderServers entirely, so a WotLK filter rendered 0 cards
// instead of 56. Nothing caught it because nothing executed the bundle.
{
    const fs2 = require("fs");
    const vm = require("vm");
    const bundle = fs2.readFileSync(path.join(out, "data.js"), "utf8");
    const ctx = vm.createContext({});
    // `const` at the top level of a vm script is lexically scoped to that script
    // and never becomes a property of the context object, so the bindings have to
    // be captured explicitly rather than read back off ctx.
    vm.runInContext(`${bundle}\n;globalThis.__exports = { VOCAB, SERVERS, NEWS, LINKS, HISTORY };`, ctx, { filename: "data.js" });
    for (const [k, v] of Object.entries(ctx.__exports)) ctx[k] = v;

    // Every name app.js destructures off VOCAB must exist in the emitted object.
    const appSrc = fs2.readFileSync(path.join(__dirname, "../src/app.js"), "utf8");
    const destructured = [...appSrc.matchAll(/const\s*\{([^}]*)\}\s*=\s*VOCAB/g)]
        .flatMap(m => m[1].split(",").map(x => x.trim().split(":")[0].trim()))
        .filter(Boolean);
    const absent = destructured.filter(n => !(n in ctx.VOCAB));
    assert.strictEqual(absent.length, 0, `app.js destructures from VOCAB but data.js does not define: ${absent.join(", ")}`);

    // And the serialised functions must not close over anything the browser lacks.
    const unbound = [];
    // groupByEra and countByStatus are deliberately NOT here: they close over ERA
    // and ERA_ORDER, which do not exist in the browser, and the browser render
    // path does not call them. Server-side templates use the real filter.
    for (const name of ["statusRank", "matches"]) {
        assert.strictEqual(typeof ctx.VOCAB[name], "function", `VOCAB.${name} is not a function in the built bundle`);
        const body = ctx.VOCAB[name].toString();
        for (const id of body.match(/\b([A-Z][A-Z0-9_]{2,})\b/g) || []) {
            if (id in ctx) continue;
            unbound.push(`${name}() references ${id}, which is not defined in the browser bundle`);
        }
    }
    assert.strictEqual(unbound.length, 0, `serialised browser functions close over module scope:\n${unbound.join("\n")}`);

    // Prove they run: every entry must rank, and grouping must not throw.
    for (const s2 of SERVERS) assert.ok(typeof ctx.VOCAB.statusRank(s2) === "number", `statusRank returned non-number for ${s2.name}`);
    const ranked = SERVERS.map(s2 => ctx.VOCAB.statusRank(s2));
    assert.ok(ranked.filter(r => r === 0).length > 0, "no server ranks as playable in the browser bundle");
    console.log(`OK: browser bundle runs (${destructured.length} VOCAB names, all ${SERVERS.length} servers ranked)`);
}

// A control row with a min-content floor (a select with white-space: pre, two
// fixed-width buttons) silently overflows a narrow viewport and squeezes its
// siblings to nothing. It shipped because every check we had read HTML, and a
// 320px layout cannot be seen in HTML. This asserts the CSS is at least
// equipped for it: the filter row and the tabs must be allowed to shrink, and
// the search field must be released from its desktop min-width, inside the
// 700px breakpoint.
{
    const css = fs.readFileSync(path.join(out, "style.css"), "utf8");
    // Take every <=700px block. There are several, and slicing from the first
    // one only reads as far as its closing brace, which is not where these
    // rules live.
    const blocks = [...css.matchAll(/@media\s*\(max-width:\s*700px\)\s*\{/g)];
    assert.ok(blocks.length > 0, "no 700px breakpoint found in the stylesheet");
    let mobile = "";
    for (const m of blocks) {
        let depth = 0, i = m.index + m[0].length - 1;
        for (; i < css.length; i++) {
            if (css[i] === "{") depth++;
            else if (css[i] === "}" && --depth === 0) break;
        }
        mobile += css.slice(m.index, i + 1) + "\n";
    }
    assert.ok(/\.filters\s*\{[^}]*flex-wrap:\s*wrap/.test(mobile),
        "at <=700px .filters does not wrap, so a wide select can overflow the viewport");
    assert.ok(/#search\s*\{[^}]*min-width:\s*0/.test(mobile),
        "at <=700px #search keeps its desktop min-width and cannot shrink");
    assert.ok(/\.tab\s*\{[^}]*padding:\s*12px 14px/.test(mobile),
        "at <=700px the tab labels keep desktop padding, which overflows a 320px viewport");
    console.log("OK: narrow-viewport rules present (filters wrap, search can shrink)");
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

// A dead entry's shutdown reason is the difference between "closed and
// download" and "abandoned", and the API is what a consumer reads. It was
// missing from the API's key list, so all 13 dead entries published without it.
{
    const api = JSON.parse(fs.readFileSync(path.join(out, "api/servers.json"), "utf8"));
    const dead = api.filter(s => s.status === "dead");
    const missing = dead.filter(s => !s.shutdownReason);
    assert.strictEqual(missing.length, 0,
        `dead entries missing shutdownReason in the API: ${missing.map(s => s.name).join(", ")}`);
    const badUrl = dead.filter(s => s.url);
    assert.strictEqual(badUrl.length, 0,
        `dead entries publishing a site link in the API: ${badUrl.map(s => s.name).join(", ")}`);
    console.log(`OK: dead entries publish a dated shutdown and a reason (${dead.length} checked)`);
}