import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import CSSOptimizer from '@/components/CSSOptimizer'

export const metadata: Metadata = {
  title: {
    default: 'The Keyte Group - Industry Support, Teaching & Professional Insights',
    template: '%s | Keyte Group'
  },
  description: 'Beau Keyte shares professional insights, educational resources, and thought leadership on continuous improvement, industry support, and organizational development.',
  keywords: 'Beau Keyte, industry support, teaching, writing, continuous improvement education, lean methodology, organizational transformation, Keyte Group',
  authors: [{ name: 'Beau Keyte' }],
  creator: 'Beau Keyte',
  publisher: 'The Keyte Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.keytegroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.keytegroup.com',
    siteName: 'The Keyte Group',
    title: 'The Keyte Group - Industry Support & Professional Insights',
    description: 'Professional insights and educational resources on continuous improvement, industry support, and organizational development.',
    images: [
      {
        url: '/images/Keyte_Group_logo_large.png',
        width: 800,
        height: 600,
        alt: 'The Keyte Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Keyte Group',
    description: 'Professional insights and educational resources on continuous improvement',
    images: ['/images/Keyte_Group_logo_large.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this when you set up Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="//ajax.googleapis.com" />
        <link rel="preconnect" href="https://ajax.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://keytegroup.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/home-page-rotating-graphic-1.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="/images/home-page-rotating-graphic-2.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="/css/app.css" as="style" />
        <link rel="preload" href="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" as="script" crossOrigin="anonymous" />
        
        {/* Critical CSS - inline for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            * { box-sizing: border-box; }
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; line-height: 1.4; }
            .foundation-row { width: 100%; max-width: 1200px; margin: 0 auto; }
            .twelve.columns { width: 100%; float: left; }
            .slider-container { position: relative; width: 100%; margin: 0 auto; }
            .slider-wrapper { position: relative; width: 100%; height: 400px; overflow: hidden; background-color: #f5f5f5; border-radius: 4px; }
            .slider-image-container { position: relative; width: 100%; height: 100%; contain: layout style paint; }
            @media (max-width: 1024px) { .slider-wrapper { height: 350px; } }
            @media (max-width: 768px) { .slider-wrapper { height: 300px; } }
            @media (max-width: 640px) { .slider-wrapper { height: 250px; } }
            @media (max-width: 480px) { .slider-wrapper { height: 200px; } }
            @media (max-width: 320px) { .slider-wrapper { height: 150px; } }
          `
        }} />
        
        <link rel="icon" href="/keyte_small_dgq_icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* App-specific styles - load immediately after critical */}
        <link rel="stylesheet" href="/css/app.css" media="screen" />
        
        {/* Foundation CSS - loaded after critical CSS */}
        <link rel="stylesheet" href="/css/foundation.css" media="screen" />
        
        {/* Non-critical CSS - loaded last */}
        <link rel="stylesheet" href="/css/nivo-slider.css" media="screen" />
        <link rel="stylesheet" href="/css/default.css" media="screen" />
      </head>
      <body id="page" className="off-canvas slide-nav">
        <CSSOptimizer />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F3304DQTX3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F3304DQTX3');
          `}
        </Script>
        {children}
        
        {/* JavaScript loaded after HTML parsing */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        
        {/* Foundation scripts - deferred */}
        <Script src="/js/jquery.foundation.navigation.js" strategy="lazyOnload" />
        <Script src="/js/jquery.foundation.accordion.js" strategy="lazyOnload" />
        <Script src="/js/jquery.foundation.buttons.js" strategy="lazyOnload" />
        <Script src="/js/jquery.offcanvas.js" strategy="lazyOnload" />
        <Script src="/js/modernizr.foundation.js" strategy="lazyOnload" />
        <Script src="/js/jquery.nivo.slider.pack.js" strategy="lazyOnload" />
        
        {/* Foundation initialization - after scripts load */}
        <Script id="foundation-init" strategy="lazyOnload">
          {`
            document.addEventListener('DOMContentLoaded', function () {
              // Wait for jQuery and Foundation to load
              function initFoundation() {
                if (typeof $ !== 'undefined' && $.fn.foundationNavigation) {
                  $(document).foundationNavigation();
                }
                if (typeof $ !== 'undefined' && $.fn.foundationAccordion) {
                  $(document).foundationAccordion();
                }
              }
              
              // Try to initialize immediately, or wait for scripts
              if (typeof $ !== 'undefined') {
                initFoundation();
              } else {
                // Fallback: check periodically for jQuery
                const checkInterval = setInterval(() => {
                  if (typeof $ !== 'undefined') {
                    initFoundation();
                    clearInterval(checkInterval);
                  }
                }, 100);
                
                // Stop checking after 5 seconds
                setTimeout(() => clearInterval(checkInterval), 5000);
              }
            });
          `}
        </Script>
        
        {/* Performance monitoring */}
        <Script id="performance-monitor" strategy="lazyOnload">
          {`
            if ('performance' in window) {
              window.addEventListener('load', function() {
                // Report Core Web Vitals
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.name === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.name === 'first-input-delay') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                  }
                });
                
                try {
                  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
                } catch (e) {
                  // Ignore if not supported
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
