import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import Stats from '@/components/Stats'
import ParallaxSection from '@/components/ParallaxSection'
import { CheckCircle, ArrowRight, ShieldAlert, AlertTriangle, XCircle } from 'lucide-react'

const redFlags = [
  "Your testing provider claims their content is \"nationally validated\", but can't clearly articulate their validation methodology.",
  'Your testing is validated by an "advisory board" or "committee" without subject matter experience.',
  "Your testing board claims its 20 members can validate over 200 clinical specialties.",
  "Your testing provider takes over 24 hours to provide a technical report of empirical evidence for any exam you use frequently.",
  "Your testing provider can't provide evidence of exam content having been updated within the last 3 years (minimum).",
  "Your testing provider sets their standard score for passing at 80%.",
]

const evpPillars = [
  {
    step: '01',
    title: 'Job Task Analysis',
    body: 'Practicing subject matter experts identify critical job duties, knowledge, skills, and abilities specific to each clinician specialty.',
  },
  {
    step: '02',
    title: 'Item Generation',
    body: 'Those same experts create test items directly based on the key findings — ensuring content reflects real clinical scenarios.',
  },
  {
    step: '03',
    title: 'Empirical Validation',
    body: 'Each exam is rigorously reviewed and validated against empirical evidence to ensure accuracy, fairness, and legal defensibility.',
  },
  {
    step: '04',
    title: 'Continuous Review',
    body: 'Content is continuously monitored and updated to reflect the latest clinical standards — never stale, always current.',
  },
]

export const metadata = createMetadata(
  'Expert Validation Protocol | UNA Health',
  "UNA's Expert Validation Protocol ensures every competency exam is written by practicing clinicians and validated with real-world scenarios healthcare organizations can trust.",
  '/resources/expert-validation',
)

export default function ExpertValidationPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-slate-100">
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
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.30)', backgroundColor: 'rgba(233,56,77,0.05)' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#E9384D' }} />
                Resources: Expert Validation Protocol
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Trust the tests{' '}
                <span style={{ color: '#E9384D' }}>you take.</span>
              </h1>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                Testing offered by UNA is always kept up-to-date — written by subject matter experts
                and validated with real, true-to-life experience.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
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
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] flex items-center justify-center">
                <Image
                  src="/evp/evp-badge.png"
                  alt="UNA Certified Expert Validation Protocol badge"
                  width={280}
                  height={320}
                  className="w-full max-w-[220px] lg:max-w-[260px] h-auto"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-slate-200 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border-2 border-slate-100 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── What is validation ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                The Foundation
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                What is validation?
              </h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                Validity measures effectiveness. Validation ensures content is <strong className="text-slate-700">job-related</strong>,{' '}
                <strong className="text-slate-700">fair for all</strong>,{' '}
                <strong className="text-slate-700">necessary on the first day</strong>, and{' '}
                <strong className="text-slate-700">essential for safe and effective performance</strong>.
              </p>
              <p className="text-slate-500 leading-relaxed mb-5">
                UNA Test uses <strong className="text-slate-700">Expert Validation Protocol (EVP)</strong>, where practicing subject matter
                experts identify critical job duties, knowledge, skills, and abilities in their clinician specialty. These experts then create
                test items directly based on those key findings.
              </p>
              <p className="text-slate-500 leading-relaxed">
                The EVP process is rigorous to ensure your assessments are <strong className="text-slate-700">legally defensible</strong> and
                accurately determine baseline competency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Job-Related', desc: 'Content directly tied to real clinical duties' },
                { label: 'Fair for All', desc: 'Unbiased, standardized across all candidates' },
                { label: 'Day-One Ready', desc: 'Covers what staff need from their very first shift' },
                { label: 'Legally Defensible', desc: 'Backed by empirical evidence and formal methodology' },
              ].map(item => (
                <div key={item.label} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <CheckCircle size={20} className="mb-3" style={{ color: '#E9384D' }} />
                  <p className="font-bold text-brand-navy text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EVP Process steps ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
              The EVP Process
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">
              How UNA validates every exam.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Every UNA Test exam follows a rigorous four-step process developed and executed by
              practicing clinical subject matter experts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evpPillars.map(pillar => (
              <div key={pillar.step} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md hover:border-red-100 transition-all">
                <div className="text-4xl font-black mb-4 leading-none" style={{ color: 'rgba(233,56,77,0.15)' }}>
                  {pillar.step}
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why validation matters / legal risk ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/evp/evp-risk-meter.png"
                alt="Risk meter showing Safe, Caution, and Risky zones for testing validation"
                width={500}
                height={340}
                className="w-full max-w-[500px] h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Legal Protection
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Why is validation important?
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Validation is crucial — and not just a buzzword.{' '}
                <strong className="text-slate-700">Validity helps protect you from legal risk.</strong>
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                When testing providers say their content is validated, it means each and every test was created
                using a formal methodology backed by empirical evidence.
              </p>
              <p className="text-slate-500 leading-relaxed">
                This supporting evidence is <strong className="text-slate-700">necessary</strong> if an employer
                faces legal challenges for discriminatory hiring practices. Without it, your organization is exposed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Red flags ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5" style={{ backgroundColor: 'rgba(233,56,77,0.10)' }}>
              <ShieldAlert size={28} style={{ color: '#E9384D' }} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest block mb-3" style={{ color: '#E9384D' }}>
              Due Diligence
            </span>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Beware of red flags!
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Any of the following scenarios put your organization at increased risk. Ask your provider a few
              simple questions about the details of their content.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {redFlags.map((flag, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-red-100 shadow-sm">
                <div className="flex-shrink-0 mt-0.5">
                  <XCircle size={20} style={{ color: '#E9384D' }} />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{flag}</p>
              </div>
            ))}
          </div>

          <ParallaxSection pattern="rings" patternColor="#ffffff" patternOpacity={0.06} speed={0.2} className="mt-10 rounded-2xl p-8 text-center border" style={{ background: 'linear-gradient(135deg, #0F2B5B 0%, #1a3a70 100%)', borderColor: 'rgba(255,255,255,0.08)' }}>
            <AlertTriangle size={24} className="mx-auto mb-4" style={{ color: '#E9384D' }} />
            <p className="text-white font-semibold text-lg mb-2">UNA passes every one of these tests.</p>
            <p className="text-sm max-w-lg mx-auto mb-6" style={{ color: 'rgba(255,255,255,0.60)' }}>
              Every UNA exam is developed by practicing clinicians, updated regularly, and backed by
              documented empirical evidence available on request.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg group"
              style={{ backgroundColor: '#E9384D' }}>
              Request a Technical Report
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ParallaxSection>
        </div>
      </section>

      <Stats />
      <ContactSection />
    </>
  )
}
