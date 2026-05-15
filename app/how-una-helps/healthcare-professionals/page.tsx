import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import Stats from '@/components/Stats'
import ContactSection from '@/components/ContactSection'
import Partners from '@/components/Partners'
import { CheckCircle, ArrowRight, Wallet, Share2, ClipboardList, Lock, GraduationCap } from 'lucide-react'

export const metadata = createMetadata(
  'Healthcare Professionals | UNA Health',
  'UNA gives healthcare professionals a single mobile wallet to manage licenses, certifications, and competency exams — share your credentials in seconds.',
  '/how-una-helps/healthcare-professionals',
)

export default function HealthcareProfessionalsPage() {
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
                How UNA Helps: Healthcare Professionals
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Made{' '}
                <span className="text-brand-blue">with you</span>{' '}
                in mind.
              </h1>
              <p className="text-base lg:text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Take control of your career. Manage credentials, complete CEUs, and get back to doing the work that matters.
              </p>
              <ul className="space-y-3 mb-10">
                {['Free digital credential wallet (myUNA)', 'Complete CEUs in 15 minutes or less', 'One-click sharing with employers'].map(b => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={13} className="text-brand-blue" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-md shadow-brand-blue/20 group transition-all"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Started
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="/resources/una-wallet"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all">
                  Create Free Wallet
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.12)]">
                <Image src="/hcp/hcp-hero.jpeg" alt="Healthcare professional on the go" fill className="object-cover object-[center_30%]" priority sizes="(max-width:1024px) 90vw,45vw" />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-brand-blue/20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border-2 border-brand-blue/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Suite intro ── */}
      <section className="py-10 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white font-semibold text-lg">
            UNA&apos;s suite of comprehensive, mobile-first solutions can be the one place for you to:
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {['Track credentials', 'Share documents instantly', 'Take competency exams', 'Complete CEUs', 'Protect your privacy'].map(item => (
              <span key={item} className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border"
                style={{ color: 'rgba(255,255,255,0.80)', borderColor: 'rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.07)' }}>
                <CheckCircle size={13} style={{ color: '#E9384D' }} />{item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature 1: Keep track of credentials ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                UNA Wallet
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Keep track of your credentials.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                UNA Wallet&apos;s sync technology allows you to update your license, CPR card, employment
                history, and more — all in a single source. No more paper trails and email chains.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Licenses, CPR cards & certifications in one place',
                  'Automated expiration reminders',
                  'Employment history always up-to-date',
                  'Accessible 24/7 from any device',
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
                src="/hcp/hcp-wallet-ipad.png"
                alt="UNA Wallet dashboard on iPad"
                width={520}
                height={420}
                className="w-full max-w-[520px] h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature 2: Share hiring documents ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/hcp/hcp-share-phones.png"
                alt="Sharing credentials packet on mobile"
                width={480}
                height={480}
                className="w-full max-w-[480px] h-auto drop-shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                One-Click Sharing
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Share your hiring documents.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                With your permission, UNA can sync your work credentials with other tech platforms
                or apps at the push of a button. Submitting candidate profiles has never been easier.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Share a full credential packet instantly',
                  'One-tap submission to any employer',
                  'Accepted by 200+ partner organizations',
                  'Control exactly what you share',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                style={{ color: '#E9384D' }}>
                See if your employer uses UNA <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature 4: Competency exams ── */}
      <section className="py-20 overflow-hidden relative" style={{ backgroundColor: '#0F2B5B' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23ffffff\' stroke-width=\'0.8\'%3E%3Cpath d=\'M0 30h15M45 30h15M30 0v15M30 45v15\'/%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'4\'/%3E%3Ccircle cx=\'0\' cy=\'30\' r=\'2\'/%3E%3Ccircle cx=\'60\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/svg%3E")', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/hcp/hcp-exam-phone.png"
                alt="UNA Test competency exam on mobile"
                width={340}
                height={580}
                className="w-full max-w-[340px] h-auto"
                style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block" style={{ color: 'rgba(255,255,255,0.45)' }}>
                UNA Test
              </span>
              <h2 className="text-3xl font-bold text-white mb-5 leading-tight">
                Take your competency exams.
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
                UNA was made for mobile, so tests and checklists can be completed quicker and easier.
                Content can be assigned, taken, and completed from home, work, or anywhere in between!
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Complete from any device, anywhere',
                  'Immediate results with category breakdown',
                  'Higher completion rates than legacy platforms',
                  'Specialty-specific clinical questions',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/resources/una-test"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full transition-all text-sm shadow-lg group"
                style={{ backgroundColor: '#E9384D' }}>
                Check out UNA Test <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature 5: myUNA / One exam one time ── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: 'rgba(233,56,77,0.10)', color: '#E9384D' }}>
                New — Coming Soon
              </div>
              <h2 className="text-3xl font-bold text-brand-navy mb-5 leading-tight">
                One exam — one time.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Say goodbye to reassignments. Share competency testing between organizations with
                ease using our candidate portal. No more endless click-throughs of the same exam.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Your UNA account travels with you — which means your results do too. Take control
                of your career and your time with one-time test taking.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Take one exam — accepted everywhere',
                  'Your results travel with your account',
                  'Share with any organization instantly',
                  'Own your career profile — not your employer',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={16} className="flex-shrink-0" style={{ color: '#E9384D' }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/resources/my-una"
                className="inline-flex items-center gap-2 text-sm font-bold group transition-colors"
                style={{ color: '#E9384D' }}>
                Own your exams with myUNA <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/hcp/hcp-wallet-phones.png"
                alt="myUNA — Luis Martinez wallet and vaccination"
                width={480}
                height={480}
                className="w-full max-w-[480px] h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature 6: Privacy / security ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1 lg:order-1">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
                Your Privacy
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5 leading-tight">
                Private where it matters most.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                At UNA, we understand your right to privacy. That&apos;s why we prioritize keeping your
                credentialing information safe and confidential — everywhere on our platform.
              </p>
              <div className="rounded-2xl p-6 border" style={{ backgroundColor: 'rgba(233,56,77,0.04)', borderColor: 'rgba(233,56,77,0.15)' }}>
                <p className="text-sm font-bold text-brand-navy mb-4">How we protect your data:</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'HIPAA-compliant storage',
                    'Enterprise-grade encryption',
                    'Access restricted to you',
                    'No data sold to third parties',
                    'Secure credential sharing',
                    'Full control over your profile',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#E9384D' }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/hcp/hcp-shield.png"
                alt="Private where it matters most — HIPAA security"
                width={480}
                height={480}
                className="w-full max-w-[420px] h-auto drop-shadow-xl"
              />
            </div>
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
              Make the switch to UNA today — it&apos;s free to get started.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: Wallet,        text: 'Reclaim data entry hours and stay better organized' },
              { icon: Lock,          text: 'Prevent lapses in licensure' },
              { icon: Share2,        text: 'Protect your personal information' },
              { icon: GraduationCap, text: 'Invest in your skills to reach the next career level' },
              { icon: ClipboardList, text: 'Complete competency exams once and share everywhere' },
              { icon: CheckCircle,   text: 'Build a verified career profile employers trust' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 rounded-xl p-4 border"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.09)' }}>
                <Icon size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#E9384D' }} />
                <span className="text-sm text-slate-300">{text}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg group"
              style={{ backgroundColor: '#E9384D' }}>
              Sign up for free
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
