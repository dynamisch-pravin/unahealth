'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, FlaskConical, Wallet, Wind, User, Users } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const products = [
  {
    icon: FlaskConical,
    iconBg: 'bg-blue-50',
    iconColor: 'text-brand-blue',
    name: 'UNA Test',
    tagline: 'Competency Testing & Skills Checklists',
    description:
      'Standardized, validated competency exams and digital skills checklists built by clinical experts. Ensure every clinician meets your exact competency requirements.',
    features: ['200+ validated exam modules', 'Specialty-specific skills checklists', 'Instant scoring & reporting', 'NCLEX-style question formats'],
    badge: null,
    href: '#',
  },
  {
    icon: Wallet,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    name: 'UNA Wallet',
    tagline: 'Digital Credential Management',
    description:
      'A secure, portable digital wallet for storing, managing, and sharing credentials, certifications, and competency records—accessible anytime, anywhere.',
    features: ['Centralized credential storage', 'One-click employer sharing', 'Expiration alerts & tracking', 'HIPAA-compliant security'],
    badge: null,
    href: '#',
  },
  {
    icon: Wind,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    name: 'UNA Air',
    tagline: 'Clinical Remediation Platform',
    description:
      'Identify competency gaps and close them fast. UNA Air delivers targeted remediation pathways so clinicians can improve scores, close knowledge gaps, and stay compliant.',
    features: ['AI-driven gap analysis', 'Personalized learning paths', 'Progress tracking dashboard', 'Competency improvement reports'],
    badge: 'New',
    badgeBg: 'bg-purple-100 text-purple-700',
    href: '#',
  },
  {
    icon: User,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    name: 'myUNA',
    tagline: 'Candidate Portal',
    description:
      'A dedicated portal for healthcare professionals to manage their career. Store credentials, complete exams, and connect with top employers—all from one dashboard.',
    features: ['Personal credential dashboard', 'Job readiness score', 'Employer matching', 'Career tracking tools'],
    badge: 'Coming Soon',
    badgeBg: 'bg-orange-100 text-orange-600',
    href: '#',
  },
  {
    icon: Users,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    name: 'UNA Team',
    tagline: 'Behavioral & Team Assessments',
    description:
      'Evaluate culture fit, communication style, and team dynamics with validated behavioral assessments designed specifically for healthcare environments.',
    features: ['Healthcare-specific profiles', 'Team compatibility insights', 'Cultural fit scoring', 'Manager-ready reports'],
    badge: 'Coming Soon',
    badgeBg: 'bg-rose-100 text-rose-600',
    href: '#',
  },
]

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      // Cards — stagger by row (3 per row on desktop)
      const cards = gridRef.current?.querySelectorAll('.product-card')
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 48, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            stagger: { each: 0.1, from: 'start' },
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 82%' },
          }
        )
      }

      // Card hover tilt using GSAP
      cards?.forEach((card) => {
        const el = card as HTMLElement
        const onEnter = () =>
          gsap.to(el, { y: -6, boxShadow: '0 20px 40px rgba(11,114,181,0.12)', duration: 0.3, ease: 'power2.out' })
        const onLeave = () =>
          gsap.to(el, { y: 0, boxShadow: '0 0px 0px rgba(0,0,0,0)', duration: 0.3, ease: 'power2.out' })

        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)

        // Cleanup stored on element for removal
        ;(el as HTMLElement & { _gsapEnter?: () => void; _gsapLeave?: () => void })._gsapEnter = onEnter
        ;(el as HTMLElement & { _gsapEnter?: () => void; _gsapLeave?: () => void })._gsapLeave = onLeave
      })
    }, sectionRef)

    return () => {
      // Remove hover listeners
      gridRef.current?.querySelectorAll('.product-card').forEach((card) => {
        const el = card as HTMLElement & { _gsapEnter?: () => void; _gsapLeave?: () => void }
        if (el._gsapEnter) el.removeEventListener('mouseenter', el._gsapEnter)
        if (el._gsapLeave) el.removeEventListener('mouseleave', el._gsapLeave)
      })
      ctx.revert()
    }
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Product Suite</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Everything you need in one platform
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            UNA Health offers a complete suite of tools for hospitals, staffing agencies, and healthcare professionals
            to verify, manage, and grow clinical competency.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="product-card card-hover bg-white rounded-2xl border border-slate-100 p-7"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                    <Icon size={22} className={product.iconColor} />
                  </div>
                  {product.badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${product.badgeBg}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-brand-navy mb-1">{product.name}</h3>
                <p className="text-xs font-medium text-brand-teal mb-3">{product.tagline}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{product.description}</p>

                <ul className="space-y-1.5 mb-6">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.href}
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors"
                >
                  Learn More
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
