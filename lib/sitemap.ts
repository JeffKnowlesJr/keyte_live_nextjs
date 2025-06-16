export const generateSitemap = () => {
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
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`
  
  return sitemap
}
