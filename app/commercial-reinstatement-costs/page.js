import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'Commercial Rebuild Cost Assessment | RICS Reinstatement Cost Assessment',
  description:
    'Accurate commercial rebuild cost assessment for offices, warehouses and retail. RICS reinstatement cost assessment — BCIS-indexed, broker-ready, delivered in 5 days.',
  alternates: { canonical: '/commercial-reinstatement-costs' },
  openGraph: {
    title: 'Commercial Rebuild Cost Assessment | RICS Reinstatement Cost Assessment',
    description:
      'Accurate commercial rebuild cost assessment for offices, warehouses and retail. RICS reinstatement cost assessment — BCIS-indexed, broker-ready, delivered in 5 days.',
    url: '/commercial-reinstatement-costs',
  },
}

export default function CommercialReinstatementPage() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0f3d28] to-[#1A6B4A]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
              RICS Regulated &middot; Commercial Property
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 text-center">
              Commercial Reinstatement Cost Assessments.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              Accurate rebuild costs for offices, warehouses, retail, and mixed-use. RICS-regulated assessments your broker will accept   delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact#contact-form"
                className="btn-shine text-white px-8 py-4 rounded-full font-bold active:scale-[0.97] transition-transform sovereign-shadow text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 border border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight text-center">
              Problems we solve for commercial property owners.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'construction',
                title: 'Commercial rebuild costs rising faster than index linking keeps up.',
                desc: 'Material costs, labour shortages, and supply chain pressures have driven commercial rebuild costs well above what standard index linking captures   widening the underinsurance gap year on year.',
              },
              {
                icon: 'calculate',
                title: 'Generic online calculators miss specialist fitout and M&E costs.',
                desc: 'Commercial buildings contain significant mechanical, electrical, and specialist fitout costs that generic calculators ignore entirely   leading to materially understated reinstatement figures.',
              },
              {
                icon: 'verified_user',
                title: 'Insurers and lenders requiring up-to-date RICS assessments.',
                desc: 'Increasingly, commercial insurers and lenders require a verifiable RICS-regulated reinstatement figure before agreeing terms   a generic estimate or calculator output is no longer sufficient.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="liquid-glass rounded-2xl p-7 border border-[#1A6B4A]/20 hover:border-[#1A6B4A]/50 hover:shadow-[0_0_20px_2px_rgba(26,107,74,0.10)] transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-10 h-10 btn-shine rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '1.1rem' }}>
                    {icon}
                  </span>
                </div>
                <h3 className="font-bold text-[#0f3d28] text-base mb-2 text-center">{title}</h3>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A6B4A]">
              How We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f3d28] leading-tight text-center">
              Our solution for commercial properties.
            </h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop&auto=format&q=80"
            alt="Commercial office building exterior"
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 sovereign-shadow"
          />
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Specialist commercial surveyors   all asset classes',
              'Fitout, M&E, and external works included',
              'RICS-regulated report ready in 5 days',
            ].map((point, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#1A6B4A]/20 bg-zinc-50 hover:border-[#1A6B4A]/40 transition-all duration-300"
              >
                <div className="w-8 h-8 btn-shine rounded-full flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: '0.95rem', fontVariationSettings: "'FILL' 1" }}>
                    check
                  </span>
                </div>
                <p className="text-[#0f3d28] font-semibold leading-snug text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#0f3d28] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center">
            Get an accurate commercial reinstatement figure today.
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-center">
            RICS-regulated assessments for offices, warehouses, retail, and mixed-use   covering fitout, M&E, and external works. Broker-ready in 5 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact#contact-form"
              className="bg-white text-[#1A6B4A] px-8 py-4 rounded-full font-bold hover:bg-zinc-100 active:scale-[0.97] transition-all text-center sovereign-shadow"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 active:scale-[0.97] transition-all text-center"
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
