'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

const faqItems = [
  { question: 'Do managing agents have a legal obligation to commission a reinstatement cost assessment?', answer: 'Where a lease covenants insurance at full reinstatement cost, the party responsible for arranging insurance — typically the managing agent, freeholder, or RTM company — has a contractual obligation to insure to that figure. A RICS-regulated Reinstatement Cost Assessment provides the defensible, documented basis for that sum insured.' },
  { question: 'What happens if the sum insured is wrong and a claim arises?', answer: 'If the building is underinsured at the point of claim, the insurer may apply the condition of average — reducing the payout in proportion to the degree of underinsurance. Leaseholders may then hold the party responsible for arranging insurance liable for the shortfall. Our RICS-regulated assessment eliminates that exposure.' },
  { question: 'Can leaseholders instruct us independently?', answer: 'Yes. Leaseholders who believe the sum insured arranged by their managing agent or freeholder is incorrect can instruct us for an independent assessment. Our report can be used to raise a formal challenge or support a service charge dispute.' },
  { question: 'How much does a typical reinstatement cost assessment cost?', answer: 'Pricing depends on property type and size. Please get in touch for a bespoke quote.' },
  { question: 'Is RCA Ltd regulated by RICS?', answer: 'Yes. Reinstatement Cost Assessment Ltd is a RICS Regulated Firm. Every assessment is conducted by or under the supervision of a RICS-registered member, ensuring full regulatory compliance and professional accountability.' },
  { question: 'What areas of the UK do you cover?', answer: 'We provide Reinstatement Cost Assessments across the whole of the United Kingdom. Desktop assessments are available nationally. On-site surveys are available throughout England, Scotland, Wales, and Northern Ireland.' },
]

export default function HomePage() {
  const tickerRef = useRef(null)

  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    let x = 0
    let raf
    const speed = 0.4
    const total = el.scrollWidth / 2
    function tick() {
      x += speed
      if (x >= total) x = 0
      el.style.transform = 'translateX(-' + x + 'px)'
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <main>
      {/* CREDENTIAL BAR */}
      <div className="bg-[#c47c1e] py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="text-white text-[0.65rem] font-semibold uppercase tracking-[0.22em]">RICS Regulated Firm · Company No. 17101918</span>
          <span className="text-white/70 text-[0.65rem] uppercase tracking-widest">17 Hanover Square, London W1S 1BN</span>
        </div>
      </div>

      {/* HERO — pure editorial, no background image */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: editorial headline */}
            <div className="lg:col-span-7">
              <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Reinstatement Cost Assessment Ltd</p>
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-semibold text-[#111318] leading-[1.0] tracking-tight mb-8">
                The obligation<br />is not<br />optional.
              </h1>
              <div className="w-12 h-px bg-[#c47c1e] mb-8" />
              <p className="text-[#374151] text-lg leading-relaxed max-w-lg mb-10">
                Where a lease covenants insurance at full reinstatement cost, managing agents, RTM companies and freeholders are contractually bound to insure to rebuild value. One inaccurate figure — discovered at the point of claim — exposes you to personal liability for the shortfall.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact#contact-form" className="btn-shine text-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-center inline-block">
                  Instruct Us Today
                </Link>
                <Link href="/services" className="border border-[#111318]/20 text-[#111318] hover:border-[#c47c1e] hover:text-[#c47c1e] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-center inline-block transition-all">
                  View Services
                </Link>
              </div>
            </div>

            {/* Right: three large typographic stats */}
            <div className="lg:col-span-5 flex flex-col divide-y divide-[#e5e7eb]">
              {[
                { n: '80%+', label: 'of UK properties carry an inaccurate reinstatement figure' },
                { n: '48 hrs', label: 'standard turnaround for a desktop assessment' },
                { n: '£425bn', label: 'estimated UK underinsurance gap' },
              ].map(({ n, label }) => (
                <div key={n} className="py-8 first:pt-0 last:pb-0">
                  <p className="font-headline text-5xl md:text-6xl font-semibold text-[#111318] leading-none mb-3">{n}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#111318] py-3 overflow-hidden">
        <div ref={tickerRef} className="flex gap-0 w-max will-change-transform">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8 shrink-0">
              {['RICS Regulated', 'Broker-Ready Reports', '48 Hour Turnaround', 'PI Insured', 'National Coverage', 'Managing Agent Specialists', 'Listed Buildings', 'Portfolio Assessments'].map(t => (
                <span key={t} className="text-white/30 text-[0.65rem] uppercase tracking-[0.25em] font-medium whitespace-nowrap">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHO WE WORK WITH — editorial text list */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">Who We Work With</p>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#111318] leading-[1.05] mb-6">
              The obligation<br />falls on you.
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed">
              Where a lease obliges insurance at full reinstatement cost, the party responsible for arranging that cover carries the liability when it is wrong.
            </p>
          </div>
          <div className="lg:col-span-8">
            {[
              {
                n: '01',
                name: 'Managing Agents',
                desc: 'If you arrange buildings insurance for a block and the sum insured proves inadequate at the point of claim, leaseholders may hold you accountable for the shortfall. One RICS-regulated assessment removes that exposure permanently.',
                href: '/managing-agents-insurance-valuations',
              },
              {
                n: '02',
                name: 'RTM Companies',
                desc: 'When leaseholders exercise the Right to Manage, the insurance obligation transfers with it. Establish the correct reinstatement figure before the next renewal — and evidence your compliance from day one.',
                href: '/managing-agents-insurance-valuations',
              },
              {
                n: '03',
                name: 'Freeholders & Landlords',
                desc: 'Most long leases require the freeholder to insure to full reinstatement value. Our RICS report provides the figure the lease demands, with a documented, defensible basis to evidence it at any point.',
                href: '/contact#contact-form',
              },
              {
                n: '04',
                name: 'Block Managers',
                desc: 'Block management firms holding multiple mandates need assessments they can rely on across their portfolio — consistent, compliant, and accepted at renewal without challenge.',
                href: '/block-managers-reinstatement-cost-assessments',
              },
            ].map(({ n, name, desc, href }) => (
              <div key={n} className="border-t border-[#e5e7eb] py-8 flex flex-col sm:flex-row gap-4 sm:gap-8 group">
                <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.25em] sm:w-10 shrink-0 mt-1">{n}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline text-2xl font-semibold text-[#111318]">{name}</h3>
                    <Link href={href} className="text-[#c47c1e] text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-4">
                      Learn more →
                    </Link>
                  </div>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#e5e7eb]" />
          </div>
        </div>
      </section>

      {/* DARK PULL QUOTE */}
      <section className="bg-[#111318] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">RICS Position</p>
            <blockquote className="font-headline text-3xl md:text-4xl font-semibold text-white leading-[1.2] mb-8">
              &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
            </blockquote>
            <p className="text-white/40 text-sm uppercase tracking-widest">— RICS Guidance Note, Building Reinstatement Cost Assessments</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
            {[
              { n: '1 in 4', label: 'UK properties are underinsured by more than 25%', sub: 'ABI estimate' },
              { n: '3 yrs', label: 'maximum recommended interval between formal reassessments', sub: 'RICS guidance' },
            ].map(({ n, label, sub }) => (
              <div key={n} className="bg-[#111318] p-8">
                <p className="font-headline text-4xl font-semibold text-[#c47c1e] mb-3 leading-none">{n}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-2">{label}</p>
                <p className="text-white/25 text-xs uppercase tracking-widest">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSESSMENTS — horizontal editorial list */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-4">Our Assessments</p>
              <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#111318] leading-tight">Three ways to instruct.</h2>
            </div>
            <Link href="/services" className="text-[#c47c1e] text-xs font-semibold uppercase tracking-widest hover:text-[#111318] transition-colors shrink-0">
              Full service details →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
            {[
              {
                n: '01',
                title: 'Desktop Assessment',
                price: 'From consultation',
                features: ['RICS-regulated, 48-hour turnaround', 'BCIS-indexed rebuild cost modelling', 'Broker-ready report, no site visit required'],
                href: '/contact?service=desktop#contact-form',
              },
              {
                n: '02',
                title: 'On-Site Survey',
                price: 'Bespoke quote',
                features: ['Physical RICS surveyor inspection', 'Listed buildings & complex structures', 'Full measurement and specification'],
                href: '/contact?service=onsite#contact-form',
              },
              {
                n: '03',
                title: '3-Year Protection',
                price: 'Best value',
                features: ['Full assessment plus 3-year indexation', 'Annual BCIS-updated renewal reports', 'Single instruction, ongoing compliance'],
                href: '/contact?service=3year#contact-form',
              },
            ].map(({ n, title, price, features, href }) => (
              <div key={n} className="bg-white p-10 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-headline text-5xl font-semibold text-[#e5e7eb] leading-none">{n}</span>
                  <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.2em] mt-2">{price}</span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-[#111318] mb-6">{title}</h3>
                <ul className="space-y-3 flex-1 mb-10">
                  {features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#6b7280]">
                      <span className="w-1 h-1 rounded-full bg-[#c47c1e] mt-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={href} className="text-sm font-semibold uppercase tracking-[0.15em] text-[#111318] hover:text-[#c47c1e] transition-colors border-b border-[#111318]/20 hover:border-[#c47c1e] pb-1 inline-block">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — 4 column horizontal steps */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-4">How It Works</p>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#111318]">From instruction to delivery.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#e5e7eb]">
            {[
              { n: '1', title: 'You instruct us', desc: 'Submit your property details online or by phone. We confirm receipt within one business day.' },
              { n: '2', title: 'We assess', desc: 'BCIS-indexed desktop modelling or on-site physical survey — matched to your property type.' },
              { n: '3', title: 'You receive the report', desc: 'A RICS-regulated, broker-ready report delivered within 48 hours for desktop assessments.' },
              { n: '4', title: 'Ongoing compliance', desc: 'Opt into our 3-year plan for annual indexation updates that keep you compliant at every renewal.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="p-8 lg:p-10">
                <div className="border-t-4 border-[#c47c1e] pt-6 mb-6">
                  <span className="font-headline text-4xl font-semibold text-[#e5e7eb] leading-none">{n}</span>
                </div>
                <h3 className="font-semibold text-[#111318] text-sm mb-3 uppercase tracking-wide">{title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — pull quote format */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#111318]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-4">Client Testimonials</p>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white">What our clients say.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
            {[
              { quote: 'Instructing RCA Ltd has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.', name: 'Caroline F.', role: 'Managing Agent Director, London' },
              { quote: 'After our RTM we needed to establish the correct reinstatement figure from scratch. RCA came back quickly with a robust RICS report — confidence going into the first renewal under our management.', name: 'Michael T.', role: 'RTM Company Director, Surrey' },
              { quote: 'Our insurer flagged we were underinsured at renewal. RCA Ltd turned out we were short by nearly £200k. Sorted now — and the process was straightforward.', name: 'James H.', role: 'Landlord, Manchester' },
            ].map(({ quote, name, role }) => (
              <div key={name} className="bg-[#111318] p-10 flex flex-col">
                <p className="font-headline text-xl font-semibold text-white leading-relaxed flex-1 mb-8">&ldquo;{quote}&rdquo;</p>
                <div>
                  <div className="w-8 h-px bg-[#c47c1e] mb-4" />
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS INCLUDED — 2 col text grid */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-6">Every Assessment Includes</p>
            <h2 className="font-headline text-4xl font-semibold text-[#111318] leading-tight mb-6">What you always get.</h2>
            <p className="text-[#6b7280] text-sm leading-relaxed">
              Every reinstatement cost assessment is delivered to the same RICS-regulated standard, regardless of the service tier you select.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-[#e5e7eb]">
            {[
              { title: 'RICS Regulated', desc: 'Every report meets Royal Institution of Chartered Surveyors standards and is signed off by a RICS-registered member.' },
              { title: 'Live BCIS Data', desc: 'Figures based on current Building Cost Information Service construction cost indices — the same data used by major UK insurers.' },
              { title: 'Broker-Ready Format', desc: 'Formatted for direct submission to your insurer or broker and accepted without challenge.' },
              { title: 'Professional Indemnity', desc: 'All assessments backed by comprehensive PI insurance. You are covered. We never get it wrong.' },
              { title: 'Named Surveyor', desc: 'One dedicated contact manages your instruction from receipt to delivery. No handoffs.' },
              { title: 'All Property Types', desc: 'Residential blocks, commercial, listed buildings, industrial assets, and national portfolios.' },
            ].map(({ title, desc }) => (
              <div key={title} className="py-7 sm:px-6 first:pt-0 sm:first:pt-7">
                <p className="font-semibold text-[#111318] text-sm mb-2">{title}</p>
                <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES — editorial link list */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-4">Knowledge Base</p>
              <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#111318]">Resources.</h2>
            </div>
            <Link href="/resources" className="text-[#c47c1e] text-xs font-semibold uppercase tracking-widest hover:text-[#111318] transition-colors shrink-0">
              All resources →
            </Link>
          </div>
          <div className="divide-y divide-[#e5e7eb]">
            {[
              { tag: 'Case Study', title: 'Block of flats undervalued by £340,000 — how it was discovered and corrected', href: '/resources/case-study-block-of-flats-undervalued' },
              { tag: 'Guide', title: 'Index-linking vs professional revaluation: what the difference means for your liability', href: '/resources/index-linking-vs-professional-valuation' },
              { tag: 'Guide', title: 'Top five underinsurance risks for managing agents — and how to eliminate each one', href: '/resources/top-risks-of-underinsurance-for-managing-agents' },
              { tag: 'Guidance', title: 'When should block buildings insurance valuations be updated?', href: '/resources/when-should-block-insurance-valuations-be-updated' },
            ].map(({ tag, title, href }) => (
              <Link key={href} href={href} className="flex items-center justify-between py-6 group">
                <div className="flex items-start gap-6">
                  <span className="text-[#c47c1e] text-[0.6rem] font-semibold uppercase tracking-[0.2em] mt-1 w-16 shrink-0">{tag}</span>
                  <span className="font-semibold text-[#111318] text-sm leading-snug group-hover:text-[#c47c1e] transition-colors">{title}</span>
                </div>
                <span className="text-[#c47c1e] text-sm ml-6 shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Commission your assessment." />
      <FaqSection description="Answers to the most common questions about reinstatement cost assessments, RICS compliance, and how we protect managing agents, freeholders and leaseholders." items={faqItems} />
    </main>
  )
}
