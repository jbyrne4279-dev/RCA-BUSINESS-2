import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment | RCA Survey for Buildings Insurance',
  description: 'Specialist reinstatement cost assessments for blocks of flats, managing agents, freeholders and leaseholders. RICS-aligned rebuild valuations for buildings insurance.',
  alternates: { canonical: '/services' },
}

const faqItems = [
  { question: 'Which service is right for my property?', answer: 'Desktop assessments suit most standard residential blocks and commercial properties. On-site surveys are recommended for listed buildings, non-standard construction, and high-value properties. The 3-Year Protection plan suits managing agents and freeholders who want ongoing compliance without re-instructing each year.' },
  { question: 'How quickly will I receive my report?', answer: 'Desktop assessments are delivered within 48 hours of instruction. On-site surveys depend on survey scheduling — we confirm a timeline on instruction.' },
  { question: 'Are your reports accepted by all UK insurers?', answer: 'Yes. Our RICS-aligned, broker-ready reports are accepted across the UK market without challenge.' },
  { question: 'Do you cover listed and heritage buildings?', answer: 'Yes. Listed buildings require specialist knowledge of authentic materials, conservation requirements and traditional construction methods. We carry out site-based surveys for all listed property types.' },
  { question: 'Can you assess a portfolio of blocks under one instruction?', answer: 'Yes. We provide consolidated portfolio assessments with individual reports per property and a portfolio summary schedule. Suitable for managing agents and freeholders with multiple blocks.' },
]

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#1d1d1f] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Reinstatement Cost Assessment</p>
            <h1 className="font-headline font-semibold text-white leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              A specialist valuation<br />for buildings insurance.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              A reinstatement cost assessment calculates the cost of rebuilding your property from scratch for insurance purposes. It helps set the buildings sum insured or declared value so the policy better reflects real rebuild cost.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Request an RCA</Link>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">What Is It</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              What a reinstatement cost assessment includes.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              A proper reinstatement cost assessment is more than an estimate. It is a structured, documented assessment that considers the full cost of rebuilding your property — not what it could sell for on the open market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#f5f5f7]">
              {[
                { title: 'Demolition and site clearance', desc: 'The cost of removing the existing structure before rebuilding can begin.' },
                { title: 'Main structure rebuild', desc: 'Rebuild costs for the structure, including materials, labour and plant.' },
                { title: 'Professional fees', desc: 'Architect, structural engineer, project management and other professional costs.' },
                { title: 'Statutory and local authority fees', desc: 'Planning, building control and other statutory costs associated with the rebuild.' },
                { title: 'VAT where applicable', desc: 'VAT treatment depends on property type, use and ownership structure.' },
                { title: 'External works', desc: 'Car parks, landscaping, boundary structures and other site elements.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white p-6">
                  <div className="flex gap-3 items-start">
                    <span className="text-[#c47c1e] text-sm shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-sm mb-1">{title}</p>
                      <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY SPECIALIST */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Why Choose a Specialist</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              RCA is a specialist discipline.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              RICS guidance says reinstatement cost assessment should be handled as a specialist discipline — with clear instructions, site-based assessment where appropriate, and proper documentation. That matters because relying on rough averages, online calculators or outdated figures can leave a building significantly underinsured.
            </p>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              If your current declared value is based on an old valuation, an online calculator, or an estimate from several years ago, it is time to review it. Construction costs have risen substantially — BCIS data shows UK costs rose over 30% between 2020 and 2024.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Online calculators', sub: 'No professional accountability. Worthless in a dispute.', ok: false },
              { title: 'Index-linking alone', sub: 'Adjusts the figure — does not replace a formal review.', ok: false },
              { title: 'Old or inherited valuations', sub: 'Construction costs change. Stale figures underinsure.', ok: false },
              { title: 'RICS-aligned RCA', sub: 'Documented, site-based, specialist. Accepted by every UK insurer.', ok: true },
            ].map(({ title, sub, ok }) => (
              <div key={title} className={`p-6 flex gap-4 items-start ${ok ? 'bg-[#1d1d1f]' : 'bg-white'}`}>
                <span className={`text-sm shrink-0 mt-0.5 font-bold ${ok ? 'text-[#c47c1e]' : 'text-[#d2d2d7]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className={`font-semibold text-sm mb-1 ${ok ? 'text-white' : 'text-[#1d1d1f]'}`}>{title}</p>
                  <p className={`text-xs leading-relaxed ${ok ? 'text-white/50' : 'text-[#6e6e73]'}`}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE 01 */}
      <section id="desktop-rca" className="bg-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">01 — Desktop</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Desktop Assessment
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              BCIS-indexed rebuild cost modelling without a site visit. Efficient, accurate, and delivered within 48 hours. Suitable for most standard residential blocks and commercial properties where a physical inspection is not required.
            </p>
            <Link href="/contact?service=desktop#contact-form" className="btn-shine">Instruct Desktop Assessment</Link>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#f5f5f7]">
            {[
              { title: '48-hour turnaround', desc: 'Delivered within two working days of instruction.' },
              { title: 'BCIS-indexed modelling', desc: 'Live construction cost data from the Building Cost Information Service.' },
              { title: 'RICS-regulated output', desc: 'Signed off by a RICS-registered member before delivery.' },
              { title: 'Broker-ready format', desc: 'Accepted without challenge by all UK insurers and brokers.' },
              { title: 'National coverage', desc: 'Available across England, Scotland, Wales and Northern Ireland.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-5 flex gap-4">
                <span className="text-[#c47c1e] text-sm shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-[#1d1d1f] text-sm mb-0.5">{title}</p>
                  <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE 02 */}
      <section id="on-site-survey" className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">02 — On-Site</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              On-Site Survey
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              A RICS surveyor attends in person. Full measurement, material assessment and construction analysis on-site. Recommended for listed buildings, non-standard construction, and high-value assets where a site visit is the right approach.
            </p>
            <Link href="/contact?service=onsite#contact-form" className="btn-shine">Request On-Site Survey</Link>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white">
            {[
              { title: 'Physical RICS inspection', desc: 'Full on-site measurement by a RICS-registered surveyor.' },
              { title: 'Listed and heritage buildings', desc: 'Specialist knowledge of authentic materials and traditional construction methods.' },
              { title: 'Non-standard construction', desc: 'Complex structures, unusual specification and high-value properties.' },
              { title: 'Full measurement record', desc: 'Complete dimensional survey retained as part of the assessment record.' },
              { title: 'PI insured', desc: 'Comprehensive professional indemnity insurance on every instruction.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f5f5f7] p-5 flex gap-4">
                <span className="text-[#c47c1e] text-sm shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-[#1d1d1f] text-sm mb-0.5">{title}</p>
                  <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE 03 */}
      <section id="three-year-protection" className="bg-[#1d1d1f] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">03 — Protection Plan</p>
            <h2 className="font-headline font-semibold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              3-Year Protection Plan
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-4">
              Single instruction. Three years of compliance. Full assessment in year one, then annual BCIS-indexed renewal reports delivered before each renewal date — without re-instructing each year.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Ideal for managing agents, RTM companies and freeholders who want to satisfy RICS review guidance and keep their insurance figure accurate without repeated instructions.
            </p>
            <Link href="/contact?service=3year#contact-form" className="btn-shine">Enquire About 3-Year Plan</Link>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/[0.06]">
            {[
              { title: 'Full assessment in year one', desc: 'Complete RICS-aligned assessment as the baseline declared value.' },
              { title: 'Annual BCIS indexation', desc: 'Your figure updated each year using live construction cost indices.' },
              { title: 'Renewal-ready reports', desc: 'Fresh broker-ready report delivered before each renewal date.' },
              { title: 'Three-year RICS compliance', desc: 'Single instruction covering the RICS recommended review period.' },
              { title: 'Managed service', desc: 'We contact you ahead of each update — no chasing required.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#1d1d1f] p-5 flex gap-4">
                <span className="text-[#c47c1e] text-sm shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm mb-0.5">{title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Ready to instruct? Get a quote today." />
      <FaqSection description="Common questions about our reinstatement cost assessment services." items={faqItems} />
    </main>
  )
}
