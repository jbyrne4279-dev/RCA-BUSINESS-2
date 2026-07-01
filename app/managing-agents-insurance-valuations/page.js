import Link from 'next/link'
import ContactSection from '../components/ContactSection'

export const metadata = {
  title: 'RICS Reinstatement Cost Assessment for Managing Agents | Rebuild Cost',
  description:
    'RICS reinstatement cost assessment for managing agents. Rebuild cost assessments — BCIS-indexed and insurer-accepted. Stay compliant and fully insured across your portfolio.',
  alternates: { canonical: '/managing-agents-insurance-valuations' },
  openGraph: {
    title: 'RICS Reinstatement Cost Assessment for Managing Agents | Rebuild Cost',
    description:
      'RICS reinstatement cost assessment for managing agents. Rebuild cost assessments — BCIS-indexed and insurer-accepted. Stay compliant and fully insured across your portfolio.',
    url: '/managing-agents-insurance-valuations',
  },
}

export default function ManagingAgentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#0f3d28] to-[#1A6B4A]">
        <div className="relative z-10 w-full flex items-center justify-center px-6 py-24 md:py-32">
          <div className="w-full max-w-3xl text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/60 mb-6">
              RICS Regulated &middot; Managing Agents
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-6 text-center">
              Insurance Valuations for Managing Agents.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-10 text-center">
              Stay compliant and protect managed properties. RICS reinstatement valuations your insurers will accept   fast, accurate, and fully documented.
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
              Problems we solve for managing agents.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'domain',
                title: 'Managing multiple properties with outdated valuations.',
                desc: 'Keeping accurate, current reinstatement figures across a managed portfolio is complex. Outdated figures create compliance gaps and expose landlords and managing agents to liability.',
              },
              {
                icon: 'trending_up',
                title: "Index linking doesn't account for local build cost inflation.",
                desc: 'Generic national indices miss regional variation in labour costs and material availability. A property in London or the South East can diverge sharply from a blanket index-linked figure.',
              },
              {
                icon: 'shield_question',
                title: 'Liability exposure if a property is underinsured at claim.',
                desc: 'If an underinsured property suffers a major loss, managing agents face serious questions about whether they fulfilled their duty of care in maintaining adequate insurance.',
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
              Our solution for managing agents.
            </h2>
          </div>
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=400&fit=crop&auto=format&q=80"
            alt="Professional reviewing documents at a desk"
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-10 sovereign-shadow"
          />
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              'Consolidated portfolio reports with per-property breakdowns',
              'RICS-regulated and BCIS-indexed   insurer accepted',
              'Named surveyor from instruction to delivery',
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
            Protect every property you manage.
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-center">
            RICS-regulated insurance valuations tailored for managing agents   consolidated reporting, insurer accepted, delivered fast.
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
