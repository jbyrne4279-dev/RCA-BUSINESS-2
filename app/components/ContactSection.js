import { Suspense } from 'react'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get In Touch', flip = false }) {
  return (
    <section
      className="py-12 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]"
      style={{ background: flip ? '#ffffff' : '#f0f4ff' }}
    >
      <div className="max-w-3xl mx-auto">
        <Suspense fallback={null}>
          <ContactFormInner heading={heading} />
        </Suspense>
      </div>
    </section>
  )
}

