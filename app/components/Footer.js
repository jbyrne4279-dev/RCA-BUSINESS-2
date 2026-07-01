import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#202124] text-[#9aa0a6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-1 space-y-4">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.png"
              alt="RCA Ltd"
              width={80}
              height={64}
              className="h-9 w-auto object-contain invert opacity-80"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              RICS-regulated reinstatement cost assessments for UK property professionals.
            </p>
            <Image
              src="/rics-logo.png"
              alt="Regulated by RICS"
              width={900}
              height={600}
              className="h-6 w-auto object-contain invert opacity-40"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-[#e8eaed]/50 uppercase tracking-[0.15em] mb-4">Services</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services#desktop-rca" className="hover:text-[#e8eaed] transition-colors">Desktop Assessment</Link></li>
              <li><Link href="/services#on-site-survey" className="hover:text-[#e8eaed] transition-colors">On-Site Survey</Link></li>
              <li><Link href="/services#three-year-protection" className="hover:text-[#e8eaed] transition-colors">3-Year Protection</Link></li>
              <li><Link href="/portfolio-reinstatement-assessments" className="hover:text-[#e8eaed] transition-colors">Portfolio Assessment</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#e8eaed]/50 uppercase tracking-[0.15em] mb-4">Who We Help</p>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/managing-agents-insurance-valuations" className="hover:text-[#e8eaed] transition-colors">Managing Agents</Link></li>
              <li><Link href="/blocks-of-flats" className="hover:text-[#e8eaed] transition-colors">Blocks of Flats</Link></li>
              <li><Link href="/freeholders-leaseholders" className="hover:text-[#e8eaed] transition-colors">Freeholders & Leaseholders</Link></li>
              <li><Link href="/listed-buildings" className="hover:text-[#e8eaed] transition-colors">Listed Buildings</Link></li>
              <li><Link href="/resources" className="hover:text-[#e8eaed] transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#e8eaed]/50 uppercase tracking-[0.15em] mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="tel:+442031788099" className="hover:text-[#e8eaed] transition-colors">020 3178 8099</a></li>
              <li><a href="mailto:info@rca-ltd.com" className="hover:text-[#e8eaed] transition-colors">info@rca-ltd.com</a></li>
              <li className="leading-snug text-[#9aa0a6]">17 Hanover Square<br />London W1S 1BN</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/[0.1] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-[#9aa0a6]/60">
          <p>&copy; 2025 Reinstatement Cost Assessment Ltd &middot; Company No. 17101918</p>
          <p>RICS Regulated Firm &middot; Part of RiskSTOP Group</p>
        </div>

      </div>
    </footer>
  )
}
