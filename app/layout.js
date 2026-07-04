import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '-font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '-font-display',
})

export const metadata = {
  metadataBase: new URL('https://reinstatementcostassessment.org'),
  title: {
    default: 'RICS Reinstatement Cost Assessment UK | Stearling Reinstatement',
    template: '%s | Stearling Reinstatement',
  },
  description:
    'London-based RICS-regulated Reinstatement Cost Assessments for UK properties, delivered in 24 hours. Trusted by managing agents, RTM companies, freeholders and portfolio landlords across England.',
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
    'Reinstatement Cost Assessment London',
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
    siteName: 'Stearling Reinstatement',
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | Stearling Reinstatement',
    description:
      '80% of UK buildings are underinsured. RICS-regulated Reinstatement Cost Assessment for managing agents, freeholders and leaseholders, delivered in 24 hours.',
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
    title: 'Reinstatement Cost Assessment UK | RICS-Regulated | Stearling Reinstatement',
    description:
      '80% of UK buildings are underinsured. Get a RICS-regulated Reinstatement Cost Assessment, delivered in 24 hours.',
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

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://reinstatementcostassessment.org/#organization',
      name: 'Stearling Reinstatement',
      url: 'https://reinstatementcostassessment.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reinstatementcostassessment.org/cr-monogram.svg',
        width: 200,
        height: 200,
      },
      description:
        'RICS-regulated reinstatement cost assessments for managing agents, freeholders, leaseholders and property professionals across the UK.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '17 Hanover Square',
        addressLocality: 'London',
        postalCode: 'W1S 1BN',
        addressCountry: 'GB',
      },
      telephone: '+442031788099',
      email: 'info@rca-ltd.com',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      priceRange: 'Â£',
      knowsAbout: [
        'Reinstatement Cost Assessment',
        'RICS Rebuild Cost Assessment',
        'Buildings Insurance Valuation',
        'Listed Buildings Assessment',
        'Block of Flats Insurance Valuation',
        'Commercial Property Reinstatement',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Reinstatement Cost Assessment Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desktop Reinstatement Cost Assessment',
              description:
                'BCIS-indexed rebuild cost modelling for standard residential and commercial property. Delivered within 24 hours of instruction.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'On-Site Reinstatement Cost Survey',
              description:
                'RICS surveyor attends in person for full measurement and material assessment. Required for listed, heritage and complex buildings.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '3-Year Protection Plan',
              description:
                'One instruction covers three years of RICS compliance Ã¢â‚¬â€ full assessment in year one, annual BCIS-indexed renewal reports before each renewal date.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://reinstatementcostassessment.org/#website',
      url: 'https://reinstatementcostassessment.org',
      name: 'Stearling Reinstatement',
      description:
        'RICS-regulated reinstatement cost assessments for UK properties.',
      publisher: { '@id': 'https://reinstatementcostassessment.org/#organization' },
      inLanguage: 'en-GB',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${cormorant.variable} light`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
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

