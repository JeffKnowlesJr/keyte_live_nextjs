import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title:
    'Building Back Better: Creating A Strategic National Stockpile Coalition - Keyte Group',
  description:
    'Building Back Better: Creating A Strategic National Stockpile Coalition - An article discussing the need for a National Pandemic Response Coalition and improvements to the Strategic National Stockpile.',
  keywords:
    'pandemic response, strategic national stockpile, national pandemic response coalition, healthcare, public safety, Beau Keyte',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title:
      'Building Back Better: Creating A Strategic National Stockpile Coalition - Keyte Group',
    description:
      'Building Back Better: Creating A Strategic National Stockpile Coalition - An article discussing the need for a National Pandemic Response Coalition and improvements to the Strategic National Stockpile.',
    url: 'https://www.keytegroup.com/how-we-think/articles-and-thoughts/strategic-stockpile/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/strategic_stockpile_diagram.jpg',
        width: 800,
        height: 600,
        alt: 'Strategic Stockpile Diagram'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Building Back Better: Creating A Strategic National Stockpile Coalition - Keyte Group',
    description:
      'An article discussing the need for a National Pandemic Response Coalition and improvements to the Strategic National Stockpile.',
    images: [
      'https://www.keytegroup.com/images/strategic_stockpile_diagram.jpg'
    ]
  },
  alternates: {
    canonical:
      'https://www.keytegroup.com/how-we-think/articles-and-thoughts/strategic-stockpile/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="strategic-stockpile-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Building Back Better: Creating A Strategic National Stockpile Coalition',
            description:
              'Building Back Better: Creating A Strategic National Stockpile Coalition - An article discussing the need for a National Pandemic Response Coalition and improvements to the Strategic National Stockpile.',
            author: [
              {
                '@type': 'Person',
                name: 'Beau Keyte'
              },
              {
                '@type': 'Person',
                name: 'Sam R. Watson'
              }
            ],
            publisher: {
              '@type': 'Organization',
              name: 'Keyte Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.keytegroup.com/images/Keyte_Group_logo_large.png'
              }
            },
            url: 'https://www.keytegroup.com/how-we-think/articles-and-thoughts/strategic-stockpile/',
            mainEntityOfPage:
              'https://www.keytegroup.com/how-we-think/articles-and-thoughts/strategic-stockpile/'
          })
        }}
      />
      <div className="foundation-row">
        <div id="headerdots">
          <img src="/images/headerdots.png" alt="" role="presentation" />
        </div>
        <div className="eleven columns centered">
          <div id="maincontent" className="content">
            <div className="foundation-row">
              <div className="twelve columns">
                <div className="eight columns">
                  <div id="breadcrumbs">
                    <a href="/index">Home</a> &gt;{' '}
                    <a href="/how-we-think">How We Think</a> &gt;{' '}
                    <a href="/how-we-think/articles-and-thoughts">
                      Articles and Thoughts
                    </a>{' '}
                    &gt; <span className="current">Strategic Stockpile</span>
                  </div>
                  <h1>
                    Building Back Better: Creating a Strategic National
                    Stockpile Coalition
                  </h1>
                  <h3>Guiding Organizational Transformation</h3>
                  <h4>Beau Keyte and Sam R. Watson</h4>

                  <p>
                    On March 18, 2020, the President stated that the pandemic
                    was nothing less than a war on our own shores. Yet, there
                    seemed to be little response from any federal agency
                    responsible for keeping Americans safe from attack. We never
                    got a report from the Situation Room talking about the
                    battle, strategy, or specific metrics to know if we were
                    winning. Were the lights in the Situation Room even turned
                    on?
                  </p>

                  <p>
                    Going a step further, it appeared that the military didn't
                    think much about this war: there was a major battle lost on
                    the USS Roosevelt when hundreds of its crew succumbed to
                    COVID-19 while the Pentagon was absorbed in planning for
                    future conflict. It would appear that we are not capable of
                    broadening our National Security needs to include a pandemic
                    war, only a military war. This inability to react to a
                    predictable pandemic resulted in unheard of personal and
                    financial loss, worse than any military conflict in 70
                    years. America and Americans are wounded now and it's time
                    to examine and then heal.
                  </p>

                  <p>
                    In addition to military inactions, the Strategic National
                    Stockpile, the primary inventory backup for public
                    healthcare emergencies, had moldy PPE and broken equipment
                    being shipped to what has been described as "Our Front
                    Lines" of the COVID-19 war. This was overlaid with unclear
                    instructions about how to release the supplies within the
                    Stockpile, informal attempts to trigger the Defense
                    Production Act, inconsistent messaging, and a campaign of
                    finger-pointing at the top of our government. An inexcusable
                    gap emerged: the US citizens could not trust their own
                    government to respond to a crisis that impacted its citizens
                    within its own shores. This "too little too late" scenario
                    unfolded and produced a war with 50 distinct and yet
                    connected battlefronts: with each state descending to a
                    "Lord of the Flies" like competition for critical supplies
                    for their front lines along with multiple local skirmishes
                    among cities. As one elected official put it, "we are all
                    competing for the same equipment and that demand is driving
                    the price higher and higher." Winning a war with 50 fronts
                    is a near impossible task.
                  </p>

                  <p>
                    The good news is that there was incredible ingenuity for
                    workarounds to counter the lack of national organization and
                    support: citizens sewing masks, engineers re-purposing other
                    equipment to ventilators, hospitals and universities
                    creating their own testing capabilities, and states sharing
                    critical equipment with other states. We proudly witnessed
                    the emergence of 21st-century Minute Men: another group of
                    true heroes in all corners of the nation who stepped up to
                    fight a war that relies on ingenuity, not guns. But we
                    shouldn't confuse this with a well-laid-out plan: this was a
                    reaction of a nation that was forced to respond as it had
                    more casualties than the next worst five countries combined
                    in the COVID-19 international war. It would seem we fought
                    the worst battle in the world.
                  </p>

                  <p>
                    We need to learn from this failure and adapt quickly before
                    the next pandemic arrives on our shores.
                  </p>

                  <h4>
                    Learning and Looking Ahead: Producing, Distributing, and
                    Funding
                  </h4>

                  <p>
                    While many of our leaders are talking about learning from
                    this disaster to create a stronger future, I'd like to
                    suggest that part of this reflection begins by taking aim at
                    two interconnected weaknesses in our response to this
                    pandemic: the Defense Production Act (DPA) and the Strategic
                    National Stockpile (SNS).
                  </p>

                  <p>
                    The DPA was developed for military applications and is
                    routinely triggered to one degree or another. When "health
                    services" was formally recognized in the DPA in 2012, it was
                    truly a case of a square peg in a round hole. Under Title
                    III in the current DPA, The Secretary of HHS has delegated
                    authority over "health services," which will get materials
                    produced. The Secretary of Transportation has authority over
                    domestic transportation which will move materials. The DPA
                    was untested for health services and no one really knew how
                    it would act until it didn't act at all during this
                    pandemic.
                  </p>

                  <blockquote>
                    <p>"Infantry wins battles, logistics wins wars."</p>
                    <cite>— Army General John J. Pershing</cite>
                  </blockquote>

                  <p>
                    The Strategic National Stockpile began in 2000 with a plan
                    to distribute emergency health care materials in specialized
                    bulk air cargo containers to achieve a 12-hour response in a
                    healthcare crisis. Currently, it is operated under the
                    Department of Homeland Security in coordination with the
                    Secretaries of HHS and the VA. While deploying medical
                    supplies in over 60 instances through its history, the
                    largest recent deployment was in response to the H1N1
                    influenza pandemic.
                  </p>

                  <p>
                    In terms of its contents, there has been significant
                    modeling of crises throughout the years and collaboration
                    with at least 10 federal agencies resulting in many updates
                    to the Stockpile inventory content requirements. Yet, it has
                    lacked consistent and adequate funding to run efficiently
                    and keep its inventory nominal. The actual plan is only
                    physically tested during specific crises. According to a
                    2016 publication, the SNS crisis responses have never
                    matched expectations. That being said, Greg Burel, then
                    Director of the Stockpile, concluded that there was full
                    confidence in the safety and efficacy of the products in the
                    stockpile.
                  </p>

                  <p>
                    An underlying challenge with the SNS is that it has been
                    under-funded over the past several years, regardless of
                    administration. The challenge being, there is discretion in
                    the funding that falls victim to political whims. Over the
                    course of the repeated use during the past 21 years, funding
                    was chronically insufficient to replenish the SNS.
                  </p>

                  <p>
                    There are two elements of the funding: one, adequately
                    resource the full replenishment of the SNS, two, ensure
                    sustainable funding. To do this right we also need a way to
                    permanently fund the inventory and the staffing required to
                    ensure its efficacy and support the ongoing drills. There is
                    also the need to maintain the currency of the materials in
                    the SNS. Another funding-related issue that has been
                    revealed is a lack of methodology to manage turnover of
                    expiring material.
                  </p>

                  <p>
                    The DPA and the SNS, when combined, are two elements of a
                    conceptual supply chain, including a production/procurement
                    system and a distribution system. But they were not designed
                    to be formally stitched together and they both failed us as
                    separate, unconnected systems. The DPA was not fully
                    triggered, and what was resulted in "too little too late,"
                    demonstrating the SNS had a broken distribution process and
                    inventory that included moldy masks and broken ventilators.
                    To meet the national security needs of the next pandemic we
                    need a supply chain that is proven to respond in a way that
                    supports our National security interests. And it needs
                    funding which can't be seen as nonessential at any time.
                  </p>

                  <h4>Recommendations</h4>

                  <p>
                    The gap we now see is an unsystematic reaction to a pandemic
                    war on our shores. This preparedness gap covers a host of
                    weaknesses, from early identification of a potential
                    pandemic to all aspects of our society and economy that need
                    to be turned off, financially supported, and then turned
                    back on. It's time to remove "health services" from the DPA
                    and create a comprehensive, resilient health care supply
                    chain which incorporates producing, storing it at the SNS,
                    and distributing it from the SNS. And do it better by
                    constantly exercising this plan to ensure that it its
                    operational effectiveness.
                  </p>

                  <p>
                    We can use the thinking the military incorporates to
                    maintain operational effectiveness of the SNS. Our armed
                    forces hold War Games all the time to remain prepared for
                    different conflict scenarios. Our National Guard has
                    frequent exercises practicing different workouts in order to
                    be able to step in quickly where and when there is a need.
                    Missing from our pandemic preparedness are the same
                    deliberate drills for the pandemic war that will come again,
                    maybe soon, to our shores.
                  </p>

                  <h4>Re-imagining the Strategic National Stockpile</h4>

                  <p>
                    If we remove Health Services from Title III of the Defense
                    Production Act, we are able to create a fully autonomous and
                    integrated production and distribution supply chain for the
                    Strategic National Stockpile. And, with secured funding, we
                    can be assured that it is effective and efficient in
                    supporting our pandemic needs.
                  </p>

                  <p>
                    Here are the proposed building blocks to ensure an adequate
                    and responsive supply chain for the front lines of a
                    healthcare crisis:
                  </p>

                  <ol>
                    <li>
                      <strong>
                        Create a National Stockpile Assessment Team.
                      </strong>{' '}
                      As we learn about and see more pandemic threats the
                      subsequent types and volumes of supplies in the National
                      Stockpile will change. This task is addressed within the
                      existing SNS, whose mission is to manage and modify the
                      materials and inventory level. The Assessment Team would
                      be made up of the existing Stockpile analysts and
                      additional private partners invested in the outcomes of a
                      pandemic response: manufacturer, logistics firms,
                      healthcare systems, etc. In addition to ensuring the
                      appropriate compilation of the Stockpile, this team will
                      be responsible for continually assessing the operational
                      readiness of a pandemic response for the Stockpile.
                    </li>

                    <li>
                      <strong>
                        Create a National Stockpile Supply Chain Coalition.
                      </strong>{' '}
                      Now that we have targeted specific supplies and volumes,
                      it is time to formalize an active partnership between
                      government and industry to support this Stockpile. Every
                      organization has (or should have) a Plan B to fall back on
                      if Plan A doesn't work. Let's use this concept as we form
                      a Supply Chain Coalition responsible for producing and
                      transporting the items in the Stockpile inventory. These
                      companies will be pre-identified, and their Plan B will
                      revolve around producing and transporting surge capacities
                      to and from the Stockpile inventory. This group of
                      companies would be formally identified and aligned to
                      produce and ship what is needed. Necessary capital to get
                      the right production equipment in place would be provided
                      by the government to the manufacturing partners.
                      Production plans and processes which merge equipment and
                      materials with appropriately skilled workers and work
                      instructions would be created and shared within the
                      Coalition to ensure alignment and coordination. Logistics
                      plans for surge capacities would be coordinated and shared
                      with the Coalition logistics firms. A key aspect of this
                      will be a more strategic location of manufacturing
                      capacity inside North America as we've learned what a
                      10,000-mile supply chain can do to us in time of war.
                    </li>

                    <li>
                      <strong>Design and Initiate Pandemic War Games.</strong>{' '}
                      Seattle's healthcare system planned and simulated what to
                      do when (not if) the coronavirus hit. Its proximity to
                      China and the city's demographics increased the likelihood
                      that the city that they would definitely see the virus.
                      They even went so far as to build a field hospital in a
                      soccer field for patient overflow. When the first patient
                      was diagnosed as contracting COVID-19 locally, they
                      implemented the plan by the book (yes, there was a book)
                      and it was successful. The shortfall was not the lack of
                      planning or implementing, it was the supply chain
                      responsible for replenishing the equipment and supplies.
                      They found they couldn't fight the battle they had
                      prepared for as supporting logistics failed them. What is
                      notable is that fact of this logistical failure has
                      continued six months into the pandemic. We can use this
                      thinking and also the skills and practices of our military
                      as models for these War Games. Our armed forces hold War
                      Games all the time to remain prepared for different
                      conflict scenarios. Our National Guard has frequent
                      exercises practicing different workouts in order to be
                      able to step in quickly where and when there is a need.
                      Missing from our preparedness is the same deliberate
                      drills for the pandemic war that will come again, maybe
                      soon, to our shores. Drills around this plan can have
                      different themes, but the foundational steps are to:
                    </li>

                    <li>
                      <strong>
                        Include the Supply Chain Coalition as one of the formal
                        suppliers to the Stockpile.
                      </strong>{' '}
                      These may or may not be existing Stockpile suppliers.
                      Depending on the actual production volumes, the Coalition
                      might end up as one of several suppliers or the only
                      supplier.
                    </li>

                    <li>
                      <strong>
                        Stress the system using the same thinking we did as we
                        stressed banks after the financial crisis.
                      </strong>{' '}
                      Have a plan to trigger action by different companies in
                      the Supply Chain Coalition to produce and ship surge
                      volumes to and from the Stockpile within a 7-day notice.
                      Randomly select these companies for the drills, but make
                      sure all companies have at least two drills per year.
                    </li>

                    <li>
                      <strong>
                        Pair these drills with a stock rotation plan for the
                        Stockpile based on shelf life and/or obsolescence of the
                        inventory.
                      </strong>{' '}
                      For instance, if surgical masks have a 5-year shelf life,
                      then at least 20% of surgical masks inventory must be
                      produced each year, and the drills have to be part or all
                      of this production. The logistics partners then ship new
                      product to the Stockpile and older inventory from the
                      stockpile. The stock that is nearing the end of its shelf
                      life can then be sent to active inventories in our health
                      systems.
                    </li>

                    <li>
                      <strong>
                        Include the Stockpile as an active and permanent
                        supplier to our national health needs.
                      </strong>{' '}
                      If we rotate the stock, it needs to be shipped to a front
                      line somewhere to be used to prevent it from simply being
                      trashed. There are some options here. It's possible for
                      the Stockpile to ship directly to the VA hospitals and
                      military bases. It's possible to have them ship to all
                      public and private healthcare systems. Or all of them!
                      Once the drill volumes are understood, the "customers" of
                      the drills' inventories can be sorted out. But one way or
                      the other, the Stockpile becomes a formal and permanent
                      supplier for medical needs around the country. With regard
                      to the concern for the federal government to be replacing
                      manufactures through the sale of pre-expiration product,
                      keep in mind that the manufactures are replacing on the
                      other end. Keeping with the surgical mask example: if the
                      shelf life is 5 years and we produce 20% of the supply
                      each year for the Stockpile, the health systems needs to
                      purchase and absorb 20% of the stockpile's surgical masks
                      each year.
                    </li>
                  </ol>

                  <p>
                    Review the results of each drill, then adjust. While the
                    Stockpile Assessment Team can play an important role here, I
                    recommend a review by the customers of the National Pandemic
                    Response Coalition made up of state emergency coordinators,
                    appointed by the governors, and the healthcare systems
                    relying on the Stockpile to be there for them when they need
                    it. Their feedback is critical for making constant
                    adjustments to ensure an effective and efficient response.
                    Given our dependency on our governors during this current
                    crisis, and the amazing way they stepped into leadership
                    roles, if we can convince them the system is sound they can
                    convince the people they serve that this system can be
                    trusted.
                  </p>

                  <h4>Funding the SNS</h4>

                  <p>
                    As noted earlier the failures seen during the pandemic
                    relate not only to management of the strategic stockpile,
                    but how it is funded. Over the past several administrations
                    budget compromises resulted in an underfunding, thereby
                    reducing the volume and quality of the supplies.
                  </p>

                  <p>
                    Currently, the SNS funding is discretionary. Amounts are set
                    by Congress as part of the budget for the Department of
                    Health and Human Services. The amount of funding that is
                    finally set is subject to routine budget negotiations, and
                    as seen historically, is generally less than requested, or
                    required.
                  </p>

                  <p>
                    We propose that the budget for the Strategic National
                    Stockpile be set, and the funding be "lock-boxed" in a
                    manner that allows the amount to keep current with inflation
                    but not be funded below a minimum amount. Further, there
                    should be a self-funding component to the budget that allows
                    for the materials to remain current and feed funds back into
                    purchasing more supplies.
                  </p>

                  <p>
                    There are a couple of current examples of how this may be
                    designed. First, drawing from the Social Security Trust
                    where a payroll tax is collected and appropriated to the SST
                    with the remainder of the income coming from investment
                    income. According to one market report, the estimated cost
                    of medical supplies in the US averages $3.9 million.
                    Conservatively applying the average across the 5,000 US
                    hospitals, this is $19.9 billion. Using a similar approach,
                    to the SST, a tax would be applied to the sales of medical
                    supplies that is then appropriated by Congress similar to
                    social security to fund the stockpile. Considering the
                    annual HHS budget for the stockpile is approximately $560
                    million, this is about three percent of the estimated sales
                    revenue of medical supplies. Because the amount of the tax
                    is based on the value of product sold, it allows for a guard
                    against inflationary increases.
                  </p>

                  <p>
                    Recognizing that the funds gathered through a tax mechanism
                    would be used to purchase the supplies for the SNS, the
                    option to derive revenue from investments is unlikely. This
                    brings in the second element of funding the SNS. For this,
                    we can look to the national strategic petroleum reserves
                    (NSPR). The NSPR not only purchases oil and natural gas, it
                    also sells it based on supply and national need. Using a
                    similar concept and as described above, there is a need to
                    contemporize the materials stored in the SNS to avoid it
                    being held past a usable expiration point. Using a first in,
                    first out approach, stock could be rotated by placing
                    material into a marketplace prior to it reaching a point
                    where it will expire. Funds garnered from these sales would
                    be kept within the budget of the SNS, in addition to the
                    amount gathered through a strategic stockpile tax. Using
                    this approach as a secondary funding mechanism has a dual
                    benefit of providing revenue while keeping the stockpile
                    current.
                  </p>

                  <p>
                    Both mechanisms outlined above address the ongoing support
                    of keeping the stockpile funded. Through the past several
                    months of the pandemic, and proceeding years of
                    underfunding, there must also be an initial infusion of
                    capital to bring the supply volumes up to required volumes,
                    as well as addressing the turnover of expiring or expired
                    materials. This infusion would most likely come in the form
                    of a federal bolus of funds.
                  </p>

                  <h4>Moving Forward</h4>

                  <p>
                    There are indeed challenges in this sweeping effort to
                    ensure public safety in the next major health crisis. From a
                    process perspective, the supply chain will always be
                    adapting to new needs in terms of either products or volumes
                    and requires continuous evaluation of the appropriate
                    inventory and resulting shifts in companies in the
                    coalition. From a funding perspective, it needs to overcome
                    the historical propensity to be ignored and sidelined in
                    Congress: we need to keep it protected. The important point
                    to keep in mind is that we have demonstrated the deep need
                    to constantly be ready for anything to happen in future
                    global pandemics.
                  </p>

                  <p>
                    It seemed so easy to take our eyes off this need and go on
                    with our lives as though nothing would happen. That might be
                    true with military conflict, but not pandemic war. We now
                    are painfully aware that we can't rely on a political
                    decision invoking a 70-year-old Act to support a broken and
                    moldy Stockpile. To regain the trust in the American people
                    it's time to be honest about our inability to fight a
                    pandemic war and then create an effective National Pandemic
                    Response Coalition to better serve our needs.
                  </p>

                  <p>
                    Let's reimagine a nation that takes all National Security
                    seriously and prides itself in being prepared for the next
                    pandemic. This is the time, and all eyes are watching and
                    waiting for such a reimagination. The critical thinking and
                    learning involved in creating a National Pandemic Response
                    Coalition, a National Stockpile Supply Chain Coalition, and
                    comprehensive Pandemic War Games would prepare us for the
                    next national response without the need for political
                    decisions. The War of 50 Fronts should be an important
                    lesson driving us to Build Back Better.
                  </p>

                  <p>
                    <em>
                      <strong>Beau Keyte</strong> has spent over 30 years
                      redesigning operational systems in a variety of industries
                      and is the author of "Perfecting Patient Journeys" and
                      "The Complete Lean Enterprise."
                    </em>
                  </p>

                  <p>
                    <em>
                      <strong>Sam R. Watson</strong> is the Senior Vice
                      President of Field Engagement at the Michigan Health &
                      Hospital Association with 30 years of experience in
                      large-scale, multi-center improvement. He has published
                      widely and spoken nationally and internationally on
                      quality and patient safety.
                    </em>
                  </p>
                </div>
                <div className="four columns sidebar">
                  <div className="ccm-image-block">
                    <img
                      src="/images/strategic_stockpile_diagram.jpg"
                      alt="Strategic Stockpile Diagram"
                    />
                    <p
                      style={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        marginTop: '10px',
                        lineHeight: '1.4'
                      }}
                    >
                      Strategic planning for national pandemic response
                    </p>
                  </div>
                  <h3>Related Resources</h3>
                  <ul className="sidebar-nav">
                    <li>
                      <a href="/how-we-think/articles-and-thoughts">
                        Articles and Thoughts
                      </a>
                    </li>
                    <li>
                      <a href="/how-we-think/short-stops">Short Stops</a>
                    </li>
                    <li>
                      <a href="/how-we-think/perfecting-patient-journeys-book">
                        Perfecting Patient Journeys
                      </a>
                    </li>
                  </ul>
                  <h3>Key Topics</h3>
                  <ul className="concept-list">
                    <li>National Pandemic Response Coalition</li>
                    <li>Strategic National Stockpile</li>
                    <li>Defense Production Act</li>
                    <li>Pandemic War Games</li>
                    <li>Healthcare Supply Chain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
