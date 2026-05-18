import { notFound } from 'next/navigation'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import PostMeta from '@/components/PostMeta'
import { createMetadata } from '@/lib/seo'
import { allPosts, type DeveloperNotePost } from '@/lib/blog-data'
import { ArrowRight, ChevronRight } from 'lucide-react'

const developerNotePosts = allPosts.filter((p): p is DeveloperNotePost => p.type === 'developer-note')

export function generateStaticParams() {
  return developerNotePosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = developerNotePosts.find(p => p.slug === slug)
  if (!post) return {}
  return createMetadata(`${post.title} | UNA Health`, post.excerpt, `/resources/blog/developer-notes/${post.slug}`)
}

export default async function DeveloperNotePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = developerNotePosts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <section className="pt-36 pb-16" style={{ backgroundColor: '#0F2B5B' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex items-center gap-2 text-xs mb-5"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            <Link href="/resources/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight size={12} />
            <Link href="/resources/blog/developer-notes" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.60)' }}>Developer Notes</Link>
            <ChevronRight size={12} />
            <span style={{ color: 'rgba(255,255,255,0.70)' }}>{post.title}</span>
          </div>
          <PostMeta date={post.date} categories={post.categories} />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-4 leading-tight">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 sm:p-12">
              <p className="text-slate-500 font-medium mb-10">{post.excerpt}</p>

              <div className="space-y-10">
                {post.groups.map((group, gi) => (
                  <div key={group.title}>
                    {gi > 0 && <div className="border-t border-slate-200 mb-10" />}
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{group.title}</h2>
                    <h3 className="text-lg font-semibold text-slate-700 mb-4">{group.subtitle}</h3>

                    <ul className="list-disc list-outside pl-5 space-y-3 mb-8">
                      {group.sections.map(sec => (
                        <li key={sec.heading} className="text-sm text-slate-600">
                          <span className="font-bold text-slate-800">{sec.heading}</span>
                          <br />{sec.body}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-semibold text-slate-700 mb-3">Related Tickets</h3>
                    <ul className="list-disc list-outside pl-5 space-y-1.5">
                      {group.tickets.map(ticket => (
                        <li key={ticket} className="text-sm text-slate-600">{ticket}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link
              href="/resources/blog/developer-notes"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
              style={{ color: '#E9384D' }}
            >
              <ArrowRight size={14} className="rotate-180" />
              Back to Developer Notes
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
