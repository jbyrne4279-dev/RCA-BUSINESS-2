import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import GuideHero from '../components/GuideHero'
import GuideTrustBand from '../components/GuideTrustBand'
import RelatedPages from '../components/RelatedPages'

export const metadata = {
  title: 'Contact Us & Request a Quote',
  description: 'Contact Stearling Reinstatement to instruct a RICS-regulated assessment. 24-hour response. 17 Hanover Square, London.',
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/contact',
    siteName: 'Stearling Reinstatement',
    title: 'Contact Stearling Reinstatement | RICS Reinstatement Cost Assessment',
    description: 'Speak with a RICS-regulated Reinstatement Cost Assessment surveyor. Written fee estimate within 24 hours. No contract required. 17 Hanover Square, London.',
    images: [{ url: '/rebuild-cost-assessment-london.jpeg', width: 1200, height: 630, alt: 'Contact Stearling Reinstatement - RICS Reinstatement Cost Assessment surveyors' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Stearling Reinstatement | RICS Reinstatement Cost Assessment',
    description: 'Speak with a RICS-regulated Reinstatement Cost Assessment surveyor. Written fee estimate within 24 hours. No contract required.',
    images: ['/rebuild-cost-assessment-london.jpeg'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://stearlingreinstatement.com/#organization',
  name: 'Stearling Reinstatement',
  description: 'RICS-regulated Reinstatement Cost Assessments for managing agents, freeholders, leaseholders and property professionals across the UK.',
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

      <GuideHero
        image="/AdobeStock_1956380728.jpeg"
        imageAlt="Stearling Reinstatement Reinstatement Cost Assessment surveyors"
        badge="Get In Touch"
        headlineMain="We respond within"
        headlineAccent="24 hours."
        subtitle="Complete the form below to speak directly with a RICS specialist. We will send a written fee estimate within 24 hours - no commitment required."
        primaryLabel="Request Your Assessment"
        secondaryHref="/services"
        secondaryLabel="Our Services"
      />

      {/* CONTACT DETAILS STRIP */}
      <section className="bg-white py-10 px-6 md:px-10 border-b border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-center sm:text-left">
          {[
            { label: 'Email', value: 'info@stearlingreinstatement.com', href: 'mailto:info@stearlingreinstatement.com' },
            { label: 'Address', value: '17 Hanover Square, London W1S 1BN', href: null },
          ].map(({ label, value, href }) => (
            <div key={label} className="flex gap-3 items-baseline">
              <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-[0.15em]">{label}</p>
              {href
                ? <a href={href} className="text-[#0d1b3e] font-semibold hover:text-[#0057FF] transition-colors">{value}</a>
                : <p className="text-[#0d1b3e] font-semibold">{value}</p>
              }
            </div>
          ))}
        </div>
      </section>

      <ContactSection heading="Get a written fee estimate, no commitment required." />

      <GuideTrustBand />

      <RelatedPages currentSlug="/contact" heading="Not sure who this is for?" />

      <FaqSection description="Common questions about instructing Stearling Reinstatement." items={faqItems} />
    </main>
  )
}







