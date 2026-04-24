'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, Building2, Users, UserCircle, Stethoscope, GraduationCap, ShieldCheck, DollarSign, Briefcase } from 'lucide-react'

const howUnaHelps = [
  { label: 'Hospital Networks',        href: '/how-una-helps/hospital-networks',        desc: 'Competency testing for your org',  icon: Building2 },
  { label: 'Staffing Agencies',        href: '/how-una-helps/staffing-agencies',        desc: 'Faster placements, less friction', icon: Users },
  { label: 'Healthcare Professionals', href: '/how-una-helps/healthcare-professionals', desc: 'Own your credentials and career',  icon: UserCircle },
]
const howUnaHelpsYou = [
  { label: 'Nursing & Patient Care', href: '/how-una-helps/nursing',        icon: Stethoscope },
  { label: 'Educators',              href: '/how-una-helps/educators',       icon: GraduationCap },
  { label: 'Compliance',             href: '/how-una-helps/compliance',      icon: ShieldCheck },
  { label: 'Finance',                href: '/how-una-helps/finance',         icon: DollarSign },
  { label: 'Human Resources',        href: '/how-una-helps/human-resources', icon: Briefcase },
]
const resourcesProducts = [
  { label: 'UNA Test',     href: '/resources/una-test',      desc: 'Competency & checklists',  color: '#E9384D' },
  { label: 'UNA Wallet',   href: '/resources/una-wallet',    desc: 'Credential management',    color: '#0A9396' },
  { label: 'UNA Fast CEUs',href: '/resources/una-fast-ceus', desc: 'Continuing education',     color: '#7B2D8B' },
  { label: 'UNA Air',      href: '/resources/una-air',       desc: 'Automated remediation',    color: '#E9384D', badge: 'New' },
  { label: 'myUNA Portal', href: '/resources/my-una',        desc: 'Candidate portal',         color: '#0F2B5B', badge: 'Soon' },
  { label: 'UNA Team',     href: '/resources/una-team',      desc: 'Behavioral assessments',   color: '#EC4899', badge: 'Soon' },
]
const resourcesOther: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: 'UNADash',              href: '/resources/unadash' },
  { label: 'Expert Validation',    href: '/resources/expert-validation' },
  { label: 'OpenAPI Integrations', href: '/resources/integrations' },
  { label: 'Blog', href: '/resources/blog', children: [
    { label: 'Developer Notes', href: '/resources/blog/developer-notes' },
    { label: 'Press Releases',  href: '/resources/blog/press-releases' },
  ]},
  { label: 'FAQs',           href: '/resources/faqs' },
  { label: 'Privacy Policy', href: '/resources/privacy-policy' },
]
const aboutLinks = [
  { label: 'Company and Team', href: '/about/company-and-team', desc: 'Our story and leadership' },
  { label: 'Contact',          href: '/about/contact',          desc: 'Get in touch with us' },
]

export default function Header() {
  const pathname = usePathname()
  const [dropdown, setDropdown]           = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [scrolled, setScrolled]           = useState(false)
  const wrapRef     = useRef<HTMLDivElement>(null)
  const hoverTimer  = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setDropdown(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const openDropdown  = (key: string) => { if (hoverTimer.current) clearTimeout(hoverTimer.current); setDropdown(key) }
  const closeDropdown = () => { hoverTimer.current = setTimeout(() => setDropdown(null), 150) }
  const keepOpen      = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current) }
  const closeMobile   = () => { setMobileOpen(false); setMobileSection(null) }

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 px-4 sm:px-6 lg:px-8">
      <div ref={wrapRef} className="max-w-6xl mx-auto">

        {/* ── Floating pill ── */}
        <div className={`bg-white/90 backdrop-blur-xl rounded-2xl flex items-center justify-between px-5 py-2.5 transition-all duration-500 ${
          scrolled
            ? 'shadow-[0_8px_32px_rgba(0,0,0,0.12),0_1px_0_rgba(255,255,255,0.8)_inset] border border-slate-200/90'
            : 'shadow-[0_2px_16px_rgba(0,0,0,0.07),0_1px_0_rgba(255,255,255,0.9)_inset] border border-slate-200/70'
        }`}>

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" onClick={closeMobile}>
            <Image src="/logo.svg" alt="UNA Health" width={110} height={40} className="h-7 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">

            {/* How UNA Helps */}
            <div className="relative" onMouseEnter={() => openDropdown('helps')} onMouseLeave={closeDropdown}>
              <button className={`relative flex items-center gap-1 px-3.5 py-2 text-sm rounded-xl transition-all duration-200 ${
                dropdown === 'helps' || isActive('/how-una-helps')
                  ? 'text-brand-navy font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}>
                How UNA Helps
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdown === 'helps' ? 'rotate-180' : ''}`} />
                {isActive('/how-una-helps') && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-blue" />}
              </button>

              <div className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[460px] bg-white rounded-2xl shadow-xl border border-slate-100 z-50 transition-all duration-200 origin-top ${
                dropdown === 'helps' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
              }`} onMouseEnter={keepOpen} onMouseLeave={closeDropdown}>
                <div className="p-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-2">Who we help</p>
                  <div className="space-y-0.5">
                    {howUnaHelps.map(item => {
                      const Icon = item.icon
                      return (
                        <Link key={item.href} href={item.href} onClick={() => setDropdown(null)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors group ${
                            isActive(item.href) ? 'bg-slate-50' : 'hover:bg-slate-50'
                          }`}>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-red-50 flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon size={14} className="text-slate-500 group-hover:text-brand-blue transition-colors" />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold group-hover:text-brand-blue transition-colors ${isActive(item.href) ? 'text-brand-blue' : 'text-slate-800'}`}>{item.label}</p>
                            <p className="text-xs text-slate-400">{item.desc}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-2">By Role</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {howUnaHelpsYou.map(item => {
                        const Icon = item.icon
                        return (
                          <Link key={item.href} href={item.href} onClick={() => setDropdown(null)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                              isActive(item.href) ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                            }`}>
                            <Icon size={13} className="opacity-50 flex-shrink-0" />
                            {item.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="relative" onMouseEnter={() => openDropdown('resources')} onMouseLeave={closeDropdown}>
              <button className={`relative flex items-center gap-1 px-3.5 py-2 text-sm rounded-xl transition-all duration-200 ${
                dropdown === 'resources' || isActive('/resources')
                  ? 'text-brand-navy font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}>
                Resources
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdown === 'resources' ? 'rotate-180' : ''}`} />
                {isActive('/resources') && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-blue" />}
              </button>

              <div className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-2xl shadow-xl border border-slate-100 z-50 transition-all duration-200 origin-top ${
                dropdown === 'resources' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
              }`} onMouseEnter={keepOpen} onMouseLeave={closeDropdown}>
                <div className="p-4 grid grid-cols-[1fr_auto_155px] gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-2">Products & Services</p>
                    <div className="space-y-0.5">
                      {resourcesProducts.map(item => (
                        <Link key={item.href} href={item.href} onClick={() => setDropdown(null)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                            <div>
                              <p className={`text-sm font-semibold leading-tight group-hover:text-brand-blue transition-colors ${isActive(item.href) ? 'text-brand-blue' : 'text-slate-800'}`}>{item.label}</p>
                              <p className="text-xs text-slate-400">{item.desc}</p>
                            </div>
                          </div>
                          {item.badge && (
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full flex-shrink-0 ml-2 ${
                              item.badge === 'New' ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'
                            }`}>{item.badge}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="w-px bg-slate-100 my-1" />
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 pb-2">More</p>
                    <div className="space-y-0.5">
                      {resourcesOther.map(item => (
                        <div key={item.label}>
                          <Link href={item.href} onClick={() => setDropdown(null)}
                            className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-lg transition-colors ${
                              isActive(item.href) ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:text-brand-blue hover:bg-slate-50'
                            }`}>
                            {item.label}
                            {item.children && <ChevronDown size={10} className="-rotate-90 text-slate-300" />}
                          </Link>
                          {item.children && (
                            <div className="ml-2 pl-2.5 border-l border-slate-100 space-y-0.5 mt-0.5 mb-1">
                              {item.children.map(child => (
                                <Link key={child.href} href={child.href} onClick={() => setDropdown(null)}
                                  className={`block px-2 py-1 text-xs rounded-lg transition-colors ${
                                    isActive(child.href) ? 'text-brand-blue font-semibold' : 'text-slate-500 hover:text-brand-blue hover:bg-slate-50'
                                  }`}>
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="relative" onMouseEnter={() => openDropdown('about')} onMouseLeave={closeDropdown}>
              <button className={`relative flex items-center gap-1 px-3.5 py-2 text-sm rounded-xl transition-all duration-200 ${
                dropdown === 'about' || isActive('/about')
                  ? 'text-brand-navy font-semibold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}>
                About
                <ChevronDown size={12} className={`transition-transform duration-200 ${dropdown === 'about' ? 'rotate-180' : ''}`} />
                {isActive('/about') && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-blue" />}
              </button>

              <div className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 transition-all duration-200 origin-top ${
                dropdown === 'about' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
              }`} onMouseEnter={keepOpen} onMouseLeave={closeDropdown}>
                <div className="p-3">
                  {aboutLinks.map(item => (
                    <Link key={item.href} href={item.href} onClick={() => setDropdown(null)}
                      className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                      <p className={`text-sm font-semibold group-hover:text-brand-blue transition-colors ${isActive(item.href) ? 'text-brand-blue' : 'text-slate-800'}`}>{item.label}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="#"
              className="px-4 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors rounded-xl hover:bg-slate-50">
              Sign In
            </Link>
            <Link href="/about/contact"
              className="relative overflow-hidden px-5 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-brand-blue/25 active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #E9384D 0%, #C42038 100%)' }}>
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-full" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(o => !o)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div className={`lg:hidden mt-2 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="px-4 py-3 space-y-0.5 max-h-[75vh] overflow-y-auto">

            {/* How UNA Helps */}
            <button onClick={() => setMobileSection(s => s === 'helps' ? null : 'helps')}
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              How UNA Helps
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${mobileSection === 'helps' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileSection === 'helps' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <div className="px-2 pb-2 space-y-0.5">
                <p className="px-3 pt-1 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Who we help</p>
                {howUnaHelps.map(item => {
                  const Icon = item.icon
                  return (
                    <Link key={item.href} href={item.href} onClick={closeMobile}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                        isActive(item.href) ? 'text-brand-blue bg-slate-50' : 'text-slate-700 hover:bg-slate-50'
                      }`}>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={13} className="text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </Link>
                  )
                })}
                <p className="px-3 pt-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">By Role</p>
                {howUnaHelpsYou.map(item => {
                  const Icon = item.icon
                  return (
                    <Link key={item.href} href={item.href} onClick={closeMobile}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-colors ${
                        isActive(item.href) ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:bg-slate-50'
                      }`}>
                      <Icon size={13} className="flex-shrink-0 text-slate-400" />
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Resources */}
            <button onClick={() => setMobileSection(s => s === 'resources' ? null : 'resources')}
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              Resources
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${mobileSection === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileSection === 'resources' ? 'max-h-[600px]' : 'max-h-0'}`}>
              <div className="px-2 pb-2 space-y-0.5">
                <p className="px-3 pt-1 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Products & Services</p>
                {resourcesProducts.map(item => (
                  <Link key={item.href} href={item.href} onClick={closeMobile}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-colors ${
                      isActive(item.href) ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:bg-slate-50'
                    }`}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                      {item.label}
                    </div>
                    {item.badge && (
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        item.badge === 'New' ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'
                      }`}>{item.badge}</span>
                    )}
                  </Link>
                ))}
                <p className="px-3 pt-3 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest">More Resources</p>
                {resourcesOther.map(item => (
                  <div key={item.label}>
                    <Link href={item.href} onClick={closeMobile}
                      className={`flex items-center justify-between px-3 py-2 text-sm rounded-xl transition-colors ${
                        isActive(item.href) ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:bg-slate-50'
                      }`}>
                      {item.label}
                      {item.children && <ChevronDown size={11} className="-rotate-90 text-slate-300" />}
                    </Link>
                    {item.children && (
                      <div className="ml-3 pl-3 border-l border-slate-100 space-y-0.5 mb-1">
                        {item.children.map(child => (
                          <Link key={child.href} href={child.href} onClick={closeMobile}
                            className={`block px-3 py-1.5 text-xs rounded-xl transition-colors ${
                              isActive(child.href) ? 'text-brand-blue font-semibold' : 'text-slate-500 hover:bg-slate-50'
                            }`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <button onClick={() => setMobileSection(s => s === 'about' ? null : 'about')}
              className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors">
              About
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${mobileSection === 'about' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${mobileSection === 'about' ? 'max-h-40' : 'max-h-0'}`}>
              <div className="px-2 pb-2 space-y-0.5">
                {aboutLinks.map(item => (
                  <Link key={item.href} href={item.href} onClick={closeMobile}
                    className={`block px-3 py-2.5 text-sm rounded-xl transition-colors ${
                      isActive(item.href) ? 'text-brand-blue font-semibold' : 'text-slate-600 hover:bg-slate-50'
                    }`}>
                    {item.label}
                    <span className="block text-xs text-slate-400 font-normal">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-slate-100 pt-3 mt-2 flex flex-col gap-2 pb-1">
              <Link href="#" onClick={closeMobile}
                className="text-center px-4 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                Sign In
              </Link>
              <Link href="/about/contact" onClick={closeMobile}
                className="text-center px-4 py-2.5 text-sm font-bold text-white rounded-xl transition-colors"
                style={{ background: 'linear-gradient(135deg, #E9384D 0%, #C42038 100%)' }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}
