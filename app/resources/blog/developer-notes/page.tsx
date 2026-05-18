import { createMetadata } from '@/lib/seo'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import BlogCategoryHeader from '@/components/BlogCategoryHeader'
import PostMeta from '@/components/PostMeta'
import { ArrowRight } from 'lucide-react'
import { allPosts, type DeveloperNotePost } from '@/lib/blog-data'

const posts = allPosts.filter((p): p is DeveloperNotePost => p.type === 'developer-note')

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
                    <h2 className="text-2xl font-bold text-brand-navy mb-2 mt-3">{post.title}</h2>
                    <p className="text-slate-500 font-medium mb-10">{post.excerpt}</p>

                    <div className="space-y-10">
                      {post.groups.map((group, gi) => (
                        <div key={group.title}>
                          {gi > 0 && <div className="border-t border-slate-200 mb-10" />}
                          <h3 className="text-2xl font-bold text-slate-900 mb-1">{group.title}</h3>
                          <h4 className="text-lg font-semibold text-slate-700 mb-4">{group.subtitle}</h4>

                          <ul className="list-disc list-outside pl-5 space-y-3 mb-8">
                            {group.sections.map(sec => (
                              <li key={sec.heading} className="text-sm text-slate-600">
                                <span className="font-bold text-slate-800">{sec.heading}</span>
                                <br />{sec.body}
                              </li>
                            ))}
                          </ul>

                          <h4 className="text-lg font-semibold text-slate-700 mb-3">Related Tickets</h4>
                          <ul className="list-disc list-outside pl-5 space-y-1.5">
                            {group.tickets.map(ticket => (
                              <li key={ticket} className="text-sm text-slate-600">{ticket}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100">
                      <Link
                        href={`/resources/blog/developer-notes/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                        style={{ color: '#E9384D' }}
                      >
                        Read more
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
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
