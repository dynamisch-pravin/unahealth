import Image from 'next/image'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Partners from '@/components/Partners'
import { CheckCircle, ArrowRight, Wallet, Share2, Smartphone, Bell } from 'lucide-react'
import Link from 'next/link'

export default function UnaWalletPage() {
  return (
    <>
      {/* ── Hero ── light split layout */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#0D9488 0%,rgba(13,148,136,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-0 right-0 bottom-0 w-[52%] pointer-events-none"
          style={{ background: 'linear-gradient(145deg,#f8fafc 0%,#f1f5f9 60%,#eef2f7 100%)' }} />
        <div className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(13,148,136,0.07) 0%,transparent 70%)', filter: 'blur(50px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6"
                style={{ color: '#0D9488', borderColor: 'rgba(13,148,136,0.30)', backgroundColor: 'rgba(13,148,136,0.05)' }}>
                <Wallet size={11} />
                UNA Wallet
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
                Credential management<br className="hidden sm:block" /> made easy.
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                Tired of updating your credentials on multiple platforms and apps? UNA Wallet has sync technology
                that keeps everything in one place — accessible 24/7 from any device.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-md group"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Your Free Wallet
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/how-una-helps/healthcare-professionals"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all">
                  Learn More
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HIPAA Compliant', '200+ Partner Organizations', '50k+ Clinicians'].map(t => (
                  <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-500">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                  <Image
                    src="/products/wallet-luis.png"
                    alt="UNA Wallet – Luis Martinez profile"
                    width={440}
                    height={440}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute bottom-4 -left-4 lg:-left-8 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-teal-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">All credentials</p>
                    <p className="text-sm font-bold text-brand-navy leading-tight">Always current</p>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border-2 border-dashed pointer-events-none"
                  style={{ borderColor: 'rgba(13,148,136,0.25)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Keep track ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <Wallet size={11} />
                Centralised Storage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Keep track of your<br className="hidden sm:block" /> credentials.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                Tired of updating your credentials on multiple platforms and apps? UNA Wallet has sync technology
                that allows you to update your license, CPR card, employment history, and more — all in one place.
              </p>
              <ul className="space-y-3 mb-10">
                {['Centralized credential storage', 'License & CPR card tracking', 'Employment history management', 'HIPAA-compliant security'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about/contact"
                className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                style={{ color: '#E9384D' }}>
                Create your free wallet <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex justify-center relative">
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                <Image
                  src="/products/wallet-ipad.png"
                  alt="UNA Wallet credentials dashboard on iPad"
                  width={460}
                  height={460}
                  className="w-full max-w-[460px] h-auto drop-shadow-xl rounded-3xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
                  <p className="text-xl font-extrabold text-brand-blue">50k+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Clinicians using UNA</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Share documents ── */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1 relative">
              <div className="relative w-full max-w-[520px]">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                  <Image
                    src="/products/lifestyle-wallet.png"
                    alt="Sharing credentials with UNA Wallet"
                    width={520}
                    height={360}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3">
                  <p className="text-2xl font-extrabold text-brand-blue">200+</p>
                  <p className="text-[11px] text-slate-500 font-medium">Partner organizations</p>
                </div>
                <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <Share2 size={11} />
                One-Click Sharing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Share your hiring<br className="hidden sm:block" /> documents.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                No more paper trails and email chains. UNA Wallet allows healthcare professionals to upload and
                share certifications, licenses, and other important documents anytime, anywhere.
              </p>
              <ul className="space-y-3 mb-10">
                {['One-click sharing with employers', 'Digital document submission', 'Accepted by 200+ partner organizations', 'Share across multiple platforms'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about/contact"
                className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                style={{ color: '#E9384D' }}>
                See employer integrations <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mobile lifestyles ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <Smartphone size={11} />
                Always Up to Date
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Made for mobile<br className="hidden sm:block" /> lifestyles.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                Life as a healthcare professional is always on-the-move — that&apos;s why UNA Wallet goes with you.
                Add work experience, vaccinations, and certifications instantly from your phone.
              </p>
              <ul className="space-y-3 mb-10">
                {['Mobile-first design', 'Works on any device', 'Add work experience & vaccinations instantly', 'Fast, intuitive interface'].map(item => (
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
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                <Image
                  src="/products/wallet-add-work.png"
                  alt="Adding work experience and vaccination in UNA Wallet"
                  width={440}
                  height={440}
                  className="w-full max-w-[440px] h-auto drop-shadow-xl rounded-3xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <Smartphone size={15} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">Access from</p>
                    <p className="text-sm font-bold text-brand-navy leading-tight">Any device</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stay on top of renewals ── */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1 relative">
              <div className="relative bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100/60 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                <Image
                  src="/products/wallet-luis.png"
                  alt="UNA Wallet – Luis Martinez full profile"
                  width={440}
                  height={440}
                  className="w-full max-w-[440px] h-auto drop-shadow-xl rounded-3xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Bell size={15} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-tight">Renewal alert</p>
                    <p className="text-sm font-bold text-brand-navy leading-tight">30 days ahead</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full border-2 border-dashed border-teal-300/40 pointer-events-none" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
                <Bell size={11} />
                Complete Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-5 leading-tight tracking-tight">
                Stay on top of<br className="hidden sm:block" /> renewals.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 max-w-[440px]">
                UNA Wallet will automatically send you reminders for credentials needing to be renewed, so you
                can meet all regulatory requirements and avoid lapses in compliance.
              </p>
              <ul className="space-y-3 mb-10">
                {['Automated expiration alerts', 'Renewal deadline tracking', 'Compliance status dashboard', 'Never miss a renewal again'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-brand-blue/10">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Mini stat row */}
              <div className="flex gap-4 pt-4 border-t border-slate-100">
                {[{ val: '24/7', lbl: 'Access anytime' }, { val: '0', lbl: 'Missed renewals' }, { val: 'Free', lbl: 'Always' }].map(s => (
                  <div key={s.lbl}>
                    <p className="text-xl font-extrabold text-brand-blue">{s.val}</p>
                    <p className="text-xs text-slate-400 font-medium">{s.lbl}</p>
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
