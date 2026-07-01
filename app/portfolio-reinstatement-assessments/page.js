import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Portfolio Reinstatement Cost Assessments | Multi-Property RCA UK',
  description:
    'RICS-regulated portfolio Reinstatement Cost Assessments across the UK. One instruction, every asset covered. Consolidated reporting for mixed-use and multi-property portfolios   desktop or on-site.',
  alternates: { canonical: '/portfolio-reinstatement-assessments' },
  openGraph: {
    title: 'Portfolio Reinstatement Cost Assessments | Multi-Property RCA UK',
    description:
      'RICS-regulated portfolio Reinstatement Cost Assessments across the UK. One instruction, every asset covered. Consolidated reporting for mixed-use and multi-property portfolios   desktop or on-site.',
    url: '/portfolio-reinstatement-assessments',
  },
}

export default function PortfolioReinstatementPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#111318]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
              RICS Regulated &middot; Portfolio Assessments
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 text-center">
              Reinstatement Cost Assessments for Property Portfolios.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              One instruction. Every asset covered. RICS-regulated portfolio RCAs with consolidated reporting   desktop or on-site across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact#contact-form"
                className="btn-shine text-white px-8 py-4 font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 border border-white/25 text-white px-8 py-4 font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <div className="px-6 max-w-5xl mx-auto mt-10">
        <img
          src="/rca-for-my-property-london-rebuild.png"
          alt="Aerial view of UK property and cityscape"
          className="w-full h-64 md:h-80 object-cover mb-10 sovereign-shadow"
        />
      </div>

      {/* Problems We Solve */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c47c1e] leading-tight text-center">
              Problems we solve for portfolio owners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'query_stats',
                title: 'Portfolio-wide underinsurance building up undetected.',
                desc: 'Across a large portfolio, small valuation shortfalls compound into significant underinsurance exposure   often unnoticed until a major claim reveals the gap.',
              },
              {
                icon: 'event_repeat',
                title: 'Renewing policies with stale per-property figures.',
                desc: 'Without regular RICS assessments, portfolios renew on figures that may be years out of date   creating avoidable risk and potential disputes with insurers at claim.',
              },
              {
                icon: 'category',
                title: 'No consolidated view across mixed-use assets.',
                desc: 'Portfolios combining residential, commercial, and industrial assets rarely have a unified, accurate picture of rebuild exposure. Managing risk requires that consolidated view.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="liquid-glass p-7 border border-[#c47c1e]/20 hover:border-[#c47c1e]/50 hover:shadow-[0_0_20px_2px_rgba(26,107,74,0.10)] transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 btn-shine rounded-full flex items-center justify-center mb-4 mx-auto">
                  
                </div>
                <h3 className="font-bold text-[#c47c1e] text-base mb-2 text-center">{title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e]">
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#c47c1e] leading-tight text-center">
              Our solution for property portfolios.
            </h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'National coverage   desktop and on-site across the UK',
              'Consolidated report with individual asset schedules',
              'Competitive portfolio pricing   contact us for a quote',
            ].map((point, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6 border border-[#c47c1e]/20 bg-zinc-50 hover:border-[#c47c1e]/40 transition-all duration-300"
              >
                <div className="w-8 h-8 btn-shine rounded-full flex items-center justify-center mx-auto">
                  
                </div>
                <p className="text-[#c47c1e] font-semibold leading-snug text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#111318] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center">
            One instruction. Every asset accurately valued.
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-center">
            Get a consolidated, RICS-regulated portfolio reinstatement cost assessment   nationwide coverage, competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact#contact-form"
              className="btn-shine text-white px-8 py-4 font-bold hover:opacity-90 active:scale-[0.97] transition-all text-center sovereign-shadow"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
