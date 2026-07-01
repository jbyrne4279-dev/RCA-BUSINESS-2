import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: {
    absolute: 'Resources & Guides | Reinstatement Cost Assessment Knowledge Centre',
  },
  description:
    'Guides and case studies for managing agents, RTM companies and freeholders on reinstatement cost assessments, underinsurance risk, and RICS compliance.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources & Guides | Reinstatement Cost Assessment',
    description:
      'Expert guidance for managing agents and freeholders: underinsurance risks, index-linking limitations, RICS compliance, and block insurance valuation best practice.',
    url: '/resources',
  },
}

const SITE_URL = 'https://reinstatementcostassessment.org'

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
  ],
}

const articles = [
  {
    href: '/resources/top-risks-of-underinsurance-for-managing-agents',
    category: 'Risk & Liability',
    title: 'The top 5 risks of underinsurance for managing agents',
    excerpt:
      'When a block is underinsured at claim, the managing agent faces direct exposure to leaseholder action. This article sets out the five liability scenarios that arise from an inadequate sum insured.',
  },
  {
    href: '/resources/case-study-block-of-flats-undervalued',
    category: 'Case Study',
    title: 'Case study: block of flats undervalued by £800,000',
    excerpt:
      'A 16-unit residential block had been index-linked annually for six years. An RICS desktop assessment revealed a reinstatement shortfall of £800,000 — entirely invisible to the managing agent.',
  },
  {
    href: '/resources/index-linking-vs-professional-valuation',
    category: 'Guidance',
    title: 'Index-linking vs professional valuation — which is safer?',
    excerpt:
      'Index-linking adjusts the sum insured by a published index but cannot account for specification changes, extensions, or regional labour cost movements. A professional RCA addresses all three.',
  },
  {
    href: '/resources/when-should-block-insurance-valuations-be-updated',
    category: 'RICS Guidance',
    title: 'When should block insurance valuations be updated?',
    excerpt:
      'RICS recommends a full reassessment at least every three years. Certain triggers — refurbishment, change of use, or significant cost inflation — require an earlier instruction regardless of the cycle.',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#f4f5f7] pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">Resources &amp; Guides</span>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl leading-tight text-[#111318] mb-6">
              The knowledge your<br />lease obligation demands.
            </h1>
            <p className="font-body text-lg text-[#111318]/70 max-w-2xl leading-relaxed">
              Where a lease covenants insurance at full reinstatement cost, the managing agent or RTM company carries a duty of care to ensure the sum insured is accurate. The guides below set out the obligations, the risks, and the professional standards that apply.
            </p>
          </div>
        </section>

        {/* Intro strip */}
        <section className="bg-white border-b border-[#111318]/8 py-10 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-body text-3xl font-bold text-[#c47c1e]">80%+</span>
              <p className="font-body text-sm text-[#111318]/70 leading-relaxed">of UK residential blocks are estimated to be underinsured at current rebuild costs</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-3xl font-bold text-[#c47c1e]">&pound;425bn</span>
              <p className="font-body text-sm text-[#111318]/70 leading-relaxed">estimated underinsurance gap across the UK commercial and residential property stock</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-3xl font-bold text-[#c47c1e]">48 hrs</span>
              <p className="font-body text-sm text-[#111318]/70 leading-relaxed">desktop turnaround for an RICS-regulated reinstatement cost assessment report</p>
            </div>
          </div>
        </section>

        {/* Article cards */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">Articles</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map(({ href, category, title, excerpt }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col bg-white border border-[#111318]/8 hover-lift card-shadow transition-all duration-300 p-8"
                >
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e] mb-4">
                    {category}
                  </span>
                  <h2 className="font-headline text-2xl text-[#111318] leading-snug mb-4 group-hover:text-[#c47c1e] transition-colors duration-200">
                    {title}
                  </h2>
                  <p className="font-body text-sm text-[#111318]/65 leading-relaxed flex-1 mb-6">
                    {excerpt}
                  </p>
                  <span className="font-body text-sm font-semibold text-[#c47c1e] flex items-center gap-2">
                    Read article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why it matters — dark section */}
        <section className="bg-[#111318] py-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#c47c1e]" />
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">Managing Agent Liability</span>
              </div>
              <h2 className="font-headline text-4xl text-white leading-tight mb-6">
                An inadequate sum insured is not an insurer problem. It is a managing agent problem.
              </h2>
              <p className="font-body text-white/70 leading-relaxed text-sm mb-6">
                If the sum insured proves insufficient at claim, leaseholders are entitled to pursue the managing agent or RTM company for the shortfall. An RICS-regulated reinstatement cost assessment is the professional standard that removes that exposure.
              </p>
              <Link
                href="/contact"
                className="btn-shine inline-block font-body font-semibold text-sm text-white px-7 py-3 border border-[#c47c1e] hover:opacity-90 transition-opacity"
              >
                Instruct an assessment
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { step: '01', text: 'Lease obliges insurance at full reinstatement cost' },
                { step: '02', text: 'Managing agent or RTM company arranges block policy' },
                { step: '03', text: 'Sum insured is inadequate at the point of claim' },
                { step: '04', text: 'Averaging clause reduces payout proportionally' },
                { step: '05', text: 'Leaseholders pursue managing agent for the shortfall' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4">
                  <span className="step-circle font-body text-xs font-bold text-[#c47c1e] border border-[#c47c1e] w-8 h-8 flex items-center justify-center shrink-0">
                    {step}
                  </span>
                  <p className="font-body text-sm text-white/80 leading-relaxed pt-1">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          heading={
            <>
              Commission an RICS-regulated assessment. <span className="text-[#c47c1e]">Remove the liability.</span>
            </>
          }
        />
      </main>
      <Footer />
    </>
  )
}
