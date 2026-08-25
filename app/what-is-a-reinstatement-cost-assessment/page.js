import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
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
    images: [{ url: '/rca-for-my-property.png', width: 1200, height: 630, alt: 'Homeowner reviewing a Reinstatement Cost Assessment report' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Is a Reinstatement Cost Assessment? A Homeowner's Guide",
    description: 'A plain-English guide for homeowners to Reinstatement Cost Assessments and buildings insurance.',
    images: ['/rca-for-my-property.png'],
  },
}

const faqItems = [
  { question: 'Is a Reinstatement Cost Assessment the same as a survey I get when buying a house?', answer: "No. A homebuyer's survey (like a RICS Level 2 or 3 Homebuyer Report) checks the physical condition of a property. A Reinstatement Cost Assessment only calculates one figure: how much it would cost to demolish and completely rebuild the property if it were destroyed. They're prepared for different purposes and often by different specialists." },
  { question: 'Who actually needs a Reinstatement Cost Assessment?', answer: 'Anyone responsible for setting the buildings insurance sum insured on a property — most commonly freeholders, leaseholders in a block, RMC/RTM directors, landlords and portfolio owners. Some insurers and mortgage lenders also request one directly, particularly for older, listed or non-standard construction properties.' },
  { question: 'How is the figure calculated?', answer: 'A RICS-regulated surveyor calculates rebuild cost using BCIS (Building Cost Information Service) data — current UK construction costs per square metre for the specific type, age and construction of your property — then adds professional fees, demolition and site clearance costs.' },
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

      {/* HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <span className="badge badge-blue mb-4">Homeowner Guide</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              What is a <span className="blue-keyword">Reinstatement Cost Assessment</span>?
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-4 max-w-lg">
              In plain English: a Reinstatement Cost Assessment (sometimes called a rebuild cost assessment) is a professional calculation of what it would cost to completely demolish and rebuild your home from scratch — not what it's worth on the market, and not what you paid for it.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8 max-w-lg">
              It's the figure your buildings insurance is meant to be based on. Get it wrong, and you could be significantly underinsured without knowing it.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get My Assessment</Link>
              <Link href="/reinstatement-cost-vs-market-value" className="btn-ghost">Rebuild Cost vs Market Value</Link>
            </div>
          </div>

          <div className="hero-img-pulse relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]">
            <Image src="/rca-for-my-property.png" alt="What is a Reinstatement Cost Assessment - homeowner guide" fill className="object-cover" priority />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* THREE TERMS */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">The Three Numbers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-6">
            Three figures, <span className="blue-keyword">three very different meanings</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-8">
            Most confusion around home insurance starts here — people assume these three numbers are roughly the same. They're often wildly different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-[#e2e8f0] p-6" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-2">Market Value</p>
              <p className="text-[#64748b] text-sm leading-relaxed">What a buyer would pay for the property, land included, on the open market today.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#0057FF] p-6" style={{boxShadow:'0 8px 24px rgba(0,87,255,0.15)'}}>
              <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-2">Reinstatement Cost</p>
              <p className="text-[#64748b] text-sm leading-relaxed">What it costs to demolish the damaged structure and rebuild it, excluding the land. This is what a Reinstatement Cost Assessment produces — and what your insurance should be based on.</p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] p-6" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
              <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-2">Sum Insured</p>
              <p className="text-[#64748b] text-sm leading-relaxed">The figure on your policy schedule — usually the reinstatement cost plus a buffer for inflation and unforeseen costs, set by you or your insurer.</p>
            </div>
          </div>
          <p className="text-[#64748b] text-base leading-relaxed mt-8">
            Land holds its value even if a building is destroyed, which is why reinstatement cost is so often lower than market value in expensive areas — and why insuring at market value wastes money on excess premium, while insuring below reinstatement cost leaves you exposed. Read more in <Link href="/reinstatement-cost-vs-market-value" className="text-[#0057FF] font-medium hover:underline">Reinstatement Cost vs Market Value</Link>.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Why It Matters</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
            Why this figure <span className="blue-keyword">decides what you get paid</span> after a claim.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            If your sum insured is lower than your true reinstatement cost, most UK insurers apply what's called the "average clause" (also called condition of average). It reduces every claim payout — not just total losses — in proportion to how underinsured you are.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            A Reinstatement Cost Assessment carried out by a RICS-regulated surveyor gives you (and your insurer) a defensible, evidence-based figure, rather than a guess carried forward from a previous policy or an online calculator. See a full worked example in <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#0057FF] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link>
          </p>
        </div>
      </section>

      {/* WHO NEEDS ONE */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Related Reading</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b3e] leading-tight mb-6">
            Next, work out if you need one.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link href="/do-i-need-a-reinstatement-cost-assessment" className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-2" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)', textDecoration:'none'}}>
              <h3 className="text-base font-bold text-[#0d1b3e]">Do I Need a Reinstatement Cost Assessment?</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">The specific situations that mean you should get one — buying a flat, insurer request, or after a claim.</p>
              <span className="text-[#0057FF] text-sm font-semibold mt-2">Read the guide &rarr;</span>
            </Link>
            <Link href="/reinstatement-cost-assessment-cost" className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-2" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)', textDecoration:'none'}}>
              <h3 className="text-base font-bold text-[#0d1b3e]">How Much Does It Cost?</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">What determines price, and what to expect to pay for a desktop or on-site assessment.</p>
              <span className="text-[#0057FF] text-sm font-semibold mt-2">See pricing &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection heading="Get your Reinstatement Cost Assessment." />
      <FaqSection description="Straightforward answers to the questions homeowners ask most about Reinstatement Cost Assessments." items={faqItems} />
    </main>
  )
}
