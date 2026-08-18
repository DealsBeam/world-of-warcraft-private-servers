module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/app.js");
    eleventyConfig.addPassthroughCopy("src/theme.js");
    eleventyConfig.addPassthroughCopy("src/radio.js");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    eleventyConfig.addPassthroughCopy("src/og.png");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/llms.txt");
    eleventyConfig.addPassthroughCopy("src/fonts");

    eleventyConfig.addFilter("take", (arr, n) => (arr || []).slice(0, n));

    eleventyConfig.addFilter("slugify", s => String(s)        .toLowerCase()
        .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""));

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

    const ERA_MAP = {
        "Vanilla": "Vanilla", "TBC": "TBC", "WotLK": "WotLK", "Cataclysm": "Cataclysm",
        "MoP": "MoP", "Legion": "Legion", "TWW": "TWW",
        "Vanilla+": "Vanilla", "Classless": "Vanilla",
        "Multi": "Multi", "MOBA": "Other", "": "Other"
    };
    const ERA_ORDER = ["Vanilla", "TBC", "WotLK", "Cataclysm", "MoP", "Legion", "TWW", "Multi", "Other"];

    eleventyConfig.addFilter("groupByEra", servers => {
        const groups = {};
        servers.forEach(s => {
            const era = ERA_MAP[s.tag] || "Other";
            (groups[era] = groups[era] || []).push(s);
        });
        return ERA_ORDER.filter(e => groups[e]).map(e => ({ era: e, servers: groups[e] }))
            .concat(Object.keys(groups).filter(e => ERA_ORDER.indexOf(e) === -1).map(e => ({ era: e, servers: groups[e] })));
    });

    eleventyConfig.addFilter("countByStatus", (servers, status) =>
        servers.filter(s => s.status === status).length);

    eleventyConfig.addFilter("uniqueTags", servers =>
        [...new Set(servers.map(s => s.tag).filter(Boolean))].sort());

    eleventyConfig.addFilter("uniqueCategories", history =>
        [...new Set(history.map(h => h.category))]);

    const toDate = d => d instanceof Date ? d : new Date(d + "T00:00:00Z");

    eleventyConfig.addFilter("formatDate", d => toDate(d).toLocaleDateString("en-US", {
        month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
    }));

    eleventyConfig.addFilter("rssDate", d => toDate(d).toUTCString());

    eleventyConfig.addCollection("news", collectionApi =>
        collectionApi.getFilteredByGlob("src/news/*.md")
            .filter(p => !p.data.draft)
            .sort((a, b) => a.date - b.date));

    return {
        dir: { input: "src", output: "_site" }
    };
};
