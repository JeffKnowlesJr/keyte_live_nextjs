import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'What We Did - Lean Transformation Services | Keyte Group',
  description: 'Discover our proven lean transformation services including value stream mapping, collaborative learning, A3 thinking, and leadership coaching for sustainable organizational change.',
  keywords: 'lean transformation, value stream mapping, collaborative learning, A3 thinking, leadership coaching, organizational change, continuous improvement services',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'What We Did - Lean Transformation Services | Keyte Group',
    description: 'Proven lean transformation services including value stream mapping, collaborative learning, and leadership coaching for sustainable organizational change.',
    url: 'https://www.keytegroup.com/what-we-did/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/light-bulb.jpg',
        width: 210,
        height: 240,
        alt: 'Light Bulb on Training Wheels - We help you think for a little while',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Did - Keyte Group',
    description: 'Lean transformation services for sustainable organizational change',
    images: ['https://www.keytegroup.com/images/light-bulb.jpg'],
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/what-we-did/',
  },
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="what-we-did-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lean Transformation Services",
            "description": "Comprehensive lean transformation services to mobilize and guide organizations through sustainable change",
            "url": "https://www.keytegroup.com/what-we-did/",
            "provider": {
              "@type": "Organization",
              "name": "Keyte Group"
            },
            "serviceType": "Business Consulting",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lean Transformation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Value Stream Mapping",
                    "description": "Process analysis and improvement methodology"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Collaborative Learning",
                    "description": "Team-based learning and problem-solving approaches"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "A3 Thinking",
                    "description": "Structured problem-solving methodology"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leadership Coaching", 
                    "description": "Executive and management development for lean transformation"
                  }
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
                  <li className="active"><a href="/what-we-did/">What We Did</a></li>
                  <li className="divider"></li>
                  <li><a href="/what-we-did/value-stream-mapping" target="_self" className="">Value Stream Mapping</a></li>
                  <li><a href="/what-we-did/collaborative-learning" target="_self" className="">Collaborative Learning</a></li>
                  <li><a href="/what-we-did/a3-thinking" target="_self" className="">A3 Thinking</a></li>
                  <li><a href="/what-we-did/leadership-coaching" target="_self" className="">Leadership Coaching</a></li>
                </ul>
                <img className="ccm-image-block" alt="Light Bulb on Training Wheels" src="/images/light-bulb.jpg" width="210" height="240" />
                <p><em>We help you think for a little while.</em></p>
              </div>

              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li><a href="/">Home</a></li>
                  <li><a href="#">What We Did</a></li>
                </ul>
                <h1>What We Did</h1>
                <p>Organizations can be mobilized and guided through a transformation of their people and processes. By empowering the day-to-day operations staff to take ownership of problem-solving, sustainable change can be achieved. Support for organizational leaders can address the link between executive management systems and everyday operating functions.</p>
                <div className="testimonial">
                  <h3>Testimonial</h3>
                  <blockquote>"This [inpatient services] project was aimed at teaching us to fish instead of just bringing us a fish home for dinner. We could build a permanent skill base instead of continuing to rely on outside resources to keep us in a competitive position." <cite> Private non-profit hospital (500+ beds) and medical center</cite></blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
