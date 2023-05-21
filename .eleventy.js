module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/main.css");
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
