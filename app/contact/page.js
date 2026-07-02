import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Contact Cavendish & Rowe | Instruct a Reinstatement Cost Assessment',
  description: 'Contact Cavendish & Rowe to instruct a RICS-regulated assessment. 24-hour response. 17 Hanover Square, London.',
  alternates: { canonical: '/contact' },
}

const faqItems = [
  { question: 'How quickly will you respond?', answer: 'All enquiries receive a response within 24 hours on business days. For urgent instructions, telephone us directly.' },
  { question: 'What information should I have ready?', answer: 'Property address, approximate floor area, construction type, number of storeys, and whether you require a desktop or on-site assessment.' },
  { question: 'Do you provide quotes before instructing?', answer: 'Yes. We provide a written fee estimate before any work begins. No commitment required.' },
  { question: 'Can I instruct for multiple properties at once?', answer: 'Yes. Provide details of each property and we will return a consolidated quote for the whole portfolio.' },
]

export default function ContactPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="hero-bg py-14 md:py-20 px-6 md:px-10 border-b border-[#dadce0]/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-blue">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#202124] leading-[1.05] mb-6">
              Let&rsquo;s get your assessment underway.
            </h1>
            <p className="text-[#5f6368] text-lg leading-relaxed mb-8">
              24-hour response on all enquiries. Speak to a specialist surveyor directly on <a href="tel:+442031788099" className="text-[#1a73e8] font-semibold hover:underline">020 3178 8099</a> or complete the form below.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { label: 'Telephone', value: '020 3178 8099', href: 'tel:+442031788099' },
                { label: 'Email', value: 'info@rca-ltd.com', href: 'mailto:info@rca-ltd.com' },
                { label: 'Address', value: '17 Hanover Square, London W1S 1BN', href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="flex gap-3 items-baseline">
                  <p className="text-xs font-semibold text-[#9aa0a6] uppercase tracking-[0.15em] w-20 shrink-0">{label}</p>
                  {href
                    ? <a href={href} className="text-[#202124] font-semibold hover:text-[#1a73e8] transition-colors">{value}</a>
                    : <p className="text-[#202124] font-semibold">{value}</p>
                  }
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact-form" className="btn-shine">Send an Enquiry</a>
              <a href="/services" className="btn-ghost">Our Services</a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[500px]" style={{boxShadow:'0 24px 64px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.1)'}}>
            <Image
              src="/AdobeStock_1956380728.jpeg"
              alt="Cavendish and Rowe reinstatement cost assessment surveyors"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#202124]/55 via-[#202124]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white/95 text-sm font-medium leading-snug">All enquiries receive a response within 24 hours on business days.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection heading="Send us your instruction." />
      <FaqSection description="Common questions about instructing Cavendish & Rowe." items={faqItems} />
    </main>
  )
}
