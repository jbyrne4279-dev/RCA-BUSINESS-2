import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Commercial Reinstatement Cost Assessment | RICS Regulated',
  description: 'RICS-regulated reinstatement cost assessments for commercial properties. Offices, retail, industrial and mixed-use. Broker-ready reports accepted by all UK insurers.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
}

const faqItems = [
  { question: 'Why does my commercial property need a RICS assessment rather than an insurer tool?', answer: 'Commercial properties have specifications that online calculators cannot capture: tenant fitout, specialist plant, complex services and non-standard construction. A RICS-regulated assessment accounts for the full reinstatement cost of your specific building.' },
  { question: 'How often should a commercial property be reassessed?', answer: 'RICS recommends a formal assessment at least every three years, with annual BCIS-indexed adjustment in between. Our 3-Year Protection plan covers both requirements under a single instruction.' },
  { question: 'Do you assess listed commercial buildings?', answer: 'Yes. Listed commercial properties require specialist knowledge of authentic materials and traditional construction methods. Our on-site survey service covers all listed property categories.' },
  { question: 'Can you assess a mixed-use development?', answer: 'Yes. Mixed-use buildings with both residential and commercial elements are assessed as a single instruction.' },
]

export default function CommercialPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Commercial Property</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight mb-5">
              Commercial reinstatement cost assessments.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              RICS-regulated assessments for offices, retail, industrial premises and mixed-use developments. Accepted by all UK commercial insurers without amendment.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { n: '35%+', label: 'rise in commercial build costs 2020–2024' },
              { n: '24 hrs', label: 'desktop assessment turnaround' },
              { n: '100%', label: 'of reports accepted by UK insurers' },
              { n: 'RICS', label: 'regulated, every assessment, every time' },
            ].map(({ n, label }) => (
              <div key={n} className="bg-[#f8f9fa] rounded-xl border border-[#dadce0] p-6 text-center">
                <p className="text-3xl font-bold text-[#202124] leading-none mb-3">{n}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-[#f8f9fa] py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Commercial underinsurance is structural.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Commercial properties are the most consistently underinsured asset class in the UK market. Construction costs in the commercial sector have risen faster than residential since 2020. Tenant fitout, specialist plant and complex service installations add reinstatement cost that standard indexation cannot capture. An out-of-date figure will be enforced by the average clause at the point of a claim.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Online calculators', sub: 'Cannot capture tenant fitout, specialist plant or complex service installations.', ok: false },
              { title: 'Index-linking alone', sub: 'Adjusts the figure. Does not validate the base.', ok: false },
              { title: 'Old inherited valuations', sub: '35%+ cost increase since 2020 makes pre-pandemic figures materially wrong.', ok: false },
              { title: 'RICS-aligned reinstatement cost assessment', sub: 'Documented, site-based where required, accepted by every UK insurer.', ok: true },
            ].map(({ title, sub, ok }) => (
              <div key={title} className={`rounded-xl border p-4 flex gap-3 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : 'border-[#dadce0] bg-white'}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#dadce0]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-medium text-[#202124] text-sm">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">What we assess.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Office Buildings', desc: 'Standard and high-specification offices. Central London, regional cities and out-of-town business parks.' },
              { title: 'Retail & Leisure', desc: 'High street retail, retail parks, restaurants and hotels. Full fitout cost included in the assessment.' },
              { title: 'Industrial & Logistics', desc: 'Warehouses, distribution centres, manufacturing facilities, and specialist industrial premises.' },
              { title: 'Mixed-Use Developments', desc: 'Buildings containing both residential and commercial elements, assessed under a single instruction.' },
              { title: 'Listed Commercial', desc: 'Period office buildings, listed retail premises and heritage industrial structures.' },
              { title: 'Development Sites', desc: 'Post-completion reinstatement cost assessments for newly completed commercial developments.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Instruct a commercial assessment." />
      <FaqSection description="Common questions about commercial reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
