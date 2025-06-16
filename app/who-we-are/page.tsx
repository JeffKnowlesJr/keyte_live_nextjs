import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Who We Are - Hands-On Problem Solvers | Keyte Group',
  description: 'Meet the Keyte Group team of seasoned practitioners and consultants specializing in lean methodology, organizational transformation, and continuous improvement solutions.',
  keywords: 'Keyte Group team, lean consultants, problem solvers, organizational transformation, continuous improvement experts, Beau Keyte',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Who We Are - Hands-On Problem Solvers | Keyte Group',
    description: 'Meet the Keyte Group team of seasoned practitioners and consultants specializing in lean methodology and organizational transformation.',
    url: 'https://www.keytegroup.com/who-we-are/',
    siteName: 'The Keyte Group',
    images: [
      {
        url: 'https://www.keytegroup.com/images/stopping-train.jpg',
        width: 209,
        height: 167,
        alt: 'Heroic Efforts Mean Broken System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Who We Are - Keyte Group',
    description: 'Seasoned practitioners specializing in lean methodology and organizational transformation',
    images: ['https://www.keytegroup.com/images/stopping-train.jpg'],
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/who-we-are/',
  },
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="who-we-are-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Who We Are - Keyte Group",
            "description": "Learn about the Keyte Group team of seasoned practitioners specializing in lean methodology and organizational transformation",
            "url": "https://www.keytegroup.com/who-we-are/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Keyte Group",
              "description": "Hands-on problem solvers specializing in lean strategies, shop floor transformations, enterprise transformations, and continuous improvement",
              "founder": {
                "@type": "Person",
                "name": "Beau Keyte"
              },
              "serviceArea": "Global",
              "areaServed": "Worldwide",
              "knowsAbout": [
                "Policy deployment",
                "Lean strategies", 
                "Shop floor transformations",
                "Enterprise transformations",
                "Office and service lean",
                "Healthcare lean",
                "Human resource strategies",
                "Lean costing applications",
                "Lean metrics"
              ]
            }
          })
        }}
      />

      <div className="foundation-row">
        <div className="eleven columns centered">
          <div className="foundation-row">
            <div id="headerdots">
              <img src="/images/headerdots.png" alt="" role="presentation" />
            </div>
            <div id="maincontent" className="eleven columns content">
              <div className="foundation-row">
                
          <div className="three columns hide-for-small">
            <ul className="side-nav">
                                <li className="active"><a href="/who-we-are/">Who We Are</a></li>
                                <li className="divider"></li>
                                <li><a href="beau-keyte" target="_self" className="">Beau Keyte</a></li>
                            </ul>
            <img className="ccm-image-block" alt="Heroic Efforts Mean Broken System" src="/images/stopping-train.jpg" width="209" height="167" />
                            <p><em>Heroic efforts are a symptom of a broken system.<br /></em></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">Who We Are</a></li>
            </ul>
            <h1>We Are Hands-On Problem Solvers</h1>
                            <p>We are seasoned practitioners, most of whom also own their own consultancies. Unlike many management consulting companies, we don't have partners selling services and then delegating the actual work to less experienced staff. We have the flexibility to offer the best person for the application you need, and are committed to keeping the right people in front of you at all times.</p>
                            <p>Our network includes professionals in a wide range of disciplines, including policy deployment, lean strategies, shop floor transformations, enterprise transformations, office and service lean, healthcare lean, human resource strategies, lean costing applications, lean metrics, etc.</p>
                            
                            <div className="testimonial">
                                <h3>Testimonial</h3>
                                <blockquote>"We've tended to be functionally organized, yet when we look for lean improvements in order-to-cash and product development, for example, these projects cross over several functional areas. You start to realize that what is happening throughout the company affects how we meet customer needs." <cite> Office furniture manufacturing client</cite></blockquote>
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
