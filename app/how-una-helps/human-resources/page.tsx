import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import ParallaxSection from '@/components/ParallaxSection'
import { CheckCircle, ArrowRight, Search, Zap, Smartphone, ShieldCheck, TrendingUp, Database } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Identifying top candidates',
    body: "UNA's skills checklists and competency testing provide a clear picture for each candidate's current job knowledge and skills — allowing your team to select the best talent quickly and efficiently.",
    bullets: ['Specialty-specific competency exams', 'Skills checklists for clinical roles', 'Standardized scoring across all candidates'],
  },
  {
    icon: Zap,
    title: 'Optimized on-boarding',
    body: "Reduce the time and resources needed to get staff work-ready by leveraging UNA's competency assessments and mandatory training.",
    bullets: ['Assign exams and mandatories in one click', 'Automated reminders and follow-ups', 'Faster time-to-placement than legacy tools'],
  },
  {
    icon: Smartphone,
    title: 'Ease of accessibility',
    body: "UNA's mobile-first platform allows quick and easy completion of exams, checklists, and courses from anywhere, anytime — enhancing flexibility and convenience for new hires.",
    bullets: ['Complete from any device, anywhere', 'No app download required', 'Higher completion rates than legacy platforms'],
  },
  {
    icon: ShieldCheck,
    title: 'Effortless regulatory adherence',
    body: 'UNA provides mandatory courses that meet CDC, OSHA, and The Joint Commission educational requirements. This ensures that all staff are compliant with the latest regulations and standards.',
    bullets: ['CDC & OSHA compliant content', 'Joint Commission requirements met', 'Auto-updated to current standards'],
  },
  {
    icon: TrendingUp,
    title: 'Continuous professional growth',
    body: 'On-going access to continued education supports career development — helping to maintain a high standard of care and a positive work environment.',
    bullets: ['ANCC-accredited CEU courses', 'Powered by Colibri Healthcare', 'Fast, focused modules staff will complete'],
  },
  {
    icon: Database,
    title: 'Operational data management',
    body: 'UNA offers cloud-based document management for all staff credentials and compliance documents. This simplifies record-keeping — and provides actionable reports to make data-driven decisions.',
    bullets: ['Centralized cloud credential storage', 'Audit-ready reporting dashboard', 'Automated expiration tracking & alerts'],
  },
]

export const metadata = createMetadata(
  'UNA for Human Resources | Streamline Clinical Onboarding & Retention',
  "UNA helps healthcare HR teams accelerate onboarding, automate compliance tracking, and reduce turnover with the industry's leading credentialing platform.",
  '/how-una-helps/human-resources',
)

export default function HumanResourcesPage() {
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
                How UNA Helps: Human Resources
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Better recruiting and{' '}
                <span className="text-brand-blue">better support.</span>
              </h1>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                Do compliance and on-boarding dominate your HR team&apos;s time and energy? UNA simplifies
                testing and regulatory education, while making credential management effortless.
              </p>
              <ul className="space-y-3 mb-10">
                {['Identify top candidates faster', 'Accelerate onboarding from weeks to days', 'Centralized cloud credential management'].map(b => (
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
                <Link href="/resources/una-test"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 text-sm transition-all">
                  Explore UNA Test
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <Image
                  src="/nursing/hero-hr.jpeg"
                  alt="HR professionals discussing workforce management"
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
                  <p className="text-sm font-extrabold text-brand-navy leading-none">50%</p>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Faster onboarding</p>
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
              { val: '50%', label: 'Faster candidate screening to placement' },
              { val: '200+', label: 'Partner organizations in the UNA network' },
              { val: 'Zero', label: 'Manual credential follow-ups needed' },
              { val: '24/7', label: 'Access to all staff records, anywhere' },
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
              Built for HR Teams
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              Everything HR needs, nothing it doesn&apos;t.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              UNA streamlines every step — from candidate screening to ongoing compliance — so your HR team can focus on people, not paperwork.
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

      {/* ── Highlight strip: Mobile-first ── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxSection pattern="dots" patternColor="#ffffff" patternOpacity={0.07} speed={0.2} className="rounded-3xl p-10 md:p-14 border" style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3a70 100%)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Why HR teams choose UNA
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">
                  Less admin. More impact.
                </h2>
                <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  UNA is a suite of comprehensive mobile-first solutions for HR teams — better connecting
                  with candidates, improving engagement, optimizing compliance workflows, and setting a
                  new higher standard for your workforce.
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
                  { icon: Search,      label: 'Identify top talent faster' },
                  { icon: Zap,         label: 'Reduce onboarding drag' },
                  { icon: ShieldCheck, label: 'Stay fully compliant' },
                  { icon: TrendingUp,  label: 'Support career growth' },
                  { icon: Database,    label: 'Centralize all credentials' },
                  { icon: Smartphone,  label: 'Mobile-first, always ready' },
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
