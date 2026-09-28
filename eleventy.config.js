module.exports = function (eleventyConfig) {
    const { slugify, groupByEra, countByStatus, uniqueTags, gameOf, gameLabel, GAMES, cardFor } = require("./src/_data/vocab.js");

const filterBlogByTag = (posts, tag) => posts.filter(p => (p.data.tags || []).includes(tag) || p.data.category === tag);
// Nunjucks selectattr with a boolean test value is unreliable across versions
// here, so the "Start Here" block uses an explicit JS filter instead.
const startingPoints = posts => posts.filter(p => p.data && p.data.startingPoint === true);

// The homepage filter select used to hold two taxonomies in one list: expansion
// tags and type tags, while the page groups by a collapsed era, so Vanilla,
// Vanilla+ and Classless all appeared as options under a single "Vanilla"
// heading. Split them into labelled groups instead of adding a second control,
// which the mobile tap-target critique also warned against. Type tags are the
// ones that describe a design rather than a client build.
const EXPANSION_TAGS = new Set(["Vanilla", "WotLK", "TBC", "Cataclysm", "MoP", "Legion", "WoD", "TWW", "Other"]);
const tagValues = servers => [...new Set(servers.map(s => s.tag).filter(Boolean))].sort();
const expansionTags = servers => tagValues(servers).filter(t => EXPANSION_TAGS.has(t));
const typeTags = servers => tagValues(servers).filter(t => !EXPANSION_TAGS.has(t));

// The most recent `updated` date across the tracker. The census used to hardcode
// "September 23, 2026", which went stale the moment a single entry was re-checked
// and then cited as the source for a population-band definition, so derive it.
const latestCheck = servers => {
    const dates = servers
        .map(s => s.updated)
        .filter(Boolean)
        .map(d => new Date(d))
        .filter(d => !Number.isNaN(d.getTime()));
    if (!dates.length) return "";
    const newest = new Date(Math.max(...dates.map(d => d.getTime())));
    return newest.toISOString().slice(0, 10);
};

    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/82ff48e2b0f1ba3cf1d95140192a5b90.txt");
    eleventyConfig.addPassthroughCopy("src/app.js");
    eleventyConfig.addPassthroughCopy("src/theme.js");
    eleventyConfig.addPassthroughCopy("src/radio.js");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");
    eleventyConfig.addPassthroughCopy("src/og.png");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/images");

    eleventyConfig.addFilter("take", (arr, n) => (arr || []).slice(0, n));

    eleventyConfig.addFilter("slugify", slugify);

    eleventyConfig.addFilter("gameOf", d => gameOf(d || {}));
    eleventyConfig.addFilter("gameLabel", g => gameLabel(g));
    eleventyConfig.addFilter("countByGame", (posts, game) => (posts || []).filter(p => gameOf((p || {}).data || {}) === game).length);
    eleventyConfig.addFilter("gamesPresent", posts => {
        const seen = new Set((posts || []).map(p => gameOf((p || {}).data || {})));
        return GAMES.filter(g => seen.has(g));
    });
    eleventyConfig.addFilter("byGame", (posts, game) => (posts || []).filter(p => {
        const d = (p || {}).data || {};
        return !d.archived && gameOf(d) === game;
    }));

    eleventyConfig.addFilter("lastDays", (posts, n) => {
        const cut = Date.now() - (Number(n) || 2) * 86400000;
        return (posts || []).filter(p => p.date && new Date(p.date).getTime() >= cut);
    });
    eleventyConfig.addFilter("ogCard", title => cardFor(title));

    eleventyConfig.addFilter("relatedHistory", (events, server, slug) => {
        const qs = [server.name, server.group].filter(Boolean).map(s => s.toLowerCase());
        return events.filter(h => {
            if (h.relatedServers && h.relatedServers.length) {
                return h.relatedServers.includes(slug);
            }
            const hay = (h.title + " " + h.tag + " " + h.paragraphs.join(" ")).toLowerCase();
            return qs.some(q => hay.includes(q));
        });
    });

    eleventyConfig.addFilter("groupByEra", groupByEra);

    eleventyConfig.addFilter("countByStatus", countByStatus);
    eleventyConfig.addFilter("countByPop", (servers, tier) => servers.filter(s => (s.popTier || "unknown") === tier).length);

    eleventyConfig.addFilter("merge", (a, b) => ({ ...(a || {}), ...(b || {}) }));

    eleventyConfig.addFilter("uniqueTags", servers =>
        [...new Set(servers.map(s => s.tag).filter(Boolean))].sort());

    eleventyConfig.addFilter("uniqueCategories", history =>
        [...new Set(history.map(h => h.category))]);

    const toDate = d => d instanceof Date ? d : new Date(d + "T00:00:00Z");

    eleventyConfig.addFilter("formatDate", d => toDate(d).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
    }));

    eleventyConfig.addFilter("rssDate", d => toDate(d).toUTCString());

    eleventyConfig.addFilter("isoDate", d => toDate(d).toISOString().slice(0, 10));

    // "September 27, 2026" for a YYYY-MM-DD string, used by the census.
    eleventyConfig.addFilter("prettyDate", d => toDate(d).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
    }));

    eleventyConfig.addFilter("isoDateTime", d => toDate(d).toISOString());

    eleventyConfig.addFilter("daysAgo", d => {
        const then = toDate(d).getTime();
        const now = Date.now();
        return Math.max(0, Math.floor((now - then) / 86400000));
    });

    eleventyConfig.addFilter("filterBlogByTag", filterBlogByTag);
    eleventyConfig.addFilter("startingPoints", startingPoints);
    eleventyConfig.addFilter("expansionTags", expansionTags);
    eleventyConfig.addFilter("typeTags", typeTags);
    eleventyConfig.addFilter("latestCheck", latestCheck);

    // Wrap every markdown table in a scroll container. Prose tables in posts
    // had no styling and crushed their columns into unreadable stacks on
    // phones, and the fix has to be a separate box: overflow-x on the <table>
    // itself either squeezes the columns or widens the whole page. This
    // overrides only the table_open and table_close render rules and leaves
    // every other markdown-it default untouched.
    const md = require("markdown-it")({ html: true });
    const fallback = self => (tokens, idx, opts, env) => self.renderToken(tokens, idx, opts);
    const openTable = md.renderer.rules.table_open || fallback(md.renderer);
    const closeTable = md.renderer.rules.table_close || fallback(md.renderer);
    md.renderer.rules.table_open = (tokens, idx, opts, env, self) =>
        openTable(tokens, idx, opts, env, self).replace(/^<table/, '<div class="table-scroll"><table');
    // renderToken appends a trailing newline for block tokens, so the closing
    // anchor has to tolerate trailing whitespace. Getting this wrong emits an
    // unclosed <div> on every post with a table, which browsers mis-render
    // silently, so the build asserts wrapper balance.
    md.renderer.rules.table_close = (tokens, idx, opts, env, self) =>
        closeTable(tokens, idx, opts, env, self).replace(/<\/table>\s*$/, "</table></div>");
    eleventyConfig.setLibrary("md", md);

    eleventyConfig.addCollection("news", collectionApi =>
        collectionApi.getFilteredByGlob("src/news/*.md")
            .filter(p => !p.data.draft)
            .sort((a, b) => a.date - b.date));

    eleventyConfig.addCollection("blog", collectionApi =>
        collectionApi.getFilteredByGlob("src/blog/*.md")
            .filter(p => !p.data.draft)
            .sort((a, b) => a.date - b.date));

    return {
        dir: { input: "src", output: "_site" }
    };
};
