import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Reinstatement Cost Assessments for Block Managers | RICS Regulated',
  description:
    'RICS-regulated reinstatement cost assessments for block managers and property management companies. Protect against underinsurance liability — 48hr desktop turnaround, insurer-accepted reports.',
  alternates: { canonical: '/block-managers-reinstatement-cost-assessments' },
  openGraph: {
    title: 'Reinstatement Cost Assessments for Block Managers | RICS Regulated',
    description:
      'RICS-regulated reinstatement cost assessments for block managers and property management companies. Protect against underinsurance liability — 48hr desktop turnaround, insurer-accepted reports.',
    url: '/block-managers-reinstatement-cost-assessments',
  },
}

const faqs = [
  {
    q: 'How often should a block reinstatement cost assessment be carried out?',
    a: 'RICS guidance and most insurer requirements recommend a full professional assessment every three years, with index-linked adjustments in the intervening years. Where significant works have been completed or building costs have shifted materially, an earlier reassessment is advisable.',
  },
  {
    q: 'What does the condition of average mean for a managing agent?',
    a: 'If a block is underinsured and a partial loss occurs, insurers apply the condition of average: the claim settlement is reduced proportionately to reflect the underinsurance. A block insured at 70% of its true rebuild cost will receive only 70% of any valid claim — and the managing agent who placed the insurance may be held liable for the shortfall.',
  },
  {
    q: 'Will your report be accepted by the block\'s insurer?',
    a: 'Yes. Our assessments are prepared by RICS-regulated surveyors using BCIS cost data and are accepted as satisfactory evidence of rebuild value by all major UK block insurers.',
  },
  {
    q: 'Do you cover single blocks or only portfolios?',
    a: 'Both. We work with managing agents handling a single block and with companies managing portfolios of 200 or more units. Portfolio clients benefit from co-ordinated scheduling, a single named surveyor contact, and volume pricing.',
  },
  {
    q: 'What is your turnaround time?',
    a: 'Desktop assessments are delivered within 48 hours of instruction. On-site inspections are typically completed within five working days, subject to access being arranged.',
  },
  {
    q: 'What information do you need to get started?',
    a: 'For a desktop assessment we require the address, a recent Energy Performance Certificate or floor plans if available, and the current sum insured. We handle the rest. For an on-site inspection we will co-ordinate access directly with you.',
  },
]

export default function BlockManagersPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Hero */}
        <section className="bg-[#111318] min-h-[62vh] flex items-center">
          <div className="max-w-5xl mx-auto px-6 py-28 md:py-36 w-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                Block Management
              </span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8 max-w-4xl">
              Block managers who get the figure wrong answer for it.
            </h1>
            <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-12">
              Where a lease covenants insurance at full reinstatement cost, the managing agent carries the liability if the sum insured proves inadequate. An RICS-regulated assessment removes that exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-shine font-body font-semibold text-white px-8 py-4 text-sm uppercase tracking-wider text-center transition-transform active:scale-[0.97]"
              >
                Request an Assessment
              </Link>
              <Link
                href="/services"
                className="border border-white/25 font-body font-semibold text-white px-8 py-4 text-sm uppercase tracking-wider text-center hover:border-[#c47c1e] hover:text-[#c47c1e] transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* What block managers need to know */}
        <section className="bg-[#f4f5f7] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                The Legal Position
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#111318] mb-16 max-w-3xl">
              What block managers need to know.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#111318]/8">
              {[
                {
                  heading: 'The lease obligation',
                  body: 'Most residential leases contain a covenant requiring insurance at full reinstatement cost. That obligation falls on the managing agent or RTM company as part of the management function. It is not satisfied by placing a policy at whatever figure the previous agent used.',
                },
                {
                  heading: 'The condition of average',
                  body: 'UK block insurance policies routinely carry an average clause. If the sum insured is materially below the true rebuild cost, any claim settlement — including a partial loss — is reduced proportionately. A block 30% underinsured receives 70p in the pound on every claim.',
                },
                {
                  heading: 'Service charge recovery',
                  body: 'Where underinsurance leads to a shortfall on a major claim, leaseholders may seek to recover that shortfall from the managing agent through the service charge or directly. Demonstrating that a professional, RICS-regulated assessment was obtained and acted upon is the primary line of defence.',
                },
              ].map(({ heading, body }) => (
                <div key={heading} className="bg-white p-8 md:p-10">
                  <div className="h-px w-8 bg-[#c47c1e] mb-6" />
                  <h3 className="font-headline text-xl md:text-2xl text-[#111318] mb-4">{heading}</h3>
                  <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our block manager service */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                Our Service
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#111318] mb-8">
                  Built for block management, from one block to 200+ units.
                </h2>
                <p className="font-body text-base text-[#111318]/65 leading-relaxed mb-6">
                  Whether you manage a single converted Victorian terrace or a portfolio spanning dozens of purpose-built blocks, our assessment service scales to your instruction volume without compromising the rigour of each individual report.
                </p>
                <p className="font-body text-base text-[#111318]/65 leading-relaxed">
                  Portfolio clients are assigned a named RICS-regulated surveyor who understands the portfolio, co-ordinates scheduling around renewal dates, and remains the single point of contact for queries from insurers or leaseholders.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: 'Single block assessments',
                    detail: 'Desktop or on-site, delivered within 48 hours (desktop) or five working days (on-site). BCIS-indexed figures accepted by all major UK block insurers.',
                  },
                  {
                    label: 'Portfolio programmes',
                    detail: 'Co-ordinated assessment schedules across multiple blocks, timed to renewal dates. Volume pricing available. All reports held on a central tracker accessible to your team.',
                  },
                  {
                    label: 'Annual reminder service',
                    detail: 'We monitor each block against its three-year reassessment date and issue reminders ahead of time so nothing slips through during a busy renewal period.',
                  },
                  {
                    label: '3-year protection plans',
                    detail: 'A full RICS assessment in year one, with BCIS-indexed updates in years two and three, and a reassessment in year four. A single contracted instruction covering the full three-year cycle.',
                  },
                  {
                    label: 'Named surveyor contact',
                    detail: 'Portfolio clients are not passed between account handlers. You deal directly with the RICS-regulated surveyor responsible for your blocks.',
                  },
                ].map(({ label, detail }) => (
                  <div key={label} className="border border-[#111318]/8 p-6 hover-lift card-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7.5" stroke="#c47c1e" />
                          <path d="M5 8l2 2 4-4" stroke="#c47c1e" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-body font-semibold text-[#111318] text-sm mb-1">{label}</p>
                        <p className="font-body text-sm text-[#111318]/60 leading-relaxed">{detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance made simple */}
        <section className="bg-[#111318] py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                Compliance
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-white mb-8">
                  The report is your documented, defensible position.
                </h2>
                <p className="font-body text-base text-white/65 leading-relaxed mb-6">
                  When a leaseholder, insurer, or tribunal asks how the sum insured was arrived at, a professionally prepared RICS-regulated reinstatement cost assessment is the answer that closes the question. An index-linked figure inherited from a previous agent, or one derived from an online calculator, is not.
                </p>
                <p className="font-body text-base text-white/65 leading-relaxed mb-6">
                  Our reports are signed by a named RICS-regulated surveyor, reference the methodology and cost data used, and are prepared in a format that insurers, loss adjusters, and First-tier Tribunal panels recognise and accept.
                </p>
                <p className="font-body text-base text-white/65 leading-relaxed">
                  For managing agents, the question is not whether to commission an assessment. It is whether to commission one before or after a claim.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  'RICS-regulated surveyor, named on every report',
                  'BCIS cost data — the same index used by loss adjusters',
                  'Accepted by all major UK block insurers at renewal',
                  'Formatted for First-tier Tribunal submission if required',
                  'Retained digitally — retrievable for any future challenge',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-4 border-b border-white/8 pb-6">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#c47c1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="font-body text-white/80 text-base leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#f4f5f7] py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#111318]/8">
              {[
                { stat: '80%+', label: 'of UK residential blocks are estimated to be underinsured' },
                { stat: '£425bn', label: 'estimated underinsurance gap across the UK residential sector' },
                { stat: '48hrs', label: 'desktop assessment turnaround from instruction to signed report' },
              ].map(({ stat, label }) => (
                <div key={stat} className="bg-[#f4f5f7] px-8 py-12 text-center">
                  <p className="font-headline text-5xl md:text-6xl text-[#111318] mb-4">{stat}</p>
                  <p className="font-body text-sm text-[#111318]/60 leading-relaxed max-w-[180px] mx-auto">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                How It Works
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-[#111318] mb-16 max-w-2xl">
              Four steps from instruction to insurer-accepted report.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  n: '01',
                  heading: 'Instruction',
                  body: 'Submit a simple instruction form with the block address, current sum insured, and any floor plans or EPCs you hold. We confirm receipt and assign a named surveyor within two hours.',
                },
                {
                  n: '02',
                  heading: 'Assessment',
                  body: 'For desktop assessments, we use BCIS cost data, satellite measurement, and published construction indices to establish the current reinstatement cost. On-site inspections include a measured survey and condition review.',
                },
                {
                  n: '03',
                  heading: 'Report',
                  body: 'A signed RICS-regulated reinstatement cost assessment report is issued within 48 hours (desktop) or five working days (on-site). The report states the recommended sum insured and the methodology used to arrive at it.',
                },
                {
                  n: '04',
                  heading: 'Ongoing compliance',
                  body: 'We log the block against its three-year reassessment cycle and issue renewal reminders automatically. Portfolio clients receive a single schedule covering all blocks under management.',
                },
              ].map(({ n, heading, body }) => (
                <div key={n} className="flex gap-6 border border-[#111318]/8 p-8">
                  <div className="flex-shrink-0">
                    <span className="font-headline text-4xl text-[#c47c1e] leading-none">{n}</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl md:text-2xl text-[#111318] mb-3">{heading}</h3>
                    <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f4f5f7] py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                FAQ
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#111318] mb-14">
              Common questions from block managers.
            </h2>
            <div className="space-y-px">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group bg-white border border-[#111318]/8">
                  <summary className="flex items-start justify-between gap-6 px-8 py-6 cursor-pointer list-none">
                    <span className="font-body font-semibold text-[#111318] text-sm leading-relaxed">{q}</span>
                    <span className="flex-shrink-0 mt-0.5 text-[#c47c1e] font-body text-lg leading-none group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-8 pb-6">
                    <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#111318] py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
                Get Protected
              </span>
              <div className="h-px w-8 bg-[#c47c1e]" />
            </div>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-2xl mx-auto">
              Commission an assessment before the claim, not after.
            </h2>
            <p className="font-body text-base text-white/65 leading-relaxed max-w-xl mx-auto mb-12">
              RICS-regulated reinstatement cost assessments for block managers. Desktop turnaround in 48 hours. Accepted by all major UK block insurers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-shine font-body font-semibold text-white px-10 py-4 text-sm uppercase tracking-wider text-center transition-transform active:scale-[0.97]"
              >
                Request an Assessment
              </Link>
              <Link
                href="/services"
                className="border border-white/25 font-body font-semibold text-white px-10 py-4 text-sm uppercase tracking-wider text-center hover:border-[#c47c1e] hover:text-[#c47c1e] transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
