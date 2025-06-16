import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'What We Do - Current Services & Offerings | Keyte Group',
  description: 'Discover our current service offerings including learning experiences, leadership coaching, and lean enterprise transformation solutions.',
  keywords: 'Keyte Group services, learning experiences, leadership coaching, lean enterprise transformation, current offerings, business consulting',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'What We Do - Current Services & Offerings | Keyte Group',
    description: 'Current service offerings including learning experiences, leadership coaching, and lean enterprise transformation solutions.',
    url: 'https://www.keytegroup.com/what-we-do/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/Keyte_Group_logo_large.png',
        width: 800,
        height: 600,
        alt: 'The Keyte Group Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Do - Keyte Group',
    description: 'Discover our current service offerings including learning experiences, leadership coaching, and lean enterprise transformation solutions.',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png'],
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/what-we-do/',
  },
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="what-we-do-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lean Enterprise Solutions",
            "description": "Discover our current service offerings including learning experiences, leadership coaching, and lean enterprise transformation solutions.",
            "url": "https://www.keytegroup.com/what-we-do/",
            "provider": {
              "@type": "Organization",
              "name": "Keyte Group"
            },
            "serviceType": "Business Consulting",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lean Enterprise Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Learning Experiences",
                    "description": "Team-based learning and problem-solving approaches"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Leadership Coaching",
                    "description": "Executive and management development for lean transformation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lean Enterprise Transformation",
                    "description": "Comprehensive lean transformation services to mobilize and guide organizations through sustainable change"
                  }
                }
              ]
            }
          })
        }}
      />

      <div className="foundation-row">
        <div className="twelve columns">
          <div className="foundation-row">
            <div className="eleven columns centered">
              <div className="foundation-row">
                <div id="headerdots">
                  <img src="/images/headerdots.png" alt="" role="presentation" />
                </div>
                <div id="maincontent" className="eleven columns content">
                  {/* Content will be extracted from original HTML file */}
                  <h1>What We Do</h1>
                  <p>Content from what-we-do/index.html will be converted here.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
