/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  basePath: "/frontend-code-collection",
  assetPrefix: "/frontend-code-collection",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
