'use strict';

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const passthroughFiles = ['src/robots.txt',
                          'src/assets/styles.css',
                          'src/assets/styles.css.map',
                         ];


module.exports = config => {

  // Plugins
  config.addPlugin(eleventyNavigationPlugin);

  // Turn offf autoescaping
  config.setNunjucksEnvironmentOptions({
    autoescape: false
  });

  passthroughFiles.forEach(element => config.addPassthroughCopy(element));

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};