import Link from 'next/link'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment Services | Rebuild Cost UK',
  },
  description:
    'Desktop, on-site and 3-year RICS reinstatement cost assessment services. Rebuild cost assessments for all UK property types from £210. Broker-ready reports accepted by all insurers.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment Services | Rebuild Cost UK',
    description:
      'RICS reinstatement cost assessment services across the UK. Desktop rebuild cost assessment from £210, On-Site Survey, and 3-Year Protection with annual BCIS updates. All reports broker-ready.',
    url: '/services',
  },
}

const servicesFaqItems = [
  { question: 'Which reinstatement cost assessment service is right for my property?', answer: 'Desktop Assessments suit standard properties needing fast, cost-effective valuations. On-Site Surveys are best for complex or high-value buildings. Our 3-Year Protection plan is ideal for long-term compliance with automatic updates.' },
  { question: 'What is a desktop rebuild cost assessment?', answer: 'A desktop rebuild cost assessment uses remote data, property records, and construction cost modelling to deliver a fast and efficient rebuild valuation, without the need for a site visit.' },
  { question: 'When do I need an on-site survey instead of desktop?', answer: 'On-site surveys are recommended for listed buildings, complex structures, non-standard construction, or high-value assets where accuracy and detail are critical.' },
  { question: 'What is included in the 3-year protection plan?', answer: 'Our 3-Year Protection plan includes a full reinstatement cost assessment plus automated annual updates, ensuring your rebuild value stays accurate and compliant as construction costs change.' },
  { question: 'Do I really need annual updates to my reinstatement cost assessment?', answer: 'Yes. Construction costs change rapidly. Without updates, your policy can quickly become inaccurate. Our automated updates keep your valuation aligned with current market rates.' },
  { question: 'Is a desktop reinstatement cost assessment accurate enough for insurance?', answer: 'For standard properties, yes. Desktop assessments provide reliable valuations using advanced modelling. However, complex properties benefit from on-site inspection for maximum accuracy.' },
  { question: 'How fast can I get my reinstatement cost assessment completed?', answer: 'Desktop assessments are typically completed within 5 days. On-site surveys and complex properties may take slightly longer depending on scope and access.' },
  { question: 'Why does an on-site survey cost more?', answer: 'On-site surveys involve a full physical inspection, detailed measurement, and expert analysis of materials and structure. This delivers the highest level of accuracy for complex buildings.' },
  { question: 'What happens if I choose the wrong reinstatement cost assessment service?', answer: 'We review every instruction before proceeding. If your property requires a higher level of assessment, we will advise you to ensure your valuation is accurate and compliant.' },
  { question: 'Is the 3-year plan better value than single assessments?', answer: 'Yes. The 3-Year Protection plan spreads cost while ensuring ongoing compliance and accuracy, removing the risk of outdated valuations between assessments.' },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const servicesBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
  ],
}

const servicesOfferJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Rebuild Cost Assessment',
  provider: { '@type': 'ProfessionalService', name: 'RCA Ltd', url: SITE_URL },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rebuild Cost Assessment Services',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Desktop Assessment',
        price: '210',
        priceCurrency: 'GBP',
        description: 'RICS-regulated desktop Rebuild Cost Assessment delivered within 48 hours.',
      },
      {
        '@type': 'Offer',
        name: '3-Year Protection',
        price: '498.15',
        priceCurrency: 'GBP',
        description: 'Full reinstatement cost assessment with automated annual updates for three years.',
      },
      {
        '@type': 'Offer',
        name: 'On-Site Survey',
        price: '675',
        priceCurrency: 'GBP',
        description: 'Full on-site Rebuild Cost Assessment for complex or high-value buildings.',
      },
    ],
  },
}

const servicesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: servicesFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesOfferJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
    <main>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/services-hero.jpeg"
          alt="Property insurance underinsurance risk — RICS reinstatement cost assessment services UK"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-xl md:max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)] text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-primary mb-6">
              <span className="text-shine-red">Insurers profit</span> from your <span className="text-shine-red">underinsurance.</span>
            </h1>
            <p className="text-sm text-secondary leading-relaxed mb-8">
              Most property owners don&rsquo;t find out they&rsquo;re underinsured until it&rsquo;s too late. A RICS reinstatement cost assessment gives you the one figure that keeps your insurer honest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
              <Link href="/contact#contact-form" className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center">
                Contact Surveyor
              </Link>
              <Link href="#pricing" className="bg-zinc-900/10 border border-zinc-900/15 text-primary px-6 py-4 rounded-full font-semibold text-sm hover:bg-zinc-900/15 active:scale-[0.97] transition-all text-center">
                Our Services
              </Link>
            </div>
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white/60 text-xs font-semibold text-secondary">
                <span className="w-2 h-2 rounded-full bg-[#1A6B4A] inline-block"></span>
                RICS Regulated &middot; London &amp; UK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="scroll-reveal pt-10 pb-16 px-8 bg-zinc-50" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>verified</span>Our Services</span>
            <h2 className="text-4xl font-bold text-primary">Choose your <span className="text-shine">Assessment.</span></h2>
            <p className="text-secondary max-w-xl mx-auto leading-relaxed">Every assessment is carried out by a RICS-regulated surveyor. Contact us for a tailored quote.</p>
          </div>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-stretch">

              {/* Desktop Assessment */}
              <div id="desktop-rca" className="grow-card pricing-card bg-white rounded-2xl p-10 flex flex-col transition-all duration-300">
                <div className="mb-8">
                  <div className="btn-shine w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>monitor</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary"><span className="text-[#1A6B4A]">Desktop</span> Reinstatement <span className="whitespace-nowrap">Cost Assessment</span></h3>
                  <p className="text-secondary text-sm">Efficient, data-driven remote valuation for standard properties.</p>
                </div>
                <ul className="space-y-2 mb-10 flex-grow">
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">RICS-regulated assessment, <span className="whitespace-nowrap">48-hour turnaround</span></span>
                  </li>
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>cloud</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">BCIS-indexed rebuild cost modelling</span>
                  </li>
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-zinc-300">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>location_off</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Site visit not included</span>
                  </li>
                </ul>
                <Link href="/contact?service=desktop#contact-form" className="w-full py-4 bg-[#0f3d28] text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Select Desktop</Link>
              </div>

              {/* On-Site Survey */}
              <div id="on-site-survey" className="grow-card pricing-card bg-white rounded-2xl p-10 flex flex-col transition-all duration-300">
                <div className="mb-8">
                  <div className="btn-shine w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>location_on</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary"><span className="text-[#1A6B4A]">On-Site</span> Reinstatement <span className="whitespace-nowrap">Cost Assessment</span></h3>
                  <p className="text-secondary text-sm">Full physical survey for listed, complex or high-value buildings.</p>
                </div>
                <ul className="space-y-2 mb-10 flex-grow">
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>search</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">RICS surveyor physical inspection</span>
                  </li>
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Specialist reinstatement cost modelling</span>
                  </li>
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>engineering</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Listed buildings &amp; complex structures</span>
                  </li>
                </ul>
                <Link href="/contact?service=onsite#contact-form" className="w-full py-4 border-2 border-[#1A6B4A] text-[#1A6B4A] hover:bg-[#0f3d28] hover:text-white rounded-full font-bold active:scale-[0.97] transition-all text-center block">Request On-Site</Link>
              </div>

              {/* 3-Year Protection */}
              <div id="three-year-protection" className="grow-card bg-white rounded-2xl p-8 flex flex-col relative border-2 border-[#1A6B4A] shadow-[0_0_32px_6px_rgba(26,107,74,0.20)]">
                <div className="absolute top-6 right-6">
                  <span className="btn-shine px-4 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest text-white">Best Value</span>
                </div>
                <div className="mb-8">
                  <div className="btn-shine w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-primary"><span className="text-[#1A6B4A]">3-Year</span> Reinstatement <span className="whitespace-nowrap">Cost Assessment</span></h3>
                  <p className="text-secondary text-sm">Full reinstatement cost assessment plus 3 years of RICS-compliant annual updates.</p>
                </div>
                <ul className="space-y-2 mb-10 flex-grow">
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>update</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Annual BCIS-indexed reinstatement updates</span>
                  </li>
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>security</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">3-year RICS reinstatement compliance</span>
                  </li>
                  <li className="flex items-center gap-3 bg-zinc-100 rounded-xl px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-7 h-7 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.9rem', fontVariationSettings: "'FILL' 1" }}>analytics</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Broker-ready report every renewal</span>
                  </li>
                </ul>
                <Link href="/contact?service=3year#contact-form" className="btn-shine w-full py-4 rounded-full font-bold text-white active:scale-[0.97] transition-all text-center block">Enquire Now</Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="scroll-reveal pt-10 pb-20 px-8 md:px-12 bg-[#0f3d28]">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-white/50 flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>checklist</span>Every Assessment Includes</span>
          <h2 className="text-4xl font-bold text-white">What you always get.</h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">Regardless of which service you choose, every reinstatement cost assessment is delivered to the same RICS-regulated standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { icon: 'gavel', title: 'RICS Regulated', desc: 'Every report meets the Royal Institution of Chartered Surveyors standards.' },
            { icon: 'analytics', title: 'Live BCIS Data', desc: 'Figures are based on current Building Cost Information Service indices.' },
            { icon: 'description', title: 'Broker-Ready Report', desc: 'Formatted for direct submission to your insurer or broker.' },
            { icon: 'shield', title: 'Professional Indemnity', desc: 'All assessments are backed by full professional indemnity insurance.' },
            { icon: 'support_agent', title: 'Dedicated Support', desc: 'A named surveyor handles your assessment from instruction to delivery.' },
            { icon: 'apartment', title: 'All Property Types', desc: 'Residential, commercial, listed, industrial, and portfolio properties.' },
          ].map(({ icon, title, desc }) => (
            <div key={icon} className="hover-grow bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4">
              <div className="btn-shine shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>{icon}</span>
              </div>
              <div>
                <p className="font-bold text-primary text-sm mb-1">{title}</p>
                <p className="text-secondary text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Detail Cards */}
      <section className="scroll-reveal py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Desktop Assessment — lightest green */}
          <div className="grow-card service-card-shine rounded-3xl overflow-hidden border border-[#b0d4c0] shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]" style={{ background: 'linear-gradient(145deg, #d4ede0 0%, #b8dfc8 100%)' }}>
            <div className="p-10 lg:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="btn-shine w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>monitor</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Desktop Reinstatement Cost Assessment</h3>
                <p className="text-secondary text-sm leading-relaxed">A fast, accurate rebuild cost assessment produced entirely remotely. No site visit required, ideal for standard residential and commercial properties.</p>
              </div>
              <Link href="/contact?service=desktop#contact-form" className="btn-shine text-white px-6 py-3 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform self-start text-center">
                Contact RICS Surveyor
              </Link>
            </div>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-[#1A6B4A]/10" style={{ background: 'rgba(255,255,255,0.6)' }}>
              {[
                { cls: 'service-subcard-reveal-1', num: 1, title: 'How it works', text: 'Our surveyors use property records, floor area data, and live BCIS construction cost indices to produce your RICS reinstatement cost assessment without a site visit.' },
                { cls: 'service-subcard-reveal-2', num: 2, title: 'Who it is for', text: 'Standard homes, buy-to-let properties, HMOs, retail units, and warehouses with straightforward construction and no listed status.' },
                { cls: 'service-subcard-reveal-3', num: 3, title: 'Turnaround', text: 'Delivered within 5 working days of instruction. Faster turnaround available on request. Contact us to discuss your deadline.' },
                { cls: 'service-subcard-reveal-4', num: 4, title: 'What you receive', text: 'A fully RICS-regulated reinstatement cost assessment report stating your current rebuild cost, accepted by all UK insurers and brokers without challenge.' },
              ].map(({ cls, num, title, text }) => (
                <div key={num} className={`${cls} bg-white rounded-2xl p-5 border border-[#1A6B4A]/15 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`sub-num-${num} w-6 h-6 rounded-md bg-[#1A6B4A]/10 flex items-center justify-center shrink-0`}>
                      <span className="font-bold text-xs">{num}</span>
                    </div>
                    <p className="font-bold text-primary text-sm">{title}</p>
                  </div>
                  <p className="text-secondary text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* On-Site Survey — mid emerald */}
          <div className="grow-card service-card-shine rounded-3xl overflow-hidden border border-[#1A6B4A]/25 shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]" style={{ background: 'linear-gradient(145deg, #7ec8a4 0%, #52b386 100%)' }}>
            <div className="p-10 lg:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="btn-shine w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem' }}>location_on</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">On-Site RICS Reinstatement Cost Assessment</h3>
                <p className="text-secondary text-sm leading-relaxed">A full physical rebuild cost assessment carried out by a RICS-regulated surveyor. The most accurate reinstatement cost assessment available, essential for listed, complex, or high-value buildings.</p>
              </div>
              <Link href="/contact?service=onsite#contact-form" className="btn-shine text-white px-6 py-3 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform self-start text-center">
                Contact RICS Surveyor
              </Link>
            </div>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-[#1A6B4A]/10" style={{ background: 'rgba(255,255,255,0.55)' }}>
              {[
                { cls: 'service-subcard-reveal-1', num: 1, title: 'How it works', text: 'A RICS-regulated surveyor attends your property, measures every element in person, assesses specification and construction, and delivers a full reinstatement cost assessment on-site.' },
                { cls: 'service-subcard-reveal-2', num: 2, title: 'Who it is for', text: 'Listed buildings, non-standard construction, complex commercial or industrial premises, and high-value assets where a desktop rebuild cost assessment cannot capture full detail.' },
                { cls: 'service-subcard-reveal-3', num: 3, title: 'Specialist coverage', text: 'Our surveyors are experienced in listed building requirements, specialist materials, M&E installations, curtilage structures, and large commercial floor plates.' },
                { cls: 'service-subcard-reveal-4', num: 4, title: 'What you receive', text: 'A comprehensive RICS reinstatement cost assessment with full site notes, photographic evidence, and a rebuild cost figure that will withstand insurer or legal scrutiny.' },
              ].map(({ cls, num, title, text }) => (
                <div key={num} className={`${cls} bg-white rounded-2xl p-5 border border-[#1A6B4A]/15 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`sub-num-${num} w-6 h-6 rounded-md bg-[#1A6B4A]/10 flex items-center justify-center shrink-0`}>
                      <span className="font-bold text-xs">{num}</span>
                    </div>
                    <p className="font-bold text-primary text-sm">{title}</p>
                  </div>
                  <p className="text-secondary text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Year Protection — deep emerald */}
          <div className="grow-card service-card-shine rounded-3xl overflow-hidden border border-[#1A6B4A]/30 shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_1.6fr]" style={{ background: 'linear-gradient(145deg, #2d9e6b 0%, #1A6B4A 100%)' }}>
            <div className="p-10 lg:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="btn-shine w-12 h-12 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.4rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
                  </div>
                  <span className="btn-shine px-3 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-widest text-white">Best Value</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">3-Year RICS Reinstatement Cost Assessment</h3>
                <p className="text-white/80 text-sm leading-relaxed">Full RICS reinstatement cost assessment plus three years of BCIS-indexed annual rebuild cost updates. Ongoing compliance with no repeat instruction required.</p>
              </div>
              <Link href="/contact?service=3year#contact-form" className="btn-shine text-white px-6 py-3 rounded-full font-semibold text-sm active:scale-[0.97] transition-transform self-start text-center">
                Enquire Now
              </Link>
            </div>
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-[#1A6B4A]/10" style={{ background: 'rgba(255,255,255,0.5)' }}>
              {[
                { cls: 'service-subcard-reveal-1', num: 1, title: 'How it works', text: 'We carry out a full RICS reinstatement cost assessment, then deliver BCIS-indexed annual rebuild cost updates automatically each year for three years.' },
                { cls: 'service-subcard-reveal-2', num: 2, title: 'Who it is for', text: 'Landlords, portfolio managers, managing agents, and property owners who need continuous RICS reinstatement compliance without commissioning a new assessment each year.' },
                { cls: 'service-subcard-reveal-3', num: 3, title: 'Annual BCIS updates', text: 'Each annual update applies the latest BCIS construction cost indices to your rebuild cost figure, keeping your reinstatement cost assessment accurate as material and labour costs change.' },
                { cls: 'service-subcard-reveal-4', num: 4, title: 'What you receive', text: 'A broker-ready RICS reinstatement cost assessment report at inception, followed by three annual rebuild cost update certificates accepted by all UK insurers.' },
              ].map(({ cls, num, title, text }) => (
                <div key={num} className={`${cls} bg-white rounded-2xl p-5 border border-[#1A6B4A]/15 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`sub-num-${num} w-6 h-6 rounded-md bg-[#1A6B4A]/10 flex items-center justify-center shrink-0`}>
                      <span className="font-bold text-xs">{num}</span>
                    </div>
                    <p className="font-bold text-primary text-sm">{title}</p>
                  </div>
                  <p className="text-secondary text-xs leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <section className="scroll-reveal pt-10 pb-16 px-8 md:px-12 mt-8">
        <div className="max-w-5xl mx-auto px-2 sm:px-6">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A] flex items-center justify-center gap-2"><span className="material-symbols-outlined" style={{fontSize:'1rem'}}>compare_arrows</span>Which is right for me?</span>
            <h2 className="text-3xl font-bold text-primary">Find your <span className="text-shine">perfect assessment.</span></h2>
          </div>
          <div className="rounded-2xl border border-[#1A6B4A]/20 shadow-[0_0_24px_2px_rgba(26,107,74,0.07)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ minWidth: '560px' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #052e1c 0%, #064e35 40%, #0a6641 70%, #064e35 100%)' }}>
                    <th className="text-left pl-5 pr-3 py-5 text-white/70 font-semibold text-xs uppercase tracking-widest sticky left-0 z-10" style={{ minWidth: '140px', background: 'inherit' }}>Feature</th>
                    <th className="px-3 py-5 text-white font-bold text-center text-xs leading-snug" style={{ minWidth: '120px' }}>Desktop Assessment</th>
                    <th className="px-3 py-5 text-white font-bold text-center text-xs leading-snug" style={{ minWidth: '120px' }}>On-Site Survey</th>
                    <th className="px-3 py-5 text-white font-bold text-center text-xs leading-snug relative" style={{ minWidth: '130px' }}>
                      <span className="inline-block bg-white text-[#1A6B4A] text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-1">Best Value</span><br />
                      3-Year Protection
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-zinc-100">
                  {[
                    { feature: 'RICS-regulated report', desktop: true, protect: true, onsite: true },
                    { feature: 'BCIS live cost data', desktop: true, protect: true, onsite: true },
                    { feature: 'Broker & insurer accepted', desktop: true, protect: true, onsite: true },
                    { feature: 'Demolition costs included', desktop: true, protect: true, onsite: true },
                    { feature: 'Professional fees included', desktop: true, protect: true, onsite: true },
                    { feature: 'Professional indemnity backed', desktop: true, protect: true, onsite: true },
                    { feature: 'Physical site inspection', desktop: false, protect: false, onsite: true },
                    { feature: 'Annual BCIS index update', desktop: false, protect: true, onsite: false },
                    { feature: '3-year RICS compliance', desktop: false, protect: true, onsite: false },
                    { feature: 'Listed / complex buildings', desktop: false, protect: false, onsite: true },
                    { feature: 'Best for', desktop: 'Standard residential & commercial', protect: 'Landlords & portfolio managers', onsite: 'Listed, high-value & complex' },
                  ].map(({ feature, desktop, protect, onsite }, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}>
                      <td className={`pl-5 pr-3 py-3.5 font-semibold text-primary text-xs sticky left-0 z-10 leading-snug ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}>{feature}</td>
                      {[desktop, onsite, protect].map((val, j) => (
                        <td key={j} className={`px-3 py-3.5 text-center align-middle ${j === 2 ? 'bg-[#1A6B4A]/5' : ''}`}>
                          {val === true ? (
                            <span className="material-symbols-outlined text-[#1A6B4A] text-lg leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          ) : val === false ? (
                            <span className="material-symbols-outlined text-zinc-300 text-lg leading-none">cancel</span>
                          ) : (
                            <span className="text-secondary text-xs font-medium leading-snug block">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-secondary mt-5">Not sure? <Link href="/contact#contact-form" className="text-[#1A6B4A] font-semibold hover:underline">Contact us</Link> and we&rsquo;ll recommend the right assessment for your property.</p>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Start Your RICS-Certified <span className="text-shine">Rebuild Cost Assessment</span> Today.
          </>
        }
      />
      <FaqSection
        description="Everything you need to choose the right reinstatement cost assessment service, stay compliant, and protect your property from underinsurance."
        items={servicesFaqItems}
      />

    </main>
    </>
  )
}
