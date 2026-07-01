import Link from 'next/link'

export const metadata = {
  title: 'Enquiry Received | Reinstatement Cost Assessment Ltd',
  description: 'Thank you for your enquiry. RCA Ltd will respond within 24 hours.',
}

export default function ThankYouPage() {
  return (
    <main>
      <section className="min-h-[70vh] bg-white flex items-center py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#c47c1e] text-[0.65rem] font-semibold uppercase tracking-[0.3em] mb-8">Enquiry Received</p>
          <h1 className="font-headline text-5xl md:text-6xl font-semibold text-[#111318] leading-[1.05] mb-6">
            We have your enquiry.
          </h1>
          <div className="w-12 h-px bg-[#c47c1e] mb-8" />
          <p className="text-[#374151] text-lg leading-relaxed mb-4">
            A member of our team will review your instruction and respond within 24 hours on business days.
          </p>
          <p className="text-[#6b7280] text-base leading-relaxed mb-12">
            If you need to reach us urgently in the meantime, call us on{' '}
            <a href="tel:+442031788099" className="text-[#c47c1e] font-semibold hover:text-[#111318] transition-colors">020 3178 8099</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="btn-shine text-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-center inline-block">
              Return Home
            </Link>
            <Link href="/resources" className="border border-[#111318]/20 text-[#111318] hover:border-[#c47c1e] hover:text-[#c47c1e] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-center inline-block transition-all">
              Read Our Guides
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
