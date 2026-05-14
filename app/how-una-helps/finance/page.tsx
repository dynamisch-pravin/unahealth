import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import ParallaxSection from '@/components/ParallaxSection'
import { CheckCircle, ArrowRight, TrendingDown, ClipboardCheck, UserCheck, Smartphone, Database, HeartPulse } from 'lucide-react'

const features = [
  {
    icon: TrendingDown,
    title: 'Reduced on-boarding costs',
    body: 'Streamlined competency testing and automated mandatory training dramatically reduce the time and resources required to get new hires work-ready — cutting per-hire costs across your organization.',
    bullets: ['Faster time-to-placement than legacy tools', 'Automated exam assignment & reminders', 'Lower administrative overhead per hire'],
  },
  {
    icon: ClipboardCheck,
    title: 'Efficient compliance management',
    body: 'Automated training and credentialing workflows help your organization avoid costly penalties and audit failures — ensuring regulatory compliance without manual follow-up.',
    bullets: ['CDC, OSHA & Joint Commission standards met', 'Automated alerts for expiring credentials', 'Audit-ready reporting at any time'],
  },
  {
    icon: UserCheck,
    title: 'Identifying top performers',
    body: "UNA's skills testing helps you hire and retain the highest-performing clinicians — reducing costly turnover and maximizing the return on your workforce investment.",
    bullets: ['Standardized competency scoring', 'Data-backed hiring decisions', 'Reduced turnover through better placement'],
  },
  {
    icon: Smartphone,
    title: 'Streamlined accessibility',
    body: "UNA's mobile-first platform enables exam and checklist completion from anywhere, anytime — reducing scheduling friction and increasing completion rates without additional cost.",
    bullets: ['Complete from any device, no app required', 'Higher completion rates than legacy platforms', 'No IT infrastructure investment needed'],
  },
  {
    icon: Database,
    title: 'Centralized data management',
    body: 'Cloud-based credential and compliance document storage consolidates all records in one place — simplifying audits, eliminating duplicate systems, and reducing storage costs.',
    bullets: ['Single source of truth for all credentials', 'Eliminate redundant documentation systems', 'Instant document retrieval for audits'],
  },
  {
    icon: HeartPulse,
    title: 'Enhanced patient outcomes',
    body: 'Well-trained, fully-credentialed staff reduces clinical errors and adverse events — protecting your organization from liability costs and strengthening your reputation for quality care.',
    bullets: ['Fewer adverse events from competency gaps', 'Reduced liability and malpractice exposure', 'Improved patient satisfaction scores'],
  },
]

export const metadata = createMetadata(
  'UNA for Finance Teams | Reduce Healthcare Staffing & Compliance Costs',
  'UNA helps healthcare finance teams cut onboarding costs, reduce compliance overhead, and maximize ROI through automated credential management.',
  '/how-una-helps/finance',
)

export default function FinancePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#E9384D 0%,rgba(233,56,77,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-[52%] pointer-events-none"
          style={{ background: 'linear-gradient(145deg,#f8fafc 0%,#f1f5f9 60%,#eef2f7 100%)' }} />
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(233,56,77,0.07) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                How UNA Helps: Finance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Optimize resources for{' '}
                <span className="text-brand-blue">long-term financial sustainability.</span>
              </h1>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                Are you struggling with cost control within your clinical operations? UNA offers tools
                to enhance your operational efficiency — so your dollars can be allocated where
                they&apos;re needed most.
              </p>
              <ul className="space-y-3 mb-10">
                {['Reduce onboarding & compliance costs', 'Eliminate manual credential tracking', 'Data-backed workforce investment decisions'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-lg group"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Started
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/resources/una-wallet"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 text-sm transition-all">
                  Explore UNA Wallet
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <Image
                  src="/finance/hero-finance.jpeg"
                  alt="Healthcare finance and operational efficiency"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-0 z-10 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                  <CheckCircle size={16} style={{ color: '#E9384D' }} />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-brand-navy leading-none">60%</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Faster placements</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border-2 border-brand-blue/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key metrics row ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: '60%', label: 'Faster placements vs. legacy tools' },
              { val: '50k+', label: 'Clinicians served on the platform' },
              { val: '15 min', label: 'Average CEU completion time' },
              { val: 'Zero', label: 'Redundant compliance systems needed' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col items-center gap-1 p-4">
                <span className="text-4xl font-extrabold text-brand-navy tracking-tight">{stat.val}</span>
                <span className="text-xs text-slate-500 leading-snug font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature grid ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5"
              style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.30)', backgroundColor: 'rgba(233,56,77,0.05)' }}>
              Built for Finance &amp; Operations
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Lower costs. Better outcomes.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              UNA eliminates the hidden costs of compliance gaps, high turnover, and inefficient onboarding —
              giving your finance team the operational leverage to invest where it matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title}
                  className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-lg hover:border-red-100 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: 'linear-gradient(90deg,#E9384D,rgba(233,56,77,0.2))' }} />
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(233,56,77,0.09)' }}>
                    <Icon size={22} style={{ color: '#E9384D' }} />
                  </div>
                  <h3 className="text-base font-extrabold text-brand-navy mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.body}</p>
                  <ul className="space-y-2">
                    {f.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                          <CheckCircle size={10} style={{ color: '#E9384D' }} />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ROI highlight strip ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.30)', backgroundColor: 'rgba(233,56,77,0.05)' }}>
                The ROI of Smarter Compliance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Stop the compliance cost<br className="hidden sm:block" /> bleed.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                Compliance failures, credential lapses, and high turnover are silent drains on your
                budget. UNA&apos;s automated workflows close those gaps — before they become penalties,
                vacancies, or adverse events.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Reduce per-hire onboarding spend',
                  'Avoid regulatory penalty exposure',
                  'Lower turnover through better fit hiring',
                  'Eliminate redundant compliance systems',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                      <CheckCircle size={13} style={{ color: '#E9384D' }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about/contact"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                style={{ color: '#E9384D' }}>
                Talk to our team
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '60%', label: 'Faster placements', sub: 'vs. legacy tools' },
                { value: '2,000+', label: 'Hospital networks', sub: 'trust UNA' },
                { value: '50k+', label: 'Clinicians served', sub: 'on the platform' },
                { value: '15 min', label: 'CEU completion', sub: 'average time' },
              ].map(stat => (
                <div key={stat.label} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-md transition-all">
                  <p className="text-3xl font-extrabold text-brand-navy mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-sm font-bold text-slate-700">{stat.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection pattern="dots" patternColor="#ffffff" patternOpacity={0.07} speed={0.2} className="rounded-3xl p-10 md:p-14 border" style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3a70 100%)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Why finance leaders choose UNA
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
                  Invest in efficiency.<br /> Sustain quality care.
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  UNA is a suite of comprehensive mobile-first solutions that help healthcare finance
                  teams control costs, reduce compliance risk, and allocate resources toward what
                  matters most — delivering excellent patient care.
                </p>
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all text-sm shadow-lg group"
                  style={{ backgroundColor: '#E9384D' }}>
                  Get Started
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: TrendingDown,   label: 'Cut onboarding costs' },
                  { icon: ClipboardCheck, label: 'Automate compliance' },
                  { icon: UserCheck,      label: 'Retain top performers' },
                  { icon: Database,       label: 'Centralize records' },
                  { icon: HeartPulse,     label: 'Improve patient outcomes' },
                  { icon: Smartphone,     label: 'Mobile-first, always ready' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3 rounded-xl p-3.5 border"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.10)' }}>
                    <Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#E9384D' }} />
                    <span className="text-xs text-slate-300 leading-snug font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>
      </section>

      <Stats />
      <ContactSection />
    </>
  )
}
