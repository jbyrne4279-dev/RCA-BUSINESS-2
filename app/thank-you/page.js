import ThankYouClient from './ThankYouClient'

export const metadata = {
  title: 'Enquiry Received | Stearling Reinstatement',
  description: 'Thank you for your enquiry. Stearling Reinstatement will respond within 24 hours.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouClient />
    </main>
  )
}
