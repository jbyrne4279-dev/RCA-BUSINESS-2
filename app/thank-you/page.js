import Link from 'next/link'

export const metadata = {
  title: 'Enquiry Received | Cavendish & Rowe',
  description: 'Thank you for your enquiry. Cavendish & Rowe will respond within 24 hours.',
}

export default function ThankYouPage() {
  return (
    <main>
      <section className="min-h-[80vh] bg-[#f8f9fa] flex items-center py-20 px-6 md:px-10 border-b border-[#dadce0]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#e6f4ea] flex items-center justify-center mx-auto mb-6 text-3xl">
            ✓
          </div>
          <span className="inline-flex items-center bg-[#e8f0fe] text-[#1a73e8] text-xs font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full mb-5">
            Enquiry Received
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202124] leading-tight mb-5">
            We have your enquiry.
          </h1>
          <p className="text-[#5f6368] text-lg leading-relaxed mb-3">
            A member of our team will respond within 24 hours on business days.
          </p>
          <p className="text-[#5f6368] text-base leading-relaxed mb-10">
            For urgent instructions call{' '}
            <a href="tel:+442031788099" className="text-[#1a73e8] font-semibold hover:text-[#1557b0] transition-colors">020 3178 8099</a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-shine">Return Home</Link>
            <Link href="/resources" className="btn-ghost">Read Our Guides</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
