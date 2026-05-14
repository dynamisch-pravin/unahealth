import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata(
  'UNA Prep | NCLEX Preparation for Nursing Students',
  'UNA Prep helps nursing students prepare for the NCLEX with adaptive practice exams, competency assessments, and study resources built by clinical experts.',
  '/resources/una-prep',
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
