import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Partners from '@/components/Partners'
import { CheckCircle, ArrowRight, Zap, Monitor, Layers, Users, Video, UserCheck, TrendingUp } from 'lucide-react'

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

export const metadata = createMetadata(
  'Staffing Agencies | UNA Health',
  'UNA helps healthcare staffing agencies reduce onboarding drag, automate compliance, and make more placements with a mobile-first credentialing platform.',
  '/how-una-helps/staffing-agencies',
)

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
                UNA&apos;s mobile-first design improves candidate engagement and compliance. Reduce on-boarding drag and make more placements with UNA!
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md shadow-brand-blue/20 group transition-all"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Started with UNA
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
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

      {/* ── Section 1: Content you can trust ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Expert Validation Protocol
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Content you can trust...
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Testing offered by UNA is always kept up-to-date — written by subject matter experts
                and validated with real, true-to-life experience.
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
                className="w-full max-w-[520px] h-auto rounded-2xl shadow-2xl object-cover"
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
                className="w-full max-w-[520px] h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                ...that&apos;s made to be completed.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                UNA testing is designed for unrivaled user experience — boasting higher completion rates
                than other legacy products and in faster times.
              </p>
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
                End the never-ending paperwork hunt
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
                className="w-full max-w-[520px] h-auto rounded-2xl shadow-2xl object-cover"
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
                className="w-full max-w-[500px] h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                OpenAPI Integrations
              </span>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Plug and play — today!
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Our OpenAPI integrations mesh with your existing databases: Bullhorn,
                Credientially.io, and more. Every time an UNA clinician updates one of their
                credentials, it will automatically sync to your systems. Reduce data entry labor
                and user input error!
              </p>
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
              <p className="text-slate-500 leading-relaxed">
                Let&apos;s make it easier for them. Partner with UNA to create a smoother experience
                that encourages them to stay.
              </p>
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
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <Image
                src="/staffing/staffing-wallet-phones.png"
                alt="UNA Wallet — candidate credential management"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-8 leading-tight">The bottom line</h2>
              <ul className="space-y-6">
                {[
                  { Icon: Users,      text: 'Reclaim administrative hours' },
                  { Icon: Video,      text: 'Make more placements, faster' },
                  { Icon: UserCheck,  text: 'Improve client satisfaction with the best candidates' },
                  { Icon: TrendingUp, text: 'Meet market demand and foster agency growth' },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
                      <Icon size={20} className="text-slate-500" />
                    </div>
                    <span className="text-base font-semibold italic text-brand-navy">{text}</span>
                  </li>
                ))}
              </ul>
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
