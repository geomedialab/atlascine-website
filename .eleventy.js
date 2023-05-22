module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("markdownCollection", function(collection) {
    return collection.getFilteredByGlob("pins/*.md");
  });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site',
    },
    templateFormats: ['html', 'md', 'njk','css'],//copy any files with these extensions to _site
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
