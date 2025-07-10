'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Who We Are',
    href: '/who-we-are/',
    children: [
      { label: 'Beau Keyte', href: '/who-we-are/beau-keyte/' }
    ]
  },
  {
    label: 'What We Did',
    href: '/what-we-did/',
    children: [
      { label: 'Value Stream Mapping', href: '/what-we-did/value-stream-mapping/' },
      { label: 'Collaborative Learning', href: '/what-we-did/collaborative-learning/' },
      { label: 'A3 Thinking', href: '/what-we-did/a3-thinking/' },
      { label: 'Leadership Coaching', href: '/what-we-did/leadership-coaching/' }
    ]
  },
  {
    label: 'Who We Served',
    href: '/who-we-served/',
    children: [
      { label: 'Clients By Industry', href: '/who-we-served/clients-industry/' }
    ]
  },
  {
    label: 'How We Think',
    href: '/how-we-think/',
    children: [
      { label: 'Perfecting Patient Journeys Book', href: '/how-we-think/perfecting-patient-journeys-book/' },
      { label: 'Complete Lean Enterprise Book', href: '/how-we-think/complete-lean-enterprise-book/' },
      { label: 'Articles and thoughts', href: '/how-we-think/articles-and-thoughts/' },
      { label: 'Short Stops', href: '/how-we-think/short-stops/' },
      { label: 'Remarketing Continuous Improvement', href: '/how-we-think/remarketing-continuous-improvement/' }
    ]
  },
  {
    label: 'Contact',
    href: '/contact/'
  }
]

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())

  // Handle body class for off-canvas functionality
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('active-menu')
    } else {
      document.body.classList.remove('active-menu')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('active-menu')
    }
  }, [isMenuOpen])

  // Handle menu button clicks
  useEffect(() => {
    const menuButton = document.getElementById('menuButton')
    if (menuButton) {
      const handleMenuClick = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        setIsMenuOpen(!isMenuOpen)
      }
      
      menuButton.addEventListener('click', handleMenuClick)
      menuButton.addEventListener('touchstart', handleMenuClick)
      
      return () => {
        menuButton.removeEventListener('click', handleMenuClick)
        menuButton.removeEventListener('touchstart', handleMenuClick)
      }
    }
  }, [isMenuOpen])

  // Handle clicks outside menu to close
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('#topMenu') && !target.closest('#menuButton') && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isMenuOpen])

  const toggleDropdown = (label: string) => {
    const newOpenDropdowns = new Set(openDropdowns)
    if (newOpenDropdowns.has(label)) {
      newOpenDropdowns.delete(label)
    } else {
      newOpenDropdowns.add(label)
    }
    setOpenDropdowns(newOpenDropdowns)
  }

  return (
    <nav 
      id="topMenu" 
      role="navigation" 
      aria-label="Mobile navigation" 
      className="show-for-small"
    >
      <ul className="nav-bar">
        {menuItems.map((item) => (
          <li key={item.label} className={item.children ? 'has-flyout' : ''}>
            <Link href={item.href}>{item.label}</Link>
            {item.children && (
              <>
                <a 
                  href="#" 
                  className="flyout-toggle" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    toggleDropdown(item.label); 
                  }}
                >
                  <span> </span>
                </a>
                <ul 
                  className={`flyout ${openDropdowns.has(item.label) ? 'show' : ''}`}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link 
                        href={child.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
} 