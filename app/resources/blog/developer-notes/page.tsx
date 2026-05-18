import { createMetadata } from '@/lib/seo'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import BlogCategoryHeader from '@/components/BlogCategoryHeader'
import PostMeta from '@/components/PostMeta'
import { ArrowRight } from 'lucide-react'

type Section = { heading: string; body: string }
type Group = { title: string; subtitle: string; sections: Section[]; tickets: string[] }
type Post = {
  slug: string
  title: string
  date: string
  categories: string[]
  excerpt: string
  groups: Group[]
}

const posts: Post[] = [
  {
    slug: 'una-development-updates-11-april-25',
    title: 'UNA Development Updates: 11 April 25',
    date: 'April 11, 2025',
    categories: ['Blog', 'Developer Notes'],
    excerpt: 'Platform-wide fixes and improvements across Admin Legacy, Admin V2, and the HCP App.',
    groups: [
      {
        title: 'Admin Legacy App',
        subtitle: 'Fixes & Improvements',
        sections: [
          { heading: 'Dropdown Menu Enhancements', body: 'Added "View Profile" and "Sign Out" options to the dropdown menu.' },
          { heading: 'Profile Image Update', body: 'Replacing the profile image now updates correctly without delay.' },
          { heading: 'Checklist Delete Message', body: 'Deleting a section with items now shows a complete warning message.' },
        ],
        tickets: ['UNA-907', 'UNA-919', 'UNA-932'],
      },
      {
        title: 'Admin V2 App',
        subtitle: 'UI / Layout Fixes',
        sections: [
          { heading: '"Create New Invite" Page', body: 'Fixed UI shift when clicking "Expand" button and resolved background height reduction.' },
          { heading: 'Avatar Consistency', body: 'Unified avatar styling across roster and profile views.' },
          { heading: 'Checklist Spacing & Scroll Fixes', body: 'Removed unnecessary horizontal scrollbars and fixed spacing in print.' },
          { heading: 'Header & Page Title', body: 'Changed duplicate title to "View Profile" and fixed HCP profile name collapse on mobile.' },
          { heading: 'Input Field Standardization', body: 'Standardized email input box width across app.' },
          { heading: 'Mobile Responsiveness', body: 'Improved page spacing, resolved scroll issues, and adjusted misaligned content across mobile and tablet devices.' },
        ],
        tickets: ['UNA-912', 'UNA-922', 'UNA-920', 'UNA-933', 'UNA-942', 'UNA-950', 'UNA-938', 'UNA-939', 'UNA-956', 'UNA-957', 'UNA-948', 'UNA-940'],
      },
      {
        title: 'HCP App',
        subtitle: 'Navigation, Forms & Media',
        sections: [
          { heading: 'Scroll Fix', body: 'Fixed page scroll issue when returning from UNA Wallet item.' },
          { heading: '"Change Role" Button', body: 'Resolved delayed appearance on Profile page.' },
          { heading: 'Reference Form Fix', body: '"Currently Working Here" checkbox now correctly affects reference form.' },
          { heading: 'Wallet Defaults', body: '"Currently working here" starts unchecked by default.' },
          { heading: 'Primary Specialty', body: 'Added missing specialty field to test, checklist, and course results.' },
          { heading: 'Status Labels & Styling', body: 'Reference status labels are color-coded; questions are now bold; checklist results include status labels.' },
          { heading: 'HTML Editor', body: 'Added audio upload support for tests and mandatories.' },
        ],
        tickets: ['UNA-662', 'UNA-926', 'UNA-914', 'UNA-923', 'UNA-921', 'UNA-936', 'UNA-952', 'UNA-924', 'UNA-971'],
      },
    ],
  },
]

export const metadata = createMetadata(
  'Developer Notes | UNA Health Blog',
  'Technical updates and developer notes from the UNA Health engineering team.',
  '/resources/blog/developer-notes',
)

export default function DeveloperNotesPage() {
  return (
    <>
      <BlogCategoryHeader
        title="Developer Notes"
        description="Archive of all public changelogs for the UNA products."
      />

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
                    <PostMeta date={post.date} categories={post.categories} />
                    <h2 className="text-2xl font-bold text-brand-navy mb-2">{post.title}</h2>
                    <p className="text-slate-500 font-medium mb-8">{post.excerpt}</p>

                    <div className="space-y-8">
                      {post.groups.map((group, gi) => (
                        <div key={group.title}>
                          {gi > 0 && <div className="border-t border-slate-100 mb-8" />}
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-sm font-extrabold text-brand-navy">{group.title}</h3>
                            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                              style={{ backgroundColor: 'rgba(233,56,77,0.07)', color: '#C42038' }}>
                              {group.subtitle}
                            </span>
                          </div>

                          <div className="space-y-3 mb-5">
                            {group.sections.map(sec => (
                              <div key={sec.heading} className="flex items-start gap-3">
                                <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#E9384D' }} />
                                <div>
                                  <p className="text-sm font-bold text-slate-700">{sec.heading}</p>
                                  <p className="text-sm text-slate-500 mt-0.5">{sec.body}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Related Tickets</p>
                            <div className="flex flex-wrap gap-2">
                              {group.tickets.map(ticket => (
                                <span key={ticket} className="text-xs font-mono px-2.5 py-1 rounded-lg"
                                  style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}>
                                  {ticket}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12">
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
