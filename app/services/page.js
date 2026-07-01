import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment Services | Desktop, On-Site & 3-Year',
  description: 'RICS-regulated reinstatement cost assessment services for managing agents, RTM companies and freeholders. Desktop, on-site, and 3-year protection plans.',
  alternates: { canonical: '/services' },
}

const faqItems = [
  { question: 'Which service is right for my property?', answer: 'Desktop assessments suit most standard residential blocks and commercial properties. On-Site surveys are recommended for listed buildings, complex structures, or very high-value properties. The 3-Year Protection plan suits managing agents and freeholders who want ongoing compliance without re-instructing each year.' },
  { question: 'How quickly will I receive my report?', answer: 'Desktop assessments are delivered within 48 hours of instruction. On-site surveys depend on survey scheduling — we confirm a timeline on instruction.' },
  { question: 'Are your reports accepted by all UK insurers?', answer: 'Yes. Our RICS-regulated, broker-ready reports are accepted without challenge across the UK market.' },
  { question: 'Do you cover listed and heritage buildings?', answer: 'Yes. Listed buildings require specialist knowledge of authentic materials and traditional construction methods. Our on-site survey covers all listed property types.' },
  { question: 'Can you assess a portfolio under a single instruction?', answer: 'Yes. We provide consolidated portfolio assessments with individual reports per asset and a portfolio summary schedule.' },
]

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Our Services</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            Three assessments.<br />One standard.
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Every service is conducted to RICS-regulated standards and delivered as a broker-ready report.
          </p>
          <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
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
              BCIS-indexed rebuild cost modelling without a site visit. Efficient, accurate, and delivered within 48 hours. Suitable for most standard residential blocks and commercial properties.
            </p>
            <Link href="/contact?service=desktop#contact-form" className="btn-shine">Instruct Desktop</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: '48-hour turnaround', desc: 'Delivered within two working days of instruction.' },
              { title: 'BCIS-indexed modelling', desc: 'Live construction cost data from the Building Cost Information Service.' },
              { title: 'RICS-regulated', desc: 'Signed off by a RICS-registered member before delivery.' },
              { title: 'Broker-ready format', desc: 'Accepted without challenge by all UK insurers and brokers.' },
              { title: 'No site visit required', desc: 'Cost-effective for standard properties.' },
              { title: 'National coverage', desc: 'Available across England, Scotland, Wales and Northern Ireland.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 py-4 border-b border-black/[0.06]">
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
              A RICS surveyor attends in person. Full measurement, material assessment, and construction analysis on-site. Recommended for listed buildings, non-standard construction, and high-value assets.
            </p>
            <Link href="/contact?service=onsite#contact-form" className="btn-shine">Request Survey</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Physical RICS inspection', desc: 'Full on-site measurement by a RICS-registered surveyor.' },
              { title: 'Listed & heritage buildings', desc: 'Specialist knowledge of authentic materials and traditional construction.' },
              { title: 'Complex structures', desc: 'Non-standard construction, unusual specification, high-value properties.' },
              { title: 'Full measurement record', desc: 'Complete dimensional survey retained as part of the assessment.' },
              { title: 'RICS-regulated output', desc: 'Signed off by a RICS member — fully compliant and insurer-ready.' },
              { title: 'PI insured', desc: 'Comprehensive professional indemnity on every instruction.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 py-4 border-b border-black/[0.06]">
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
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">03 — Protection</p>
            <h2 className="font-headline font-semibold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              3-Year Protection Plan
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Single instruction. Three years of compliance. Full assessment in year one, then annual BCIS-indexed renewal reports delivered before each renewal date — without re-instructing.
            </p>
            <Link href="/contact?service=3year#contact-form" className="btn-shine">Enquire Now</Link>
          </div>
          <div className="grid grid-cols-1 gap-5">
            {[
              { title: 'Year-one full assessment', desc: 'Complete RICS-regulated assessment as the baseline.' },
              { title: 'Annual BCIS indexation', desc: 'Your figure updated each year using live construction cost indices.' },
              { title: 'Renewal-ready reports', desc: 'Fresh broker-ready report delivered before each renewal date.' },
              { title: 'Three-year compliance', desc: 'Single instruction covering RICS obligations for three years.' },
              { title: 'Managed service', desc: 'We contact you ahead of each update — no chasing required.' },
              { title: 'Best value', desc: 'Lower total cost than three separate annual instructions.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 py-4 border-b border-white/[0.08]">
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

      {/* COMPARISON */}
      <section className="bg-[#f5f5f7] py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Compare</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>Side by side.</h2>
          </div>
          <div className="bg-white overflow-hidden">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1d1d1f]">
                  <th className="text-left py-4 px-6 text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-widest w-2/5">Feature</th>
                  <th className="text-center py-4 px-4 text-[0.65rem] font-semibold text-[#1d1d1f] uppercase tracking-widest">Desktop</th>
                  <th className="text-center py-4 px-4 text-[0.65rem] font-semibold text-[#1d1d1f] uppercase tracking-widest">On-Site</th>
                  <th className="text-center py-4 px-4 bg-[#1d1d1f] text-[0.65rem] font-semibold text-[#c47c1e] uppercase tracking-widest">3-Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {[
                  ['RICS-regulated output', true, true, true],
                  ['Broker-ready report', true, true, true],
                  ['PI insured', true, true, true],
                  ['48-hour turnaround', true, false, true],
                  ['Physical site visit', false, true, false],
                  ['Listed buildings', false, true, false],
                  ['Annual BCIS updates', false, false, true],
                  ['3-year compliance', false, false, true],
                ].map(([label, a, b, c]) => (
                  <tr key={label}>
                    <td className="py-4 px-6 text-[#1d1d1f] text-sm">{label}</td>
                    <td className="text-center py-4 px-4">{a ? <span className="text-[#c47c1e] font-bold">✓</span> : <span className="text-[#d2d2d7]">—</span>}</td>
                    <td className="text-center py-4 px-4">{b ? <span className="text-[#c47c1e] font-bold">✓</span> : <span className="text-[#d2d2d7]">—</span>}</td>
                    <td className="text-center py-4 px-4 bg-[#1d1d1f]/5">{c ? <span className="text-[#c47c1e] font-bold">✓</span> : <span className="text-[#d2d2d7]">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ContactSection heading="Ready to instruct?" />
      <FaqSection description="Common questions about our reinstatement cost assessment services." items={faqItems} />
    </main>
  )
}
