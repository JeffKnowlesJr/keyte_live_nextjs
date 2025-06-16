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
                  <a href="/who-we-are/">Who We Are</a>
                  <ul>
                    <li><a href="/who-we-are/beau-keyte.html">Beau Keyte</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <a href="/what-we-did/">What We Did</a>
                  <ul>
                    <li><a href="/what-we-did/value-stream-mapping.html">Value Stream Mapping</a></li>
                    <li><a href="/what-we-did/collaborative-learning.html">Collaborative Learning</a></li>
                    <li><a href="/what-we-did/a3-thinking.html">A3 Thinking</a></li>
                    <li><a href="/what-we-did/leadership-coaching.html">Leadership Coaching</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <a href="/who-we-served/">Who We Have Served</a>
                  <ul>
                    <li><a href="/who-we-served/clients-industry.html">Clients By Industry</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="two columns mobile-one">
              <ul>
                <li>
                  <a href="/how-we-think/">How we Think</a>
                  <ul>
                    <li><a href="/how-we-think/perfecting-patient-journeys-book.html">Perfecting Patient Journeys Book</a></li>
                    <li><a href="/how-we-think/complete-lean-enterprise-book.html">Complete Lean Enterprise Book</a></li>
                    <li><a href="/how-we-think/articles-and-thoughts.html">Articles and thoughts</a></li>
                    <li><a href="/how-we-think/short-stops.html">Short Stops</a></li>
                    <li><a href="/how-we-think/remarketing-continuous-improvement.html">Remarketing Continuous Improvement</a></li>
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
