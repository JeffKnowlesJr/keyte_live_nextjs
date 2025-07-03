'use client'

import { useEffect } from 'react'

export default function CSSOptimizer() {
  useEffect(() => {
    // Defer non-critical CSS loading
    const loadDeferredCSS = () => {
      // Get all stylesheets that should be deferred
      const criticalStyles = ['/css/app.css']
      const allLinks = document.querySelectorAll('link[rel="stylesheet"]')
      
      allLinks.forEach((link) => {
        const href = (link as HTMLLinkElement).href
        const isCritical = criticalStyles.some(critical => href.includes(critical))
        
        if (!isCritical) {
          // Add a small delay to defer non-critical CSS
          const linkElement = link as HTMLLinkElement
          linkElement.media = 'print'
          
          // Switch to 'all' media after a delay
          setTimeout(() => {
            linkElement.media = 'all'
          }, 100)
        }
      })
    }

    // Optimize font loading
    const optimizeFonts = () => {
      // Add font-display: swap to existing fonts
      const style = document.createElement('style')
      style.textContent = `
        @font-face {
          font-display: swap;
        }
      `
      document.head.appendChild(style)
    }

    // Preload next page resources on hover
    const preloadOnHover = () => {
      let linkPreloadTimeout: NodeJS.Timeout

      const preloadLink = (href: string) => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.href = href
        document.head.appendChild(link)
      }

      // Add hover listeners to navigation links
      document.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement
        const link = target.closest('a[href]') as HTMLAnchorElement
        
        if (link && link.hostname === window.location.hostname) {
          linkPreloadTimeout = setTimeout(() => {
            preloadLink(link.href)
          }, 200) // Small delay to avoid excessive preloading
        }
      })

      // Clear timeout on mouseout
      document.addEventListener('mouseout', () => {
        if (linkPreloadTimeout) {
          clearTimeout(linkPreloadTimeout)
        }
      })
    }

    // Image lazy loading optimization
    const optimizeImages = () => {
      // Add intersection observer for images that don't have Next.js optimization
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              imageObserver.unobserve(img)
            }
          }
        })
      })

      // Observe images with data-src attribute
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img)
      })
    }

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window && 'PerformanceObserver' in window) {
        // Monitor Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          
          if (lastEntry) {
            console.log('LCP:', Math.round(lastEntry.startTime), 'ms')
            
            // Report to analytics if available
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(lastEntry.startTime),
                event_category: 'Web Vitals'
              })
            }
          }
        })

        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          // Browser doesn't support LCP
        }

        // Monitor Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          
          if (clsValue > 0) {
            console.log('CLS:', clsValue.toFixed(4))
            
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'web_vitals', {
                name: 'CLS',
                value: clsValue,
                event_category: 'Web Vitals'
              })
            }
          }
        })

        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        } catch (e) {
          // Browser doesn't support CLS
        }
      }
    }

    // Initialize optimizations
    loadDeferredCSS()
    optimizeFonts()
    preloadOnHover()
    optimizeImages()
    monitorPerformance()

  }, [])

  return null // This component doesn't render anything
} 