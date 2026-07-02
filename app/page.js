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
    <main style={{ background: '#07070f' }}>

      {/* HERO */}
      <section className="hero-bg py-20 md:py-28 px-6 md:px-10 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Reinstatement Cost Assessment Specialists</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              The reinstatement figure your portfolio depends on.
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-8">
              Reinstatement cost assessments are all we do. RICS-regulated rebuild valuations for managing agents, freeholders and property professionals across the UK. Broker-ready. Delivered within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
              <Link href="/services" className="btn-ghost">Our Services</Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]"
            style={{ boxShadow: '0 0 0 1px rgba(124,58,237,0.2), 0 24px 64px rgba(124,58,237,0.12), 0 4px 16px rgba(0,0,0,0.4)' }}>
            <Image src="/AdobeStock_1477785304.jpeg" alt="Reinstatement cost assessment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/70 via-[#07070f]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/80 text-sm font-medium leading-snug">RICS-regulated assessments for residential and commercial properties across the UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="border-b border-white/[0.06] py-10 px-6 md:px-10" style={{ background: '#0d0d1e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4 border border-white/[0.06]"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(109,40,217,0.1) 100%)' }}>
            {[
              { iconD: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z', n: 'Most', label: 'UK buildings carry an inaccurate sum insured' },
              { iconD: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941', n: 'Higher', label: 'UK build costs vs pre-pandemic levels (BCIS)' },
              { iconD: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', n: '24 hrs', label: 'standard turnaround for a desktop assessment' },
              { iconD: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99', n: '3 yrs', label: 'RICS recommended review period' },
            ].map(({ iconD, n, label }, i) => (
              <div key={n} className={`px-5 py-5 flex items-center gap-4 ${i < 3 ? 'border-r border-white/[0.06]' : ''}`}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(124,58,237,0.2)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#a78bfa" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={iconD} />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none mb-1">{n}</p>
                  <p className="text-xs leading-snug text-white/40">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-b border-white/[0.06]" style={{ background: '#07070f' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="scroll-reveal">
              <span className="badge badge-blue">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
                Reinstatement cost is not the same as market value.
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-4">
                A building&apos;s market value and its reinstatement cost are distinct figures and often differ substantially. After fire, flood or other total loss, what matters is the cost to demolish and rebuild — not the price the property would fetch on the open market.
              </p>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Freeholders, managing agents and RTM companies arranging buildings insurance must base the sum insured on reinstatement cost. A RICS-regulated assessment is the only documented, defensible way to establish that figure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                <Link href="/contact#contact-form" className="btn-shine">Request an Assessment</Link>
                <Link href="/services" className="btn-ghost">How It Works</Link>
              </div>
            </div>
            <div className="space-y-4 scroll-reveal">
              <div className="ls-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-circle icon-circle-red text-red-400">✕</span>
                  <p className="font-semibold text-white">Market value</p>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">What the property sells for on the open market. Determined by location, demand and comparable transactions. Irrelevant for insurance purposes.</p>
              </div>
              <div className="ls-card p-6" style={{ borderColor: 'rgba(124,58,237,0.4)', borderWidth: '1.5px', background: 'rgba(124,58,237,0.06)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="icon-circle icon-circle-blue text-[#a78bfa]">✓</span>
                  <p className="font-semibold text-white">Reinstatement cost</p>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">The cost to demolish, clear and rebuild: structure, professional fees, statutory fees, and VAT where applicable. This is the correct basis for the buildings sum insured.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RISK */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-b border-white/[0.06]" style={{ background: '#0d0d1e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <span className="badge badge-blue">The Risk</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              In a block of flats, one incorrect figure affects everyone.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
              Where the building is underinsured at the point of a major claim, the insurer applies the average clause and reduces the payout in proportion to the shortfall.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Claim shortfall', desc: 'The insurer reduces the payout in proportion to the degree of underinsurance. Leaseholders bear the gap.', icon: '⚠', color: 'icon-circle-red' },
              { title: 'Liability exposure', desc: 'Managing agents, RTM companies and freeholders face claims from leaseholders for any shortfall not covered at settlement.', icon: '⚖', color: 'icon-circle-amber' },
              { title: 'Outdated figures', desc: 'UK construction costs rose significantly between 2020 and 2023 and remain materially higher than pre-pandemic levels. A valuation not reviewed in that period is materially inaccurate.', icon: '⏱', color: 'icon-circle-blue' },
            ].map(({ title, desc, icon, color }) => (
              <div key={title} className="ls-card p-6 scroll-reveal">
                <div className={`icon-circle ${color} mb-4 text-base`}>{icon}</div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact#contact-form" className="btn-shine">Get a Compliant Assessment</Link>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="relative py-16 md:py-24 px-6 md:px-10 border-b border-white/[0.06] overflow-hidden" style={{ background: '#030308' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)' }} />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">Who We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              Built for the people responsible for getting it right.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              Reinstatement cost assessment is the only service we provide. Every instruction is a RICS-regulated rebuild valuation carried out with a single focus: establishing the correct sum insured.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Managing agents, RTM companies, freeholders, leaseholders and block managers rely on that focus to protect themselves and the people they represent.
            </p>
            <Link href="/contact#contact-form" className="btn-shine">Get a Quote</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: 'Managing Agents', benefit: 'Discharge your lease obligation and protect your PI file', href: '/managing-agents-insurance-valuations' },
              { title: 'RTM Companies', benefit: 'Establish a compliant figure from the moment you assume responsibility', href: '/managing-agents-insurance-valuations' },
              { title: 'Freeholders', benefit: 'Defend the insuring covenant with a RICS-regulated declared value', href: '/freeholders-leaseholders' },
              { title: 'Leaseholders', benefit: 'Challenge an inadequate sum insured with documented evidence', href: '/freeholders-leaseholders' },
              { title: 'Block Managers', benefit: 'Consistent, compliant figures across every block under management', href: '/block-managers-reinstatement-cost-assessments' },
              { title: 'Landlords', benefit: 'Right-size your declared value — over or underinsured', href: '/blocks-of-flats' },
            ].map(({ title, benefit, href }) => (
              <Link key={title} href={href} className="ls-card-dark px-5 py-5 flex flex-col gap-1 group">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white/80 text-sm group-hover:text-white transition-colors">{title}</span>
                  <span className="text-white/25 group-hover:text-[#a78bfa] group-hover:translate-x-1 transition-all text-base">→</span>
                </div>
                <p className="text-white/35 text-xs leading-snug group-hover:text-white/55 transition-colors">{benefit}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-b border-white/[0.06]" style={{ background: '#07070f' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <span className="badge badge-blue">Why Cavendish &amp; Rowe</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">The specialist practice for reinstatement cost assessments.</h2>
            <p className="text-white/45 text-base max-w-xl mx-auto">One practice. One focus. Every instruction carries the same RICS-regulated standard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Specialist only', desc: 'Reinstatement cost assessment is the only service we offer. No general surveying, no valuations — one focus, done properly.' },
              { title: 'RICS regulated', desc: 'Every assessment carried out by or under the direct supervision of a RICS-registered member. Defensible at tribunal.' },
              { title: '24-hr turnaround', desc: 'Desktop assessments delivered within 24 hours of instruction for most standard residential and commercial properties.' },
              { title: 'PI insured', desc: 'Comprehensive professional indemnity insurance on every instruction. Every figure is professionally backed.' },
            ].map(({ title, desc }) => (
              <div key={title} className="ls-card p-6 scroll-reveal">
                <p className="font-semibold text-white/90 text-sm mb-2">{title}</p>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-b border-white/[0.06]" style={{ background: '#0d0d1e' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <span className="badge badge-blue">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Simple four-step process.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', title: 'Tell us about the building', desc: 'Provide the address, property type, approximate size and any previous valuation or details of recent alterations.' },
              { n: '02', title: 'We arrange inspection', desc: 'Where a site visit is required, we schedule it promptly. Desktop assessments commence on instruction.' },
              { n: '03', title: 'We assess the rebuild cost', desc: 'A structured assessment covering materials, structure, services, external works, professional fees and statutory fees.' },
              { n: '04', title: 'You receive your report', desc: 'A broker-ready report stating the declared value, methodology, assumptions and next review date.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="ls-card p-6 scroll-reveal">
                <div className="step-num mb-5">{n}</div>
                <p className="font-semibold text-white/90 text-sm mb-2">{title}</p>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact#contact-form" className="btn-shine">Book an Assessment</Link>
          </div>
        </div>
      </section>

      {/* SERVICES / PRICING */}
      <section className="py-16 md:py-24 px-6 md:px-10 border-b border-white/[0.06]" style={{ background: '#07070f' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <span className="badge badge-blue">Our Assessments</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">Choose the right assessment.</h2>
            <p className="text-white/45 text-base max-w-lg mx-auto">Select the assessment that fits your property and compliance needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="ls-card p-7 flex flex-col scroll-reveal">
              <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-2">24-hour turnaround</p>
              <h3 className="font-bold text-2xl text-white mb-6">Desktop Assessment</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['BCIS-indexed cost modelling', 'No site visit required', 'RICS-aligned methodology', 'Broker-ready report format', 'National coverage'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                    <svg className="w-4 h-4 shrink-0 text-[#a78bfa]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/services#desktop-rca" className="block border border-white/[0.1] text-white/60 font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#7c3aed] hover:text-[#a78bfa] transition-colors">
                Instruct Desktop Assessment →
              </Link>
            </div>

            <div className="ls-card p-7 flex flex-col scroll-reveal">
              <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-2">Full physical inspection</p>
              <h3 className="font-bold text-2xl text-white mb-6">On-Site Survey</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['RICS surveyor attends in person', 'Listed & heritage buildings', 'Non-standard construction', 'Full dimensional measurement', 'PI insured every instruction'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                    <svg className="w-4 h-4 shrink-0 text-[#a78bfa]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/services#on-site-survey" className="block border border-white/[0.1] text-white/60 font-semibold text-sm px-5 py-3 rounded-xl text-center hover:border-[#7c3aed] hover:text-[#a78bfa] transition-colors">
                Request On-Site Survey →
              </Link>
            </div>

            <div className="rounded-2xl p-7 flex flex-col relative scroll-reveal border border-[rgba(124,58,237,0.35)]"
              style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(91,33,182,0.18) 100%)', boxShadow: '0 0 40px rgba(124,58,237,0.15)' }}>
              <span className="absolute top-5 right-5 text-xs font-semibold px-3 py-1 rounded-full text-[#a78bfa]"
                style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}>Popular</span>
              <p className="text-xs uppercase tracking-wider font-semibold mb-2 text-[#a78bfa]/60">Best value</p>
              <h3 className="font-bold text-2xl text-white mb-6">3-Year Protection</h3>
              <ul className="space-y-3 flex-1 mb-7">
                {['Full assessment in year one', 'Annual BCIS indexation updates', 'Renewal-ready reports', 'Three-year RICS compliance', 'Fully managed service'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <svg className="w-4 h-4 shrink-0 text-[#a78bfa]" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=3year#contact-form" className="btn-shine block text-center">
                Enquire About 3-Year Plan →
              </Link>
            </div>

          </div>
          <div className="mt-6 text-center">
            <Link href="/services" className="link-amber">View full service details →</Link>
          </div>
        </div>
      </section>

      {/* RICS TRUST */}
      <section className="py-14 md:py-20 px-6 md:px-10 border-b border-white/[0.06]" style={{ background: '#0d0d1e' }}>
        <div className="max-w-3xl mx-auto scroll-reveal">
          <div className="pl-8 border-l-4" style={{ borderColor: '#7c3aed' }}>
            <p className="text-xs font-semibold text-[#a78bfa] uppercase tracking-[0.15em] mb-5">RICS Guidance</p>
            <blockquote className="text-xl md:text-2xl font-semibold text-white leading-[1.5] mb-5">
              &ldquo;Reinstatement cost assessments should be carried out regularly by a competent professional to ensure the sum insured remains adequate.&rdquo;
            </blockquote>
            <cite className="text-white/35 text-sm not-italic font-medium">Royal Institution of Chartered Surveyors</cite>
          </div>
        </div>
      </section>

      <ReviewCarousel />

      <ContactSection heading="Check your sum insured. Commission an assessment." />

      <FaqSection
        description="Technical questions on reinstatement cost assessments, underinsurance exposure, and our working process."
        items={faqItems}
      />
    </main>
  )
}
