import type { MetadataRoute } from 'next'

const BASE_URL = 'https://unahealth.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about/company-and-team', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/compliance', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/educators', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/finance', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/healthcare-professionals', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/hospital-networks', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/human-resources', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/nursing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/how-una-helps/staffing-agencies', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/resources/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/resources/blog/developer-notes', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/resources/blog/press-releases', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/resources/expert-validation', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/faqs', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/integrations', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/my-una', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/una-air', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/una-prep', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/una-team', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/una-test', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/una-wallet', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/unadash', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/resources/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
