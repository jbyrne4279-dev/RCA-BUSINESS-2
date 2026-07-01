import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export const metadata = {
  title: 'Thank You | RCA Ltd',
  description: 'Your Reinstatement Cost Assessment request has been received. A RICS-regulated surveyor will be in touch within 24 working hours.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">{`
        gtag('event', 'conversion', {'send_to': 'AW-11028386067/lCGPCIPwlrYcEJOi34op'});
      `}</Script>
      <main className="flex-1">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/reinstatement-cost-assessment-uk.png"
          alt="Reinstatement cost assessment UK property"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16 md:py-24 text-center pop-in">
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl px-8 py-10 md:px-14 md:py-14 border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
            <div className="btn-shine w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] flex items-center justify-center gap-2 mb-3">Enquiry Received</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-5">Thank you.</h1>
            <p className="text-lg text-secondary leading-relaxed">
              We&rsquo;ve received your enquiry and will respond within{' '}
              <strong className="text-primary font-semibold whitespace-nowrap">24 working hours</strong>.
              One of our RICS-regulated surveyors will be in touch shortly.
            </p>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c47c1e] flex items-center justify-center gap-2 mb-3">Your next steps</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">What happens next.</h2>
          </div>

          <ol className="space-y-6">
            {[
              {
                title: 'Confirmation email sent.',
                body: "You'll receive an email within minutes confirming your enquiry details and reference number. Check your spam folder if it doesn't arrive.",
              },
              {
                title: 'Surveyor assigned.',
                body: 'A RICS-regulated surveyor reviews your property details and is allocated to your case based on location and property type.',
              },
              {
                title: 'We contact you within 24 hours.',
                body: 'Your surveyor calls or emails to confirm requirements, agree on timelines, and answer any questions before work begins.',
              },
              {
                title: 'Your RCA report is delivered.',
                body: 'Receive a comprehensive RICS-compliant report with the exact reinstatement figure, ready to hand straight to your broker or insurer.',
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-5 items-start">
                <div className="btn-shine shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm sovereign-shadow">
                  {i + 1}
                </div>
                <div className={`pt-1.5 ${i < 3 ? 'pb-6 border-b border-outline-variant/40 w-full' : 'w-full'}`}>
                  <h3 className="font-bold text-primary text-lg mb-1">{step.title}</h3>
                  <p className="text-secondary leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-surface-container-low rounded-3xl p-10 text-center border border-[#c47c1e]/20 sovereign-shadow">
            
            <h3 className="font-bold text-primary text-xl mb-3">While you wait.</h3>
            <p className="text-secondary leading-relaxed mb-8 max-w-md mx-auto">
              Explore our guide to understand why accurate rebuild costs matter and how underinsurance happens.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/resources" className="btn-shine text-white px-8 py-3.5 font-semibold active:scale-[0.97] transition-transform">
                Read the guide
              </Link>
              <Link href="/" className="bg-white px-8 py-3.5 font-semibold text-primary active:scale-[0.97] transition-transform outline outline-1 outline-black/10">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      </main>
    </>
  )
}
