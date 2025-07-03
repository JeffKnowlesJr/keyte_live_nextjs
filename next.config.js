/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for static export and Amplify compatibility
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Image optimization - keep unoptimized for static export
  images: {
    unoptimized: true,
    // Add image formats for better compression
    formats: ['image/webp', 'image/avif']
  },
  
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Configure for modern JavaScript features
  experimental: {
    // Modern JS features
    esmExternals: true,
  },
  
  // Webpack configuration for performance
  webpack: (config, { isServer, dev }) => {
    // Target modern browsers
    if (!isServer) {
      config.target = ['web', 'es2020']
    }
    
    // Production optimizations
    if (!dev) {
      // Enable tree shaking
      config.optimization.usedExports = true
      
      // Optimize chunks
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Create separate chunk for large dependencies
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
        },
      }
    }
    
    return config
  },
  
  // Reduce bundle size by excluding legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Remove React DevTools in production
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // Enable gzip compression
  compress: true,
  
  // PoweredBy header removal for security
  poweredByHeader: false,
  
  // Performance optimizations
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
