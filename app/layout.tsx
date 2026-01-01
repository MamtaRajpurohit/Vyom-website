import type { Metadata } from 'next'
import { Space_Grotesk} from 'next/font/google'
import './globals.css'
import StructuredData from './structured-data'

const spaceFont = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space', 
  display: 'swap',
})
export const metadata: Metadata = {
  title: {
    default: 'Vyom Voyage | TCET Space Club | CubeSat Development',
    template: '%s | Vyom Voyage',
  },
  description: 'Vyom Voyage - Student SpaceTech Initiative at TCET Mumbai. Exploring innovation beyond the horizon through CubeSat development, space research, and international competitions. Join our space enthusiasts club!',
  keywords: [
    'Vyom Voyage',
    'TCET',
    'Thakur College of Engineering and Technology',
    'Space Club',
    'CubeSat',
    'CanSat',
    'Space Technology',
    'Student Space Club',
    'Mumbai',
    'Space Research',
    'Satellite Development',
    'Space Engineering',
    'Astronomy',
    'Space Sciences',
    'Student Organization',
    'Space Innovation',
  ],
  authors: [{ name: 'Vyom Voyage', url: 'https://vyomvoyage.tcet.ac.in' }],
  creator: 'Vyom Voyage',
  publisher: 'Vyom Voyage - TCET',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://vyomvoyage.tcet.ac.in',
    siteName: 'Vyom Voyage',
    title: 'Vyom Voyage | TCET Space Club | CubeSat Development',
    description: 'Exploring Innovation Beyond the Horizon – Student SpaceTech Initiative at TCET. Developing CubeSats and exploring the cosmos.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vyom Voyage - TCET Space Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyom Voyage | TCET Space Club',
    description: 'Exploring Innovation Beyond the Horizon – Student SpaceTech Initiative at TCET',
    images: ['/og-image.jpg'],
    creator: '@vyomvoyage',
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
  alternates: {
    canonical: 'https://vyomvoyage.tcet.ac.in',
  },
  category: 'Education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceFont.variable}>
      <head>
        <StructuredData />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-tap-highlight" content="no" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" sizes="64x64" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}


