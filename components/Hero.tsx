'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle, Building2, Users, UserCircle } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const slides = [
  {
    tag: 'For Hospital Networks',
    icon: Building2,
    headline: 'Ensure clinical competence',
    headlineAccent: 'before day one.',
    subheadline: 'UNA helps you select the high-performing clinicians, leading to improved quality of care and better patient outcomes.',
    cta: 'UNA for Hospital Networks',
    ctaHref: '/how-una-helps/hospital-networks',
    bullets: [
      'Verified competency exams & skills checklists',
      'Automated credential tracking',
      'Seamless integration with your ATS',
    ],
    image: '/hero/slide-nurses.jpeg',
    accent: '#E9384D',
    stat: { value: '2,000+', label: 'Hospital Networks' },
  },
  {
    tag: 'For Staffing Agencies',
    icon: Users,
    headline: 'From "hello" to "hired"',
    headlineAccent: 'in half the time.',
    subheadline: 'UNA optimizes the placement process, allowing your agency to meet demand and close staffing gaps faster than ever before.',
    cta: 'UNA for Staffing Agencies',
    ctaHref: '/how-una-helps/staffing-agencies',
    bullets: [
      'Automated credential & license verification',
      'Shared digital wallet for clinicians',
      'Real-time compliance dashboards',
    ],
    image: '/hero/slide-doctor.jpeg',
    accent: '#0A9396',
    stat: { value: '60%', label: 'Faster Placements' },
  },
  {
    tag: 'For Healthcare Professionals',
    icon: UserCircle,
    headline: "It's time to take control",
    headlineAccent: 'of your career.',
    subheadline: "Why jump through hoops? UNA simplifies credentialing and competency to take the headache out of getting hired.",
    cta: 'UNA for Healthcare Professionals',
    ctaHref: '/how-una-helps/healthcare-professionals',
    bullets: [
      'Free digital credential wallet (myUNA)',
      'Complete CEUs in 15 minutes or less',
      'One-click sharing with employers',
    ],
    image: '/hero/slide-handshake.jpeg',
    accent: '#7B2D8B',
    stat: { value: '50k+', label: 'Clinicians Served' },
  },
]

export default function Hero() {
  const [current, setCurrent]       = useState(0)
  const [prev,    setPrev]          = useState<number | null>(null)
  const [,        setDir]           = useState<1 | -1>(1)
  const [locked,  setLocked]        = useState(false)

  const slideRefs  = useRef<(HTMLDivElement | null)[]>([])
  const contentRef = useRef<HTMLDivElement>(null)
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const els = contentRef.current.querySelectorAll('.anim')
    gsap.fromTo(els,
      { opacity: 0, y: 20, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.06, duration: 0.55, ease: 'power3.out' }
    )
  }, [current])

  useEffect(() => {
    if (prev === null) return
    const incoming = slideRefs.current[current]
    const outgoing = slideRefs.current[prev]
    if (incoming) gsap.fromTo(incoming, { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'power2.inOut' })
    if (outgoing) gsap.to(outgoing, { opacity: 0, duration: 0.7, ease: 'power2.inOut' })
  }, [current, prev])

  const go = useCallback((next: number, direction: 1 | -1 = 1) => {
    if (locked || next === current) return
    setLocked(true)
    setDir(direction)
    setPrev(current)
    setCurrent(next)
    setTimeout(() => setLocked(false), 950)
  }, [locked, current])

  const goNext = useCallback(() => go((current + 1) % slides.length, 1), [current, go])
  const goPrev = useCallback(() => go((current - 1 + slides.length) % slides.length, -1), [current, go])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(goNext, 6500)
  }, [goNext])

  useEffect(() => { resetTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current) } }, [resetTimer])

  const slide = slides[current]
  const SlideIcon = slide.icon

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* ── Right-side tinted background panel ── */}
      <div className="absolute top-0 right-0 bottom-0 w-[52%] bg-slate-50 pointer-events-none" style={{ zIndex: 0 }} />

      {/* ── Dot grid on left ── */}
      <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-40" style={{
        zIndex: 0,
        backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 80%)',
      }} />

      {/* ── Accent glow behind image ── */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full blur-[80px] pointer-events-none transition-colors duration-700"
        style={{ zIndex: 0, backgroundColor: slide.accent + '18' }} />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:pt-32 lg:pb-20" style={{ zIndex: 1 }}>
        <div className="w-full grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center">

          {/* ══ LEFT: Content ══ */}
          <div ref={contentRef} className="order-2 lg:order-1 lg:pr-8">

            {/* Tag pill */}
            <div className="anim flex items-center gap-3 mb-7">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border transition-colors duration-500"
                style={{ color: slide.accent, borderColor: slide.accent + '40', backgroundColor: slide.accent + '10' }}>
                <SlideIcon size={11} />
                {slide.tag}
              </span>
            </div>

            {/* Headline */}
            <h1 className="anim text-[40px] sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
              {slide.headline}{' '}
              <span className="relative inline-block transition-colors duration-500" style={{ color: slide.accent }}>
                {slide.headlineAccent}
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                  <path d="M0 3 Q50 0 100 3" stroke={slide.accent} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.35"/>
                </svg>
              </span>
            </h1>

            {/* Sub */}
            <p className="anim text-[15px] lg:text-base text-slate-500 leading-relaxed mb-8 max-w-[480px]">
              {slide.subheadline}
            </p>

            {/* Bullets */}
            <ul className="anim space-y-3 mb-10">
              {slide.bullets.map(b => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500"
                    style={{ backgroundColor: slide.accent + '18' }}>
                    <CheckCircle size={13} style={{ color: slide.accent }} />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="anim flex flex-wrap gap-3 mb-10">
              <Link href={slide.ctaHref}
                className="group inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-redDark text-white font-bold px-6 py-3 rounded-xl shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 transition-all text-sm">
                {slide.cta}
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/about/contact"
                className="inline-flex items-center gap-2 text-slate-600 font-semibold px-6 py-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-all text-sm">
                Get Started
              </Link>
            </div>

            {/* Slide nav */}
            <div className="anim flex items-center gap-4">
              {/* Dots */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { go(i, i > current ? 1 : -1); resetTimer() }}
                    aria-label={`Go to slide ${i + 1}`}
                    className="rounded-full transition-all duration-400"
                    style={{
                      width: i === current ? 24 : 7,
                      height: 7,
                      backgroundColor: i === current ? slide.accent : '#E2E8F0',
                    }}
                  />
                ))}
              </div>
              {/* Arrows */}
              <div className="flex gap-1">
                <button onClick={() => { goPrev(); resetTimer() }} aria-label="Previous"
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-slate-300 hover:bg-white transition-all shadow-sm">
                  <ChevronLeft size={14} />
                </button>
                <button onClick={() => { goNext(); resetTimer() }} aria-label="Next"
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-slate-300 hover:bg-white transition-all shadow-sm">
                  <ChevronRight size={14} />
                </button>
              </div>
              <span className="text-[11px] text-slate-300 font-mono tabular-nums ml-1">
                {String(current + 1).padStart(2,'0')}&thinsp;/&thinsp;{String(slides.length).padStart(2,'0')}
              </span>
            </div>
          </div>

          {/* ══ RIGHT: Image ══ */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">

            {/* Dashed ring behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border-2 border-dashed pointer-events-none transition-colors duration-700"
              style={{ borderColor: slide.accent + '25' }} />

            {/* Image card */}
            <div className="relative w-full max-w-[520px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
              {slides.map((s, i) => (
                <div
                  key={i}
                  ref={el => { slideRefs.current[i] = el }}
                  className="absolute inset-0"
                  style={{ opacity: i === current ? 1 : 0 }}
                >
                  <Image
                    src={s.image}
                    alt={s.headline}
                    fill
                    className="object-cover object-top"
                    priority={i === 0}
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              ))}
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* ── Floating trust badge — top left ── */}
            <div className="absolute top-6 -left-2 lg:-left-8 bg-white rounded-2xl shadow-lg shadow-slate-200/80 px-4 py-3 flex items-center gap-3 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <Image src="/logo.svg" alt="UNA" width={20} height={20} className="w-5 h-auto" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium leading-tight">Trusted by</p>
                <p className="text-sm font-bold text-brand-navy leading-tight">2,000+ Networks</p>
              </div>
            </div>

            {/* ── Floating stat card — bottom right ── */}
            <div className="absolute bottom-8 -right-2 lg:-right-6 bg-white rounded-2xl shadow-lg shadow-slate-200/80 px-4 py-3 border border-slate-100 min-w-[130px]">
              <p className="text-2xl font-extrabold transition-colors duration-500" style={{ color: slide.accent }}>
                {slide.stat.value}
              </p>
              <p className="text-[11px] text-slate-500 font-medium">{slide.stat.label}</p>
              <div className="mt-1.5 h-1 rounded-full bg-slate-100 overflow-hidden">
                <div key={current} className="h-full rounded-full transition-colors duration-500 origin-left"
                  style={{ backgroundColor: slide.accent, animation: 'hero-progress 6.5s linear forwards' }} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom progress bar ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-100" style={{ zIndex: 10 }}>
        <div
          key={`bar-${current}`}
          className="h-full origin-left transition-colors duration-500"
          style={{ backgroundColor: slide.accent, animation: 'hero-progress 6.5s linear forwards' }}
        />
      </div>

      <style jsx>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}
