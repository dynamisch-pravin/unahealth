import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Partners from '@/components/Partners'
import { CheckCircle, ArrowRight, FlaskConical, Award, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Clock, title: 'Skills checklists — faster than ever before',
    body: 'Our mobile-first platform lets healthcare professionals complete competency exams, skills checklists, and annual mandatories from home, work, or anywhere in between. Our updated framework allows checklists to be completed in 50% less time.',
    bullets: ['50% faster than legacy frameworks', 'Complete from any device, anywhere', '400k+ checklists completed'],
  },
  {
    icon: FlaskConical, title: 'Competency testing you can trust',
    body: 'UNA Test meets Joint Commission standards for competency evaluation. Our testing features high-fidelity patient care scenarios written by working practitioners.',
    bullets: ['Joint Commission compliant', 'Emergency Services & Critical Care', 'Obstetrics & Radiology modules', 'Immediate results'],
  },
  {
    icon: Award, title: 'Expertly validated',
    body: 'We are the only Healthcare Competency Testing company in the US that provides evidence of validation. All content is written by subject matter experts and reviewed by working practitioners.',
    bullets: ['Only company with evidence of validation', 'Subject matter expert authors', 'Reviewed by working practitioners', 'Continuously updated content'],
  },
  {
    icon: Shield, title: 'Reduce your risk with UNA!',
    body: 'Validating clinical competency before day one reduces onboarding risk, compliance gaps, and adverse patient events. Our testing data provides a clear, defensible record of clinician capability.',
    bullets: ['Defensible competency records', 'Reduced onboarding risk', 'Compliance documentation', 'Analytics & reporting dashboard'],
  },
]

export const metadata = createMetadata(
  'UNA Test | Clinical Competency Exams for Healthcare',
  'UNA Test delivers validated clinical competency exams built by practicing clinicians — with higher completion rates than legacy platforms.',
  '/resources/una-test',
)

export default function UnaTestPage() {
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
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <FlaskConical size={11} />
                UNA Test
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Checklists and competency<br className="hidden sm:block" /> in half the time.
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                Our mobile-first platform lets healthcare professionals complete competency exams, skills checklists,
                and annual mandatories from home, work, or anywhere in between.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-md group bg-brand-blue hover:bg-brand-blue/90">
                  Learn More About UNA Test
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <ul className="space-y-2.5">
                {['50% faster than legacy frameworks', 'Complete from any device, anywhere', 'Joint Commission compliant'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={13} className="text-brand-blue" />
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
                    src="/products/test-emily.png"
                    alt="UNA Test – Emily Appleson profile with exams and checklists"
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
                    <p className="text-sm font-extrabold text-brand-navy leading-none">50%</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Faster than legacy tools</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed border-brand-blue/25 pointer-events-none" />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full border-2 border-brand-blue/15 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Exam in action ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <FlaskConical size={11} />
                Exam Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Real clinical scenarios.<br />Immediate results.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                UNA Test exams are written by working practitioners and validated against real-world clinical
                competency. Candidates see their results instantly — with category-level breakdowns that show
                exactly where they excelled or need improvement.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  'Interactions & Contraindications modules',
                  'Dosage Calculations & patient scenarios',
                  'Timed exams with exit tracking',
                  'Immediate category-level score breakdown',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center relative">
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                <Image
                  src="/products/test-exam-phone.png"
                  alt="UNA Test exam question on mobile"
                  width={300}
                  height={520}
                  className="w-full max-w-[300px] h-auto drop-shadow-xl rounded-3xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
                  <p className="text-xl font-extrabold text-brand-blue">400k+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Checklists completed</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Expert Validation ── */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1 relative">
              <div className="relative w-full max-w-[520px]">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/products/lifestyle-test.jpeg"
                    alt="Healthcare professional using UNA Test on mobile"
                    width={520}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2.5">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image src="/products/una-certified-badge.png" alt="UNA Certified" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">UNA Certified</p>
                    <p className="text-sm font-bold text-brand-navy leading-tight">Expert Validated</p>
                  </div>
                </div>
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <Award size={11} />
                Expert Validation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                The only testing company with evidence of validation.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                All UNA Test content is written by subject matter experts and reviewed by working practitioners.
                We are the only healthcare competency testing company in the US that provides documented evidence
                of validation under the UNA Certified Expert Validation Protocol™.
              </p>
              <ul className="space-y-3 mb-10">
                {['Evidence of validation provided', 'Subject matter expert authors', 'Working practitioner review', 'Continuously updated content'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-5 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
              <Shield size={11} />
              Why UNA Test?
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">Built for clinical excellence.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-brand-blue/20 hover:shadow-md hover:bg-white transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue/15 transition-colors">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="text-base font-extrabold text-brand-navy mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{f.body}</p>
                  <ul className="space-y-2">
                    {f.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                          <CheckCircle size={10} className="text-brand-blue" />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Specialties */}
          <div className="rounded-3xl p-10 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3a70 100%)' }}>
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
              style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Testing available across all major specialties</h3>
              <p className="text-slate-300 mb-8">Immediate results for every exam module.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Emergency Services', 'Critical Care', 'Obstetrics', 'Radiology', 'Med-Surgical', 'Pediatrics', 'Oncology', 'Home Health'].map(s => (
                  <div key={s} className="bg-white/10 hover:bg-white/20 rounded-2xl px-4 py-3.5 transition-colors border border-white/10">
                    <p className="text-white text-sm font-semibold">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Partners />
      <ContactSection />
    </>
  )
}
