import { Suspense } from 'react'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get In Touch' }) {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Suspense fallback={null}>
          <ContactFormInner heading={heading} />
        </Suspense>
      </div>
    </section>
  )
}
