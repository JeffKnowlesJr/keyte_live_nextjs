import SubpageLayout from '@/components/layout/SubpageLayout'

export default function NotFound() {
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
                  <h1>Page Not Found</h1>
                  <p>The page you are looking for could not be found.</p>
                  <p><a href="/">Return to Home</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
