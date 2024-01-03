/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["businessday.ng"],
  },
};

module.exports = nextConfig;
