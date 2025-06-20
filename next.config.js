/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export and Amplify compatibility
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  


}

module.exports = nextConfig
