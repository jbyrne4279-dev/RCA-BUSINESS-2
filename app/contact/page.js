import ContactSection from '../components/ContactSection'
import FaqSection from '../components/FaqSection'

export const metadata = {
  title: 'Contact RCA Ltd | Instruct a Reinstatement Cost Assessment',
  description: 'Contact Reinstatement Cost Assessment Ltd to instruct a RICS-regulated assessment. 24-hour response. 17 Hanover Square, London.',
  alternates: { canonical: '/contact' },
}

const faqItems = [
  { question: 'How quickly will you respond?', answer: 'We aim to respond to all enquiries within 24 hours on business days. For urgent instructions, please call us directly.' },
  { question: 'What information should I have ready?', answer: 'Property address, approximate floor area, construction type, number of storeys, and whether you require a desktop or on-site assessment. The more detail you provide, the faster we can confirm your instruction and provide a quote.' },
  { question: 'Do you provide quotes before instructing?', answer: 'Yes. We provide a written fee estimate for all instructions before any work begins. There is no obligation.' },
  { question: 'Can I instruct for multiple properties at once?', answer: 'Yes. Provide details of each property when you contact us and we will provide a consolidated quote for the whole portfolio.' },
]

export default function ContactPage() {
  return (
    <main>
      {/* HEADER */}
      <section className="bg-[#111318] py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Get In Touch</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <h1 className="font-headline text-5xl md:text-6xl font-semibold text-white leading-[1.05]">
              Let&rsquo;s get your<br />assessment underway.
            </h1>
            <div className="space-y-6">
              {[
                { label: 'Telephone', value: '020 3178 8099', href: 'tel:+442031788099' },
                { label: 'Email', value: 'info@rca-ltd.com', href: 'mailto:info@rca-ltd.com' },
                { label: 'Address', value: '17 Hanover Square, London W1S 1BN', href: null },
              ].map(({ label, value, href }) => (
                <div key={label} className="border-t border-white/10 pt-6">
                  <p className="text-white/30 text-[0.65rem] uppercase tracking-[0.25em] mb-1">{label}</p>
                  {href
                    ? <a href={href} className="text-white font-semibold text-lg hover:text-[#c47c1e] transition-colors">{value}</a>
                    : <p className="text-white font-semibold text-lg">{value}</p>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection heading="Send us your instruction." />
      <FaqSection description="Common questions about instructing RCA Ltd." items={faqItems} />
    </main>
  )
}
