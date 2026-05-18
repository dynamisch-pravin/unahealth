import { createMetadata } from '@/lib/seo'
import Image from 'next/image'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import BlogCategoryHeader from '@/components/BlogCategoryHeader'
import PostMeta from '@/components/PostMeta'
import { ArrowRight, ExternalLink } from 'lucide-react'

type Post = {
  title: string
  date: string
  categories: string[]
  source: string
  sourceHref: string
  location: string
  label: string | null
  body: string
  image?: string
  imageAlt?: string
  quote?: string
  quoteAuthor?: string
  bulletsLabel?: string
  bullets?: string[]
  secondBulletsLabel?: string
  secondBullets?: string[]
  relatedHref: string
  relatedLabel: string
}

const posts: Post[] = [
  {
    title: 'UNA Health Introduces UNA AIR: Revolutionizing Candidate Remediation in Healthcare',
    date: 'May 29, 2025',
    categories: ['Blog', 'Press Releases'],
    source: 'PRNewswire',
    sourceHref: '#',
    location: 'GREENSBORO, N.C., May 29, 2025 /PRNewswire/',
    label: 'A New Tool for Closing Knowledge Gaps, Improving Onboarding, and Elevating Care',
    body: "UNA Health, the nation's fastest-growing healthcare competency testing platform, announced the launch of UNA AIR (Automated Instant Remediation) — a solution designed to accelerate onboarding and elevate clinical readiness by delivering instant, personalized remediation to healthcare professionals. UNA AIR identifies knowledge gaps during clinical testing and delivers targeted \"content snacks\" — bite-sized educational refreshers — improving retake success rates and accelerating time-to-placement. The platform automates exam scheduling and remediation cycles, allowing candidates to retest with zero manual intervention and reducing administrative burden on healthcare organizations.",
    quote: "UNA AIR is designed to drastically improve the onboarding process while ensuring the highest standards of clinical competency. By providing instant remediation, we empower candidates to address their knowledge gaps directly — resulting in a more confident, capable, and compliant healthcare workforce.",
    quoteAuthor: "Ron Gonzalez, CEO of UNA Health",
    image: '/pressrealase/UNA_Health_launch_UNA_AIR.jpg',
    imageAlt: 'UNA AIR remediation interface on tablet',
    bulletsLabel: "Initial Launch — 10 exams available June 2:",
    bullets: ['RN Pharmacology', 'CNA', 'Long Term Care RN', 'Behavioral Health RN', 'Medical Surgical RN', 'LPN/LVN', 'Operating Room RN', 'Medical Assistant', 'Clinic RN', 'Dysrhythmia General'],
    secondBulletsLabel: "Expanding within 30 days:",
    secondBullets: ['MRI Tech', 'Corrections RN', 'ER PEDS RN', 'PICU RN', 'CVICU RN', 'PEDS RN', 'Respiratory Tech', 'Physical Therapist', 'Behavioral Health Tech'],
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
    body: "UNA Health, the nation's fastest-growing healthcare competency testing platform, is reinforcing its role as the technology standard for connected hiring by expanding and deepening its integration partnerships with applicant tracking systems (ATS) and staffing platforms across the ecosystem. With a relentless commitment to interoperability, UNA is investing heavily in building and scaling connections that unify the experience for staffing firms, travel nurse companies, healthcare facilities, and workforce platforms — resulting in faster fill times, better compliance, and industry-leading transparency.",
    quote: "Our goal is to be the connective tissue across the healthcare hiring stack. When we connect directly into our partners' systems, we unlock compounding value: richer insights, smoother workflows, and the ability to benchmark performance nationwide.",
    quoteAuthor: "Ron Gonzalez, CEO at UNA Health",
    image: '/pressrealase/UNA_Health_Partnerships.jpg',
    imageAlt: 'ATS integration partners: Credentially, Nexus by LaborEdge, Bullhorn, NextCrew, Ceipal',
    bulletsLabel: "Current Integration Partners:",
    bullets: ['Credentially', 'LaborEdge – Nexus', 'Bullhorn', 'NextCrew', 'Ceipal'],
    secondBulletsLabel: "Integrations In Progress:",
    secondBullets: ['ActivateStaff', 'JobDiva', 'VARS Health', 'WorkDay'],
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
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{post.bulletsLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.bullets.map(b => (
                          <span key={b} className="text-xs font-medium px-2.5 py-1 rounded-lg"
                            style={{ backgroundColor: 'rgba(233,56,77,0.07)', color: '#C42038' }}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {post.secondBulletsLabel && post.secondBullets && (
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{post.secondBulletsLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.secondBullets.map(b => (
                          <span key={b} className="text-xs font-medium px-2.5 py-1 rounded-lg"
                            style={{ backgroundColor: 'rgba(15,43,91,0.06)', color: '#0F2B5B' }}>
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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
