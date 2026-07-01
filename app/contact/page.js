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
      <section className="bg-[#202124] py-16 md:py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-flex items-center bg-[#1a73e8]/20 text-[#7baaf7] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let&rsquo;s get your assessment underway.
            </h1>
          </div>
          <div className="space-y-6 mt-4">
            {[
              { label: 'Telephone', value: '020 3178 8099', href: 'tel:+442031788099' },
              { label: 'Email', value: 'info@rca-ltd.com', href: 'mailto:info@rca-ltd.com' },
              { label: 'Address', value: '17 Hanover Square, London W1S 1BN', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="border-t border-white/10 pt-5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-[0.15em] mb-1.5">{label}</p>
                {href
                  ? <a href={href} className="text-white text-lg font-semibold hover:text-[#7baaf7] transition-colors">{value}</a>
                  : <p className="text-white text-lg font-semibold">{value}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Send us your instruction." />
      <FaqSection description="Common questions about instructing Cavendish & Rowe." items={faqItems} />
    </main>
  )
}
