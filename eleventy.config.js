module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/app.js");
    eleventyConfig.addPassthroughCopy("src/favicon.svg");
    return {
        dir: { input: "src", output: "_site" }
    };
};
