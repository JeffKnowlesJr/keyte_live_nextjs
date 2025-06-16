import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A3 Thinking - Keyte Group',
  description: 'Keyte Group - A3 Thinking',
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
                                <li><a href="collaborative-learning" target="_self" className="">Collaborative Learning</a></li>
                                <li className="active"><a href="a3-thinking" target="_self" className="">A3 Thinking</a></li>
                                <li><a href="leadership-coaching" target="_self" className="">Leadership Coaching</a></li>
                            </ul>
            <img border="0" className="ccm-image-block" alt="Light Bulb on Training Wheels" src="/images/light-bulb.jpg" width="210" height="240" />
                            <p><em>Think for a little while.</em></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="/what-we-did/">What We Did</a></li>
              <li><a href="#">A3 Thinking</a></li>
            </ul>
            <h1>A3 Thinking</h1>
                            <h3>Guiding Organizational Transformation</h3>
                            
                            <p>"A3" thinking – referencing an industry term for the 11 x 17 sheet of paper which serves as the collection point for data and analysis – can turn things around. While one-time training workshops are useful, a progressive learning model, working with several teams in an organization over a series of weeks to allow them time to engage others, gather solid supporting data, and learn how to identify the actionable issue(s) has been found to be the best intervention.</p>
                            
                            <p>With this technique an organization's internal capacity for:</p>
                            <ul>
                                <li>Aligning all functions around key strategic performance goals</li>
                                <li>Understanding systemic problems and solving them</li>
                                <li>Creating a solid force of front line thinking and problem solving</li>
                                <li>Continuous improvement</li>
                            </ul>
                            
                            <p>The A3 process helps managers develop their teams through coaching and mentoring, enhancing the problem-solving capabilities of operational staff and allowing management to address higher-level organizational issues. This approach fosters systematic thinking and creates a structured way to tackle complex challenges.</p>
                            
                            <p>Our A3 methodology focuses on developing internal problem-solving capacity rather than providing quick fixes, ensuring that organizations build lasting capabilities for continuous improvement.</p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
