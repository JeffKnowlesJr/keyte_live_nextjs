'use client'

export const initializeFoundation = () => {
  // Convert Foundation JavaScript functionality to TypeScript
  // Preserve existing button, navigation, and accordion behavior
  
  const initializeButtons = () => {
    // Convert jquery.foundation.buttons.js functionality
    const buttons = document.querySelectorAll('.button')
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Preserve existing button click behavior
        const target = e.target as HTMLElement
        if (target.classList.contains('disabled')) {
          e.preventDefault()
        }
      })
    })
  }
  
  const initializeNavigation = () => {
    // Convert jquery.foundation.navigation.js functionality
    const flyoutToggles = document.querySelectorAll('.flyout-toggle')
    flyoutToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault()
        const parent = toggle.parentElement
        const flyout = parent?.querySelector('.flyout')
        if (flyout) {
          flyout.classList.toggle('show')
        }
      })
    })
  }
  
  const initializeAccordion = () => {
    // Convert jquery.foundation.accordion.js functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header')
    accordionHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        e.preventDefault()
        const content = header.nextElementSibling
        if (content) {
          content.classList.toggle('active')
        }
      })
    })
  }
  
  // Initialize all Foundation components
  initializeButtons()
  initializeNavigation()
  initializeAccordion()
}
