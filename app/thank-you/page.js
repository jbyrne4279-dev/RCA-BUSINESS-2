import Link from 'next/link'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Thank You | RCA Ltd',
  description: 'Your Reinstatement Cost Assessment enquiry has been received. A member of our team will be in touch within 24 hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">{`
        gtag('event', 'conversion', {'send_to': 'AW-11028386067/lCGPCIPwlrYcEJOi34op'});
      `}</Script>
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
          <div className="max-w-xl w-full text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#c47c1e]" />
              <span className="text-xs font-body font-semibold uppercase tracking-widest text-[#c47c1e]">Enquiry Received</span>
              <div className="h-px w-8 bg-[#c47c1e]" />
            </div>

            <h1 className="font-headline text-5xl md:text-6xl text-[#111318] leading-tight mb-8">
              We have your enquiry.
            </h1>

            <p className="font-body text-lg text-[#111318]/75 leading-relaxed mb-12 max-w-md mx-auto">
              A member of our team will be in touch within 24 hours. If your matter is urgent, call us directly on{' '}
              <a href="tel:02031788099" className="text-[#111318] font-semibold hover:text-[#c47c1e] transition-colors">
                020 3178 8099
              </a>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-shine font-body font-semibold text-white px-8 py-3.5 transition-transform active:scale-[0.97]"
              >
                Return to home
              </Link>
              <Link
                href="/services"
                className="font-body font-semibold text-[#111318] px-8 py-3.5 border border-[#111318] hover:border-[#c47c1e] hover:text-[#c47c1e] transition-colors active:scale-[0.97]"
              >
                Our services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
