module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/app.js");
    eleventyConfig.addPassthroughCopy("src/theme.js");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    eleventyConfig.addPassthroughCopy("src/og.png");

    eleventyConfig.addFilter("slugify", s => String(s)
        .toLowerCase()
        .normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""));

    eleventyConfig.addFilter("relatedHistory", (events, server) => {
        const qs = [server.name, server.group].filter(Boolean).map(s => s.toLowerCase());
        return events.filter(h => {
            const hay = (h.title + " " + h.tag + " " + h.paragraphs.join(" ")).toLowerCase();
            return qs.some(q => hay.includes(q));
        });
    });

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
