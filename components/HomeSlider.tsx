'use client'

import { useEffect } from 'react'

export default function HomeSlider() {
  useEffect(() => {
    const initializeCustomSlider = () => {
      const slider = document.getElementById('slider')
      const images = slider?.querySelectorAll('img') as NodeListOf<HTMLImageElement>
      if (!images || images.length === 0) {
        console.log('No slider images found')
        return
      }

      console.log(`Found ${images.length} slider images`)

      let currentSlide = 0
      const totalSlides = images.length
      let slideInterval: NodeJS.Timeout

      // Setup initial state - show first image
      images.forEach((img, index) => {
        img.style.position = 'absolute'
        img.style.top = '0'
        img.style.left = '0'
        img.style.width = '100%'
        img.style.height = '100%'
        img.style.objectFit = 'cover'
        img.style.opacity = index === 0 ? '1' : '0'
        img.style.display = 'block' // Show all images but with opacity
      })

      const nextSlide = () => {
        if (totalSlides <= 1) return

        const nextIndex = (currentSlide + 1) % totalSlides
        const currentImg = images[currentSlide]
        const nextImg = images[nextIndex]

        // Smooth transition between images
        currentImg.style.transition = 'opacity 0.5s ease-in-out'
        nextImg.style.transition = 'opacity 0.5s ease-in-out'
        
        currentImg.style.opacity = '0'
        nextImg.style.opacity = '1'

        currentSlide = nextIndex
      }

      // Start auto-rotation
      const startSlider = () => {
        if (totalSlides > 1) {
          slideInterval = setInterval(nextSlide, 6000)
        }
      }

      // Stop auto-rotation
      const stopSlider = () => {
        if (slideInterval) {
          clearInterval(slideInterval)
        }
      }

      // Pause on hover (desktop)
      slider?.addEventListener('mouseenter', stopSlider)
      slider?.addEventListener('mouseleave', startSlider)

      // Handle visibility change (pause when tab not active)
      const handleVisibilityChange = () => {
        if (document.hidden) {
          stopSlider()
        } else {
          startSlider()
        }
      }
      document.addEventListener('visibilitychange', handleVisibilityChange)

      // Start the slider
      startSlider()

      // Cleanup function
      return () => {
        stopSlider()
        slider?.removeEventListener('mouseenter', stopSlider)
        slider?.removeEventListener('mouseleave', startSlider)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
      }
    }

    // Initialize slider
    const initializeSlider = () => {
      const slider = document.getElementById('slider') as HTMLElement
      
      if (slider) {
        console.log('Initializing slider...')
        slider.style.display = 'block'
        slider.style.opacity = '1'
        slider.style.visibility = 'visible'
        
        // Initialize slider functionality
        const cleanup = initializeCustomSlider()
        return cleanup
      } else {
        console.log('Slider element not found')
      }
    }

    // Wait for DOM to be ready and images to load
    let cleanup: (() => void) | undefined
    
    if (document.readyState === 'loading') {
      const handleDOMReady = () => {
        cleanup = initializeSlider()
        document.removeEventListener('DOMContentLoaded', handleDOMReady)
      }
      document.addEventListener('DOMContentLoaded', handleDOMReady)
    } else {
      // DOM is already ready
      const timer = setTimeout(() => {
        cleanup = initializeSlider()
      }, 100)
      
      return () => {
        clearTimeout(timer)
        if (cleanup) cleanup()
      }
    }

    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <section className="foundation-row" aria-label="Homepage slider">
      <div className="loading-icon" aria-hidden="true" style={{ display: 'none' }}></div>
      <div
        className="twelve columns"
        id="slider"
        role="img"
        aria-label="Keyte Group featured images"
        style={{ 
          display: 'block',
          position: 'relative',
          width: '100%',
          height: '350px',
          minHeight: '350px',
          backgroundColor: '#f5f5f5'
        }}
      >
        <img
          src="/images/home-page-rotating-graphic-1.jpg"
          alt="Optimize Performance - Visual representation of performance optimization concepts"
          onLoad={() => console.log('Image 1 loaded')}
          onError={() => console.log('Image 1 failed to load')}
        />
        <img
          src="/images/home-page-rotating-graphic-2.jpg"
          alt="Visualize New Thinking - Illustration of innovative thinking approaches"
          onLoad={() => console.log('Image 2 loaded')}
          onError={() => console.log('Image 2 failed to load')}
        />
        <img
          src="/images/home-page-rotating-graphic-3.jpg"
          alt="Systematic Learning - Diagram showing systematic learning methodologies"
          onLoad={() => console.log('Image 3 loaded')}
          onError={() => console.log('Image 3 failed to load')}
        />
        <img
          src="/images/home-page-rotating-graphic-4.jpg"
          alt="Comfort Zone - Visual metaphor for stepping outside comfort zones"
          onLoad={() => console.log('Image 4 loaded')}
          onError={() => console.log('Image 4 failed to load')}
        />
        <img
          src="/images/home-page-rotating-graphic-5.jpg"
          alt="We Help You Think - Illustration of collaborative thinking processes"
          onLoad={() => console.log('Image 5 loaded')}
          onError={() => console.log('Image 5 failed to load')}
        />
        <img
          src="/images/home-page-rotating-graphic-6.jpg"
          alt="Leaders - Visual representation of leadership development"
          onLoad={() => console.log('Image 6 loaded')}
          onError={() => console.log('Image 6 failed to load')}
        />
      </div>
      
      <style jsx>{`
        #slider {
          width: 100% !important;
          box-sizing: border-box;
        }
        
        #slider img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
        }
        
        @media (max-width: 768px) {
          #slider {
            height: 250px !important;
            min-height: 250px !important;
          }
        }
        
        @media (max-width: 480px) {
          #slider {
            height: 200px !important;
            min-height: 200px !important;
          }
        }
      `}</style>
    </section>
  )
} 