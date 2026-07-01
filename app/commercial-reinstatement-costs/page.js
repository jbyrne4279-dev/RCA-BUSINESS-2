import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Commercial Reinstatement Cost Assessment | RICS-Regulated | RCA Business',
  description:
    'RICS-regulated commercial reinstatement cost assessments for offices, warehouses, retail and mixed-use blocks. BCIS-indexed, elemental cost analysis, broker-ready in 48 hours.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
  openGraph: {
    title: 'Commercial Reinstatement Cost Assessment | RICS-Regulated | RCA Business',
    description:
      'RICS-regulated commercial reinstatement cost assessments for offices, warehouses, retail and mixed-use blocks. BCIS-indexed, elemental cost analysis, broker-ready in 48 hours.',
    url: '/commercial-reinstatement-costs',
  },
}

const propertyTypes = [
  {
    title: 'Office Buildings',
    desc: 'Single and multi-storey offices, including raised floors, suspended ceilings, air conditioning, data infrastructure and tenant fit-out allowances.',
  },
  {
    title: 'Retail & High Street',
    desc: 'Shop units, retail parks and department stores — accounting for frontage, display fit-out, refrigeration, signage and landlord shell obligations.',
  },
  {
    title: 'Industrial & Warehouses',
    desc: 'Distribution centres, light industrial units, cold stores and logistics facilities — incorporating portal frame structures, dock levellers and crane gantries.',
  },
  {
    title: 'Mixed-Use Blocks',
    desc: 'Residential above commercial — assessed element by element, with separate reinstatement figures for each tenure to satisfy both lease and insurer requirements.',
  },
  {
    title: 'Listed Commercial',
    desc: 'Grade I and II listed commercial buildings where conservation constraints, specialist materials and approved contractors materially increase reinstatement cost.',
  },
  {
    title: 'Business Parks & Campuses',
    desc: 'Multi-building estates with shared infrastructure, external works and landlord services — valued on an individual and aggregate basis.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Instruction & Data Gathering',
    desc: 'We confirm the property details, lease obligations, and any previous valuation. Floor plans, construction records and recent fit-out information are requested at this stage.',
  },
  {
    number: '02',
    title: 'Desktop or Site Assessment',
    desc: 'Using RICS BCIS elemental cost data, location factors and current tender price indices, our surveyors build a property-specific cost model. A site visit is arranged where complexity requires it.',
  },
  {
    number: '03',
    title: 'Elemental Cost Analysis',
    desc: 'We price each element — substructure, frame, envelope, M&E, fit-out, external works and professional fees — against current BCIS rates, adjusted for the building\'s specification and location.',
  },
  {
    number: '04',
    title: 'RICS-Regulated Report',
    desc: 'A signed RICS-compliant report is issued, ready for submission to your insurer or broker. The report states the full reinstatement cost, methodology and the next recommended review date.',
  },
]

const faqs = [
  {
    q: 'How is commercial reinstatement cost different from market value?',
    a: 'Market value reflects what a buyer would pay for the property in its current state. Reinstatement cost is the cost to demolish and rebuild the structure to the same specification from the foundations up, including professional fees and debris removal. The two figures can differ significantly — often by more than 40% — and only the reinstatement figure is relevant for buildings insurance.',
  },
  {
    q: 'Why does my lease require an RICS-regulated assessment?',
    a: 'Most commercial leases contain a covenant requiring the landlord or freeholder to insure at full reinstatement cost. An RICS-regulated assessment provides a defensible, professionally prepared figure that satisfies that covenant. A calculator output or desktop estimate from an unregulated source does not carry the same legal weight.',
  },
  {
    q: 'What does BCIS mean and why does it matter?',
    a: 'BCIS — the Building Cost Information Service — is the RICS\'s own cost database, compiled from actual contract data across thousands of UK construction projects. Using BCIS rates means our figures are grounded in real tender data, indexed to current price levels, and accepted as authoritative by insurers and courts alike.',
  },
  {
    q: 'Do you include tenant fit-out and M&E in the assessment?',
    a: 'Yes. Mechanical and electrical installations, data cabling, specialist fit-out and tenant improvements are all captured where they form part of the reinstatement obligation. We review lease terms to establish which elements the landlord is required to reinstate.',
  },
  {
    q: 'How often should a commercial reinstatement cost assessment be updated?',
    a: 'RICS guidance recommends a full reassessment every three years, with desktop reviews in intervening years to capture movements in the BCIS Tender Price Index. Significant refurbishment, change of use or a major insured event should always trigger a fresh assessment regardless of when the last one was carried out.',
  },
  {
    q: 'What is your turnaround time for commercial assessments?',
    a: 'Desktop assessments are typically delivered within 48 hours of receiving all required information. Where a site inspection is required, we will agree a programme with you at instruction — most are completed within five working days.',
  },
]

export default function CommercialReinstatementPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#111318] pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              Commercial Property
            </span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Commercial reinstatement costs demand professional-grade valuation.
          </h1>
          <p className="font-body text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
            Complex construction, specialist fit-out and substantial M&E plant mean commercial buildings are among the most frequently underinsured assets in the UK. An RICS-regulated assessment using current BCIS rates is the only defensible basis for the sum insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-shine font-body font-semibold text-white px-8 py-4 text-center transition-transform active:scale-[0.97]"
            >
              Request an Assessment
            </Link>
            <Link
              href="/services"
              className="border border-white/25 font-body font-semibold text-white px-8 py-4 text-center hover:border-[#c47c1e] hover:text-[#c47c1e] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#c47c1e] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: '80%+', label: 'of UK commercial blocks carry inadequate reinstatement cover' },
            { stat: '£425bn', label: 'estimated underinsurance gap across UK commercial property' },
            { stat: '48 hrs', label: 'desktop turnaround from instruction to RICS-signed report' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="font-headline text-4xl text-white mb-1">{stat}</p>
              <p className="font-body text-sm text-white/80 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why commercial is different */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              Complexity
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-6">
            Why commercial reinstatement is fundamentally more complex than residential.
          </h2>
          <p className="font-body text-[#111318]/70 leading-relaxed mb-14 max-w-2xl">
            Residential RCAs follow a broadly consistent methodology. Commercial assets do not. The cost drivers vary radically by use class, construction era, specification and tenancy structure — each of which must be modelled separately.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Mechanical & Electrical Plant',
                desc: 'Commercial buildings carry substantial M&E — HVAC, BMS, lifts, generator backup, fire suppression and data infrastructure. These are often the largest single cost element and the most frequently omitted from insured values.',
              },
              {
                title: 'Specialist Fit-Out',
                desc: 'Tenant improvements, raised access floors, bespoke joinery, kitchen facilities and branded interiors all carry reinstatement obligations that must be mapped against the lease before the sum insured can be fixed.',
              },
              {
                title: 'Construction Method Variation',
                desc: 'Portal frame industrial, steel frame office, concrete frame retail and traditional masonry all price differently. A single per-square-metre rate applied across asset classes will systematically produce the wrong figure.',
              },
              {
                title: 'Business Interruption Alignment',
                desc: 'Commercial reinstatement periods are typically longer than residential — two to four years is common for a large office or industrial facility. The reinstatement cost assessment informs the indemnity period on the BI policy.',
              },
              {
                title: 'Professional Fees & Statutory Costs',
                desc: 'Architect, structural engineer, project manager, planning and building regulations fees are all recoverable reinstatement costs. On a complex commercial building these can reach 15–20% of construction cost.',
              },
              {
                title: 'External Works & Infrastructure',
                desc: 'Car parks, service yards, boundary structures, drainage, landscaping and utility diversions form part of the reinstatement obligation but are routinely excluded from insured values calculated on a per-square-metre basis.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="border border-[#111318]/8 p-7 card-shadow hover-lift bg-white"
              >
                <div className="h-px w-6 bg-[#c47c1e] mb-4" />
                <h3 className="font-headline text-xl text-[#111318] mb-3">{title}</h3>
                <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="py-24 px-6 bg-[#f4f5f7]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              Asset Classes
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-4">
            Commercial property types we assess.
          </h2>
          <p className="font-body text-[#111318]/70 leading-relaxed mb-12 max-w-2xl">
            Our surveyors hold experience across the full range of commercial asset classes. Each assessment is prepared by a surveyor with direct experience of that building type — not templated from a generic schedule.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {propertyTypes.map(({ title, desc }) => (
              <div key={title} className="bg-white border border-[#111318]/8 p-6 card-shadow hover-lift">
                <div className="h-px w-6 bg-[#c47c1e] mb-4" />
                <h3 className="font-headline text-lg text-[#111318] mb-2">{title}</h3>
                <p className="font-body text-sm text-[#111318]/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BCIS Method */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              Methodology
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-6">
            The RICS BCIS method — why it is the only defensible standard.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 font-body text-[#111318]/70 leading-relaxed text-sm">
              <p>
                The Building Cost Information Service (BCIS) is the RICS's proprietary cost database, compiled from actual tender returns on thousands of UK construction projects. BCIS elemental cost analyses break a building down into its constituent parts — substructure, frame, upper floors, roof, external walls, windows, internal finishes, fittings, M&E services and external works — and price each element against current contract data.
              </p>
              <p>
                Location factors adjust the national rate for regional cost differentials. The BCIS Tender Price Index then uplifts historic rates to current market levels. The result is a figure grounded in actual construction economics, not a rule-of-thumb multiplier applied to gross internal area.
              </p>
              <p>
                Insurers, lenders and the courts all recognise BCIS-based assessments as authoritative. When a claim leads to a dispute about adequacy of the sum insured, the question asked is whether the insured value was supported by a professional, RICS-regulated assessment using current BCIS rates. If the answer is no, the underinsurance defence is weakened significantly.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Elemental cost analysis — each building component priced separately',
                'Current BCIS Tender Price Index applied at date of assessment',
                'Regional location factors for London, South East and national locations',
                'Professional fees, VAT and debris removal calculated explicitly',
                'Alternative accommodation and business interruption period noted',
                'RICS-regulated, signed report — accepted by all major commercial insurers',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center border border-[#c47c1e]">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-body text-sm text-[#111318]/75 leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              Our Process
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-white leading-tight mb-14">
            From instruction to RICS-signed report.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map(({ number, title, desc }) => (
              <div key={number} className="border border-white/10 p-7 hover:border-[#c47c1e]/40 transition-colors">
                <p className="font-headline text-5xl text-[#c47c1e]/30 mb-4">{number}</p>
                <h3 className="font-headline text-xl text-white mb-3">{title}</h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f4f5f7]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              FAQ
            </span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-12">
            Frequently asked questions.
          </h2>
          <div className="space-y-0">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="border-t border-[#111318]/10 py-7">
                <h3 className="font-headline text-lg text-[#111318] mb-3">{q}</h3>
                <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{a}</p>
              </div>
            ))}
            <div className="border-t border-[#111318]/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111318]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
              Get Started
            </span>
            <div className="h-px w-8 bg-[#c47c1e]" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-white leading-tight mb-5">
            Commission an RICS-regulated commercial reinstatement cost assessment.
          </h2>
          <p className="font-body text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
            Protect your position as freeholder, managing agent or insurer. An accurate, defensible reinstatement figure removes uncertainty at the point of claim.
          </p>
          <Link
            href="/contact"
            className="btn-shine inline-block font-body font-semibold text-white px-10 py-4 transition-transform active:scale-[0.97]"
          >
            Request an Assessment
          </Link>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
