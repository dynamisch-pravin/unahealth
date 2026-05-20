/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    domains: ['img.youtube.com'],
    unoptimized: false,
  },
  async redirects() {
    return [
      // existing
      { source: '/about/contact',           destination: '/contact',           permanent: true },
      { source: '/about/contact/',          destination: '/contact/',          permanent: true },
      { source: '/about/company-and-team',  destination: '/company-and-team', permanent: true },
      { source: '/about/company-and-team/', destination: '/company-and-team/',permanent: true },
      { source: '/resources/privacy-policy',  destination: '/privacy-policy',  permanent: true },
      { source: '/resources/privacy-policy/', destination: '/privacy-policy/', permanent: true },
      { source: '/resources/faqs',          destination: '/faqs',             permanent: true },
      { source: '/resources/faqs/',         destination: '/faqs/',            permanent: true },

      // how-una-helps
      { source: '/hospital-networks',                destination: '/how-una-helps/hospital-networks',        permanent: true },
      { source: '/hospital-networks/',               destination: '/how-una-helps/hospital-networks/',       permanent: true },
      { source: '/staffing-agencies',                destination: '/how-una-helps/staffing-agencies',        permanent: true },
      { source: '/staffing-agencies/',               destination: '/how-una-helps/staffing-agencies/',       permanent: true },
      { source: '/healthcare-professionals',         destination: '/how-una-helps/healthcare-professionals', permanent: true },
      { source: '/healthcare-professionals/',        destination: '/how-una-helps/healthcare-professionals/',permanent: true },
      { source: '/nursing-patient-care-services',    destination: '/how-una-helps/nursing',                  permanent: true },
      { source: '/nursing-patient-care-services/',   destination: '/how-una-helps/nursing/',                 permanent: true },
      { source: '/educators',                        destination: '/how-una-helps/educators',                permanent: true },
      { source: '/educators/',                       destination: '/how-una-helps/educators/',               permanent: true },
      { source: '/compliance',                       destination: '/how-una-helps/compliance',               permanent: true },
      { source: '/compliance/',                      destination: '/how-una-helps/compliance/',              permanent: true },
      { source: '/finance',                          destination: '/how-una-helps/finance',                  permanent: true },
      { source: '/finance/',                         destination: '/how-una-helps/finance/',                 permanent: true },
      { source: '/human-resources',                  destination: '/how-una-helps/human-resources',          permanent: true },
      { source: '/human-resources/',                 destination: '/how-una-helps/human-resources/',         permanent: true },

      // resources
      { source: '/una-test',                         destination: '/resources/una-test',                     permanent: true },
      { source: '/una-test/',                        destination: '/resources/una-test/',                    permanent: true },
      { source: '/una-wallet',                       destination: '/resources/una-wallet',                   permanent: true },
      { source: '/una-wallet/',                      destination: '/resources/una-wallet/',                  permanent: true },
      { source: '/una-air',                          destination: '/resources/una-air',                      permanent: true },
      { source: '/una-air/',                         destination: '/resources/una-air/',                     permanent: true },
      { source: '/myuna-candidate-portal',           destination: '/resources/my-una',                       permanent: true },
      { source: '/myuna-candidate-portal/',          destination: '/resources/my-una/',                      permanent: true },
      { source: '/una-team-behavioral-assessments',  destination: '/resources/una-team',                     permanent: true },
      { source: '/una-team-behavioral-assessments/', destination: '/resources/una-team/',                    permanent: true },
      { source: '/unadash',                          destination: '/resources/unadash',                      permanent: true },
      { source: '/unadash/',                         destination: '/resources/unadash/',                     permanent: true },
      { source: '/expert-validation-protocol',       destination: '/resources/expert-validation',            permanent: true },
      { source: '/expert-validation-protocol/',      destination: '/resources/expert-validation/',           permanent: true },
      { source: '/integrations',                     destination: '/resources/integrations',                 permanent: true },
      { source: '/integrations/',                    destination: '/resources/integrations/',                permanent: true },

      // blog
      { source: '/blog',                             destination: '/resources/blog',                         permanent: true },
      { source: '/blog/',                            destination: '/resources/blog/',                        permanent: true },
      { source: '/blog/developer-notes',             destination: '/resources/blog/developer-notes',         permanent: true },
      { source: '/blog/developer-notes/',            destination: '/resources/blog/developer-notes/',        permanent: true },
      { source: '/blog/press-releases',              destination: '/resources/blog/press-releases',          permanent: true },
      { source: '/blog/press-releases/',             destination: '/resources/blog/press-releases/',         permanent: true },

      // legacy pages → home
      { source: '/una-fast-ceus',                    destination: '/',                                       permanent: true },
      { source: '/una-fast-ceus/',                   destination: '/',                                       permanent: true },

      // legacy blog posts
      { source: '/una-health-introduces-una-air-revolutionizing-candidate-remediation-in-healthcare',
        destination: '/resources/blog/press-releases/una-health-introduces-una-air/',                        permanent: true },
      { source: '/una-health-introduces-una-air-revolutionizing-candidate-remediation-in-healthcare/',
        destination: '/resources/blog/press-releases/una-health-introduces-una-air/',                        permanent: true },
      { source: '/una-development-updates-11-april-25',
        destination: '/resources/blog/developer-notes/una-development-updates-11-april-25/',                 permanent: true },
      { source: '/una-development-updates-11-april-25/',
        destination: '/resources/blog/developer-notes/una-development-updates-11-april-25/',                 permanent: true },
      { source: '/una-health-sets-the-standard-for-integrated-healthcare-hiring-through-deep-ats-staffing-platform-partnerships',
        destination: '/resources/blog/press-releases/una-health-sets-the-standard-for-integrated-healthcare-hiring-through-deep-ats-staffing-platform-partnerships/', permanent: true },
      { source: '/una-health-sets-the-standard-for-integrated-healthcare-hiring-through-deep-ats-staffing-platform-partnerships/',
        destination: '/resources/blog/press-releases/una-health-sets-the-standard-for-integrated-healthcare-hiring-through-deep-ats-staffing-platform-partnerships/', permanent: true },
    ]
  },
}

module.exports = nextConfig

