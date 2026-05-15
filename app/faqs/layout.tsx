import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata(
  'Frequently Asked Questions | UNA Health',
  "Find answers to common questions about UNA's clinical credentialing platform, competency exams, skills checklists, and mobile-first credential management.",
  '/faqs',
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
