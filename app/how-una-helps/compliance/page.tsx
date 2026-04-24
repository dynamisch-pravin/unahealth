import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import ParallaxSection from '@/components/ParallaxSection'
import { CheckCircle, ArrowRight, Zap, UserCheck, ShieldCheck, Database, RefreshCw, Lock } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Rapid hiring and on-boarding',
    body: 'UNA integrates competency testing with automated workflows to reduce onboarding from weeks to days — enabling faster, practice-ready staff deployment.',
    bullets: ['Automated exam assignment', 'One-click onboarding bundles', 'Faster time-to-placement'],
  },
  {
    icon: UserCheck,
    title: 'Self-serve recruitment and credentialing',
    body: "UNA's platform maintains current certifications aligned with regulatory requirements — automatically keeping your talent pipeline up-to-date without manual intervention.",
    bullets: ['Automated credentialing workflows', 'Continuous certification tracking', 'No manual follow-ups required'],
  },
  {
    icon: ShieldCheck,
    title: 'Effortless regulatory adherence',
    body: 'UNA provides mandatory courses that meet CDC, OSHA, and The Joint Commission educational requirements — ensuring all staff are compliant with the latest standards.',
    bullets: ['CDC & OSHA compliant content', 'Joint Commission requirements met', 'Auto-updated to current standards'],
  },
  {
    icon: Database,
    title: 'Centralized for simplicity',
    body: 'Cloud-based document management consolidates all staff credentials and compliance documents in one place — accessible, searchable, and always audit-ready.',
    bullets: ['Centralized credential storage', 'Audit-ready reporting dashboard', 'Instant document retrieval'],
  },
  {
    icon: RefreshCw,
    title: 'Refocus on strategic initiatives',
    body: "Combined solutions reduce the administrative burden on compliance teams — freeing up your team's time and energy for initiatives that drive real organizational impact.",
    bullets: ['Eliminate manual tracking tasks', 'Automated expiration alerts', 'Reclaim hours for strategic work'],
  },
  {
    icon: Lock,
    title: 'Secure data handling',
    body: 'UNA ensures all compliance information is handled securely — protecting your organization\'s data integrity, confidentiality, and regulatory standing.',
    bullets: ['HIPAA-compliant data storage', 'Enterprise-grade encryption', 'Access restricted to authorized users'],
  },
]

export default function CompliancePage() {
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
                How UNA Helps: Compliance
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Reduce risk for patients<br className="hidden sm:block" />{' '}
                <span className="text-brand-blue">and your organization.</span>
              </h1>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                Are you struggling to ensure everyone on your clinical staff meets the required
                standards? UNA simplifies compliance — from automated credentialing to mandatory
                education — so nothing falls through the cracks.
              </p>
              <ul className="space-y-3 mb-10">
                {['Automated credentialing workflows', 'Meet CDC, OSHA & Joint Commission standards', 'HIPAA-compliant centralized records'].map(b => (
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
                  src="/compliance/hero-compliance.jpeg"
                  alt="Healthcare compliance and regulatory standards"
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
                  <p className="text-sm font-extrabold text-brand-navy leading-none">Auto</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Credential tracking</p>
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
              { val: 'Days', label: 'Not weeks — average onboarding time' },
              { val: 'Auto', label: 'Credential renewals & expiry alerts' },
              { val: '3×', label: 'Compliance standards covered (CDC, OSHA, JC)' },
              { val: '0', label: 'Compliance gaps with UNA in place' },
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
              Built for Compliance Teams
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Less risk. More confidence.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              UNA eliminates compliance gaps — automating the workflows that protect your patients,
              your staff, and your organization&apos;s regulatory standing.
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

      {/* ── Compliance highlight strip ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection pattern="dots" patternColor="#ffffff" patternOpacity={0.07} speed={0.2} className="rounded-3xl p-10 md:p-14 border" style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3a70 100%)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Why compliance teams choose UNA
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
                  Compliance that<br /> runs itself.
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  UNA is a suite of comprehensive mobile-first solutions for compliance teams —
                  automating credentialing, mandatory education, and record-keeping so your
                  organization is always audit-ready and regulation-compliant.
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
                  { icon: Zap,         label: 'Onboard in days, not weeks' },
                  { icon: UserCheck,   label: 'Automated credentialing' },
                  { icon: ShieldCheck, label: 'Meet regulatory standards' },
                  { icon: Database,    label: 'Centralized record storage' },
                  { icon: RefreshCw,   label: 'Reclaim admin hours' },
                  { icon: Lock,        label: 'HIPAA-compliant & secure' },
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
