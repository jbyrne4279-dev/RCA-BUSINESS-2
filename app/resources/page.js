import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Reinstatement Cost Assessment Resources | Guides & Case Studies',
  description: 'Guides, case studies and technical notes on reinstatement cost assessments, RICS compliance, and underinsurance for managing agents and property professionals.',
  alternates: { canonical: '/resources' },
}

const resources = [
  {
    tag: 'Case Study',
    title: 'Block of flats undervalued by £340,000: how it was discovered and corrected',
    excerpt: "A 24-unit residential block had been insured on the developer's original rebuild estimate for eleven years. Our RICS assessment identified a £340,000 shortfall.",
    href: '/resources/case-study-block-of-flats-undervalued',
    date: 'March 2025',
  },
  {
    tag: 'Guide',
    title: 'Index-linking vs professional revaluation: what the difference means for your liability',
    excerpt: 'Annual index-linking adjusts the sum insured by a percentage derived from construction cost movements. It does not replace a RICS assessment. The distinction creates a specific liability exposure that managing agents and freeholders must understand.',
    href: '/resources/index-linking-vs-professional-valuation',
    date: 'February 2025',
  },
  {
    tag: 'Guide',
    title: 'Top five underinsurance risks for managing agents, and how to eliminate each one',
    excerpt: 'Managing agents face specific underinsurance exposures arising from the nature of leasehold property management. This guide identifies each risk and the assessment type that eliminates it.',
    href: '/resources/top-risks-of-underinsurance-for-managing-agents',
    date: 'January 2025',
  },
  {
    tag: 'Guidance',
    title: 'When should block buildings insurance valuations be updated?',
    excerpt: 'RICS guidance requires formal reinstatement cost assessments at least every three years. This note explains what that means in practice and identifies the circumstances that require earlier reassessment.',
    href: '/resources/when-should-block-insurance-valuations-be-updated',
    date: 'December 2024',
  },
]

export default function ResourcesPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/resources-hero.jpeg" alt="Reinstatement cost assessment resources and guides" fill className="object-cover opacity-20" priority />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Knowledge Base
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Guides &amp; resources.
            </h1>
          </div>
          <p className="text-white/60 text-lg leading-relaxed">
            Technical guidance on reinstatement cost assessments, RICS compliance and underinsurance risk, written for managing agents, block managers and property professionals.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl border border-[#dadce0] divide-y divide-[#dadce0]">
            {resources.map(({ tag, title, excerpt, href, date }) => (
              <Link key={href} href={href} className="flex flex-col sm:flex-row gap-6 px-6 py-7 group hover:bg-[#f8f9fa] transition-colors">
                <div className="sm:w-44 shrink-0">
                  <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold px-2.5 py-1 rounded-full mb-2 block w-fit">{tag}</span>
                  <span className="text-[#9aa0a6] text-xs">{date}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-xl text-[#202124] leading-snug mb-3 group-hover:text-[#1a73e8] transition-colors">{title}</h2>
                  <p className="text-[#5f6368] text-sm leading-relaxed mb-3">{excerpt}</p>
                  <span className="link-amber text-sm">Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
