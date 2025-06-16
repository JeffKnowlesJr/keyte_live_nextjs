import Header from './Header'
import Footer from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Mobile Navigation - at body level for off-canvas functionality */}
      <nav id="topMenu" role="navigation" aria-label="Mobile navigation" className="show-for-small">
        <ul className="nav-bar">
          <li>
            <a href="/who-we-are.html">Who We Are</a>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><a href="/who-we-are/beau-keyte.html">Beau Keyte</a></li>
            </ul>
          </li>
          <li>
            <a href="/what-we-did.html">What We Did</a>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><a href="/what-we-did/value-stream-mapping.html">Value Stream Mapping</a></li>
              <li><a href="/what-we-did/collaborative-learning.html">Collaborative Learning</a></li>
              <li><a href="/what-we-did/a3-thinking.html">A3 Thinking</a></li>
              <li><a href="/what-we-did/leadership-coaching.html">Leadership Coaching</a></li>
            </ul>
          </li>
          <li>
            <a href="/who-we-served.html">Who We Have Served</a>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><a href="/who-we-served/clients-by-industry.html">Clients By Industry</a></li>
            </ul>
          </li>
          <li>
            <a href="/how-we-think.html">How we Think</a>
            <a href="#" className="flyout-toggle"><span> </span></a>
            <ul className="flyout">
              <li><a href="/how-we-think/perfecting-patient-journeys-book.html">Perfecting Patient Journeys Book</a></li>
              <li><a href="/how-we-think/complete-lean-enterprise-book.html">Complete Lean Enterprise Book</a></li>
              <li><a href="/how-we-think/articles-and-thoughts.html">Articles and thoughts</a></li>
              <li><a href="/how-we-think/short-stops.html">Short Stops</a></li>
            </ul>
          </li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
