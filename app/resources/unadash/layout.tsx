import { createMetadata } from '@/lib/seo'

export const metadata = createMetadata(
  'UNADash | Average Exam Completion Times by Specialty',
  'UNADash provides real-time benchmarks on clinical exam completion times across specialties — helping healthcare organizations set realistic credentialing expectations.',
  '/resources/unadash',
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
