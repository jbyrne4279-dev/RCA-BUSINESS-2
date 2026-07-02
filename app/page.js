'use client'
import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import ReviewCarousel from './components/ReviewCarousel'

const faqItems = [
  { question: 'What is a reinstatement cost assessment?', answer: 'A reinstatement cost assessment establishes the cost of rebuilding a property from scratch for insurance purposes. It covers demolition, site clearance, structure, professional fees, statutory fees, and VAT where applicable. It is not the same as market value.' },
  { question: 'Is reinstatement cost the same as market value?', answer: 'No. Market value reflects what the property sells for on the open market. Reinstatement cost reflects what it costs to rebuild. The two figures frequently differ substantially, and only reinstatement cost is relevant for setting the buildings sum insured.' },
  { question: 'How often should a reinstatement cost assessment be updated?', answer: 'RICS guidance requires annual inflation adjustment and a formal review at least every three years, or sooner where the building has been extended, altered or significantly refurbished.' },
  { question: 'Why do managing agents and RTM companies need one?', answer: 'Managing agents and RTM companies arranging buildings insurance for blocks carry a direct obligation to insure to full reinstatement cost. Where the declared value is inadequate and a claim arises, the insurer applies the average clause and reduces the payout. Leaseholders may then hold the managing agent liable for the shortfall.' },
  { question: 'What happens if the building is underinsured?', answer: 'The insurer applies the condition of average and reduces the payout in proportion to the degree of underinsurance. Leaseholders may pursue the party responsible for arranging insurance for any unrecovered loss.' },
  { question: 'Do you carry out a site inspection?', answer: 'Site-based assessment is carried out where appropriate. We inspect the property, assess materials, structure, services and external works, and deliver a documented, broker-ready report.' },
  { question: 'Can you assess listed and heritage buildings?', answer: 'Yes. Listed buildings require specialist assessment: authentic materials, conservation requirements and period finishes all affect rebuild cost materially. We carry out site-based surveys for all listed property categories.' },
  { question: 'What areas do you cover?', answer: 'We cover the whole of the UK, including London, Liverpool and throughout the North West. Desktop assessments are available nationally. On-site surveys cover England, Scotland, Wales and Northern Ireland.' },
]

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">
              Reinstatement Cost Assessment Specialists
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              The correct sum insured — for every block you manage.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              RICS-regulated reinstatement cost assessments for managing agents, freeholders, leaseholders and portfolio landlords. Broker-ready reports delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Get a Compliant Assessment</Link>
              <Link href="/services" className="btn-ghost">See Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image
              src="/AdobeStock_1477785304.jpeg"
              alt="Reinstatement cost assessment. London block of flats"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">RICS-regulated assessments for residential and commercial properties across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="bg-[#f8f9fa] border-b border-[#e4e8f0] py-10 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4" style={{background:'#1a73e8'}}>
            {[
              { iconD: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z', n: 'Most', label: 'UK buildings carry an inaccurate sum insured' },
              { iconD: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', n: 'Higher', label: 'UK build costs vs pre-pandemic levels (BCIS)' },
              { iconD: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', n: '24 hrs', label: 'standard turnaround for a desktop assessment' },
              { iconD: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99', n: '3 yrs', label: 'RICS recommended review period' },
            ].map(({ iconD, n, label }, i) => (
              <div key={n} className={`px-5 py-5 flex items-center gap-4 ${i < 3 ? 'border-r border-white/15' : ''}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{background:'rgba(255,255,255,0.15)'}}>
                  <svg className="w-5 h-5" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={iconD} />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none mb-1">{n}</p>
                  <p className="text-xs leading-snug" style={{color:'rgba(255,255,255,0.55)'}}>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


{/* REBUILD VS MARKET VALUE */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="scroll-reveal">
              <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-5">
                Reinstatement cost is not the same as market value — and your insurer knows the difference.
              </h2>
              <p className="text-[#5f6368] text-base leading-relaxed mb-6">
                After a total loss, insurers pay to rebuild — not to match market value. A RICS-regulated assessment is the only defensible basis for the buildings sum insured.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Link href="/contact#contact-form" className="btn-shine">Get a Compliant Assessment</Link>
                <Link href="/services" className="btn-ghost">See How It Works</Link>
              </div>
            </div>
            <div className="space-y-4 scroll-reveal">
              <div className="ls-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-circle icon-circle-red text-[#d93025]">✕</span>
                  <p className="font-semibold text-[#202124]">Market value</p>
                </div>
                <p className="text-[#5f6368] text-sm leading-relaxed">What the property sells for on the open market. Irrelevant for insurance purposes.</p>
              </div>
              <div className="ls-card p-6" style={{borderColor:'#1a73e8',borderWidth:'2px',background:'linear-gradient(135deg,#f6f9ff,#eef3fd)'}}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-circle icon-circle-blue text-[#1e8e3e]">✓</span>
                  <p className="font-semibold text-[#202124]">Reinstatement cost</p>
                </div>
                <p className="text-[#5f6368] text-sm leading-relaxed">Demolition, clearance and full rebuild costs including professional and statutory fees. The correct basis for the buildings sum insured.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RISK */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              The Risk
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-4">
              One incorrect figure puts every leaseholder — and your PI cover — at risk.
            </h2>
            <p className="text-[#5f6368] text-lg leading-relaxed max-w-2xl mx-auto">
              Underinsurance triggers the average clause — the insurer cuts the payout in proportion to the shortfall. Managing agents and freeholders can be held personally liable for the gap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Reduced claim payout', desc: 'The insurer applies the average clause and cuts the payout proportionally — leaving leaseholders to fund the shortfall themselves.', icon: '⚠', color: 'icon-circle-red' },
              { title: 'Personal liability', desc: 'Managing agents, RTM companies and freeholders face direct leaseholder claims for any unrecovered loss arising from underinsurance.', icon: '⚖', color: 'icon-circle-amber' },
              { title: 'Stale figures', desc: 'UK build costs are materially higher than pre-pandemic levels (BCIS). Any figure not reviewed since 2021 is almost certainly inadequate.', icon: '⏱', color: 'icon-circle-blue' },
            ].map(({ title, desc, icon, color }) => (
              <div key={title} className="ls-card p-6 scroll-reveal">
                <div className={`icon-circle ${color} mb-4 text-base`}>{icon}</div>
                <h3 className="font-semibold text-[#202124] mb-2">{title}</h3>
                <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact#contact-form" className="btn-shine">Protect Your PI File — Book an Assessment</Link>
          </div>
        </div>
      </section>

      {/* SURVEYOR IMAGE STRIP */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/AdobeStock_1956380728.jpeg"
            alt="RICS surveyor carrying out a reinstatement cost assessment"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#1a73e8]/20 text-[#7baaf7] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Who We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Serving the professionals who carry the obligation.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              We do one thing: RICS-regulated reinstatement cost assessments. No general surveying, no mortgage valuations — every instruction is focused on establishing the correct sum insured for the right audience.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Free Quote</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Managing Agents', benefit: 'Discharge your lease obligation and protect your PI file — view managing agent services', href: '/managing-agents-insurance-valuations' },
              { title: 'RTM Companies', benefit: 'Establish a compliant figure from the moment you assume control of the building', href: '/managing-agents-insurance-valuations' },
              { title: 'Freeholders', benefit: 'Defend the insuring covenant with a RICS-regulated declared value — view freeholder services', href: '/freeholders-leaseholders' },
              { title: 'Leaseholders', benefit: 'Challenge an inadequate sum insured with independent, documented evidence', href: '/freeholders-leaseholders' },
              { title: 'Block Managers', benefit: 'Consistent, compliant figures across every block in your portfolio — view block manager services', href: '/block-managers-reinstatement-cost-assessments' },
              { title: 'Portfolio Landlords', benefit: 'Right-size every declared value across your portfolio in a single instruction', href: '/blocks-of-flats' },
            ].map(({ title, benefit, href }) => (
              <Link key={title} href={href}
                className="ls-card-dark px-5 py-5 text-white flex flex-col gap-1 group">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{title}</span>
                  <span className="text-white/40 group-hover:text-white/90 group-hover:translate-x-1 transition-all text-base">→</span>
                </div>
                <p className="text-white/50 text-xs leading-snug group-hover:text-white/70 transition-colors">{benefit}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">
              From instruction to broker-ready report in four steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', title: 'Tell us about the building', desc: 'Address, property type, approximate GIA and any previous valuation. Takes two minutes.' },
              { n: '02', title: 'We confirm scope and fee', desc: 'We confirm whether a desktop or on-site survey is appropriate and agree a fixed fee.' },
              { n: '03', title: 'We carry out the assessment', desc: 'Structure, materials, services, external works, professional fees — all captured in full.' },
              { n: '04', title: 'You receive your report', desc: 'Broker-ready declared value, methodology, assumptions and next RICS review date — ready to submit.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="ls-card p-6 scroll-reveal">
                <div className="step-num mb-5">{n}</div>
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact#contact-form" className="btn-shine">Start Your Assessment Today</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Why Cavendish &amp; Rowe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-3">Why managing agents, freeholders and landlords trust Cavendish &amp; Rowe.</h2>
            <p className="text-[#5f6368] text-base max-w-xl mx-auto">One practice. One focus. Every instruction carries the same RICS-regulated standard — no generalists, no shortcuts.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Specialist only', desc: 'Reinstatement cost assessments only — no general surveying, no mortgage work, no distraction.' },
              { title: 'RICS regulated', desc: 'Every assessment supervised by a RICS-registered member and fully defensible at leasehold tribunal.' },
              { title: '24-hr turnaround', desc: 'Desktop assessments delivered within 24 hours of instruction — ideal for renewal deadlines.' },
              { title: 'PI insured', desc: 'Professional indemnity insurance on every instruction, giving you and your clients documented recourse.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card p-6 scroll-reveal">
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-reveal">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Our Assessments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight mb-3">Three assessments. Every property type covered.</h2>
            <p className="text-[#5f6368] text-base max-w-lg mx-auto">From a single block to an entire portfolio — choose the service that matches your property type and compliance deadline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Desktop Assessment */}
            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col scroll-reveal">
              <p className="text-xs text-[#5f6368] uppercase tracking-wider font-semibold mb-2">24-hour turnaround</p>
              <h3 className="font-bold text-2xl text-[#202124] mb-6">Desktop Assessment</h3>
              <ul className="space-y-3 flex-1 mb-4">
                {['BCIS-indexed cost modelling', 'No site visit required', 'RICS-aligned methodology', 'Broker-ready report format', 'National coverage'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3c4043]">
                    <svg className="w-4 h-4 shrink-0 text-[#1a73e8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#5f6368] mb-6 leading-snug">Managing a portfolio? <Link href="/block-managers-reinstatement-cost-assessments" className="text-[#1a73e8] hover:underline">See our portfolio assessment service →</Link></p>
              <Link href="/services#desktop-rca" className="border border-[#dadce0] text-[#202124] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors block">
                Instruct a Desktop Assessment →
              </Link>
            </div>

            {/* On-Site Survey */}
            <div className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex flex-col scroll-reveal">
              <p className="text-xs text-[#5f6368] uppercase tracking-wider font-semibold mb-2">Full physical inspection</p>
              <h3 className="font-bold text-2xl text-[#202124] mb-6">On-Site Survey</h3>
              <ul className="space-y-3 flex-1 mb-4">
                {['RICS surveyor attends in person', 'Listed & heritage buildings', 'Non-standard construction', 'Full dimensional measurement', 'PI insured every instruction'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3c4043]">
                    <svg className="w-4 h-4 shrink-0 text-[#1a73e8]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#5f6368] mb-6 leading-snug">Own a listed or heritage property? <Link href="/freeholders-leaseholders" className="text-[#1a73e8] hover:underline">See freeholder services →</Link></p>
              <Link href="/services#on-site-survey" className="border border-[#dadce0] text-[#202124] font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#1a73e8] hover:text-[#1a73e8] transition-colors block">
                Request an On-Site Survey →
              </Link>
            </div>

            {/* 3-Year Protection — Popular */}
            <div className="rounded-2xl p-7 flex flex-col relative scroll-reveal" style={{background:'#4a5568'}}>
              <span className="absolute top-5 right-5 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Recommended for Managing Agents</span>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{color:'rgba(255,255,255,0.55)'}}>Full compliance. Zero admin.</p>
              <h3 className="font-bold text-2xl text-white mb-6">3-Year Protection Plan</h3>
              <ul className="space-y-3 flex-1 mb-4">
                {['Full assessment in year one', 'Annual BCIS indexation updates', 'Renewal-ready reports each year', 'Three-year RICS compliance — guaranteed', 'Fully managed — no chasing renewals'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm" style={{color:'rgba(255,255,255,0.85)'}}>
                    <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-xs mb-6 leading-snug" style={{color:'rgba(255,255,255,0.55)'}}>The default choice for managing agents with multiple blocks — one instruction covers three years of RICS compliance.</p>
              <Link href="/contact?service=3year#contact-form" className="bg-white font-semibold text-sm px-5 py-3 rounded-xl text-center hover:bg-white/90 transition-colors block" style={{color:'#4a5568'}}>
                Get 3-Year Protection →
              </Link>
            </div>

          </div>
          <div className="mt-6 text-center">
            <Link href="/services" className="link-amber">Compare all assessment options in full →</Link>
          </div>
        </div>
      </section>

      {/* RICS TRUST */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="border-l-4 border-[#1a73e8] pl-8">
            <p className="text-xs font-semibold text-[#1a73e8] uppercase tracking-[0.15em] mb-5">RICS Guidance</p>
            <blockquote className="text-xl md:text-2xl font-semibold text-[#202124] leading-[1.5] mb-5">
              &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
            </blockquote>
            <cite className="text-[#5f6368] text-sm not-italic font-medium">Royal Institution of Chartered Surveyors</cite>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      <ContactSection heading="Is your sum insured correct? Commission an assessment and find out." />

      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process with managing agents, freeholders and leaseholders."
        items={faqItems}
      />
    </main>
  )
}
