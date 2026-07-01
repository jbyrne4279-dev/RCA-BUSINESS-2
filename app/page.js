import Link from 'next/link'
import Image from 'next/image'
import ContactSection from './components/ContactSection'
import FaqSection from './components/FaqSection'
import GrowObserver from './components/GrowObserver'

export const metadata = {
  title: {
    absolute: 'RICS Reinstatement Cost Assessment UK | Rebuild Cost Experts',
  },
  description:
    'RICS-regulated Reinstatement Cost Assessments for managing agents, RTM companies, freeholders and leaseholders across the UK. Broker-ready reports delivered in 48 hours.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment UK | Rebuild Cost from £210',
    description:
      '80% of UK buildings carry the wrong rebuild cost on their policy. RICS reinstatement cost assessment for blocks, commercial, and listed buildings — delivered in 48 hours across the UK.',
    url: '/',
  },
}

const homeFaqItems = [
  { question: 'Do managing agents have a legal obligation to commission a reinstatement cost assessment?', answer: 'Where a lease covenants insurance at full reinstatement cost, the party responsible for arranging insurance — typically the managing agent, freeholder, or RTM company — has a contractual obligation to insure to that figure. A RICS-regulated Reinstatement Cost Assessment provides the defensible, documented basis for that sum insured.' },
  { question: 'What happens if the sum insured is wrong and a claim arises?', answer: 'If the building is underinsured at the point of claim, the insurer may apply the condition of average — reducing the payout in proportion to the degree of underinsurance. Leaseholders may then hold the party responsible for arranging insurance liable for the shortfall. Our RICS-regulated assessment eliminates that exposure.' },
  { question: 'Can leaseholders instruct you independently?', answer: 'Yes. Leaseholders who believe the sum insured arranged by their managing agent or freeholder is incorrect can instruct us for an independent assessment. Our report can be used to raise a formal challenge or to support a service charge dispute.' },
  { question: 'How much does a typical reinstatement cost assessment cost?', answer: 'Pricing depends on property type and size. Please get in touch for a bespoke quote.' },
  { question: 'Is RCA Ltd regulated by RICS?', answer: 'Yes. Reinstatement Cost Assessment Ltd is a RICS Regulated Firm. Every assessment is conducted by or under the supervision of a RICS-registered member, ensuring full regulatory compliance and professional accountability.' },
  { question: 'What areas of the UK do you cover?', answer: 'We provide Reinstatement Cost Assessments across the whole of the United Kingdom. Desktop assessments are available nationally. On-site surveys are available throughout England, Scotland, Wales, and Northern Ireland.' },
  { question: 'What information do you need to get started?', answer: 'We need the property address, approximate floor area, construction type, and your contact details. Once received, we confirm your instruction and get started within one business day.' },
  { question: 'Are VAT costs included in the assessment?', answer: "Yes. We specify whether the figure is inclusive or exclusive of VAT, based on the property owner's VAT status and building type." },
  { question: 'Do you assess listed buildings?', answer: 'Absolutely. Listed buildings require specialist reinstatement cost assessment knowledge. Authentic materials and skilled craftsmen significantly inflate rebuild costs and demand expert handling.' },
  { question: 'Can you provide reinstatement cost assessments for a multi-asset portfolio?', answer: 'Yes. We specialise in national portfolio valuations and provide a consolidated report with individual breakdown schedules for each asset.' },
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
  description:
    'RICS-regulated Reinstatement Cost Assessments (Rebuild Cost Assessments) for UK properties. Accurate reinstatement valuations, delivered in 48 hours.',
  telephone: '+44-20-3178-8099',
  email: 'info@rca-ltd.com',
  priceRange: undefined,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Hanover Square',
    addressLocality: 'London',
    postalCode: 'W1S 1BN',
    addressCountry: 'GB',
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'City', name: 'London' },
    { '@type': 'AdministrativeArea', name: 'Greater London' },
    { '@type': 'AdministrativeArea', name: 'South East England' },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5120,
    longitude: -0.1444,
  },
  hasMap: 'https://maps.google.com/?q=17+Hanover+Square,+London+W1S+1BN',
  serviceType: 'Rebuild Cost Assessment',
  knowsAbout: [
    'Rebuild Cost Assessment',
    'Reinstatement Cost Assessment',
    'Building Insurance Valuation',
    'BCIS Construction Costs',
    'RICS Regulated Surveying',
    'Managing Agents Insurance Compliance',
    'Block of Flats Reinstatement',
  ],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/`,
  url: SITE_URL,
  name: 'Reinstatement Cost Assessment Ltd',
  publisher: { '@id': `${SITE_URL}/` },
  inLanguage: 'en-GB',
}

const homeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

const serviceLinksJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Reinstatement Cost Assessment Services',
  description: 'RICS-regulated Reinstatement Cost Assessment services for UK property owners: residential, commercial, and listed buildings.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Desktop Reinstatement Cost Assessment',
      description: 'Fast, data-driven reinstatement cost assessment for standard UK residential and commercial properties. RICS-regulated, BCIS-indexed, and broker-ready within 5 days.',
      url: `${SITE_URL}/services`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '3-Year Protection Plan',
      description: 'Full Reinstatement Cost Assessment with automated annual BCIS index updates for three years. Designed for UK landlords and portfolio managers who need ongoing RICS compliance without repeat instruction costs.',
      url: `${SITE_URL}/services`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'On-Site Survey',
      description: 'Full physical inspection by a RICS-regulated surveyor for listed buildings, complex architecture, non-standard construction, and high-value UK property. The highest accuracy reinstatement cost assessment available.',
      url: `${SITE_URL}/services`,
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLinksJsonLd) }}
      />
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        <Image
          src="/reinstatement-cost-assessments-uk.png"
          alt="RICS-regulated Reinstatement Cost Assessment for UK property"
          fill
          priority
          className="object-cover object-center md:object-right-bottom"
          sizes="100vw"
        />
        {/* Left-to-right gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(100deg, rgba(14,27,54,0.92) 0%, rgba(14,27,54,0.70) 50%, rgba(14,27,54,0.20) 100%)' }} aria-hidden="true" />
        {/* Bottom gradient */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,27,54,0.65) 0%, transparent 55%)' }} aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 pb-20 pt-40">
          {/* Gold rule */}
          <div className="w-10 h-px bg-[#c4a35a] mb-8" />
          {/* Eyebrow */}
          <p className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.28em] mb-6">
            RICS Regulated &middot; 17 Hanover Square, London
          </p>
          {/* Headline */}
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.0] tracking-tight mb-8 max-w-4xl">
            The standard<br />the lease demands.
          </h1>
          <p className="text-white/65 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            RICS-regulated Reinstatement Cost Assessments for managing agents, RTM companies, and freeholders. Protecting you from the liability of getting it wrong.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link href="/contact#contact-form" className="btn-shine text-white px-10 py-4 font-semibold text-sm uppercase tracking-wider text-center active:scale-[0.97] transition-transform inline-block">
              Instruct Us
            </Link>
            <Link href="/services" className="border border-white/30 text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-white/8 active:scale-[0.97] transition-all text-center inline-block">
              Our Services
            </Link>
          </div>
          {/* Trust strip */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-white/35 text-xs font-medium tracking-widest uppercase">RICS Regulated Firm</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="text-white/35 text-xs font-medium tracking-widest uppercase">Professional Indemnity Insured</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="text-white/35 text-xs font-medium tracking-widest uppercase">50+ Years Collective Experience</span>
          </div>
        </div>
      </section>

      {/* ── The Obligation ── */}
      <section className="py-20 px-8 bg-[#f7f5f0]" id="who-we-serve">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Who We Work With</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#0e1b36] mb-6">
              The obligation falls on you.
            </h2>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              Where a lease covenants insurance at full reinstatement cost, someone is contractually obliged to insure to rebuild value. Managing agents and RTM companies order these assessments to protect themselves against liability from getting it wrong for the leaseholders they act for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: 'business_center',
                name: 'Managing Agents',
                tag: 'Primary Instructors',
                desc: 'If you arrange buildings insurance for a block and the sum insured proves inadequate at the point of claim, leaseholders may hold you accountable for the shortfall. One RICS-regulated assessment removes that exposure permanently.',
              },
              {
                icon: 'groups',
                name: 'RTM Companies',
                tag: 'Right to Manage',
                desc: 'When leaseholders exercise the Right to Manage, the insurance obligation transfers with it. Establish the correct reinstatement figure from day one — before the next renewal — and evidence your compliance to those you act for.',
              },
              {
                icon: 'domain',
                name: 'Freeholders',
                tag: 'Lease Obligation',
                desc: 'Most long leases require the freeholder to insure the block to full reinstatement value. Our RICS report provides the figure the lease demands and the documented, defensible basis to evidence it.',
              },
            ].map(({ icon, name, tag, desc }, i) => (
              <div
                key={name}
                className="service-pulse-card bg-white border border-[#0e1b36]/8 p-8 hover:border-[#c4a35a]/40 hover:shadow-lg transition-all duration-300"
                style={{ animation: `card-pulse-${['left','middle','right'][i]} 9s ease-in-out infinite` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="btn-shine shrink-0 w-10 h-10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>{icon}</span>
                  </div>
                  <div>
                    <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.2em] block mb-1">{tag}</span>
                    <h3 className="font-semibold text-[#0e1b36] text-sm">{name}</h3>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stat strip ── */}
      <div className="bg-[#0e1b36] border-y border-[#c4a35a]/15">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {[
            { stat: '80%+', label: 'of UK blocks carry an inaccurate reinstatement figure' },
            { stat: '£425bn', label: 'estimated UK underinsurance gap across the property market' },
            { stat: '48 hrs', label: 'standard turnaround for a desktop reinstatement assessment' },
          ].map(({ stat, label }) => (
            <div key={stat} className="py-6 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 text-center md:text-left">
              <p className="font-headline text-4xl md:text-5xl font-semibold text-white mb-2">{stat}</p>
              <p className="text-white/45 text-sm leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className="scroll-reveal pt-20 pb-20 px-8 bg-[#f7f5f0]" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Our Services</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#0e1b36] mb-4">Choose your <span className="text-shine">Assessment.</span></h2>
            <p className="text-secondary max-w-xl mx-auto leading-relaxed">Every assessment is carried out by a RICS-regulated surveyor. Contact us for a tailored quote.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-stretch">

              {/* Desktop Assessment */}
              <div className="grow-card pricing-card bg-white border border-[#0e1b36]/8 p-10 flex flex-col transition-all duration-300">
                <div className="mb-8">
                  <div className="btn-shine w-12 h-12 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem' }}>monitor</span>
                  </div>
                  <h3 className="font-headline text-2xl font-semibold mb-2 text-[#0e1b36]"><span className="text-shine">Desktop</span> Reinstatement Cost Assessment</h3>
                  <p className="text-secondary text-sm">Efficient, data-driven remote valuation for standard properties.</p>
                </div>
                <ul className="space-y-2 mb-10 flex-grow">
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#0e1b36]/5 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>bolt</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">RICS-regulated, <span className="whitespace-nowrap">48-hour turnaround</span></span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#0e1b36]/5 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>cloud</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">BCIS-indexed rebuild cost modelling</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#0e1b36]/5 px-4 py-3.5 min-h-[52px]">
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center bg-[#0e1b36]/10">
                      <span className="material-symbols-outlined text-[#0e1b36]/50" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>location_off</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Site visit not included</span>
                  </li>
                </ul>
                <Link href="/contact?service=desktop#contact-form" className="w-full py-4 bg-[#0e1b36] text-white font-semibold text-sm uppercase tracking-wider active:scale-[0.97] transition-all text-center block hover:bg-[#152847]">Select Desktop</Link>
              </div>

              {/* On-Site Survey */}
              <div className="grow-card pricing-card bg-white border border-[#0e1b36]/8 p-10 flex flex-col transition-all duration-300">
                <div className="mb-8">
                  <div className="btn-shine w-12 h-12 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem' }}>location_on</span>
                  </div>
                  <h3 className="font-headline text-2xl font-semibold mb-2 text-[#0e1b36]"><span className="text-shine">On-Site</span> Reinstatement Cost Assessment</h3>
                  <p className="text-secondary text-sm">Full physical survey for listed, complex or high-value buildings.</p>
                </div>
                <ul className="space-y-2 mb-10 flex-grow">
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#0e1b36]/5 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>search</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">RICS surveyor physical inspection</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#0e1b36]/5 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Specialist reinstatement cost modelling</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#0e1b36]/5 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>engineering</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Listed buildings &amp; complex structures</span>
                  </li>
                </ul>
                <Link href="/contact?service=onsite#contact-form" className="w-full py-4 border-2 border-[#0e1b36] text-[#0e1b36] hover:bg-[#0e1b36] hover:text-white font-semibold text-sm uppercase tracking-wider active:scale-[0.97] transition-all text-center block">Request On-Site</Link>
              </div>

              {/* 3-Year Protection */}
              <div className="grow-card bg-white border-2 border-[#c4a35a] p-8 flex flex-col relative" style={{ boxShadow: '0 0 28px 4px rgba(196,163,90,0.12)' }}>
                <div className="absolute top-5 right-5">
                  <span className="btn-shine px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-white">Best Value</span>
                </div>
                <div className="mb-8">
                  <div className="btn-shine w-12 h-12 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem', fontVariationSettings: "'FILL' 1" }}>shield</span>
                  </div>
                  <h3 className="font-headline text-2xl font-semibold mb-2 text-[#0e1b36]"><span className="text-shine">3-Year</span> Reinstatement Cost Assessment</h3>
                  <p className="text-secondary text-sm">Full reinstatement cost assessment plus 3 years of RICS-compliant annual updates.</p>
                </div>
                <ul className="space-y-2 mb-10 flex-grow">
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#c4a35a]/20 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>update</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Annual BCIS-indexed reinstatement updates</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#c4a35a]/20 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>security</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">3-year RICS reinstatement compliance</span>
                  </li>
                  <li className="flex items-center gap-3 bg-[#f7f5f0] border border-[#c4a35a]/20 px-4 py-3.5 min-h-[52px]">
                    <div className="btn-shine shrink-0 w-6 h-6 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: '0.85rem', fontVariationSettings: "'FILL' 1" }}>analytics</span>
                    </div>
                    <span className="text-secondary text-sm font-medium">Broker-ready report every renewal</span>
                  </li>
                </ul>
                <Link href="/contact?service=3year#contact-form" className="btn-shine w-full py-4 font-semibold text-sm uppercase tracking-wider text-white active:scale-[0.97] transition-all text-center block">Enquire Now</Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="scroll-reveal pt-16 pb-20 px-8 md:px-12 bg-[#0e1b36]">
        <div className="text-center mb-14 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-[#c4a35a]" />
            <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Every Assessment Includes</span>
            <div className="h-px w-8 bg-[#c4a35a]" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white">What you always get.</h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">Regardless of which service you choose, every reinstatement cost assessment is delivered to the same RICS-regulated standard.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {[
            { icon: 'gavel', title: 'RICS Regulated', desc: 'Every report meets the Royal Institution of Chartered Surveyors standards.' },
            { icon: 'analytics', title: 'Live BCIS Data', desc: 'Figures are based on current Building Cost Information Service indices.' },
            { icon: 'description', title: 'Broker-Ready Report', desc: 'Formatted for direct submission to your insurer or broker.' },
            { icon: 'shield', title: 'Professional Indemnity', desc: 'All assessments are backed by full professional indemnity insurance.' },
            { icon: 'support_agent', title: 'Dedicated Support', desc: 'A named surveyor handles your assessment from instruction to delivery.' },
            { icon: 'apartment', title: 'All Property Types', desc: 'Residential, commercial, listed, industrial, and portfolio properties.' },
          ].map(({ icon, title, desc }) => (
            <div key={icon} className="grow-card bg-white/4 border border-white/8 p-7 hover:bg-white/6 hover:border-[#c4a35a]/25 transition-all duration-300 flex items-start gap-4">
              <div className="btn-shine shrink-0 w-9 h-9 flex items-center justify-center">
                <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem' }}>{icon}</span>
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{title}</p>
                <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="scroll-reveal py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Client Testimonials</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-[#0e1b36] mb-4">What Our Clients Say.</h2>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#c4a35a]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-secondary text-sm">Trusted by managing agents and property professionals across the UK.</p>
          </div>

          <div className="relative">
            <div className="reviews-track flex gap-5 w-max animate-scroll-reviews">
              {[
                { stars: 5, text: "We manage fourteen blocks across London. Instructing RCA Ltd has become standard practice at renewal — the reports are accepted without challenge and our leaseholders know the sum insured is correct.", name: "Caroline F.", role: "Managing Agent Director, London", initials: "CF", color: "bg-[#0e1b36]", google: true },
                { stars: 5, text: "After our RTM we needed to establish the correct reinstatement figure from scratch. RCA came back quickly with a robust RICS report — which gave us confidence going into the first renewal under our management.", name: "Michael T.", role: "RTM Company Director, Surrey", initials: "MT", color: "bg-[#152847]" },
                { stars: 5, text: "Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week with a full reinstatement assessment — turned out we were short by nearly £200k. Sorted now.", name: "James H.", role: "Landlord, Manchester", photo: "https://randomuser.me/api/portraits/men/32.jpg", google: true },
                { stars: 5, text: "Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question. Makes renewal so much easier.", name: "Sarah M.", role: "Portfolio Landlord, Leeds", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
                { stars: 4, text: "Needed a reinstatement figure for a listed building — most surveyors wouldn't touch it. These guys knew exactly what they were doing. Very happy with the result.", name: "David C.", role: "Owner, Grade II Listed Property", initials: "DC", color: "bg-[#2a3a5c]", google: true },
                { stars: 5, text: "As a freeholder, the lease puts the insurance obligation squarely on me. RCA's report gives me the documented RICS figure I need to demonstrate compliance to the leaseholders each year.", name: "Robert O.", role: "Freeholder, Birmingham", photo: "https://randomuser.me/api/portraits/men/75.jpg", google: true },
                { stars: 5, text: "The desktop assessment was great value. Clear methodology, BCIS-indexed, and the surveyor walked me through the figures on a call afterwards. Exactly what I needed.", name: "Claire S.", role: "Buy-to-Let Investor, London", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
                { stars: 5, text: "Straightforward process from start to finish. Submitted the details online, had the report in a few days, and my insurer was satisfied. No complaints at all.", name: "Priya S.", role: "Residential Landlord, Leicester", photo: "https://randomuser.me/api/portraits/women/55.jpg", google: true },
                // Duplicates for seamless loop
                { stars: 5, text: "We manage fourteen blocks across London. Instructing RCA Ltd has become standard practice at renewal — the reports are accepted without challenge and our leaseholders know the sum insured is correct.", name: "Caroline F.", role: "Managing Agent Director, London", initials: "CF", color: "bg-[#0e1b36]", google: true },
                { stars: 5, text: "After our RTM we needed to establish the correct reinstatement figure from scratch. RCA came back quickly with a robust RICS report — which gave us confidence going into the first renewal under our management.", name: "Michael T.", role: "RTM Company Director, Surrey", initials: "MT", color: "bg-[#152847]" },
                { stars: 5, text: "Our insurer flagged we were underinsured at renewal. RCA Ltd came back within the week with a full reinstatement assessment — turned out we were short by nearly £200k. Sorted now.", name: "James H.", role: "Landlord, Manchester", photo: "https://randomuser.me/api/portraits/men/32.jpg", google: true },
                { stars: 5, text: "Used them for three properties now. Each report is thorough, clearly laid out, and my broker accepts them without question. Makes renewal so much easier.", name: "Sarah M.", role: "Portfolio Landlord, Leeds", photo: "https://randomuser.me/api/portraits/women/44.jpg" },
              ].map((review, i) => (
                <div key={i} className="flex-shrink-0 w-80 bg-white border border-[#0e1b36]/8 p-6 hover:border-[#c4a35a]/30 transition-colors" style={{ boxShadow: '0 2px 12px rgba(14,27,54,0.06), 3px 0 0 rgba(196,163,90,0.35)' }}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className={`w-3.5 h-3.5 ${s < review.stars ? 'text-[#c4a35a]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                    {review.google && (
                      <svg className="w-3.5 h-3.5 ml-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    )}
                  </div>
                  <p className="text-secondary text-sm leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    {review.photo
                      ? <img src={review.photo} alt={review.name} className="w-8 h-8 object-cover flex-shrink-0" />
                      : <div className={`w-8 h-8 ${review.color} flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}>{review.initials}</div>
                    }
                    <div>
                      <p className="text-sm font-semibold text-[#0e1b36]">{review.name}</p>
                      <p className="text-xs text-secondary">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="scroll-reveal py-24 bg-[#0e1b36]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Our Expertise</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white">50+ years of collective experience.</h2>
            <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">With over 50 years of collective experience, we have refined a methodology that balances technical precision with professional accountability.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: 'history', title: '50+ Years Experience', desc: 'Decades of navigating evolving building codes, material costs, and insurance market shifts.' },
              { icon: 'precision_manufacturing', title: 'Technical Precision', desc: 'Utilising proprietary BCIS data and advanced surveying technology to eliminate guesswork.' },
              { icon: 'policy', title: 'Liability Protection', desc: 'Our reports are legally robust, providing a definitive shield against professional indemnity disputes.' },
            ].map(({ icon, title, desc }, i) => (
              <div key={icon} className="service-pulse-card flex flex-col items-center text-center gap-5 p-8 bg-white/4 border border-white/8 hover:bg-white/6 hover:border-[#c4a35a]/25 transition-all duration-300"
                style={{ animation: `card-pulse-${['left','middle','right'][i]} 9s ease-in-out infinite` }}>
                <div className="btn-shine w-12 h-12 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.3rem' }}>{icon}</span>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-sm text-white">{title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is a RCA ── */}
      <section className="scroll-reveal bg-white pt-8 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">The Framework</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold leading-tight text-[#0e1b36]">
              What is a <span className="text-shine-slow">Reinstatement Cost Assessment?</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              A detailed, RICS-regulated calculation of the exact cost to rebuild your property from scratch — accounting for regional labour, material inflation, and professional fees. Built on facts, not estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col">
              <div className="relative flex-1 min-h-[420px] overflow-hidden sovereign-shadow">
                <Image
                  src="/rebuild-cost-assessment-london.jpeg"
                  alt="RICS-regulated reinstatement cost assessment of a London commercial property"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b36]/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-medium text-sm tracking-wide">RICS-regulated surveyors</p>
                  <div className="w-8 h-px bg-[#c4a35a] mt-2" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-transparent via-[#c4a35a]/20 to-transparent hidden sm:block" aria-hidden="true" />
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Fully comprehensive.', desc: <>Our reinstatement cost assessments calculate <strong className="font-semibold text-[#0e1b36]">every cost</strong> — demolition, materials, labour, professional fees, and VAT. Nothing estimated. Nothing missed. A complete rebuild cost figure you can rely on.</> },
                  { step: '2', title: 'RICS-certified accuracy.', desc: <>Every report is issued under <strong className="font-semibold text-[#0e1b36]">RICS regulations</strong> and benchmarked against live BCIS construction data — giving you a figure your insurer cannot dispute.</> },
                  { step: '3', title: 'Accepted by all UK insurers.', desc: 'Our broker-ready reports are submitted directly to insurers and accepted without challenge. No back-and-forth, no delays — just a compliant, insurer-approved valuation.' },
                  { step: '4', title: 'Backed by professional indemnity.', desc: 'Every assessment carries full PI insurance, meaning your reinstatement figure has real legal weight. If we got it wrong, you are covered. We never do.' },
                ].map(({ step, title, desc }, i) => (
                  <div key={step} className="flex items-center gap-0">
                    <div className={`lifecycle-ring-${i+1} btn-shine shrink-0 w-9 h-9 text-white flex items-center justify-center font-semibold text-sm z-10`}>{step}</div>
                    <div className="w-5 h-px bg-[#c4a35a]/30 shrink-0" aria-hidden="true" />
                    <div className={`lifecycle-border-${i+1} flex-1 p-6 border border-[#0e1b36]/10 hover:border-[#c4a35a]/30 transition-all duration-300 bg-white`}>
                      <h4 className="text-sm font-semibold text-[#0e1b36] mb-1">{title}</h4>
                      <p className="text-secondary text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust & Compliance ── */}
      <section className="scroll-reveal py-20 px-8 bg-[#0e1b36]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Trust &amp; Compliance</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white">Why Managing Agents Choose Us.</h2>
            <p className="text-white/55 max-w-xl mx-auto leading-relaxed">Built for professionals who need compliance they can rely on — and documentation they can stand behind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              { icon: 'gavel', title: 'RICS Regulated Firm', desc: 'Every assessment is conducted by or under the supervision of a RICS-registered member. Full regulatory compliance, every time.' },
              { icon: 'shield', title: 'Professional Indemnity Insured', desc: 'We carry comprehensive PI insurance on every instruction, giving you and your clients full protection.' },
              { icon: 'apartment', title: 'Portfolio & Block Specialists', desc: 'Experience across blocks of flats, mixed-use portfolios, commercial assets, and high-value listed buildings.' },
              { icon: 'description', title: 'Broker-Ready Reports', desc: 'Every report is formatted for direct submission to your insurer or broker, accepted without question.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="hover-grow bg-white/4 border border-white/8 p-7 flex gap-5 items-start hover:bg-white/6 hover:border-[#c4a35a]/25 transition-all duration-300">
                <div className="btn-shine shrink-0 w-10 h-10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology */}
          <div className="bg-white border border-white/10 p-8 sovereign-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#c4a35a]" />
              <p className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Our Assessment Methodology</p>
            </div>
            <div className="flex flex-col md:flex-row gap-0 items-stretch">
              {[
                { n: '1', label: 'Instruction & Data Gathering', desc: 'We collect property details, floor areas, construction type, and any specialist features.' },
                { n: '2', label: 'BCIS-Indexed Modelling', desc: 'Rebuild costs are calculated using live BCIS indices — the same data used by major insurers.' },
                { n: '3', label: 'RICS-Reviewed Report', desc: 'A RICS-registered surveyor signs off every report before it is delivered to you.' },
              ].map(({ n, label, desc }, i, arr) => (
                <div key={n} className="flex flex-col md:flex-row items-stretch flex-1">
                  <div className="flex-1 p-5 text-center">
                    <div className={`method-ring-${n} btn-shine w-8 h-8 flex items-center justify-center text-white font-semibold text-sm mx-auto mb-3`}>{n}</div>
                    <p className="font-semibold text-[#0e1b36] text-sm mb-1">{label}</p>
                    <p className="text-secondary text-xs leading-relaxed">{desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:flex items-center px-1 text-[#c4a35a]/40">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="scroll-reveal py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#7f1d1d] p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" style={{ background: 'rgba(255,255,255,0.03)' }}></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" style={{ background: 'rgba(0,0,0,0.15)' }}></div>

            <div className="md:w-1/2 space-y-6 relative z-10 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-6 h-px bg-white/40" />
                <span className="text-white/50 text-xs font-medium uppercase tracking-[0.25em]">The Problem</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl font-semibold text-white leading-tight">
                The hidden cost of getting it wrong.
              </h2>
              <p className="text-lg text-white/65 leading-relaxed">
                Over <span className="font-semibold text-white">80% of UK properties</span> carry an inaccurate reinstatement figure. Most owners — and the managing agents acting for them — won&rsquo;t discover this until a claim arises. By then, the financial and legal damage is already done.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="bg-white p-5 space-y-1 min-w-0 shadow-md">
                  <span className="font-headline text-3xl font-semibold text-[#0e1b36] block truncate">£425bn</span>
                  <p className="text-xs font-medium text-secondary uppercase tracking-widest">Estimated UK Gap</p>
                </div>
                <div className="bg-white p-5 space-y-1 min-w-0 shadow-md">
                  <span className="font-headline text-3xl font-semibold text-[#0e1b36] block">80%+</span>
                  <p className="text-xs font-medium text-secondary uppercase tracking-widest">Properties at Risk</p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 space-y-4 relative z-10">
              {[
                {
                  title: 'The Condition of Average.',
                  body: <>If you are <span className="font-semibold text-[#0e1b36]">20% underinsured</span>, your insurer can reduce your payout by 20% — even on a partial claim. The clause is standard across UK policies and routinely enforced.</>
                },
                {
                  title: 'Construction costs are rising fast.',
                  body: <>BCIS data shows UK build costs have risen <span className="font-semibold text-[#0e1b36]">over 30% since 2020</span>. A valuation from three years ago is almost certainly out of date — and your insurer knows it.</>
                },
                {
                  title: 'One accurate reinstatement cost assessment fixes this.',
                  body: <>A <span className="font-semibold text-[#0e1b36]">RICS-certified Reinstatement Cost Assessment</span> gives you a compliant, insurer-accepted figure. <Link href="/services" className="text-[#c4a35a] underline underline-offset-2 hover:text-[#dbb87a] transition-colors">See our services &rarr;</Link></>
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white p-6 flex flex-col md:flex-row items-start gap-4 text-left hover:shadow-md transition-all duration-300">
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center" style={{ background: 'linear-gradient(105deg,#991b1b 40%,#f87171 50%,#991b1b 60%)', backgroundSize: '200% auto', animation: 'shine 4s linear infinite' }}>
                    <span className="material-symbols-outlined text-white" style={{ fontSize: '1rem' }}>warning</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0e1b36] text-sm mb-1">{title}</h4>
                    <p className="text-sm text-secondary leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Property Types ── */}
      <section className="scroll-reveal pt-8 pb-24 px-8 bg-[#0e1b36] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#c4a35a]" />
              <span className="text-[#c4a35a] text-xs font-medium uppercase tracking-[0.25em]">Property Types</span>
              <div className="h-px w-8 bg-[#c4a35a]" />
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">Reinstatement Assessments for every property type.</h2>
            <p className="text-white/45 leading-relaxed max-w-2xl mx-auto">From blocks of flats in Central London to national commercial portfolios — RICS-regulated reinstatement cost assessments delivered across the UK.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWBDJ70LsQQ5h85h82yf83EDziKtCRsnRZfgrGO4oWFPS8dsId-HyTmiMm-MyrubiWJ38hcFJlBmzI573vmnv2_12J4LWJjLXNO7EC8ijA7TxmUKZtoKUA1282iLrXeRgg9k9lf6WWVNoWMobWwr3rYI9H814zFk4JbuvaB3_h3fLhQp-bXppw_Sge5PfTUerK2ODyxkjMbMgMGnMz6jK9wohy8TpfQqmt4Mb30zRGBT3QY5bNQUfnfRyOjqckg-nOooWHc1knCGE',
                alt: 'Blocks of flats reinstatement cost assessment — managing agents and leaseholders',
                title: 'Blocks of Flats',
                label: 'Managing Agents & RTM',
                desc: 'The largest single segment we serve. Where the lease obliges insurance to full reinstatement cost, our RICS report gives managing agents, RTM companies and freeholders the documented figure they need — and the protection if it is ever challenged.',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2XW_YI4gh7Lb5mNE7p1aI1bLNEcVW1CDe7bUC8Ag7LVlNaojO7Ayi8RMIuxBGzn7kZKcL1QBbq0g3lgSc4qinZxlAqp2qTOfZtZG4fOIrOFwAOAc7dW6_fEdvb6VSbXA84CCayUI5UKBOiGxH6-Znlcw8eG0YC9mkBvKnJNle7Gc6k_rnPoMGlmVQFJ6jFc9pWy6LfWRjpkPkhQ483fQT0XOjHtrToiOb5voY91FLtpydZ5dFr_WwY_40NT5rtFSTOgb2eUQ3C0c',
                alt: 'Commercial landlord reinstatement cost assessment — office and retail property UK rebuild valuation',
                title: 'Commercial Properties',
                label: 'Offices & Retail',
                desc: 'RICS-certified reinstatement cost assessments for offices, retail units, and mixed-use properties across London and the UK. Protect against underinsurance and satisfy lender and insurer compliance requirements.',
              },
              {
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDguBhebTeI2g-SjCVA57yO5x-hj0YvIwNx5xcqJKYJNh_oR0D6i0UB_nXjfoDcCi0AV5IIvvn8tLaDzCvXuj8Uh83HQPPqaMh6R0diVpfa6P0olh5liAj--KW_r8izD8HduGaAmkIm3rt-8awac4cnqY12aG_kSx0Ulw9M8sMck6yX19VOgMbg603v3P5Or7xVMEBCjM_J7ZMyz4Rxdutpvm1JAClzGilY_ftZPm770hVgeit-ukM7jPdEUMUaV-RhSARPxDxh7ZU',
                alt: 'Asset manager portfolio reinstatement cost assessment — multi-site UK property rebuild valuation',
                title: 'Portfolios',
                label: 'Multi-Asset',
                desc: 'Consolidated reinstatement cost assessments for multi-site portfolios. Broker-ready reports with individual asset schedules, annual BCIS indexation, and a full audit trail — built for institutional compliance.',
              },
            ].map(({ src, alt, title, label, desc }) => (
              <div key={title} className="group relative overflow-hidden h-[28rem] flex flex-col justify-end">
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={src} alt={alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"></div>
                <div className="relative z-10 p-7 space-y-2.5">
                  <span className="inline-block text-[0.65rem] font-semibold uppercase tracking-widest text-[#c4a35a] bg-[#c4a35a]/10 border border-[#c4a35a]/30 px-2.5 py-1">{label}</span>
                  <h3 className="font-headline text-white text-2xl font-semibold leading-snug">{title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-1 text-xs font-medium text-[#c4a35a] hover:text-[#dbb87a] transition-colors pt-1 uppercase tracking-wider">View services <span className="material-symbols-outlined" style={{fontSize:'0.85rem'}}>arrow_forward</span></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        heading={
          <>
            Get Your RICS-Regulated<br /><span className="text-shine">Reinstatement Cost Assessment</span><br />Today.
          </>
        }
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
