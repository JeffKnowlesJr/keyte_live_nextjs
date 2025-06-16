import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The Keyte Group - Industry Support, Teaching & Professional Insights',
    template: '%s | Keyte Group'
  },
  description: 'Beau Keyte shares professional insights, educational resources, and thought leadership on continuous improvement, industry support, and organizational development.',
  keywords: 'Beau Keyte, industry support, teaching, writing, continuous improvement education, lean methodology, organizational transformation, Keyte Group',
  authors: [{ name: 'Beau Keyte' }],
  creator: 'Beau Keyte',
  publisher: 'The Keyte Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.keytegroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.keytegroup.com',
    siteName: 'The Keyte Group',
    title: 'The Keyte Group - Industry Support & Professional Insights',
    description: 'Professional insights and educational resources on continuous improvement, industry support, and organizational development.',
    images: [
      {
        url: '/images/Keyte_Group_logo_large.png',
        width: 800,
        height: 600,
        alt: 'The Keyte Group Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Keyte Group',
    description: 'Professional insights and educational resources on continuous improvement',
    images: ['/images/Keyte_Group_logo_large.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to add this when you set up Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/keyte_small_dgq_icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Foundation CSS Framework */}
        <link rel="stylesheet" href="/css/foundation.css" media="screen" />
        {/* App-specific styles */}
        <link rel="stylesheet" href="/css/app.css" media="screen" />
        {/* Nivo Slider styles */}
        <link rel="stylesheet" href="/css/nivo-slider.css" media="screen" />
        {/* Default theme styles */}
        <link rel="stylesheet" href="/css/default.css" media="screen" />
        {/* JavaScript Libraries */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="/js/jquery.foundation.navigation.js"></script>
        <script src="/js/jquery.foundation.accordion.js"></script>
        <script src="/js/jquery.foundation.buttons.js"></script>
        <script src="/js/jquery.offcanvas.js"></script>
        <script src="/js/modernizr.foundation.js"></script>
        <script src="/js/jquery.nivo.slider.pack.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function () {
              // Initialize Foundation components when DOM is ready
              if (typeof $ !== 'undefined' && $.fn.foundationNavigation) {
                $(document).foundationNavigation()
              }
              if (typeof $ !== 'undefined' && $.fn.foundationAccordion) {
                $(document).foundationAccordion()
              }
            })
          `
        }} />
      </head>
      <body id="page" className="off-canvas slide-nav">
        {children}
      </body>
    </html>
  )
}
