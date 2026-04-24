'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Building2, Briefcase, User, Network, AlertTriangle, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const cases = [
  {
    id: 'hospitals', icon: Building2, label: 'Hospital Networks',
    company: 'Midtown General Hospital',
    problem: 'Midtown General Hospital struggles with staffing shortages and high turnover rates among its nursing staff. They also need to ensure their staff maintain the highest competencies for the best patient outcomes.',
    solution: [
      { title: 'Optimized onboarding', desc: "UNA's intuitive mobile interface significantly reduces the completion time for assessments, allowing nurses to be placed more quickly using detailed analytics for more informed staffing and training decisions." },
      { title: 'A better fit for company culture', desc: "UNA's personality assessments generate unique performance benchmarks for each clinician and organization. This data-driven approach allows HR to better manage talent through a more nuanced and objective assessment." },
      { title: 'Personalized performance assessments', desc: 'UNA provides validated evaluations to ensure healthcare professionals maintain high standards in their specialized clinical role. Based on results, UNA delivers personalized learning to address individual needs.' },
    ],
    result: "Thanks to the optimized staff placements facilitated by UNA's personalized analytics, Midtown General Hospital sees reduced turnover rates and staffing costs while patient satisfaction scores increase.",
    stat: '↓ Turnover', statSub: 'and improved patient satisfaction scores',
    href: '/how-una-helps/hospital-networks',
    ctaLabel: 'UNA for Hospital Networks',
  },
  {
    id: 'staffing', icon: Briefcase, label: 'Staffing Agencies',
    company: 'Premier Health Staffing',
    problem: 'Premier Health Staffing faces challenges in quickly placing nurses while ensuring they are adequately trained and their credentials are up-to-date.',
    solution: [
      { title: 'Making skillful matches with speed', desc: "UNA's streamlined user experience cuts down the time nurses take to complete on-boarding paperwork and automatically matches available nurses with open positions using their skills, experience, and behavioral attributes." },
      { title: 'Tailored training programs', desc: 'UNA uses targeted training modules and personalized assessments to address knowledge gaps and improve competency scores.' },
      { title: 'Comprehensive credentialing management', desc: "UNA automates certification maintenance to ensure nurses meet all regulatory requirements and are always prepared for new roles. Say goodbye to accidental lapses in certification!" },
    ],
    result: "Premier Health Staffing achieves faster placement times through UNA's automated matching while nurses report higher job satisfaction and maintain longer tenures thanks to continuous professional development from UNA's training library.",
    stat: '50% Faster', statSub: 'placement times with automated matching',
    href: '/how-una-helps/staffing-agencies',
    ctaLabel: 'UNA for Staffing Agencies',
  },
  {
    id: 'professionals', icon: User, label: 'Healthcare Professionals',
    company: 'Emily — Travel RN',
    problem: 'Emily is an experienced travel RN that works in hospitals, clinics, and home care all over the country. She struggles to manage keeping her multiple credentials organized, effectively tracking renewal requirements and expiration dates.',
    solution: [
      { title: 'Centralized credential management', desc: "UNA's mobile-first platform allows secure access to all of Emily's licenses and certifications from one location — anytime, anyplace." },
      { title: 'Effortless compliance tracking', desc: 'UNA will also send Emily automated reminders for credentials needing to be renewed, so she can meet all regulatory requirements and avoid lapses in compliance.' },
      { title: 'Quality testing integration', desc: 'UNA offers competency assessments and continuing education testing to seamlessly manage mandatories and career development.' },
    ],
    result: "Emily saves time with stress-free management of all her professional documents, and remains work-ready no matter where she chooses to work next. She can train for the opportunities she wants, and employers recognize her commitment to high standards.",
    stat: '3× Faster', statSub: 'placement for clinicians with a UNA Wallet',
    href: '/how-una-helps/healthcare-professionals',
    ctaLabel: 'UNA for Healthcare Professionals',
  },
  {
    id: 'network', icon: Network, label: 'The UNA Network',
    company: 'Midtown General + Premiere Staffing',
    problem: 'Midtown General Hospital needs to ensure consistent high-quality care and relies on Premiere Staffing Agency when staffing levels fluctuate. They want to streamline their on-boarding process and improve continuous education for all staff.',
    solution: [
      { title: 'Predictive and proactive', desc: "UNA's analytics tools help Midtown General anticipate staffing needs and manage nurse schedules. When gaps in the workforce appear, Premiere provides flexible staffing solutions supported by UNA's assessment and training tools." },
      { title: 'Seamless and unified', desc: "UNA integrates with both Premiere's ATS and Midtown General's HR systems to provide platform synergy for managing staff at every level." },
      { title: 'Assessment and feedback', desc: 'Regular competency testing ensures all staff maintain high standards of care. A continuous feedback loop allows Midtown to provide performance feedback which UNA uses to adjust training programs.' },
    ],
    result: 'Midtown General Hospital sees improvement in patient outcomes due to higher consistency in care quality. Workforce shortages are minimized with help from Premiere Staffing Agency and the hospital sees a reduction in overtime costs.',
    stat: '↓ Overtime', statSub: 'and improved workforce consistency',
    href: '/how-una-helps/hospital-networks',
    ctaLabel: 'Explore the UNA Network',
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const sectionRef       = useRef<HTMLElement>(null)
  const headingRef       = useRef<HTMLDivElement>(null)
  const tabsRef          = useRef<HTMLDivElement>(null)
  const tabBarRef        = useRef<HTMLDivElement>(null)
  const tabButtonRefs    = useRef<(HTMLButtonElement | null)[]>([])
  const pillRef          = useRef<HTMLDivElement>(null)
  const pillInitialized  = useRef(false)
  const contentRef       = useRef<HTMLDivElement>(null)
  const firstRender      = useRef(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true } })
      gsap.fromTo(tabsRef.current?.querySelectorAll('.tab-btn') ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, scrollTrigger: { trigger: tabsRef.current, start: 'top 85%', once: true } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  // Slide pill to active tab
  useEffect(() => {
    const btn  = tabButtonRefs.current[active]
    const pill = pillRef.current
    if (!btn || !pill) return
    if (!pillInitialized.current) {
      gsap.set(pill, { x: btn.offsetLeft, width: btn.offsetWidth })
      pillInitialized.current = true
      return
    }
    gsap.to(pill, { x: btn.offsetLeft, width: btn.offsetWidth, duration: 0.35, ease: 'power3.inOut' })
  }, [active])

  // Animate content on tab change
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      gsap.fromTo(contentRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
      return
    }
    if (!contentRef.current) return
    gsap.timeline()
      .to(contentRef.current,  { opacity: 0, y: 10, filter: 'blur(4px)', duration: 0.2, ease: 'power2.in' })
      .set(contentRef.current, { y: -10 })
      .to(contentRef.current,  { opacity: 1, y: 0,  filter: 'blur(0px)', duration: 0.4, ease: 'power3.out' })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const c = cases[active]
  const CIcon = c.icon

  return (
    <section id="use-cases" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-white">

      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(233,56,77,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border text-brand-blue border-brand-blue/30 bg-brand-blue/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            What can <em className="not-italic text-brand-blue">you</em> do with UNA?
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Whether you run a hospital network, a staffing agency, or you&apos;re a nurse building your career — UNA is designed for you.
          </p>
        </div>

        {/* Tabs — sliding pill */}
        <div ref={tabsRef} className="flex justify-center mb-14">
          <div ref={tabBarRef} className="relative inline-flex bg-slate-100 rounded-2xl p-1.5 shadow-inner">

            {/* Sliding white pill */}
            <div ref={pillRef}
              className="absolute top-1.5 h-[calc(100%-12px)] bg-white rounded-xl shadow-md shadow-slate-200/70 pointer-events-none"
              style={{ width: 0, willChange: 'transform, width' }}
            />

            {cases.map((item, i) => {
              const Icon = item.icon
              const isActive = i === active
              return (
                <button
                  key={item.id}
                  ref={el => { tabButtonRefs.current[i] = el }}
                  onClick={() => setActive(i)}
                  className={`tab-btn relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                    isActive ? 'text-brand-navy' : 'text-slate-500 hover:text-slate-700'
                  }`}>
                  <Icon size={14} className={`transition-colors duration-200 ${isActive ? 'text-brand-blue' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

          {/* ── LEFT: Case study ── */}
          <div>

            {/* Company header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <CIcon size={22} className="text-brand-blue" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue mb-0.5">Case Study</p>
                <h3 className="text-xl font-extrabold text-brand-navy tracking-tight">{c.company}</h3>
              </div>
            </div>

            {/* Problem card */}
            <div className="rounded-2xl p-5 mb-8 border border-amber-200/60 bg-amber-50/60">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={11} className="text-amber-500" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600">The Challenge</p>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">{c.problem}</p>
            </div>

            {/* Solution */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle size={11} className="text-brand-blue" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">The UNA Approach</p>
            </div>

            <ol className="space-y-3">
              {c.solution.map((step, i) => (
                <li key={i} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-brand-blue/20 hover:bg-white transition-all duration-200">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full text-white text-xs font-extrabold flex items-center justify-center mt-0.5 shadow-sm"
                    style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy mb-1">{step.title}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ── RIGHT: Result + Stat + CTA ── */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-28">

            {/* Result card */}
            <div className="rounded-2xl p-7 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3a70 100%)' }}>
              <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp size={14} style={{ color: '#E9384D' }} />
                  <p className="text-[11px] font-bold uppercase tracking-widest opacity-50">The Result</p>
                </div>
                <div className="w-8 h-[2px] rounded-full mb-4" style={{ backgroundColor: '#E9384D' }} />
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>{c.result}</p>
              </div>
            </div>

            {/* Stat card */}
            <div className="rounded-2xl p-7 bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Key Metric</p>
              <p className="text-5xl font-extrabold text-brand-blue leading-none mb-2">{c.stat}</p>
              <p className="text-sm text-slate-500">{c.statSub}</p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-1.5 flex-1 rounded-full"
                      style={{ backgroundColor: i < 4 ? '#E9384D' : '#E2E8F0' }} />
                  ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-1.5">Performance vs. legacy tools</p>
              </div>
            </div>

            {/* CTA */}
            <Link href={c.href}
              className="group flex items-center justify-between w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-200">
              <div>
                <p className="text-xs text-slate-400 font-medium mb-0.5">Learn more</p>
                <p className="text-sm font-bold text-brand-navy">{c.ctaLabel}</p>
              </div>
              <div className="w-8 h-8 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-200">
                <ArrowRight size={14} className="text-brand-blue group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
