import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What We Do - Keyte Group',
  description: 'Keyte Group - Lean Enterprise Solutions',
}

export default function Page() {
  return (
    <SubpageLayout>
      <div className="foundation-row">
        <div className="twelve columns">
          <div className="foundation-row">
            <div className="eleven columns centered">
              <div className="foundation-row">
                <div id="headerdots">
                  <img src="/images/headerdots.png" alt="" role="presentation" />
                </div>
                <div id="maincontent" className="eleven columns content">
                  {/* Content will be extracted from original HTML file */}
                  <h1>What We Do</h1>
                  <p>Content from what-we-do/index.html will be converted here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
