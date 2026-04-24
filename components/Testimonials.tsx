'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const testimonials = [
  {
    quote: "In this current environment, it's critical for us to get our nurses to work very quickly. Now, they can complete their competencies and skills checklists anywhere, anytime.",
    name: 'Christine Carrington', title: 'VP', org: 'Remede Consulting Group', initials: 'CC', color: 'bg-brand-blue',
  },
  {
    quote: "It's amazing to know that through testing on UNA's platform we are sending competent, qualified clinicians into our partner facilities.",
    name: 'Bree Becker, MSN, FNP-C, RNC-MN', title: 'Director of Clinical & Quality', org: 'Matchwell', initials: 'BB', color: 'bg-rose-500',
  },
  {
    quote: "[UNA] technology has been a big win for our team. The integration to our recruitment process has been seamless, and our nurses absolutely love how mobile-friendly it is!",
    name: 'Justin A.', title: 'President', org: 'Lead HealthStaff', initials: 'JA', color: 'bg-red-600',
  },
  {
    quote: "We're actually getting compliments from our nurses on how easy [UNA] is to use on the mobile platform, and that's been an enormous change for us. If our nurses are happy, then obviously we're happy.",
    name: 'Jonna Wessenbach', title: 'CEO', org: 'Cascade Health Services', initials: 'JW', color: 'bg-orange-500',
  },
  {
    quote: "I love that it's just as easy for me to send out a checklist as it is for a nurse to log in and complete it. UNA definitely comes 5 star recommended!",
    name: 'Amber Washer', title: 'Nurse Recruiter', org: 'LeadHealthStaff', initials: 'AW', color: 'bg-pink-500',
  },
  {
    quote: "We just wanted to thank [UNA] for the seamless transition to UNA testing and the top notch customer service that came with it.",
    name: 'Alan Baer', title: 'Director of Talent Acquisition', org: 'Cascade Health Services', initials: 'AB', color: 'bg-purple-500',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const sectionRef  = useRef<HTMLElement>(null)
  const headingRef  = useRef<HTMLDivElement>(null)
  const cardsRef    = useRef<HTMLDivElement>(null)
  const dotsRef     = useRef<HTMLDivElement>(null)
  const entranceDone = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: headingRef.current, start: 'top 85%',
          onEnter: () => { entranceDone.current = true } } })
      gsap.fromTo(cardsRef.current?.querySelectorAll('.testimonial-card') ?? [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, scrollTrigger: { trigger: cardsRef.current, start: 'top 82%' } })
      gsap.fromTo(dotsRef.current, { opacity: 0 },
        { opacity: 1, duration: 0.5, scrollTrigger: { trigger: dotsRef.current, start: 'top 90%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const go = useCallback((index: number) => {
    if (transitioning || index === current) return
    setTransitioning(true)
    const cards = cardsRef.current?.querySelectorAll('.testimonial-card')
    if (!cards?.length) { setCurrent(index); setTransitioning(false); return }
    gsap.timeline({ onComplete: () => setTransitioning(false) })
      .to(cards, { opacity: 0, y: 16, filter: 'blur(4px)', stagger: 0.04, duration: 0.25, ease: 'power2.in' })
      .call(() => setCurrent(index))
      .set(cards, { y: -16 })
      .to(cards, { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.07, duration: 0.45, ease: 'power3.out' })
  }, [transitioning, current])

  const next = useCallback(() => go((current + 1) % testimonials.length), [current, go])
  const prev = useCallback(() => go((current - 1 + testimonials.length) % testimonials.length), [current, go])

  useEffect(() => { const t = setInterval(next, 7000); return () => clearInterval(t) }, [next])

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">UNA in the real world</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Hear from hospital administrators, staffing professionals, and nurses who use UNA Health every day.
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div key={`${t.name}-${i}`}
              className={`testimonial-card card-hover bg-white rounded-2xl border border-slate-100 p-7 shadow-sm ${i > 0 ? 'hidden md:block' : ''}`}>
              <Quote size={24} className="text-brand-blue/20 mb-4" />
              <p className="text-[15px] text-slate-600 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>{t.initials}</div>
                <div>
                  <div className="text-sm font-semibold text-brand-navy">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.title} · {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={dotsRef} className="flex items-center justify-center gap-3">
          <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/40 transition-all hover:scale-110"><ChevronLeft size={16} /></button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => go(i)} aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2.5 bg-brand-blue' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/40 transition-all hover:scale-110"><ChevronRight size={16} /></button>
        </div>
      </div>
    </section>
  )
}
