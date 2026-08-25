import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import ServiceCardsSection from '../components/ServiceCardsSection'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'How Much Does a Reinstatement Cost Assessment Cost?',
  description: 'What determines the price of a Reinstatement Cost Assessment, the difference between desktop and on-site pricing, and how to get an accurate quote for your property.',
  alternates: { canonical: '/reinstatement-cost-assessment-cost' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/reinstatement-cost-assessment-cost',
    siteName: 'Stearling Reinstatement',
    title: 'How Much Does a Reinstatement Cost Assessment Cost?',
    description: 'What determines the price of a Reinstatement Cost Assessment, and how to get an accurate quote.',
    images: [{ url: '/rcs-desktop-reinstatemenet-cost-assessment.png', width: 1200, height: 630, alt: 'Reinstatement Cost Assessment pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Reinstatement Cost Assessment Cost?',
    description: 'What determines the price of a Reinstatement Cost Assessment.',
    images: ['/rcs-desktop-reinstatemenet-cost-assessment.png'],
  },
}

const factors = [
  { title: 'Desktop or on-site', body: 'A desktop assessment (no site visit, using floor area and property data) is the lower-cost option. An on-site survey - with a surveyor physically attending - costs more but is required for listed, heritage or structurally complex properties.' },
  { title: 'Property size', body: 'Price scales with gross internal floor area. A one-bedroom flat costs less to assess than a five-bedroom detached house, simply because there is more building to measure and cost.' },
  { title: 'Property type & construction', body: 'Standard modern brick-and-block construction is the most straightforward to assess. Listed buildings, timber-frame, thatch, non-standard or heritage construction take more surveyor time and specialist knowledge.' },
  { title: 'Number of properties', body: "If you're assessing more than one property (a portfolio, or multiple units in a block), per-property cost typically comes down - ask about our 3-Year Protection Plan for ongoing multi-property cover." },
]

const faqItems = [
  { question: 'Is a desktop assessment as reliable as an on-site survey?', answer: 'For standard, modern-construction residential properties, a desktop assessment using accurate floor area and BCIS data is generally sufficient and is accepted by all UK insurers. Listed, heritage, or structurally unusual properties need an on-site survey because desktop data can\'t capture bespoke materials or complex construction accurately.' },
  { question: 'Will I know the exact price before I commit to anything?', answer: "Yes. Tell us your property type, approximate size and location and we'll confirm a fixed price before you instruct anything - there are no hidden fees or surprise add-ons." },
  { question: 'Is the cost of the assessment worth it compared to the risk?', answer: "A Reinstatement Cost Assessment is a one-off (or periodic) cost measured in the low hundreds of pounds. Being underinsured on a real claim can cost you tens of thousands under the average clause - see the worked example in What Happens If My Property Is Underinsured?" },
  { question: 'Do you charge more for leasehold flats in a block?', answer: 'Pricing is based on the specific unit or building being assessed, not tenure type. Whether you need an assessment for a single flat or the whole block depends on who holds the insuring obligation under the lease.' },
]

export default function RCACostPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: 'How Much Does a Reinstatement Cost Assessment Cost?', item: 'https://stearlingreinstatement.com/reinstatement-cost-assessment-cost' },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <span className="badge badge-blue mb-4">Homeowner Guide</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              How much does it <span className="blue-keyword">cost</span>?
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              We're upfront about pricing before you enquire. The exact figure depends on your property, but here's what actually drives the cost.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get a Fixed Quote</Link>
              <Link href="#service-cards" className="btn-ghost">Compare Options</Link>
            </div>
          </div>

          <div className="hero-img-pulse relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]">
            <Image src="/rcs-desktop-reinstatemenet-cost-assessment.png" alt="Reinstatement Cost Assessment pricing" fill className="object-cover" priority />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* FACTORS */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="badge badge-blue mb-4">What Affects Price</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">
              Four things that <span className="blue-keyword">set the price</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {factors.map(({ title, body }) => (
              <div key={title} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-3" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
                <h3 className="text-base font-bold text-[#0d1b3e]">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORTH IT */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Cost vs Risk</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
            A small cost against a <span className="blue-keyword">much larger risk</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            An assessment is a modest, one-off (or periodic) cost. Being underinsured when a genuine claim happens can cost tens of thousands of pounds, because insurers reduce every payout proportionally under the average clause — not just on a total loss. See exactly how that plays out in <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#0057FF] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link>
          </p>
        </div>
      </section>

      <ServiceCardsSection />

      <ContactSection heading="Tell us about your property for a fixed price." />
      <FaqSection description="What homeowners ask about the cost of a Reinstatement Cost Assessment." items={faqItems} />
    </main>
  )
}
