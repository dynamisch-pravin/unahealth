import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import Stats from '@/components/Stats'
import { ArrowRight, Code2, Zap, Globe, Database, RefreshCw, Layers, ExternalLink } from 'lucide-react'

const apis = [
  {
    icon: Code2,
    name: 'UNA HCP API',
    label: 'Healthcare Professional API',
    description:
      'Handles healthcare professional (HCP) features, making it easy to manage profiles, assignments, and track progress.',
    capabilities: [
      'Manage HCP profiles & assignments',
      'Track exam and checklist progress',
      'Sync candidate data in real time',
      'Trigger automated content delivery',
    ],
    docLabel: 'View the UNA HCP API documentation',
    docHref: '#',
    accentColor: '#E9384D',
  },
  {
    icon: Layers,
    name: 'UNA Core API',
    label: 'Core Application API',
    description:
      'Focuses on core application functions, offering comprehensive integration for system-wide operations.',
    capabilities: [
      'System-wide operational control',
      'Credential and document management',
      'Compliance reporting endpoints',
      'Enterprise-grade data access',
    ],
    docLabel: 'View the UNA Core API documentation',
    docHref: '#',
    accentColor: '#0F2B5B',
  },
]

const integrationTypes = [
  { icon: Globe,      label: 'Applicant Tracking Systems (ATS)' },
  { icon: Zap,        label: 'On-boarding tools' },
  { icon: Database,   label: 'CRMs' },
  { icon: RefreshCw,  label: 'Custom staffing platforms' },
]

const partners = [
  { name: 'Cascade',                 src: '/partners/cascade.png' },
  { name: 'Advantis Medical',        src: '/partners/advantis-medical.png' },
  { name: 'ADEX',                    src: '/partners/adex.png' },
  { name: 'Equiliem',                src: '/partners/equiliem.png' },
  { name: 'Excite Health Partners',  src: '/partners/excite-health-partners.png' },
  { name: 'Krucial',                 src: '/partners/krucial.png' },
  { name: 'Health Carousel',         src: '/partners/health-carousel.png' },
  { name: 'Express Healthcare',      src: '/partners/express-healthcare.png' },
  { name: 'GHR Healthcare',          src: '/partners/ghr-healthcare.png' },
  { name: 'Journey Healthcare',      src: '/partners/journey-healthcare.png' },
  { name: 'Medical Solutions',       src: '/partners/medical-solutions.png' },
  { name: 'Matchwell',               src: '/partners/matchwell.png' },
]

export const metadata = createMetadata(
  'OpenAPI Integrations | UNA Health',
  'UNA integrates seamlessly with your existing ATS and compliance systems — Bullhorn, Credentially, and more — keeping your credential data automatically in sync.',
  '/resources/integrations',
)

export default function IntegrationsPage() {
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
                About: OpenAPI Integrations
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] tracking-tight mb-5">
                Connected for{' '}
                <span style={{ color: '#E9384D' }}>everyone&apos;s convenience.</span>
              </h1>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-[480px]">
                Discover how UNA technology provides a seamless data experience for both users and
                administration — built on open, standards-based APIs.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-lg group"
                  style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
                  Get Started
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href="#apis"
                  className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 text-sm transition-all">
                  View API Docs
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe,     label: 'ATS Systems',       color: '#E9384D' },
                    { icon: Zap,       label: 'Onboarding Tools',  color: '#0F2B5B' },
                    { icon: Database,  label: 'CRMs',              color: '#E9384D' },
                    { icon: RefreshCw, label: 'Custom Platforms',  color: '#0F2B5B' },
                  ].map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex flex-col items-center gap-2.5 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color === '#E9384D' ? 'rgba(233,56,77,0.08)' : 'rgba(15,43,91,0.08)' }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 text-center leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-dashed border-slate-200 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 rounded-full border-2 border-slate-100 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ── How does integration work ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-5">
            How does UNA integration work?
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-3xl mx-auto mb-10">
            UNA&apos;s platform is enhanced by two powerful public APIs that streamline healthcare operations.
            Both APIs are organized around <strong className="text-slate-700">REST</strong>, using standard
            HTTP methods and JSON for requests and responses.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrationTypes.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(233,56,77,0.08)' }}>
                  <Icon size={20} style={{ color: '#E9384D' }} />
                </div>
                <p className="text-sm font-semibold text-brand-navy text-center leading-snug">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Integration partners can use these RESTful APIs to manage HCPs or candidates, assign content,
            monitor progress, and automatically update their systems. This seamless data flow improves
            efficiency and accuracy across healthcare staffing and management.
          </p>
        </div>
      </section>

      {/* ── Two API cards ── */}
      <section id="apis" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
              Our APIs
            </span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">
              Two powerful, purpose-built APIs.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {apis.map(api => {
              const Icon = api.icon
              return (
                <div key={api.name} className="bg-white rounded-2xl p-10 border border-slate-100 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: api.name === 'UNA HCP API' ? 'rgba(233,56,77,0.08)' : 'rgba(15,43,91,0.08)' }}>
                    <Icon size={26} style={{ color: api.accentColor }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: api.accentColor }}>
                    {api.label}
                  </p>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{api.name}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{api.description}</p>
                  <ul className="space-y-3 mb-8">
                    {api.capabilities.map(cap => (
                      <li key={cap} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: api.accentColor }} />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <a href={api.docHref}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                    style={{ color: api.accentColor }}>
                    {api.docLabel}
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Integration partners ── */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#E9384D' }}>
            Integration Partners
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy">
            Our integration partners.
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            UNA is proud to offer connections with leading platforms to drive a unified and
            data-rich experience for healthcare staffing.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }} />

          <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="group h-20 w-44 flex-shrink-0 bg-white rounded-xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-md flex items-center justify-center px-5 transition-all duration-300"
              >
                <div className="relative w-full h-10">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    sizes="176px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-400 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          UNA is working with additional industry-leading platforms to further enhance the connected
          hiring experience.
        </p>
      </section>

      {/* ── CTA strip ── */}
      <section className="py-16" style={{ backgroundColor: '#0F2B5B' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to integrate with UNA?</h3>
              <p className="text-sm max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Connect your ATS, onboarding tools, or custom staffing platform with UNA&apos;s RESTful APIs
                for a seamless, data-rich hiring experience.
              </p>
            </div>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-full transition-all text-sm shadow-lg shrink-0 group"
              style={{ backgroundColor: '#E9384D' }}>
              Get in Touch
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <ContactSection />
    </>
  )
}
