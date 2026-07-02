import { Suspense } from 'react'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get In Touch' }) {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-white/[0.06]" style={{ background: '#07070f' }}>
      <div className="max-w-3xl mx-auto">
        <Suspense fallback={null}>
          <ContactFormInner heading={heading} />
        </Suspense>
      </div>
    </section>
  )
}
