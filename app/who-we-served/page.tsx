import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Served - Keyte Group',
  description: 'Keyte Group - Who We Served',
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
                                <li className="active"><a href="/who-we-served/">Who We Have Served</a></li>
                                <li className="divider"></li>
                                <li><a href="clients-industry/" target="_self" className="">Clients By Industry</a></li>
                            </ul>
            <img border="0" className="ccm-image-block" alt="Solutions Lie Outside The Comfort Zone" src="/images/detour-sign.jpg" width="210" height="225" />
                            <p><i>We help you respond nimbly to change.</i></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">Who We Have Served</a></li>
            </ul>
            <h1>Who We Have Served</h1>
                            <p>Organizations across various sectors benefit from analytical approaches, training, facilitation, and leadership coaching. Lean strategies and techniques can improve work processes in environments ranging from healthcare to financial services, manufacturing, and general office settings.</p>
                            
                            <h4>How Organizations Benefit</h4>
                            <ul>
                                <li>We stimulate new thinking about how to align workflow with performance goals.</li>
                                <li>We mobilize and guide systemic learning.</li>
                                <li>We support executive leaders and line managers as they enable their organizations to adapt and innovate.</li>
                            </ul>
                            
                            <h4>Client Examples</h4>
                            <p>Many organizations across diverse industries have benefited from these strategies, including <strong>Hadassah Hospital</strong> (Israel), <strong>Mayo Clinic</strong>, <strong>Michigan Hospital Association</strong>, <strong>Levi Strauss</strong>, <strong>Red Gold</strong>, <strong>Capital One</strong>, <strong>Wells Fargo</strong>, <strong>Bosch</strong>, <strong>Medtronics</strong>, and <strong>Pfizer</strong>.</p>
                            <p>For a complete list of clients by industry, <a title="Clients By Industry" href="clients-industry/">click here</a>.</p>
                            
                            <div className="testimonial">
                                <h3>Testimonial</h3>
                                <blockquote>"We were always struggling to find times to do things. The sheer amount of STUFF that occurs: ordering prescription refills, physical therapy, etc. Now we go about our daily tasks in a more organized fashion and are able to focus on true headaches, problems, and recurring issues. As a result, we are able to do more good things for our patients and ourselves." <cite> Office manager, large physician practice</cite></blockquote>
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
