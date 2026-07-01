import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Portfolio Reinstatement Cost Assessments | Multi-Property RCA UK',
  description:
    'RICS-regulated portfolio Reinstatement Cost Assessments across the UK. One instruction, every asset covered. Consolidated reporting for mixed-use and multi-property portfolios — desktop or on-site.',
  alternates: { canonical: '/portfolio-reinstatement-assessments' },
  openGraph: {
    title: 'Portfolio Reinstatement Cost Assessments | Multi-Property RCA UK',
    description:
      'RICS-regulated portfolio Reinstatement Cost Assessments across the UK. One instruction, every asset covered. Consolidated reporting for mixed-use and multi-property portfolios — desktop or on-site.',
    url: '/portfolio-reinstatement-assessments',
  },
}

const faqs = [
  {
    q: 'What is the minimum portfolio size you assess?',
    a: 'We work with portfolios from five properties upward. Below that threshold our standard single-property RCA service is more appropriate.',
  },
  {
    q: 'How quickly can a full portfolio be turned around?',
    a: 'Desktop assessments are typically delivered within 48 hours per property. We batch and schedule portfolio instructions so you receive a consolidated report within an agreed programme.',
  },
  {
    q: 'Are your assessors RICS-regulated?',
    a: 'Yes. All assessments are carried out by RICS-regulated surveyors and reference current BCIS rebuild cost data, satisfying the requirements of most standard-form leases.',
  },
  {
    q: 'Can you update figures annually without a full re-inspection?',
    a: 'Yes. We offer BCIS-linked index updates each year, so your sums insured remain current between full assessments without incurring the full cost of a new instruction.',
  },
  {
    q: 'Do you cover mixed-use portfolios?',
    a: 'Yes. We assess residential blocks, commercial units, mixed-use assets, and industrial properties within the same consolidated instruction.',
  },
  {
    q: 'What discount applies for bulk instructions?',
    a: 'Portfolio pricing depends on asset count, mix, and geographic spread. Contact us for a tailored quote — portfolios of ten or more properties typically attract meaningful fee reductions.',
  },
]

export default function PortfolioReinstatementPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#111318] text-white py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">
              Portfolio RCA Service
            </span>
          </div>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white mb-8 max-w-3xl">
            One instruction. Every property covered.
          </h1>
          <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-10">
            RICS-regulated Reinstatement Cost Assessments across an entire portfolio under a single instruction — consolidated reporting, standardised formats, and annual BCIS-linked index updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-shine font-body font-semibold px-8 py-4 text-white text-sm uppercase tracking-widest text-center hover-lift"
            >
              Request Portfolio Pricing
            </Link>
            <Link
              href="/services"
              className="border border-white/25 font-body font-semibold px-8 py-4 text-white text-sm uppercase tracking-widest text-center hover:border-[#c47c1e] hover:text-[#c47c1e] transition-colors"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#c47c1e] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { stat: '80%+', label: 'of UK blocks underinsured' },
            { stat: '£425bn', label: 'estimated underinsurance gap' },
            { stat: '48hr', label: 'desktop turnaround' },
            { stat: 'RICS', label: 'regulated — every assessment' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="font-headline text-4xl font-bold leading-none mb-1">{stat}</p>
              <p className="font-body text-sm text-white/80 uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Portfolio Problem */}
      <section className="py-24 px-6 bg-[#f4f5f7]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e]">
              The Portfolio Problem
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight mb-6 max-w-2xl">
            Inconsistent valuations create patchwork liability across your entire book.
          </h2>
          <p className="font-body text-base text-[#111318]/70 leading-relaxed max-w-2xl mb-14">
            Managing agents and freeholders responsible for multiple blocks face a compounding risk: each property that lacks a current RICS-regulated assessment is a separate liability gap. One missed renewal on one asset can mean total underinsurance at claim — and the shortfall lands with whoever ordered the insurance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                heading: 'Stale figures across a growing estate',
                body: 'Build costs have risen materially over the past three years. A valuation figure that was adequate at instruction may now carry a six-figure shortfall. Across a portfolio of twenty blocks that exposure is structural.',
              },
              {
                heading: 'No consolidated view of rebuild exposure',
                body: 'Without a single unified report, there is no mechanism to identify which assets are most exposed or to prioritise re-inspection. Risk accumulates in the blind spots.',
              },
              {
                heading: 'Mixed-use complexity increases the margin for error',
                body: 'Portfolios combining residential blocks, commercial ground floors, and industrial units each carry different rebuild cost profiles. A single per-square-foot assumption applied across the estate is not defensible.',
              },
            ].map(({ heading, body }) => (
              <div
                key={heading}
                className="bg-white border border-[#111318]/8 p-8 hover-lift card-shadow"
              >
                <div className="h-px w-8 bg-[#c47c1e] mb-5" />
                <h3 className="font-headline text-xl text-[#111318] mb-3 leading-snug">{heading}</h3>
                <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Portfolio Service */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e]">
              Our Service
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight mb-6 max-w-2xl">
            A single instruction that covers every asset in your portfolio.
          </h2>
          <p className="font-body text-base text-[#111318]/70 leading-relaxed max-w-2xl mb-14">
            We manage the full process — from scoping and scheduling through to delivery — so your team interacts with a single point of contact regardless of portfolio size or geographic spread.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Bulk instruction discounts',
                desc: 'Portfolio-scale instructions attract preferential pricing. The more assets included, the greater the per-property saving relative to individual commissions.',
              },
              {
                title: 'Single point of contact',
                desc: 'One surveyor relationship manages your entire portfolio — scheduling, queries, and delivery — rather than separate instructions per block.',
              },
              {
                title: 'Standardised reports for each property',
                desc: 'Every asset receives its own RICS-compliant assessment report in a consistent format, suitable for insurers, brokers, and leaseholder disclosure.',
              },
              {
                title: 'Annual BCIS-linked index updates',
                desc: 'Between full reassessment cycles, we update sums insured using current BCIS build cost indices so your portfolio does not drift into underinsurance.',
              },
              {
                title: 'Desktop and on-site coverage',
                desc: 'Most assessments complete at desktop within 48 hours. Where a physical inspection is required — new acquisitions, complex conversions — we attend nationwide.',
              },
              {
                title: 'Digital delivery and audit trail',
                desc: 'All reports are delivered digitally with a clear audit trail, giving managing agents and RTM companies documented evidence of due diligence.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="flex gap-5 items-start border border-[#111318]/8 p-7 bg-[#f4f5f7]"
              >
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#c47c1e" />
                    <path d="M6 10.5L8.5 13L14 7.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-headline text-lg text-[#111318] mb-1 leading-snug">{title}</h3>
                  <p className="font-body text-sm text-[#111318]/65 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 px-6 bg-[#111318] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e]">
              Who We Work With
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-white leading-tight mb-6 max-w-2xl">
            Built for organisations with multiple assets under management.
          </h2>
          <p className="font-body text-base text-white/65 leading-relaxed max-w-2xl mb-14">
            Our portfolio service is designed for any organisation where lease covenants or statutory obligations require insuring multiple blocks to full reinstatement cost and where the liability for that obligation rests with a single management entity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                label: 'Housing Associations',
                desc: 'Social landlords managing large residential estates under lease or licence arrangements.',
              },
              {
                label: 'Private Landlords (5+ properties)',
                desc: 'Individual freeholders or family offices with growing residential portfolios.',
              },
              {
                label: 'Private Equity & Institutional Funds',
                desc: 'Funds acquiring residential blocks as investment assets requiring accurate rebuild valuations.',
              },
              {
                label: 'Local Authorities',
                desc: 'Councils and public bodies managing leaseholder blocks under Right to Buy and other structures.',
              },
            ].map(({ label, desc }) => (
              <div key={label} className="border border-white/10 p-7 hover:border-[#c47c1e]/60 transition-colors">
                <div className="h-px w-8 bg-[#c47c1e] mb-5" />
                <h3 className="font-headline text-xl text-white mb-3 leading-snug">{label}</h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 bg-[#f4f5f7]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e]">
              How It Works
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight mb-14 max-w-2xl">
            From instruction to consolidated report.
          </h2>
          <div className="space-y-0">
            {[
              {
                step: '01',
                heading: 'Portfolio scoping',
                body: 'You provide your asset list — addresses, floor areas, and any existing valuations. We review and scope the programme, flagging any assets that require on-site inspection rather than desktop assessment.',
              },
              {
                step: '02',
                heading: 'Fee proposal and instruction',
                body: 'We issue a fixed-fee portfolio proposal within 24 hours. On acceptance, you issue a single instruction and your dedicated contact manages everything from that point.',
              },
              {
                step: '03',
                heading: 'Assessment and quality review',
                body: 'Our RICS-regulated surveyors complete desktop assessments within 48 hours per property, referencing current BCIS data. All outputs pass internal QA before delivery.',
              },
              {
                step: '04',
                heading: 'Consolidated report delivery',
                body: 'You receive a master portfolio schedule showing each property, its assessed reinstatement cost, and any variance from the current sum insured — alongside individual compliant reports for each asset.',
              },
              {
                step: '05',
                heading: 'Annual index update service',
                body: 'We contact you ahead of each renewal with BCIS-updated figures for every property, maintaining accuracy between full reassessment cycles.',
              },
            ].map(({ step, heading, body }, i, arr) => (
              <div key={step} className="flex gap-8 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="step-circle w-12 h-12 flex items-center justify-center border-2 border-[#c47c1e] bg-white">
                    <span className="font-headline text-sm font-bold text-[#c47c1e]">{step}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-[#c47c1e]/25 my-1 min-h-[40px]" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-headline text-xl text-[#111318] mb-2 leading-snug">{heading}</h3>
                  <p className="font-body text-sm text-[#111318]/65 leading-relaxed max-w-xl">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e]">
              FAQ
            </span>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-[#111318] leading-tight mb-14 max-w-xl">
            Frequently asked questions.
          </h2>
          <div className="space-y-0 border-t border-[#111318]/10">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-[#111318]/10">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                  <span className="font-body font-semibold text-[#111318] text-base pr-4">{q}</span>
                  <span className="flex-shrink-0 text-[#c47c1e] group-open:rotate-45 transition-transform duration-200">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="font-body text-sm text-[#111318]/65 leading-relaxed pb-6 max-w-xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111318] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#c47c1e]" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#c47c1e]">
              Get Started
            </span>
            <div className="h-px w-8 bg-[#c47c1e]" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-white leading-tight mb-6">
            Remove the liability gap across your entire portfolio.
          </h2>
          <p className="font-body text-base text-white/65 leading-relaxed max-w-xl mx-auto mb-10">
            An RICS-regulated assessment on every asset is the only defensible position when a claim tests your sums insured. Contact us for a portfolio fee proposal — typically returned within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-shine font-body font-semibold px-8 py-4 text-white text-sm uppercase tracking-widest text-center hover-lift"
            >
              Request Portfolio Pricing
            </Link>
            <Link
              href="/services"
              className="border border-white/25 font-body font-semibold px-8 py-4 text-white text-sm uppercase tracking-widest text-center hover:border-[#c47c1e] hover:text-[#c47c1e] transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
