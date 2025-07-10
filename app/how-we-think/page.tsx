import { SubpageLayout } from '../../components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How We Think - Keyte Group',
  description:
    'Discover how to foster organizational improvement in a complex and rapidly changing world. Learn about the importance of shared responsibility for thinking and problem-solving throughout an organization. Explore how engaging managers and workers directly can build internal capacity for continuous improvement.',
  keywords:
    'Keyte Group, organizational improvement, management, problem-solving, continuous improvement, innovation, diagnostic conversation',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'How We Think - Keyte Group',
    description:
      'Discover how to foster organizational improvement in a complex and rapidly changing world.',
    url: 'https://www.keytegroup.com/how-we-think/',
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
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Think - Keyte Group',
    description:
      'Discover how to foster organizational improvement in a complex and rapidly changing world.',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/how-we-think/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="how-we-think-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'How We Think',
            description:
              'Discover how to foster organizational improvement in a complex and rapidly changing world.',
            url: 'https://www.keytegroup.com/how-we-think/',
            author: {
              '@type': 'Person',
              name: 'Beau Keyte',
              jobTitle: 'Continuous Improvement Expert and Author',
              alumniOf: 'University of Michigan',
              sameAs: 'https://www.linkedin.com/in/beaukeyte'
            },
            mainEntity: {
              '@type': 'ItemList',
              name: 'Thought Leadership Resources',
              itemListElement: [
                {
                  '@type': 'Article',
                  name: 'Articles and Thoughts',
                  description:
                    'Collection of insights on continuous improvement and lean methodology'
                },
                {
                  '@type': 'Book',
                  name: 'The Complete Lean Enterprise',
                  author: {
                    '@type': 'Person',
                    name: 'Beau Keyte'
                  },
                  about: 'Comprehensive guide to lean enterprise transformation'
                },
                {
                  '@type': 'Book',
                  name: 'Perfecting Patient Journeys',
                  author: {
                    '@type': 'Person',
                    name: 'Beau Keyte'
                  },
                  about: 'Lean methodology applied to healthcare processes'
                }
              ]
            }
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
              <div className="three columns hide-for-small">
                <ul className="side-nav">
                  <li className="active">
                    <a href="/how-we-think/">How We Think</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a
                      href="/how-we-think/perfecting-patient-journeys-book/"
                      target="_self"
                      className=""
                    >
                      Perfecting Patient Journeys Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-we-think/complete-lean-enterprise-book/"
                      target="_self"
                      className=""
                    >
                      Complete Lean Enterprise Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="/how-we-think/articles-and-thoughts/"
                      target="_self"
                      className=""
                    >
                      Articles and thoughts
                    </a>
                    <ul>
                      <li>
                        <a
                          href="/how-we-think/articles-and-thoughts/strategic-stockpile/"
                          target="_self"
                          className=""
                        >
                          Strategic National Stockpile
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="short-stops/" target="_self" className="">
                      Short Stops
                    </a>
                  </li>
                  <li>
                    <a
                      href="remarketing-continuous-improvement/"
                      target="_self"
                      className=""
                    >
                      Remarketing Continuous Improvement
                    </a>
                  </li>
                </ul>
                <img
                  className="ccm-image-block"
                  alt="Detour Ahead"
                  src="/images/high-dive.jpg"
                  width="210"
                  height="221"
                />
                <p>
                  <em>Most problems are solved outside of the comfort zone.</em>
                </p>
                <p>
                  <i>
                    <br />
                  </i>
                </p>
              </div>

              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">How We Think</a>
                  </li>
                </ul>
                <h1>How We Think</h1>
                <h3>Guiding Organizational Transformation</h3>
                <p>
                  How, in a world of increasing complexity and rapid change, can
                  you create a capable organization? Capable of innovating not
                  just to keep up but to get ahead? The best way: management shares, rather than owns, responsibility for thinking and problem-solving.
                </p>
                <p>
                  Managers may have been trained, in theory, to solve problems at all levels of the organization, but they cannot remain sufficiently expert at every level for timely action. Expertise is built from daily experience. It resides in people at every level of an organization. But it goes untapped if managers expect too little of operational staff in terms of thinking, adapting, and innovating.
                </p>
                <p>
                  The only way to achieve continuous improvement in an organization is for all of its people to rediscover what it means to step back, evaluate the issues and facts before them, experiment with solutions, and incorporate what works in practice. Continuously.
                </p>
                <p>
                  Engage managers and workers directly in defining a fundamental, critical business problem and building the internal capacity to solve it. No ready-made certification course, no off-the-shelf workshop, no checklist of best practices has this same power to transform an organization.
                </p>
                <p>
                  Start not with a prescription but with a diagnostic conversation. Proceed not with a "fix" but a process. Success is achieved once the process is self-sufficient.
                </p>
                <div className="testimonial">
                  <h3>Testimonial</h3>
                  <blockquote>
                    "The people throughout the organization have increased their
                    ability to recognize that they have problems, and discuss
                    and work through the problems. And, they have gone one
                    important step further: they have created the ability to
                    adapt new and different processes, measure them, and respond
                    to the new process data. They are continuing to find ways to
                    really improve."{' '}
                    <cite> Senior executive, service industry</cite>
                  </blockquote>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
