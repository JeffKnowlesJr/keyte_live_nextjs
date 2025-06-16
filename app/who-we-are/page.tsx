import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Are - Keyte Group',
  description: 'Keyte Group - Who We Are',
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
                                <li className="active"><a href="/who-we-are/">Who We Are</a></li>
                                <li className="divider"></li>
                                <li><a href="beau-keyte" target="_self" className="">Beau Keyte</a></li>
                            </ul>
            <img border="0" className="ccm-image-block" alt="Heroic Efforts Mean Broken System" src="/images/stopping-train.jpg" width="209" height="167" />
                            <p><em>Heroic efforts are a symptom of a broken system.<br /></em></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">Who We Are</a></li>
            </ul>
            <h1>We Are Hands-On Problem Solvers</h1>
                            <p>We are seasoned practitioners, most of whom also own their own consultancies. Unlike many management consulting companies, we don't have partners selling services and then delegating the actual work to less experienced staff. We have the flexibility to offer the best person for the application you need, and are committed to keeping the right people in front of you at all times.</p>
                            <p>Our network includes professionals in a wide range of disciplines, including policy deployment, lean strategies, shop floor transformations, enterprise transformations, office and service lean, healthcare lean, human resource strategies, lean costing applications, lean metrics, etc.</p>
                            
                            <div className="testimonial">
                                <h3>Testimonial</h3>
                                <blockquote>"We've tended to be functionally organized, yet when we look for lean improvements in order-to-cash and product development, for example, these projects cross over several functional areas. You start to realize that what is happening throughout the company affects how we meet customer needs." <cite> Office furniture manufacturing client</cite></blockquote>
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
