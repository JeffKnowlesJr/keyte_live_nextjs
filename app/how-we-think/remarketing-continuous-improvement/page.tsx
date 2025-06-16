import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remarketing Continuous Improvement - Keyte Group',
  description: 'Keyte Group - Remarketing Continuous Improvement',
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
                                <li><a href="/how-we-think/">How We Think</a></li>
                                <li className="divider"></li>
                                <li><a href="/how-we-think/perfecting-patient-journeys-book" target="_self" className="">Perfecting Patient Journeys Book</a></li>
                                <li><a href="/how-we-think/complete-lean-enterprise-book" target="_self" className="">Complete Lean Enterprise Book</a></li>
                                <li><a href="/how-we-think/articles-and-thoughts" target="_self" className="">Articles and thoughts</a>
                                    <ul>
                                        <li><a href="/how-we-think/articles-and-thoughts/strategic-stockpile" target="_self" className="">Strategic National Stockpile</a></li>
                                    </ul>
                                </li>
                                <li><a href="/how-we-think/short-stops" target="_self" className="">Short Stops</a></li>
                                <li className="active"><a href="/how-we-think/remarketing-continuous-improvement" target="_self" className="">Remarketing Continuous Improvement</a></li>
                            </ul>
            
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="/how-we-think/">How We Think</a></li>
              <li><a href="#">Remarketing Continuous Improvement</a></li>
            </ul>
            <h1>Remarketing Continuous Improvement</h1>
                            
                            <h2>What do you mean, "Remarketing?"</h2>
                            
                            <h3>What's the Background?</h3>
                            <p>Several organizations created a collaborative conference in Detroit in July, 2024, titled The Future of People at Work (FOPAW), with the intention of challenging the collective approach to (mostly lean) continuous improvement efforts and thinking. The organizations included the <a href="https://www.lean.org" target="_blank">Lean Enterprise Institute</a>, the <a href="https://shingo.org" target="_blank">Shingo Institute</a>, <a href="https://www.tssc.com" target="_blank">Toyota Production System Support Center</a>, <a href="https://www.osu.edu" target="_blank">Ohio State University</a>, <a href="https://www.centralcoastlean.org" target="_blank">Central Coast Lean</a>, <a href="https://www.gbmp.org" target="_blank">GBMP Consulting Group</a>, and <a href="https://createvalue.org" target="_blank">Catalysis</a>. The attendees were invited to learn about contemporary gaps facing the continuous improvement industry and then worked in groups to prioritize takeaways and recommendations regarding a new direction more closely aligned with the current trajectory and needs of organizations. Nearly a dozen volunteer teams were created to address various aspects such as Lean Statements, Lean in Academia, and Ways of Working. I offered to head the Marketing and Branding Team.</p>
                            
                            <h3>Why Marketing?</h3>
                            <p>Marketing is the effort and process used in creating and communicating offerings of value to a targeted audience. It includes the development of the new message and the channel to communicate this message. In this case, I'm referring to the message and channel we use to engage people to invest in a systemic transformation of their organizations to create highly competitive and resilient organizations utilizing continuous improvement (specifically lean) principles.</p>
                            
                            <p>I believe the current marketing efforts generally fail to recognize the twists and turns in our most industries over the past 15 years and suffer from reduced interest and engagement in continuous improvement. I chose to work on the Marketing and Branding Team for that reason, as I believe that it's not possible to design a successful product or service without considering current customer needs and then tailoring the design to meet these needs in a way that appeals to the organizations we wish to influence and engage with.</p>
                            
                            <p>The effort for FOPAW to create an improved model of work starts with understanding the gaps which the target audience has with the current lean models (listening to the Voice of the Customer), which will then inform the product designers of not only their baseline performance but ultimately how to hit the customer targets to be successful.</p>
                            
                            <p>Once Marketing quantifies this perspective, a compelling message and a channel to deliver this message can be designed and implemented. When paired with the product that FOPAW is working on, we can then unveil the new, improved approach to continuous improvement.</p>
                            
                            <h2>Remarketing is now moving forward</h2>
                            <p>I'm now part of a plan to identify the needs of the market and then develop a marketing plan which speaks to those needs. I'm excited about this opportunity as I believe we need to reengage people and organizations by addressing where they are at this time. I'll keep this page updated with our progress.</p>
                            
                            <p>To find out more about this overall effort and the continued work stemming from the initial Future of People at Work Conference, please contact Eric Olsen.</p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
