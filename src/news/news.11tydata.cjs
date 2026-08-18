const fs = require("fs");
const fmt = d => new Date(d instanceof Date ? d : d + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC"
});

const excerpt = raw => {
    const body = String(raw || "").split(/^---\s*$/m).slice(2).join("---");
    const text = body
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/[#>*_`~]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    return text.length > 155 ? text.slice(0, 155).replace(/\s+\S*$/, "") + "…" : text;
};

module.exports = {
    layout: "news.njk",
    eleventyComputed: {
        canonical: data => `https://wowprivateservers.vercel.app${data.page.url}`,
        hero: data => data.title,
        subtitle: data => fmt(data.date),
        description: data => data.summary || excerpt(fs.readFileSync(data.page.inputPath, "utf8")),
        permalink: data => data.draft ? false : data.page.filePathStem + "/"
    }
};
