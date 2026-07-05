import Link from 'next/link'
import Image from 'next/image'
import TrustStrip from '../components/TrustStrip'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaBanner from '../components/CtaBanner'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Commercial Reinstatement Cost Assessment | RICS Regulated',
  description: 'RICS-regulated reinstatement cost assessments for commercial properties. Offices, retail, industrial and mixed-use. Broker-ready reports accepted by all UK insurers.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
}

const faqItems = [
  { question: 'Why does a commercial property need a RICS reinstatement cost assessment rather than an online calculator?', answer: 'Online calculators cannot account for tenant fitout, specialist plant, complex M&E services, or bespoke construction — all of which form part of the commercial reinstatement cost. A RICS-regulated reinstatement cost assessment captures the full rebuild cost specific to your building. Any shortfall at claim triggers the average clause, and insurers apply it without exception.' },
  { question: 'How often should a commercial reinstatement cost assessment be updated?', answer: 'A formal RICS rebuild cost assessment is required at least every three years, with annual BCIS-indexed adjustment in between. UK construction costs rose over 30% between 2020 and 2024 — any commercial reinstatement cost assessment not formally reviewed in that period is likely to be materially inaccurate. Our 3-Year Protection Plan handles both requirements under a single instruction.' },
  { question: 'Do you carry out reinstatement cost assessments for listed commercial buildings?', answer: 'Yes. Our on-site reinstatement cost assessment service covers all listed property categories, including Grade I, Grade II* and Grade II commercial premises. Listed commercial properties require physical inspection — a desktop rebuild cost assessment cannot capture heritage materials, conservation consent costs or specialist trades.' },
  { question: 'Can you provide a reinstatement cost assessment for a mixed-use development?', answer: 'Yes. Mixed-use developments containing both residential and commercial elements are assessed under a single reinstatement cost assessment instruction, with the declared value output separated by use class for the insurer. This ensures the commercial reinstatement cost and the residential rebuild cost are each correctly declared.' },
  { question: 'Are your commercial reinstatement cost assessment reports accepted by all UK insurers?', answer: 'Yes. Every RICS-regulated reinstatement cost assessment and rebuild cost assessment we produce is accepted without amendment by all UK commercial insurers and brokers. Each report documents the declared value, methodology, key assumptions and review date in the format the market expects.' },
]

export default function CommercialPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reinstatementcostassessment.org/' },
          { '@type': 'ListItem', position: 2, name: 'Commercial Reinstatement Costs', item: 'https://reinstatementcostassessment.org/commercial-reinstatement-costs' },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO */}
      <section className="hero-bg py-10 md:py-24 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0d1b3e] leading-[1.08] mb-6">
              Commercial <span className="blue-keyword">underinsurance</span> starts with the <span className="blue-keyword">wrong figure</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-lg">
              Tenant fitout, specialist plant and non-standard construction make commercial reinstatement costs uniquely complex - and uniquely easy to understate. A RICS assessment is the only defensible way to establish the correct sum insured.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-52 sm:h-64 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="Commercial reinstatement cost assessment"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/50 via-[#0d1b3e]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments accepted by all UK commercial insurers without amendment.</p>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* 2. SECTION A - Why commercial is complex (text left, comparison card right) */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="badge badge-blue mb-4">The Problem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Why commercial reinstatement is so <span className="blue-keyword">complex to get right</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              Commercial buildings carry hidden cost layers that generic tools ignore entirely. Three drivers account for the majority of commercial underinsurance in the UK:
            </p>
            <ul className="tick-list space-y-4 mb-8">
              {[
                { label: 'Tenant fitout', desc: 'Category A and B fitout installed by tenants is often excluded from building schedules but must be reinstated - adding substantial cost.' },
                { label: 'Specialist plant', desc: 'HVAC, lifts, substations and process equipment carry high replacement values that no index can capture without a site assessment.' },
                { label: 'M&E services', desc: 'Mechanical and electrical infrastructure in offices, retail and industrial buildings routinely represents 20–40% of rebuild cost.' },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-3 items-start">
                  <span className="tick-icon mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{background:'rgba(0,87,255,0.15)'}}>
                    <svg className="w-3 h-3" fill="none" stroke="#0057FF" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm">{label}</p>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/contact#contact-form" className="btn-shine">Get a RICS Assessment</Link>
          </div>

          <div className="space-y-3 lg:pt-10">
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest mb-4">How approaches compare</p>
            {[
              { title: 'Online calculators', sub: 'Miss fitout, plant and M&E - wrong for most commercial properties.', ok: false },
              { title: 'Index-linking alone', sub: 'If the base figure was wrong, index-linking compounds the error.', ok: false },
              { title: 'Old or inherited valuations', sub: 'Build costs rose 30%+ since 2020 - pre-pandemic figures mislead.', ok: false },
              { title: 'RICS reinstatement cost assessment', sub: 'Captures all cost layers. Accepted by all UK insurers. PI-insured and defensible.', ok: true },
            ].map(({ title, sub, ok }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border p-4 flex gap-3 items-start"
                style={{
                  borderColor: ok ? '#16a34a' : '#f87171',
                  background: ok ? 'rgba(22,163,74,0.06)' : 'rgba(239,68,68,0.05)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <span className={`shrink-0 mt-0.5 ${ok ? 'text-[#16a34a]' : 'text-[#d93025]'}`}>
                  {ok
                    ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="1.5,7 5,10.5 12.5,3"/></svg>
                    : <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="2" y1="2" x2="12" y2="12"/><line x1="12" y1="2" x2="2" y2="12"/></svg>
                  }
                </span>
                <div>
                  <p className="font-semibold text-[#0d1b3e] text-sm">{title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
            <p className="text-[#64748b] text-sm pt-2">Own multiple commercial properties? <Link href="/portfolio-reinstatement-assessments" className="link-arrow cta-flash">See our portfolio assessment service ?</Link></p>
          </div>
        </div>
      </section>

      {/* 3. SECTION B - Property types (card left, text right) */}
      <section className="bg-white py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden" style={{boxShadow:'0 8px 32px rgba(0,87,255,0.10)'}}>
            <div className="px-6 py-4 border-b border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
              <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-widest">Property Types We Assess</p>
            </div>
            <ul className="divide-y divide-[#e2e8f0]">
              {[
                { title: 'Office Buildings', href: '/contact' },
                { title: 'Retail & Leisure', href: '/contact' },
                { title: 'Industrial & Logistics', href: '/contact' },
                { title: 'Mixed-Use Developments', href: '/contact' },
                { title: 'Listed Commercial', href: '/listed-buildings' },
                { title: 'Development Sites', href: '/contact' },
              ].map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="flex items-center justify-between px-6 py-4 hover:bg-[#f0f4ff] transition-colors group"
                  >
                    <span className="font-medium text-[#0d1b3e] text-sm">{title}</span>
                    <svg className="w-4 h-4 text-[#0057FF] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="badge badge-blue mb-4">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Every commercial property type, <span className="blue-keyword">covered</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-5">
              From single-tenant industrial units to multi-let city centre offices, our RICS-regulated assessors have the sector knowledge to establish an accurate reinstatement cost - whatever the asset class.
            </p>
            <p className="text-[#64748b] text-base leading-relaxed mb-8">
              Mixed-use developments are assessed under a single instruction, with the output separated by use class so your insurer has clean, compliant figures for each element.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">All Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3-COL FEATURE CARDS */}
      <section className="py-12 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight">Specialist assessments for specialist buildings.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Tenant Fitout Captured',
                desc: 'We identify and value Category A and B fitout installed by occupying tenants - a cost layer that online tools and index-linked valuations routinely miss entirely.',
                href: '/contact',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
              },
              {
                title: 'Listed Commercial',
                desc: 'Grade I, Grade II* and Grade II commercial buildings assessed by surveyors experienced in historic fabric, specialist materials and Heritage England compliance.',
                href: '/listed-buildings',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
              },
              {
                title: 'Mixed-Use Assessment',
                desc: 'A single instruction covers the entire development. Output is separated by use class - residential and commercial figures presented cleanly for your insurer.',
                href: '/contact',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="#0057FF" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                ),
              },
            ].map(({ title, desc, href, icon }) => (
              <div key={title} className="card-hover bg-white border border-[#e2e8f0] rounded-2xl p-6 flex flex-col" style={{boxShadow:'0 4px 16px rgba(0,0,0,0.05)'}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'rgba(0,87,255,0.1)'}}>
                  {icon}
                </div>
                <h3 className="font-bold text-[#0d1b3e] text-base mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                <Link href={href} className="link-arrow cta-flash">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner />

      <ContactSection heading="Ready to protect your commercial asset? Instruct today." />
      <FaqSection description="Direct answers to the most common questions about commercial reinstatement cost assessments." items={faqItems} />
    </main>
  )
}

















