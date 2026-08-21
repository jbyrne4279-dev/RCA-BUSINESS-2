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
      {/* Event snippet for Submit lead form (2) conversion page */}
      <Script id="conversion-submit-lead-form" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-16853906784/Ie8vCMLmuOUcEODqyOQ-',
              'value': 1.0,
              'currency': 'GBP'
          });
        `}
      </Script>
      <ThankYouClient />
    </main>
  )
}
