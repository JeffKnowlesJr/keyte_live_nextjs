'use client'

import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    // Initialize dropdown navigation hover effects
    const initializeNavigation = () => {
      const navItems = document.querySelectorAll('#mainNav li.has-flyout')
      
      navItems.forEach(item => {
        const submenu = item.querySelector('ul.flyout') as HTMLElement
        if (submenu) {
          item.addEventListener('mouseenter', () => {
            submenu.style.display = 'block'
          })
          item.addEventListener('mouseleave', () => {
            submenu.style.display = 'none'
          })
        }
      })
    }

    // Initialize mobile menu functionality
    const initializeMobileMenu = () => {
      const menuButton = document.getElementById('menuButton')
      if (menuButton) {
        const handleMenuClick = (e: Event) => {
          e.preventDefault()
          e.stopPropagation()
          document.body.classList.toggle('active-menu')
          console.log('Mobile menu toggled')
        }
        
        menuButton.addEventListener('click', handleMenuClick)
        menuButton.addEventListener('touchstart', handleMenuClick)
        
        return () => {
          menuButton.removeEventListener('click', handleMenuClick)
          menuButton.removeEventListener('touchstart', handleMenuClick)
        }
      }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initializeNavigation()
        initializeMobileMenu()
      })
    } else {
      initializeNavigation()
      initializeMobileMenu()
    }
  }, [])

  return (
    <header id="header" className="foundation-row">
      <div className="three columns mobile-two">
        <a href="/">
          <img 
            src="/images/Keyte_Group_logo_large.png" 
            alt="Keyte Group - Industry Support, Teaching & Professional Insights" 
            id="logo" 
          />
        </a>
      </div>
      <div className="nine columns mobile-two">
        <h3 style={{ fontStyle: 'italic', color: '#fbb040' }}>
          Guiding Organizational Transformation
        </h3>

        <nav id="menu" role="navigation" className="navigation hide-for-small">
          <ul id="mainNav" className="nav-bar">
            <li className="has-flyout">
              <a href="/who-we-are/index.html" className="has-flyout">Who We Are</a>
              <a href="#" className="flyout-toggle"><span> </span></a>
              <ul className="flyout">
                <li><a href="/who-we-are/beau-keyte.html">Beau Keyte</a></li>
              </ul>
            </li>
            <li className="has-flyout">
              <a href="/what-we-did/index.html" className="has-flyout">What We Did</a>
              <a href="#" className="flyout-toggle"><span> </span></a>
              <ul className="flyout">
                <li><a href="/what-we-did/value-stream-mapping.html">Value Stream Mapping</a></li>
                <li><a href="/what-we-did/collaborative-learning.html">Collaborative Learning</a></li>
                <li><a href="/what-we-did/a3-thinking.html">A3 Thinking</a></li>
                <li><a href="/what-we-did/leadership-coaching.html">Leadership Coaching</a></li>
              </ul>
            </li>
            <li className="has-flyout">
              <a href="/who-we-served/index.html" className="has-flyout">Who We Served</a>
              <a href="#" className="flyout-toggle"><span> </span></a>
              <ul className="flyout">
                <li><a href="/who-we-served/clients-industry.html">Clients By Industry</a></li>
              </ul>
            </li>
            <li className="has-flyout">
              <a href="/how-we-think/index.html" className="has-flyout">How We Think</a>
              <a href="#" className="flyout-toggle"><span> </span></a>
              <ul className="flyout">
                <li><a href="/how-we-think/perfecting-patient-journeys-book.html">Perfecting Patient Journeys Book</a></li>
                <li><a href="/how-we-think/complete-lean-enterprise-book.html">Complete Lean Enterprise Book</a></li>
                <li><a href="/how-we-think/articles-and-thoughts.html">Articles and thoughts</a></li>
                <li><a href="/how-we-think/short-stops.html">Short Stops</a></li>
                <li><a href="/how-we-think/remarketing-continuous-improvement.html">Remarketing Continuous Improvement</a></li>
              </ul>
            </li>
            <li><a href="/contact/index.html">Contact</a></li>
          </ul>
        </nav>
        <p className="show-for-small">
          <a className='menu-button button' id="menuButton" href="#menu">Menu</a>
        </p>
      </div>
    </header>
  )
}
