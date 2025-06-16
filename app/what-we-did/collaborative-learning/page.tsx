import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collaborative Learning - Keyte Group',
  description: 'Keyte Group - Collaborative Learning',
}

export default function Page() {
  return (
    <SubpageLayout>

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
                                <li><a href="/what-we-did/">What We Did</a></li>
                                <li className="divider"></li>
                                <li><a href="value-stream-mapping" target="_self" className="">Value Stream Mapping</a></li>
                                <li className="active"><a href="collaborative-learning" target="_self" className="">Collaborative Learning</a></li>
                                <li><a href="a3-thinking" target="_self" className="">A3 Thinking</a></li>
                                <li><a href="leadership-coaching" target="_self" className="">Leadership Coaching</a></li>
                            </ul>
            <img border="0" className="ccm-image-block" alt="Light Bulb on Training Wheels" src="/images/light-bulb.jpg" width="210" height="240" />
                            <p><em>Think for a little while.</em></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="/what-we-did/">What We Did</a></li>
              <li><a href="#">Collaborative Learning</a></li>
            </ul>
            <h1>Collaborative Learning</h1>
                            <h3>Guiding Organizational Transformation</h3>
                            
                            <p>Collaborative learning approaches help organizations improve operational performance through implementing and managing continuous improvement. Our methodology focuses on building internal capacity for sustained change.</p>
                            
                            <p>We work with teams to develop their problem-solving capabilities, ensuring that learning is shared across the organization. This approach creates a foundation for ongoing improvement that doesn't depend on external consultants.</p>
                            
                            <p>Our collaborative learning process includes:</p>
                            <ul>
                                <li>Team-based problem identification and analysis</li>
                                <li>Structured learning sessions with real workplace applications</li>
                                <li>Cross-functional collaboration to break down silos</li>
                                <li>Knowledge transfer mechanisms to spread learning</li>
                                <li>Regular updates, engagement, and strategic counsel for management</li>
                                <li>Alignment of management systems and policies with changes in day-to-day operations</li>
                            </ul>
                            
                            <p>The goal is to create an organization where continuous improvement becomes part of the culture, not just a program.</p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
