'use client'

import Image from 'next/image'

const partners = [
  { name: 'Cascade Health Services',          logo: '/partners/cascade.png' },
  { name: 'Advantis Medical',                 logo: '/partners/advantis-medical.png' },
  { name: 'Adex Healthcare Staffing',         logo: '/partners/adex.png' },
  { name: 'Equiliem',                         logo: '/partners/equiliem.png' },
  { name: 'Excite Health Partners',           logo: '/partners/excite-health-partners.png' },
  { name: 'Krucial Rapid Response',           logo: '/partners/krucial.png' },
  { name: 'Health Carousel',                  logo: '/partners/health-carousel.png' },
  { name: 'Express Healthcare Professionals', logo: '/partners/express-healthcare.png' },
  { name: 'GHR Healthcare',                   logo: '/partners/ghr-healthcare.png' },
  { name: 'Journey Healthcare Solutions',     logo: '/partners/journey-healthcare.png' },
  { name: 'Medical Solutions',                logo: '/partners/medical-solutions.png' },
  { name: 'Matchwell',                        logo: '/partners/matchwell.png' },
]

// Duplicate for seamless infinite loop
const track = [...partners, ...partners]

export default function Partners() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Trusted By</span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
          Trusted by these partners all over the nation
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }} />

        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {track.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group h-20 w-44 flex-shrink-0 bg-white rounded-xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-md flex items-center justify-center px-5 transition-all duration-300"
            >
              <div className="relative w-full h-10">
                <Image
                  src={p.logo}
                  alt={p.name}
                  fill
                  className="object-contain grayscale opacity-55 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  sizes="176px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
