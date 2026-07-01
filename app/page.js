'use client'
import Link from 'next/link'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'

const faqItems = [
  { question: 'Do managing agents have a legal obligation to commission a reinstatement cost assessment?', answer: 'Where a lease covenants insurance at full reinstatement cost, the party responsible for arranging insurance — typically the managing agent, freeholder, or RTM company — has a contractual obligation to insure to that figure. A RICS-regulated assessment provides the defensible, documented basis for that sum insured.' },
  { question: 'What happens if the sum insured is wrong and a claim arises?', answer: 'If the building is underinsured at the point of claim, the insurer may apply the condition of average — reducing the payout in proportion to the degree of underinsurance. Leaseholders may then hold the party responsible for arranging insurance liable for the shortfall.' },
  { question: 'Can leaseholders instruct you independently?', answer: 'Yes. Leaseholders who believe the sum insured arranged by their managing agent or freeholder is incorrect can instruct us for an independent assessment. Our report can be used to raise a formal challenge or support a service charge dispute.' },
  { question: 'How much does a reinstatement cost assessment cost?', answer: 'Pricing depends on property type and size. Please get in touch for a bespoke quote with no obligation.' },
  { question: 'Is RCA Ltd regulated by RICS?', answer: 'Yes. Reinstatement Cost Assessment Ltd is a RICS Regulated Firm. Every assessment is conducted by or under the supervision of a RICS-registered member.' },
  { question: 'What areas of the UK do you cover?', answer: 'We provide assessments across the whole of the United Kingdom. Desktop assessments are available nationally. On-site surveys are available throughout England, Scotland, Wales, and Northern Ireland.' },
]

export default function HomePage() {
  return (
    <main>

      {/* HERO */}
      <section className="bg-[#f5f5f7] pt-20 pb-28 px-6 md:px-10 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">
            RICS Regulated · 17 Hanover Square, London
          </p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}>
            The obligation<br />is not optional.
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Where a lease covenants insurance at full reinstatement cost, managing agents, RTM companies and freeholders are contractually bound to get the figure right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact#contact-form" className="btn-shine">Instruct Us</Link>
            <Link href="/services" className="btn-ghost">Our Services</Link>
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <div className="bg-white border-b border-black/[0.06] py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {['RICS Regulated Firm', 'PI Insured', '48 Hour Turnaround', 'Broker-Ready Reports', 'National Coverage'].map(t => (
            <span key={t} className="text-[0.7rem] font-medium text-[#6e6e73] uppercase tracking-[0.14em]">{t}</span>
          ))}
        </div>
      </div>

      {/* THE PROBLEM */}
      <section className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">The Risk</p>
          <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Over 80% of UK properties carry<br className="hidden md:block" /> an inaccurate reinstatement figure.
          </h2>
          <p className="text-[#6e6e73] text-lg leading-relaxed mb-10">
            Most won&rsquo;t discover this until a claim arises. By then, the insurer has applied the condition of average and reduced the payout. The managing agent, RTM company, or freeholder who arranged the insurance is left exposed to leaseholder claims for the shortfall.
          </p>
          <Link href="/resources/top-risks-of-underinsurance-for-managing-agents" className="link-amber">
            Read the risks →
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#1d1d1f] py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center">
          {[
            { n: '80%+',   label: 'of UK buildings carry the wrong rebuild cost on their policy' },
            { n: '£425bn', label: 'estimated total UK underinsurance gap across the property market' },
            { n: '48 hrs', label: 'standard turnaround for a RICS-regulated desktop assessment' },
          ].map(({ n, label }) => (
            <div key={n}>
              <p className="font-headline font-semibold text-white leading-none mb-5"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>{n}</p>
              <p className="text-white/45 text-sm leading-relaxed max-w-[20ch] mx-auto">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Who We Work With</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              The obligation falls on you.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Managing Agents',
                desc: 'If you arrange buildings insurance for a block and the sum insured proves inadequate at the point of claim, leaseholders may hold you accountable for the shortfall. One RICS assessment removes that exposure.',
                href: '/managing-agents-insurance-valuations',
              },
              {
                title: 'RTM Companies',
                desc: 'When leaseholders exercise the Right to Manage, the insurance obligation transfers with it. Establish the correct reinstatement figure before the next renewal — and evidence your compliance from day one.',
                href: '/managing-agents-insurance-valuations',
              },
              {
                title: 'Freeholders',
                desc: 'Most long leases require the freeholder to insure the block to full reinstatement value. Our RICS report provides the figure the lease demands with a documented, defensible basis to evidence it.',
                href: '/contact#contact-form',
              },
            ].map(({ title, desc, href }) => (
              <div key={title} className="bg-white p-8 flex flex-col">
                <h3 className="font-headline text-2xl font-semibold text-[#1d1d1f] mb-4">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed flex-1 mb-6">{desc}</p>
                <Link href={href} className="link-amber">Learn more →</Link>
              </div>
            ))}
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
              { title: 'Desktop Assessment', tag: '48-hour turnaround', desc: 'BCIS-indexed rebuild cost modelling without a site visit. Suitable for most residential and commercial properties.', href: '/contact?service=desktop#contact-form', dark: false },
              { title: 'On-Site Survey', tag: 'Full physical inspection', desc: 'A RICS surveyor attends in person. Recommended for listed buildings, non-standard construction, and high-value assets.', href: '/contact?service=onsite#contact-form', dark: false },
              { title: '3-Year Protection', tag: 'Best value', desc: 'Full assessment plus annual BCIS-indexed renewal reports for three years. Single instruction, ongoing compliance.', href: '/contact?service=3year#contact-form', dark: true },
            ].map(({ title, tag, desc, href, dark }) => (
              <div key={title} className={`p-8 flex flex-col ${dark ? 'bg-[#1d1d1f]' : 'bg-[#f5f5f7]'}`}>
                <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.18em] mb-6 ${dark ? 'text-[#c47c1e]' : 'text-[#6e6e73]'}`}>{tag}</span>
                <h3 className={`font-headline text-2xl font-semibold mb-4 ${dark ? 'text-white' : 'text-[#1d1d1f]'}`}>{title}</h3>
                <p className={`text-sm leading-relaxed flex-1 mb-8 ${dark ? 'text-white/50' : 'text-[#6e6e73]'}`}>{desc}</p>
                <Link href={href} className={dark ? 'link-amber' : 'text-[0.75rem] font-semibold text-[#1d1d1f] uppercase tracking-[0.06em] hover:text-[#c47c1e] transition-colors'}>
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="link-amber">View full service details →</Link>
          </div>
        </div>
      </section>

      {/* RICS QUOTE */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-10">RICS Guidance</p>
          <blockquote className="font-headline font-semibold text-[#1d1d1f] leading-[1.15] tracking-tight mb-8"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)' }}>
            &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
          </blockquote>
          <p className="text-[#6e6e73] text-sm uppercase tracking-widest">
            RICS Guidance Note — Building Reinstatement Cost Assessments
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Client Testimonials</p>
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

      {/* WHAT IS INCLUDED */}
      <section className="bg-[#f5f5f7] py-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[0.7rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em] mb-6">Every Assessment</p>
            <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              What you always get.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'RICS Regulated', desc: 'Every report meets Royal Institution of Chartered Surveyors standards and is signed off by a RICS-registered member.' },
              { title: 'Live BCIS Data', desc: 'Figures calculated from current Building Cost Information Service construction cost indices — the same data used by major UK insurers.' },
              { title: 'Broker-Ready Format', desc: 'Formatted for direct submission to your insurer or broker. Accepted without challenge across the UK market.' },
              { title: 'Professional Indemnity', desc: 'Comprehensive PI insurance on every instruction. You are covered. We never get it wrong.' },
              { title: 'Named Surveyor', desc: 'One dedicated contact manages your instruction from receipt to delivery — no handoffs.' },
              { title: 'All Property Types', desc: 'Residential blocks, commercial, listed buildings, industrial assets, and national portfolios.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-8">
                <p className="font-semibold text-[#1d1d1f] text-sm mb-3">{title}</p>
                <p className="text-[#6e6e73] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-white py-28 px-6 md:px-10">
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

      <ContactSection heading="Commission your assessment." />
      <FaqSection
        description="Everything you need to know about reinstatement cost assessments, RICS compliance, and how we protect managing agents, freeholders and leaseholders."
        items={faqItems}
      />
    </main>
  )
}
