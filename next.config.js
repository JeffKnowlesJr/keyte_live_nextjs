/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export and Amplify compatibility
  // output: 'export',
  // distDir: 'out',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
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
          /*{
            key: 'X-Frame-Options',
            value: 'DENY'
          },*/
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
