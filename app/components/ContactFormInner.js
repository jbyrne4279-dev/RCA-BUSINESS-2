'use client'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { useRef } from 'react'

const SERVICE_MAP = {
  desktop: 'Desktop Reinstatement Cost Assessment',
  onsite: 'On-Site Survey',
  '3year': '3-Year Reinstatement Cost Assessment',
}

const ADS_CONVERSION = 'AW-16853906784/dC7ICInWv80cEODqyOQ-'

export default function ContactFormInner({ heading }) {
  const params = useSearchParams()
  const preselected = SERVICE_MAP[params.get('service')] ?? ''
  const formRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()

    function doSubmit() {
      formRef.current?.submit()
    }

    if (typeof window.gtag === 'function') {
      // Fire conversion immediately on submit while gclid cookies are still in scope
      window.gtag('event', 'conversion', {
        send_to: ADS_CONVERSION,
        event_callback: doSubmit,
      })
      // Fallback: submit anyway if the callback never fires within 1s
      setTimeout(doSubmit, 1000)
    } else {
      doSubmit()
    }
  }

  return (
    <div>
      <div id="contact-form" className="mb-10 scroll-mt-20">
        <span className="badge badge-blue">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b3e] leading-tight mb-3">
          {heading}
        </h2>
        <p className="text-[#64748b] text-sm leading-relaxed max-w-lg">
          Speak directly with a RICS-regulated reinstatement cost assessment surveyor. We provide BCIS-indexed rebuild cost assessments for residential blocks, commercial property and listed buildings, accepted by all UK insurers. Written fee estimate within 24 hours, no contract required.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} action="https://formspree.io/f/mykqolzj" method="POST" className="space-y-6">
        <input type="hidden" name="_next" value="https://stearlingreinstatement.com/thank-you" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name" name="name" required type="text"
              placeholder="John Smith"
              className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email" name="email" required type="email"
              placeholder="john@example.com"
              className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-phone" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-phone" name="phone" required type="tel"
              placeholder="+44 7700 900000"
              className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-company" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-company" name="company" required type="text"
              placeholder="London Estates Ltd"
              className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-property-type" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
              Property Type <span className="text-red-500">*</span>
            </label>
            <select
              id="contact-property-type" name="property_type" defaultValue="" required
              className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>Select type</option>
              <option>Commercial</option>
              <option>Residential</option>
              <option>Industrial</option>
              <option>Listed Building</option>
              <option>Mixed-Use</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-num-properties" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
              No. of Properties <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-num-properties" name="num_properties" required type="number" min="1"
              placeholder="1"
              className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-service" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-service" name="service" defaultValue={preselected} required
            className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled>Select a service</option>
            <option>Desktop Reinstatement Cost Assessment</option>
            <option>3-Year Reinstatement Cost Assessment</option>
            <option>On-Site Survey</option>
            <option>Portfolio Assessment</option>
            <option>Not Sure</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-notes" className="text-xs font-medium text-[#64748b] uppercase tracking-[0.08em]">
            Notes <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-notes" name="notes" required rows="4"
            placeholder="Briefly describe your property and requirements..."
            className="bg-white border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#0d1b3e] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#0057FF] focus:ring-2 focus:ring-[#0057FF]/20 transition-colors resize-none"
          />
        </div>

        <p className="text-xs text-[#94a3b8]">All fields are required.</p>

        <button type="submit" className="btn-shine w-full justify-center !py-3 !text-sm">
          Request Your Assessment
        </button>

        <div className="flex items-center gap-3 pt-4 border-t border-[#e2e8f0] mt-2">
          <Image src="/rics-logo.png" alt="RICS Regulated" width={64} height={32} className="object-contain" />
          <p className="text-xs text-[#94a3b8] leading-snug">RICS-regulated assessments. Every instruction supervised by a registered member.</p>
        </div>
      </form>
    </div>
  )
}

