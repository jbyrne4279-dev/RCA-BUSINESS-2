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
  { question: 'Which service is right for my property?', answer: 'Desktop assessments are appropriate for most standard residential blocks and commercial properties. On-site surveys are required for listed buildings, non-standard construction and high-value assets. The 3-Year Protection plan is the correct structure for managing agents and freeholders who need ongoing RICS compliance without re-instructing annually.' },
  { question: 'How quickly will I receive my report?', answer: 'Desktop assessments are delivered within 24 hours of instruction. For on-site surveys, we confirm the programme on instruction.' },
  { question: 'Are your reports accepted by all UK insurers?', answer: 'Yes. Our RICS-aligned, broker-ready reports are accepted across the UK market.' },
  { question: 'Do you cover listed and heritage buildings?', answer: 'Yes. Listed buildings require specialist knowledge of authentic materials, conservation requirements and traditional construction methods. We carry out site-based surveys for all listed property categories.' },
  { question: 'Can you assess a portfolio of blocks under one instruction?', answer: 'Yes. We provide consolidated portfolio assessments with individual reports per property and a portfolio summary schedule.' },
]

function CheckItem({ title, desc, dark }) {
  return (
    <div className={`flex gap-3 py-3 border-b ${dark ? 'border-white/10' : 'border-white/[0.08]'}`}>
      <span className={`text-sm shrink-0 mt-0.5 font-bold ${dark ? 'text-white' : 'text-[#a78bfa]'}`}>✓</span>
      <div>
        <p className={`font-medium text-sm mb-0.5 ${dark ? 'text-white' : 'text-white'}`}>{title}</p>
        <p className={`text-xs leading-relaxed ${dark ? 'text-white/55' : 'text-white/50'}`}>{desc}</p>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">
              Reinstatement Cost Assessment
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              A specialist valuation for buildings insurance.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              A reinstatement cost assessment establishes the cost of rebuilding a property from scratch for insurance purposes. The declared figure sets the buildings sum insured and determines the adequacy of cover at the point of any claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#desktop-rca" className="btn-ghost">View Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 0 0 1px rgba(124,58,237,0.2), 0 24px 64px rgba(124,58,237,0.1), 0 4px 16px rgba(0,0,0,0.4)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="RICS reinstatement cost assessment, building survey"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/70 via-[#07070f]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/80 text-sm font-medium leading-snug">RICS-aligned assessments delivered within 24 hours for most standard properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPECIALIST */}
      <section style={{ background: '#0d0d1e' }} className="py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">
              Why Choose a Specialist
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight mb-5">
              Reinstatement cost assessment is a specialist discipline.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              Cavendish &amp; Rowe practises exclusively in reinstatement cost assessment. We do not offer general surveying, valuation advice or any other service. Every instruction we accept is a RICS-regulated rebuild valuation, carried out by or under the supervision of a RICS-registered member.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              That focus means deeper methodology, more consistent output and a report brokers and insurers accept without question. UK construction costs rose over 30% between 2020 and 2024. A figure not formally reviewed in that period is materially inaccurate.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Online calculators', sub: 'No professional accountability. Not defensible in a dispute.', ok: false },
              { title: 'Index-linking alone', sub: 'Adjusts the figure. Does not replace a formal review.', ok: false },
              { title: 'Old or inherited valuations', sub: 'Construction costs change. Stale figures create underinsurance.', ok: false },
              { title: 'RICS-aligned reinstatement cost assessment', sub: 'Documented, site-based, specialist. Accepted by every UK insurer.', ok: true },
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

      {/* SERVICE 01 */}
      <section id="desktop-rca" style={{ background: '#07070f' }} className="py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">
              01. Desktop
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">Desktop Assessment</h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              BCIS-indexed rebuild cost modelling without a site visit. Delivered within 24 hours. Appropriate for most standard residential blocks and commercial properties.
            </p>
            <Link href="/contact?service=desktop#contact-form" className="btn-shine">Instruct Desktop Assessment</Link>
          </div>
          <div>
            <CheckItem title="24-hour turnaround" desc="Delivered within 24 hours of instruction." />
            <CheckItem title="BCIS-indexed modelling" desc="Live construction cost data from the Building Cost Information Service." />
            <CheckItem title="RICS-aligned output" desc="Produced by or under supervision of a RICS-registered member." />
            <CheckItem title="Broker-ready format" desc="Accepted without challenge by UK insurers and brokers." />
            <CheckItem title="National coverage" desc="Available across England, Scotland, Wales and Northern Ireland." />
          </div>
        </div>
      </section>

      {/* SERVICE 02 */}
      <section id="on-site-survey" style={{ background: 'rgba(124,58,237,0.12)' }} className="py-16 md:py-20 px-6 md:px-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">
              02. On-Site
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">On-Site Survey</h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              A RICS surveyor attends in person and carries out full measurement, material assessment and construction analysis on-site. Required for listed buildings, non-standard construction and high-value assets.
            </p>
            <Link href="/contact?service=onsite#contact-form" className="btn-shine">Request On-Site Survey</Link>
          </div>
          <div>
            <CheckItem title="Physical RICS inspection" desc="Full on-site measurement by a RICS-registered surveyor." />
            <CheckItem title="Listed and heritage buildings" desc="Specialist knowledge of authentic materials and traditional construction methods." />
            <CheckItem title="Non-standard construction" desc="Complex structures, unusual specifications and high-value properties assessed in full." />
            <CheckItem title="Full measurement record" desc="Complete dimensional survey retained as part of the assessment file." />
            <CheckItem title="PI insured" desc="Comprehensive professional indemnity insurance on every instruction." />
          </div>
        </div>
      </section>

      {/* SERVICE 03 */}
      <section id="three-year-protection" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(91,33,182,0.18) 100%)', border: '1px solid rgba(124,58,237,0.35)', boxShadow: '0 0 40px rgba(124,58,237,0.15)' }} className="py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              03. Protection Plan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">3-Year Protection Plan</h2>
            <p className="text-white/80 text-base leading-relaxed mb-4">
              Single instruction. Three years of RICS compliance. Full assessment in year one, then annual BCIS-indexed renewal reports delivered before each renewal date, without re-instructing.
            </p>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              The correct structure for managing agents, RTM companies and freeholders who must meet RICS review guidance and maintain an accurate insurance figure across the three-year cycle.
            </p>
            <Link href="/contact?service=3year#contact-form" className="btn-shine">Enquire About 3-Year Plan</Link>
          </div>
          <div>
            <CheckItem title="Full assessment in year one" desc="Complete RICS-aligned assessment establishing the baseline declared value." dark />
            <CheckItem title="Annual BCIS indexation" desc="The figure updated each year using live construction cost indices." dark />
            <CheckItem title="Renewal-ready reports" desc="Fresh broker-ready report issued before each renewal date." dark />
            <CheckItem title="Three-year RICS compliance" desc="A single instruction covering the full RICS recommended review period." dark />
            <CheckItem title="Managed service" desc="We contact you before each update. No administration required from you." dark />
          </div>
        </div>
      </section>

      <ContactSection heading="Ready to instruct? Get a quote today." />
      <FaqSection description="Common questions about our reinstatement cost assessment services." items={faqItems} />
    </main>
  )
}
