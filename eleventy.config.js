const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "src/_components/**/*.webc"
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes"
    },
    templateFormats: ["webc", "html"]
  };
};
