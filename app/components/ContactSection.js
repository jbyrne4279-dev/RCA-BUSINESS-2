import { Suspense } from 'react'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get In Touch' }) {
  return (
    <section className="bg-surface-container-low py-20 mb-0 mx-4 md:mx-8 rounded-t-3xl">
      <div className="max-w-4xl mx-auto px-8">
        <Suspense fallback={null}>
          <ContactFormInner heading={heading} />
        </Suspense>
      </div>
    </section>
  )
}
