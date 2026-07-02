import Link from 'next/link'
import Image from 'next/image'
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
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Commercial Property</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Commercial reinstatement cost assessments.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              RICS-regulated assessments for offices, retail, industrial premises and mixed-use developments. Accepted by all UK commercial insurers without amendment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 0 0 1px rgba(124,58,237,0.2), 0 24px 64px rgba(124,58,237,0.1), 0 4px 16px rgba(0,0,0,0.4)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="Commercial reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/70 via-[#07070f]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/80 text-sm font-medium leading-snug">RICS-regulated assessments for all commercial property types.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ background: '#0d0d1e' }} className="py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Commercial underinsurance is structural.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Commercial properties are the most consistently underinsured asset class in the UK market. Construction costs in the commercial sector have risen faster than residential since 2020. Tenant fitout, specialist plant and complex service installations add reinstatement cost that standard indexation cannot capture. An out-of-date figure will be enforced by the average clause at the point of a claim.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Online calculators', sub: 'Cannot capture tenant fitout, specialist plant or complex service installations.', ok: false },
              { title: 'Index-linking alone', sub: 'Adjusts the figure. Does not validate the base.', ok: false },
              { title: 'Old inherited valuations', sub: 'Significant cost increases since 2020 make pre-pandemic figures materially wrong.', ok: false },
              { title: 'RICS-aligned reinstatement cost assessment', sub: 'Documented, site-based where required, accepted by every UK insurer.', ok: true },
            ].map(({ title, sub, ok }) => (
              <div key={title} className={`ls-card p-4 flex gap-3 items-start ${ok ? 'border-[#7c3aed]' : ''}`} style={ok ? { background: 'rgba(124,58,237,0.12)' } : {}}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#a78bfa] tick-glow' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-medium text-white text-sm">{title}</p>
                  <p className="text-white/50 text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section style={{ background: '#07070f' }} className="py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">What we assess.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Office Buildings', desc: 'Standard and high-specification offices. Central London, regional cities and out-of-town business parks.', href: '/contact' },
              { title: 'Retail & Leisure', desc: 'High street retail, retail parks, restaurants and hotels. Full fitout cost included in the assessment.', href: '/contact' },
              { title: 'Industrial & Logistics', desc: 'Warehouses, distribution centres, manufacturing facilities, and specialist industrial premises.', href: '/contact' },
              { title: 'Mixed-Use Developments', desc: 'Buildings containing both residential and commercial elements, assessed under a single instruction.', href: '/contact' },
              { title: 'Listed Commercial', desc: 'Period office buildings, listed retail premises and heritage industrial structures.', href: '/listed-buildings' },
              { title: 'Development Sites', desc: 'Post-completion reinstatement cost assessments for newly completed commercial developments.', href: '/contact' },
            ].map(({ title, desc, href }) => (
              <div key={title} className="brix-card">
                <div className="h-32 flex items-center justify-center" style={{background:'rgba(255,255,255,0.04)'}}>
                  <svg className="w-9 h-9" fill="none" stroke="#9aa7bd" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-white text-sm mb-2">{title}</p>
                  <p className="text-white/50 text-xs leading-relaxed mb-3">{desc}</p>
                  <Link href={href} className="text-[#a78bfa] text-xs font-semibold hover:text-[#a78bfa] transition-colors">Learn more →</Link>
                </div>
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
