import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lean Enterprise Transformation - Keyte Group',
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
            <h1>Lean Enterprise Transformation</h1>
            <p>Content from what-we-do/lean-enterprise-transformation.html will be converted here.</p>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
