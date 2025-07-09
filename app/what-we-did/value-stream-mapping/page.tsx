import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Value Stream Mapping (VSM) for Process Improvement - Keyte Group',
  description:
    'Keyte Group is a thought-leader in Value Stream Mapping with 26 years of experience. VSM helps teams diagnose system performance issues and design better processes for improved customer value.',
  keywords:
    'value stream mapping, VSM, process improvement, lean methodology, organizational transformation, Keyte Group, thought-leader',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Value Stream Mapping (VSM) for Process Improvement - Keyte Group',
    description:
      'Keyte Group is a thought-leader in Value Stream Mapping with 26 years of experience. VSM helps teams diagnose system performance issues and design better processes for improved customer value.',
    url: 'https://www.keytegroup.com/what-we-did/value-stream-mapping/',
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
    title: 'Value Stream Mapping (VSM) for Process Improvement - Keyte Group',
    description:
      'Thought-leader in Value Stream Mapping with 26 years of experience helping teams improve processes and customer value.',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png']
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/what-we-did/value-stream-mapping/'
  }
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="value-stream-mapping-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Value Stream Mapping (VSM) for Process Improvement',
            description:
              'Keyte Group is a thought-leader in Value Stream Mapping with 26 years of experience. VSM helps teams diagnose system performance issues and design better processes for improved customer value.',
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
            url: 'https://www.keytegroup.com/what-we-did/value-stream-mapping/',
            mainEntityOfPage:
              'https://www.keytegroup.com/what-we-did/value-stream-mapping/'
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
                  <li className="active">
                    <a href="value-stream-mapping" target="_self" className="">
                      Value Stream Mapping
                    </a>
                  </li>
                  <li>
                    <a
                      href="collaborative-learning"
                      target="_self"
                      className=""
                    >
                      Collaborative Learning
                    </a>
                  </li>
                  <li>
                    <a href="a3-thinking" target="_self" className="">
                      A3 Thinking
                    </a>
                  </li>
                  <li>
                    <a href="leadership-coaching" target="_self" className="">
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
                    <a href="#">Value Stream Mapping</a>
                  </li>
                </ul>
                <h1>Value Stream Mapping (VSM) - Keyte Group</h1>
                <h3>Guiding Organizational Transformation</h3>
                <p>
                  Value Stream Mapping (VSM) is a tool (set of tools and
                  techniques) that is/are used to help people learn and change
                  together. We've been mapping processes for 26 years and
                  produced three publications on the subject; we are
                  thought-leaders in the field.
                </p>
                <p>
                  Whether a project's scope is small or sweeping, the
                  fundamentals are the same. Yet the approach is never
                  cookie-cutter. Teams are coached as they themselves diagnose
                  system performance issues and design something better –
                  delivering better value to the customer and making front line
                  workers better able to do their jobs. Each team, each problem,
                  has qualities that are unique.
                </p>
                <p>
                  Value Stream Mapping sounds technical and it is. Perhaps even
                  a bit tedious. But it gets to the root of things and opens up
                  the possibility of changing thought and behavior. And then the
                  learning is leveraged.
                </p>
                <p>
                  That's right: don't stop with the technical stuff. All change
                  has social implications for your organization, and VSM is also
                  a great tool for bringing an organization together in many
                  ways. Changing the work is just the beginning; the management
                  system also needs to adapt to the changes, because the
                  connection between the two is critical to sustaining
                  improvements.
                </p>
                <div className="testimonial">
                  <h3>Testimonial</h3>
                  <blockquote>
                    <p>
                      "A big benefit of value stream mapping is that employees
                      understand we were committed to custom work as an
                      important way to grow our business. All of a sudden,
                      people were working together. It has made this a better
                      place to work." <cite>Restaurant equipment supplier</cite>
                    </p>
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
