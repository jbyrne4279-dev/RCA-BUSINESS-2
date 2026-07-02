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

export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#e2e8f0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0d1b3e] leading-[1.05] mb-6">
              Three service tiers. One <span className="blue-keyword">specialist firm</span>.
            </h1>
            <p className="text-[#64748b] text-lg leading-relaxed mb-8">
              Desktop Assessment for standard properties, On-Site Survey for listed and complex buildings, and the 3-Year Protection Plan for ongoing RICS compliance. Every instruction is RICS-aligned and broker-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services#service-cards" className="btn-ghost">View Services</Link>
            </div>
            <Image src="/rics-logo.png" alt="RICS Regulated" width={80} height={40} className="object-contain mt-6 opacity-90" />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(0,87,255,0.15), 0 4px 16px rgba(0,0,0,0.08)'}}>
            <Image
              src="/AdobeStock_158046067.jpeg"
              alt="RICS reinstatement cost assessment building survey"
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

      {/* SECTION A - WHY SPECIALIST */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="badge badge-blue">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Generic tools cannot replace a <span className="blue-keyword">RICS specialist</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              UK construction costs rose over 30% between 2020 and 2024 - any figure not formally reviewed in that period is materially inaccurate. Only a RICS-aligned assessment is defensible with your insurer.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Check Your Sum Insured</Link>
          </div>
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7 space-y-3" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            {[
              { label: 'Online calculators', sub: 'No accountability. Not defensible in a dispute.', ok: false },
              { label: 'Index-linking alone', sub: 'Adjusts the figure. Does not replace a review.', ok: false },
              { label: 'Old or inherited valuations', sub: 'Stale figures create underinsurance risk.', ok: false },
              { label: 'RICS-aligned reinstatement cost assessment', sub: 'Specialist, documented. Accepted by every UK insurer.', ok: true },
            ].map(({ label, sub, ok }) => (
              <div key={label} className={`flex gap-3 items-start p-4 rounded-xl border ${ok ? 'border-[#0057FF]' : 'border-[#e2e8f0]'}`} style={ok ? {background:'rgba(0,87,255,0.08)'} : {}}>
                <span className={`text-sm font-bold shrink-0 mt-0.5 ${ok ? 'text-[#0057FF]' : 'text-[#d93025]'}`}>{ok ? '✓' : '✕'}</span>
                <div>
                  <p className="font-medium text-[#0d1b3e] text-sm">{label}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION B - THREE TIERS OVERVIEW */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-7 space-y-5" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
            {[
              { icon: '🖥', num: '01', title: 'Desktop Assessment', desc: 'BCIS-indexed rebuild cost modelling. Delivered within 24 hours. Ideal for standard residential and commercial property.' },
              { icon: '📐', num: '02', title: 'On-Site Survey', desc: 'RICS surveyor attends in person. Full measurement and material assessment. Required for listed and complex buildings.' },
              { icon: '🛡', num: '03', title: '3-Year Protection Plan', desc: 'One instruction. Three years of RICS compliance. Annual index-linked renewal reports before each renewal date.' },
            ].map(({ icon, num, title, desc }) => (
              <div key={num} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg" style={{background:'rgba(0,87,255,0.12)'}}>
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-0.5">{num}</p>
                  <p className="font-semibold text-[#0d1b3e] text-sm mb-1">{title}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="badge badge-blue">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-5">
              Three service tiers. One <span className="blue-keyword">specialist</span>.
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed mb-6">
              Whether you need a fast desktop report, a full on-site inspection, or a managed three-year compliance programme, we have a service to match your property and your obligations.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Recommendation</Link>
          </div>
        </div>
      </section>

      {/* 3-COL SERVICE CARDS */}
      <section id="service-cards" className="py-16 md:py-24 px-6 md:px-10 border-t border-[#e2e8f0]" style={{background:'#f0f4ff'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge badge-blue">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mt-3">
              Pick the assessment that <span className="blue-keyword">fits your property</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🖥',
                id: 'desktop-rca',
                badge: '01. Desktop',
                title: 'Desktop Assessment',
                desc: 'BCIS-indexed rebuild cost modelling without a site visit. Delivered within 24 hours of instruction. Accepted by all UK insurers.',
                href: '/contact?service=desktop#contact-form',
                link: 'Request Desktop Assessment →',
              },
              {
                icon: '📐',
                id: 'on-site-survey',
                badge: '02. On-Site',
                title: 'On-Site Survey',
                desc: 'A RICS surveyor attends in person for full measurement and construction analysis. Required for listed, heritage and complex buildings.',
                href: '/contact?service=onsite#contact-form',
                link: 'Request On-Site Survey →',
              },
              {
                icon: '🛡',
                id: 'three-year-protection',
                badge: '03. Recommended',
                title: '3-Year Protection Plan',
                desc: 'One instruction covers three years of RICS compliance - full assessment in year one, annual BCIS-indexed renewal reports before each renewal date.',
                href: '/contact?service=3year#contact-form',
                link: 'Enquire About Protection Plan →',
              },
            ].map(({ icon, id, badge, title, desc, href, link }) => (
              <div key={id} id={id} className="bg-white border border-[#e2e8f0] rounded-2xl p-7 flex flex-col" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.05)'}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{background:'rgba(0,87,255,0.12)'}}>
                  {icon}
                </div>
                <p className="text-xs font-semibold text-[#0057FF] uppercase tracking-wide mb-1">{badge}</p>
                <h3 className="text-xl font-bold text-[#0d1b3e] mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                <Link href={href} className="link-arrow">
                  {link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAL CTA BANNER */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{background:'linear-gradient(135deg, #0057FF 0%, #0040CC 100%)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Not sure which <span className="blue-keyword">service you need</span>?
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Tell us about your property and we'll recommend the right service. Most instructions are confirmed same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine" style={{background:'white', color:'#0057FF'}}>Request an Assessment</Link>
              <Link href="/contact#contact-form" className="btn-ghost" style={{borderColor:'white', color:'white'}}>Ask a Question</Link>
            </div>
          </div>
          <div className="bg-white border border-white/20 rounded-2xl p-7" style={{boxShadow:'0 2px 16px rgba(0,0,0,0.10)'}}>
            <p className="font-semibold text-[#0d1b3e] mb-4">Every instruction includes:</p>
            <ul className="space-y-3">
              {[
                'RICS-aligned assessment supervised by a registered member',
                'Broker-ready report accepted by all UK insurers',
                'Professional indemnity cover on every instruction',
                'National coverage - England, Scotland, Wales and NI',
                'Clear turnaround confirmed on instruction',
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="text-[#0057FF] font-bold text-sm shrink-0 mt-0.5">✓</span>
                  <span className="text-[#0d1b3e] text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection heading="Not sure which service you need? We'll advise." />
      <FaqSection description="Still deciding? Use these answers to narrow it down - or contact us and we'll recommend the right service for your property." items={faqItems} />

    </main>
  )
}













