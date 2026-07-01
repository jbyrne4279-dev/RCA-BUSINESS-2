import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#202124]">

      {/* CTA bar */}
      <div className="border-t border-white/10 border-b border-white/10 py-8 px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-semibold text-white text-base mb-1">Need a reinstatement cost assessment?</p>
            <p className="text-[#9aa0a6] text-sm">We respond within 24 hours on business days.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="tel:+442031788099" className="text-sm text-white/70 hover:text-white transition-colors font-medium">020 3178 8099</a>
            <Link href="/contact#contact-form" className="btn-shine !text-sm !py-2 !px-5">Get a Quote</Link>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.png"
              alt="Cavendish &amp; Rowe"
              width={80}
              height={64}
              className="h-9 w-auto object-contain invert opacity-80"
            />
            <p className="text-[#9aa0a6] text-sm leading-relaxed max-w-xs">
              RICS-regulated reinstatement cost assessments for managing agents, freeholders, leaseholders and property professionals across the UK.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <Image
                src="/rics-logo.png"
                alt="Regulated by RICS"
                width={900}
                height={600}
                className="h-5 w-auto object-contain invert opacity-40"
              />
              <span className="text-[#9aa0a6]/50 text-xs">RICS Regulated Firm</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-4">Services</p>
            <ul className="space-y-3 text-sm text-[#9aa0a6]">
              <li><Link href="/services#desktop-rca" className="hover:text-[#7baaf7] transition-colors">Desktop Assessment</Link></li>
              <li><Link href="/services#on-site-survey" className="hover:text-[#7baaf7] transition-colors">On-Site Survey</Link></li>
              <li><Link href="/services#three-year-protection" className="hover:text-[#7baaf7] transition-colors">3-Year Protection</Link></li>
              <li><Link href="/portfolio-reinstatement-assessments" className="hover:text-[#7baaf7] transition-colors">Portfolio Assessment</Link></li>
            </ul>
          </div>

          {/* Who we help */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-4">Who We Help</p>
            <ul className="space-y-3 text-sm text-[#9aa0a6]">
              <li><Link href="/managing-agents-insurance-valuations" className="hover:text-[#7baaf7] transition-colors">Managing Agents</Link></li>
              <li><Link href="/blocks-of-flats" className="hover:text-[#7baaf7] transition-colors">Blocks of Flats</Link></li>
              <li><Link href="/freeholders-leaseholders" className="hover:text-[#7baaf7] transition-colors">Freeholders &amp; Leaseholders</Link></li>
              <li><Link href="/listed-buildings" className="hover:text-[#7baaf7] transition-colors">Listed Buildings</Link></li>
              <li><Link href="/resources" className="hover:text-[#7baaf7] transition-colors">Resources &amp; Guides</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-[#9aa0a6]">
              <li>
                <a href="tel:+442031788099" className="hover:text-[#7baaf7] transition-colors">020 3178 8099</a>
              </li>
              <li>
                <a href="mailto:info@rca-ltd.com" className="hover:text-[#7baaf7] transition-colors">info@rca-ltd.com</a>
              </li>
              <li className="leading-snug">
                17 Hanover Square<br />London W1S 1BN
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p className="font-medium tracking-wide">&copy; 2025 Cavendish &amp; Rowe. All rights reserved. Registered in England &amp; Wales &middot; Company No. 17101918</p>
          <p className="tracking-wide">RICS Regulated Firm &middot; All assessments carried out by or under the supervision of a RICS-registered member</p>
        </div>
      </div>

    </footer>
  )
}
