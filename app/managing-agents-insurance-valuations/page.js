import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Insurance Valuations for Managing Agents | RICS Reinstatement Cost Assessments',
  description:
    'Managing agents carry direct liability when a block is underinsured. RICS-regulated reinstatement cost assessments protect your firm and your leaseholders. 48-hour desktop turnaround.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
  openGraph: {
    title: 'Insurance Valuations for Managing Agents | RICS Reinstatement Cost Assessments',
    description:
      'Managing agents carry direct liability when a block is underinsured. RICS-regulated reinstatement cost assessments protect your firm and your leaseholders. 48-hour desktop turnaround.',
    url: '/managing-agents-insurance-valuations',
  },
}

const riskCards = [
  {
    number: '01',
    title: 'Leaseholder Claims at Point of Major Loss',
    body:
      'Where a major claim reveals the sum insured falls short of actual reinstatement cost, leaseholders can pursue the managing agent for the shortfall. Courts have consistently held that agents owe a duty of care to arrange adequate cover. An RICS-validated figure is your primary defence.',
  },
  {
    number: '02',
    title: 'FCA and RICS Regulatory Scrutiny',
    body:
      'Regulated firms are expected to demonstrate that insurance arrangements meet the standard required by the lease. Using an unqualified or outdated reinstatement figure — or no formal assessment at all — is increasingly flagged in compliance reviews and FCA supervision visits.',
  },
  {
    number: '03',
    title: 'Professional Indemnity Exposure',
    body:
      'Underinsurance at claim crystallises into a PI claim against the managing agent. Insurers will look closely at whether a formal RCA was commissioned at appropriate intervals. Absence of an RICS assessment weakens your defence and may affect PI cover renewal terms.',
  },
  {
    number: '04',
    title: 'Block Renewal Complications',
    body:
      'Insurers are declining or loading premiums at renewal where reinstatement cost assessments are absent, stale, or not RICS-regulated. An up-to-date BCIS-indexed RCA smooths renewal, avoids mid-term adjustments, and demonstrates professional portfolio management.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Instruction',
    body: 'Submit block details via our online form or portfolio spreadsheet. We confirm fee and turnaround on the same day.',
  },
  {
    step: '02',
    title: 'Desktop or Site Survey',
    body: 'For straightforward blocks we complete a desktop assessment using OS data, planning records, and BCIS cost data. Complex or listed buildings receive a site inspection.',
  },
  {
    step: '03',
    title: 'RICS Report Issued',
    body: 'A named RICS-regulated surveyor signs off the reinstatement cost assessment. The report meets RICS guidance and is accepted by all major block insurers.',
  },
  {
    step: '04',
    title: 'Broker-Ready PDF',
    body: 'You receive a clean, formatted PDF ready to forward to your broker or attach to the insurer renewal pack. No reformatting required.',
  },
  {
    step: '05',
    title: '3-Year Index Linking Option',
    body: 'We offer a three-year index-linking service using BCIS construction cost indices, with a full reassessment at the end of the cycle — keeping your portfolio continuously compliant.',
  },
]

const faqs = [
  {
    q: 'How often should a managing agent commission a reinstatement cost assessment?',
    a: 'RICS guidance recommends a full RCA every three years as a minimum, with BCIS index linking in intervening years. Where significant works have been completed — extensions, conversions, refurbishments — a new assessment should be triggered regardless of the cycle.',
  },
  {
    q: 'Can the managing agent be held personally liable for underinsurance?',
    a: 'Yes. Where the lease obliges the freeholder or RTM company to insure at full reinstatement cost, and the managing agent is responsible for arranging that insurance, courts have found agents liable where inadequate cover led to an unrecovered shortfall. An RICS-regulated RCA demonstrates professional compliance.',
  },
  {
    q: 'Do your reports satisfy insurer requirements at renewal?',
    a: 'Our reports are RICS-regulated, BCIS-indexed, and are accepted by all major residential block insurers including Zurich, RSA, Aviva, and specialist MGA markets. We have had no report rejected at renewal.',
  },
  {
    q: 'We manage 30+ blocks. Can you handle a bulk portfolio instruction?',
    a: 'Yes. We handle bulk portfolio instructions with a single point of contact, consolidated invoicing, and multi-block discount pricing. Contact us with your portfolio schedule for a tailored fee proposal.',
  },
  {
    q: 'What information do you need from us to get started?',
    a: 'For a desktop assessment: block address, year built, approximate GIA or number of flats, and any recent works. We can usually source supplementary data ourselves. For site visits we coordinate access directly.',
  },
  {
    q: 'How does the 48-hour turnaround work?',
    a: 'Desktop assessments on standard residential blocks are delivered within 48 working hours of receiving full instructions and payment. Site surveys are booked within five working days, with the report issued within 48 hours of inspection.',
  },
]

export default function ManagingAgentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-[#111318]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-28 md:py-36">
          <div className="w-full max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-bold uppercase tracking-widest text-[#c47c1e]">
                Managing Agents &middot; RTM Companies &middot; Freeholders
              </span>
              <div className="h-px w-8 bg-[#c47c1e]" />
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-white mb-8">
              Managing agents carry the liability. We carry the risk of getting the figure wrong.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Where a lease covenants insurance at full reinstatement cost, the managing agent is
              duty-bound to arrange cover at an RICS-validated figure. Under-insurance is not a
              technicality — it is direct exposure to leaseholder claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="btn-shine font-body font-bold text-white px-8 py-4 text-center transition-transform active:scale-[0.97]"
              >
                Request a Portfolio Quote
              </Link>
              <Link
                href="/services"
                className="font-body font-semibold text-white border border-white/30 px-8 py-4 hover:border-[#c47c1e] hover:text-[#c47c1e] transition-all active:scale-[0.97] text-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Obligation / Problem */}
      <section className="py-20 px-6 bg-[#f4f5f7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
                The Obligation
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight mb-6">
              The lease creates the duty. The duty creates the liability.
            </h2>
            <div className="space-y-5 font-body text-[#111318]/80 leading-relaxed text-base md:text-lg max-w-3xl">
              <p>
                The majority of residential long leases contain a covenant requiring the freeholder
                — or, in RTM buildings, the RTM company — to insure the block at its full
                reinstatement cost. Where a managing agent is appointed to discharge that
                obligation, the agent assumes responsibility for ensuring the sum insured is
                adequate.
              </p>
              <p>
                Over 80% of residential blocks in the UK are estimated to be underinsured. The
                national gap between insured values and actual reinstatement costs is estimated at
                £425 billion. When a major loss occurs in an underinsured block, the shortfall does
                not simply disappear — it falls on leaseholders, and they look to the managing
                agent for answers.
              </p>
              <p>
                An RICS-regulated Reinstatement Cost Assessment is the recognised method of
                establishing an accurate, defensible sum insured. It removes the ambiguity, limits
                your exposure, and demonstrates to leaseholders, insurers, and regulators that you
                have discharged your duty properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#111318] py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: '80%+', label: 'of UK residential blocks estimated to be underinsured' },
            { stat: '£425bn', label: 'estimated national underinsurance gap' },
            { stat: '48 hrs', label: 'desktop assessment turnaround from instruction' },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex flex-col items-center gap-2">
              <span className="font-headline text-4xl md:text-5xl text-[#c47c1e]">{stat}</span>
              <span className="font-body text-sm text-white/65 leading-snug max-w-[18ch]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Risk Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
                Exposure Areas
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight">
              Four ways underinsurance reaches back to the managing agent.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskCards.map(({ number, title, body }) => (
              <div
                key={number}
                className="bg-white border border-[#111318]/10 p-8 hover-lift card-shadow transition-all duration-300"
              >
                <span className="font-body text-xs font-bold tracking-widest text-[#c47c1e] mb-4 block">
                  {number}
                </span>
                <h3 className="font-headline text-xl text-[#111318] mb-3 leading-snug">{title}</h3>
                <p className="font-body text-sm text-[#111318]/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#f4f5f7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
                Our Process
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight">
              From instruction to broker-ready report.
            </h2>
          </div>
          <div className="space-y-4">
            {processSteps.map(({ step, title, body }) => (
              <div
                key={step}
                className="flex gap-6 bg-white border border-[#111318]/8 p-7 hover-lift transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 step-circle flex items-center justify-center">
                  <span className="font-body text-xs font-bold text-[#c47c1e]">{step}</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg text-[#111318] mb-1">{title}</h3>
                  <p className="font-body text-sm text-[#111318]/70 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 bg-[#111318]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
                Portfolio Service
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-white leading-tight mb-6">
              Built for agents managing multiple blocks.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: 'Multi-Block Discounts',
                body: 'Bulk instructions across a managed portfolio attract reduced per-block fees. Submit your portfolio schedule and we will provide a fixed-price proposal.',
              },
              {
                title: 'Single Point of Contact',
                body: 'One named surveyor handles your entire portfolio — consistent methodology, consolidated invoicing, and a direct line for queries.',
              },
              {
                title: 'Annual Review Service',
                body: 'We maintain a forward renewal calendar for your blocks, flagging assessments due for refresh and issuing BCIS index-linked updates in intervening years.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-white/10 p-7 hover:border-[#c47c1e]/50 transition-all duration-300">
                <div className="h-px w-8 bg-[#c47c1e] mb-5" />
                <h3 className="font-headline text-lg text-white mb-3">{title}</h3>
                <p className="font-body text-sm text-white/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="btn-amber font-body font-bold px-8 py-4 inline-block text-center transition-all active:scale-[0.97]"
            >
              Discuss a Portfolio Instruction
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
              Client Perspective
            </span>
            <div className="h-px w-8 bg-[#c47c1e]" />
          </div>
          <blockquote className="font-headline text-2xl md:text-3xl text-[#111318] leading-relaxed mb-8">
            &ldquo;We manage 47 blocks across South London. Before commissioning RICS assessments,
            our sums insured were based on whatever the previous agent had used — some figures were
            ten years old. The first round of RCAs revealed an average 34% shortfall. Our PI
            insurer now requires us to hold current RICS assessments as a condition of cover.&rdquo;
          </blockquote>
          <div>
            <span className="font-body font-bold text-[#111318] text-sm block">RTM Company Director</span>
            <span className="font-body text-[#111318]/50 text-sm">South London Residential Portfolio</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#f4f5f7]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
                FAQ
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#111318] leading-tight">
              Questions from managing agents.
            </h2>
          </div>
          <div className="space-y-0 divide-y divide-[#111318]/10">
            {faqs.map(({ q, a }) => (
              <div key={q} className="py-7">
                <h3 className="font-headline text-lg text-[#111318] mb-3">{q}</h3>
                <p className="font-body text-sm text-[#111318]/70 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-[#111318]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
              RICS Regulated
            </span>
            <div className="h-px w-8 bg-[#c47c1e]" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl text-white leading-tight mb-6">
            Remove the liability. Commission an RICS assessment today.
          </h2>
          <p className="font-body text-white/70 mb-10 leading-relaxed max-w-xl mx-auto">
            Desktop assessments delivered within 48 hours. Portfolio pricing available. Every report
            RICS-regulated, BCIS-indexed, and broker-accepted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-shine font-body font-bold text-white px-8 py-4 text-center transition-transform active:scale-[0.97]"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="font-body font-semibold text-white border border-white/30 px-8 py-4 hover:border-[#c47c1e] hover:text-[#c47c1e] transition-all active:scale-[0.97] text-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
