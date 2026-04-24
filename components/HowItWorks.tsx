'use client'

import { useEffect, useRef } from 'react'
import { Upload, CheckCircle, Share2, TrendingUp } from 'lucide-react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const steps = [
  {
    step: '01',
    icon: Upload,
    title: 'Clinicians build their UNA Wallet',
    description:
      'Healthcare professionals upload credentials, licenses, and certifications into their secure digital wallet. Complete competency exams and CEUs at any time.',
    color: 'bg-blue-50',
    iconColor: 'text-brand-blue',
    connector: true,
  },
  {
    step: '02',
    icon: CheckCircle,
    title: 'Credentials are verified & validated',
    description:
      'UNA Health verifies credentials against primary sources and validates competency through expert-designed, standardized exams. Results are trusted industry-wide.',
    color: 'bg-teal-50',
    iconColor: 'text-teal-600',
    connector: true,
  },
  {
    step: '03',
    icon: Share2,
    title: 'Employers access verified profiles',
    description:
      'Hospitals and staffing agencies receive a single, verified UNA profile per candidate — no more chasing documents, no more duplicate verification.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
    connector: true,
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Everyone moves faster',
    description:
      'Placements happen in days, not weeks. Compliance is maintained automatically. Clinicians spend more time caring for patients — less time on paperwork.',
    color: 'bg-green-50',
    iconColor: 'text-green-600',
    connector: false,
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      )

      // Steps — sequential stagger with a slight overlap
      const stepEls = stepsRef.current?.querySelectorAll('.step-card')
      if (stepEls?.length) {
        gsap.fromTo(
          stepEls,
          { opacity: 0, y: 44, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            stagger: 0.15,
            duration: 0.72,
            ease: 'power3.out',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' },
          }
        )
      }

      // Number badges — pop in after their card
      const badges = stepsRef.current?.querySelectorAll('.step-badge')
      if (badges?.length) {
        gsap.fromTo(
          badges,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1,
            stagger: 0.15,
            delay: 0.25,
            duration: 0.45,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' },
          }
        )
      }

      // Connector lines — draw in left-to-right
      const connectors = stepsRef.current?.querySelectorAll('.step-connector')
      if (connectors?.length) {
        gsap.fromTo(
          connectors,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            stagger: 0.15,
            delay: 0.35,
            duration: 0.6,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: stepsRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={headingRef} className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">How It Works</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            One platform. Every party. Zero friction.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            UNA Health creates a shared layer of verified clinical truth — so hospitals, agencies, and clinicians all
            work from the same, trusted data.
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="step-card relative flex flex-col items-center text-center px-4 group">
                {/* Connector */}
                {step.connector && (
                  <div className="step-connector hidden lg:block absolute top-9 left-[calc(50%+2.5rem)] right-0 h-px bg-gradient-to-r from-slate-200 to-transparent z-0" />
                )}

                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div
                    className={`w-[72px] h-[72px] rounded-2xl ${step.color} flex items-center justify-center mx-auto shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md`}
                  >
                    <Icon size={28} className={step.iconColor} />
                  </div>
                  <div className="step-badge absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-blue text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>

                <h3 className="text-base font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
