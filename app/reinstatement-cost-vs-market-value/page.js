import Link from 'next/link'
import GuideHero from '../components/GuideHero'
import GuideOverview from '../components/GuideOverview'
import GuideTrustBand from '../components/GuideTrustBand'
import RelatedGuides from '../components/RelatedGuides'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'
import ComparisonTable from '../components/ComparisonTable'

export const metadata = {
  title: "Reinstatement Cost vs Market Value: What's the Difference?",
  description: "Reinstatement cost and market value are not the same number. A clear, visual comparison for homeowners of what each figure means and why the difference matters for your insurance.",
  alternates: { canonical: '/reinstatement-cost-vs-market-value' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://stearlingreinstatement.com/reinstatement-cost-vs-market-value',
    siteName: 'Stearling Reinstatement',
    title: "Reinstatement Cost vs Market Value: What's the Difference?",
    description: 'A clear, visual comparison of reinstatement cost and market value, and why confusing them leads to over- or under-insuring your home.',
    images: [{ url: '/rca-high-rise-residential.webp', width: 1200, height: 630, alt: 'Reinstatement cost vs market value comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reinstatement Cost vs Market Value: What's the Difference?",
    description: 'A clear comparison of reinstatement cost and market value for homeowners.',
    images: ['/rca-high-rise-residential.webp'],
  },
}

const faqItems = [
  { question: 'Why is reinstatement cost usually lower than market value in cities?', answer: "Market value includes the land, location premium and local demand. Reinstatement cost only covers rebuilding the structure - it excludes the land entirely, because the land itself can't be destroyed by fire, flood or subsidence. In expensive urban areas, land value can be the majority of a property's price." },
  { question: 'Can reinstatement cost ever be higher than market value?', answer: 'Yes - this is common with listed buildings, homes with unusual materials or construction, rural properties, or areas where market prices are depressed but construction costs (which are fairly uniform nationally) remain high. This is exactly the situation where getting your sum insured wrong is most costly.' },
  { question: "What happens if I insure my home at market value instead of reinstatement cost?", answer: "You'll likely be paying for more cover than you need, since your premium is based on the sum insured. It doesn't protect you any better - if anything, some insurers may query a sum insured that looks inflated relative to the property's construction type." },
  { question: 'Does my mortgage lender care about this distinction?', answer: 'Yes. Most mortgage conditions require buildings insurance to reflect full reinstatement cost, not market value or the outstanding mortgage balance. Lenders can and do check this.' },
]

export default function ReinstatementVsMarketValuePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stearlingreinstatement.com/' },
          { '@type': 'ListItem', position: 2, name: 'Reinstatement Cost vs Market Value', item: 'https://stearlingreinstatement.com/reinstatement-cost-vs-market-value' },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <GuideHero
        image="/rca-high-rise-residential.webp"
        imageAlt="Residential building - reinstatement cost vs market value"
        headlineMain="Reinstatement cost vs"
        headlineAccent="market value."
        subtitle="These two figures are often assumed to be the same. They rarely are, and mixing them up is the single most common reason UK homes are wrongly insured."
        secondaryHref="/what-happens-if-my-property-is-underinsured"
        secondaryLabel="What If I'm Underinsured?"
      />

      <GuideOverview
        kicker="Side By Side"
        heading="Two questions,"
        headingAccent="two different answers."
        highlights={[
          { icon: 'sell', title: 'Market Value', desc: 'Answers "what could I sell it for?" - driven by land, location and demand.' },
          { icon: 'foundation', title: 'Reinstatement Cost', desc: 'Answers "what would it cost to rebuild?" - driven by construction cost per m² and materials.' },
          { icon: 'balance', title: 'No Reliable Shortcut', desc: 'The two can diverge in either direction depending on the property - only a proper assessment tells you which.' },
        ]}
      />

      {/* COMPARISON TABLE */}
      <section className="py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'rgba(122,31,61,0.08)'}}>
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-8">
            Set side by side, the <span className="text-shine">difference is clear</span>.
          </h2>

          <ComparisonTable
            columns={['Market Value', 'Reinstatement Cost']}
            rows={[
              { label: 'Answers the question', values: ['"What could I sell it for?"', '"What would it cost to rebuild it?"'] },
              { label: 'Includes the land?', values: ['Yes', 'No'] },
              { label: 'Driven by', values: ['Local demand, comparable sales, location', 'Construction cost per m², materials, labour, demolition, fees'] },
              { label: 'Used for', values: ['Selling, buying, mortgage lending decisions', 'Setting your buildings insurance sum insured'] },
              { label: 'Who calculates it', values: ['Estate agent, RICS valuer (for sale/mortgage)', 'RICS surveyor using BCIS rebuild cost data'] },
              { label: 'Typical London example', values: ['£800,000', '£350,000'] },
            ]}
          />

          <p className="text-[#64748b] text-base leading-relaxed mt-8">
            In central London and other high-value areas, land often makes up well over half of a property's asking price, so the reinstatement cost usually comes out much lower than the market value. In some rural or listed properties, it's the other way round: heritage materials and traditional building methods can push the rebuild cost above the market value. There's no reliable rule of thumb, either way. It comes down to the individual property, which is exactly why a proper assessment matters.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-16 sm:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Why It Matters</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b0b14] leading-tight mb-5">
            Getting this wrong costs you <span className="text-shine">either way</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            Insure at market value when it's higher than the reinstatement cost, and you end up paying premium on cover you could never actually claim, because insurers only ever pay out what it costs to rebuild, never the market price of the land.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed">
            Insure below the true reinstatement cost, and you're underinsured. That means any claim, not just a total loss, gets reduced under the insurer's average clause. See exactly how that works in <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#7A1F3D] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link>
          </p>
        </div>
      </section>

      <GuideTrustBand />

      <RelatedGuides currentSlug="/reinstatement-cost-vs-market-value" />

      <ContactSection heading="Get an accurate reinstatement figure for your home." />
      <FaqSection description="Common questions homeowners ask when comparing reinstatement cost and market value." items={faqItems} />
    </main>
  )
}
