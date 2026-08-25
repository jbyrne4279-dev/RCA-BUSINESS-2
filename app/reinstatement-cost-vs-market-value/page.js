import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

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
    images: [{ url: '/rca-for-my-property-london-rebuild.png', width: 1200, height: 630, alt: 'Reinstatement cost vs market value comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reinstatement Cost vs Market Value: What's the Difference?",
    description: 'A clear comparison of reinstatement cost and market value for homeowners.',
    images: ['/rca-for-my-property-london-rebuild.png'],
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

      {/* HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <span className="badge badge-blue mb-4">Homeowner Guide</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-[1.1] mb-5">
              Reinstatement cost vs <span className="blue-keyword">market value</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              These two figures are often assumed to be the same. They rarely are — and mixing them up is the single most common reason UK homes are wrongly insured.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get My Assessment</Link>
              <Link href="/what-happens-if-my-property-is-underinsured" className="btn-ghost">What If I'm Underinsured?</Link>
            </div>
          </div>

          <div className="hero-img-pulse relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]">
            <Image src="/rca-for-my-property-london-rebuild.png" alt="Reinstatement cost vs market value" fill className="object-cover" priority />
            <div className="hero-electric-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* COMPARISON TABLE */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Side by Side</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-8">
            Two questions, <span className="blue-keyword">two different answers</span>.
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#e2e8f0]" style={{boxShadow:'0 4px 16px rgba(0,87,255,0.08)'}}>
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr style={{background:'#f0f4ff'}}>
                  <th className="text-left p-4 font-semibold text-[#0d1b3e]">&nbsp;</th>
                  <th className="text-left p-4 font-semibold text-[#0057FF]">Market Value</th>
                  <th className="text-left p-4 font-semibold text-[#0057FF]">Reinstatement Cost</th>
                </tr>
              </thead>
              <tbody className="text-[#64748b]">
                <tr className="border-t border-[#e2e8f0]">
                  <td className="p-4 font-medium text-[#0d1b3e]">Answers the question</td>
                  <td className="p-4">"What could I sell it for?"</td>
                  <td className="p-4">"What would it cost to rebuild it?"</td>
                </tr>
                <tr className="border-t border-[#e2e8f0]">
                  <td className="p-4 font-medium text-[#0d1b3e]">Includes the land?</td>
                  <td className="p-4">Yes</td>
                  <td className="p-4">No</td>
                </tr>
                <tr className="border-t border-[#e2e8f0]">
                  <td className="p-4 font-medium text-[#0d1b3e]">Driven by</td>
                  <td className="p-4">Local demand, comparable sales, location</td>
                  <td className="p-4">Construction cost per m&sup2;, materials, labour, demolition, fees</td>
                </tr>
                <tr className="border-t border-[#e2e8f0]">
                  <td className="p-4 font-medium text-[#0d1b3e]">Used for</td>
                  <td className="p-4">Selling, buying, mortgage lending decisions</td>
                  <td className="p-4">Setting your buildings insurance sum insured</td>
                </tr>
                <tr className="border-t border-[#e2e8f0]">
                  <td className="p-4 font-medium text-[#0d1b3e]">Who calculates it</td>
                  <td className="p-4">Estate agent, RICS valuer (for sale/mortgage)</td>
                  <td className="p-4">RICS surveyor using BCIS rebuild cost data</td>
                </tr>
                <tr className="border-t border-[#e2e8f0]">
                  <td className="p-4 font-medium text-[#0d1b3e]">Typical London example</td>
                  <td className="p-4">£800,000</td>
                  <td className="p-4">£350,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[#64748b] text-base leading-relaxed mt-8">
            In central London and other high-value areas, land can account for well over half of a property's market price — so reinstatement cost is very often significantly lower than market value. In some rural or listed properties, the opposite is true: construction costs (especially for heritage materials and methods) can push reinstatement cost above market value. There's no reliable shortcut — it depends on the individual property, which is why a proper assessment matters more than a rule of thumb.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-4xl mx-auto">
          <span className="badge badge-blue mb-4">Why It Matters</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
            Getting this wrong costs you <span className="blue-keyword">either way</span>.
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed mb-4">
            Insure at market value when it's higher than reinstatement cost, and you're paying premium on cover you can never actually claim — insurers only ever pay out the cost to rebuild, never the market price of the land.
          </p>
          <p className="text-[#64748b] text-base leading-relaxed">
            Insure below true reinstatement cost, and you're underinsured — meaning any claim, not just a total loss, gets reduced under the insurer's average clause. See exactly how that works in <Link href="/what-happens-if-my-property-is-underinsured" className="text-[#0057FF] font-medium hover:underline">What Happens If My Property Is Underinsured?</Link>
          </p>
        </div>
      </section>

      <ContactSection heading="Get an accurate reinstatement figure for your home." />
      <FaqSection description="Common questions homeowners ask when comparing reinstatement cost and market value." items={faqItems} />
    </main>
  )
}
