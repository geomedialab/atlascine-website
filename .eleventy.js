module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/imgs/");//add folders to _site
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addCollection("markdownCollection", function(collection) {
    return collection.getFilteredByGlob("pins/*.md");
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: 'public',
    },
    templateFormats: ['html', 'md', 'njk','css'],//copy any files with these extensions to _site
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
