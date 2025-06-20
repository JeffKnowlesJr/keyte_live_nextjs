import { SubpageLayout } from '../../components'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Contact - Connect with Beau Keyte | Keyte Group',
  description: 'Connect with Beau Keyte and the Keyte Group team. Learn about optimizing organizational performance and building new capacity using existing human resources.',
  keywords: 'contact Beau Keyte, Keyte Group contact, lean consulting contact, organizational performance consulting, continuous improvement expert',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Contact - Connect with Beau Keyte | Keyte Group',
    description: 'Connect with Beau Keyte and learn about optimizing organizational performance and building new capacity.',
    url: 'https://www.keytegroup.com/contact/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/treasure-chest.jpg',
        width: 210,
        height: 260,
        alt: 'Realize the creative potential within your organization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Keyte Group',
    description: 'Connect with Beau Keyte for organizational performance consulting',
    images: ['https://www.keytegroup.com/images/treasure-chest.jpg'],
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/contact/',
  },
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="contact-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Keyte Group",
            "description": "Contact information and connection details for Beau Keyte and the Keyte Group team",
            "url": "https://www.keytegroup.com/contact/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Keyte Group",
              "founder": {
                "@type": "Person",
                "name": "Beau Keyte",
                "jobTitle": "Founder and Continuous Improvement Expert",
                "sameAs": "https://www.linkedin.com/in/beaukeyte"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Professional Inquiry",
                "url": "https://www.linkedin.com/in/beaukeyte"
              },
              "areaServed": "Worldwide",
              "serviceType": [
                "Organizational Performance Optimization",
                "Continuous Improvement Consulting", 
                "Lean Methodology Training",
                "Leadership Development"
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
                  <li className="active"><a href="/contact/">Contact</a></li>
                  <li className="divider"></li>
                </ul>
                <img className="ccm-image-block" alt="" src="/images/treasure-chest.jpg" width="210" height="260" />
                <p><em>Realize the creative potential within your organization.</em></p>
              </div>

              <div className="nine columns">
                <ul className="breadcrumbs">
                  <li><a href="/">Home</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <h1>Contact</h1>
                <p>Learn about optimizing organizational performance and building new capacity using existing human resources.</p>
                <p><a href="https://www.linkedin.com/in/beaukeyte" title="Connect on LinkedIn" target="_top">Connect with Beau Keyte on LinkedIn</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubpageLayout>
  )
}
