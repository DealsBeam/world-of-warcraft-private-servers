module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/app.js");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");

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

    return {
        dir: { input: "src", output: "_site" }
    };
};
