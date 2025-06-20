import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leadership Coaching - Keyte Group',
  description: 'Keyte Group - Leadership Coaching',
}

export default function Page() {
  return (
    <SubpageLayout>
      <div className="foundation-row">
        <div id="headerdots">
          <img src="/images/headerdots.png" alt="" role="presentation" />
        </div>
        <div className="eleven columns centered">
          <div id="maincontent" className="content">
            <div className="foundation-row">
              <div className="three columns hide-for-small">
                <ul className="side-nav">
                  <li><a href="/what-we-did/">What We Did</a></li>
                  <li className="divider"></li>
                  <li><a href="value-stream-mapping" target="_self" className="">Value Stream Mapping</a></li>
                  <li><a href="collaborative-learning" target="_self" className="">Collaborative Learning</a></li>
                  <li><a href="a3-thinking" target="_self" className="">A3 Thinking</a></li>
                  <li className="active"><a href="leadership-coaching" target="_self" className="">Leadership Coaching</a></li>
                </ul>
                <img className="ccm-image-block" alt="Light Bulb on Training Wheels" src="/images/light-bulb.jpg" width="210" height="240" />
                <p><em>Think for a little while.</em></p>
              </div>
              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li><a href="/">Home</a></li>
                  <li><a href="/what-we-did/">What We Did</a></li>
                  <li><a href="#">Leadership Coaching</a></li>
                </ul>
                <h1>Leadership Coaching</h1>
                <h3>Guiding Organizational Transformation</h3>
                <p>This shift in roles and responsibilities means that both you and your employees must develop new ways of working together inside the organization. Allowing rank and file members of an organization to think on their own means that leadership roles migrate from traditional "command and control" to "coaching and mentoring."</p>
                <p>Challenging the social and technical barriers that hold an organization back from being a high performing team can lead to creating an organization of good managers, thinkers, and problem solvers.</p>
                <p>We help you challenge the social and technical barriers that hold your organization back from being a high performing team and then coach you on a path towards creating an organization of good managers, thinkers, and problem solvers. Our coaching support is structured so that you learn how to think and act differently from us, and your organization learns to think and act differently from you.</p>
                <p>Our leadership coaching approach focuses on:</p>
                <ul>
                  <li>Transitioning from command and control to coaching and mentoring</li>
                  <li>Developing internal problem-solving capabilities</li>
                  <li>Building high-performing teams</li>
                  <li>Creating sustainable organizational change</li>
                  <li>Empowering front-line thinking and decision-making</li>
                </ul>
                <p>The goal is to develop leaders who can guide their organizations through continuous improvement and adaptation, creating lasting change that doesn't depend on external support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
