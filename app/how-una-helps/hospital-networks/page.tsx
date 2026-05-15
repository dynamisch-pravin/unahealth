import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Partners from '@/components/Partners'
import { CheckCircle, ArrowRight, Search, FileCheck, Users, Zap, Layers, UserCircle } from 'lucide-react'

export const metadata = createMetadata(
  'Hospital Networks | UNA Health',
  'UNA helps hospital networks find top talent, eliminate compliance headaches, reduce turnover, and invest in staff development with one mobile-first platform.',
  '/how-una-helps/hospital-networks',
)

export default function HospitalNetworksPage() {
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
                How UNA Helps: Hospital Networks
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Hire the best of the best —{' '}
                <span className="text-brand-blue">and keep them</span>{' '}
                at the top of their game.
              </h1>
              <p className="text-base lg:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Struggling to finding the right new hires? Unsure of how to assess their knowledge gaps? Identify the best talent, train them to meet expectations, and retain their top-level skills with UNA!
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/about/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md shadow-brand-blue/20 group transition-all"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Started with UNA
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/resources/una-wallet"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all">
                  Explore UNA Wallet
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <Image src="/hospital/hero-hospital.jpeg" alt="Healthcare professionals at hospital" fill className="object-cover object-center" priority sizes="(max-width:1024px) 90vw,45vw" />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border-2 border-brand-blue/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Suite intro banner ── */}
      <section className="py-12 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-white font-semibold leading-relaxed">
            UNA&apos;s suite of comprehensive, mobile-first solutions allows your hospital network to:
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {['Find the right candidates', 'Eliminate compliance headaches', 'Reduce costly turnover', 'Invest in staff development'].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/80 bg-white/10 px-4 py-2 rounded-full border border-white/15">
                <CheckCircle size={14} style={{ color: '#E9384D' }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Focus on finding the right candidate ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div className="relative">
              {/* Decorative section number */}
              <span className="text-[120px] font-black text-slate-100 absolute -top-8 -left-4 select-none pointer-events-none leading-none">01</span>
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest flex items-center" style={{ color: '#E9384D' }}>
                  <span className="w-8 h-0.5 bg-brand-blue inline-block mr-2 align-middle" />
                  Smarter Recruiting
                </span>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                  Focus on finding<br className="hidden sm:block" /> the right candidate
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  UNA collects all credentials and test results all in one place, eliminating the paper
                  chase and letting you focus on what matters — identifying the best talent.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { label: 'Auto-Resend', desc: 'Keep your staff sharp with automated exam rescheduling' },
                    { label: 'Testing Bundles', desc: 'Align skill sets with role-specific assessment bundles' },
                    { label: 'Employee Profiles', desc: 'Identify opportunities for growth across your org' },
                  ].map(item => (
                    <li key={item.label} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 flex items-center gap-3">
                      <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                      <span className="text-slate-600">
                        <span className="font-semibold text-slate-700">{item.label}:</span> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/resources/una-wallet"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                  style={{ color: '#E9384D' }}>
                  Discover UNA Wallet
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Image column */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-6 rounded-3xl bg-brand-blue/5" />
                <Image
                  src="/hospital/hospital-find-talent.jpg"
                  alt="Finding the right healthcare talent"
                  width={520}
                  height={370}
                  className="relative w-full max-w-[520px] h-auto drop-shadow-xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Take the headache out of compliance ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-6 rounded-3xl bg-brand-blue/5" />
                <Image
                  src="/hospital/hospital-paperwork.jpg"
                  alt="Eliminating compliance paperwork headaches"
                  width={520}
                  height={370}
                  className="relative w-full max-w-[520px] h-auto drop-shadow-xl rounded-3xl"
                />
              </div>
            </div>
            {/* Text column */}
            <div className="order-1 lg:order-2 relative">
              {/* Decorative section number */}
              <span className="text-[120px] font-black text-slate-200 absolute -top-8 -left-4 select-none pointer-events-none leading-none">02</span>
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest flex items-center" style={{ color: '#E9384D' }}>
                  <span className="w-8 h-0.5 bg-brand-blue inline-block mr-2 align-middle" />
                  Compliance Made Simple
                </span>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                  Take the headache out<br className="hidden sm:block" /> of compliance
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Ensure your clinicians are practice-ready by keeping their licenses and compliance
                  up-to-date with UNA Wallet. Spend less time hunting down paperwork and more time
                  helping patients.
                </p>
                <ul className="space-y-3">
                  {[
                    'Automated license expiration tracking',
                    'Regulatory requirement monitoring',
                    'One-click compliance reporting',
                    'Centralized credential storage — always audit-ready',
                  ].map(item => (
                    <li key={item} className="bg-white border border-slate-100 rounded-xl px-4 py-3 flex items-center gap-3">
                      <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Find talent that won't become turnover ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div className="relative">
              {/* Decorative section number */}
              <span className="text-[120px] font-black text-slate-100 absolute -top-8 -left-4 select-none pointer-events-none leading-none">03</span>
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest flex items-center" style={{ color: '#E9384D' }}>
                  <span className="w-8 h-0.5 bg-brand-blue inline-block mr-2 align-middle" />
                  Behavioral Assessments
                </span>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                  Find talent that won&apos;t<br className="hidden sm:block" /> become turnover
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Measure candidates for the best fit with your company&apos;s culture with behavioral
                  assessments — ensuring you&apos;re investing in the future of your organization.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Personality & culture-fit scoring',
                    'Team compatibility insights',
                    'Manager-ready performance benchmarks',
                    'Reduce costly staff turnover from day one',
                  ].map(item => (
                    <li key={item} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 flex items-center gap-3">
                      <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/resources/una-team"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                  style={{ color: '#E9384D' }}>
                  Learn more about power of personality
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Image column */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-6 rounded-3xl bg-brand-blue/5" />
                <Image
                  src="/hospital/hospital-climbing.jpg"
                  alt="Find talent that stays and grows"
                  width={520}
                  height={370}
                  className="relative w-full max-w-[520px] h-auto drop-shadow-xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product spotlight: UNA Test phones ── */}
      <section className="py-24 overflow-hidden relative" style={{ backgroundColor: '#0F2B5B' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.8\'%3E%3Cpath d=\'M0 30h15M45 30h15M30 0v15M30 45v15\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3Ccircle cx=\'0\' cy=\'30\' r=\'2\'/%3E%3Ccircle cx=\'60\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/svg%3E")', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column with radial glow */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full blur-3xl bg-brand-blue/20" />
                <Image
                  src="/hospital/hospital-test-phones.png"
                  alt="UNA Test on mobile — Emily Appleson profile"
                  width={460}
                  height={460}
                  className="relative w-full max-w-[460px] h-auto"
                  style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}
                />
              </div>
            </div>
            {/* Text column */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                For Careers That Continue After Hire
              </span>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Keep your staff sharp — automatically.
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                UNA is a suite of comprehensive mobile-first solutions for hospital networks, staffing agencies,
                and healthcare professionals. Better connect with candidates, improve applicant engagement,
                optimize compliance workflows, and set a new higher standard for your career or the clinicians
                in your organization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Zap, label: 'Auto-Resend', desc: 'Keep your staff sharp' },
                  { icon: Layers, label: 'Testing Bundles', desc: 'Align your skill sets' },
                  { icon: UserCircle, label: 'Employee Profiles', desc: 'Identify growth opportunities' },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="rounded-xl p-4 border border-l-2 border-brand-blue" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
                    <Icon size={20} className="mb-2" style={{ color: '#E9384D' }} />
                    <p className="text-sm font-bold text-white">{label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Pick UNA? — Three feature cards ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest flex items-center justify-center" style={{ color: '#E9384D' }}>
              <span className="w-8 h-0.5 bg-brand-blue inline-block mr-2 align-middle" />
              Why Pick UNA?
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">
              Built for the way healthcare works.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">
              Three powerful features that set UNA apart from legacy workforce platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Auto-Resend */}
            <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-2xl p-8 border border-slate-100 border-t-4 border-brand-blue shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(233,56,77,0.08)' }}>
                <Zap size={22} style={{ color: '#E9384D' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#E9384D' }}>
                Keep Your Staff Sharp
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Auto-Resend</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We&apos;ve streamlined the competency completion process, automating exam rescheduling for
                clinicians who don&apos;t pass their initial attempt. Eliminate the need to manually wait on
                notifications and arrange follow-ups — and reclaim hours and energy for your internal team.
              </p>
            </div>

            {/* Card 2: Testing Bundles */}
            <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-2xl p-8 border border-slate-100 border-t-4 border-brand-blue shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(233,56,77,0.08)' }}>
                <Layers size={22} style={{ color: '#E9384D' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#E9384D' }}>
                Align Your Skill Sets
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Testing Bundles</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Build role-specific assessment bundles tailored to specialty, department, or custom needs —
                so every hire meets the exact skill standard your organization requires. Bundles can be sent
                in one click and tracked from a single dashboard.
              </p>
            </div>

            {/* Card 3: Employee Profiles */}
            <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-2xl p-8 border border-slate-100 border-t-4 border-brand-blue shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: 'rgba(233,56,77,0.08)' }}>
                <UserCircle size={22} style={{ color: '#E9384D' }} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: '#E9384D' }}>
                Identify Opportunities for Growth
              </span>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Employee Profiles</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Form a hiring standard of frequently sent exams, checklists, and regulatory courses that most
                align with the level of performance you expect from your clinician professionals. Bundles can be
                created for whatever specialty, department, or other custom needs your HR, Educators, and
                Clinical Managers require.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content you can trust ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text column */}
            <div className="relative">
              {/* Decorative section number */}
              <span className="text-[120px] font-black text-slate-100 absolute -top-8 -left-4 select-none pointer-events-none leading-none">04</span>
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest flex items-center" style={{ color: '#E9384D' }}>
                  <span className="w-8 h-0.5 bg-brand-blue inline-block mr-2 align-middle" />
                  Expert Validation Protocol
                </span>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                  Content you can trust...
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Testing offered by UNA is always kept up-to-date — written by subject matter experts
                  and validated with real, true-to-life experience.
                </p>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Every exam is developed using rigorous item generation and validation processes by
                  practicing clinicians — so your hospital network can trust the results.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Written by working clinical practitioners',
                    'Validated with real-world scenario design',
                    'Continuously reviewed and updated',
                    'Meets Joint Commission standards',
                  ].map(item => (
                    <li key={item} className="bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 flex items-center gap-3">
                      <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/resources/expert-validation"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                  style={{ color: '#E9384D' }}>
                  Learn about Expert Validation Protocol
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Image column */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-6 rounded-3xl bg-brand-blue/5" />
                <Image
                  src="/hospital/hospital-training.png"
                  alt="Expert clinical content validation"
                  width={520}
                  height={370}
                  className="relative w-full max-w-[520px] h-auto drop-shadow-xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Made to be completed ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image column */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-6 rounded-3xl bg-brand-blue/5" />
                <Image
                  src="/hospital/hospital-finish.png"
                  alt="UNA testing designed for high completion rates"
                  width={520}
                  height={370}
                  className="relative w-full max-w-[520px] h-auto drop-shadow-xl rounded-3xl"
                />
              </div>
            </div>
            {/* Text column */}
            <div className="order-1 lg:order-2 relative">
              {/* Decorative section number */}
              <span className="text-[120px] font-black text-slate-200 absolute -top-8 -left-4 select-none pointer-events-none leading-none">05</span>
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-widest flex items-center" style={{ color: '#E9384D' }}>
                  <span className="w-8 h-0.5 bg-brand-blue inline-block mr-2 align-middle" />
                  Unrivaled User Experience
                </span>
                <h2 className="mt-4 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                  ...that&apos;s made to be completed
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  UNA testing is designed for unrivaled user experience — boasting higher completion rates
                  than other legacy products and in faster times. Your staff gets through what they need to,
                  and your organization stays fully compliant.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Higher completion rates than legacy platforms',
                    'Faster time-to-complete across all specialties',
                    'Mobile-first — works on any device, anywhere',
                    'Immediate results delivered to your dashboard',
                  ].map(item => (
                    <li key={item} className="bg-white border border-slate-100 rounded-xl px-4 py-3 flex items-center gap-3">
                      <CheckCircle size={17} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/resources/una-test"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                  style={{ color: '#E9384D' }}>
                  Check out UNA Test
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why pick UNA / bottom line ── */}
      <section className="py-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Why Pick UNA?
            </span>
            <h2 className="text-3xl font-bold text-white">The bottom line.</h2>
            <p className="mt-3 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.60)' }}>
              UNA is a suite of comprehensive mobile-first solutions for hospital networks — better connecting
              with candidates, improving engagement, and optimizing compliance workflows.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Search, label: 'Reclaim administrative hours' },
              { icon: Users, label: 'Reduce turnover and retain your best talent' },
              { icon: FileCheck, label: 'Prevent lapses in staff readiness' },
              { icon: Zap, label: 'Invest in your staff and improve patient outcomes' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl p-6 text-center border hover:bg-white/10 hover:scale-105 transition-all cursor-default" style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.10)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(233,56,77,0.20)' }}>
                  <Icon size={20} style={{ color: '#E9384D' }} />
                </div>
                <p className="text-sm font-semibold text-white leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Partners />
      <ContactSection />
    </>
  )
}
