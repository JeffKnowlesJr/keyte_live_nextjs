#!/bin/bash

# =============================================================================
# Fix Next.js Build Issues Script
# =============================================================================
# Fixes CSS paths and other build issues after conversion
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() { echo -e "${GREEN}✅ $1${NC}"; }
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }

echo -e "${BLUE}🔧 Next.js Build Fix Script${NC}"
echo "=================================="

# Check if we're in the Next.js directory
if [ ! -f "package.json" ] || [ ! -d "app" ]; then
    print_error "Not in Next.js project directory. Please run from keyte_live_nextjs/"
    exit 1
fi

print_info "Fixing CSS image paths..."

# Fix CSS paths in globals.css
sed -i "s|url('../images/contact-icons.png'.*)|url('/images/contact-icons.png')|g" app/globals.css
sed -i "s|url('../images/ajax-loader.gif'.*)|url('/images/ajax-loader.gif')|g" app/globals.css

print_status "CSS paths fixed"

# Remove problematic Next.js config options for static export
print_info "Fixing Next.js configuration for static export..."

cat > next.config.js << 'EOF'
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
  
  // Remove rewrites and headers for static export
  // These will be handled by Amplify's _redirects and _headers files
}

module.exports = nextConfig
EOF

print_status "Next.js configuration updated"

# Update the slider component to use proper Next.js Image component
print_info "Updating slider component for Next.js..."

cat > components/home/HomeSlider.tsx << 'EOF'
'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function HomeSlider() {
  useEffect(() => {
    // Initialize slider functionality (preserving existing behavior)
    const initializeSlider = () => {
      let currentSlide = 0
      const slides = document.querySelectorAll('#slider img')
      const totalSlides = slides.length
      
      if (totalSlides === 0) return
      
      const showSlide = (index: number) => {
        slides.forEach((slide, i) => {
          const slideElement = slide as HTMLElement
          slideElement.style.display = i === index ? 'block' : 'none'
        })
      }
      
      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % totalSlides
        showSlide(currentSlide)
      }
      
      // Show first slide
      showSlide(0)
      
      // Auto-advance slides every 4 seconds
      const slideInterval = setInterval(nextSlide, 4000)
      
      return () => clearInterval(slideInterval)
    }
    
    const cleanup = initializeSlider()
    return cleanup
  }, [])

  return (
    <section className="foundation-row" aria-label="Homepage slider">
      <div className="loading-icon" aria-hidden="true"></div>
      <div
        className="twelve columns"
        id="slider"
        role="img"
        aria-label="Keyte Group featured images"
      >
        <img
          src="/images/home-page-rotating-graphic-1.jpg"
          alt="Optimize Performance - Visual representation of performance optimization concepts"
        />
        <img
          src="/images/home-page-rotating-graphic-2.jpg"
          alt="Visualize New Thinking - Illustration of innovative thinking approaches"
        />
        <img
          src="/images/home-page-rotating-graphic-3.jpg"
          alt="Systematic Learning - Diagram showing systematic learning methodologies"
        />
        <img
          src="/images/home-page-rotating-graphic-4.jpg"
          alt="Comfort Zone - Visual metaphor for stepping outside comfort zones"
        />
        <img
          src="/images/home-page-rotating-graphic-5.jpg"
          alt="We Help You Think - Illustration of collaborative thinking processes"
        />
        <img
          src="/images/home-page-rotating-graphic-6.jpg"
          alt="Leaders - Visual representation of leadership development"
        />
      </div>
    </section>
  )
}
EOF

print_status "Slider component updated"

# Update the featured content component to use correct paths
print_info "Updating featured content component..."

cat > components/home/FeaturedContent.tsx << 'EOF'
export default function FeaturedContent() {
  return (
    <section className="foundation-row" aria-label="Featured content">
      <article className="four columns">
        <h2 className="h4-home">NEW!</h2>
        <h3>10-Minute Short Stops</h3>
        <p>
          A series of short online presentations designed to help
          organizations explore strategies for improvement. <br />
          <a
            title="10-Minute Short Stops"
            href="/how-we-think/short-stops/"
            aria-label="Learn more about 10-Minute Short Stops"
          >
            Learn more...
          </a>
        </p>
      </article>
      <article className="four columns">
        <h2 className="h4-home">BRAND NEW</h2>
        <h3>Remarketing Continuous Improvement</h3>
        <p>
          Beau is leading efforts to remarket continuous improvement
          methodologies to better align with contemporary
          organizational needs. This initiative stems from the
          Future of People at Work conference.
          <a
            title="Remarketing Continuous Improvement"
            href="/how-we-think/remarketing-continuous-improvement/"
            aria-label="Learn more about Remarketing Continuous Improvement"
          >
            Learn more...
          </a>
        </p>
      </article>
      <article className="four columns">
        <h2 className="h4-home">PRIZE WINNING</h2>
        <h3>The Complete Lean Enterprise, 2nd edition</h3>
        <p>
          <a
            title="Complete Lean Enterprise Book"
            href="/how-we-think/complete-lean-enterprise-book/"
            aria-label="Learn more about The Complete Lean Enterprise book"
          >
            <img
              alt="The Complete Lean Enterprise book cover - Second edition by Beau Keyte and Drew Locher"
              src="/files/cache/75cd620b8e0c838f0f896e97a3a7c59d_f14.jpg"
              style={{ float: 'left' }}
              height="98"
              width="78"
            />
          </a>
          About 90 percent of waste eliminating opportunities exist
          outside of direct manufacturing processes – in
          administrative and office processes. "Office waste" is
          difficult to eliminate because it is so difficult to see.
          An illuminating guide by two experts.
          <a
            title="Complete Lean Enterprise Book"
            href="/how-we-think/complete-lean-enterprise-book/"
            aria-label="Learn more about The Complete Lean Enterprise book"
          >
            Learn more...
          </a>
        </p>
      </article>
    </section>
  )
}
EOF

print_status "Featured content component updated"

# Test the build
print_info "Testing Next.js build..."

if npm run build; then
    print_status "Build successful! 🎉"
    
    print_info "Build output created in 'out/' directory"
    print_info "Ready for Amplify deployment!"
    
    echo ""
    echo "Next steps:"
    echo "1. git add ."
    echo "2. git commit -m 'Next.js conversion complete'"
    echo "3. git push to your repository"
    echo "4. Connect repository to AWS Amplify"
    echo "5. Deploy!"
    
else
    print_error "Build failed. Check the errors above."
    exit 1
fi

print_status "Next.js conversion completed successfully!" 