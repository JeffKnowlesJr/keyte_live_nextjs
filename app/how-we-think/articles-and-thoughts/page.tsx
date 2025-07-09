import { SubpageLayout } from '../../../components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Articles and Thoughts - Keyte Group',
  description:
    'Links to articles, blog posts, webinars, etc that contain ideas and thoughts to make your business better by serving customers and clients more efficiently and effectively.',
  keywords:
    'Transformational thinking, opinion pieces, articles, blog posts, Beau Keyte, supply chain, lean principles, scientific thinking, leadership standard work, healthcare, pandemic response',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Articles and Thoughts - Keyte Group',
    description:
      'Links to articles, blog posts, webinars, etc that contain ideas and thoughts to make your business better by serving customers and clients more efficiently and effectively.',
    url: 'https://www.keytegroup.com/how-we-think/articles-and-thoughts/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/Keyte_Group_logo_large.png',
        width: 800,
        height: 600,
        alt: 'The Keyte Group Logo'
      }
    ],
    locale: 'en_US',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles and Thoughts - Keyte Group',
    description:
      'Transformational thinking and practical insights for business improvement.',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/how-we-think/articles-and-thoughts/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="articles-and-thoughts-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Articles and Thoughts',
            description:
              'Links to articles, blog posts, webinars, etc that contain ideas and thoughts to make your business better by serving customers and clients more efficiently and effectively.',
            author: {
              '@type': 'Person',
              name: 'Beau Keyte'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Keyte Group',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.keytegroup.com/images/Keyte_Group_logo_large.png'
              }
            },
            url: 'https://www.keytegroup.com/how-we-think/articles-and-thoughts/',
            mainEntityOfPage:
              'https://www.keytegroup.com/how-we-think/articles-and-thoughts/'
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
                    <a href="index">How We Think</a> &gt;{' '}
                    <span className="current">Articles and Thoughts</span>
                  </div>
                  <h1>Articles and Thoughts</h1>
                  <h3>Guiding Organizational Transformation</h3>

                  <h2>TRANSFORMATIONAL THINKING</h2>

                  <p>
                    <a
                      href="https://www.marketwatch.com/story/those-moldy-masks-in-the-strategic-stockpile-reflect-a-supply-chain-problem-these-5-steps-can-fix-that-before-the-next-crisis-strikes-2020-05-29"
                      target="_blank"
                    >
                      OPINION: Those moldy masks in the strategic stockpile
                      reflect a supply-chain problem — these 5 steps can fix
                      that before the next crisis strikes
                    </a>
                    : Opinion piece, May 29, 2020
                  </p>
                  <ul>
                    <li>
                      Let's build a public-private National Pandemic Response
                      Coalition and do drills, just like the military does with
                      war games.
                    </li>
                  </ul>

                  <p>
                    <a
                      href="https://www.industryweek.com/operations/article/21127903/lean-in-a-time-of-social-distancing"
                      target="_blank"
                    >
                      Rethinking lean in a time of social distancing
                    </a>
                    : Article for Industry Week, April 3, 2020
                  </p>
                  <ul>
                    <li>
                      Process and system designs need to adapt to keep workers
                      safe.
                    </li>
                  </ul>

                  <p>
                    <a
                      href="https://www.industryweek.com/operations/continuous-improvement/article/21127325/playing-the-lean-long-game"
                      target="_blank"
                    >
                      Playing the long lean game
                    </a>
                    : Article for Industry Week, March 27, 2020
                  </p>
                  <ul>
                    <li>
                      As the market changes quickly, now is the time for some
                      serious scientific thinking.
                    </li>
                  </ul>

                  <p>
                    <a
                      href="https://www.industryweek.com/leadership/article/22025574/are-you-sending-the-wrong-message-with-leadership-standard-work"
                      target="_blank"
                    >
                      Are You Sending the Wrong Message with 'Leadership
                      Standard Work'?
                    </a>
                    : Article for Industry Week, May 1, 2018
                  </p>
                  <ul>
                    <li>
                      No need to invoke lean language. Just say you want to have
                      great leadership inside your transformation and find a
                      path that makes sense.
                    </li>
                  </ul>

                  <h2>HEALTHCARE</h2>

                  <p>
                    <a
                      href="http://www.huffingtonpost.com/beau-keyte/the-silent-killer-of-health_b_3893269.html"
                      target="_blank"
                    >
                      Silent Killer of Health Care Transformation: Overburdened
                      by Too Many Choices
                    </a>
                    : Huffington Post blog, Sept 9, 2013
                  </p>
                  <ul>
                    <li>
                      Current overburden and ways for leaders to find capacity
                      support change initiatives.
                    </li>
                  </ul>

                  <p>
                    <a
                      href="http://www.huffingtonpost.com/beau-keyte/losing-patients-what-heal_b_3749464.html"
                      target="_blank"
                    >
                      Losing Patients: What Healthcare Organizations have to do
                      to Survive Inevitable Changes
                    </a>
                    : Huffington Post blog, August 13, 2013
                  </p>
                  <ul>
                    <li>
                      The conflicts of healthcare two different worlds: pre- and
                      post- healthcare reform.
                    </li>
                  </ul>

                  <p>
                    <a
                      href="http://www.huffingtonpost.com/luis-haro-md/patient-care_b_3118072.html"
                      target="_blank"
                    >
                      Patients First
                    </a>
                    : blog post by Luis Haro, MD, April 29, 2013
                  </p>
                  <ul>
                    <li>
                      Haro discusses his healthcare initiative journey of
                      focusing on patient outcomes and how it has made a
                      difference to his patients and his organization.
                    </li>
                  </ul>

                  <p>
                    <a
                      href="http://www.healthcarefinancenews.com/news/reading-list-beau-keyte-and-jim-luckman?page=0"
                      target="_blank"
                    >
                      Talking about Perfecting Patient Journeys
                    </a>
                    : interview with Jim Luckman for Healthcare Finance News,
                    April 25, 2013
                  </p>
                  <ul>
                    <li>
                      Jim Luckman discusses key takeaways from Perfecting
                      Patient Journeys and describes the benefits of lean for
                      the health care industry.
                    </li>
                  </ul>
                </div>
                <div className="four columns sidebar">
                  <div className="ccm-image-block">
                    <img
                      src="/images/light-bulb.jpg"
                      alt="Ideas and Insights"
                    />
                    <p
                      style={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        marginTop: '10px',
                        lineHeight: '1.4'
                      }}
                    >
                      Practical insights for continuous improvement
                      practitioners
                    </p>
                  </div>
                  <h3>Related Resources</h3>
                  <ul className="sidebar-nav">
                    <li>
                      <a href="short-stops">Short Stops</a>
                    </li>
                    <li>
                      <a href="complete-lean-enterprise-book">
                        Complete Lean Enterprise
                      </a>
                    </li>
                    <li>
                      <a href="perfecting-patient-journeys-book">
                        Perfecting Patient Journeys
                      </a>
                    </li>
                  </ul>
                  <h3>Featured Article</h3>
                  <div className="featured-box">
                    <h4>
                      <a href="strategic-stockpile">Strategic Stockpile</a>
                    </h4>
                    <p>
                      Building organizational resilience through strategic
                      preparation and capability development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
