'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  CheckCircle, ArrowRight, BookOpen, Mic, FileText, Brain, Clock,
  BarChart3, Zap, Users, Stethoscope, FlaskConical, Heart, Shield,
  Syringe, Wind, Pill, AlertCircle, Lightbulb, AlertTriangle,
  TrendingUp, MessageSquare, Award, GraduationCap, ClipboardList,
  Star, Globe, Building2, ExternalLink, Video, Play, Smartphone,
  Bookmark, Activity, Target, HelpCircle, type LucideIcon,
} from 'lucide-react'

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setY(window.scrollY))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return y
}

function useParallaxOffset(ref: { current: HTMLElement | null }, speed = 0.18) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    let raf = 0
    const calc = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const dist = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(dist * speed)
    }
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(calc) }
    window.addEventListener('scroll', onScroll, { passive: true })
    calc()
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [ref, speed])
  return offset
}

function FloatingBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
      <div className="flex items-center gap-4 px-5 py-3 rounded-2xl shadow-2xl border border-white/10"
        style={{ background: 'rgba(12,26,40,0.95)', backdropFilter: 'blur(20px)' }}>
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3BBDE8] animate-pulse" />
          <span className="text-sm font-semibold text-white">Learn Like a Real Nurse</span>
        </div>
        <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95"
          style={{ background: '#3BBDE8', color: '#0C1A28' }}>
          Launch UNA Prep <ArrowRight size={14} />
        </a>
      </div>
    </div>
  )
}

function IconBox({ icon: Icon, bg, color, size = 18 }: { icon: LucideIcon; bg: string; color: string; size?: number }) {
  return (
    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
      <Icon size={size} style={{ color }} />
    </div>
  )
}

export default function UnaPrepPage() {
  const scrollY = useScrollY()
  const whyRef = useRef<HTMLElement>(null)
  const assessRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const whyOffset = useParallaxOffset(whyRef, 0.14)
  const assessOffset = useParallaxOffset(assessRef, 0.12)
  const ctaOffset = useParallaxOffset(ctaRef, 0.16)

  const topics = [
    { label: 'Maternal & Obstetric Nursing', color: '#E8604A' },
    { label: 'Pharmacology',                 color: '#3BBDE8' },
    { label: 'Med-Surg',                     color: '#18B89A' },
    { label: 'Cardiac Nursing',              color: '#E8604A' },
    { label: 'Mental Health',                color: '#7B5EA7' },
    { label: 'Critical Care',                color: '#F5A623' },
    { label: 'Anticoagulants',               color: '#3BBDE8' },
    { label: 'Dosage Calculations',          color: '#22C07A' },
    { label: 'Emergency Nursing',            color: '#E8604A' },
    { label: 'Prioritization & Delegation',  color: '#18B89A' },
  ]

  const cheatSheets: { icon: LucideIcon; iconColor: string; iconBg: string; name: string; badge: string }[] = [
    { icon: BookOpen,     iconColor: '#1A6FB5', iconBg: '#EBF5FF', name: 'Antidotes & Reversal Agents', badge: 'Pharmacology' },
    { icon: FlaskConical, iconColor: '#18B89A', iconBg: '#D2F5EF', name: 'Lab Values',                  badge: 'Clinical' },
    { icon: Heart,        iconColor: '#E8604A', iconBg: '#FDEAE6', name: 'ECG Rhythms',                 badge: 'Cardiac' },
    { icon: Shield,       iconColor: '#7B5EA7', iconBg: '#EDE8F7', name: 'Isolation Precautions',       badge: 'Infection Control' },
    { icon: Syringe,      iconColor: '#D48806', iconBg: '#FEF3DC', name: 'Insulin Types',               badge: 'Endocrine' },
    { icon: Wind,         iconColor: '#3BBDE8', iconBg: '#D5F1FB', name: 'ABG Interpretation',          badge: 'Respiratory' },
    { icon: Pill,         iconColor: '#18B89A', iconBg: '#D2F5EF', name: 'Drug Suffixes',               badge: 'Pharmacology' },
    { icon: AlertCircle,  iconColor: '#E8604A', iconBg: '#FDEAE6', name: 'Emergency Medications',       badge: 'Critical Care' },
  ]

  const whyFeatures: { bg: string; iconColor: string; icon: LucideIcon; title: string; body: string }[] = [
    { bg: '#EBF5FF', iconColor: '#1A6FB5', icon: Stethoscope, title: 'Real patient-based learning',        body: 'Every lesson is built around realistic clinical scenarios — the same critical thinking you\'ll use at the bedside and on exams.' },
    { bg: '#D5F1FB', iconColor: '#3BBDE8', icon: Zap,         title: 'High-yield, exam-focused content',   body: 'Core nursing topics simplified into concise, testable lessons. No fluff — just what you need to pass and practice confidently.' },
    { bg: '#FEF3DC', iconColor: '#D48806', icon: Brain,        title: 'Multimedia learning formats',        body: 'Short videos, podcasts, cheat sheets, and MCQs — choose how you learn best, whether commuting, on break, or studying at home.' },
    { bg: '#EDE8F7', iconColor: '#7B5EA7', icon: BarChart3,    title: 'Adaptive assessments that track growth', body: 'Know exactly where you stand. Timed exams and analytics identify weak areas so you can focus study time where it counts.' },
  ]

  const mcqFeatures: { icon: LucideIcon; iconBg: string; iconColor: string; title: string; body: string }[] = [
    { icon: CheckCircle,   iconBg: '#D4F5E9', iconColor: '#22C07A', title: 'Correct answer explanation', body: 'Understand exactly why the right answer is right — not just that it is.' },
    { icon: Lightbulb,     iconBg: '#FEF3DC', iconColor: '#D48806', title: 'Safety priority',            body: 'Each question reinforces what to prioritize for patient safety in a clinical context.' },
    { icon: AlertTriangle, iconBg: '#FDEAE6', iconColor: '#E8604A', title: 'Common mistakes',           body: 'Learn the typical traps that cause nurses to choose the wrong answer — and how to avoid them.' },
    { icon: Brain,         iconBg: '#EDE8F7', iconColor: '#7B5EA7', title: 'Memory tricks',             body: 'Mnemonics and quick-recall tools that stick with you from exam room to bedside.' },
  ]

  const assessFeatures: { icon: LucideIcon; iconBg: string; iconColor: string; title: string; body: string }[] = [
    { icon: Clock,         iconBg: '#EBF5FF', iconColor: '#1A6FB5', title: 'Timed exams',            body: 'Simulate real NCLEX time pressure to build speed and accuracy.' },
    { icon: Target,        iconBg: '#FDEAE6', iconColor: '#E8604A', title: 'Scenario-based testing', body: 'Patient cases that test clinical judgment, not just memorization.' },
    { icon: TrendingUp,    iconBg: '#D4F5E9', iconColor: '#22C07A', title: 'Performance analytics',  body: 'See exactly where you\'re strong and where to focus next.' },
    { icon: MessageSquare, iconBg: '#D5F1FB', iconColor: '#3BBDE8', title: 'Detailed rationales',    body: 'Full explanations for every question so every attempt becomes a learning moment.' },
    { icon: Award,         iconBg: '#FEF3DC', iconColor: '#D48806', title: 'Progress tracking',      body: 'Monitor your readiness score over time and celebrate improvements.' },
  ]

  const audience: { icon: LucideIcon; iconBg: string; iconColor: string; label: string }[] = [
    { icon: GraduationCap, iconBg: '#EBF5FF', iconColor: '#1A6FB5', label: 'Nursing students' },
    { icon: ClipboardList, iconBg: '#D5F1FB', iconColor: '#3BBDE8', label: 'NCLEX preparation' },
    { icon: Star,          iconBg: '#FEF3DC', iconColor: '#D48806', label: 'New graduate nurses' },
    { icon: Globe,         iconBg: '#D2F5EF', iconColor: '#18B89A', label: 'International nurses' },
    { icon: Building2,     iconBg: '#EDE8F7', iconColor: '#7B5EA7', label: 'Working nurses refreshing skills' },
  ]

  return (
    <>
      <style>{`
        @keyframes blob-float {
          0%,100% { transform: translateY(0px) scale(1); }
          50%      { transform: translateY(-22px) scale(1.03); }
        }
        @keyframes blob-float-alt {
          0%,100% { transform: translateY(0px) scale(1); }
          40%      { transform: translateY(16px) scale(0.97); }
          80%      { transform: translateY(-10px) scale(1.02); }
        }
        @keyframes ring-spin  { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes ring-rev   { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }
        @keyframes dot-breathe{
          0%,100% { opacity:.25; transform:scale(1); }
          50%     { opacity:.55; transform:scale(1.25); }
        }
        .parallax-blob { will-change: transform; }
      `}</style>
      <FloatingBanner />

      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#3BBDE8 0%,rgba(59,189,232,0.2) 50%,transparent 80%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-[50%] pointer-events-none"
          style={{ background: 'linear-gradient(145deg,#f0f9ff 0%,#e8f4fc 60%,#deeef8 100%)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-[50%] pointer-events-none opacity-25"
          style={{ backgroundImage: 'radial-gradient(circle,#cbd5e1 1px,transparent 1px)', backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at 30% 50%,black 30%,transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%,black 30%,transparent 75%)' }} />

        {/* parallax blobs */}
        <div className="parallax-blob absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 40%,rgba(59,189,232,0.09) 0%,rgba(59,189,232,0.03) 50%,transparent 70%)',
            transform: `translateY(${scrollY * 0.13}px)` }} />
        <div className="parallax-blob absolute -bottom-40 -left-28 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 55% 55%,rgba(232,96,74,0.07) 0%,rgba(232,96,74,0.02) 50%,transparent 70%)',
            transform: `translateY(${-scrollY * 0.09}px)` }} />
        <div className="parallax-blob absolute top-20 left-[8%] w-[340px] h-[340px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(245,166,35,0.06) 0%,transparent 65%)',
            transform: `translateY(${scrollY * 0.07}px)`, animation: 'blob-float-alt 12s ease-in-out infinite' }} />

        {/* spinning rings */}
        <div className="absolute top-28 left-[12%] w-40 h-40 rounded-full border border-dashed pointer-events-none"
          style={{ borderColor: 'rgba(59,189,232,0.14)',
            transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * 0.04}deg)` }} />
        <div className="absolute bottom-16 right-[15%] w-24 h-24 rounded-full border border-dotted pointer-events-none"
          style={{ borderColor: 'rgba(232,96,74,0.15)',
            transform: `translateY(${-scrollY * 0.12}px) rotate(${-scrollY * 0.06}deg)` }} />
        <div className="absolute top-[40%] right-[6%] w-56 h-56 rounded-full border pointer-events-none"
          style={{ borderColor: 'rgba(59,189,232,0.07)',
            transform: `translateY(${scrollY * 0.1}px)`, animation: 'ring-spin 60s linear infinite' }} />

        {/* floating dot accents */}
        {[
          { top:'18%', left:'4%',  d:8,  c:'#3BBDE8', delay:'0s',  dur:'3.2s' },
          { top:'65%', left:'2%',  d:5,  c:'#E8604A', delay:'1s',  dur:'4s'   },
          { top:'30%', right:'4%', d:6,  c:'#F5A623', delay:'0.5s',dur:'3.6s' },
          { top:'72%', right:'8%', d:10, c:'#3BBDE8', delay:'1.4s',dur:'5s'   },
          { top:'12%', left:'22%', d:4,  c:'#7B5EA7', delay:'2s',  dur:'3s'   },
        ].map((dot, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none"
            style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right,
              width: dot.d, height: dot.d, background: dot.c,
              animation: `dot-breathe ${dot.dur} ease-in-out ${dot.delay} infinite`,
              transform: `translateY(${scrollY * 0.05}px)` }} />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5"
                style={{ color: '#3BBDE8', borderColor: 'rgba(59,189,232,0.3)', background: 'rgba(59,189,232,0.06)' }}>
                <BookOpen size={11} />
                Learn Like a Real Nurse
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Pass Exams. Think Like<br className="hidden sm:block" /> a Nurse.{' '}
                <span className="italic" style={{ color: '#3BBDE8' }}>Practice with Confidence.</span>
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg text-lg font-light">
                UNA Prep helps nurses master clinical judgment through real-world scenarios, microlearning, podcasts, cheat sheets, and NCLEX-style practice questions.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3.5 rounded-full transition-all hover:scale-[1.02] hover:shadow-xl group"
                  style={{ background: '#3BBDE8', color: '#fff', boxShadow: '0 4px 24px rgba(59,189,232,0.3)' }}>
                  Start Learning Now
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all">
                  Explore Free Content
                </a>
              </div>
              <ul className="space-y-2.5">
                {['Real clinical scenarios & NCLEX-style MCQs', '10-minute microlearning for busy nurses', 'Videos, podcasts & downloadable cheat sheets'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(59,189,232,0.12)' }}>
                      <CheckCircle size={13} style={{ color: '#3BBDE8' }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical scenario card — light */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="rounded-3xl p-7 border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.07)] bg-white">
                  <div className="absolute -top-3 right-6 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold shadow-md"
                    style={{ background: '#F5A623', color: '#0C1A28' }}>
                    <Zap size={11} /> Clinical Scenario
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#3BBDE8' }}>Sample patient case</p>

                  <div className="rounded-xl p-4 mb-4 bg-slate-50 border border-slate-100">
                    <p className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-400">Patient on Warfarin</p>
                    <p className="text-sm font-semibold text-brand-navy mb-3">Lab &amp; Clinical Findings</p>
                    {[
                      { text: 'INR = 6.2 (critically elevated)', color: '#E8604A' },
                      { text: 'Bleeding gums noted',             color: '#F5A623' },
                      { text: 'Petechiae present on forearms',   color: '#F5A623' },
                    ].map(f => (
                      <div key={f.text} className="flex items-center gap-2.5 py-1.5 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                        {f.text}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy mb-3">
                    <HelpCircle size={14} style={{ color: '#3BBDE8' }} />
                    What should the nurse do first?
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold"
                    style={{ background: '#D4F5E9', borderColor: '#86DFB8', color: '#0A5C36' }}>
                    <CheckCircle size={14} />
                    Hold warfarin &amp; notify the provider immediately
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-400">
                    Practice prioritization, safety, and clinical judgment exactly like real nursing situations.
                  </p>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(59,189,232,0.1)' }}>
                    <Zap size={16} style={{ color: '#3BBDE8' }} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-brand-navy leading-none">10-min</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">lessons, learn anywhere</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(59,189,232,0.25)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Microlearning strip ── */}
      <section className="overflow-hidden bg-slate-50 border-y border-slate-100 relative">
        <div className="parallax-blob absolute top-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4"
          style={{ background: 'radial-gradient(circle,rgba(59,189,232,0.06) 0%,transparent 65%)',
            animation: 'blob-float 16s ease-in-out infinite' }} />
        <div className="parallax-blob absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4"
          style={{ background: 'radial-gradient(circle,rgba(245,166,35,0.05) 0%,transparent 65%)',
            animation: 'blob-float-alt 12s ease-in-out 2s infinite' }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch">
          {/* Left */}
          <div className="px-8 py-16 lg:pl-12 lg:pr-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full border w-fit"
              style={{ color: '#3BBDE8', borderColor: 'rgba(59,189,232,0.3)', background: 'rgba(59,189,232,0.06)' }}>
              <Zap size={10} />
              Microlearning for nurses
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-5 text-brand-navy">
              10-Minute Lessons for<br />
              <span style={{ color: '#3BBDE8' }}>Nurses Who Never Stop Moving.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8 font-light max-w-md text-slate-500">
              Every lesson on UNA Prep is designed to fit inside a break, a commute, or a quiet moment between patients — real clinical knowledge that builds fast.
            </p>
            <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all hover:scale-[1.02] hover:shadow-lg mb-7 group w-fit"
              style={{ background: '#3BBDE8', color: '#fff', boxShadow: '0 4px 20px rgba(59,189,232,0.25)' }}>
              Start a 10-Minute Lesson
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Zap,        label: 'Fits any schedule' },
                { icon: Smartphone, label: 'Works on any device' },
                { icon: Bookmark,   label: 'Pick up where you left off' },
              ].map(p => (
                <span key={p.label} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-slate-200 bg-white text-slate-600">
                  <p.icon size={11} className="text-slate-400" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — lesson list */}
          <div className="px-8 py-12 flex flex-col gap-2.5 justify-center border-l border-slate-100 bg-white">
            {[
              { min: 8,  title: 'Anticoagulant Therapy Essentials',  sub: 'Pharmacology · Warfarin, Heparin, DOACs',  tag: 'Video',       tagIcon: Video,    tc: '#1A6FB5', tb: '#EBF5FF' },
              { min: 10, title: 'Recognizing Sepsis Early',           sub: 'Critical Care · SIRS criteria, qSOFA',     tag: 'Podcast',     tagIcon: Mic,      tc: '#7B5EA7', tb: '#EDE8F7' },
              { min: 7,  title: 'ABG Interpretation — 5-Step Method', sub: 'Respiratory · Acid-base balance',          tag: 'Video',       tagIcon: Video,    tc: '#1A6FB5', tb: '#EBF5FF' },
              { min: 5,  title: 'Insulin Types Cheat Sheet',          sub: 'Endocrine · Onset, peak, duration',        tag: 'Cheat Sheet', tagIcon: FileText, tc: '#D48806', tb: '#FEF3DC' },
              { min: 12, title: 'NCLEX Prioritization Practice Set',  sub: '10 MCQs with full rationales',             tag: 'Quiz',        tagIcon: Brain,    tc: '#0A5C36', tb: '#D4F5E9' },
            ].map(l => (
              <div key={l.title} className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all">
                <div className="w-11 h-11 rounded-xl flex flex-col items-center justify-center flex-shrink-0 border border-slate-200 bg-white">
                  <span className="text-base font-extrabold leading-none text-brand-navy">{l.min}</span>
                  <span className="text-[9px] font-bold text-slate-400">min</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-brand-navy truncate">{l.title}</p>
                  <p className="text-xs truncate text-slate-400">{l.sub}</p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold flex-shrink-0"
                  style={{ background: l.tb, color: l.tc }}>
                  <l.tagIcon size={9} />
                  {l.tag}
                </span>
              </div>
            ))}
            <div className="mt-1 px-4 py-3 rounded-xl border border-slate-100 bg-slate-50 flex items-center gap-3">
              <Activity size={16} className="text-slate-400 flex-shrink-0" />
              <p className="text-xs leading-relaxed text-slate-400">
                Designed for nurses on break, between patients, or commuting — learn anywhere in 10 minutes or less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why UNA Prep ── */}
      <section ref={whyRef} className="py-24 bg-white relative overflow-hidden" id="why">
        <div className="parallax-blob absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 45% 45%,rgba(59,189,232,0.07) 0%,transparent 65%)',
            transform: `translateY(${whyOffset}px)`, animation: 'blob-float 14s ease-in-out infinite' }} />
        <div className="parallax-blob absolute -bottom-16 -right-16 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 55% 55%,rgba(123,94,167,0.06) 0%,transparent 65%)',
            transform: `translateY(${-whyOffset * 0.8}px)`, animation: 'blob-float-alt 10s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border pointer-events-none"
          style={{ borderColor: 'rgba(59,189,232,0.04)',
            transform: `translate(-50%,-50%) translateY(${whyOffset * 0.5}px) rotate(${whyOffset * 0.1}deg)` }} />
        <div className="absolute bottom-10 left-[15%] w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
          style={{ borderColor: 'rgba(232,96,74,0.15)', animation: 'ring-rev 30s linear infinite',
            transform: `translateY(${-whyOffset * 0.6}px)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5"
              style={{ color: '#3BBDE8', borderColor: 'rgba(59,189,232,0.3)', background: 'rgba(59,189,232,0.06)' }}>
              <Zap size={11} />
              Why nurses choose UNA Prep
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">Real Clinical Scenarios</h2>
            <p className="text-slate-500 max-w-md mx-auto">Learn through realistic patient situations that prepare you for exams and real nursing practice.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              {whyFeatures.map(f => (
                <div key={f.title} className="bg-white border border-slate-100 rounded-2xl p-5 flex gap-4 items-start transition-all hover:border-slate-200 hover:shadow-md group">
                  <IconBox icon={f.icon} bg={f.bg} color={f.iconColor} />
                  <div>
                    <p className="text-sm font-bold text-slate-800 mb-1 group-hover:text-brand-navy transition-colors">{f.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#3BBDE8' }}>Example clinical scenario</p>
              <p className="text-base font-extrabold text-brand-navy mb-4">Patient on Warfarin</p>
              {[
                { text: 'INR = 6.2', color: '#E8604A' },
                { text: 'Bleeding gums', color: '#F5A623' },
                { text: 'Petechiae present', color: '#F5A623' },
              ].map(f => (
                <div key={f.text} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white border border-slate-100 mb-2 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: f.color }} />
                  {f.text}
                </div>
              ))}
              <div className="mt-5 p-4 rounded-xl text-sm font-semibold text-slate-800 border-l-4 bg-blue-50 flex items-center gap-2"
                style={{ borderColor: '#3BBDE8' }}>
                <HelpCircle size={14} style={{ color: '#3BBDE8', flexShrink: 0 }} />
                What should the nurse do first?
              </div>
              <p className="mt-5 text-xs text-slate-400 leading-relaxed border-t border-slate-100 pt-4">
                Practice prioritization, safety, and clinical judgment. UNA Prep teaches you the <em>why</em> behind every answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Topics ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
            <Brain size={11} />
            High-yield nursing concepts
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">
            Core nursing topics, exam-focused lessons.
          </h2>
          <p className="mb-10 font-light text-lg max-w-lg text-slate-500">
            Every topic is broken into short, high-yield lessons built for busy nurses and students.
          </p>
          <div className="flex flex-wrap gap-3">
            {topics.map(t => (
              <span key={t.label} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 cursor-default transition-all hover:border-slate-300 hover:shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Multimedia ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
              <Mic size={11} />
              Learn faster with multimedia
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">
              Videos, podcasts &amp; cheat sheets — all in one place
            </h2>
            <p className="text-slate-500 max-w-md mx-auto">Short-form content designed for nurses on the go — learn in 5 minutes or 50, your call.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Video card — light */}
            <div className="rounded-3xl p-8 border border-slate-100 shadow-sm bg-slate-50">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: '#D5F1FB', border: '1px solid rgba(59,189,232,0.2)' }}>
                <Video size={22} style={{ color: '#3BBDE8' }} />
              </div>
              <h3 className="text-lg font-extrabold text-brand-navy mb-1">Short Clinical Videos</h3>
              <p className="text-sm text-slate-400 mb-6">Quick visual explanations designed for busy nurses.</p>
              <div className="space-y-2">
                {[
                  { title: 'Anticoagulant Therapy in 5 Minutes', dur: '5:12' },
                  { title: 'How to Recognize Sepsis Early',      dur: '7:04' },
                  { title: 'ABG Interpretation Simplified',      dur: '6:28' },
                  { title: 'Chest Tube Nursing Care',            dur: '8:51' },
                  { title: 'Insulin Safety Essentials',          dur: '5:40' },
                ].map(v => (
                  <div key={v.title} className="flex items-center gap-3 px-3.5 py-3 rounded-xl border border-slate-100 bg-white text-sm text-slate-700 hover:border-slate-200 hover:shadow-sm transition-all cursor-default">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: '#D5F1FB' }}>
                      <Play size={10} style={{ color: '#3BBDE8' }} />
                    </div>
                    <span className="flex-1 truncate">{v.title}</span>
                    <span className="text-xs flex-shrink-0 font-medium text-slate-400">{v.dur}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Podcast card */}
            <div className="rounded-3xl p-8 bg-white border border-slate-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-brand-blue/10">
                <Mic size={22} className="text-brand-blue" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-navy mb-1">Nursing Podcasts</h3>
              <p className="text-sm text-slate-400 mb-6">Learn while driving, cooking, or during breaks.</p>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Conversation between</p>
                {[
                  { initials: 'NE', name: 'Nurse Educator',    bg: '#1A6FB5' },
                  { initials: 'RN', name: 'Experienced Nurse', bg: '#18B89A' },
                ].map(s => (
                  <div key={s.name} className="flex items-center gap-2.5 mb-2 text-sm text-slate-700">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                      style={{ background: s.bg }}>{s.initials}</div>
                    {s.name}
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[
                  { label: 'Critical Care Basics',    color: '#E8604A' },
                  { label: 'Medication Safety',       color: '#F5A623' },
                  { label: 'ECG Interpretation',      color: '#3BBDE8' },
                  { label: 'Psychiatric Nursing',     color: '#7B5EA7' },
                  { label: 'NCLEX Clinical Judgment', color: '#18B89A' },
                ].map(t => (
                  <div key={t.label} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
                    {t.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MCQ Practice ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
              <FileText size={11} />
              Practice NCLEX-style questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">Train Your Clinical Thinking</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Every question comes with a full rationale, safety context, common mistakes, and memory tricks to reinforce learning.</p>
          </div>

          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 items-start">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.05)]">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-5 text-brand-blue">Sample NCLEX-Style MCQ</p>
              <div className="text-sm font-semibold leading-relaxed mb-6 p-4 rounded-xl border-l-4 bg-blue-50 text-slate-800"
                style={{ borderColor: '#3BBDE8' }}>
                A patient receiving heparin suddenly develops hematuria. What is the nurse's priority action?
              </div>
              <div className="space-y-2.5 mb-5">
                {[
                  { letter: 'A', text: 'Increase IV fluids',               state: 'neutral' },
                  { letter: 'B', text: 'Hold heparin and notify provider', state: 'correct' },
                  { letter: 'C', text: 'Administer vitamin K',             state: 'neutral' },
                  { letter: 'D', text: 'Encourage ambulation',             state: 'wrong'   },
                ].map(opt => (
                  <div key={opt.letter} className={`flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] text-sm font-medium ${
                    opt.state === 'correct' ? 'bg-green-50 border-green-300 text-green-900'
                    : opt.state === 'wrong'   ? 'bg-red-50 border-red-200 text-red-800'
                    : 'bg-white border-slate-100 text-slate-700'
                  }`}>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0 ${
                      opt.state === 'correct' ? 'bg-green-500 text-white'
                      : opt.state === 'wrong'   ? 'bg-red-400 text-white'
                      : 'bg-slate-100 text-slate-500'
                    }`}>{opt.letter}</span>
                    {opt.text}
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl border bg-green-50 border-green-200">
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-green-800 mb-1.5">
                  <CheckCircle size={11} /> Correct Answer: B — Rationale
                </div>
                <p className="text-xs text-green-800 leading-relaxed">
                  Hematuria signals active bleeding — a serious heparin complication. Stop the anticoagulant immediately and notify the provider. Vitamin K reverses warfarin, not heparin; protamine sulfate reverses heparin.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {mcqFeatures.map(f => (
                <div key={f.title} className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all">
                  <IconBox icon={f.icon} bg={f.iconBg} color={f.iconColor} />
                  <div>
                    <p className="text-sm font-bold text-brand-navy mb-1">{f.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cheat Sheets ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5"
            style={{ color: '#3BBDE8', borderColor: 'rgba(59,189,232,0.3)', background: 'rgba(59,189,232,0.06)' }}>
            <FileText size={11} />
            Cheat sheets nurses actually use
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">Fast Review. Maximum Retention.</h2>
          <p className="mb-12 font-light text-lg max-w-lg text-slate-500">
            Concise, visual reference sheets covering the highest-yield nursing content — always at your fingertips.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {cheatSheets.map(c => {
              const Icon = c.icon
              return (
                <div key={c.name} className="rounded-2xl p-5 border border-slate-100 bg-slate-50 cursor-default transition-all hover:-translate-y-1 hover:shadow-md hover:border-slate-200 hover:bg-white group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: c.iconBg }}>
                    <Icon size={18} style={{ color: c.iconColor }} />
                  </div>
                  <p className="text-sm font-semibold text-brand-navy mb-2 leading-snug">{c.name}</p>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-slate-500 bg-slate-100">{c.badge}</span>
                </div>
              )
            })}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-slate-400">Perfect for:</span>
            {['Last-minute revision', 'Clinical rotations', 'Shift review', 'Exam preparation'].map(t => (
              <span key={t} className="px-4 py-1.5 rounded-full border border-slate-200 text-sm text-slate-600 bg-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessments ── */}
      <section ref={assessRef} className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="parallax-blob absolute top-10 right-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%,rgba(34,192,122,0.07) 0%,transparent 65%)',
            transform: `translateY(${assessOffset}px)`, animation: 'blob-float 13s ease-in-out infinite' }} />
        <div className="parallax-blob absolute -bottom-20 left-[8%] w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%,rgba(59,189,232,0.06) 0%,transparent 65%)',
            transform: `translateY(${-assessOffset * 0.7}px)`, animation: 'blob-float-alt 11s ease-in-out 1s infinite' }} />
        <div className="absolute top-1/4 left-[3%] w-28 h-28 rounded-full border border-dashed pointer-events-none"
          style={{ borderColor: 'rgba(34,192,122,0.14)',
            transform: `translateY(${assessOffset * 0.5}px) rotate(${-assessOffset * 0.15}deg)` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
              <BarChart3 size={11} />
              Assessments that measure real progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">Adaptive Assessments</h2>
            <p className="text-slate-500 max-w-md mx-auto">Track accuracy, weak areas, clinical judgment, and time management — then use the data to improve.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-7">Performance analytics</p>
              {[
                { label: 'Accuracy',                 pct: 84, color: '#22C07A' },
                { label: 'Clinical Judgment',        pct: 72, color: '#2388D8' },
                { label: 'Pharmacology (weak area)', pct: 58, color: '#E8604A' },
                { label: 'Time Management',          pct: 67, color: '#F5A623' },
              ].map(t => (
                <div key={t.label} className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">{t.label}</span>
                    <span className="text-sm font-extrabold" style={{ color: t.color }}>{t.pct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: t.color }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {assessFeatures.map(f => {
                const Icon = f.icon
                return (
                  <div key={f.title} className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: f.iconBg }}>
                      <Icon size={17} style={{ color: f.iconColor }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{f.title}</p>
                      <p className="text-xs text-slate-500">{f.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle,rgba(148,163,184,0.18) 1px,transparent 1px)', backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at 50% 50%,black 40%,transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%,black 40%,transparent 80%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
              <Clock size={11} /> How UNA Prep works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">Six steps from scenario to mastery</h2>
          </div>

          {/* Step cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { n: 1, icon: Stethoscope,   title: 'Start with a Clinical Scenario', body: 'Real patient-based learning that immediately engages clinical reasoning.',              accentColor: '#3BBDE8', cardBg: 'rgba(59,189,232,0.06)',  iconBg: '#D5F1FB', iconColor: '#1A6FB5' },
              { n: 2, icon: BookOpen,       title: 'Learn the Concept',              body: 'Simple, nurse-focused explanations of the underlying pharmacology or clinical principle.', accentColor: '#1A6FB5', cardBg: 'rgba(26,111,181,0.05)',  iconBg: '#EBF5FF', iconColor: '#1A6FB5' },
              { n: 3, icon: Video,          title: 'Watch or Listen',                body: 'Video + podcast microlearning to reinforce the concept in your preferred format.',         accentColor: '#7B5EA7', cardBg: 'rgba(123,94,167,0.05)', iconBg: '#EDE8F7', iconColor: '#7B5EA7' },
              { n: 4, icon: FileText,       title: 'Practice MCQs',                  body: 'NCLEX-style questions with rationales to test understanding and build test confidence.',  accentColor: '#D48806', cardBg: 'rgba(212,136,6,0.05)',  iconBg: '#FEF3DC', iconColor: '#D48806' },
              { n: 5, icon: ClipboardList,  title: 'Review Cheat Sheets',            body: 'Quick memory reinforcement so key facts stick long after the lesson ends.',               accentColor: '#22C07A', cardBg: 'rgba(34,192,122,0.05)', iconBg: '#D4F5E9', iconColor: '#22C07A' },
              { n: 6, icon: BarChart3,      title: 'Take Assessment',                body: 'Measure your readiness and surface weak areas to target in your next study session.',      accentColor: '#E8604A', cardBg: 'rgba(232,96,74,0.05)',  iconBg: '#FDEAE6', iconColor: '#E8604A' },
            ].map(s => (
              <div key={s.n} className="relative rounded-3xl p-7 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group cursor-default"
                style={{ background: s.cardBg }}>

                {/* ghost watermark number */}
                <div className="absolute -top-5 -right-2 text-[108px] font-black leading-none select-none pointer-events-none"
                  style={{ color: s.accentColor, opacity: 0.08 }}>
                  {String(s.n).padStart(2, '0')}
                </div>

                {/* icon + step badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.iconBg }}>
                    <s.icon size={20} style={{ color: s.iconColor }} />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: s.iconBg, color: s.iconColor }}>
                    Step {s.n}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-brand-navy mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>

                {/* bottom accent bar — thickens on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl transition-all duration-300 group-hover:h-[5px]"
                  style={{ background: `linear-gradient(90deg,${s.accentColor} 0%,transparent 100%)` }} />
              </div>
            ))}
          </div>

          {/* Flow strip */}
        </div>
      </section>

      {/* ── Who is it for ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
            <Users size={11} />
            Built for modern nurses
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3 tracking-tight">Who is UNA Prep for?</h2>
          <p className="mb-10 font-light text-lg max-w-lg text-slate-500">
            Whether you're studying for NCLEX or refreshing your clinical knowledge on shift — UNA Prep is for you.
          </p>
          <div className="flex flex-wrap gap-3">
            {audience.map(w => {
              const Icon = w.icon
              return (
                <div key={w.label} className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-sm cursor-default"
                  style={{}}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: w.iconBg }}>
                    <Icon size={15} style={{ color: w.iconColor }} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{w.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section ref={ctaRef} className="py-28 text-center relative overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{ backgroundImage: 'radial-gradient(circle,#cbd5e1 1px,transparent 1px)', backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse at 50% 50%,black 40%,transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%,black 40%,transparent 80%)' }} />

        {/* parallax blobs */}
        <div className="parallax-blob absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 40%,rgba(59,189,232,0.10) 0%,rgba(59,189,232,0.03) 50%,transparent 68%)',
            transform: `translateY(${ctaOffset}px)`, animation: 'blob-float 16s ease-in-out infinite' }} />
        <div className="parallax-blob absolute -bottom-20 -right-20 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 55% 55%,rgba(232,96,74,0.08) 0%,rgba(232,96,74,0.02) 50%,transparent 68%)',
            transform: `translateY(${-ctaOffset * 0.8}px)`, animation: 'blob-float-alt 12s ease-in-out 1s infinite' }} />
        <div className="parallax-blob absolute top-1/2 right-[8%] w-[300px] h-[300px] rounded-full pointer-events-none -translate-y-1/2"
          style={{ background: 'radial-gradient(circle,rgba(123,94,167,0.07) 0%,transparent 65%)',
            transform: `translateY(calc(-50% + ${ctaOffset * 0.5}px))`, animation: 'blob-float 10s ease-in-out 3s infinite' }} />

        {/* decorative rings */}
        <div className="absolute top-10 right-[18%] w-48 h-48 rounded-full border border-dashed pointer-events-none"
          style={{ borderColor: 'rgba(59,189,232,0.12)', animation: 'ring-spin 50s linear infinite',
            transform: `translateY(${ctaOffset * 0.4}px)` }} />
        <div className="absolute bottom-12 left-[14%] w-32 h-32 rounded-full border border-dotted pointer-events-none"
          style={{ borderColor: 'rgba(232,96,74,0.12)', animation: 'ring-rev 35s linear infinite',
            transform: `translateY(${-ctaOffset * 0.3}px)` }} />
        {[
          { top:'15%', left:'6%',  d:7,  c:'#3BBDE8', delay:'0s'   },
          { top:'75%', left:'22%', d:5,  c:'#E8604A', delay:'1.2s' },
          { top:'25%', right:'6%', d:9,  c:'#7B5EA7', delay:'0.7s' },
          { top:'65%', right:'20%',d:6,  c:'#22C07A', delay:'2s'   },
        ].map((dot, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none"
            style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right,
              width: dot.d, height: dot.d, background: dot.c,
              animation: `dot-breathe 4s ease-in-out ${dot.delay} infinite` }} />
        ))}
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center mb-8">
            <Image src="/products/Una-prep.png" alt="UNA Prep" width={200} height={50} className="h-10 w-auto" />
          </div>
          <div className="inline-block px-4 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-widest mb-6 border"
            style={{ background: 'rgba(59,189,232,0.06)', borderColor: 'rgba(59,189,232,0.25)', color: '#3BBDE8' }}>
            Ready to learn smarter?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
            Join nurses using UNA Prep to improve clinical judgment, boost confidence, and prepare for exams faster.
          </h2>
          <p className="text-lg font-light text-slate-500 mb-10 leading-relaxed">
            Real scenarios. High-yield content. NCLEX-ready practice. Everything you need — in one platform built for nurses.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-105 hover:shadow-xl group"
              style={{ background: '#3BBDE8', color: '#fff', boxShadow: '0 4px 28px rgba(59,189,232,0.3)' }}>
              Start UNA Prep
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-semibold border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all">
              Explore Free Content
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-1.5">
            <ExternalLink size={13} />
            Launch here:{' '}
            <a href="https://prep.unahealth.com" target="_blank" rel="noopener noreferrer"
              className="font-semibold hover:underline" style={{ color: '#3BBDE8' }}>
              prep.unahealth.com
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
