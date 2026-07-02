'use client'
import { useSearchParams } from 'next/navigation'

const SERVICE_MAP = {
  desktop: 'Desktop Reinstatement Cost Assessment',
  onsite: 'On-Site Survey',
  '3year': '3-Year Reinstatement Cost Assessment',
}

const inputCls = 'border border-white/[0.1] rounded-lg px-4 py-2.5 text-sm text-white/90 placeholder:text-white/25 focus:outline-none focus:border-[#7c3aed] focus:ring-2 transition-colors'
const inputStyle = { background: 'rgba(255,255,255,0.05)' }

export default function ContactFormInner({ heading }) {
  const params = useSearchParams()
  const preselected = SERVICE_MAP[params.get('service')] ?? ''

  return (
    <div>
      <div id="contact-form" className="mb-10 scroll-mt-20">
        <span className="badge badge-blue">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          {heading}
        </h2>
        <p className="text-white/40 text-sm">24-hour response on business days</p>
      </div>

      <form action="https://formspree.io/f/xkokvlpr" method="POST" className="space-y-6">
        <input type="hidden" name="_next" value="https://reinstatementcostassessment.org/thank-you" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input id="contact-name" name="name" required type="text" placeholder="John Smith"
              className={inputCls} style={inputStyle} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
              Email <span className="text-red-400">*</span>
            </label>
            <input id="contact-email" name="email" required type="email" placeholder="john@example.com"
              className={inputCls} style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-phone" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
              Phone <span className="text-red-400">*</span>
            </label>
            <input id="contact-phone" name="phone" required type="tel" placeholder="+44 7700 900000"
              className={inputCls} style={inputStyle} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-company" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
              Company <span className="text-red-400">*</span>
            </label>
            <input id="contact-company" name="company" required type="text" placeholder="London Estates Ltd"
              className={inputCls} style={inputStyle} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-property-type" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
              Property Type <span className="text-red-400">*</span>
            </label>
            <select id="contact-property-type" name="property_type" defaultValue="" required
              className={inputCls + ' appearance-none cursor-pointer'} style={inputStyle}>
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
            <label htmlFor="contact-num-properties" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
              No. of Properties <span className="text-red-400">*</span>
            </label>
            <input id="contact-num-properties" name="num_properties" required type="number" min="1" placeholder="1"
              className={inputCls} style={inputStyle} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-service" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
            Service Needed <span className="text-red-400">*</span>
          </label>
          <select id="contact-service" name="service" defaultValue={preselected} required
            className={inputCls + ' appearance-none cursor-pointer'} style={inputStyle}>
            <option value="" disabled>Select a service</option>
            <option>Desktop Reinstatement Cost Assessment</option>
            <option>3-Year Reinstatement Cost Assessment</option>
            <option>On-Site Survey</option>
            <option>Portfolio Assessment</option>
            <option>Not Sure</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-notes" className="text-xs font-medium text-white/35 uppercase tracking-[0.08em]">
            Notes <span className="text-red-400">*</span>
          </label>
          <textarea id="contact-notes" name="notes" required rows="4"
            placeholder="Briefly describe your property and requirements..."
            className={inputCls + ' resize-none'} style={inputStyle} />
        </div>

        <p className="text-xs text-white/25">All fields are required.</p>

        <button type="submit" className="btn-shine w-full justify-center !py-3 !text-sm">
          Request Your Assessment
        </button>
      </form>
    </div>
  )
}
