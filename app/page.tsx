import MainLayout from '@/components/layout/MainLayout'
import HomeSlider from '@/components/HomeSlider'
import FeaturedContent from '@/components/home/FeaturedContent'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Keyte Group - Industry Support, Teaching & Professional Insights',
  description: 'Beau Keyte shares professional insights, educational resources, and thought leadership on continuous improvement, industry support, and organizational development.',
  keywords: 'Beau Keyte, industry support, teaching, writing, continuous improvement education, lean methodology, organizational transformation',
  authors: [{ name: 'Beau Keyte' }],
  openGraph: {
    title: 'The Keyte Group - Industry Support & Professional Insights',
    description: 'Beau Keyte shares professional insights, educational resources, and thought leadership on continuous improvement and organizational development.',
    url: 'https://www.keytegroup.com/',
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
    title: 'The Keyte Group',
    description: 'Professional insights and educational resources on continuous improvement',
    images: ['https://www.keytegroup.com/images/Keyte_Group_logo_large.png'],
  },
  alternates: {
    canonical: 'https://www.keytegroup.com/',
  },
}

export default function HomePage() {
  return (
    <MainLayout>
      <Script
        id="homepage-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Keyte Group",
            "alternateName": "The Keyte Group",
            "url": "https://www.keytegroup.com",
            "logo": "https://www.keytegroup.com/images/Keyte_Group_logo_large.png",
            "description": "Professional insights and educational resources for industry support, teaching, and continuous improvement methodologies",
            "founder": {
              "@type": "Person",
              "name": "Beau Keyte",
              "jobTitle": "Founder and Continuous Improvement Expert",
              "alumniOf": "University of Michigan",
              "sameAs": "https://www.linkedin.com/in/beaukeyte"
            },
            "sameAs": [
              "https://www.linkedin.com/in/beaukeyte"
            ],
            "knowsAbout": ["Lean Methodology", "Continuous Improvement", "Industry Support", "Teaching and Writing", "Organizational Development"]
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
              <HomeSlider />
              <FeaturedContent />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}


/*

// Put some ascii art here to show the structure of the shade down menu
// and the main content wrapper and the menu backing

      <div className="foundation-row" id="maincontentwrapper">
        <div className="eleven columns centered">
          <div className="foundation-row" id="">
            <div
              id="menu-backing"
              className="eleven columns content"
              style={{ height: '9em', position: 'relative', left: '46px' }}
            ></div>
          </div>
        </div>
      </div>




*/