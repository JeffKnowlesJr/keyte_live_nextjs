'use client'

import NavigationMenu from './NavigationMenu'

export default function HeaderSubpage() {
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

        <NavigationMenu />
        <p className="show-for-small">
          <a className='menu-button button' id="menuButton" href="#menu">Menu</a>
        </p>
      </div>
    </header>
  )
}
