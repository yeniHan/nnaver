const withTM = require('next-transpile-modules')([]);
const withImages = require('next-images');


module.exports = withTM({
  reactStrictMode: true,
  // distDir: 'build',
});
