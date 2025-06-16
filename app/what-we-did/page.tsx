import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Did - Keyte Group',
  description: 'Keyte Group - What We Did',
}

export default function Page() {
  return (
    <SubpageLayout>
      <div className="foundation-row" id="maincontentwrapper">
        <div className="eleven columns centered">
          <div className="foundation-row" id="">
            <div
              id="menu-backing"
              className="eleven columns content"
              style={{ height: '9em', position: 'relative', left: '46px' }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="foundation-row">
        <div className="eleven columns centered">
          <div className="foundation-row">
            <div id="headerdots">
              <img src="/images/headerdots.png" alt="" role="presentation" />
            </div>
            <div id="maincontent" className="eleven columns content">
              <div className="foundation-row">
                
          <div className="three columns hide-for-small">
            <ul className="side-nav">
                                <li className="active"><a href="/what-we-did/">What We Did</a></li>
                                <li className="divider"></li>
                                <li><a href="value-stream-mapping" target="_self" className="">Value Stream Mapping</a></li>
                                <li><a href="collaborative-learning" target="_self" className="">Collaborative Learning</a></li>
                                <li><a href="a3-thinking" target="_self" className="">A3 Thinking</a></li>
                                <li><a href="leadership-coaching" target="_self" className="">Leadership Coaching</a></li>
                            </ul>
            <img border="0" className="ccm-image-block" alt="Light Bulb on Training Wheels" src="/images/light-bulb.jpg" width="210" height="240" />
                            <p><em>We help you think for a little while.</em></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">What We Did</a></li>
            </ul>
            <h1>What We Did</h1>
                            <p>Organizations can be mobilized and guided through a transformation of their people and processes. By empowering the day-to-day operations staff to take ownership of problem-solving, sustainable change can be achieved. Support for organizational leaders can address the link between executive management systems and everyday operating functions.</p>
                            
                            <div className="testimonial">
                                <h3>Testimonial</h3>
                                <blockquote>"This [inpatient services] project was aimed at teaching us to fish instead of just bringing us a fish home for dinner. We could build a permanent skill base instead of continuing to rely on outside resources to keep us in a competitive position." <cite> Private non-profit hospital (500+ beds) and medical center</cite></blockquote>
                            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
