import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Partners from '@/components/Partners'
import { CheckCircle, ArrowRight, Zap, Monitor, Layers } from 'lucide-react'

const whyUna = [
  {
    icon: Zap,
    label: 'OPTIMIZED FOR THE MOBILE ERA',
    title: 'Unrivaled User Experience',
    body: 'Users report preferring UNA to manage their credentials and testing over our competitors. Simplicity and minimal design reduce cognitive load — preferred by 78% of millennials and 75% of baby boomers.',
  },
  {
    icon: Monitor,
    label: 'FASTER THAN EVER BEFORE',
    title: 'Leading-Edge Technology',
    body: 'The latest programming advancements allow UNA to respond and render quicker than legacy programming languages — making the entire process faster for your candidates and your team.',
  },
  {
    icon: Layers,
    label: 'DESIGNED FOR COMPETITIVE ADVANTAGE',
    title: 'Modern Aesthetics & Feel',
    body: 'Simplicity and minimal design reduce cognitive load, making interfaces easier to navigate — preferred by 78% of millennials and 75% of baby boomers. Beat competitors to the best candidates.',
  },
]

export default function StaffingAgenciesPage() {
  return (
    <>
      {/* ── Hero ── light split layout */}
      <section className="relative bg-white overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute top-0 right-0 bottom-0 w-[52%] bg-slate-50 pointer-events-none" />
        <div className="absolute top-0 left-0 bottom-0 w-[48%] pointer-events-none opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at 30% 50%, black 30%, transparent 75%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
                How UNA Helps: Staffing Agencies
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Stop chasing,{' '}
                <span className="text-brand-blue">start placing.</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                UNA&apos;s mobile-first design improves candidate engagement and compliance. Reduce on-boarding drag and make more placements.
              </p>
              <ul className="space-y-3 mb-10">
                {['Automated credential & license verification', 'Shared digital wallet for clinicians', 'Real-time compliance dashboards'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md shadow-brand-blue/20 group transition-all"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Started with UNA
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/resources/integrations"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all">
                  View Integrations
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <Image src="/staffing/hero-staffing.jpeg" alt="Healthcare staffing professionals" fill className="object-cover object-[center_30%]" priority sizes="(max-width:1024px) 90vw,45vw" />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border-2 border-brand-blue/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Suite intro banner ── */}
      <section className="py-10 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-semibold text-lg">
            UNA&apos;s mobile-first solutions help staffing agencies:
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {['Trust exam content', 'Boost completion rates', 'Eliminate paperwork', 'Sync with your ATS', 'Win top talent'].map(item => (
              <span key={item} className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border"
                style={{ color: 'rgba(255,255,255,0.80)', borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.07)' }}>
                <CheckCircle size={13} style={{ color: '#E9384D' }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Content you can trust ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Expert Validation Protocol
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-2 leading-tight">
                Content you can trust...
              </h2>
              <h3 className="text-2xl font-bold mb-5 leading-tight" style={{ color: '#E9384D' }}>
                ...that&apos;s made to be completed.
              </h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                Testing offered by UNA is always kept up-to-date — written by subject matter experts
                and validated with real, true-to-life experience.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                UNA testing is designed for unrivaled user experience — boasting higher completion rates
                than other legacy products and in faster times.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Written by practicing subject matter experts',
                  'Validated with real clinical scenarios',
                  'Higher completion rates than legacy platforms',
                  'Immediate results, every time',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/resources/expert-validation"
                  className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                  style={{ color: '#E9384D' }}>
                  Learn about Expert Validation <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/staffing/staffing-training.jpg"
                alt="Expert-validated clinical content"
                width={520}
                height={370}
                className="w-full max-w-[520px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Made to be completed ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/staffing/staffing-finish.jpg"
                alt="High completion rates with UNA Test"
                width={520}
                height={370}
                className="w-full max-w-[520px] h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Unrivaled User Experience
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Designed to get done.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                UNA&apos;s mobile-first design means candidates complete exams quicker and with less friction
                than legacy platforms. Higher completion rates mean fewer delays and faster placements for your team.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Higher completion rates than any competitor',
                  'Faster average time-to-complete',
                  'Mobile-first — no app download required',
                  'Intuitive UX preferred by 78% of millennials',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/resources/una-test"
                className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                style={{ color: '#E9384D' }}>
                Check out UNA Test <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: End the paperwork hunt ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Credential Management
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                End the never-ending paperwork hunt.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Consolidate your candidates&apos; application, documentation, and compliance needs in an
                all-in-one platform. UNA can become the single source for credentials. Plus, our
                mobile-focused design means candidates have their data with them anytime, anyplace.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'All credentials in one verified profile',
                  'Automated expiration tracking & alerts',
                  'Share with partner facilities in one click',
                  'Candidates update credentials — you get notified',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/resources/una-wallet"
                className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                style={{ color: '#E9384D' }}>
                Discover UNA Wallet <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/staffing/staffing-tech-issues.jpg"
                alt="End the paperwork and tech complexity"
                width={520}
                height={370}
                className="w-full max-w-[520px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Plug and play ── */}
      <section className="py-20 overflow-hidden relative" style={{ backgroundColor: '#0F2B5B' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.8\'%3E%3Cpath d=\'M0 30h15M45 30h15M30 0v15M30 45v15\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3Ccircle cx=\'0\' cy=\'30\' r=\'2\'/%3E%3Ccircle cx=\'60\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/svg%3E")', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/staffing/staffing-sync.jpg"
                alt="UNA OpenAPI sync across all your platforms"
                width={500}
                height={370}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                OpenAPI Integrations
              </span>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Plug and play — today!
              </h2>
              <p className="leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Our OpenAPI integrations mesh with your existing databases: Bullhorn,
                Credentially.io, and more. Every time a UNA clinician updates one of their
                credentials, it will automatically sync to your systems.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Reduce data entry labor and user input error — your ATS stays up-to-date automatically.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Bullhorn integration — out of the box',
                  'Credentially.io integration',
                  'Custom ATS/VMS via OpenAPI',
                  'Zero manual data entry required',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/resources/integrations"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all text-sm shadow-lg group"
                style={{ backgroundColor: '#E9384D' }}>
                Learn more about UNA and OpenAPI <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Talent drives the market ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Candidate Experience
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Talent drives the market.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Talent drives the market, and candidates value simplicity. Is the application process
                taking too long? Are they finding it difficult to upload a license or log into your platform?
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Let&apos;s make it easier for them. Partner with UNA to create a smoother experience
                that encourages them to stay.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Mobile-first UX candidates actually prefer',
                  'One profile — works across all your clients',
                  'Credentials always up-to-date and shareable',
                  'Faster placement = happier candidates',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/staffing/staffing-wallet-phones.png"
                alt="Candidate UNA Wallet experience"
                width={460}
                height={460}
                className="w-full max-w-[460px] h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: All in one ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/staffing/staffing-all-in-one.png"
                alt="UNA — all-in-one platform"
                width={500}
                height={380}
                className="w-full max-w-[500px] h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                One Platform
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Everything in one place.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                UNA brings together competency testing, skills checklists, mandatory courses, credential
                storage, and sharing — in one seamless, mobile-first platform your candidates will actually use.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Competency exams',
                  'Skills checklists',
                  'Mandatory courses',
                  'Credential storage',
                  'Document sharing',
                  'CEU management',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#E9384D' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why pick UNA ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
              Why Pick UNA?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">Built for competitive advantage.</h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Three reasons the best staffing agencies choose UNA over the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyUna.map(w => {
              const Icon = w.icon
              return (
                <div key={w.title} className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: 'rgba(233,56,77,0.08)' }}>
                    <Icon size={22} style={{ color: '#E9384D' }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#E9384D' }}>{w.label}</p>
                  <h3 className="text-base font-bold text-brand-navy mb-3">{w.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{w.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom line ── */}
      <section className="py-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">The bottom line.</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Stop chasing. Start placing. UNA gives your team the edge.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              'Reclaim administrative hours',
              'Make more placements, faster',
              'Improve client satisfaction with the best candidates',
              'Meet market demand and foster agency growth',
            ].map(item => (
              <div key={item} className="flex items-start gap-3 rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.09)' }}>
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#E9384D' }} />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/about/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg group"
              style={{ backgroundColor: '#E9384D' }}>
              Get Started with UNA
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <Partners />
      <ContactSection />
    </>
  )
}
