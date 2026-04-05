/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
