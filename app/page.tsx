import MainLayout from '@/components/layout/MainLayout'
import HomeSlider from '@/components/HomeSlider'
import FeaturedContent from '@/components/home/FeaturedContent'

export default function HomePage() {
  return (
    <MainLayout>
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
        <div className="twelve columns">
          <div className="foundation-row" id="maincontentwrapper">
            <div className="eleven columns centered">
              <div className="foundation-row" id="">
                <div
                  id=""
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
                  <HomeSlider />
                  <FeaturedContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
