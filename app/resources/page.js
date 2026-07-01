import Link from 'next/link'

export const metadata = {
  title: 'Reinstatement Cost Assessment Resources | Guides & Case Studies',
  description: 'Guides, case studies and technical notes on reinstatement cost assessments, RICS compliance, and underinsurance for managing agents and property professionals.',
  alternates: { canonical: '/resources' },
}

const resources = [
  {
    tag: 'Case Study',
    title: 'Block of flats undervalued by £340,000 — how it was discovered and corrected',
    excerpt: 'A 24-unit residential block in the South East had been insured using the developer’s original rebuild estimate for eleven years. When instructed by the new managing agent, our RICS assessment revealed a £340,000 shortfall.',
    href: '/resources/case-study-block-of-flats-undervalued',
    date: 'March 2025',
  },
  {
    tag: 'Guide',
    title: 'Index-linking vs professional revaluation: what the difference means for your liability',
    excerpt: 'Annual index-linking adjusts your sum insured by a percentage derived from construction cost movements. It does not replace a RICS assessment. Here is why the distinction matters when a claim arises.',
    href: '/resources/index-linking-vs-professional-valuation',
    date: 'February 2025',
  },
  {
    tag: 'Guide',
    title: 'Top five underinsurance risks for managing agents — and how to eliminate each one',
    excerpt: 'Managing agents face specific underinsurance exposures that arise from the nature of leasehold property management. This guide covers each risk and the assessment type that removes it.',
    href: '/resources/top-risks-of-underinsurance-for-managing-agents',
    date: 'January 2025',
  },
  {
    tag: 'Guidance',
    title: 'When should block buildings insurance valuations be updated?',
    excerpt: 'RICS guidance recommends formal reinstatement cost assessments at least every three years. Here is what that means in practice — and when you should instruct earlier.',
    href: '/resources/when-should-block-insurance-valuations-be-updated',
    date: 'December 2024',
  },
]

export default function ResourcesPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="bg-[#111318] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Knowledge Base</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-headline text-5xl md:text-6xl font-semibold text-white leading-[1.05]">
              Guides & resources<br />for property professionals.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Practical guidance on reinstatement cost assessments, RICS compliance obligations, and underinsurance risk — written for managing agents, block managers, and property investors.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLE LIST */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="divide-y divide-[#e5e7eb]">
            {resources.map(({ tag, title, excerpt, href, date }) => (
              <Link key={href} href={href} className="flex flex-col sm:flex-row gap-6 py-10 group">
                <div className="sm:w-48 shrink-0">
                  <span className="text-[#c47c1e] text-[0.6rem] font-semibold uppercase tracking-[0.2em] block mb-2">{tag}</span>
                  <span className="text-[#6b7280] text-xs">{date}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-headline text-2xl font-semibold text-[#111318] leading-tight mb-4 group-hover:text-[#c47c1e] transition-colors">{title}</h2>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{excerpt}</p>
                  <span className="text-[#c47c1e] text-xs font-semibold uppercase tracking-widest group-hover:text-[#111318] transition-colors">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
