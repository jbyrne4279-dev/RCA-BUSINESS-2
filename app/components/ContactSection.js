import { Suspense } from 'react'
import ContactFormInner from './ContactFormInner'

export default function ContactSection({ heading = 'Get In Touch', flip = false, background }) {
  return (
    <section
      className="py-12 md:py-28 px-6 md:px-10 border-t border-[#e2e8f0]"
      style={{ background: background ?? (flip ? '#ffffff' : 'rgba(122,31,61,0.08)') }}
    >
      <div
        className="max-w-3xl mx-auto rounded-3xl p-6 md:p-12 border border-white/10"
        style={{ background: 'linear-gradient(135deg, #7A1F3D 0%, #5C1730 100%)', boxShadow: '0 12px 40px rgba(122,31,61,0.25)' }}
      >
        <Suspense fallback={null}>
          <ContactFormInner heading={heading} />
        </Suspense>
      </div>
    </section>
  )
}

