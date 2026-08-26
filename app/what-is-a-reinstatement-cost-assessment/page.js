import Link from 'next/link'
import GuideHero from '../components/GuideHero'
import GuideOverview from '../components/GuideOverview'
import GuideTrustBand from '../components/GuideTrustBand'
import RelatedGuides from '../components/RelatedGuides'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: "What Is a Reinstatement Cost Assessment? A Homeowner's Guide",
  description: 'A plain-English guide for homeowners: what a Reinstatement Cost Assessment is, how it differs from market value and sum insured, and why it matters for your buildings insurance.',
  alternates: { canonical: '/what-is-a-reinstatement-cost-assessment' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/what-is-a-reinstatement-cost-assessment',
    siteName: 'Stearling Reinstatement',
    title: "What Is a Reinstatement Cost Assessment? A Homeowner's Guide",
    description: 'A plain-English guide for homeowners: what a Reinstatement Cost Assessment is, and why it matters for your buildings insurance.',
    images: [{ url: '/rca-surveyor-site-visit.webp', width: 1200, height: 630, alt: 'RICS surveyor carrying out a Reinstatement Cost Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Is a Reinstatement Cost Assessment? A Homeowner's Guide",
    description: 'A plain-English guide for homeowners to Reinstatement Cost Assessments.',
    images: ['/rca-surveyor-site-visit.webp'],
  },
}

const faqItems = [
  { question: 'Is a Reinstatement Cost Assessment the same as a survey I get when buying a house?', answer: "No. A homebuyer's survey (like a RICS Level 2 or 3 Homebuyer Report) checks the physical condition of a property. A Reinstatement Cost Assessment only calculates one figure: how much it would cost to demolish and completely rebuild the property if it were destroyed. They're prepared for different purposes and often by different specialists." },
  { question: 'Who actually needs a Reinstatement Cost Assessment?', answer: 'Anyone responsible for setting the buildings insurance sum insured on a property. Most commonly that means freeholders, leaseholders in a block, RMC/RTM directors, landlords and portfolio owners. Some insurers and mortgage lenders also ask for one directly, particularly for older, listed or non-standard properties.' },
  { question: 'How is the figure calculated?', answer: "A RICS-regulated surveyor calculates the rebuild cost using BCIS (Building Cost Information Service) data, which gives current UK construction costs per square metre for your property's specific type, age and construction. Professional fees, demolition and site clearance costs are then added on top." },
  { question: 'How long does a Reinstatement Cost Assessment stay valid?', answer: 'RICS guidance recommends a full reassessment at least every three years, with the figure index-linked (adjusted for construction cost inflation) annually in between.' },
]

export default function WhatIsRCAPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: "What Is a Reinstatement Cost Assessment?", item: 'https://stearlingreinstatement.com/what-is-a-reinstatement-cost-assessment' },
        ],
      },
      {
        '@type': 'Article',
        headline: "What Is a Reinstatement Cost Assessment? A Homeowner's Guide",
        description: 'A plain-English guide for homeowners to Reinstatement Cost Assessments.',
        author: { '@type': 'Organization', name: 'Stearling Reinstatement' },
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <GuideHero
        image="/rca-surveyor-site-visit.webp"
        imageAlt="RICS surveyor carrying out a Reinstatement Cost Assessment"
        headlineMain="What is a"
        headlineAccent="Reinstatement Cost Assessment?"
        subtitle="In plain English: it's a professional calculation of what it would cost to completely demolish and rebuild your home from scratch. It's not what it's worth on the market, and it's not what you paid for it."
        secondaryHref="/reinstatement-cost-vs-market-value"
        secondaryLabel="RCA vs Market Value"
      />

      <GuideOverview
        kicker="The Basics"
        heading="It's the figure your insurance is"
        headingAccent="actually meant to be based on."
        description="Sometimes called a rebuild cost assessment, an RCA is the only figure that tells you if you're properly covered. Get it wrong, and you could be significantly underinsured without ever knowing it."
        highlights={[
          { icon: 'verified', title: 'RICS-Regulated Figure', desc: 'Carried out by a chartered surveyor to RICS professional standards, so it is a figure insurers and brokers accept without challenge.' },
          { icon: 'not_interested', title: 'Not Market Value', desc: "Reinstatement cost excludes the land. It's what it costs to rebuild the structure, not what a buyer would pay for the whole property." },
          { icon: 'update', title: 'Reviewed Every 3 Years', desc: 'RICS guidance recommends a full reassessment at least every three years, index-linked annually in between.' },
        ]}
      />

      {/* THREE TERMS */}
      <section className="bg-[#fbf0f2] py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F3D] block mb-4">The Three Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-6">
            Three figures, <span className="text-shine">three very different meanings</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-8">
            Most confusion around home insurance starts here. People assume these three numbers are roughly the same, but they're often wildly different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6" style={{boxShadow:'0 4px 16px rgba(122,31,61,0.08)'}}>
              <p className="text-xs font-semibold text-[#7A1F3D] uppercase tracking-wide mb-2">Market Value</p>
              <p className="text-[#64748b] text-sm leading-relaxed">What a buyer would pay for the property, land included, on the open market today.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#7A1F3D] bg-white p-6" style={{boxShadow:'0 8px 24px rgba(122,31,61,0.15)'}}>
              <p className="text-xs font-semibold text-[#7A1F3D] uppercase tracking-wide mb-2">Reinstatement Cost</p>
              <p className="text-[#64748b] text-sm leading-relaxed">What it costs to demolish the damaged structure and rebuild it, excluding the land. This is what a Reinstatement Cost Assessment produces, and it's what your insurance should be based on.</p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6" style={{boxShadow:'0 4px 16px rgba(122,31,61,0.08)'}}>
              <p className="text-xs font-semibold text-[#7A1F3D] uppercase tracking-wide mb-2">Sum Insured</p>
              <p className="text-[#64748b] text-sm leading-relaxed">The figure on your policy schedule. Usually this is the reinstatement cost plus a buffer for inflation and unforeseen costs, set by you or your insurer.</p>
            </div>
          </div>
          <p className="text-[#64748b] text-base leading-relaxed mt-8">
            Land keeps its value even if a building is destroyed, which is why reinstatement cost is so often lower than market value in expensive areas. That's also why insuring at market value wastes money on extra premium, while insuring below reinstatement cost leaves you exposed. Read more in <Link href="/reinstatement-cost-vs-market-value" className="text-[#7A1F3D] font-medium hover:underline">Reinstatement Cost vs Market Value</Link>.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A1F3D] block mb-4">Why It Matters</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            Why this figure <span className="text-shine">decides what you get paid</span> after a claim.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            If your sum insured is lower than your true reinstatement cost, most UK insurers apply what's called the "average clause" (also known as the condition of average). It reduces every claim payout, not just on total losses, in proportion to how underinsured you are.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed">
            A Reinstatement Cost Assessment carried out by a RICS-regulated surveyor gives you (and your insurer) a defensible, evidence-based figure, rather than a guess carried forward from a previous policy or an online calculator. See a full worked example in <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#7A1F3D] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link>
          </p>
        </div>
      </section>

      <GuideTrustBand />

      <RelatedGuides currentSlug="/what-is-a-reinstatement-cost-assessment" />

      <ContactSection heading="Get your Reinstatement Cost Assessment." />
      <FaqSection description="Straightforward answers to the questions homeowners ask most about Reinstatement Cost Assessments." items={faqItems} />
    </main>
  )
}
