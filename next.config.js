/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['img.youtube.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig
