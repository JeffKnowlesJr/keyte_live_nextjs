import HeaderSubpage from './HeaderSubpage'
import FooterSubpage from './FooterSubpage'
import Link from 'next/link'

interface SubpageLayoutProps {
  children: React.ReactNode
}

export default function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <>
      {/* Mobile Navigation - at body level for off-canvas functionality */}
      <nav id="topMenu" role="navigation" aria-label="Mobile navigation" className="show-for-small">
        <ul className="nav-bar">
          <li>
            <Link href="/who-we-are">Who We Are</Link>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><Link href="/who-we-are/beau-keyte">Beau Keyte</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/what-we-did">What We Did</Link>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><Link href="/what-we-did/value-stream-mapping">Value Stream Mapping</Link></li>
              <li><Link href="/what-we-did/collaborative-learning">Collaborative Learning</Link></li>
              <li><Link href="/what-we-did/a3-thinking">A3 Thinking</Link></li>
              <li><Link href="/what-we-did/leadership-coaching">Leadership Coaching</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/who-we-served">Who We Have Served</Link>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><Link href="/who-we-served/clients-industry">Clients By Industry</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/how-we-think">How we Think</Link>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><Link href="/how-we-think/perfecting-patient-journeys-book">Perfecting Patient Journeys Book</Link></li>
              <li><Link href="/how-we-think/complete-lean-enterprise-book">Complete Lean Enterprise Book</Link></li>
              <li><Link href="/how-we-think/articles-and-thoughts">Articles and thoughts</Link></li>
              <li><Link href="/how-we-think/short-stops">Short Stops</Link></li>
            </ul>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <HeaderSubpage />
      <main>{children}</main>
      <FooterSubpage />
    </>
  )
}
