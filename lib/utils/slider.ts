'use client'

export const initializeSlider = () => {
  // Convert Nivo Slider functionality to TypeScript
  // Preserve exact same slider behavior and timing
  
  let currentSlide = 0
  let slideInterval: NodeJS.Timeout
  
  const slides = document.querySelectorAll('#slider img')
  const totalSlides = slides.length
  
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
  
  const startSlider = () => {
    showSlide(0) // Show first slide
    slideInterval = setInterval(nextSlide, 4000) // 4 second intervals
  }
  
  const stopSlider = () => {
    if (slideInterval) {
      clearInterval(slideInterval)
    }
  }
  
  // Initialize slider
  if (slides.length > 0) {
    startSlider()
  }
  
  return {
    start: startSlider,
    stop: stopSlider,
    next: nextSlide,
    show: showSlide
  }
}
