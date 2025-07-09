import { SubpageLayout } from '../../components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'How We Think - Thought Leadership & Resources | Keyte Group',
  description:
    'Discover how to foster organizational improvement in a complex and rapidly changing world. Learn about the importance of shared responsibility for thinking and problem-solving throughout an organization. Explore how engaging managers and workers directly can build internal capacity for continuous improvement.',
  keywords:
    'lean methodology thought leadership, continuous improvement insights, Beau Keyte articles, lean enterprise book, organizational transformation philosophy',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'How We Think - Thought Leadership & Resources | Keyte Group',
    description:
      'Thought leadership on continuous improvement, lean methodology, and organizational transformation from Beau Keyte.',
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
      'Thought leadership on continuous improvement and lean methodology',
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
            name: 'How We Think - Thought Leadership',
            description:
              'Collection of thought leadership content, articles, and resources on continuous improvement and lean methodology',
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
                      href="perfecting-patient-journeys-book/"
                      target="_self"
                      className=""
                    >
                      Perfecting Patient Journeys Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="complete-lean-enterprise-book/"
                      target="_self"
                      className=""
                    >
                      Complete Lean Enterprise Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="articles-and-thoughts/"
                      target="_self"
                      className=""
                    >
                      Articles and thoughts
                    </a>
                    <ul>
                      <li>
                        <a
                          href="articles-and-thoughts/strategic-stockpile/"
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
                <h1>How we Think</h1>
                <h3>Guiding Organizational Transformation</h3>
                <p>
                  How, in a world of increasing complexity and rapid change, can
                  you create a capable organization? Capable of innovating not
                  just to keep up but to get ahead? The best approach involves
                  sharing responsibility for thinking and problem-solving across
                  all levels of the organization.
                </p>
                <p>
                  While managers might be trained to address problems throughout
                  the organization, maintaining expertise at every level for
                  timely action is challenging. Expertise often comes from daily
                  experience and exists throughout the organization. However,
                  this expertise may be underutilized if operational staff are
                  not encouraged to think, adapt, and innovate.
                </p>
                <p>
                  Achieving continuous improvement requires enabling individuals
                  to step back, assess issues and facts, experiment with
                  solutions, and integrate effective practices continuously.
                </p>
                <p>
                  Engaging managers and workers directly in defining critical
                  business problems and building the internal capacity to solve
                  them can be more effective than standardized training programs
                  or best-practice checklists.
                </p>
                <p>
                  The process begins with a diagnostic conversation rather than
                  a prescription, focusing on a process rather than a quick fix.
                  Success is achieved when external support is no longer needed.
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
