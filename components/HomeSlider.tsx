'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

// Preload critical images
const preloadImages = [
  '/images/home-page-rotating-graphic-1.jpg',
  '/images/home-page-rotating-graphic-2.jpg'
]

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)

  const images = [
    {
      src: '/images/home-page-rotating-graphic-1.jpg',
      alt: 'Optimize Performance - Visual representation of performance optimization concepts',
      priority: true
    },
    {
      src: '/images/home-page-rotating-graphic-2.jpg',
      alt: 'Visualize New Thinking - Illustration of innovative thinking approaches',
      priority: true
    },
    {
      src: '/images/home-page-rotating-graphic-3.jpg',
      alt: 'Systematic Learning - Diagram showing systematic learning methodologies',
      priority: false
    },
    {
      src: '/images/home-page-rotating-graphic-4.jpg',
      alt: 'Comfort Zone - Visual metaphor for stepping outside comfort zones',
      priority: false
    },
    {
      src: '/images/home-page-rotating-graphic-5.jpg',
      alt: 'We Help You Think - Illustration of collaborative thinking processes',
      priority: false
    },
    {
      src: '/images/home-page-rotating-graphic-6.jpg',
      alt: 'Leaders - Visual representation of leadership development',
      priority: false
    }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isClient, images.length])

  // Preload critical images
  useEffect(() => {
    if (typeof window !== 'undefined') {
      preloadImages.forEach((src) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        link.fetchPriority = 'high'
        document.head.appendChild(link)
      })
    }
  }, [])

  if (!isClient) {
    // Server-side: render only the first image for LCP optimization
    return (
      <section className="foundation-row slider-container" aria-label="Homepage slider">
        <div className="twelve columns slider-wrapper">
          <div className="slider-image-container">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
              sizes="(max-width: 320px) 100vw, (max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              quality={85}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Resource hints for better performance */}
      <link rel="dns-prefetch" href="//keytegroup.com" />
      <link rel="preconnect" href="https://keytegroup.com" />
      
      <section className="foundation-row slider-container" aria-label="Homepage slider">
        <div className="twelve columns slider-wrapper">
          <div className="slider-image-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slider-image ${index === currentSlide ? 'active' : ''}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: index === currentSlide ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                  transform: 'translateZ(0)', // Force GPU acceleration
                  willChange: index === currentSlide ? 'auto' : 'opacity'
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={image.priority}
                  sizes="(max-width: 320px) 100vw, (max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  quality={85}
                  loading={image.priority ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
          
          {/* Slide indicators for accessibility */}
          <div className="slider-indicators" aria-label="Slide indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`slider-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  margin: '0 4px',
                  backgroundColor: index === currentSlide ? '#2ba6cb' : 'rgba(255, 255, 255, 0.5)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }
        
        .slider-wrapper {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
          background-color: #f5f5f5;
          border-radius: 4px;
        }
        
        .slider-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          contain: layout style paint;
        }
        
        .slider-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 8px 16px;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(4px);
        }
        
        .slider-indicator {
          transition: all 0.3s ease;
        }
        
        .slider-indicator:hover {
          background-color: #2ba6cb !important;
          transform: scale(1.2);
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .slider-wrapper {
            height: 350px;
          }
        }
        
        @media (max-width: 768px) {
          .slider-wrapper {
            height: 300px;
          }
        }
        
        @media (max-width: 640px) {
          .slider-wrapper {
            height: 250px;
          }
        }
        
        @media (max-width: 480px) {
          .slider-wrapper {
            height: 200px;
          }
        }
        
        @media (max-width: 320px) {
          .slider-wrapper {
            height: 150px;
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .slider-image {
            transition: none !important;
          }
          
          .slider-indicator {
            transition: none !important;
          }
        }
      `}</style>
    </>
  )
} 