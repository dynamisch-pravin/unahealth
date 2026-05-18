import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import BlogCategoryHeader from '@/components/BlogCategoryHeader'
import PostMeta from '@/components/PostMeta'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { allPosts, type PressReleasePost } from '@/lib/blog-data'

const posts = allPosts.filter((p): p is PressReleasePost => p.type === 'press-release')

export const metadata = createMetadata(
  'Press Releases | UNA Health',
  'Official press releases and news announcements from UNA Health.',
  '/resources/blog/press-releases',
)

export default function PressReleasesPage() {
  return (
    <>
      <BlogCategoryHeader
        title="Press Releases"
        description="Archive of all press releases made by UNA Health, Inc."
      />

      <section className="py-16 bg-slate-50 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map(post => (
              <article key={post.slug}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-red-100 transition-all">
                <div className="p-8 sm:p-10">
                  <PostMeta date={post.date} categories={post.categories} />

                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 mt-3 leading-snug">
                    {post.title}
                  </h2>

                  <a
                    href={post.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}
                  >
                    <ExternalLink size={11} />
                    See original release on {post.source}
                  </a>

                  <p className="text-xs font-mono text-slate-400 mb-3">{post.location}</p>

                  {post.label && (
                    <p className="text-sm font-semibold text-slate-700 mb-3 italic">{post.label}</p>
                  )}

                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{post.body}</p>

                  {post.image && (
                    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-100 mb-6 bg-slate-50">
                      <Image
                        src={post.image}
                        alt={post.imageAlt ?? post.title}
                        width={900}
                        height={500}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}

                  {post.quote && (
                    <blockquote className="border-l-4 pl-5 mb-6" style={{ borderColor: '#E9384D' }}>
                      <p className="text-sm text-slate-600 italic leading-relaxed mb-2">&ldquo;{post.quote}&rdquo;</p>
                      <cite className="text-xs font-semibold text-slate-500 not-italic">— {post.quoteAuthor}</cite>
                    </blockquote>
                  )}

                  {post.bulletsLabel && post.bullets && (
                    <div className="mb-4">
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">{post.bulletsLabel}</p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        {post.bullets.map(b => (
                          <li key={b} className="text-sm text-slate-600">{b}</li>
                        ))}
                      </ul>
                      {post.bulletsNote && (
                        <p className="text-sm text-slate-600 leading-relaxed">{post.bulletsNote}</p>
                      )}
                    </div>
                  )}

                  {post.secondBulletsLabel && post.secondBullets && (
                    <div className="mb-6">
                      <p className="text-sm text-slate-600 leading-relaxed mb-2">{post.secondBulletsLabel}</p>
                      <ul className="list-disc list-inside space-y-1 mb-4">
                        {post.secondBullets.map(b => (
                          <li key={b} className="text-sm text-slate-600">{b}</li>
                        ))}
                      </ul>
                      {post.secondBulletsNote && (
                        <p className="text-sm text-slate-600 leading-relaxed">{post.secondBulletsNote}</p>
                      )}
                    </div>
                  )}

                  {post.availabilityBold && (
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      <strong className="font-bold text-slate-800">{post.availabilityBold}</strong>
                      {post.availabilityText}
                    </p>
                  )}

                  <Link href={post.relatedHref}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group mb-8"
                    style={{ color: '#E9384D' }}>
                    {post.relatedLabel}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  {post.aboutBody && (
                    <div className="border-t border-slate-100 pt-8 mb-6">
                      <h3 className="text-sm font-bold text-slate-800 mb-3">About UNA Health</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.aboutBody}</p>
                      <p className="text-sm text-slate-500">
                        For more information, visit{' '}
                        <Link href="/" className="underline underline-offset-2 hover:text-brand-navy transition-colors" style={{ color: '#E9384D' }}>
                          www.unahealth.com
                        </Link>
                        .
                      </p>
                    </div>
                  )}

                  {post.sourceCredit && (
                    <p className="text-xs font-semibold text-slate-400 pt-4 border-t border-slate-100">
                      {post.sourceCredit}
                    </p>
                  )}

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href={`/resources/blog/press-releases/${post.slug}`}
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
