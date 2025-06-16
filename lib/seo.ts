import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
  image?: string
}

export const generateSEO = ({ title, description, path = '', image }: SEOProps): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keytegroup.com'
  const fullUrl = `${baseUrl}${path}`
  const defaultImage = `${baseUrl}/images/keyte-group-logo.png`
  
  return {
    title: `${title} - Keyte Group`,
    description,
    openGraph: {
      title: `${title} - Keyte Group`,
      description,
      url: fullUrl,
      siteName: 'Keyte Group',
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Keyte Group`,
      description,
      images: [image || defaultImage],
    },
    alternates: {
      canonical: fullUrl,
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
  }
}
