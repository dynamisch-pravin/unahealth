import { createMetadata } from '@/lib/seo'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import BlogCategoryHeader from '@/components/BlogCategoryHeader'
import PostMeta from '@/components/PostMeta'
import { ArrowRight, ExternalLink } from 'lucide-react'

const posts = [
  {
    title: 'UNA Health Introduces UNA AIR: Revolutionizing Candidate Remediation in Healthcare',
    date: 'May 29, 2025',
    categories: ['Blog', 'Press Releases'],
    source: 'PRNewswire',
    sourceHref: '#',
    location: 'GREENSBORO, N.C., May 29, 2025 /PRNewswire/',
    label: 'A New Tool for Closing Knowledge Gaps, Improving Onboarding, and Elevating Care',
    body: "UNA Health, the nation's fastest-growing healthcare competency testing platform, today announced the launch of UNA AIR (Automated Instant Remediation) — a cutting-edge solution designed to accelerate onboarding and elevate clinical readiness by delivering instant, personalized remediation content to clinicians who don't pass their initial competency assessment.",
    relatedHref: '/resources/una-air',
    relatedLabel: 'Learn about UNA Air',
  },
  {
    title: 'UNA Health Sets the Standard for Integrated Healthcare Hiring Through Deep ATS & Staffing Platform Partnerships',
    date: 'May 13, 2025',
    categories: ['Blog', 'Press Releases'],
    source: 'PRNewswire',
    sourceHref: '#',
    location: 'GREENSBORO, N.C., May 13, 2025 /PRNewswire/',
    label: null,
    body: "UNA Health, the nation's fastest-growing healthcare competency testing platform, is reinforcing its role as the technology standard for connected hiring by expanding and deepening its integration partnerships with applicant tracking systems (ATS) and staffing platforms across the ecosystem. UNA's current integration partners include leading names across travel nursing, per diem staffing, and workforce management.",
    relatedHref: '/resources/integrations',
    relatedLabel: 'View Integration Partners',
  },
]

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

      {/* ── Posts list ── */}
      <section className="py-16 bg-slate-50 min-h-[400px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article key={i}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md hover:border-red-100 transition-all">
                <div className="p-8 sm:p-10">
                  <PostMeta date={post.date} categories={post.categories} />

                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-3 leading-snug">
                    {post.title}
                  </h2>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
                    style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}>
                    <ExternalLink size={11} />
                    See original release on {post.source}
                  </div>

                  <p className="text-xs font-mono text-slate-400 mb-3">{post.location}</p>

                  {post.label && (
                    <p className="text-sm font-semibold text-slate-700 mb-3 italic">{post.label}</p>
                  )}

                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{post.body}</p>

                  <Link href={post.relatedHref}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-colors group"
                    style={{ color: '#E9384D' }}>
                    {post.relatedLabel}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

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
