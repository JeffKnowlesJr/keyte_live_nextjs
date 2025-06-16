'use client'

import { useEffect } from 'react'

export default function HomeSlider() {
  useEffect(() => {
    const initializeCustomSlider = () => {
      const slider = document.getElementById('slider')
      const images = slider?.querySelectorAll('img') as NodeListOf<HTMLImageElement>
      if (!images || images.length === 0) return

      let currentSlide = 0
      const totalSlides = images.length
      let slideInterval: NodeJS.Timeout

      // Setup initial state
      images.forEach((img, index) => {
        img.style.display = index === 0 ? 'block' : 'none'
      })

      const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % totalSlides
        const currentImg = images[currentSlide]
        const nextImg = images[nextIndex]

        // Fade out current image
        currentImg.style.opacity = '1'
        let opacity = 1
        const fadeOut = setInterval(() => {
          opacity -= 0.1
          currentImg.style.opacity = opacity.toString()
          if (opacity <= 0) {
            clearInterval(fadeOut)
            currentImg.style.display = 'none'
            
            // Fade in next image
            nextImg.style.display = 'block'
            nextImg.style.opacity = '0'
            let nextOpacity = 0
            const fadeIn = setInterval(() => {
              nextOpacity += 0.1
              nextImg.style.opacity = nextOpacity.toString()
              if (nextOpacity >= 1) {
                clearInterval(fadeIn)
              }
            }, 40)
          }
        }, 40)

        currentSlide = nextIndex
      }

      // Start auto-rotation
      const startSlider = () => {
        slideInterval = setInterval(nextSlide, 6000)
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

    // Initialize immediately when component mounts
    const initializeSlider = () => {
      const slider = document.getElementById('slider') as HTMLElement
      
      if (slider) {
        slider.style.display = 'block'
        slider.style.opacity = '1'
      }
      
      // Initialize slider functionality
      initializeCustomSlider()
    }

    // Use a small delay to ensure DOM is ready
    const timer = setTimeout(initializeSlider, 100)

    return () => {
      clearTimeout(timer)
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