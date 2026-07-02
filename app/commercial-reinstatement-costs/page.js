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
  { question: 'Why does a commercial property need a RICS assessment rather than an online tool?', answer: 'Online tools cannot account for tenant fitout, specialist plant or complex M&E services - all of which form part of the reinstatement cost. A RICS assessment captures the full cost of rebuilding your specific building. An insurer will apply the average clause to any shortfall at claim.' },
  { question: 'How often should a commercial property be reassessed?', answer: 'Formally every three years, with annual BCIS-indexed adjustment in between. Our 3-Year Protection Plan handles both under a single instruction - no re-instructing, no gaps in compliance.' },
  { question: 'Do you assess listed commercial buildings?', answer: 'Yes. Our on-site survey service covers all listed property categories, including Grade I, Grade II* and Grade II commercial premises.' },
  { question: 'Can you assess a mixed-use development?', answer: 'Yes. Mixed-use developments containing both residential and commercial elements are assessed under a single instruction, with the output separated by use class.' },
  { question: 'Is a RICS assessment accepted by all UK commercial insurers?', answer: 'Yes. Our RICS-aligned reports are accepted without amendment by all UK commercial insurers and brokers.' },
]

export default function CommercialPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Commercial Property</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              Commercial underinsurance starts with the wrong figure.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              Tenant fitout, specialist plant and non-standard construction make commercial reinstatement costs uniquely complex - and uniquely easy to understate. A RICS assessment is the only defensible way to establish the correct sum insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="Commercial reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments accepted by all UK commercial insurers without amendment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="bg-[#f8f9fa] py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="badge badge-blue">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
              Three hidden cost drivers that make commercial underinsurance so common.
            </h2>
            <p className="text-[#5f6368] text-base leading-relaxed mb-8">
              Tenant fitout, specialist plant and complex M&amp;E services add costs no online tool captures.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a RICS Assessment</Link>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Online calculators', sub: 'Miss fitout, plant and M&E — wrong for most properties.', ok: false },
              { title: 'Index-linking alone', sub: 'If the base figure was wrong, so is this.', ok: false },
              { title: 'Old or inherited valuations', sub: 'Costs rose 30%+ since 2020 — pre-pandemic figures mislead.', ok: false },
              { title: 'RICS-regulated reinstatement cost assessment', sub: 'Accepted by all UK insurers. Documented, defensible, PI-insured.', ok: true },
            ].map(({ title, sub, ok }) => (
              <div key={title} className={`ls-card p-4 flex gap-3 items-start ${ok ? 'border-[#1a73e8] bg-[#e8f0fe]/40' : ''}`}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#1a73e8] tick-glow' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-medium text-[#202124] text-sm">{title}</p>
                  <p className="text-[#5f6368] text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#5f6368] text-sm mt-6">Own multiple commercial properties? <Link href="/portfolio-reinstatement-assessments" className="text-[#1a73e8] font-semibold hover:text-[#1254b5] transition-colors">See our portfolio assessment service →</Link></p>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Property Types</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">Every commercial property type, covered.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Office Buildings', href: '/contact' },
              { title: 'Retail & Leisure', href: '/contact' },
              { title: 'Industrial & Logistics', href: '/contact' },
              { title: 'Mixed-Use Developments', href: '/contact' },
              { title: 'Listed Commercial', href: '/listed-buildings' },
              { title: 'Development Sites', href: '/contact' },
            ].map(({ title, href }) => (
              <div key={title} className="brix-card">
                <div className="h-32 flex items-center justify-center" style={{background:'#f1f3f9'}}>
                  <svg className="w-9 h-9" fill="none" stroke="#9aa7bd" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                </div>
                <div className="p-5">
                  <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                  <Link href={href} className="text-[#1a73e8] text-xs font-semibold hover:text-[#1254b5] transition-colors">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Ready to protect your commercial asset? Instruct today." />
      <FaqSection description="Direct answers to the most common questions about commercial reinstatement cost assessments." items={faqItems} />
    </main>
  )
}
