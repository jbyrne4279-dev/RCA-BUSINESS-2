import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-[#6e6e73]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          <div className="md:col-span-1 space-y-5">
            <Image
              src="/rca-logo-reinstatement-cost-assessment.png"
              alt="RCA Ltd"
              width={80}
              height={64}
              className="h-10 w-auto object-contain invert opacity-80"
            />
            <p className="text-sm text-[#6e6e73] leading-relaxed max-w-xs">
              RICS-regulated Reinstatement Cost Assessments for UK property professionals.
            </p>
            <div>
              <Image
                src="/rics-logo.png"
                alt="Regulated by RICS"
                width={900}
                height={600}
                className="h-7 w-auto object-contain invert opacity-40"
              />
            </div>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">Services</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#desktop-rca" className="hover:text-white transition-colors">Desktop Assessment</Link></li>
              <li><Link href="/services#on-site-survey" className="hover:text-white transition-colors">On-Site Survey</Link></li>
              <li><Link href="/services#three-year-protection" className="hover:text-white transition-colors">3-Year Protection</Link></li>
              <li><Link href="/portfolio-reinstatement-assessments" className="hover:text-white transition-colors">Portfolio Assessment</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">Who We Help</p>
            <ul className="space-y-3 text-sm">
              <li><Link href="/managing-agents-insurance-valuations" className="hover:text-white transition-colors">Managing Agents</Link></li>
              <li><Link href="/block-managers-reinstatement-cost-assessments" className="hover:text-white transition-colors">Block Managers</Link></li>
              <li><Link href="/commercial-reinstatement-costs" className="hover:text-white transition-colors">Commercial</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-[0.65rem] font-semibold text-white/30 uppercase tracking-[0.2em] mb-5">Contact</p>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:+442031788099" className="hover:text-white transition-colors">020 3178 8099</a></li>
              <li><a href="mailto:info@rca-ltd.com" className="hover:text-white transition-colors">info@rca-ltd.com</a></li>
              <li className="text-[#6e6e73] leading-snug">17 Hanover Square<br />London W1S 1BN</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6e6e73]/60">
          <p>&copy; 2025 Reinstatement Cost Assessment Ltd &middot; Company No. 17101918</p>
          <p>RICS Regulated Firm &middot; Part of RiskSTOP Group</p>
        </div>

      </div>
    </footer>
  )
}
