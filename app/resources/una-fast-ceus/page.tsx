import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function UnaFastCeusPage() {
  return (
    <>
      {/* ── Hero ── light split layout */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#7C3AED 0%,rgba(124,58,237,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-[52%] pointer-events-none"
          style={{ background: 'linear-gradient(145deg,#f8fafc 0%,#f1f5f9 60%,#eef2f7 100%)' }} />
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.07) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                style={{ color: '#7C3AED', borderColor: 'rgba(124,58,237,0.30)', backgroundColor: 'rgba(124,58,237,0.05)' }}>
                UNA Fast CEUs
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Get up to speed<br className="hidden sm:block" /> and boost your<br className="hidden sm:block" /> expertise.
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                Need to keep your knowledge current and enhance your expertise while meeting regulatory requirements?
                With UNA Fast CEUs, you can manage your compliance and professional growth all in one place.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-md group"
                  style={{ background: 'linear-gradient(135deg,#7C3AED,#6D28D9)' }}>
                  Download 2024 Course Catalog
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <ul className="space-y-2.5 mb-8">
                {['ANCC accredited provider', 'Accepted by nursing boards in all 50 states', 'Short, focused modules — done in minutes'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(124,58,237,0.10)' }}>
                      <CheckCircle size={13} style={{ color: '#7C3AED' }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              {/* Powered by Colibri */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Powered by</span>
                <div className="rounded-lg px-4 py-2 border border-slate-200 bg-white">
                  <div className="relative w-32 h-7">
                    <Image src="/una-fast/colibri-logo.png" alt="Colibri Healthcare" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CEUs mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                  <Image
                    src="/una-fast/mockup-ceus.png"
                    alt="UNA Fast CEUs – Current Enrollments"
                    width={440}
                    height={440}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 -left-4 lg:-left-6 z-10 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] border border-slate-100 px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(124,58,237,0.10)' }}>
                    <CheckCircle size={16} style={{ color: '#7C3AED' }} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-brand-navy leading-none">15 min</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Avg. CEU time</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(124,58,237,0.25)' }} />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full border-2 pointer-events-none"
                  style={{ borderColor: 'rgba(124,58,237,0.15)' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ANCC Accreditation + Feature ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: ANCC badge */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 drop-shadow-xl">
                <Image
                  src="/una-fast/ancc-badge.png"
                  alt="ANCC Accredited Provider – American Nurses Credentialing Center"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right: copy */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Courses accepted by nursing boards in all states.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Ensure you're meeting the highest standard as an RN, LPN/LVN, or APRN with nursing continuing
                professional development content accredited by the American Nurses Credentialing Center.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'ANCC accredited provider',
                  'Accepted by nursing boards in all 50 states',
                  'Courses for RN, LPN/LVN, and APRN',
                  'Continually updated, expert-authored curriculum',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={17} className="text-purple-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about/contact"
                className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors text-sm">
                Download the 2024 Course Catalog <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Remediation tie-in ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: copy */}
            <div>
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Paired with UNA Air</span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Fast. Focused. Flexible.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Stay competitive and deliver the highest quality care to your patients! Complete courses in minutes,
                not hours — designed for busy healthcare professionals on the go. When combined with UNA Air, failed
                exams trigger instant targeted remediation so candidates re-test while the content is still fresh.
              </p>
              <ul className="space-y-3">
                {[
                  'Short, focused course modules — done in minutes',
                  'Complete on any device, anywhere',
                  'Automatic exam rescheduling via UNA Air',
                  'Track all progress in your UNA Wallet',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={17} className="text-brand-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: remediation mockup */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[460px]">
                <Image
                  src="/una-fast/mockup-air.png"
                  alt="UNA Air remediation – Medical Surgical RN Exam"
                  width={460}
                  height={460}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <ContactSection />
    </>
  )
}
