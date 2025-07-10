import Link from 'next/link'

export default function FooterSubpage() {
  return (
    <>
      <div className="foundation-row">
        <div id="footerdots" className="four columns push-seven mobile-three">
          <img src="/images/footerdots.png" alt="" />
        </div>
      </div>
      <div id="clear" className="foundation-row">
        <div className="eleven columns centered"></div>
      </div>
      <div id="footer" className="foundation-row content">
        <div className="twelve columns">
          <div className="foundation-row">
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <Link href="/who-we-are/">Who We Are</Link>
                  <ul>
                    <li><Link href="/who-we-are/beau-keyte/">Beau Keyte</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <Link href="/what-we-did/">What We Did</Link>
                  <ul>
                    <li><Link href="/what-we-did/value-stream-mapping/">Value Stream Mapping</Link></li>
                    <li><Link href="/what-we-did/collaborative-learning/">Collaborative Learning</Link></li>
                    <li><Link href="/what-we-did/a3-thinking/">A3 Thinking</Link></li>
                    <li><Link href="/what-we-did/leadership-coaching/">Leadership Coaching</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <Link href="/who-we-served/">Who We Have Served</Link>
                  <ul>
                    <li><Link href="/who-we-served/clients-industry/">Clients By Industry</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <Link href="/how-we-think/">How we Think</Link>
                  <ul>
                    <li><Link href="/how-we-think/perfecting-patient-journeys-book/">Perfecting Patient Journeys Book</Link></li>
                    <li><Link href="/how-we-think/complete-lean-enterprise-book/">Complete Lean Enterprise Book</Link></li>
                    <li><Link href="/how-we-think/articles-and-thoughts/">Articles and thoughts</Link></li>
                    <li><Link href="/how-we-think/short-stops/">Short Stops</Link></li>
                    <li><Link href="/how-we-think/remarketing-continuous-improvement/">Remarketing Continuous Improvement</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="four columns mobile-four">
              <div className="foundation-row">
                <div className="four columns mobile-two">
                  <img src="/images/Keyte_Group_logo_large.png" alt="KeyteGroup logo" id="logosmall" />
                </div>
                <div className="eight columns mobile-two">
                  <ul>
                    <li>Connect with us on <a href="https://www.linkedin.com/in/beaukeyte" className="fc-webicon linkedin small" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
