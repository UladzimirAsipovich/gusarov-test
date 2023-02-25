/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // images: { unoptimized: true },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      __nextDefaultLocale: { page: '/index' },
      // '/': { page: '/index' },
      '/about': { page: '/about' },
      '/blog': { page: '/blog' },
      '/services': { page: '/services' },
    };
  },
};

module.exports = nextConfig;
