import { SubpageLayout } from '../../components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact - Connect with Beau Keyte',
  description:
    'Connect with Beau Keyte for professional insights, industry support, and educational resources on continuous improvement and lean methodology.',
  keywords:
    'contact Beau Keyte, Keyte Group contact, industry support, teaching, writing, continuous improvement expert, professional insights',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Contact - Connect with Beau Keyte',
    description:
      'Connect with Beau Keyte for professional insights, industry support, and educational resources on continuous improvement.',
    url: 'https://www.keytegroup.com/contact/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/treasure-chest.jpg',
        width: 210,
        height: 260,
        alt: 'Realize the creative potential within your organization'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact',
    description:
      'Connect with Beau Keyte for professional insights and industry support',
    images: ['https://www.keytegroup.com/images/treasure-chest.jpg']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/contact/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Keyte Group',
            description:
              'Connect with Beau Keyte for professional insights, industry support, teaching, writing, and redefining continuous improvement methodologies',
            url: 'https://www.keytegroup.com/contact/',
            mainEntity: {
              '@type': 'Organization',
              name: 'Keyte Group',
              founder: {
                '@type': 'Person',
                name: 'Beau Keyte',
                jobTitle: 'Founder and Continuous Improvement Expert',
                sameAs: 'https://www.linkedin.com/in/beaukeyte'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Professional Inquiry',
                url: 'https://www.linkedin.com/in/beaukeyte',
                description:
                  'Connect for industry support, teaching, writing, and professional insights'
              },
              areaServed: 'Worldwide',
              serviceType: [
                'Industry Support',
                'Teaching and Writing',
                'Continuous Improvement',
                'Professional Insights',
                'Lean Methodology'
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
                    <a href="/contact/">Contact</a>
                  </li>
                  <li className="divider"></li>
                </ul>
                <img
                  className="ccm-image-block"
                  alt=""
                  src="/images/treasure-chest.jpg"
                  width="210"
                  height="260"
                />
                <p>
                  <em>
                    Discover professional insights and contemporary approaches
                    to continuous improvement.
                  </em>
                </p>
              </div>

              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <h1>Contact</h1>
                <h3>Professional Insights & Industry Support</h3>
                <p>
                  Beau Keyte shares professional insights, educational
                  resources, and thought leadership on industry support,
                  teaching, writing, and redefining continuous improvement
                  methodologies.
                </p>
                <p>
                  Whether you're interested in his latest publications, seeking
                  industry insights, or exploring contemporary approaches to
                  continuous improvement, Beau welcomes connections with
                  professionals who value out-of-the-box thinking and critical
                  analysis.
                </p>
                <div className="contact-options">
                  <h4>Connect for:</h4>
                  <ul>
                    <li>
                      <strong>Industry Support</strong> - Professional insights
                      and guidance
                    </li>
                    <li>
                      <strong>Teaching & Writing</strong> - Educational
                      resources and publications
                    </li>
                    <li>
                      <strong>Redesigning Continuous Improvement</strong> -
                      Contemporary methodologies
                    </li>
                  </ul>
                </div>
                <p>
                  <a
                    href="https://www.linkedin.com/in/beaukeyte"
                    title="Connect on LinkedIn"
                    target="_top"
                    className="button"
                  >
                    Connect with Beau Keyte on LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
