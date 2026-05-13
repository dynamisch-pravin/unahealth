import { NextResponse } from 'next/server'

const BASE_URL = 'https://unahealth.com'

const posts = [
  {
    title: 'UNA Health Introduces UNA AIR: Revolutionizing Candidate Remediation in Healthcare',
    date: 'May 29, 2025',
    category: 'Press Releases',
    slug: 'press-releases',
    excerpt:
      'UNA Health announced the launch of UNA AIR (Automated Instant Remediation) — a cutting-edge solution designed to accelerate onboarding and elevate clinical readiness by delivering instant, personalized remediation content to clinicians.',
  },
  {
    title: 'UNA Health Sets the Standard for Integrated Healthcare Hiring Through Deep ATS & Staffing Platform Partnerships',
    date: 'May 13, 2025',
    category: 'Press Releases',
    slug: 'press-releases',
    excerpt:
      "UNA Health is reinforcing its role as the connective tissue across the healthcare hiring stack by expanding and deepening its integration partnerships with applicant tracking systems (ATS) and staffing platforms.",
  },
  {
    title: 'UNA Development Updates: 11 April 25',
    date: 'April 25, 2025',
    category: 'Developer Notes',
    slug: 'developer-notes',
    excerpt:
      'Admin Legacy App Fixes & Improvements — Dropdown Menu Enhancements, Profile Image Update, Checklist Delete Message, and more.',
  },
]

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/resources/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/resources/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>UNA Health Blog</title>
    <link>${BASE_URL}/resources/blog</link>
    <description>Latest news, developer updates and press releases from UNA Health.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
