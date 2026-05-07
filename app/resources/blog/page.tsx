'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import { ArrowRight, Calendar, Tag, LayoutGrid, Code2, Newspaper } from 'lucide-react'

type Category = 'All' | 'Developer Notes' | 'Press Releases'

const posts = [
  {
    slug: 'press-releases',
    title: 'UNA Health Introduces UNA AIR: Revolutionizing Candidate Remediation in Healthcare',
    date: 'May 29, 2025',
    category: 'Press Releases' as Category,
    excerpt:
      'UNA Health announced the launch of UNA AIR (Automated Instant Remediation) — a cutting-edge solution designed to accelerate onboarding and elevate clinical readiness by delivering instant, personalized remediation content to clinicians.',
  },
  {
    slug: 'press-releases',
    title: 'UNA Health Sets the Standard for Integrated Healthcare Hiring Through Deep ATS & Staffing Platform Partnerships',
    date: 'May 13, 2025',
    category: 'Press Releases' as Category,
    excerpt:
      "UNA Health is reinforcing its role as the connective tissue across the healthcare hiring stack by expanding and deepening its integration partnerships with applicant tracking systems (ATS) and staffing platforms.",
  },
  {
    slug: 'developer-notes',
    title: 'UNA Development Updates: 11 April 25',
    date: 'April 25, 2025',
    category: 'Developer Notes' as Category,
    excerpt:
      'Admin Legacy App Fixes & Improvements — Dropdown Menu Enhancements, Profile Image Update, Checklist Delete Message, and more.',
  },
]

const tabs: { label: string; value: Category; Icon: React.ElementType }[] = [
  { label: 'All Blog Posts',    value: 'All',              Icon: LayoutGrid },
  { label: 'Developer Notes',   value: 'Developer Notes',  Icon: Code2      },
  { label: 'Press Releases',    value: 'Press Releases',   Icon: Newspaper  },
]

const categoryColor: Record<Category, { text: string; border: string; bg: string }> = {
  'All':             { text: '#E9384D', border: 'rgba(233,56,77,0.25)', bg: 'rgba(233,56,77,0.05)' },
  'Developer Notes': { text: '#0B72B5', border: 'rgba(11,114,181,0.25)', bg: 'rgba(11,114,181,0.05)' },
  'Press Releases':  { text: '#E9384D', border: 'rgba(233,56,77,0.25)', bg: 'rgba(233,56,77,0.05)' },
}

export default function BlogPage() {
  const [active, setActive] = useState<Category>('All')

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

          {/* Filter tabs */}
          <div className="inline-flex items-center gap-1 bg-slate-100 rounded-2xl p-1.5 mb-10">
            {tabs.map(({ label, value, Icon }) => {
              const isActive = active === value
              return (
                <button
                  key={value}
                  onClick={() => setActive(value)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={
                    isActive
                      ? { backgroundColor: '#fff', color: '#0F2B5B', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0' }
                      : { backgroundColor: 'transparent', color: '#94A3B8', border: '1px solid transparent' }
                  }
                >
                  <Icon size={14} style={{ color: isActive ? '#E9384D' : '#94A3B8' }} />
                  {label}
                </button>
              )
            })}
          </div>

          {/* Post cards */}
          <div className="space-y-6">
            {filtered.map((post, i) => {
              const c = categoryColor[post.category]
              return (
                <article
                  key={`${post.slug}-${i}`}
                  className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-md hover:border-red-100 transition-all"
                >
                  {/* Meta */}
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

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{post.excerpt}</p>

                  {/* Read more */}
                  <Link
                    href={`/resources/blog/${post.slug}`}
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
