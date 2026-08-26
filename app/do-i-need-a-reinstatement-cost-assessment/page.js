import Link from 'next/link'
import GuideHero from '../components/GuideHero'
import GuideOverview from '../components/GuideOverview'
import GuideTrustBand from '../components/GuideTrustBand'
import RelatedGuides from '../components/RelatedGuides'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Do I Need a Reinstatement Cost Assessment?',
  description: 'The specific situations that mean you should get a Reinstatement Cost Assessment - buying a leasehold flat, an insurer request, policy renewal, RICS 3-year guidance, or an underpaid claim.',
  alternates: { canonical: '/do-i-need-a-reinstatement-cost-assessment' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/do-i-need-a-reinstatement-cost-assessment',
    siteName: 'Stearling Reinstatement',
    title: 'Do I Need a Reinstatement Cost Assessment?',
    description: 'The specific situations that mean you should get a Reinstatement Cost Assessment.',
    images: [{ url: '/rca-flats-building.webp', width: 1200, height: 630, alt: 'Do I need a Reinstatement Cost Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Do I Need a Reinstatement Cost Assessment?',
    description: 'The specific situations that mean you should get a Reinstatement Cost Assessment.',
    images: ['/rca-flats-building.webp'],
  },
}

const triggers = [
  {
    icon: 'apartment',
    title: "You're buying a leasehold flat",
    body: "Before you exchange, check when the block's Reinstatement Cost Assessment was last updated. An outdated or missing assessment is a red flag for future service charge disputes and a sign the building may already be underinsured.",
  },
  {
    icon: 'policy',
    title: 'Your insurer has requested one',
    body: "Some insurers ask for an independent Reinstatement Cost Assessment directly - usually for older, listed, non-standard construction, or higher-value properties where they want more certainty than a self-declared figure gives them.",
  },
  {
    icon: 'event_repeat',
    title: "It's coming up to renewal",
    body: 'If your sum insured hasn\'t been reassessed in three years or more, renewal is the natural point to update it. Construction costs move - a figure that was accurate in 2021 is very likely wrong today.',
  },
  {
    icon: 'gavel',
    title: 'RICS guidance recommends a reassessment (every 3 years)',
    body: 'RICS professional guidance recommends a full Reinstatement Cost Assessment at least every three years, with annual index-linked adjustments in between. If you can\'t remember your last one, it\'s overdue.',
  },
  {
    icon: 'receipt_long',
    title: 'A previous claim was underpaid',
    body: "If you've made a claim and the payout was reduced because of the insurer's average clause, that's a direct sign your sum insured was too low. Getting a current assessment now prevents it happening again.",
  },
  {
    icon: 'construction',
    title: "You've extended, converted or altered the property",
    body: "An extension, loft conversion or significant renovation changes the true rebuild cost. The sum insured set when you bought the property no longer reflects what's actually there.",
  },
]

const faqItems = [
  { question: "I've never had a Reinstatement Cost Assessment and never had a problem, so do I really need one?", answer: "Most homeowners only discover their sum insured is wrong when they come to make a claim, and by then it's too late to fix. An assessment costs very little compared with the risk of a reduced payout on a genuine loss." },
  { question: 'Does my mortgage lender require one?', answer: "Most lenders require buildings insurance sufficient for reinstatement cost as a condition of the mortgage, though they don't usually mandate a specific assessment provider. Some do request evidence of a professional assessment, particularly for non-standard properties." },
  { question: 'What if I just increase my sum insured by a guess to be safe?', answer: "Overestimating wastes money on premium for cover you can't claim beyond the true rebuild cost. Underestimating leaves you exposed under the average clause. A proper assessment is the only way to get the figure right in either direction." },
  { question: 'Is there a legal requirement to have one?', answer: "There's no single UK law mandating a Reinstatement Cost Assessment for private homeowners, but your lease (if you own a flat), your mortgage terms, and your insurer's policy conditions may all effectively require an accurate figure - which in practice means a professional assessment." },
]

export default function DoINeedRCAPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: 'Do I Need a Reinstatement Cost Assessment?', item: 'https://stearlingreinstatement.com/do-i-need-a-reinstatement-cost-assessment' },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <GuideHero
        image="/rca-flats-building.webp"
        imageAlt="Block of flats - do I need a Reinstatement Cost Assessment"
        headlineMain="Do I need a"
        headlineAccent="Reinstatement Cost Assessment?"
        subtitle="If any of the situations below apply to you, the honest answer is almost certainly yes."
        secondaryHref="/reinstatement-cost-assessment-cost"
        secondaryLabel="See Pricing"
      />

      <GuideOverview
        kicker="Six Common Triggers"
        heading="Situations that mean it's"
        headingAccent="time to get one."
      />

      {/* TRIGGERS GRID */}
      <section className="bg-[#fbf0f2] py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {triggers.map(({ icon, title, body }) => (
              <div key={title} className="bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col gap-3" style={{boxShadow:'0 4px 16px rgba(122,31,61,0.08)'}}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'rgba(122,31,61,0.10)'}}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', color: '#7A1F3D' }}>{icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#2b0b14]">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NONE APPLY */}
      <section className="bg-white py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">None Of These Apply?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            Still worth a <span className="text-shine">quick sense-check</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            If you're not sure whether your current sum insured is right, start with <Link href="/what-is-a-reinstatement-cost-assessment" className="text-[#7A1F3D] font-medium hover:underline">What Is a Reinstatement Cost Assessment?</Link> and <Link href="/reinstatement-cost-vs-market-value" className="text-[#7A1F3D] font-medium hover:underline">Reinstatement Cost vs Market Value</Link> to understand what the figure should actually reflect.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed">
            Getting a professional opinion is inexpensive relative to what an underinsured claim can cost you - see <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#7A1F3D] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link> for a worked example.
          </p>
        </div>
      </section>

      <GuideTrustBand />

      <RelatedGuides currentSlug="/do-i-need-a-reinstatement-cost-assessment" />

      <ContactSection heading="Not sure? Ask us, it costs nothing to check." />
      <FaqSection description="Questions homeowners ask when deciding whether they need a Reinstatement Cost Assessment." items={faqItems} />
    </main>
  )
}
