import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leadership Coaching - Keyte Group',
  description: 'Keyte Group - Lean Enterprise Solutions',
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
            {/* Content will be extracted from original HTML file */}
            <h1>Leadership Coaching</h1>
            <p>Content from what-we-do/leadership-coaching.html will be converted here.</p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
