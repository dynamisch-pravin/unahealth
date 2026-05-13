'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const testimonials = [
  {
    quote: "In this current environment, it's critical for us to get our nurses to work very quickly. Now, they can complete their competencies and skills checklists anywhere, anytime.",
    name: 'Christine Carrington', title: 'VP', org: 'Remede Consulting Group', initials: 'CC', color: 'bg-brand-blue',
    videoId: 'aY4wDoic50I',
  },
  {
    quote: "It's amazing to know that through testing on UNA's platform we are sending competent, qualified clinicians into our partner facilities.",
    name: 'Bree Becker, MSN, FNP-C, RNC-MNN', title: 'Director of Clinical & Quality', org: 'Matchwell', initials: 'BB', color: 'bg-rose-500',
    videoId: 'JvTYPFXlmIM',
  },
  {
    quote: "[UNA] technology has been a big win for our team. The integration to our recruitment process has been seamless, and our nurses absolutely love how mobile-friendly it is!",
    name: 'Justin A.', title: 'President', org: 'Lead HealthStaff', initials: 'JA', color: 'bg-red-600',
    videoId: '5goRSM30VPk',
  },
  {
    quote: "We're actually getting compliments from our nurses on how easy [UNA] is to use on the mobile platform, and that's been an enormous change for us. If our nurses are happy, then obviously we're happy.",
    name: 'Jonna Wessenbach', title: 'CEO', org: 'Cascade Health Services', initials: 'JW', color: 'bg-orange-500',
    videoId: 'rb000nk8qhw',
  },
  {
    quote: "I love that it's just as easy for me to send out a checklist as it is for a nurse to log in and complete it. UNA definitely comes 5 star recommended!",
    name: 'Amber Washer', title: 'Nurse Recruiter', org: 'LeadHealthStaff', initials: 'AW', color: 'bg-pink-500',
    videoId: 'qJx1IRHt5Xs',
  },
  {
    quote: "We just wanted to thank [UNA] for the seamless transition to UNA testing and the top notch customer service that came with it.",
    name: 'Alan Baer', title: 'Director of Talent Acquisition', org: 'Cascade Health Services', initials: 'AB', color: 'bg-purple-500',
    videoId: 'hLMrXmkGRpY',
  },
]

// Clone 3 cards on each end for seamless infinite wrap
// Track: [last-3 clones | all 6 real cards | first-3 clones] = 12 slots
const VISIBLE = 3
const TOTAL = testimonials.length        // 6
const CLONES = VISIBLE                   // 3
const TRACK = TOTAL + CLONES * 2         // 12
const track = [
  ...testimonials.slice(TOTAL - CLONES),
  ...testimonials,
  ...testimonials.slice(0, CLONES),
]

export default function Testimonials() {
  const [slot, setSlot] = useState(CLONES)   // start at real card 0
  const [withTransition, setWithTransition] = useState(true)
  const slotRef = useRef(CLONES)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => { slotRef.current = slot }, [slot])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // After instant-jump re-enable transition on next paint
  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setWithTransition(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [withTransition])

  // When a slide lands in clone territory, silently jump to the real position
  const handleTransitionEnd = useCallback(() => {
    const s = slotRef.current
    if (s < CLONES) { setWithTransition(false); setSlot(s + TOTAL) }
    else if (s >= CLONES + TOTAL) { setWithTransition(false); setSlot(s - TOTAL) }
  }, [])

  const go = useCallback((delta: number) => {
    setSlot(s => { const n = s + delta; slotRef.current = n; return n })
  }, [])

  const goTo = useCallback((dot: number) => {
    slotRef.current = CLONES + dot
    setSlot(CLONES + dot)
  }, [])

  const dotPos = ((slot - CLONES) % TOTAL + TOTAL) % TOTAL
  // translateX as % of the track element (which is TRACK/VISIBLE × container wide)
  const tx = -(slot * 100 / TRACK)

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">UNA in the real world</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Hear from hospital administrators, staffing professionals, and nurses who use UNA Health every day.
          </p>
        </div>

        {/* Responsive infinite slider: 1 card mobile → 2 tablet → 3 desktop */}
        <div className="overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex w-[1200%] sm:w-[600%] lg:w-[400%]"
            style={{
              transform: `translateX(${tx}%)`,
              transition: withTransition ? 'transform 0.35s ease-in-out' : 'none',
            }}
          >
            {track.map((item, i) => (
              <div key={i} style={{ width: `${100 / TRACK}%`, flexShrink: 0 }} className="px-2 lg:px-3">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-full">
                  {item.videoId && (
                    <div className="aspect-video w-full bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title={`${item.name} testimonial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <div className="p-7">
                    <Quote size={24} className="text-brand-blue/20 mb-4" />
                    <p className="text-[15px] text-slate-600 leading-relaxed mb-6 italic">&ldquo;{item.quote}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>{item.initials}</div>
                      <div>
                        <div className="text-sm font-semibold text-brand-navy">{item.name}</div>
                        <div className="text-xs text-slate-400">{item.title} · {item.org}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button onClick={() => go(-1)} aria-label="Previous" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/40 transition-all hover:scale-110">
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === dotPos ? 'w-5 h-2.5 bg-brand-blue' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'}`} />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue/40 transition-all hover:scale-110">
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  )
}
