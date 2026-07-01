import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-zinc-200" style={{
      background: `
        repeating-linear-gradient(120deg, transparent, transparent 18px, rgba(0,0,0,0.07) 18px, rgba(0,0,0,0.07) 19px),
        repeating-linear-gradient(60deg, transparent, transparent 18px, rgba(255,255,255,0.03) 18px, rgba(255,255,255,0.03) 19px),
        linear-gradient(155deg, #052e1c 0%, #064e35 30%, #0a6641 55%, #075c39 75%, #041f15 100%)
      `
    }}>
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">

          {/* Brand column */}
          <div className="md:col-span-4 space-y-5">
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-[0.18em] mb-1">Reinstatement Cost Assessment LTD</p>
              <p className="text-emerald-500 text-xs font-semibold tracking-wide">RICS Regulated Firm · Est. UK</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              The benchmark for building reinstatement valuations across the UK insurance market. Every assessment RICS-regulated, every report broker-ready.
            </p>
            <div className="pt-1 space-y-1">
              <p className="text-xs text-zinc-500">Reinstatement Cost Assessment Limited</p>
              <p className="text-xs font-semibold text-emerald-500">Company No. 17101918</p>
            </div>
            <div className="pt-2">
              <p className="text-xs text-zinc-600 mb-3 uppercase tracking-widest font-medium">Regulated by</p>
              <Image
                src="/rics-logo.png"
                alt="Regulated by RICS"
                width={900}
                height={600}
                className="h-10 w-auto object-contain invert opacity-80"
                priority={false}
              />
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3 md:col-start-6">
            <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Services</h5>
            <ul className="space-y-3.5 text-sm">
              <li><Link className="hover:text-emerald-400 transition-colors" href="/services#desktop-rca">Desktop Assessment</Link></li>
              <li><Link className="hover:text-emerald-400 transition-colors" href="/services#on-site-survey">On-Site Survey</Link></li>
              <li><Link className="hover:text-emerald-400 transition-colors" href="/services#three-year-protection">3-Year Protection Plan</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Company</h5>
            <ul className="space-y-3.5 text-sm">
              <li><Link className="hover:text-emerald-400 transition-colors" href="/">Home</Link></li>
              <li><Link className="hover:text-emerald-400 transition-colors" href="/resources">Resources</Link></li>
              <li><Link className="hover:text-emerald-400 transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h5 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 shrink-0 mt-px" style={{ fontSize: '0.95rem' }}>call</span>
                <a href="tel:+442031788099" className="hover:text-emerald-400 transition-colors leading-snug">020 3178 8099</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 shrink-0 mt-px" style={{ fontSize: '0.95rem' }}>location_on</span>
                <span className="leading-snug">17 Hanover Square,<br />London W1S 1BN</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-emerald-500 shrink-0 mt-px" style={{ fontSize: '0.95rem' }}>mail</span>
                <a href="mailto:info@rca-ltd.com" className="hover:text-emerald-400 transition-colors">info@rca-ltd.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-emerald-200/50">
          <p>© 2025 ReinstatementCostAssessment.org. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            RICS Regulated · Part of RiskSTOP Group
          </p>
        </div>

      </div>
    </footer>
  )
}
