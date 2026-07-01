import Link from 'next/link'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Reinstatement Cost Assessment Services | Desktop, On-Site & 3-Year Protection',
  description: 'RICS-regulated reinstatement cost assessment services for managing agents, RTM companies and freeholders. Desktop, on-site survey, and 3-year protection plans.',
  alternates: { canonical: '/services' },
}

const faqItems = [
  { question: 'Which service is right for my property?', answer: 'Desktop assessments are suitable for most standard residential and commercial buildings. On-Site surveys are recommended for listed buildings, complex structures, or very high-value properties. The 3-Year Protection plan suits managing agents and freeholders who want ongoing compliance without having to re-instruct each year.' },
  { question: 'How quickly will I receive my report?', answer: 'Desktop assessments are delivered within 48 hours of instruction. On-site surveys depend on survey scheduling and report complexity — we will provide a confirmed timeline on instruction.' },
  { question: 'Are your reports accepted by all UK insurers?', answer: 'Yes. Our RICS-regulated, broker-ready reports are formatted for direct submission to insurers and accepted without challenge across the UK market.' },
  { question: 'Do you cover listed and heritage buildings?', answer: 'Yes. Listed buildings require specialist knowledge of authentic materials and traditional construction methods. We have direct experience with Grade I and Grade II listed residential and commercial buildings.' },
  { question: 'Can you assess a portfolio of properties in a single instruction?', answer: 'Yes. We specialise in national portfolio assessments and provide a consolidated report with individual schedules for each asset, together with an overall portfolio summary.' },
  { question: 'What happens at the end of the 3-year protection period?', answer: 'We contact you in advance to confirm continuation or re-instruct. Most clients renew for a further three-year term.' },
]

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-[#111318] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Our Services</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-headline text-5xl md:text-6xl font-semibold text-white leading-[1.05]">
              Three assessments.<br />One standard.
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Every service we offer is conducted to RICS-regulated standards and delivered as a broker-ready report. Choose the level of instruction that fits your property and your timeline.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-0 divide-y divide-[#e5e7eb]">

          {/* Desktop */}
          <div id="desktop-rca" className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] block mb-4">01 — Desktop</span>
              <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight mb-6">
                Desktop Reinstatement Cost Assessment
              </h2>
              <Link href="/contact?service=desktop#contact-form" className="btn-shine text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-center inline-block mt-4">
                Instruct Desktop
              </Link>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[#374151] text-base leading-relaxed mb-10">
                Our desktop assessment uses BCIS-indexed construction cost data, floor area analysis, and regional build cost modelling to calculate your property's reinstatement value accurately and efficiently — without a site visit. It is the standard instruction for most residential blocks, commercial properties, and straightforward asset types.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: '48-hour turnaround', desc: 'Delivered within two working days of instruction.' },
                  { title: 'BCIS-indexed modelling', desc: 'Live construction cost data from the Building Cost Information Service.' },
                  { title: 'RICS-regulated output', desc: 'Signed off by a RICS-registered member before delivery.' },
                  { title: 'Broker-ready format', desc: 'Formatted for direct submission to your insurer or broker.' },
                  { title: 'No site visit required', desc: 'Efficient and cost-effective for standard properties.' },
                  { title: 'National coverage', desc: 'Available for properties across England, Scotland, Wales and Northern Ireland.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="border-l-2 border-[#c47c1e] pl-5">
                    <p className="font-semibold text-[#111318] text-sm mb-1">{title}</p>
                    <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#f4f5f7] p-6">
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  <strong className="text-[#111318]">Suitable for:</strong> Standard residential blocks, leasehold flats, commercial properties, buy-to-let portfolios, and most mixed-use buildings. Not recommended for listed or heritage buildings — see On-Site Survey.
                </p>
              </div>
            </div>
          </div>

          {/* On-Site */}
          <div id="on-site-survey" className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] block mb-4">02 — On-Site</span>
              <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight mb-6">
                On-Site Survey
              </h2>
              <Link href="/contact?service=onsite#contact-form" className="btn-shine text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-center inline-block mt-4">
                Request Survey
              </Link>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[#374151] text-base leading-relaxed mb-10">
                Where the property demands physical inspection — listed buildings, non-standard construction, high-value assets, or buildings with unusual specification — our RICS surveyor attends in person. Full measurement, material assessment, and construction analysis is carried out on-site, producing the most accurate reinstatement figure possible.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Physical RICS inspection', desc: 'Full on-site measurement and specification by a RICS-registered surveyor.' },
                  { title: 'Listed & heritage buildings', desc: 'Specialist knowledge of authentic materials and traditional construction methods.' },
                  { title: 'Complex structures', desc: 'Non-standard construction, unusual specification, or high-value properties.' },
                  { title: 'Full measurement record', desc: 'Complete dimensional survey retained as part of the assessment record.' },
                  { title: 'RICS-regulated output', desc: 'Signed off by a RICS-registered member — fully compliant and insurer-ready.' },
                  { title: 'PI insured', desc: 'Comprehensive professional indemnity insurance on every instruction.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="border-l-2 border-[#c47c1e] pl-5">
                    <p className="font-semibold text-[#111318] text-sm mb-1">{title}</p>
                    <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#f4f5f7] p-6">
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  <strong className="text-[#111318]">Suitable for:</strong> Grade I and Grade II listed buildings, non-standard construction, high-specification residential, complex mixed-use, and any property where desktop modelling alone would not capture the full picture.
                </p>
              </div>
            </div>
          </div>

          {/* 3-Year */}
          <div id="three-year-protection" className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] block mb-4">03 — Protection</span>
              <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight mb-6">
                3-Year Protection Plan
              </h2>
              <Link href="/contact?service=3year#contact-form" className="btn-shine text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-center inline-block mt-4">
                Enquire Now
              </Link>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[#374151] text-base leading-relaxed mb-10">
                A single instruction that keeps you RICS-compliant for three years. The base assessment is conducted in year one. In years two and three, your reinstatement figure is updated using current BCIS construction cost indices and a revised broker-ready report is delivered before each renewal — without the need to re-instruct. Ideal for managing agents and freeholders managing recurring compliance obligations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { title: 'Year-one full assessment', desc: 'Complete RICS-regulated reinstatement cost assessment as the baseline.' },
                  { title: 'Annual BCIS indexation', desc: 'Your figure updated each year using live construction cost indices.' },
                  { title: 'Renewal-ready reports', desc: 'A fresh broker-ready report delivered before each renewal date.' },
                  { title: 'Three-year compliance', desc: 'Single instruction covering your RICS obligations for three full years.' },
                  { title: 'Managed service', desc: 'We contact you in advance of each update — no chasing required.' },
                  { title: 'Best value', desc: 'Lower total cost than three separate annual instructions.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="border-l-2 border-[#c47c1e] pl-5">
                    <p className="font-semibold text-[#111318] text-sm mb-1">{title}</p>
                    <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#111318] p-6">
                <p className="text-xs text-white/60 leading-relaxed">
                  <strong className="text-white">Recommended for:</strong> Managing agents with multiple blocks, RTM companies, freeholders with ongoing lease obligations, and any client who wants to eliminate the annual reinstatement compliance task entirely.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-6 md:px-12 bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">Service Comparison</p>
          <h2 className="font-headline text-4xl font-semibold text-[#111318] mb-12">Side by side.</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#111318]">
                  <th className="text-left py-4 pr-8 text-[#111318] font-semibold text-xs uppercase tracking-widest w-1/3">Feature</th>
                  <th className="text-center py-4 px-4 text-[#111318] font-semibold text-xs uppercase tracking-widest">Desktop</th>
                  <th className="text-center py-4 px-4 text-[#111318] font-semibold text-xs uppercase tracking-widest">On-Site</th>
                  <th className="text-center py-4 px-4 bg-[#111318] text-[#c47c1e] font-semibold text-xs uppercase tracking-widest">3-Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb]">
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
                  <tr key={label} className="hover:bg-white transition-colors">
                    <td className="py-4 pr-8 text-[#374151]">{label}</td>
                    <td className="text-center py-4 px-4">{a ? <span className="text-[#c47c1e] font-bold text-base">✓</span> : <span className="text-[#d1d5db] font-bold">—</span>}</td>
                    <td className="text-center py-4 px-4">{b ? <span className="text-[#c47c1e] font-bold text-base">✓</span> : <span className="text-[#d1d5db] font-bold">—</span>}</td>
                    <td className="text-center py-4 px-4 bg-[#111318]/5">{c ? <span className="text-[#c47c1e] font-bold text-base">✓</span> : <span className="text-[#d1d5db] font-bold">—</span>}</td>
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
