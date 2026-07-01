import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Contact RCA Ltd | Instruct a Reinstatement Cost Assessment',
  description: 'Contact Reinstatement Cost Assessment Ltd to instruct a RICS-regulated assessment. 24-hour response. 17 Hanover Square, London.',
  alternates: { canonical: '/contact' },
}

const faqItems = [
  { question: 'How quickly will you respond?', answer: 'We aim to respond to all enquiries within 24 hours on business days. For urgent instructions, call us directly.' },
  { question: 'What information should I have ready?', answer: 'Property address, approximate floor area, construction type, number of storeys, and whether you require a desktop or on-site assessment.' },
  { question: 'Do you provide quotes before instructing?', answer: 'Yes. We provide a written fee estimate for all instructions before any work begins. No obligation.' },
  { question: 'Can I instruct for multiple properties at once?', answer: 'Yes. Provide details of each property and we will provide a consolidated quote for the whole portfolio.' },
]

export default function ContactPage() {
  return (
    <main>

      {/* HEADER */}
      <section className="bg-[#1d1d1f] pt-20 pb-28 px-6 md:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">Get In Touch</p>
            <h1 className="font-headline font-semibold text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Let&rsquo;s get your<br />assessment underway.
            </h1>
          </div>
          <div className="space-y-8">
            {[
              { label: 'Telephone', value: '020 3178 8099', href: 'tel:+442031788099' },
              { label: 'Email', value: 'info@rca-ltd.com', href: 'mailto:info@rca-ltd.com' },
              { label: 'Address', value: '17 Hanover Square, London W1S 1BN', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="border-t border-white/[0.08] pt-6">
                <p className="text-[0.65rem] font-semibold text-white/30 uppercase tracking-[0.2em] mb-2">{label}</p>
                {href
                  ? <a href={href} className="text-white text-lg font-semibold hover:text-[#c47c1e] transition-colors">{value}</a>
                  : <p className="text-white text-lg font-semibold">{value}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection heading="Send us your instruction." />
      <FaqSection description="Common questions about instructing RCA Ltd." items={faqItems} />
    </main>
  )
}
