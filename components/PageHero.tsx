'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'

interface PageHeroProps {
  eyebrow: string
  headline: string
  subheadline: string
  ctaLabel?: string
  ctaHref?: string
  bgClass?: string
}

export default function PageHero({ eyebrow, headline, subheadline, ctaLabel, ctaHref = '/contact', bgClass = 'bg-brand-navy' }: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-hero-eyebrow', { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.8)' })
      gsap.fromTo('.page-hero-title',   { opacity: 0, y: 40 },  { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out', delay: 0.1 })
      gsap.fromTo('.page-hero-sub',     { opacity: 0, y: 24 },  { opacity: 1, y: 0, duration: 0.7, delay: 0.35 })
      gsap.fromTo('.page-hero-cta',     { opacity: 0, y: 14 },  { opacity: 1, y: 0, duration: 0.6, delay: 0.55 })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className={`${bgClass} pt-28 pb-20 relative overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-3xl rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <span className="page-hero-eyebrow inline-block px-3 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest mb-5">
          {eyebrow}
        </span>
        <h1 className="page-hero-title text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
          {headline}
        </h1>
        <p className="page-hero-sub text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
          {subheadline}
        </p>
        {ctaLabel && (
          <Link href={ctaHref}
            className="page-hero-cta btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue text-white font-semibold rounded-xl shadow-lg hover:bg-brand-redDark transition-colors text-sm group">
            {ctaLabel}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  )
}
