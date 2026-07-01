import Link from 'next/link'

export const metadata = {
  title: 'Reinstatement Cost Assessment Resources | Guides & Case Studies',
  description: 'Guides, case studies and technical notes on reinstatement cost assessments, RICS compliance, and underinsurance for managing agents and property professionals.',
  alternates: { canonical: '/resources' },
}

const resources = [
  { tag: 'Case Study', title: 'Block of flats undervalued by £340,000 — how it was discovered and corrected', excerpt: 'A 24-unit residential block had been insured using the developer's original rebuild estimate for eleven years. Our RICS assessment revealed a £340,000 shortfall.', href: '/resources/case-study-block-of-flats-undervalued', date: 'March 2025' },
  { tag: 'Guide', title: 'Index-linking vs professional revaluation: what the difference means for your liability', excerpt: 'Annual index-linking adjusts your sum insured by a percentage derived from construction cost movements. It does not replace a RICS assessment. Here is why the distinction matters at the point of claim.', href: '/resources/index-linking-vs-professional-valuation', date: 'February 2025' },
  { tag: 'Guide', title: 'Top five underinsurance risks for managing agents — and how to eliminate each one', excerpt: 'Managing agents face specific underinsurance exposures that arise from the nature of leasehold property management. This guide covers each risk and the assessment type that removes it.', href: '/resources/top-risks-of-underinsurance-for-managing-agents', date: 'January 2025' },
  { tag: 'Guidance', title: 'When should block buildings insurance valuations be updated?', excerpt: 'RICS guidance recommends formal reinstatement cost assessments at least every three years. Here is what that means in practice — and when you should instruct earlier.', href: '/resources/when-should-block-insurance-valuations-be-updated', date: 'December 2024' },
]

export default function ResourcesPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-8">Knowledge Base</p>
            <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Guides & resources.
            </h1>
          </div>
          <p className="text-[#6e6e73] text-lg leading-relaxed">
            Practical guidance on reinstatement cost assessments, RICS compliance, and underinsurance risk — written for managing agents, block managers, and property investors.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto divide-y divide-black/[0.06]">
          {resources.map(({ tag, title, excerpt, href, date }) => (
            <Link key={href} href={href} className="flex flex-col sm:flex-row gap-8 py-10 group">
              <div className="sm:w-40 shrink-0">
                <span className="text-[0.65rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] block mb-1">{tag}</span>
                <span className="text-[#6e6e73] text-xs">{date}</span>
              </div>
              <div className="flex-1">
                <h2 className="font-headline text-2xl font-semibold text-[#1d1d1f] leading-tight mb-4 group-hover:text-[#c47c1e] transition-colors">{title}</h2>
                <p className="text-[#6e6e73] text-sm leading-relaxed mb-4">{excerpt}</p>
                <span className="link-amber">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  )
}
