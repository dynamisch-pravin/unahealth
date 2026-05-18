'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MapPin, Mail, Phone } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const specialties = [
  { label: 'Hospital Networks',        href: '/how-una-helps/hospital-networks' },
  { label: 'Staffing Agencies',        href: '/how-una-helps/staffing-agencies' },
  { label: 'Healthcare Professionals', href: '/how-una-helps/healthcare-professionals' },
]

const howWeHelp = [
  { label: 'Nursing & Patient Care Services', href: '/how-una-helps/nursing' },
  { label: 'Educators',       href: '/how-una-helps/educators' },
  { label: 'Compliance',      href: '/how-una-helps/compliance' },
  { label: 'Finance',         href: '/how-una-helps/finance' },
  { label: 'Human Resources', href: '/how-una-helps/human-resources' },
]

const products = [
  { label: 'UNA Test',                       href: '/resources/una-test' },
  { label: 'UNA Wallet',                     href: '/resources/una-wallet' },
  { label: 'UNA Air',                        href: '/resources/una-air' },
  { label: 'UNA Prep',                       href: '/resources/una-prep' },
  { label: 'myUNA Candidate Portal',         href: '/resources/my-una' },
  { label: 'UNA Team Behavioral Assessments',href: '/resources/una-team' },
]

const otherResources = [
  { label: 'UNADash – Avg Exam Completion Times', href: '/resources/unadash' },
  { label: 'Expert Validation Protocol',           href: '/resources/expert-validation' },
  { label: 'OpenAPI Integrations',                 href: '/resources/integrations' },
  { label: 'FAQs',                                 href: '/faqs' },
  { label: 'Privacy Policy',                       href: '/privacy-policy' },
]

const social = [
  {
    href: 'https://www.facebook.com/unahealth/', label: 'Facebook',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    href: 'https://www.instagram.com/unahealth/', label: 'Instagram',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    href: 'https://www.linkedin.com/company/myunaapp', label: 'LinkedIn',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    href: 'https://x.com/unahealth', label: 'X (Twitter)',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

function Col({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="footer-col">
      <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map(l => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const pathname  = usePathname()
  const footerRef = useRef<HTMLElement>(null)
  const ctaRef   = useRef<HTMLDivElement>(null)
  const mainRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate transform — never opacity — so content is always visible
      gsap.fromTo(ctaRef.current, { y: 24 },
        { y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: ctaRef.current, start: 'top 95%', once: true } })

      const cols = mainRef.current?.querySelectorAll('.footer-col')
      if (cols?.length) {
        gsap.fromTo(cols, { y: 20 },
          { y: 0, stagger: 0.07, duration: 0.55, ease: 'power3.out',
            scrollTrigger: { trigger: mainRef.current, start: 'top 95%', once: true } })
      }
    }, footerRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-brand-navy text-white">

      {/* CTA Banner */}
      {pathname !== '/contact' && <div ref={ctaRef} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to transform clinical credentialing?</h3>
              <p className="text-slate-300 text-sm mt-1">Join over 750k clinicians and 6k recruiters using UNA.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contact"
                className="btn-magnetic px-5 py-2.5 bg-brand-blue text-white font-semibold rounded-xl text-sm hover:bg-brand-redDark transition-colors shadow-lg">
                Get Started
              </Link>
              <Link href="/#products"
                className="px-5 py-2.5 border border-white/30 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-colors">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>}

      {/* Main */}
      <div ref={mainRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">

          {/* Brand col */}
          <div className="footer-col lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image src="/logo.svg" alt="UNA Health" width={110} height={46} className="h-8 w-auto brightness-0 invert" />
            </Link>
            <div className="space-y-3 mb-6">
              {[
                { Icon: MapPin,  text: 'Greensboro, North Carolina', href: undefined },
                { Icon: Mail,    text: 'hello@unahealth.com', href: 'mailto:hello@unahealth.com' },
                { Icon: Phone,   text: '336.544.4829',         href: 'tel:3365444829' },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-2.5">
                  <Icon size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  {href
                    ? <a href={href} className="text-sm text-slate-400 hover:text-white transition-colors">{text}</a>
                    : <span className="text-sm text-slate-400">{text}</span>}
                </div>
              ))}
            </div>
            <div className="flex gap-2 mb-2">
              {social.map(({ svg, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-all duration-200 hover:scale-110 text-slate-300">
                  {svg}
                </a>
              ))}
            </div>

            {/* NATHO membership badge */}
            <a
              href="https://natho.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 bg-white inline-flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border border-white/10 hover:border-white/25 transition-colors group w-fit"
            >
              <span className="text-[7px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">
                Proud member of
              </span>
              <Image
                src="/natho-logo.png"
                alt="NATHO – National Association of Travel Healthcare Organizations"
                width={110}
                height={34}
                className="h-6 w-auto object-contain group-hover:opacity-85 transition-opacity"
              />
            </a>
          </div>

          <Col title="Specialties"    links={specialties} />
          <Col title="How UNA Helps"  links={howWeHelp} />
          <Col title="Products & Services" links={products} />
          <Col title="Other Resources" links={otherResources} />

          {/* About col */}
          <div className="footer-col">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">About UNA</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Company and Team', href: '/company-and-team' },
                { label: 'Contact',          href: '/contact' },
              ].map(l => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-center">
          <p className="text-xs text-slate-500">
            Copyright &copy; {new Date().getFullYear()} UNA Health Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
