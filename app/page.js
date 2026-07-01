'use client'
import Link from 'next/link'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

const faqItems = [
  { question: 'What is a reinstatement cost assessment?', answer: 'A reinstatement cost assessment is a specialist valuation that estimates the cost of rebuilding a property for insurance purposes. It includes demolition and site clearance, rebuild costs, professional fees, statutory fees, and VAT where applicable. It is not the same as the market value of the property.' },
  { question: 'Is reinstatement cost the same as market value?', answer: 'No. Market value is what the property might sell for on the open market. Reinstatement cost is what it would cost to rebuild it after total loss. The two figures are often very different — and only the reinstatement cost is relevant for setting the buildings sum insured.' },
  { question: 'How often should a reinstatement cost assessment be updated?', answer: 'RICS guidance supports annual inflation adjustment and a more detailed review every three years, or sooner if the building changes significantly. Relying on an outdated figure without a formal review can leave a building underinsured.' },
  { question: 'Why do managing agents and RTM companies need one?', answer: 'Managing agents and RTM companies are often responsible for arranging buildings insurance for blocks of flats. If the declared value is wrong and a claim arises, the insurer may reduce the payout under the average clause. A specialist RCA provides the defensible basis for the sum insured.' },
  { question: 'What happens if the building is underinsured?', answer: 'If the buildings sum insured is too low, the insurer can apply the condition of average and reduce the payout in proportion to the degree of underinsurance. Leaseholders may then pursue the party responsible for arranging insurance for the shortfall.' },
  { question: 'Do you carry out a site inspection?', answer: 'A proper reinstatement cost assessment is site-based where appropriate. We inspect the property, consider materials, structure, services, and external works, and provide a clear report you can use with your insurer or broker.' },
  { question: 'Can you assess listed and heritage buildings?', answer: 'Yes. Listed and heritage buildings need specialist attention because reinstatement can be significantly more complex and costly than standard construction. Special materials, conservation requirements and detailed finishes all affect the rebuild cost.' },
  { question: 'What areas do you cover?', answer: 'We provide assessments across the United Kingdom, including London, Liverpool and throughout the North West. Desktop assessments are available nationally. On-site surveys cover England, Scotland, Wales and Northern Ireland.' },
]

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">
            RICS Regulated · UK Specialist
          </p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            Accurate reinstatement cost<br />assessments for blocks of flats,<br />managing agents and freeholders.
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Protect your clients, residents and leaseholders with a specialist valuation that helps set the correct buildings sum insured.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact#contact-form" className="btn-shine">Request an RCA</Link>
            <Link href="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-white border-b border-black/[0.06] py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {['RICS Regulated Firm', 'PI Insured', 'National Coverage', 'Broker-Ready Reports', 'Site-Based Assessments'].map(t => (
            <span key={t} className="text-[0.7rem] font-medium text-[#6e6e73] uppercase tracking-[0.14em]">{t}</span>
          ))}
        </div>
      </div>

      {/* REBUILD VS MARKET VALUE */}
      <section className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">Why It Matters</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Reinstatement cost is not the same as market value.
            </h2>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-6">
              A building may be worth one figure on the open market, but cost something very different to rebuild after fire, flood or other major damage. The sum insured on a buildings policy should reflect what it costs to rebuild — not what you could sell for.
            </p>
            <p className="text-[#6e6e73] text-base leading-relaxed mb-8">
              That is why leaseholders, freeholders, managing agents and RTM companies rely on specialist reinstatement cost assessments to reduce the risk of underinsurance. If the buildings sum insured is too low, the policy may not fully cover the rebuild cost and a claim shortfall can follow.
            </p>
            <Link href="/reinstatement-cost-assessment" className="link-amber">About reinstatement cost assessments →</Link>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#f5f5f7] mt-2">
            {[
              { label: 'Market value', desc: 'What the property might sell for. Affected by location, demand, and comparable sales. Irrelevant for insurance purposes.' },
              { label: 'Reinstatement cost', desc: 'What it costs to rebuild from scratch. Includes demolition, structure, professional fees, statutory fees, and VAT. This is what should set your sum insured.' },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-white p-8">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{label}</p>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RISK */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">The Risk</p>
          <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            In a block of flats, one incorrect figure affects everyone.
          </h2>
          <p className="text-[#6e6e73] text-lg leading-relaxed mb-10">
            If the building is underinsured, leaseholders may face a financial shortfall at the point of claim. The people responsible for arranging cover — managing agents, RTM companies, freeholders — may be exposed to complaints or liability concerns. A detailed reinstatement cost assessment reduces that risk by giving a stronger, documented basis for the insurance figure.
          </p>
          <Link href="/blocks-of-flats" className="link-amber">
            Blocks of flats RCA →
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1d1d1f] py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          {[
            { n: '80%+',   label: 'of UK buildings estimated to carry an inaccurate sum insured' },
            { n: '30%+',   label: 'rise in UK construction costs between 2020 and 2024 (BCIS data)' },
            { n: '3 yrs',  label: 'RICS guidance recommends a formal review at least every three years' },
          ].map(({ n, label }) => (
            <div key={n}>
              <p className="font-headline font-semibold text-white leading-none mb-5"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>{n}</p>
              <p className="text-white/45 text-sm leading-relaxed max-w-[22ch] mx-auto">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Who We Work With</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Built for the people responsible<br className="hidden md:block" /> for getting it right.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Managing Agents',
                desc: 'You arrange buildings insurance for the block. If the declared value is wrong and a claim arises, leaseholders may hold you responsible for the shortfall. A specialist RCA gives you the defensible figure the lease requires.',
                href: '/managing-agents-insurance-valuations',
              },
              {
                title: 'RTM Companies',
                desc: 'When leaseholders exercise the Right to Manage, the insurance obligation transfers with it. Establish the correct reinstatement figure before the next renewal and evidence your compliance from day one.',
                href: '/managing-agents-insurance-valuations',
              },
              {
                title: 'Freeholders',
                desc: 'Most long leases require the freeholder to insure to full reinstatement cost. Our RICS report provides the documented basis that satisfies your lease obligation, your insurer, and your leaseholders.',
                href: '/freeholders-leaseholders',
              },
              {
                title: 'Leaseholders',
                desc: 'If you believe the sum insured arranged for your block is incorrect, you can instruct an independent reinstatement cost assessment. Our report can be used to support a formal challenge or service charge dispute.',
                href: '/freeholders-leaseholders',
              },
              {
                title: 'Block Managers',
                desc: 'Portfolio or single block — we work with block managers across the UK to ensure every property in your management has an accurate, up-to-date reinstatement cost figure and a renewal-ready report.',
                href: '/blocks-of-flats',
              },
              {
                title: 'Landlords',
                desc: 'Whether you own a converted house, a purpose-built block or a mixed-use building, an accurate reinstatement cost assessment protects your insurance cover and supports buildings compliance.',
                href: '/blocks-of-flats',
              },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-[#f5f5f7] p-8 flex flex-col">
                <h3 className="font-headline text-xl font-semibold text-[#1d1d1f] mb-4">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                <Link href={href} className="link-amber">Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">The Process</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              How it works.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', title: 'Tell us about the building', desc: 'Share the address, property type, size and any previous valuation or recent alterations.' },
              { n: '02', title: 'We arrange inspection', desc: 'Where a site visit is needed, we arrange it promptly. Desktop assessments begin on instruction.' },
              { n: '03', title: 'We assess the rebuild cost', desc: 'Using a structured, specialist approach — materials, structure, services, external works, fees and VAT.' },
              { n: '04', title: 'You receive your report', desc: 'A clear, broker-ready report with the declared value, methodology, and review guidance.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-white p-8">
                <span className="text-[0.65rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] block mb-4">{n}</span>
                <p className="font-semibold text-[#1d1d1f] text-sm mb-2">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact#contact-form" className="btn-shine">Book an Assessment</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Our Assessments</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              Three ways to instruct.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Desktop Assessment', tag: '48-hour turnaround', desc: 'BCIS-indexed rebuild cost modelling without a site visit. Accurate and cost-effective for most standard residential and commercial properties.', href: '/services#desktop-rca', dark: false },
              { title: 'On-Site Survey', tag: 'Full physical inspection', desc: 'A RICS surveyor attends in person. Recommended for listed buildings, non-standard construction, and high-value properties where a site visit matters.', href: '/services#on-site-survey', dark: false },
              { title: '3-Year Protection', tag: 'Best value', desc: 'Full assessment in year one, plus annual BCIS-indexed renewal reports for three years. Single instruction, ongoing compliance.', href: '/services#three-year-protection', dark: true },
            ].map(({ title, tag, desc, href, dark }) => (
              <div key={title} className={`p-8 flex flex-col ${dark ? 'bg-[#1d1d1f]' : 'bg-[#f5f5f7]'}`}>
                <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] mb-6 ${dark ? 'text-[#c47c1e]' : 'text-[#6e6e73]'}`}>{tag}</span>
                <h3 className={`font-headline text-2xl font-semibold mb-4 ${dark ? 'text-white' : 'text-[#1d1d1f]'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed flex-1 mb-8 ${dark ? 'text-white/50' : 'text-[#6e6e73]'}`}>{desc}</p>
                <Link href={href} className={dark ? 'link-amber' : 'text-[0.75rem] font-semibold text-[#1d1d1f] uppercase tracking-[0.06em] hover:text-[#c47c1e] transition-colors'}>
                  View service →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="link-amber">View full service details →</Link>
          </div>
        </div>
      </section>

      {/* RICS TRUST */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-10">RICS Guidance</p>
          <blockquote className="font-headline font-semibold text-[#1d1d1f] leading-[1.15] tracking-tight mb-8"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
            &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
          </blockquote>
          <p className="text-[#6e6e73] text-sm uppercase tracking-widest mb-10">
            RICS Guidance Note — Building Reinstatement Cost Assessments
          </p>
          <p className="text-[#6e6e73] text-base leading-relaxed">
            RICS guidance treats reinstatement cost assessment as a specialist service in its own right — not a quick add-on to another survey. It supports regular review, typically with annual inflation adjustment and a more detailed review every three years.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Client Feedback</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              What our clients say.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { quote: 'Instructing RCA Ltd has become standard practice at renewal. The reports are accepted without challenge and our leaseholders know the sum insured is correct.', name: 'Caroline F.', role: 'Managing Agent Director, London' },
              { quote: 'After our RTM we needed to establish the correct reinstatement figure from scratch. RCA came back quickly with a robust RICS report and real confidence going into our first renewal.', name: 'Michael T.', role: 'RTM Company Director, Surrey' },
              { quote: 'Our insurer flagged we were underinsured at renewal. Turned out we were short by nearly £200k. RCA sorted it within the week. Straightforward process, no drama.', name: 'James H.', role: 'Landlord, Manchester' },
            ].map(({ quote, name, role }) => (
              <div key={name} className="bg-[#f5f5f7] p-8 flex flex-col">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#c47c1e]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#1d1d1f] text-sm leading-relaxed flex-1 mb-6">&ldquo;{quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#1d1d1f] text-sm">{name}</p>
                  <p className="text-[#6e6e73] text-xs mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-4">Knowledge Base</p>
              <h2 className="font-headline font-semibold text-[#1d1d1f] leading-tight tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Resources.</h2>
            </div>
            <Link href="/resources" className="link-amber shrink-0">All resources →</Link>
          </div>
          <div className="divide-y divide-black/[0.06]">
            {[
              { tag: 'Case Study', title: 'Block of flats undervalued by £340,000 — how it was discovered and corrected', href: '/resources/case-study-block-of-flats-undervalued' },
              { tag: 'Guide', title: 'Index-linking vs professional revaluation: what the difference means for your liability', href: '/resources/index-linking-vs-professional-valuation' },
              { tag: 'Guide', title: 'Top five underinsurance risks for managing agents — and how to eliminate each one', href: '/resources/top-risks-of-underinsurance-for-managing-agents' },
              { tag: 'Guidance', title: 'When should block buildings insurance valuations be updated?', href: '/resources/when-should-block-insurance-valuations-be-updated' },
            ].map(({ tag, title, href }) => (
              <Link key={href} href={href} className="flex items-center gap-6 py-5 group">
                <span className="text-[0.65rem] font-semibold text-[#c47c1e] uppercase tracking-[0.18em] w-16 shrink-0">{tag}</span>
                <span className="flex-1 text-sm font-medium text-[#1d1d1f] group-hover:text-[#c47c1e] transition-colors leading-snug">{title}</span>
                <span className="text-[#c47c1e] text-sm shrink-0 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Check your sum insured. Commission an assessment." />
      <FaqSection
        description="Common questions about reinstatement cost assessments, underinsurance risk, and how we work with managing agents, freeholders and leaseholders."
        items={faqItems}
      />
    </main>
  )
}
