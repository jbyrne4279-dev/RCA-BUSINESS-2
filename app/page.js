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
      <section className="bg-white py-12 md:py-16 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Reinstatement Cost Assessment Specialists
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#202124] leading-[1.1] mb-5">
              The reinstatement figure your portfolio depends on.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              Reinstatement cost assessments are all we do. Our practice is dedicated exclusively to RICS-regulated rebuild valuations for managing agents, freeholders and property professionals across the UK. Broker-ready. Delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 lg:h-[480px]">
            <Image
              src="/rebuild-cost-assessment-london.jpeg"
              alt="Reinstatement cost assessment. London block of flats"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-sm font-medium leading-snug">RICS-regulated assessments for residential and commercial properties across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="bg-[#f8f9fa] border-b border-[#dadce0] py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { n: '80', suffix: '%+', label: 'of UK buildings carry an inaccurate sum insured' },
            { n: '30', suffix: '%+', label: 'rise in UK construction costs 2020–2024' },
            { n: '24', suffix: ' hrs', label: 'standard turnaround for a desktop assessment' },
            { n: '3', suffix: ' yrs', label: 'RICS recommended review period' },
          ].map(({ n, suffix, label }) => (
            <div key={n} className="bg-white rounded-xl p-5 border border-[#dadce0] hover-lift">
              <p className="text-2xl md:text-3xl font-bold text-[#1a73e8] mb-1 leading-none">
                {n}<span className="text-base font-semibold align-baseline">{suffix}</span>
              </p>
              <p className="text-xs text-[#5f6368] leading-snug">{label}</p>
            </div>
          ))}
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
                Reinstatement cost is not the same as market value.
              </h2>
              <p className="text-[#5f6368] text-base leading-relaxed mb-4">
                A building's market value and its reinstatement cost are distinct figures and often differ substantially. After fire, flood or other total loss, what matters is the cost to demolish and rebuild, not the price the property would fetch on the open market.
              </p>
              <p className="text-[#5f6368] text-base leading-relaxed mb-6">
                Freeholders, managing agents and RTM companies arranging buildings insurance must base the sum insured on reinstatement cost. A RICS-regulated assessment is the only documented, defensible way to establish that figure. Reinstatement cost assessment is the sole focus of our practice.
              </p>
              <Link href="/services" className="link-amber">About reinstatement cost assessments →</Link>
            </div>
            <div className="space-y-4 scroll-reveal">
              <div className="border border-[#dadce0] rounded-xl p-6 bg-white hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#fce8e6] flex items-center justify-center text-sm">✕</span>
                  <p className="font-semibold text-[#202124]">Market value</p>
                </div>
                <p className="text-[#5f6368] text-sm leading-relaxed">What the property sells for on the open market. Determined by location, demand and comparable transactions. Irrelevant for insurance purposes.</p>
              </div>
              <div className="border-2 border-[#1a73e8] rounded-xl p-6 bg-[#e8f0fe]/30 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#e6f4ea] flex items-center justify-center text-sm text-[#1e8e3e]">✓</span>
                  <p className="font-semibold text-[#202124]">Reinstatement cost</p>
                </div>
                <p className="text-[#5f6368] text-sm leading-relaxed">The cost to demolish, clear and rebuild: structure, professional fees, statutory fees, and VAT where applicable. This is the correct basis for the buildings sum insured.</p>
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
              In a block of flats, one incorrect figure affects everyone.
            </h2>
            <p className="text-[#5f6368] text-lg leading-relaxed max-w-2xl mx-auto">
              Where the building is underinsured at the point of a major claim, the insurer applies the average clause and reduces the payout in proportion to the shortfall.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Claim shortfall', desc: 'The insurer reduces the payout in proportion to the degree of underinsurance. Leaseholders bear the gap.', icon: '⚠' },
              { title: 'Liability exposure', desc: 'Managing agents, RTM companies and freeholders face claims from leaseholders for any shortfall not covered at settlement.', icon: '⚖' },
              { title: 'Outdated figures', desc: 'Construction costs rose over 30% between 2020 and 2024. A valuation not formally reviewed in that period is materially inaccurate.', icon: '⏱' },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-xl border border-[#dadce0] p-6 scroll-reveal hover-lift">
                <div className="w-10 h-10 rounded-full bg-[#fce8e6] flex items-center justify-center mb-4 text-lg">{icon}</div>
                <h3 className="font-semibold text-[#202124] mb-2">{title}</h3>
                <p className="text-[#5f6368] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blocks-of-flats" className="link-amber">Blocks of flats assessment →</Link>
          </div>
        </div>
      </section>

      {/* SURVEYOR IMAGE STRIP */}
      <section className="relative bg-[#202124] py-14 md:py-20 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/rca-rics-surveyor.png"
            alt="RICS surveyor carrying out a reinstatement cost assessment"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center bg-[#1a73e8]/20 text-[#7baaf7] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">Who We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Built for the people responsible for getting it right.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Reinstatement cost assessment is the only service we provide. We do not offer general surveying, mortgage valuations or any other practice. Every instruction is a RICS-regulated rebuild valuation, carried out with a single focus: establishing the correct sum insured.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Managing agents, RTM companies, freeholders, leaseholders and block managers rely on that focus to protect themselves and the people they represent.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Managing Agents', href: '/managing-agents-insurance-valuations' },
              { title: 'RTM Companies', href: '/managing-agents-insurance-valuations' },
              { title: 'Freeholders', href: '/freeholders-leaseholders' },
              { title: 'Leaseholders', href: '/freeholders-leaseholders' },
              { title: 'Block Managers', href: '/blocks-of-flats' },
              { title: 'Landlords', href: '/blocks-of-flats' },
            ].map(({ title, href }) => (
              <Link key={title} href={href}
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-xl px-5 py-4 text-white font-medium text-sm transition-all flex items-center justify-between group">
                {title}
                <span className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
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
              Simple four-step process.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', title: 'Tell us about the building', desc: 'Provide the address, property type, approximate size and any previous valuation or details of recent alterations.' },
              { n: '02', title: 'We arrange inspection', desc: 'Where a site visit is required, we schedule it promptly. Desktop assessments commence on instruction.' },
              { n: '03', title: 'We assess the rebuild cost', desc: 'A structured assessment covering materials, structure, services, external works, professional fees and statutory fees.' },
              { n: '04', title: 'You receive your report', desc: 'A broker-ready report stating the declared value, methodology, assumptions and next review date.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-white rounded-xl border border-[#dadce0] p-6 scroll-reveal hover-lift">
                <div className="w-9 h-9 rounded-full bg-[#1a73e8] flex items-center justify-center text-white text-xs font-bold mb-4">{n}</div>
                <p className="font-semibold text-[#202124] text-sm mb-2">{title}</p>
                <p className="text-[#5f6368] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact#contact-form" className="btn-shine">Book an Assessment</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Our Assessments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">Three ways to instruct.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Desktop Assessment', tag: '24-hour turnaround', desc: 'BCIS-indexed rebuild cost modelling without a site visit. Accurate and cost-effective for standard residential and commercial properties.', href: '/services#desktop-rca', variant: 'default' },
              { title: 'On-Site Survey', tag: 'Full physical inspection', desc: 'A RICS surveyor attends in person. Required for listed buildings, non-standard construction and high-value assets.', href: '/services#on-site-survey', variant: 'light' },
              { title: '3-Year Protection', tag: 'Best value', desc: 'Full assessment in year one, then annual BCIS-indexed renewal reports for three years. Single instruction covering the RICS recommended review period.', href: '/services#three-year-protection', variant: 'featured' },
            ].map(({ title, tag, desc, href, variant }) => (
              <div key={title} className={`rounded-xl p-7 flex flex-col border scroll-reveal hover-lift ${
                variant === 'featured' ? 'bg-[#1a73e8] border-[#1a73e8]' :
                variant === 'light'    ? 'bg-[#e8f0fe] border-[#c8d8f8]' :
                                        'bg-white border-[#dadce0]'
              }`}>
                <span className={`text-xs font-semibold uppercase tracking-[0.08em] mb-4 ${variant === 'featured' ? 'text-white/70' : 'text-[#5f6368]'}`}>{tag}</span>
                <h3 className={`font-bold text-xl mb-3 ${variant === 'featured' ? 'text-white' : 'text-[#202124]'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed flex-1 mb-6 ${variant === 'featured' ? 'text-white/80' : 'text-[#5f6368]'}`}>{desc}</p>
                <Link href={href} className={`text-sm font-medium inline-flex items-center gap-1 transition-colors ${variant === 'featured' ? 'text-white hover:text-white/80' : 'text-[#1a73e8] hover:text-[#1557b0]'}`}>
                  View service →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services" className="link-amber">View all service details →</Link>
          </div>
        </div>
      </section>

      {/* RICS TRUST */}
      <section className="bg-[#e8f0fe] py-14 md:py-20 px-6 md:px-10 border-t border-[#c8d8f8]">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <p className="text-xs font-semibold text-[#1a73e8] uppercase tracking-[0.1em] mb-6">RICS Guidance</p>
          <blockquote className="text-2xl md:text-3xl font-bold text-[#202124] leading-snug mb-6">
            &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-14 md:py-20 border-t border-[#dadce0] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10 scroll-reveal">
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202124] leading-tight">What our clients say.</h2>
        </div>
        <ReviewCarousel />
      </section>

      <ContactSection heading="Check your sum insured. Commission an assessment." />

      {/* RESOURCES */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 px-6 md:px-10 border-t border-[#dadce0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 scroll-reveal">
            <div>
              <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-4">
                Knowledge Base
              </span>
              <h2 className="text-3xl font-bold text-[#202124]">Resources.</h2>
            </div>
            <Link href="/resources" className="link-amber shrink-0">All resources →</Link>
          </div>
          <div className="bg-white rounded-xl border border-[#dadce0] divide-y divide-[#dadce0]">
            {[
              { tag: 'Case Study', title: 'Block of flats undervalued by £340,000: how it was discovered and corrected', href: '/resources/case-study-block-of-flats-undervalued' },
              { tag: 'Guide', title: 'Index-linking vs professional revaluation: what the difference means for your liability', href: '/resources/index-linking-vs-professional-valuation' },
              { tag: 'Guide', title: 'Top five underinsurance risks for managing agents, and how to eliminate each one', href: '/resources/top-risks-of-underinsurance-for-managing-agents' },
              { tag: 'Guidance', title: 'When should block buildings insurance valuations be updated?', href: '/resources/when-should-block-insurance-valuations-be-updated' },
            ].map(({ tag, title, href }) => (
              <Link key={href} href={href} className="flex items-center gap-5 px-6 py-4 group hover:bg-[#f8f9fa] transition-colors">
                <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold px-2.5 py-1 rounded-full w-24 shrink-0 justify-center">{tag}</span>
                <span className="flex-1 text-sm font-medium text-[#202124] group-hover:text-[#1a73e8] transition-colors leading-snug">{title}</span>
                <span className="text-[#1a73e8] text-sm shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process with managing agents, freeholders and leaseholders."
        items={faqItems}
      />
    </main>
  )
}
