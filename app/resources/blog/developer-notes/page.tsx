import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import { ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react'

const posts = [
  {
    slug: 'una-development-updates-11-april-25',
    title: 'UNA Development Updates: 11 April 25',
    date: 'April 25, 2025',
    categories: ['Blog', 'Developer Notes'],
    excerpt: 'Admin Legacy App Fixes & Improvements',
    sections: [
      {
        heading: 'Dropdown Menu Enhancements',
        body: 'Added "View Profile" and "Sign Out" options to the dropdown menu.',
      },
      {
        heading: 'Profile Image Update',
        body: 'Replacing the profile image now updates correctly without delay.',
      },
      {
        heading: 'Checklist Delete Message',
        body: 'Deleting a section with items now shows a complete warning message.',
      },
    ],
    tickets: ['UNA-907: Update UI for "My Profile"'],
  },
]

export default function DeveloperNotesPage() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="pt-36 pb-16" style={{ backgroundColor: '#0F2B5B' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs mb-4" style={{ color: 'rgba(255,255,255,0.40)' }}>
            <Link href="/resources/blog" className="hover:text-white transition-colors">Resources</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.70)' }}>Developer Notes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Developer Notes</h1>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.60)' }}>
            Archive of all public changelogs for the UNA products.
          </p>
        </div>
      </section>

      {/* ── Posts list ── */}
      <section className="py-16 bg-slate-50 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {posts.length === 0 ? (
            <div className="text-center py-20 text-slate-400">No posts yet. Check back soon.</div>
          ) : (
            <div className="space-y-8">
              {posts.map(post => (
                <article key={post.slug}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-red-100 transition-all">
                  <div className="p-8 sm:p-10">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      {post.categories.map(cat => (
                        <span key={cat} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
                          style={{ color: '#E9384D', borderColor: 'rgba(233,56,77,0.25)', background: 'rgba(233,56,77,0.05)' }}>
                          <Tag size={10} />
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-brand-navy mb-2">{post.title}</h2>
                    <p className="text-slate-500 font-medium mb-6">{post.excerpt}</p>

                    {/* Change sections */}
                    <div className="space-y-4 mb-6">
                      {post.sections.map(sec => (
                        <div key={sec.heading} className="flex items-start gap-3">
                          <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#E9384D' }} />
                          <div>
                            <p className="text-sm font-bold text-slate-700">{sec.heading}</p>
                            <p className="text-sm text-slate-500 mt-0.5">{sec.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Related tickets */}
                    {post.tickets && post.tickets.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Related Tickets</p>
                        <div className="flex flex-wrap gap-2">
                          {post.tickets.map(ticket => (
                            <span key={ticket} className="text-xs font-mono px-3 py-1.5 rounded-lg"
                              style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}>
                              {ticket}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link href="/resources/blog"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
              style={{ color: '#E9384D' }}>
              <ArrowRight size={14} className="rotate-180" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
