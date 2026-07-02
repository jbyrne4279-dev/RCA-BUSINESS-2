import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment Survey for Buildings Insurance',
  description: 'Specialist reinstatement cost assessments for blocks of flats, managing agents, freeholders and leaseholders. RICS-aligned rebuild valuations for buildings insurance.',
  alternates: { canonical: '/services' },
}

const faqItems = [
  { question: 'Which service is right for my property?', answer: 'Desktop covers most standard residential and commercial properties. On-site is required for listed buildings, non-standard construction and high-value assets. If you manage multiple properties or need ongoing RICS compliance, the 3-Year Protection Plan is the right choice - contact us if you are unsure and we will advise.' },
  { question: 'How quickly will I receive my report?', answer: 'Desktop assessments are delivered within 24 hours of instruction. On-site survey programmes are confirmed on instruction.' },
  { question: 'Are your reports accepted by all UK insurers?', answer: 'Yes. Our RICS-aligned, broker-ready reports are accepted across the UK market without amendment.' },
  { question: 'Do you cover listed and heritage buildings?', answer: 'Yes. Our on-site survey service covers all listed property categories, including Grade I, Grade II* and Grade II.' },
  { question: 'Can you assess a portfolio of properties under one instruction?', answer: 'Yes. We produce individual reports per property with a consolidated portfolio summary schedule. Contact us to discuss a portfolio instruction.' },
]

function CheckItem({ title, desc, dark }) {
  return (
    <div className={`flex gap-3 py-3 border-b ${dark ? 'border-white/10' : 'border-[#e2e8f0]'}`}>
      <span className={`text-sm shrink-0 mt-0.5 font-bold ${dark ? 'text-white' : 'text-[#0ab5a8] tick-glow'}`}>✓</span>
      <div>
        <p className={`font-medium text-sm mb-0.5 ${dark ? 'text-white' : 'text-[#0d1b3e]'}`}>{title}</p>
        <p className={`text-xs leading-relaxed ${dark ? 'text-white/55' : 'text-[#64748b]'}`}>{desc}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">
              Reinstatement Cost Assessment
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              Three service tiers. One specialist firm.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              Desktop Assessment for standard properties, On-Site Survey for listed and complex buildings, and the 3-Year Protection Plan for agents and freeholders needing ongoing RICS compliance. Every instruction is RICS-aligned and broker-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#desktop-rca" className="btn-ghost">View Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(10,181,168,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="RICS reinstatement cost assessment, building survey"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">Desktop, On-Site and 3-Year Protection - RICS-aligned assessments for every property type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPECIALIST */}
      <section className="py-20 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: '#f0faf9' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">
              Why Choose a Specialist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0d1b3e] leading-tight mb-5">
              Generic tools cannot replace a RICS specialist.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              UK construction costs rose over 30% between 2020 and 2024 — any figure not formally reviewed in that period is materially inaccurate.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Online calculators', sub: 'No accountability. Not defensible in a dispute.', ok: false },
              { title: 'Index-linking alone', sub: 'Adjusts the figure. Does not replace a review.', ok: false },
              { title: 'Old or inherited valuations', sub: 'Stale figures create underinsurance.', ok: false },
              { title: 'RICS-aligned reinstatement cost assessment', sub: 'Specialist, documented. Accepted by every UK insurer.', ok: true },
            ].map(({ title, sub, ok }) => (
              <div key={title} className={`ls-card p-4 flex gap-3 items-start ${ok ? 'border-[#0ab5a8]' : ''}`} style={ok ? { background: 'rgba(10,181,168,0.08)' } : {}}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#0ab5a8] tick-glow' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-medium text-[#0d1b3e] text-sm">{title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE 01 */}
      <section id="desktop-rca" className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">
              01. Desktop
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">Desktop Assessment</h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              BCIS-indexed rebuild cost modelling without a site visit, delivered within 24 hours.
            </p>
            <Link href="/contact?service=desktop#contact-form" className="btn-shine">Instruct Desktop Assessment</Link>
            <p className="text-[#64748b] text-xs mt-4">Managing agents: <Link href="/managing-agents-insurance-valuations" className="text-[#0ab5a8] font-semibold hover:text-[#087f7a] transition-colors">see how we support your compliance obligations →</Link></p>
          </div>
          <div>
            <CheckItem title="24-hour turnaround" desc="Delivered within 24 hours of instruction." />
            <CheckItem title="BCIS-indexed modelling" desc="Live data from the Building Cost Information Service." />
            <CheckItem title="RICS-aligned output" desc="Supervised by a RICS-registered member." />
            <CheckItem title="Broker-ready format" desc="Accepted by UK insurers without amendment." />
            <CheckItem title="National coverage" desc="England, Scotland, Wales and Northern Ireland." />
          </div>
        </div>
      </section>

      {/* SERVICE 02 */}
      <section id="on-site-survey" className="py-20 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]" style={{ background: 'rgba(10,181,168,0.08)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">
              02. On-Site
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">On-Site Survey</h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              A RICS surveyor attends in person for full measurement, material assessment and construction analysis on-site.
            </p>
            <Link href="/contact?service=onsite#contact-form" className="btn-shine">Request On-Site Survey</Link>
            <p className="text-[#64748b] text-xs mt-4">Freeholders with complex blocks: <Link href="/freeholders-buildings-insurance-valuations" className="text-[#0ab5a8] font-semibold hover:text-[#087f7a] transition-colors">see our freeholder assessment service →</Link></p>
          </div>
          <div>
            <CheckItem title="Physical RICS inspection" desc="Full on-site measurement by a RICS surveyor." />
            <CheckItem title="Listed and heritage buildings" desc="Specialist knowledge of traditional materials and methods." />
            <CheckItem title="Non-standard construction" desc="Complex structures and high-value properties assessed fully." />
            <CheckItem title="Full measurement record" desc="Dimensional survey retained in the assessment file." />
            <CheckItem title="PI insured" desc="Professional indemnity cover on every instruction." />
          </div>
        </div>
      </section>

      {/* SERVICE 03 */}
      <section id="three-year-protection" className="py-20 md:py-28 px-6 md:px-10" style={{ background: 'linear-gradient(135deg, #0ab5a8 0%, #087f7a 100%)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              03. Recommended - Protection Plan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">3-Year Protection Plan</h2>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              One instruction covers three years of RICS compliance — full assessment in year one, annual BCIS-indexed renewal reports before each renewal date, no re-instructing required.
            </p>
            <Link href="/contact?service=3year#contact-form" className="bg-white text-[#0ab5a8] font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-block">Enquire About 3-Year Plan</Link>
          </div>
          <div>
            <CheckItem title="Full assessment in year one" desc="Baseline RICS-aligned assessment establishing declared value." dark />
            <CheckItem title="Annual BCIS indexation" desc="Figure updated yearly using live construction cost indices." dark />
            <CheckItem title="Renewal-ready reports" desc="Broker-ready report issued before each renewal date." dark />
            <CheckItem title="Three-year RICS compliance" desc="Single instruction covers the full RICS review period." dark />
            <CheckItem title="Managed service" desc="We contact you before each update." dark />
          </div>
        </div>
      </section>

      <ContactSection heading="Not sure which service you need? We'll advise." />
      <FaqSection description="Still deciding? Use these answers to narrow it down - or contact us and we'll recommend the right service for your property." items={faqItems} />
    </main>
  )
}
