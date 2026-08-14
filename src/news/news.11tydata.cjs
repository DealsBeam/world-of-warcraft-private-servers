const fmt = d => new Date(d instanceof Date ? d : d + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
});

module.exports = {
    layout: "news.njk",
    eleventyComputed: {
        canonical: data => `https://wowprivateservers.vercel.app${data.page.url}`,
        hero: data => data.title,
        subtitle: data => fmt(data.date),
        description: data => data.title,
        permalink: data => data.draft ? false : data.page.filePathStem + "/"
    }
};
