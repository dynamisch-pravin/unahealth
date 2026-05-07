import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import { CheckCircle, ArrowRight, Share2, Shield, Smartphone, Award } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Testing Expertise',
    body: 'Our competency exams are written by practicing subject matter experts to parallel real scenarios. Have confidence in your skills as you step into any role.',
    bullets: ['Written by working practitioners', 'Real clinical scenario design', 'Continuously reviewed & updated'],
  },
  {
    icon: Share2,
    title: 'Own Your Results',
    body: 'Validated content means your testing results meet the requirements for any opportunity — taking the same exams for each new assignment is now a thing of the past.',
    bullets: ['One exam — accepted everywhere', 'Standardized across all organizations', 'Shareable credential packet'],
  },
  {
    icon: Shield,
    title: 'HIPAA-Level Security',
    body: 'While our platform is engineered to deliver lightning-fast results, enjoy peace of mind knowing that your data is protected by HIPAA-level security and privacy.',
    bullets: ['HIPAA-compliant data storage', 'Enterprise-grade encryption', 'Access restricted to you'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Platform',
    body: "UNA's mobile-first platform allows quick and easy access to all your competency exams, checklists, and regulatory courses — anytime, anywhere! Apply for opportunities any time they appear.",
    bullets: ['Access exams from any device', 'Complete checklists on-the-go', 'Apply to roles instantly'],
  },
]

export default function MyUnaPage() {
  return (
    <>
      {/* ── Hero ── light split layout */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#1AA896 0%,rgba(26,168,150,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-[52%] pointer-events-none"
          style={{ background: 'linear-gradient(145deg,#f8fafc 0%,#f1f5f9 60%,#eef2f7 100%)' }} />
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(26,168,150,0.07) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border"
                  style={{ color: '#1AA896', borderColor: 'rgba(26,168,150,0.30)', backgroundColor: 'rgba(26,168,150,0.05)' }}>
                  myUNA Candidate Portal
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                  Coming Soon
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Say goodbye to<br className="hidden sm:block" /> reassignments.
              </h1>

              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                Take control of your career with the myUNA Candidate Portal and one-time test taking.
                Your UNA account travels with you — so now your exam results do too.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-md group"
                  style={{ backgroundColor: '#1AA896' }}>
                  Get Early Access
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/resources/una-wallet"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all">
                  Explore UNA Wallet
                </Link>
              </div>

              <ul className="space-y-2.5">
                {['One exam — accepted everywhere', 'Share results with any organization instantly', 'Your career profile belongs to you'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(26,168,150,0.10)' }}>
                      <CheckCircle size={13} style={{ color: '#1AA896' }} />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: phones mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                  <Image
                    src="/products/wallet-share-clean.png"
                    alt="myUNA – Share Credentials Packet"
                    width={440}
                    height={440}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(26,168,150,0.25)' }} />
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full border-2 pointer-events-none"
                  style={{ borderColor: 'rgba(26,168,150,0.15)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Travel is tough ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1AA896' }}>
                One Exam. Every Opportunity.
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Travel is already tough enough.<br className="hidden sm:block" /> Testing shouldn't be.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                The myUNA candidate portal allows you to share competency testing between organizations with ease.
                Your UNA account travels with you — so now your exam results do too.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Effortlessly send out mandatories or any other required documentation{' '}
                <span className="font-semibold text-brand-navy">whenever opportunity knocks.</span>
              </p>
              <ul className="space-y-3">
                {[
                  'No more reassignments — take one exam, one time',
                  'Share results with any organization instantly',
                  'Mandatories and documents always ready to go',
                  'Your career profile belongs to you, not an employer',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#1AA896' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/products/wallet-share-phones.png"
                alt="myUNA – Share credentials between organizations"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1AA896' }}>
              Why myUNA?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">Built for clinicians on the move.</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Everything you need to manage your career — in one place, on any device.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map(f => {
              const Icon = f.icon
              return (
                <div key={f.title}
                  className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-all"
                  style={{ ['--hover-border' as string]: '#1AA896' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: 'rgba(26,168,150,0.1)' }}>
                    <Icon size={22} style={{ color: '#1AA896' }} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-5 text-sm">{f.body}</p>
                  <ul className="space-y-2">
                    {f.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={14} className="flex-shrink-0" style={{ color: '#1AA896' }} />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Profile showcase ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/products/lifestyle-wallet.png"
                alt="Healthcare professional using myUNA"
                width={580}
                height={380}
                className="w-full max-w-[580px] h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#1AA896' }}>
                Your Career, Your Way
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Your UNA account travels with you.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you're between assignments or actively placing into a new role, your entire credential
                history, exam results, and compliance documentation are always one tap away.
                Share a complete verified packet with any employer, at any time.
              </p>
              <div className="rounded-2xl p-6 border" style={{ backgroundColor: 'rgba(26,168,150,0.06)', borderColor: 'rgba(26,168,150,0.2)' }}>
                <p className="text-sm font-bold text-brand-navy mb-3">What's in your myUNA profile?</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Competency exam results', 'Skills checklists', 'Mandatory courses', 'Licenses & certifications', 'Employment history', 'CEU completions'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1AA896' }} />
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
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#0B4040' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* myUNA logo inline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image src="/products/myuna-logo.png" alt="myUNA" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-white">
              my<span style={{ color: '#4DD9C0' }}>Ü</span>NA
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Be the first to know when myUNA launches.</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            myUNA is actively in development. Register your interest and our team will reach out as soon as it's available.
          </p>
          <Link href="/about/contact"
            className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg group"
            style={{ backgroundColor: '#1AA896' }}>
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
