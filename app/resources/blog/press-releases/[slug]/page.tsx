import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import PostMeta from '@/components/PostMeta'
import { createMetadata } from '@/lib/seo'
import { allPosts, type PressReleasePost } from '@/lib/blog-data'
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react'

const pressReleasePosts = allPosts.filter((p): p is PressReleasePost => p.type === 'press-release')

export function generateStaticParams() {
  return pressReleasePosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = pressReleasePosts.find(p => p.slug === slug)
  if (!post) return {}
  return createMetadata(`${post.title} | UNA Health`, post.body.slice(0, 160), `/resources/blog/press-releases/${post.slug}`)
}

export default async function PressReleasePostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = pressReleasePosts.find(p => p.slug === slug)
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
            <Link href="/resources/blog/press-releases" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.60)' }}>Press Releases</Link>
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

              <p className="text-xs font-mono text-slate-400 mb-4">{post.location}</p>

              {post.label && (
                <p className="text-sm font-semibold text-slate-700 mb-4 italic">{post.label}</p>
              )}

              <p className="text-sm text-slate-600 leading-relaxed mb-8">{post.body}</p>

              {post.image && (
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-100 mb-8 bg-slate-50">
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
                <blockquote className="border-l-4 pl-5 mb-8" style={{ borderColor: '#E9384D' }}>
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

              <Link
                href={post.relatedHref}
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors group mb-8"
                style={{ color: '#E9384D' }}
              >
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
            </div>
          </article>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link
              href="/resources/blog/press-releases"
              className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
              style={{ color: '#E9384D' }}
            >
              <ArrowRight size={14} className="rotate-180" />
              Back to Press Releases
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
