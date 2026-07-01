import Link from 'next/link'

export const metadata = {
  title: 'Enquiry Received | Reinstatement Cost Assessment Ltd',
  description: 'Thank you for your enquiry. RCA Ltd will respond within 24 hours.',
}

export default function ThankYouPage() {
  return (
    <main>
      <section className="min-h-[80vh] bg-[#f5f5f7] flex items-center py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.7rem] font-semibold text-[#c47c1e] uppercase tracking-[0.2em] mb-8">Enquiry Received</p>
          <h1 className="font-headline font-semibold text-[#1d1d1f] leading-[1.0] tracking-tight mb-8"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            We have your enquiry.
          </h1>
          <p className="text-[#6e6e73] text-xl leading-relaxed mb-4">
            A member of our team will respond within 24 hours on business days.
          </p>
          <p className="text-[#6e6e73] text-base leading-relaxed mb-12">
            For urgent instructions call{' '}
            <a href="tel:+442031788099" className="text-[#1d1d1f] font-semibold hover:text-[#c47c1e] transition-colors">020 3178 8099</a>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-shine">Return Home</Link>
            <Link href="/resources" className="btn-ghost">Read Our Guides</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
