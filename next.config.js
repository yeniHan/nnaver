const withTM = require('next-transpile-modules')([]);
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');


const nextConfig = withTM({
  reactStrictMode: true,
  // distDir: 'build',
  images: {
    disableStaticImages: true,
    domains: ['localhost', 's.pstatic.net', 'postfiles.pstatic.net',
      'post-phinf.pstatic.net', 'mblogthumb-phinf.pstatic.net'],
  },
});

module.exports = withPlugins([[withImages]], nextConfig);
