import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keytegroup.com'
  
  const pages = [
    '',
    '/who-we-are',
    '/who-we-are/beau-keyte',
    '/who-we-are/drew-locher',
    '/who-we-are/our-associates',
    '/what-we-do',
    '/what-we-do/lean-enterprise-transformation',
    '/what-we-do/leadership-coaching',
    '/what-we-do/learning-experiences',
    '/what-we-did',
    '/what-we-did/case-studies',
    '/what-we-did/testimonials',
    '/who-we-served',
    '/who-we-served/clients-by-industry',
    '/how-we-think',
    '/how-we-think/perfecting-patient-journeys-book',
    '/how-we-think/complete-lean-enterprise-book',
    '/how-we-think/articles-and-thoughts',
    '/how-we-think/short-stops',
    '/how-we-think/remarketing-continuous-improvement',
    '/contact'
  ]
  
  return pages.map(page => ({
    url: `${baseUrl}${page}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
} 