import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

export const metadata = {
  metadataBase: new URL('https://reinstatementcostassessment.org'),
  title: {
    default: 'RICS Reinstatement Cost Assessment UK | RCA Ltd',
    template: '%s | RCA Ltd',
  },
  description:
    'London-based RICS-regulated Reinstatement Cost Assessments for UK properties, delivered in 48 hours. Trusted by managing agents, RTM companies, freeholders and portfolio landlords across England.',
  keywords: [
    'reinstatement cost assessment',
    'rebuild cost assessment',
    'reinstatement cost assessment UK',
    'rebuild cost assessment UK',
    'reinstatement cost assessment London',
    'rebuild cost assessment London',
    'managing agents reinstatement cost assessment',
    'RTM company insurance valuation',
    'block of flats reinstatement cost',
    'RICS surveyor London',
    'building insurance valuation London',
    'RICS regulated reinstatement cost assessment',
    'building insurance valuation UK',
    'underinsurance UK',
    'BCIS rebuild cost',
    'commercial property reinstatement London',
    'desktop rebuild cost assessment',
    'on-site reinstatement survey London',
    'RCA London',
    'professional indemnity surveyor',
  ],
  icons: {
    icon: '/rca48.png',
    shortcut: '/rca48.png',
    apple: '/rca48.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://reinstatementcostassessment.org',
    siteName: 'RCA Ltd',
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | RCA Ltd',
    description:
      '80% of UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment for managing agents, freeholders and leaseholders, delivered in 48 hours.',
    images: [
      {
        url: '/rebuild-cost-assessment-london.jpeg',
        width: 1200,
        height: 630,
        alt: 'Reinstatement Cost Assessment of a London property',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | RCA Ltd',
    description:
      '80% of UK buildings are underinsured. Get a RICS-regulated Reinstatement Cost Assessment, delivered in 48 hours.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${cormorant.variable} light`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3MHVWR8FGB"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3MHVWR8FGB');
          gtag('config', 'AW-11028386067');
        `}} />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:font-bold focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
