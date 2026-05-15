/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['img.youtube.com'],
    unoptimized: false,
  },
  async redirects() {
    return [
      { source: '/about/contact',          destination: '/contact',          permanent: true },
      { source: '/about/contact/',         destination: '/contact/',         permanent: true },
      { source: '/about/company-and-team', destination: '/company-and-team', permanent: true },
      { source: '/about/company-and-team/',destination: '/company-and-team/',permanent: true },
      { source: '/resources/privacy-policy',destination: '/privacy-policy', permanent: true },
      { source: '/resources/privacy-policy/',destination: '/privacy-policy/',permanent: true },
      { source: '/resources/faqs',         destination: '/faqs',            permanent: true },
      { source: '/resources/faqs/',        destination: '/faqs/',           permanent: true },
    ]
  },
}

module.exports = nextConfig
