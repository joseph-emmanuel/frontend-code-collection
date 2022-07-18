/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/frontend-code-collection",
  assetPrefix:"/frontend-code-collection",
};

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};
