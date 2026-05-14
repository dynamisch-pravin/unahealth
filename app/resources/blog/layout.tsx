import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata(
  'Blog | UNA Health — Clinical Credentialing Insights',
  'Read the UNA Health blog for insights on clinical credentialing, healthcare workforce management, compliance trends, and product updates.',
  '/resources/blog',
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
