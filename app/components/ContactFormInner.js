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
    <div className="liquid-glass p-8 md:p-12 border border-[#c47c1e]/20 shadow-[0_0_40px_4px_rgba(196,163,90,0.06)]">
      <div id="contact-form" className="mb-12 space-y-5 scroll-mt-28 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-6 bg-[#c47c1e]" />
          <span className="text-[#c47c1e] text-xs font-medium uppercase tracking-[0.25em]">Get In Touch</span>
          <div className="h-px w-6 bg-[#c47c1e]" />
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] text-primary">{heading}</h2>
        <div className="inline-flex items-center gap-2 bg-[#c47c1e]/8 px-3 py-1.5 border border-[#c47c1e]/20">
          <span className="material-symbols-outlined text-[#c47c1e]" style={{ fontSize: '0.8rem' }}>bolt</span>
          <span className="text-[#c47c1e] font-semibold text-[0.65rem] tracking-widest uppercase">24 Hour Response Time</span>
        </div>
      </div>

      <form action="https://formspree.io/f/xkokvlpr" method="POST" className="space-y-10">
        <input type="hidden" name="_next" value="https://reinstatementcostassessment.org/thank-you" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              required
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
              placeholder="John Smith"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              required
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
              placeholder="john@example.com"
              type="email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-phone" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">Phone Number <span className="text-red-400">*</span></label>
            <input
              id="contact-phone"
              name="phone"
              required
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
              placeholder="+44 7700 900000"
              type="tel"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-company" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">Company <span className="text-red-400">*</span></label>
            <input
              id="contact-company"
              name="company"
              required
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
              placeholder="London Estates Ltd"
              type="text"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-property-type" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">Property Type <span className="text-red-400">*</span></label>
            <div className="relative">
              <select
                id="contact-property-type"
                name="property_type"
                defaultValue=""
                required
                className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base appearance-none cursor-pointer py-2 transition-all"
              >
                <option value="" disabled>Select type</option>
                <option>Commercial</option>
                <option>Residential</option>
                <option>Industrial</option>
                <option>Listed Building</option>
                <option>Mixed-Use</option>
                <option>Other</option>
              </select>
              <span className="material-symbols-outlined text-[#c47c1e] absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-num-properties" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">No. of Properties <span className="text-red-400">*</span></label>
            <input
              id="contact-num-properties"
              name="num_properties"
              required
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all"
              placeholder="1"
              type="number"
              min="1"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-service" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">Service Needed <span className="text-red-400">*</span></label>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              defaultValue={preselected}
              required
              className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base appearance-none cursor-pointer py-2 transition-all"
            >
              <option value="" disabled>Select a service</option>
              <option>Desktop Reinstatement Cost Assessment</option>
              <option>3-Year Reinstatement Cost Assessment</option>
              <option>On-Site Survey</option>
              <option>Portfolio Assessment</option>
              <option>Not Sure</option>
            </select>
            <span className="material-symbols-outlined text-[#c47c1e] absolute right-0 top-1.5 pointer-events-none" style={{ fontSize: '1rem' }}>expand_more</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-notes" className="text-[10px] font-bold text-[#c47c1e] uppercase tracking-widest">Notes <span className="text-red-400">*</span></label>
          <textarea
            id="contact-notes"
            name="notes"
            required
            className="w-full bg-transparent border-b-2 border-outline-variant focus:border-[#c47c1e] outline-none text-primary text-base placeholder:text-secondary/30 py-2 transition-all resize-none"
            placeholder="Briefly describe your property and requirements..."
            rows="4"
          />
        </div>

        <p className="text-[10px] text-secondary/50 -mt-4">All fields are required.</p>

        <div>
          <button className="btn-shine w-full text-white py-4 rounded-full font-bold text-base active:scale-[0.97] transition-transform sovereign-shadow cursor-pointer">
            Request Your Reinstatement Cost Assessment
          </button>
        </div>
      </form>
    </div>
  )
}
