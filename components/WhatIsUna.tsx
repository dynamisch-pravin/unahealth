'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const products = [
  {
    name: 'UNA Test',
    tagline: 'Competency and checklists',
    bullets: [
      { label: 'Skills checklists', desc: '50% faster than legacy frameworks' },
      { label: 'Competency testing', desc: 'Immediate results for specialty exams' },
      { label: 'Expertly validated', desc: 'Up-to-date, reviewed by practitioners' },
    ],
    link: 'More on UNA Test',
    href: '/resources/una-test',
    badge: null,
    image: '/products/test-emily.png',
    accent: '#EEF4FF',
    dot: '#3B82F6',
  },
  {
    name: 'UNA Wallet',
    tagline: 'Credential management',
    bullets: [
      { label: 'Track your documents', desc: 'All credentials in one place' },
      { label: '24/7 sharing', desc: 'Easily submit information at any time' },
      { label: 'Made for mobile', desc: 'Flexibility for lifestyles on-the-go' },
    ],
    link: 'More on UNA Wallet',
    href: '/resources/una-wallet',
    badge: null,
    image: '/products/wallet-luis.png',
    accent: '#E6F7F7',
    dot: '#0D9488',
  },
  {
    name: 'UNA Air',
    tagline: 'Automated instant remediation',
    bullets: [
      { label: 'Improve retake success', desc: 'Address knowledge gaps' },
      { label: "Strike when it's hot", desc: 'Reschedule while content is fresh' },
      { label: 'Fully automated', desc: 'Zero admin intervention' },
    ],
    link: 'More on UNA Air',
    href: '/resources/una-air',
    badge: 'New',
    image: '/products/air-mockup.png',
    accent: '#FFF0F0',
    dot: '#E9384D',
  },
  {
    name: 'myUNA',
    tagline: 'Candidate portal',
    bullets: [
      { label: 'No reassignments', desc: 'Take one exam — one time' },
      { label: 'Standardized & shareable', desc: 'Submit to multiple organizations' },
      { label: 'Own your exams', desc: 'Take your career with you' },
    ],
    link: 'More on myUNA',
    href: '/resources/my-una',
    badge: 'Coming Soon',
    image: '/products/wallet-ipad.png',
    accent: '#E6F7F7',
    dot: '#0D9488',
  },
  {
    name: 'UNA Team',
    tagline: 'Behavioral assessments',
    bullets: [
      { label: 'Assess the best fit', desc: 'Find prospects aligned with culture' },
      { label: 'Reduce turnover', desc: 'Enhance team stickiness and stability' },
      { label: 'Invest in top talent', desc: 'Find opportunities within your org' },
    ],
    link: 'More on UNA Team',
    href: '/resources/una-team',
    badge: 'Coming Soon',
    image: '/products/una-team.png',
    accent: '#FFF0F3',
    dot: '#EC4899',
  },
]

export default function WhatIsUna() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { y: 32 },
        { y: 0, duration: 0.8, scrollTrigger: { trigger: headingRef.current, start: 'top 88%', once: true } })

      const cards = gridRef.current?.querySelectorAll('.product-card')
      if (cards?.length) {
        gsap.fromTo(cards, { y: 40, scale: 0.97 },
          { y: 0, scale: 1, stagger: 0.09, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true } })
        cards.forEach(card => {
          const el = card as HTMLElement
          el.addEventListener('mouseenter', () => gsap.to(el, { y: -5, duration: 0.25, ease: 'power2.out' }))
          el.addEventListener('mouseleave', () => gsap.to(el, { y: 0,  duration: 0.25, ease: 'power2.out' }))
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Our Products</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">What can UNA do?</h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A suite of mobile-first solutions for hospital networks, staffing agencies, and healthcare professionals.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(p => (
            <div key={p.name}
              className="product-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col cursor-default"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)' }}>

              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: p.accent }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {p.badge && (
                  <span className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full z-10 ${
                    p.badge === 'New' ? 'bg-brand-blue text-white' : 'bg-slate-800/75 text-white backdrop-blur-sm'
                  }`}>
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Name + tagline */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.dot }} />
                  <div>
                    <h3 className="text-sm font-bold text-brand-navy leading-none">{p.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{p.tagline}</p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 flex-1">
                  {p.bullets.map(b => (
                    <li key={b.label} className="flex items-start gap-2 text-xs">
                      <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: p.dot }} />
                      <span className="text-slate-600">
                        <span className="font-semibold text-slate-700">{b.label}:</span> {b.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={p.href}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold transition-colors mt-auto pt-4 border-t border-slate-50"
                  style={{ color: p.dot }}>
                  {p.link}
                  <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
