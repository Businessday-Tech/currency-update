/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["businessday.ng", "cdn.businessday.ng"],
  },
};

module.exports = nextConfig;
