import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-zinc-300" style={{
      background: 'linear-gradient(160deg, #07112a 0%, #0e1b36 40%, #0a1628 70%, #060e1e 100%)'
    }}>
      {/* Top accent rule */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #c4a35a 35%, #c4a35a 65%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-14">

          {/* Brand column */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <p className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-1">Reinstatement Cost Assessment Ltd</p>
              <p className="text-[#c4a35a] text-xs tracking-wide">RICS Regulated Firm &middot; 17 Hanover Square, London</p>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
              The benchmark for building reinstatement valuations across the UK insurance market. Every assessment RICS-regulated, every report broker-ready.
            </p>
            <div className="space-y-0.5">
              <p className="text-xs text-zinc-500">Reinstatement Cost Assessment Limited</p>
              <p className="text-xs font-medium text-[#c4a35a]">Company No. 17101918</p>
            </div>
            <div className="pt-1">
              <p className="text-xs text-zinc-600 mb-3 uppercase tracking-widest font-medium">Regulated by</p>
              <Image
                src="/rics-logo.png"
                alt="Regulated by RICS"
                width={900}
                height={600}
                className="h-9 w-auto object-contain invert opacity-70"
                priority={false}
              />
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3 md:col-start-6">
            <h5 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-5">Services</h5>
            <ul className="space-y-3.5 text-sm">
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/services#desktop-rca">Desktop Assessment</Link></li>
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/services#on-site-survey">On-Site Survey</Link></li>
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/services#three-year-protection">3-Year Protection Plan</Link></li>
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/managing-agents-insurance-valuations">Managing Agents</Link></li>
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/block-managers-reinstatement-cost-assessments">Block Managers</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h5 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-5">Company</h5>
            <ul className="space-y-3.5 text-sm">
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/">Home</Link></li>
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/resources">Resources</Link></li>
              <li><Link className="text-zinc-400 hover:text-[#c4a35a] transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h5 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-5">Contact</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c4a35a] shrink-0 mt-px" style={{ fontSize: '0.9rem' }}>call</span>
                <a href="tel:+442031788099" className="text-zinc-400 hover:text-[#c4a35a] transition-colors leading-snug">020 3178 8099</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c4a35a] shrink-0 mt-px" style={{ fontSize: '0.9rem' }}>location_on</span>
                <span className="text-zinc-400 leading-snug">17 Hanover Square,<br />London W1S 1BN</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#c4a35a] shrink-0 mt-px" style={{ fontSize: '0.9rem' }}>mail</span>
                <a href="mailto:info@rca-ltd.com" className="text-zinc-400 hover:text-[#c4a35a] transition-colors">info@rca-ltd.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; 2025 ReinstatementCostAssessment.org. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#c4a35a] inline-block"></span>
            RICS Regulated &middot; Part of RiskSTOP Group
          </p>
        </div>

      </div>
    </footer>
  )
}
