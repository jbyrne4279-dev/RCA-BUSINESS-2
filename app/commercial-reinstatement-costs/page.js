import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Commercial Reinstatement Cost Assessment | RICS Regulated',
  description: 'RICS-regulated reinstatement cost assessments for commercial properties. Offices, retail, industrial and mixed-use. Broker-ready reports accepted by all UK insurers.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
}

const faqItems = [
  { question: 'Why does my commercial property need a RICS assessment rather than an insurer tool?', answer: 'Commercial properties have complex specifications that online calculators cannot capture. A RICS-regulated assessment accounts for the full cost of demolition, rebuild, and professional fees for your specific building.' },
  { question: 'How often should a commercial property be reassessed?', answer: 'RICS recommends a formal assessment at least every three years, with annual index-linking in between. Our 3-Year Protection plan covers both.' },
  { question: 'Do you assess listed commercial buildings?', answer: 'Yes. Listed commercial properties require specialist knowledge of authentic materials and construction methods. Our on-site survey service covers all listed property types.' },
  { question: 'Can you assess a mixed-use development?', answer: 'Yes. Mixed-use buildings with both residential and commercial elements are a standard instruction for us.' },
]

export default function CommercialPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Commercial Property</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            Commercial reinstatement<br />cost assessments.
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            RICS-regulated assessments for offices, retail, industrial premises and mixed-use developments. Accepted by all UK commercial insurers.
          </p>
          <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">The Problem</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Commercial underinsurance is structural.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              Commercial properties are consistently the most underinsured asset class in the UK market. Construction costs in the commercial sector have risen faster than residential since 2020. Tenant fitout, specialist plant, and complex service installations add reinstatement cost that standard indexation fails to capture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { n: '35%+', label: 'rise in commercial build costs 2020–2024' },
              { n: '48 hrs', label: 'desktop assessment turnaround' },
              { n: '100%', label: 'of reports accepted by UK insurers' },
              { n: 'RICS', label: 'regulated — every assessment, every time' },
            ].map(({ n, label }) => (
              <div key={n} className="bg-[#f5f5f7] p-6 text-center">
                <p className="font-headline font-semibold text-[#1d1d1f] leading-none mb-3"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>{n}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Property Types</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>What we assess.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Office Buildings', desc: 'Standard and high-specification offices. Central London, regional cities, out-of-town business parks.' },
              { title: 'Retail & Leisure', desc: 'High street retail, retail parks, restaurants, hotels. Full fitout cost assessment included.' },
              { title: 'Industrial & Logistics', desc: 'Warehouses, distribution centres, manufacturing facilities, and specialist industrial premises.' },
              { title: 'Mixed-Use Developments', desc: 'Buildings with both residential and commercial elements assessed as a single instruction.' },
              { title: 'Listed Commercial', desc: 'Period office buildings, listed retail, and heritage industrial structures.' },
              { title: 'Development Sites', desc: 'Post-completion reinstatement cost assessments for newly completed commercial developments.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
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
