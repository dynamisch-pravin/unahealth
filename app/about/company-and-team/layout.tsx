import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata(
  'Company & Team | UNA Health',
  'Learn about the team behind UNA Health and our mission to transform clinical credentialing for healthcare professionals, hospitals, and staffing agencies.',
  '/about/company-and-team',
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
