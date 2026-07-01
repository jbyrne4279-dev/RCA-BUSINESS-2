'use client'
import { useSearchParams } from 'next/navigation'

const SERVICE_MAP = {
  desktop: 'Desktop Reinstatement Cost Assessment',
  onsite: 'On-Site Survey',
  '3year': '3-Year Reinstatement Cost Assessment',
}

export default function ContactFormInner({ heading }) {
  const params = useSearchParams()
  const preselected = SERVICE_MAP[params.get('service')] ?? ''

  return (
    <div>
      <div id="contact-form" className="mb-12 text-center scroll-mt-20">
        <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-6">Get In Touch</p>
        <h2 className="font-headline font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
          {heading}
        </h2>
        <p className="text-[#6e6e73] text-sm uppercase tracking-widest">24-hour response on business days</p>
      </div>

      <form action="https://formspree.io/f/xkokvlpr" method="POST" className="max-w-2xl mx-auto space-y-8">
        <input type="hidden" name="_next" value="https://reinstatementcostassessment.org/thank-you" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-name" name="name" required type="text"
              placeholder="John Smith"
              className="bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base placeholder:text-[#6e6e73]/40 py-2.5 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-email" name="email" required type="email"
              placeholder="john@example.com"
              className="bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base placeholder:text-[#6e6e73]/40 py-2.5 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-phone" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
              Phone <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-phone" name="phone" required type="tel"
              placeholder="+44 7700 900000"
              className="bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base placeholder:text-[#6e6e73]/40 py-2.5 transition-colors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-company" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
              Company <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-company" name="company" required type="text"
              placeholder="London Estates Ltd"
              className="bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base placeholder:text-[#6e6e73]/40 py-2.5 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-property-type" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
              Property Type <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                id="contact-property-type" name="property_type" defaultValue="" required
                className="w-full bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base appearance-none cursor-pointer py-2.5 transition-colors"
              >
                <option value="" disabled>Select type</option>
                <option>Commercial</option>
                <option>Residential</option>
                <option>Industrial</option>
                <option>Listed Building</option>
                <option>Mixed-Use</option>
                <option>Other</option>
              </select>
              <span className="absolute right-0 top-2.5 text-[#6e6e73] pointer-events-none text-sm">▾</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-num-properties" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
              No. of Properties <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-num-properties" name="num_properties" required type="number" min="1"
              placeholder="1"
              className="bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base placeholder:text-[#6e6e73]/40 py-2.5 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-service" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
            Service Needed <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              id="contact-service" name="service" defaultValue={preselected} required
              className="w-full bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base appearance-none cursor-pointer py-2.5 transition-colors"
            >
              <option value="" disabled>Select a service</option>
              <option>Desktop Reinstatement Cost Assessment</option>
              <option>3-Year Reinstatement Cost Assessment</option>
              <option>On-Site Survey</option>
              <option>Portfolio Assessment</option>
              <option>Not Sure</option>
            </select>
            <span className="absolute right-0 top-2.5 text-[#6e6e73] pointer-events-none text-sm">▾</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-notes" className="text-[0.65rem] font-semibold text-[#6e6e73] uppercase tracking-[0.2em]">
            Notes <span className="text-red-400">*</span>
          </label>
          <textarea
            id="contact-notes" name="notes" required rows="4"
            placeholder="Briefly describe your property and requirements..."
            className="bg-transparent border-b-2 border-[#d2d2d7] focus:border-[#1d1d1f] outline-none text-[#1d1d1f] text-base placeholder:text-[#6e6e73]/40 py-2.5 resize-none transition-colors"
          />
        </div>

        <p className="text-[0.68rem] text-[#6e6e73]/50">All fields are required.</p>

        <div className="text-center">
          <button type="submit" className="btn-shine cursor-pointer">
            Request Your Assessment
          </button>
        </div>
      </form>
    </div>
  )
}
