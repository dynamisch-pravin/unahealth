import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import { CheckCircle, ArrowRight, Zap, Clock, Users, BarChart3, RefreshCw } from 'lucide-react'

const features = [
  { icon: Zap,       title: 'Immediate Feedback and Learning',  body: 'By providing instant feedback on incorrect answers, candidates can quickly understand their areas of weakness and address knowledge gaps without lengthy delays.', bullets: ['Instant wrong-answer feedback', 'Bite-sized content snacks', 'Targeted knowledge gap remediation'] },
  { icon: Clock,     title: 'Streamlined Onboarding Process',   body: 'Candidates can rectify their shortcomings without lengthy delays, leading to faster integration into their roles. The entire process is fully automated — without anyone in admin lifting a finger!', bullets: ['Fully automated workflow', 'Automatic exam rescheduling', 'Zero admin intervention required'] },
  { icon: Users,     title: 'Enhanced Candidate Experience',    body: 'With instant remediation, candidates arrive at their job better prepared, having addressed any deficiencies in their knowledge. Higher confidence leads to better performance.', bullets: ['Improved retake success rates', 'Better candidate confidence', 'Higher first-day readiness'] },
  { icon: BarChart3, title: 'Data-Driven Hiring Decisions',     body: 'The tool provides valuable data on candidate strengths and weaknesses, enabling more informed hiring decisions and targeted training investments.', bullets: ['Candidate strength/weakness data', 'Hiring decision analytics', 'Training investment optimization'] },
  { icon: RefreshCw, title: 'Consistency in Standards',         body: 'UNA Air ensures all candidates are evaluated and remediated against the same standardized benchmarks, maintaining consistent clinical competency standards across your organization.', bullets: ['Standardized evaluation criteria', 'Consistent clinical benchmarks', 'Organization-wide quality assurance'] },
]

export const metadata = createMetadata(
  'UNA Air | Mandatory Courses for Healthcare Professionals',
  'UNA Air delivers the fastest mandatory compliance courses for healthcare professionals — complete CEUs, annual mandatories, and specialty courses from any device.',
  '/resources/una-air',
)

export default function UnaAirPage() {
  return (
    <>
      {/* ── Hero ── light split layout */}
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
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.30)', backgroundColor: 'rgba(233,56,77,0.05)' }}>
                <Zap size={11} />
                New Product Now Available
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Remediation made<br className="hidden sm:block" /> intelligent.
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                UNA Air (Automated Instant Remediation) is designed to drastically accelerate the on-boarding
                process, while ensuring the highest standards of clinical competency.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-md group"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Discover UNA Air
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <ul className="space-y-2.5">
                {['Instant wrong-answer feedback', 'Fully automated workflow', 'Zero admin intervention required'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                      <CheckCircle size={13} style={{ color: '#E9384D' }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                  <Image
                    src="/products/air-mockup.png"
                    alt="UNA Air remediation exam on tablet and phone"
                    width={440}
                    height={440}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 -left-4 lg:-left-6 z-10 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                    <CheckCircle size={16} style={{ color: '#E9384D' }} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-brand-navy leading-none">Instant</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Exam feedback</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(233,56,77,0.25)' }} />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full border-2 pointer-events-none"
                  style={{ borderColor: 'rgba(233,56,77,0.15)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What is UNA Air ── */}
      <section className="py-16 border-b border-slate-100" style={{ backgroundColor: 'rgba(233,56,77,0.04)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4 tracking-tight">Taking a bite out of the toughest testing.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            UNA Air identifies test-takers&apos; knowledge gaps and serves up{' '}
            <strong className="text-brand-navy">content snacks</strong> — bite-sized, targeted education refreshers —
            to improve retake success. Candidates are immediately scheduled for a new exam. All automated — without anyone in admin lifting a finger!
          </p>
        </div>
      </section>

      {/* ── Strike when it's hot ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.30)', backgroundColor: 'rgba(233,56,77,0.05)' }}>
                <Zap size={11} />
                Improve Retake Success
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Strike when it&apos;s hot.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                When a candidate fails an exam, UNA Air instantly serves up targeted remediation — courses and
                content snacks focused on exactly what they got wrong. Then it reschedules the retake while the
                material is still fresh, dramatically improving pass rates.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  { label: 'Improve retake success', desc: 'Address knowledge gaps in difficult testing' },
                  { label: "Strike when it's hot", desc: 'Reschedule exams while content is fresh' },
                  { label: 'Fully automated', desc: 'Streamlined process, zero admin intervention' },
                  { label: 'Zero admin burden', desc: 'No one needs to lift a finger' },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                      <CheckCircle size={13} style={{ color: '#E9384D' }} />
                    </div>
                    <span className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-800">{item.label}:</span> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center relative">
              <div className="relative w-full max-w-[520px]">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/products/lifestyle-air.jpeg"
                    alt="Healthcare professional using UNA Air on tablet"
                    width={520}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
                    <Zap size={15} style={{ color: '#E9384D' }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">Remediation</p>
                    <p className="text-sm font-bold text-brand-navy leading-tight">Instant & automated</p>
                  </div>
                </div>
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(233,56,77,0.25)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="py-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5"
              style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.30)', backgroundColor: 'rgba(233,56,77,0.05)' }}>
              Why UNA Air?
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">Five reasons intelligent remediation works.</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Transforming your hiring pipeline — automatically.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-white rounded-3xl p-7 border border-slate-100 hover:shadow-md hover:border-red-100 transition-all group">
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

      <Stats />
      <ContactSection />
    </>
  )
}
