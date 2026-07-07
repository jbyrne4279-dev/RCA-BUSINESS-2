'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

function PulsingPill() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.animation = 'rics-fade 3s ease-in-out infinite'
  }, [])
  return (
    <>
      <style>{`@keyframes rics-fade{0%,100%{opacity:1}50%{opacity:0.25}}`}</style>
      <span
        ref={ref}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
        style={{background:'rgba(0,87,255,0.18)',color:'rgba(255,255,255,0.85)',border:'1px solid rgba(0,87,255,0.35)'}}
      >
        <span style={{width:6,height:6,borderRadius:'50%',background:'#4d9fff',display:'inline-block',boxShadow:'0 0 8px rgba(77,159,255,0.8)'}} />
        RICS-Regulated Assessments
      </span>
    </>
  )
}

export default function CtaBanner() {
  return (
    <section className="relative py-14 md:py-28 px-6 md:px-10 overflow-hidden" style={{background:'linear-gradient(135deg, #0a1628 0%, #0d1f4a 50%, #0a1628 100%)'}}>
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{position:'absolute',top:'-20%',left:'-10%',width:'60%',height:'140%',background:'radial-gradient(ellipse, rgba(0,87,255,0.18) 0%, transparent 70%)',borderRadius:'50%'}} />
        <div style={{position:'absolute',bottom:'-20%',right:'-10%',width:'55%',height:'120%',background:'radial-gradient(ellipse, rgba(0,87,255,0.12) 0%, transparent 70%)',borderRadius:'50%'}} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Top label */}
        <div className="flex justify-center mb-8">
          <PulsingPill />
        </div>

        {/* Headline */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 max-w-3xl mx-auto">
          Get Started. Instruct Today.
        </h2>

        {/* Stat callout */}
        <p className="text-center text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Tell us about your property and we will send a written fee estimate — no contract, no commitment. If you proceed, your{' '}
          <span style={{color:'#7db8ff'}} className="font-semibold">broker-ready RICS report</span>{' '}
          is with you within 24 hours.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
          <Link
            href="/contact#contact-form"
            className="inline-block text-center font-semibold text-sm px-10 py-4 rounded-full transition-all"
            style={{background:'#0057FF',color:'#fff',boxShadow:'0 0 32px rgba(0,87,255,0.55), 0 4px 16px rgba(0,87,255,0.35)'}}
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="inline-block text-center font-semibold text-sm px-10 py-4 rounded-full transition-all"
            style={{background:'rgba(255,255,255,0.08)',color:'#fff',border:'1px solid rgba(255,255,255,0.25)'}}
          >
            View Services
          </Link>
        </div>

        {/* Why Stearling strip */}
        <div className="border rounded-2xl p-4 md:p-8 border-spin-glow" style={{background:'rgba(255,255,255,0.05)',backdropFilter:'blur(12px)'}}>
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6 text-center">Why Stearling Reinstatement</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 circuit-steps">
            {[
              {
                label: 'Specialist only',
                desc: 'Reinstatement cost assessments no general surveying, no distractions.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>,
              },
              {
                label: 'RICS regulated',
                desc: 'Every assessment supervised by a RICS-registered member.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.5 5.5H20l-4.5 3.5 1.5 5.5L12 13.5 7 16.5l1.5-5.5L4 7.5h5.5L12 2z"/></svg>,
              },
              {
                label: '24-hr turnaround',
                desc: 'Desktop assessments delivered within 24 hours of instruction.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>,
              },
              {
                label: 'PI insured',
                desc: 'Professional indemnity cover on every instruction.',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              },
            ].map(({ label, desc, icon }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-3 text-[#93c5fd]">{icon}</div>
                <p className="text-[#93c5fd] font-semibold text-sm mb-1">{label}</p>
                <p className="text-white/55 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
