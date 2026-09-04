module.exports = function (eleventyConfig) {
    const { slugify, groupByEra, countByStatus, uniqueTags } = require("./src/_data/vocab.js");

const filterBlogByTag = (posts, tag) => posts.filter(p => (p.data.tags || []).includes(tag) || p.data.category === tag);

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

    eleventyConfig.addFilter("daysAgo", d => {
        const then = toDate(d).getTime();
        const now = Date.now();
        return Math.max(0, Math.floor((now - then) / 86400000));
    });

    eleventyConfig.addFilter("filterBlogByTag", filterBlogByTag);

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
