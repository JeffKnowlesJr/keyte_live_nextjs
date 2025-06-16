'use client'

import { useEffect } from 'react'

export default function HomeSlider() {
  useEffect(() => {
    // Initialize Nivo Slider when component mounts
    const initializeSlider = () => {
      if (typeof window !== 'undefined' && (window as any).jQuery) {
        const $ = (window as any).jQuery
        
        // Wait a bit for all images to be ready
        setTimeout(() => {
          $('#slider').nivoSlider({
            effect: 'fade',
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            animSpeed: 500,
            pauseTime: 6000,
            startSlide: 0,
            directionNav: false,
            controlNav: false,
            pauseOnHover: true,
            manualAdvance: false,
            beforeChange: function() {
              // Add any before change logic here
            },
            afterChange: function() {
              // Add any after change logic here
            },
            slideshowEnd: function() {
              // Add any slideshow end logic here
            }
          })
          
          // Show the slider after initialization
          $('#slider').show()
        }, 100)
      }
    }
    
    initializeSlider()
  }, [])

  return (
    <section className="foundation-row" aria-label="Homepage slider">
      <div
        className="twelve columns"
        id="slider"
        style={{ display: 'none' }}
      >
        <img
          src="/images/home-page-rotating-graphic-1.jpg"
          alt="Optimize Performance - Visual representation of performance optimization concepts"
          data-thumb="/images/home-page-rotating-graphic-1.jpg"
        />
        <img
          src="/images/home-page-rotating-graphic-2.jpg"
          alt="Visualize New Thinking - Illustration of innovative thinking approaches"
          data-thumb="/images/home-page-rotating-graphic-2.jpg"
        />
        <img
          src="/images/home-page-rotating-graphic-3.jpg"
          alt="Systematic Learning - Diagram showing systematic learning methodologies"
          data-thumb="/images/home-page-rotating-graphic-3.jpg"
        />
        <img
          src="/images/home-page-rotating-graphic-4.jpg"
          alt="Comfort Zone - Visual metaphor for stepping outside comfort zones"
          data-thumb="/images/home-page-rotating-graphic-4.jpg"
        />
        <img
          src="/images/home-page-rotating-graphic-5.jpg"
          alt="We Help You Think - Illustration of collaborative thinking processes"
          data-thumb="/images/home-page-rotating-graphic-5.jpg"
        />
        <img
          src="/images/home-page-rotating-graphic-6.jpg"
          alt="Leaders - Visual representation of leadership development"
          data-thumb="/images/home-page-rotating-graphic-6.jpg"
        />
      </div>
    </section>
  )
}
