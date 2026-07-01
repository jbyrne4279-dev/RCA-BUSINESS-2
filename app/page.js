import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import GrowObserver from './components/GrowObserver'

export const metadata = {
  title: { absolute: 'RICS Reinstatement Cost Assessment UK | Rebuild Cost Experts' },
  description: 'RICS-regulated Reinstatement Cost Assessments for managing agents, RTM companies, freeholders and leaseholders across the UK. Broker-ready reports delivered in 48 hours.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment UK | RCA Ltd',
    description: '80% of UK buildings carry the wrong rebuild cost on their policy. RICS reinstatement cost assessments delivered in 48 hours.',
    url: '/',
  },
}

const homeFaqItems = [
  { question: 'Do managing agents have a legal obligation to commission a reinstatement cost assessment?', answer: 'Where a lease covenants insurance at full reinstatement cost, the party responsible for arranging insurance — typically the managing agent, freeholder, or RTM company — has a contractual obligation to insure to that figure. A RICS-regulated Reinstatement Cost Assessment provides the defensible, documented basis for that sum insured.' },
  { question: 'What happens if the sum insured is wrong and a claim arises?', answer: 'If the building is underinsured at the point of claim, the insurer may apply the condition of average — reducing the payout in proportion to the degree of underinsurance. Leaseholders may then hold the party responsible for arranging insurance liable for the shortfall. Our RICS-regulated assessment eliminates that exposure.' },
  { question: 'Can leaseholders instruct you independently?', answer: 'Yes. Leaseholders who believe the sum insured arranged by their managing agent or freeholder is incorrect can instruct us for an independent assessment. Our report can be used to raise a formal challenge or support a service charge dispute.' },
  { question: 'How much does a typical reinstatement cost assessment cost?', answer: 'Pricing depends on property type and size. Please get in touch for a bespoke quote.' },
  { question: 'Is RCA Ltd regulated by RICS?', answer: 'Yes. Reinstatement Cost Assessment Ltd is a RICS Regulated Firm. Every assessment is conducted by or under the supervision of a RICS-registered member, ensuring full regulatory compliance and professional accountability.' },
  { question: 'What areas of the UK do you cover?', answer: 'We provide Reinstatement Cost Assessments across the whole of the United Kingdom. Desktop assessments are available nationally. On-site surveys are available throughout England, Scotland, Wales, and Northern Ireland.' },
  { question: 'What information do you need to get started?', answer: 'We need the property address, approximate floor area, construction type, and your contact details. Once received, we confirm your instruction and get started within one business day.' },
  { question: 'Do you assess listed buildings?', answer: 'Absolutely. Listed buildings require specialist reinstatement cost assessment knowledge. Authentic materials and skilled craftsmen significantly inflate rebuild costs and demand expert handling.' },
  { question: 'Can you provide reinstatement cost assessments for a multi-asset portfolio?', answer: 'Yes. We specialise in national portfolio valuations and provide a consolidated report with individual breakdown schedules for each asset.' },
  { question: 'Are VAT costs included in the assessment?', answer: "Yes. We specify whether the figure is inclusive or exclusive of VAT, based on the property owner's VAT status and building type." },
]

const SITE_URL = 'https://reinstatementcostassessment.org'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/`,
  name: 'Reinstatement Cost Assessment Ltd',
  alternateName: ['RCA Ltd', 'Rebuild Cost Assessment Ltd'],
  url: SITE_URL,
  logo: `${SITE_URL}/rca48.png`,
  image: `${SITE_URL}/rebuild-cost-assessment-london.jpeg`,
  description: 'RICS-regulated Reinstatement Cost Assessments for UK properties.',
  telephone: '+44-20-3178-8099',
  email: 'info@rca-ltd.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Hanover Square',
    addressLocality: 'London',
    postalCode: 'W1S 1BN',
    addressCountry: 'GB',
  },
  areaServed: [{ '@type': 'Country', name: 'United Kingdom' }],
  serviceType: 'Rebuild Cost Assessment',
}

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

/* ── small reusable pieces ── */
const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 justify-center mb-5">
    <span className="rule-amber" />
    <span className="text-[#c47c1e] text-[0.7rem] font-semibold uppercase tracking-[0.22em]">{children}</span>
    <span className="rule-amber" />
  </div>
)

const SectionLabelLeft = ({ children }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="rule-amber" />
    <span className="text-[#c47c1e] text-[0.7rem] font-semibold uppercase tracking-[0.22em]">{children}</span>
  </div>
)

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />

    <main>

      {/* ══════════════════════════════════════════
          HERO — editorial, left-aligned
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#111318]">
        <Image
          src="/rebuild-cost-assessment-london.jpeg"
          alt="RICS reinstatement cost assessment — London commercial property"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        {/* Strong bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/60 to-transparent" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pb-24 pt-48">
          <SectionLabelLeft>RICS Regulated · 17 Hanover Square, London</SectionLabelLeft>

          <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-semibold text-white leading-[0.95] tracking-tight mb-8 max-w-5xl">
            The obligation<br />is yours.
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-body">
            Where a lease covenants insurance at full reinstatement cost, managing agents, RTM companies and freeholders are contractually bound to get it right. We provide the RICS-regulated figure that removes your liability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link
              href="/contact#contact-form"
              className="btn-shine text-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-center inline-block"
            >
              Instruct Us
            </Link>
            <Link
              href="/services"
              className="border border-white/25 text-white/80 hover:text-white hover:border-white/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-center inline-block transition-all"
            >
              Our Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
            {['RICS Regulated Firm', 'Professional Indemnity Insured', '50+ Years Experience', 'Broker-Ready Reports'].map(t => (
              <span key={t} className="text-white/35 text-xs font-medium tracking-widest uppercase">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHO WE WORK WITH
      ══════════════════════════════════════════ */}
      <section className="py-24 px-8 bg-white" id="who-we-serve">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <SectionLabelLeft>Who We Work With</SectionLabelLeft>
            <h2 className="font-headline text-5xl md:text-6xl font-semibold text-[#111318] leading-tight mb-6">
              The obligation<br />falls on you.
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              Where a lease covenants insurance at full reinstatement cost, someone is contractually obliged to insure to rebuild value. Managing agents and RTM companies order these assessments to protect themselves against liability from getting it wrong for the leaseholders they act for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e5e7eb]">
            {[
              {
                num: '01',
                name: 'Managing Agents',
                tag: 'Primary Instructors',
                desc: 'If you arrange buildings insurance for a block and the sum insured proves inadequate at the point of claim, leaseholders may hold you accountable for the shortfall. One RICS-regulated assessment removes that exposure permanently.',
              },
              {
                num: '02',
                name: 'RTM Companies',
                tag: 'Right to Manage',
                desc: 'When leaseholders exercise the Right to Manage, the insurance obligation transfers with it. Establish the correct reinstatement figure from day one — before the next renewal — and evidence your compliance from the outset.',
              },
              {
                num: '03',
                name: 'Freeholders',
                tag: 'Lease Obligation',
                desc: 'Most long leases require the freeholder to insure the block to full reinstatement value. Our RICS report provides the figure the lease demands and the documented, defensible basis to evidence it.',
              },
            ].map(({ num, name, tag, desc }) => (
              <div key={name} className="bg-white p-10 hover-lift group">
                <div className="flex items-start justify-between mb-8">
                  <span className="font-headline text-5xl font-semibold text-[#e5e7eb] group-hover:text-[#c47c1e]/20 transition-colors leading-none">{num}</span>
                  <span className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.22em] mt-1">{tag}</span>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-[#111318] mb-4">{name}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
                <div className="mt-8 h-px bg-[#e5e7eb] group-hover:bg-[#c47c1e]/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <div className="bg-[#111318]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {[
              { stat: '80%+',   sub: 'of UK blocks carry an inaccurate reinstatement figure' },
              { stat: '£425bn', sub: 'estimated UK underinsurance gap across the property market' },
              { stat: '48 hrs', sub: 'standard turnaround for a desktop assessment' },
            ].map(({ stat, sub }) => (
              <div key={stat} className="py-14 px-8 first:pl-0 last:pr-0">
                <p className="font-headline text-5xl md:text-6xl font-semibold text-white mb-3">{stat}</p>
                <p className="text-white/40 text-sm leading-relaxed max-w-[18ch]">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SERVICES / PRICING
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-[#f4f5f7]" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-headline text-5xl md:text-6xl font-semibold text-[#111318] mb-4">
              Choose your <span className="text-shine">Assessment.</span>
            </h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">Every assessment is carried out by a RICS-regulated surveyor. Contact us for a tailored quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Desktop */}
            <div className="grow-card pricing-card bg-white border border-[#e5e7eb] p-10 flex flex-col card-shadow">
              <div className="mb-8">
                <div className="w-10 h-10 bg-[#111318] flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="1"/><path d="M8 21h8M12 17v4"/></svg>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-[#111318] mb-2">Desktop Assessment</h3>
                <p className="text-[#6b7280] text-sm">Efficient, data-driven remote valuation for standard properties.</p>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                {['RICS-regulated, 48-hour turnaround', 'BCIS-indexed rebuild cost modelling', 'No site visit required'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#374151]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c47c1e] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=desktop#contact-form" className="w-full py-3.5 bg-[#111318] text-white text-sm font-semibold uppercase tracking-[0.12em] text-center block hover:bg-[#1e2535] transition-colors">
                Select Desktop
              </Link>
            </div>

            {/* On-Site */}
            <div className="grow-card pricing-card bg-white border border-[#e5e7eb] p-10 flex flex-col card-shadow">
              <div className="mb-8">
                <div className="w-10 h-10 bg-[#111318] flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-[#111318] mb-2">On-Site Survey</h3>
                <p className="text-[#6b7280] text-sm">Full physical survey for listed, complex or high-value buildings.</p>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                {['RICS surveyor physical inspection', 'Specialist reinstatement cost modelling', 'Listed buildings & complex structures'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#374151]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c47c1e] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=onsite#contact-form" className="w-full py-3.5 border-2 border-[#111318] text-[#111318] text-sm font-semibold uppercase tracking-[0.12em] text-center block hover:bg-[#111318] hover:text-white transition-all">
                Request On-Site
              </Link>
            </div>

            {/* 3-Year — featured */}
            <div className="grow-card pricing-card bg-[#111318] border-2 border-[#c47c1e] p-10 flex flex-col relative">
              <div className="absolute top-5 right-5">
                <span className="bg-[#c47c1e] text-white text-[0.65rem] font-semibold uppercase tracking-[0.18em] px-3 py-1">Best Value</span>
              </div>
              <div className="mb-8">
                <div className="w-10 h-10 bg-[#c47c1e] flex items-center justify-center mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 className="font-headline text-2xl font-semibold text-white mb-2">3-Year Protection</h3>
                <p className="text-white/55 text-sm">Full assessment plus 3 years of RICS-compliant annual updates.</p>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                {['Annual BCIS-indexed updates', '3-year RICS compliance', 'Broker-ready report every renewal'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c47c1e] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact?service=3year#contact-form" className="w-full py-3.5 bg-[#c47c1e] text-white text-sm font-semibold uppercase tracking-[0.12em] text-center block hover:bg-[#a8670f] transition-colors">
                Enquire Now
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT'S INCLUDED — clean two-column list
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabelLeft>Every Assessment Includes</SectionLabelLeft>
              <h2 className="font-headline text-5xl font-semibold text-[#111318] leading-tight mb-6">
                What you always get.
              </h2>
              <p className="text-[#6b7280] leading-relaxed mb-10">
                Regardless of which service you choose, every reinstatement cost assessment is delivered to the same RICS-regulated standard — no exceptions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: '⚖', title: 'RICS Regulated', desc: 'Every report meets Royal Institution of Chartered Surveyors standards.' },
                  { icon: '📊', title: 'Live BCIS Data', desc: 'Figures based on current Building Cost Information Service indices.' },
                  { icon: '📄', title: 'Broker-Ready', desc: 'Formatted for direct submission to your insurer or broker.' },
                  { icon: '🛡', title: 'PI Insured', desc: 'All assessments backed by full professional indemnity insurance.' },
                  { icon: '👤', title: 'Named Surveyor', desc: 'One contact handles your instruction from start to delivery.' },
                  { icon: '🏢', title: 'All Property Types', desc: 'Residential, commercial, listed, industrial, and portfolios.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4 p-5 bg-[#f4f5f7] hover-lift">
                    <span className="text-xl leading-none mt-0.5 flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-semibold text-[#111318] text-sm mb-1">{title}</p>
                      <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[560px] overflow-hidden">
                <Image
                  src="/rca-rics-surveyor.png"
                  alt="RICS-regulated surveyor conducting reinstatement cost assessment"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-[#111318] text-white p-6 shadow-xl">
                <p className="font-headline text-4xl font-semibold text-[#c47c1e] mb-1">48 hrs</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">Standard turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 bg-[#f4f5f7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 mb-14">
          <SectionLabel>Client Testimonials</SectionLabel>
          <h2 className="font-headline text-5xl font-semibold text-[#111318] text-center mb-2">What Our Clients Say.</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#c47c1e]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-5 w-max animate-scroll-reviews">
            {[
              { stars:5, text:"We manage fourteen blocks across London. Instructing RCA Ltd has become standard practice at renewal — the reports are accepted without challenge and our leaseholders know the sum insured is correct.", name:"Caroline F.", role:"Managing Agent Director, London", initials:"CF" },
              { stars:5, text:"After our RTM we needed to establish the correct reinstatement figure from scratch. RCA came back quickly with a robust RICS report — which gave us confidence going into the first renewal under our management.", name:"Michael T.", role:"RTM Company Director, Surrey", initials:"MT" },
              { stars:5, text:"Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week — turned out we were short by nearly £200k. Sorted now.", name:"James H.", role:"Landlord, Manchester", photo:"https://randomuser.me/api/portraits/men/32.jpg", google:true },
              { stars:5, text:"Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question. Makes renewal so much easier.", name:"Sarah M.", role:"Portfolio Landlord, Leeds", photo:"https://randomuser.me/api/portraits/women/44.jpg" },
              { stars:4, text:"Needed a reinstatement figure for a listed building — most surveyors wouldn't touch it. These guys knew exactly what they were doing. Very happy with the result.", name:"David C.", role:"Owner, Grade II Listed Property", initials:"DC", google:true },
              { stars:5, text:"As a freeholder the lease puts the insurance obligation squarely on me. RCA's report gives me the documented RICS figure I need to demonstrate compliance to the leaseholders each year.", name:"Robert O.", role:"Freeholder, Birmingham", photo:"https://randomuser.me/api/portraits/men/75.jpg", google:true },
              { stars:5, text:"The desktop assessment was great value. Clear methodology, BCIS-indexed, and the surveyor walked me through the figures on a call. Exactly what I needed.", name:"Claire S.", role:"Buy-to-Let Investor, London", photo:"https://randomuser.me/api/portraits/women/21.jpg" },
              { stars:5, text:"Straightforward process from start to finish. Had the report in a few days, my insurer was satisfied. No complaints at all.", name:"Priya S.", role:"Residential Landlord, Leicester", photo:"https://randomuser.me/api/portraits/women/55.jpg", google:true },
              // duplicates for loop
              { stars:5, text:"We manage fourteen blocks across London. Instructing RCA Ltd has become standard practice at renewal — the reports are accepted without challenge and our leaseholders know the sum insured is correct.", name:"Caroline F.", role:"Managing Agent Director, London", initials:"CF" },
              { stars:5, text:"After our RTM we needed to establish the correct reinstatement figure from scratch. RCA came back quickly with a robust RICS report — which gave us confidence going into the first renewal under our management.", name:"Michael T.", role:"RTM Company Director, Surrey", initials:"MT" },
              { stars:5, text:"Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week — turned out we were short by nearly £200k. Sorted now.", name:"James H.", role:"Landlord, Manchester", photo:"https://randomuser.me/api/portraits/men/32.jpg", google:true },
              { stars:5, text:"Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question.", name:"Sarah M.", role:"Portfolio Landlord, Leeds", photo:"https://randomuser.me/api/portraits/women/44.jpg" },
            ].map((r, i) => (
              <div key={i} className="flex-shrink-0 w-80 bg-white border-l-2 border-[#c47c1e] p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className={`w-3.5 h-3.5 ${s < r.stars ? 'text-[#c47c1e]' : 'text-[#e5e7eb]'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                  {r.google && (
                    <svg className="w-3.5 h-3.5 ml-auto" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  )}
                </div>
                <p className="text-[#374151] text-sm leading-relaxed mb-5 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  {r.photo
                    ? <img src={r.photo} alt={r.name} className="w-8 h-8 object-cover flex-shrink-0 grayscale" />
                    : <div className="w-8 h-8 bg-[#111318] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{r.initials}</div>
                  }
                  <div>
                    <p className="text-sm font-semibold text-[#111318]">{r.name}</p>
                    <p className="text-xs text-[#6b7280]">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHAT IS A RCA — image + steps
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>The Framework</SectionLabel>
            <h2 className="font-headline text-5xl md:text-6xl font-semibold text-[#111318] mb-4">
              What is a <span className="text-shine">Reinstatement Cost Assessment?</span>
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto text-lg leading-relaxed">
              A RICS-regulated calculation of the exact cost to rebuild your property from scratch — accounting for regional labour, material inflation, and professional fees. Built on facts, not guesswork.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Image */}
            <div className="relative min-h-[480px] overflow-hidden">
              <Image
                src="/rebuild-cost-assessment-london.jpeg"
                alt="RICS-regulated reinstatement cost assessment of a London commercial property"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318]/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="rule-amber mb-3" />
                <p className="text-white font-semibold text-sm tracking-wide">RICS-regulated surveyors · London &amp; UK</p>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col justify-center space-y-4">
              {[
                { n:'1', title:'Fully comprehensive.', desc:'Our assessments calculate every cost — demolition, materials, labour, professional fees, and VAT. Nothing estimated. Nothing missed. A complete rebuild cost figure you can stand behind.' },
                { n:'2', title:'RICS-certified accuracy.', desc:'Every report is issued under RICS regulations and benchmarked against live BCIS construction data — giving you a figure your insurer cannot dispute.' },
                { n:'3', title:'Accepted by all UK insurers.', desc:'Our broker-ready reports are submitted directly to insurers and accepted without challenge. No back-and-forth, no delays — just a compliant, insurer-approved valuation.' },
                { n:'4', title:'Backed by professional indemnity.', desc:'Every assessment carries full PI insurance, meaning your reinstatement figure has real legal weight. If we got it wrong, you are covered. We never do.' },
              ].map(({ n, title, desc }, i) => (
                <div key={n} className={`lifecycle-border-${i+1} flex gap-5 p-6 border border-[#e5e7eb] hover:border-[#c47c1e]/40 transition-colors`}>
                  <div className={`lifecycle-ring-${i+1} step-circle flex-shrink-0`}>{n}</div>
                  <div>
                    <h4 className="font-semibold text-[#111318] text-sm mb-1">{title}</h4>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERTISE — dark section
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-[#111318]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <SectionLabelLeft>Our Expertise</SectionLabelLeft>
              <h2 className="font-headline text-5xl font-semibold text-white leading-tight">
                50+ years of<br />collective experience.
              </h2>
            </div>
            <p className="text-white/50 text-lg leading-relaxed">
              We have refined a methodology that balances technical precision with professional accountability — built for the compliance demands of the UK insurance market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
            {[
              { num:'50+', label:'Years Experience', desc:'Decades navigating evolving building codes, material costs, and insurance market shifts.' },
              { num:'100%', label:'RICS Compliance', desc:'Every assessment signed off by a RICS-registered member before delivery.' },
              { num:'PI', label:'Fully Insured', desc:'Comprehensive professional indemnity cover on every instruction we take.' },
            ].map(({ num, label, desc }) => (
              <div key={label} className="bg-[#111318] p-10 hover:bg-[#1a1f2e] transition-colors">
                <p className="font-headline text-5xl font-semibold text-[#c47c1e] mb-2 leading-none">{num}</p>
                <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="mt-10 bg-white p-10">
            <p className="text-[#c47c1e] text-[0.7rem] font-semibold uppercase tracking-[0.22em] mb-8">Our Assessment Methodology</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n:'1', label:'Instruction & Data Gathering', desc:'We collect property details, floor areas, construction type, and any specialist features.' },
                { n:'2', label:'BCIS-Indexed Modelling', desc:'Rebuild costs calculated using live BCIS indices — the same data used by major insurers.' },
                { n:'3', label:'RICS-Reviewed Report', desc:'A RICS-registered surveyor signs off every report before it is delivered to you.' },
              ].map(({ n, label, desc }, i, arr) => (
                <div key={n} className="flex gap-5">
                  <div className={`method-ring-${n} step-circle flex-shrink-0`}>{n}</div>
                  <div>
                    <p className="font-semibold text-[#111318] text-sm mb-2">{label}</p>
                    <p className="text-[#6b7280] text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY MANAGING AGENTS CHOOSE US
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-[#f4f5f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Trust &amp; Compliance</SectionLabel>
            <h2 className="font-headline text-5xl md:text-6xl font-semibold text-[#111318] mb-4">Why Managing Agents Choose Us.</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">Built for professionals who need compliance they can rely on — and documentation they can stand behind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { n:'01', title:'RICS Regulated Firm', desc:'Every assessment is conducted by or under the supervision of a RICS-registered member. Full regulatory compliance, every time.' },
              { n:'02', title:'Professional Indemnity Insured', desc:'We carry comprehensive PI insurance on every instruction, giving you and your clients full protection.' },
              { n:'03', title:'Portfolio & Block Specialists', desc:'Experience across blocks of flats, mixed-use portfolios, commercial assets, and high-value listed buildings.' },
              { n:'04', title:'Broker-Ready Reports', desc:'Every report formatted for direct submission to your insurer or broker — accepted without question.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="bg-white p-8 flex gap-6 hover-lift border border-[#e5e7eb]">
                <span className="font-headline text-3xl font-semibold text-[#e5e7eb] flex-shrink-0 leading-none mt-1">{n}</span>
                <div>
                  <p className="font-semibold text-[#111318] mb-2">{title}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE PROBLEM — dark red
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#7f1d1d] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#991b1b]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <SectionLabelLeft>The Problem</SectionLabelLeft>
                <h2 className="font-headline text-5xl font-semibold text-white leading-tight mb-6">
                  The hidden cost of getting it wrong.
                </h2>
                <p className="text-white/65 text-lg leading-relaxed mb-8">
                  Over <strong className="text-white font-semibold">80% of UK properties</strong> carry an inaccurate reinstatement figure. Most owners — and the managing agents acting for them — won&rsquo;t discover this until a claim arises. By then, the financial and legal damage is already done.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6">
                    <p className="font-headline text-4xl font-semibold text-[#111318] mb-1">£425bn</p>
                    <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest">Estimated UK Gap</p>
                  </div>
                  <div className="bg-white p-6">
                    <p className="font-headline text-4xl font-semibold text-[#111318] mb-1">80%+</p>
                    <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-widest">Properties at Risk</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { title:'The Condition of Average.', body:'If you are 20% underinsured, your insurer can reduce your payout by 20% — even on a partial claim. The clause is standard across UK policies and routinely enforced.' },
                  { title:'Construction costs are rising fast.', body:'BCIS data shows UK build costs have risen over 30% since 2020. A valuation from three years ago is almost certainly out of date — and your insurer knows it.' },
                  { title:'One accurate assessment fixes this.', body:<>A RICS-certified Reinstatement Cost Assessment gives you a compliant, insurer-accepted figure. <Link href="/services" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">See our services →</Link></> },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-white/8 border border-white/12 p-6 hover:bg-white/12 transition-colors">
                    <h4 className="font-semibold text-white text-sm mb-2">{title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROPERTY TYPES
      ══════════════════════════════════════════ */}
      <section className="scroll-reveal py-24 px-8 bg-[#111318]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Property Types</SectionLabel>
            <h2 className="font-headline text-5xl font-semibold text-white mb-4">
              Assessments for every property type.
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto">
              From blocks of flats in Central London to national commercial portfolios — RICS-regulated assessments delivered across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src:'https://lh3.googleusercontent.com/aida-public/AB6AXuCWBDJ70LsQQ5h85h82yf83EDziKtCRsnRZfgrGO4oWFPS8dsId-HyTmiMm-MyrubiWJ38hcFJlBmzI573vmnv2_12J4LWJjLXNO7EC8ijA7TxmUKZtoKUA1282iLrXeRgg9k9lf6WWVNoWMobWwr3rYI9H814zFk4JbuvaB3_h3fLhQp-bXppw_Sge5PfTUerK2ODyxkjMbMgMGnMz6jK9wohy8TpfQqmt4Mb30zRGBT3QY5bNQUfnfRyOjqckg-nOooWHc1knCGE',
                alt:'Blocks of flats reinstatement cost assessment — managing agents and leaseholders',
                title:'Blocks of Flats',
                label:'Managing Agents & RTM',
                desc:'The largest single segment we serve. Where the lease obliges insurance to full reinstatement cost, our RICS report gives managing agents, RTM companies and freeholders the documented figure they need.',
              },
              {
                src:'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XW_YI4gh7Lb5mNE7p1aI1bLNEcVW1CDe7bUC8Ag7LVlNaojO7Ayi8RMIuxBGzn7kZKcL1QBbq0g3lgSc4qinZxlAqp2qTOfZtZG4fOIrOFwAOAc7dW6_fEdvb6VSbXA84CCayUI5UKBOiGxH6-Znlcw8eG0YC9mkBvKnJNle7Gc6k_rnPoMGlmVQFJ6jFc9pWy6LfWRjpkPkhQ483fQT0XOjHtrToiOb5voY91FLtpydZ5dFr_WwY_40NT5rtFSTOgb2eUQ3C0c',
                alt:'Commercial landlord reinstatement cost assessment',
                title:'Commercial Properties',
                label:'Offices & Retail',
                desc:'RICS-certified reinstatement cost assessments for offices, retail units, and mixed-use properties. Protect against underinsurance and satisfy lender and insurer compliance requirements.',
              },
              {
                src:'https://lh3.googleusercontent.com/aida-public/AB6AXuDguBhebTeI2g-SjCVA57yO5x-hj0YvIwNx5xcqJKYJNh_oR0D6i0UB_nXjfoDcCi0AV5IIvvn8tLaDzCvXuj8Uh83HQPPqaMh6R0diVpfa6P0olh5liAj--KW_r8izD8HduGaAmkIm3rt-8awac4cnqY12aG_kSx0Ulw9M8sMck6yX19VOgMbg603v3P5Or7xVMEBCjM_J7ZMyz4Rxdutpvm1JAClzGilY_ftZPm770hVgeit-ukM7jPdEUMUaV-RhSARPxDxh7ZU',
                alt:'Asset manager portfolio reinstatement cost assessment',
                title:'Portfolios',
                label:'Multi-Asset',
                desc:'Consolidated reinstatement cost assessments for multi-site portfolios. Broker-ready reports with individual asset schedules, annual BCIS indexation, and a full audit trail.',
              },
            ].map(({ src, alt, title, label, desc }) => (
              <div key={title} className="group relative overflow-hidden h-[26rem] flex flex-col justify-end">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src={src} alt={alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/55 to-transparent" />
                <div className="relative z-10 p-7">
                  <span className="inline-block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#c47c1e] border border-[#c47c1e]/40 px-2.5 py-1 mb-3">{label}</span>
                  <h3 className="font-headline text-2xl font-semibold text-white mb-3 leading-snug">{title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link href="/services" className="text-[#c47c1e] text-xs font-semibold uppercase tracking-wider hover:text-[#e9a93a] transition-colors">View services →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={<>Get Your RICS-Regulated<br /><span className="text-shine">Reinstatement Cost Assessment</span><br />Today.</>}
      />

      <FaqSection
        description="Everything you need to know about Reinstatement Cost Assessments, RICS compliance, and how we protect managing agents, freeholders and leaseholders."
        items={homeFaqItems}
      />

      <GrowObserver />
    </main>
    </>
  )
}
