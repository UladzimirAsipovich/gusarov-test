/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/', query: { __nextDefaultLocale: 'ru' } },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/services': { page: '/services' },
    };
  },
};

module.exports = nextConfig;
