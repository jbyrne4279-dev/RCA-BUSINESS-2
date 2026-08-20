import Script from 'next/script'
import ThankYouClient from './ThankYouClient'

export const metadata = {
  title: 'Enquiry Received',
  description: 'Thank you for your enquiry. Stearling Reinstatement will respond within 24 hours.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main>
      {/* Event snippet for Submit lead form (SRA) conversion page */}
      <Script id="conversion-submit-lead-form" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          dataLayer.push({'event': 'conversion', 'send_to': 'AW-16853906784/pWTDCISGgOUcEODqyOQ-'});
        `}
      </Script>
      <ThankYouClient />
    </main>
  )
}
