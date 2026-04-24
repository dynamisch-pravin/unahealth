import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import { CheckCircle, ArrowRight, Brain, Heart, ShieldCheck, Users, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Comprehensive Behavioral Analysis',
    body: 'Covers a wide range of behavioral constructs, allowing you to prioritize the organizational values that matter most to your team culture and patient outcomes.',
    bullets: ['Wide-range construct coverage', 'Organizational value alignment', 'Customizable priority weighting'],
  },
  {
    icon: Heart,
    title: 'Tailored for Healthcare Professionals',
    body: 'Designed specifically for patient-facing roles, focusing on patient care and satisfaction attributes unique to clinical environments.',
    bullets: ['Patient-facing role optimization', 'Care & satisfaction focused', 'Clinical environment context'],
  },
  {
    icon: ShieldCheck,
    title: 'Validated for Reliability',
    body: 'Developed using rigorous item generation and validation processes by practicing subject matter experts, ensuring assessment accuracy you can trust.',
    bullets: ['Expert-validated methodology', 'Rigorous item generation', 'Proven reliability metrics'],
  },
  {
    icon: Users,
    title: 'Communication & Emotional Intelligence',
    body: 'Empathy is crucial to humane care. Evaluating emotional needs and communication styles helps build patient trust and improves quality of care.',
    bullets: ['Empathy scoring', 'Communication style profiling', 'Emotional intelligence assessment'],
  },
  {
    icon: TrendingUp,
    title: 'Reduce Turnover, Invest in Talent',
    body: 'By identifying candidates who align with your culture from day one, UNA Team helps you invest wisely in top talent and reduce the costly cycle of staff turnover.',
    bullets: ['Culture-fit identification', 'Turnover risk prediction', 'Talent investment insights'],
  },
]

export default function UnaTeamPage() {
  return (
    <>
      {/* ── Hero ── light split layout */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#EC4899 0%,rgba(236,72,153,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-[52%] pointer-events-none"
          style={{ background: 'linear-gradient(145deg,#f8fafc 0%,#f1f5f9 60%,#eef2f7 100%)' }} />
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(236,72,153,0.07) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border"
                  style={{ color: '#EC4899', borderColor: 'rgba(236,72,153,0.30)', backgroundColor: 'rgba(236,72,153,0.05)' }}>
                  UNA Team
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                  Coming Soon
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Find the power<br className="hidden sm:block" /> in personality.
              </h1>

              <p className="text-slate-500 leading-relaxed mb-3 max-w-lg">
                Do you keep losing staff because they&apos;re not aligned with your company values?
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                Measure candidates for the best fit with your culture with behavioral assessments —
                ensuring you&apos;re investing in the future of your organization.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-md group"
                  style={{ backgroundColor: '#EC4899' }}>
                  Get Early Access
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all">
                  Contact Sales
                </Link>
              </div>

              <ul className="space-y-2.5">
                {['Culture-fit assessment for every candidate', 'Reduce costly staff turnover from day one', 'Validated by subject matter experts'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(236,72,153,0.10)' }}>
                      <CheckCircle size={13} style={{ color: '#EC4899' }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: product mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                  <Image
                    src="/products/una-team.png"
                    alt="UNA Team – Behavioral assessments"
                    width={440}
                    height={440}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(236,72,153,0.25)' }} />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full border-2 pointer-events-none"
                  style={{ borderColor: 'rgba(236,72,153,0.15)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value proposition ── */}
      <section className="py-16" style={{ backgroundColor: 'rgba(236,72,153,0.05)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Behavior is the key to stickiness and stability.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            UNA Team behavioral assessments identify key skills and behaviors for success — both for individual
            roles and for your core organizational values. Ensuring the right fit ensures{' '}
            <strong className="text-brand-navy">enhanced interactions and overall satisfaction.</strong>
          </p>
        </div>
      </section>

      {/* ── Find talent that won't become turnover ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#EC4899' }}>
                Culture-Fit Hiring
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Find talent that won&apos;t<br className="hidden sm:block" /> become turnover.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                UNA Team behavioral assessments identify key skills and behaviors for success — both
                for individual roles and for your core organizational values.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Ensuring the right fit ensures enhanced interactions and overall satisfaction. Behavior
                is the key to unlocking stickiness and stability for enhanced staff success!
              </p>
              <ul className="space-y-3">
                {[
                  'Assess candidates for cultural alignment from day one',
                  'Reduce costly staff turnover with data-backed hiring',
                  'Invest in talent that fits — and stays',
                  'Identify internal opportunities within your organization',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#EC4899' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/products/una-team.png"
                alt="UNA Team behavioral assessment dashboard"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#EC4899' }}>
              Why UNA Team?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">Built for smarter healthcare hiring.</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Science-backed behavioral assessment tools designed specifically for healthcare organizations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title}
                  className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(236,72,153,0.10)' }}>
                    <Icon size={22} style={{ color: '#EC4899' }} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-5 text-sm">{f.body}</p>
                  <ul className="space-y-2">
                    {f.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={14} className="flex-shrink-0" style={{ color: '#EC4899' }} />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── What UNA Team measures ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/products/una-team.png"
                alt="UNA Team assessment results"
                width={540}
                height={360}
                className="w-full max-w-[540px] h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#EC4899' }}>
                What We Measure
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Empathy drives patient outcomes.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Empathy is crucial to humane care. By evaluating emotional needs and communication styles,
                UNA Team helps you identify healthcare professionals who will build patient trust and
                meaningfully improve quality of life.
              </p>
              <div className="rounded-2xl p-6 border" style={{ backgroundColor: 'rgba(236,72,153,0.05)', borderColor: 'rgba(236,72,153,0.2)' }}>
                <p className="text-sm font-bold text-brand-navy mb-3">Behavioral dimensions assessed:</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Empathy & compassion',
                    'Communication style',
                    'Emotional intelligence',
                    'Team collaboration',
                    'Stress resilience',
                    'Patient-centered values',
                    'Cultural alignment',
                    'Leadership potential',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#EC4899' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Soon CTA ── */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#1A0828' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(236,72,153,0.20)', color: '#EC4899' }}>
            Coming Soon
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Be first to experience UNA Team.</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            UNA Team is actively in development. Register your interest and our team will reach out as soon as
            behavioral assessments are available for your organization.
          </p>
          <Link href="/about/contact"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg group"
            style={{ backgroundColor: '#EC4899' }}>
            Get Early Access
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Stats />
      <ContactSection />
    </>
  )
}
