'use client'

import { useEffect, useRef } from 'react'
import { Users, UserCheck, ClipboardList, GraduationCap, BookOpen } from 'lucide-react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import ParallaxSection from '@/components/ParallaxSection'

const stats = [
  { icon: Users,         numericValue: 750, suffix: 'k+', decimals: 0, label: 'Clinicians',                        description: 'Healthcare professionals in the UNA network',   iconBg: 'bg-red-100',    iconColor: 'text-brand-blue' },
  { icon: UserCheck,     numericValue: 6,   suffix: 'k+', decimals: 0, label: 'Recruiters & Compliance Pros',      description: 'Trusting UNA to streamline their workflow',      iconBg: 'bg-rose-100',   iconColor: 'text-rose-500' },
  { icon: ClipboardList, numericValue: 400, suffix: 'k+', decimals: 0, label: 'Skills Checklists Completed',       description: 'Verified clinical skills assessments',           iconBg: 'bg-orange-100', iconColor: 'text-orange-500' },
  { icon: GraduationCap, numericValue: 500, suffix: 'k+', decimals: 0, label: 'Competency Exams Completed',        description: 'Validated exam results employers trust',         iconBg: 'bg-pink-100',   iconColor: 'text-pink-500' },
  { icon: BookOpen,      numericValue: 1.5, suffix: 'M+',  decimals: 1, label: 'Mandatory Courses Completed',      description: 'CEU completions across all specialties',         iconBg: 'bg-purple-100', iconColor: 'text-purple-500' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } })

      const cards = cardsRef.current?.querySelectorAll('.stat-card')
      if (cards?.length) {
        gsap.fromTo(cards, { y: 36, scale: 0.96 },
          { y: 0, scale: 1, stagger: 0.08, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 88%', once: true } })
      }

      cardsRef.current?.querySelectorAll('.stat-number').forEach((el, i) => {
        const s = stats[i]
        const obj = { val: 0 }
        ScrollTrigger.create({ trigger: cardsRef.current, start: 'top 82%', once: true,
          onEnter: () => gsap.to(obj, {
            val: s.numericValue, duration: 2, delay: i * 0.08, ease: 'power2.out',
            onUpdate: () => { el.textContent = (s.decimals > 0 ? obj.val.toFixed(s.decimals) : Math.round(obj.val).toString()) + s.suffix },
          }),
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <ParallaxSection
      pattern="circuit"
      patternColor="#ffffff"
      patternOpacity={0.06}
      speed={0.2}
      className="py-20 bg-brand-navy"
    >
    <section ref={sectionRef} className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={headingRef} className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">By the Numbers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Join over <span className="text-brand-blue">750k clinicians</span> and <span className="text-brand-blue">6k recruiters</span>
          </h2>
          <p className="mt-3 text-slate-300 text-lg max-w-xl mx-auto">who get more done with UNA!</p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map(s => {
            const Icon = s.icon
            return (
              <div key={s.label} className="stat-card card-hover bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 text-center group">
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={22} className={s.iconColor} />
                </div>
                <div className="stat-number text-3xl font-bold text-white mb-1">0{s.suffix}</div>
                <div className="text-sm font-semibold text-slate-200 mb-1 leading-tight">{s.label}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{s.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    </ParallaxSection>
  )
}
