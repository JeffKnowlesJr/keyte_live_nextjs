import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Keyte Group',
  description: 'Keyte Group - Contact',
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
                                <li className="active"><a href="/contact/">Contact</a></li>
                                <li className="divider"></li>
                            </ul>
            <img border="0" className="ccm-image-block" alt="" src="/images/treasure-chest.jpg" width="210" height="260" />
                            <p><em>Realize the creative potential within your organization.</em></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <h1>Contact</h1>
                            <p>Learn about optimizing organizational performance and building new capacity using existing human resources.</p>
                            <p><a href="https://www.linkedin.com/in/beaukeyte" title="Connect on LinkedIn" target="_top">Connect with Beau Keyte on LinkedIn</a>.</p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
