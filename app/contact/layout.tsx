import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata(
  'Contact UNA Health | Get Started with Clinical Credentialing',
  'Get in touch with the UNA Health team to learn how UNA can transform clinical credentialing for your hospital network, staffing agency, or healthcare organization.',
  '/contact',
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
