'use client'

export const initializeOffCanvas = () => {
  // Convert jquery.offcanvas.js functionality to TypeScript
  // Preserve exact same mobile menu behavior
  
  const toggleOffCanvas = () => {
    document.body.classList.toggle('active-menu')
  }
  
  const closeOffCanvas = () => {
    document.body.classList.remove('active-menu')
  }
  
  const openOffCanvas = () => {
    document.body.classList.add('active-menu')
  }
  
  // Handle clicks outside menu to close
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (!target.closest('#navigation') && document.body.classList.contains('active-menu')) {
      closeOffCanvas()
    }
  }
  
  document.addEventListener('click', handleOutsideClick)
  
  return {
    toggle: toggleOffCanvas,
    close: closeOffCanvas,
    open: openOffCanvas,
    cleanup: () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }
}
