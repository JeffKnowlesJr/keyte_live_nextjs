import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keyte Group - Lean Enterprise Solutions',
  description: 'Lean Enterprise Transformation, Leadership Coaching, and Learning Experiences',
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
        <script src="/js/jquery.foundation.navigation.js" defer></script>
        <script src="/js/jquery.foundation.accordion.js" defer></script>
        <script src="/js/jquery.foundation.buttons.js" defer></script>
        <script src="/js/jquery.offcanvas.js" defer></script>
        <script src="/js/modernizr.foundation.js" defer></script>
        <script src="/js/jquery.nivo.slider.pack.js" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function () {
              // Initialize Foundation components when DOM is ready
              if (typeof $ !== 'undefined') {
                $(document).foundationNavigation()
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
