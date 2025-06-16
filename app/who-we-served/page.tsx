import SubpageLayout from '@/components/layout/SubpageLayout'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Who We Served - Client Industries & Success Stories | Keyte Group',
  description: 'Explore our diverse client portfolio across manufacturing, healthcare, service industries, and more. See how we\'ve helped organizations achieve lean transformation success.',
  keywords: 'Keyte Group clients, lean transformation success stories, manufacturing consulting, healthcare lean, service industry improvement, client testimonials',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'Who We Served - Client Industries & Success Stories | Keyte Group',
    description: 'Explore our diverse client portfolio and lean transformation success stories across multiple industries.',
    url: 'https://www.keytegroup.com/who-we-served/',
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
    title: 'Who We Served - Keyte Group',
    description: 'Diverse client portfolio and lean transformation success stories',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png'],
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/who-we-served/',
  },
}

export default function Page() {
  return (
    <SubpageLayout>
      <Script
        id="who-we-served-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Who We Served - Client Portfolio",
            "description": "Comprehensive portfolio of clients served across diverse industries including manufacturing, healthcare, and service sectors",
            "url": "https://www.keytegroup.com/who-we-served/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Keyte Group",
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional Experience",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Manufacturing Industry"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "credentialCategory": "Professional Experience",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Healthcare Industry"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Professional Experience", 
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Service Industry"
                  }
                }
              ],
              "knowsAbout": [
                "Manufacturing Lean Implementation",
                "Healthcare Process Improvement", 
                "Service Industry Optimization",
                "Supply Chain Management",
                "Quality Management Systems"
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
                                <li className="active"><a href="/who-we-served/">Who We Have Served</a></li>
                                <li className="divider"></li>
                                <li><a href="clients-industry/" target="_self" className="">Clients By Industry</a></li>
                            </ul>
            <img className="ccm-image-block" alt="Solutions Lie Outside The Comfort Zone" src="/images/detour-sign.jpg" width="210" height="225" />
                            <p><i>We help you respond nimbly to change.</i></p>
          </div>

          <div className="nine columns">
            
            <ul className="breadcrumbs">
              <li><a href="/">Home</a></li>
              <li><a href="#">Who We Have Served</a></li>
            </ul>
            <h1>Who We Have Served</h1>
                            <p>Organizations across various sectors benefit from analytical approaches, training, facilitation, and leadership coaching. Lean strategies and techniques can improve work processes in environments ranging from healthcare to financial services, manufacturing, and general office settings.</p>
                            
                            <h4>How Organizations Benefit</h4>
                            <ul>
                                <li>We stimulate new thinking about how to align workflow with performance goals.</li>
                                <li>We mobilize and guide systemic learning.</li>
                                <li>We support executive leaders and line managers as they enable their organizations to adapt and innovate.</li>
                            </ul>
                            
                            <h4>Client Examples</h4>
                            <p>Many organizations across diverse industries have benefited from these strategies, including <strong>Hadassah Hospital</strong> (Israel), <strong>Mayo Clinic</strong>, <strong>Michigan Hospital Association</strong>, <strong>Levi Strauss</strong>, <strong>Red Gold</strong>, <strong>Capital One</strong>, <strong>Wells Fargo</strong>, <strong>Bosch</strong>, <strong>Medtronics</strong>, and <strong>Pfizer</strong>.</p>
                            <p>For a complete list of clients by industry, <a title="Clients By Industry" href="clients-industry/">click here</a>.</p>
                            
                            <div className="testimonial">
                                <h3>Testimonial</h3>
                                <blockquote>"We were always struggling to find times to do things. The sheer amount of STUFF that occurs: ordering prescription refills, physical therapy, etc. Now we go about our daily tasks in a more organized fashion and are able to focus on true headaches, problems, and recurring issues. As a result, we are able to do more good things for our patients and ourselves." <cite> Office manager, large physician practice</cite></blockquote>
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
