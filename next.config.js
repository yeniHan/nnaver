const withTM = require('next-transpile-modules')(['infinite-react-carousel']);

module.exports = withTM({
  reactStrictMode: true,
  // distDir: 'build',
});
