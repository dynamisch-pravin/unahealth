'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import ParallaxSection from '@/components/ParallaxSection'

const partners = [
  { name: 'Cascade Health Services',         logo: '/partners/cascade.png' },
  { name: 'Advantis Medical',                logo: '/partners/advantis-medical.png' },
  { name: 'Adex Healthcare Staffing',        logo: '/partners/adex.png' },
  { name: 'Equiliem',                        logo: '/partners/equiliem.png' },
  { name: 'Excite Health Partners',          logo: '/partners/excite-health-partners.png' },
  { name: 'Krucial Rapid Response',          logo: '/partners/krucial.png' },
  { name: 'Health Carousel',                 logo: '/partners/health-carousel.png' },
  { name: 'Express Healthcare Professionals',logo: '/partners/express-healthcare.png' },
  { name: 'GHR Healthcare',                  logo: '/partners/ghr-healthcare.png' },
  { name: 'Journey Healthcare Solutions',    logo: '/partners/journey-healthcare.png' },
  { name: 'Medical Solutions',               logo: '/partners/medical-solutions.png' },
  { name: 'Matchwell',                       logo: '/partners/matchwell.png' },
]

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } })
      const logos = gridRef.current?.querySelectorAll('.partner-logo')
      if (logos?.length) {
        gsap.fromTo(logos, { opacity: 0, scale: 0.85, y: 16 },
          { opacity: 1, scale: 1, y: 0, stagger: { each: 0.05, from: 'random' }, duration: 0.55, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: gridRef.current, start: 'top 82%' } })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <ParallaxSection pattern="dots" patternColor="#0F2B5B" patternOpacity={0.04} speed={0.15} className="py-20 bg-white border-t border-slate-100">
      <section ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headingRef} className="text-center mb-12">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Trusted By</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
              Trusted by these partners all over the nation
            </h2>
          </div>
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map(p => (
              <div key={p.name}
                className="partner-logo group h-20 bg-white hover:bg-white rounded-xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-md flex items-center justify-center px-4 transition-all duration-300">
                <div className="relative w-full h-10">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 14vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxSection>
  )
}
