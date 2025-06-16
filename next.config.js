/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export (Amplify compatible)
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Asset prefix for CDN (Amplify will handle this)
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Preserve existing URL structure
  async rewrites() {
    return [
      {
        source: '/who-we-are/index.html',
        destination: '/who-we-are'
      },
      {
        source: '/what-we-do/index.html',
        destination: '/what-we-do'
      },
      {
        source: '/what-we-did/index.html',
        destination: '/what-we-did'
      },
      {
        source: '/who-we-served/index.html',
        destination: '/who-we-served'
      },
      {
        source: '/how-we-think/index.html',
        destination: '/how-we-think'
      },
      {
        source: '/contact/index.html',
        destination: '/contact'
      }
    ]
  },
  
  // Headers for SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
