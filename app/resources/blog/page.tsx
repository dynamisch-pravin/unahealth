'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import { ArrowRight, Calendar, Tag, LayoutGrid, Code2, Newspaper, ExternalLink } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { allPosts } from '@/lib/blog-data'

type Category = 'All' | 'Developer Notes' | 'Press Releases'

type CardPost = {
  slug: string
  href: string
  title: string
  date: string
  category: Category
  source?: string
  sourceHref?: string
  location?: string
  label?: string
  excerpt: string
  sections?: { heading: string; body: string }[]
  tickets?: string[]
}

const posts: CardPost[] = allPosts.map(p => ({
  slug: p.slug,
  href: p.type === 'press-release'
    ? `/resources/blog/press-releases/${p.slug}`
    : `/resources/blog/developer-notes/${p.slug}`,
  title: p.title,
  date: p.date,
  category: (p.type === 'press-release' ? 'Press Releases' : 'Developer Notes') as Category,
  source: p.type === 'press-release' ? p.source : undefined,
  sourceHref: p.type === 'press-release' ? p.sourceHref : undefined,
  location: p.type === 'press-release' ? p.location : undefined,
  label: p.type === 'press-release' && p.label ? p.label : undefined,
  excerpt: p.type === 'press-release' ? p.body.slice(0, 240) + '…' : p.excerpt,
  sections: p.type === 'developer-note' ? p.groups[0]?.sections.slice(0, 3) : undefined,
  tickets: p.type === 'developer-note'
    ? p.groups.flatMap(g => g.tickets).slice(0, 6).map(t => t.split(':')[0])
    : undefined,
}))

const tabs: { label: string; value: Category; Icon: React.ElementType }[] = [
  { label: 'All Blog Posts',  value: 'All',             Icon: LayoutGrid },
  { label: 'Developer Notes', value: 'Developer Notes', Icon: Code2      },
  { label: 'Press Releases',  value: 'Press Releases',  Icon: Newspaper  },
]

const categoryColor: Record<Category, { text: string; border: string; bg: string }> = {
  'All':             { text: '#E9384D', border: 'rgba(233,56,77,0.25)',  bg: 'rgba(233,56,77,0.05)'  },
  'Developer Notes': { text: '#0B72B5', border: 'rgba(11,114,181,0.25)', bg: 'rgba(11,114,181,0.05)' },
  'Press Releases':  { text: '#E9384D', border: 'rgba(233,56,77,0.25)',  bg: 'rgba(233,56,77,0.05)'  },
}

export default function BlogPage() {
  const [active, setActive] = useState<Category>('All')

  const tabButtonRefs   = useRef<(HTMLButtonElement | null)[]>([])
  const pillRef         = useRef<HTMLDivElement>(null)
  const pillInitialized = useRef(false)
  const listRef         = useRef<HTMLDivElement>(null)
  const firstRender     = useRef(true)

  useEffect(() => {
    const idx  = tabs.findIndex(t => t.value === active)
    const btn  = tabButtonRefs.current[idx]
    const pill = pillRef.current
    if (!btn || !pill) return
    if (!pillInitialized.current) {
      gsap.set(pill, { x: btn.offsetLeft, width: btn.offsetWidth })
      pillInitialized.current = true
      return
    }
    gsap.to(pill, { x: btn.offsetLeft, width: btn.offsetWidth, duration: 0.35, ease: 'power3.inOut' })
  }, [active])

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return }
    if (!listRef.current) return
    gsap.timeline()
      .to(listRef.current,  { opacity: 0, y: 8,  filter: 'blur(3px)', duration: 0.18, ease: 'power2.in' })
      .set(listRef.current, { y: -8 })
      .to(listRef.current,  { opacity: 1, y: 0,  filter: 'blur(0px)', duration: 0.32, ease: 'power3.out' })
  }, [active])

  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden pt-36 pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-5">
            UNA Resources
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-5">
            The UNA Blog
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Keep up to date with what&apos;s happening with both our app and our company.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-slate-50 min-h-[400px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Sliding pill tabs */}
          <div className="flex mb-10">
            <div className="relative inline-flex bg-slate-100 rounded-2xl p-1.5 shadow-inner">
              <div
                ref={pillRef}
                className="absolute top-1.5 h-[calc(100%-12px)] bg-white rounded-xl shadow-md shadow-slate-200/70 pointer-events-none"
                style={{ width: 0, willChange: 'transform, width' }}
              />
              {tabs.map(({ label, value, Icon }, i) => {
                const isActive = active === value
                return (
                  <button
                    key={value}
                    ref={el => { tabButtonRefs.current[i] = el }}
                    onClick={() => setActive(value)}
                    className={`relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                      isActive ? 'text-brand-navy' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <Icon
                      size={14}
                      className={`transition-colors duration-200 ${isActive ? 'text-brand-red' : 'text-slate-400'}`}
                    />
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Post cards */}
          <div ref={listRef} className="space-y-6">
            {filtered.map((post, i) => {
              const c = categoryColor[post.category]
              return (
                <article
                  key={`${post.slug}-${i}`}
                  className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-md hover:border-red-100 transition-all"
                >
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
                      style={{ color: c.text, borderColor: c.border, background: c.bg }}
                    >
                      <Tag size={10} />
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 leading-snug">
                    {post.title}
                  </h2>

                  {/* Press release extras */}
                  {post.source && post.sourceHref && (
                    <a
                      href={post.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}
                    >
                      <ExternalLink size={11} />
                      See original release on {post.source}
                    </a>
                  )}
                  {post.label && (
                    <p className="text-sm font-semibold text-slate-700 mb-2 italic">{post.label}</p>
                  )}
                  {post.location && (
                    <p className="text-xs font-mono text-slate-400 mb-3">{post.location}</p>
                  )}

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{post.excerpt}</p>

                  {/* Developer notes: section bullets */}
                  {post.sections && (
                    <div className="space-y-2 mb-5">
                      {post.sections.map(sec => (
                        <div key={sec.heading} className="flex items-start gap-3">
                          <div
                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: '#E9384D' }}
                          />
                          <div>
                            <p className="text-sm font-bold text-slate-700">{sec.heading}</p>
                            <p className="text-sm text-slate-500 mt-0.5">{sec.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Developer notes: tickets */}
                  {post.tickets && post.tickets.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tickets.map(ticket => (
                        <span
                          key={ticket}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg"
                          style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}
                        >
                          {ticket}
                        </span>
                      ))}
                    </div>
                  )}

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                    style={{ color: '#E9384D' }}
                  >
                    Read more
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
