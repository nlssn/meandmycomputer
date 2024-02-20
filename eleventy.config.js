const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("public/");

  return {
    // Control which files Eleventy will process
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md and *.html files with Nunjucks: (default: `liquid`)
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src", // default: "."
      data: "../_data", // default: "_data"
      includes: "../_includes", // default: "_includes"
      output: "_site",
    },

    pathPrefix: "/",
  };
};
