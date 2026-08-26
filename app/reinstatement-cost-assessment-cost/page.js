import Link from 'next/link'
import GuideHero from '../components/GuideHero'
import GuideOverview from '../components/GuideOverview'
import GuideProcess from '../components/GuideProcess'
import GuideTrustBand from '../components/GuideTrustBand'
import RelatedGuides from '../components/RelatedGuides'
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
    images: [{ url: '/rca-heritage-building.webp', width: 1200, height: 630, alt: 'Reinstatement Cost Assessment pricing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Reinstatement Cost Assessment Cost?',
    description: 'What determines the price of a Reinstatement Cost Assessment.',
    images: ['/rca-heritage-building.webp'],
  },
}

const process = [
  { step: '01', title: 'Tell us about your home', desc: 'Address, property type, approximate size and any previous valuation.' },
  { step: '02', title: 'We confirm scope and fee', desc: 'Desktop or on-site - a fixed price, agreed upfront, before you commit to anything.' },
  { step: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services and fees - all captured to RICS methodology.' },
  { step: '04', title: 'You receive your report', desc: 'A clear, broker-ready figure, ready for your insurer.' },
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

      <GuideHero
        image="/rca-heritage-building.webp"
        imageAlt="Reinstatement Cost Assessment pricing for homeowners"
        headlineMain="How much does it"
        headlineAccent="cost?"
        subtitle="We're upfront about pricing before you enquire. The exact figure depends on your property, but here's what actually drives the cost."
        secondaryHref="#service-cards"
        secondaryLabel="Compare Options"
      />

      <GuideOverview
        kicker="What Affects Price"
        heading="Four things that"
        headingAccent="set the price."
        highlights={[
          { icon: 'home_work', title: 'Desktop or On-Site', desc: 'A desktop assessment is the lower-cost option. Listed, heritage or structurally complex properties need an on-site survey.' },
          { icon: 'straighten', title: 'Property Size', desc: 'Price scales with gross internal floor area - more building to measure and cost means a higher price.' },
          { icon: 'foundation', title: 'Construction Type', desc: 'Standard modern construction is the most straightforward. Listed, timber-frame or heritage construction takes more surveyor time.' },
        ]}
      />

      {/* PROCESS */}
      <section className="py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'rgba(122,31,61,0.08)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="badge badge-blue mb-4">How It Works</span>
            <h2 className="text-[2rem] sm:text-5xl font-semibold tracking-tight text-[#2b0b14] leading-[1.08]">
              A clear price, agreed upfront.
            </h2>
          </div>
          <GuideProcess steps={process} />
        </div>
      </section>

      {/* WORTH IT */}
      <section className="py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0] bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Cost vs Risk</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            A small cost against a <span className="text-shine">much larger risk</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed">
            An assessment is a modest cost, whether you have it done once or on a regular basis. Being underinsured when a genuine claim happens can cost tens of thousands of pounds, because insurers reduce every payout proportionally under the average clause, not just on a total loss. See exactly how that plays out in <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#7A1F3D] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link>
          </p>
        </div>
      </section>

      <ServiceCardsSection flip />

      <GuideTrustBand background="#ffffff" />

      <RelatedGuides currentSlug="/reinstatement-cost-assessment-cost" background="rgba(122,31,61,0.08)" />

      <ContactSection heading="Tell us about your property for a fixed price." flip />
      <FaqSection description="What homeowners ask about the cost of a Reinstatement Cost Assessment." items={faqItems} flip />
    </main>
  )
}
