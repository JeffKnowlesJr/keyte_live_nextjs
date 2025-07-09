import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.keytegroup.com'
  
  const pages = [
    '',
    '/who-we-are',
    '/who-we-are/beau-keyte',
    '/what-we-did',
    '/what-we-did/a3-thinking',
    '/what-we-did/collaborative-learning',
    '/what-we-did/leadership-coaching',
    '/what-we-did/value-stream-mapping',
    '/who-we-served',
    '/who-we-served/clients-industry',
    '/how-we-think',
    '/how-we-think/perfecting-patient-journeys-book',
    '/how-we-think/complete-lean-enterprise-book',
    '/how-we-think/articles-and-thoughts',
    '/how-we-think/articles-and-thoughts/strategic-stockpile',
    '/how-we-think/short-stops',
    '/how-we-think/remarketing-continuous-improvement',
    '/contact'
  ]
  
  return pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
} 