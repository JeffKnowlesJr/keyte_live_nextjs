import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Collaborative Learning for Organizational Excellence',
  description:
    'Discover how collaborative learning approaches drive organizational excellence and sustainable improvement. Keyte Group specializes in building learning organizations that continuously adapt and improve.',
  keywords:
    'collaborative learning, organizational excellence, continuous improvement, learning organizations, Keyte Group, lean methodology',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Collaborative Learning for Organizational Excellence',
    description:
      'Discover how collaborative learning approaches drive organizational excellence and sustainable improvement. Keyte Group specializes in building learning organizations that continuously adapt and improve.',
    url: 'https://www.keytegroup.com/what-we-did/collaborative-learning/',
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
    title: 'Collaborative Learning for Organizational Excellence',
    description:
      'Collaborative learning approaches drive organizational excellence and sustainable improvement.',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/what-we-did/collaborative-learning/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="collaborative-learning-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Collaborative Learning for Organizational Excellence',
            description:
              'Discover how collaborative learning approaches help organizations build internal capacity for continuous improvement. Keyte Group specializes in team-based problem solving and knowledge transfer.',
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
            url: 'https://www.keytegroup.com/what-we-did/collaborative-learning/',
            mainEntityOfPage:
              'https://www.keytegroup.com/what-we-did/collaborative-learning/'
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
                  <li>
                    <a href="/what-we-did/">What We Did</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="/what-we-did/value-stream-mapping" target="_self" className="">
                      Value Stream Mapping
                    </a>
                  </li>
                  <li className="active">
                    <a
                      href="/what-we-did/collaborative-learning"
                      target="_self"
                      className=""
                    >
                      Collaborative Learning
                    </a>
                  </li>
                  <li>
                    <a href="/what-we-did/a3-thinking" target="_self" className="">
                      A3 Thinking
                    </a>
                  </li>
                  <li>
                    <a href="/what-we-did/leadership-coaching" target="_self" className="">
                      Leadership Coaching
                    </a>
                  </li>
                </ul>
                <img
                  className="ccm-image-block"
                  alt="Light Bulb on Training Wheels"
                  src="/images/light-bulb.jpg"
                  width="210"
                  height="240"
                />
                <p>
                  <em>Think for a little while.</em>
                </p>
              </div>
              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/what-we-did/">What We Did</a>
                  </li>
                  <li>
                    <a href="#">Collaborative Learning</a>
                  </li>
                </ul>
                <h1>Collaborative Learning</h1>
                <h3>Guiding Organizational Transformation</h3>
                <p>
                  Collaborative learning approaches help organizations improve
                  operational performance through implementing and managing
                  continuous improvement. Our methodology focuses on building
                  internal capacity for sustained change.
                </p>
                <p>
                  We work with teams to develop their problem-solving
                  capabilities, ensuring that learning is shared across the
                  organization. This approach creates a foundation for ongoing
                  improvement that doesn't depend on external consultants.
                </p>
                <p>Our collaborative learning process includes:</p>
                <ul>
                  <li>Team-based problem identification and analysis</li>
                  <li>
                    Structured learning sessions with real workplace
                    applications
                  </li>
                  <li>Cross-functional collaboration to break down silos</li>
                  <li>Knowledge transfer mechanisms to spread learning</li>
                  <li>
                    Regular updates, engagement, and strategic counsel for
                    management
                  </li>
                  <li>
                    Alignment of management systems and policies with changes in
                    day-to-day operations
                  </li>
                </ul>
                <p>
                  The goal is to create an organization where continuous
                  improvement becomes part of the culture, not just a program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
