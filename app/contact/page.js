import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Contact Stearling Reinstatement | Instruct a Reinstatement Cost Assessment',
  description: 'Contact Stearling Reinstatement to instruct a RICS-regulated assessment. 24-hour response. 17 Hanover Square, London.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/contact',
    siteName: 'Stearling Reinstatement',
    title: 'Contact Stearling Reinstatement | RICS Reinstatement Cost Assessment',
    description: 'Speak with a RICS-regulated reinstatement cost assessment surveyor. Written fee estimate within 24 hours. No contract required. 17 Hanover Square, London.',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'Contact Stearling Reinstatement - RICS reinstatement cost assessment surveyors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Stearling Reinstatement | RICS Reinstatement Cost Assessment',
    description: 'Speak with a RICS-regulated reinstatement cost assessment surveyor. Written fee estimate within 24 hours. No contract required.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://stearlingreinstatement.com/#organization',
  name: 'Stearling Reinstatement',
  description: 'RICS-regulated reinstatement cost assessments for managing agents, freeholders, leaseholders and property professionals across the UK.',
  url: 'https://stearlingreinstatement.com',
  telephone: '+442031788099',
  email: 'info@stearlingreinstatement.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Hanover Square',
    addressLocality: 'London',
    postalCode: 'W1S 1BN',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5128,
    longitude: -0.1439,
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  priceRange: '££',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:30',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@stearlingreinstatement.com',
    telephone: '+442031788099',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
}

const faqItems = [
  { question: 'How quickly will you respond to my enquiry?', answer: 'All enquiries receive a response within 24 hours on business days.' },
  { question: 'Is there any commitment when I make an enquiry?', answer: 'None. We provide a written fee estimate before any work begins - you instruct only when you are ready to proceed.' },
  { question: 'What information should I have ready?', answer: 'Property address, approximate floor area, construction type, number of storeys, and whether you need a desktop or on-site assessment. We can work with estimates at the enquiry stage.' },
  { question: 'Can I instruct for multiple properties at once?', answer: 'Yes. Provide details of each property and we will return a consolidated quote for the full portfolio under a single engagement letter.' },
  { question: 'Are you RICS-regulated and PI insured?', answer: 'Yes. All assessments are conducted by or under the direct supervision of a RICS-registered member, and we carry comprehensive professional indemnity insurance on every instruction.' },
]

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* HEADER */}
      <section className="hero-bg py-10 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              Get in touch. We respond within 24 hours.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              Complete the form below to speak directly with a RICS specialist. We will send a written fee estimate within 24 hours.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { label: 'Email', value: 'info@stearlingreinstatement.com', href: 'mailto:info@stearlingreinstatement.com' },
                { label: 'Address', value: '17 Hanover Square, London W1S 1BN', href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-3 items-baseline">
                  <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-[0.15em] w-20 shrink-0">{label}</p>
                  {href
                    ? <a href={href} className="text-[#0d1b3e] font-semibold hover:text-[#0057FF] transition-colors">{value}</a>
                    : <p className="text-[#0d1b3e] font-semibold">{value}</p>
                  }
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact-form" className="btn-shine">Request Your Assessment</a>
              <a href="/services" className="btn-ghost">Our Services</a>
            </div>
          </div>
          <div className="hero-img-pulse relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]">
            <Image
              src="/AdobeStock_1956380728.jpeg"
              alt="Stearling Reinstatement reinstatement cost assessment surveyors"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated. PI insured. 24-hour response on all business-day enquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />
      <TestimonialsSection />
      <ContactSection heading="Get a written fee estimate, no commitment required." />
      <FaqSection description="Common questions about instructing Stearling Reinstatement." items={faqItems} />
    </main>
  )
}







