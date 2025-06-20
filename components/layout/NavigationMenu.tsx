'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
  {
    label: 'Who We Are',
    href: '/who-we-are',
    children: [
      { label: 'Beau Keyte', href: '/who-we-are/beau-keyte' }
    ]
  },
  {
    label: 'What We Did',
    href: '/what-we-did',
    children: [
      { label: 'Value Stream Mapping', href: '/what-we-did/value-stream-mapping' },
      { label: 'Collaborative Learning', href: '/what-we-did/collaborative-learning' },
      { label: 'A3 Thinking', href: '/what-we-did/a3-thinking' },
      { label: 'Leadership Coaching', href: '/what-we-did/leadership-coaching' }
    ]
  },
  {
    label: 'Who We Served',
    href: '/who-we-served',
    children: [
      { label: 'Clients By Industry', href: '/who-we-served/clients-industry' }
    ]
  },
  {
    label: 'How We Think',
    href: '/how-we-think',
    children: [
      { label: 'Perfecting Patient Journeys Book', href: '/how-we-think/perfecting-patient-journeys-book' },
      { label: 'Complete Lean Enterprise Book', href: '/how-we-think/complete-lean-enterprise-book' },
      { label: 'Articles and thoughts', href: '/how-we-think/articles-and-thoughts' },
      { label: 'Short Stops', href: '/how-we-think/short-stops' },
      { label: 'Remarketing Continuous Improvement', href: '/how-we-think/remarketing-continuous-improvement' }
    ]
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

export default function NavigationMenu() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav id="menu" role="navigation" className="navigation hide-for-small">
      <ul id="mainNav" className="nav-bar">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={item.children ? 'has-flyout' : ''}
            onMouseEnter={() => item.children && handleMouseEnter(item.label)}
            onMouseLeave={() => item.children && handleMouseLeave()}
          >
            <Link href={item.href} className={item.children ? 'has-flyout' : ''}>
              {item.label}
            </Link>
            {item.children && (
              <>
                <a href="#" className="flyout-toggle">
                  <span> </span>
                </a>
                <ul 
                  className={`flyout ${openDropdown === item.label ? 'show' : ''}`}
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href}>{child.label}</Link>
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