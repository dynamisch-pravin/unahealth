import type { Metadata } from 'next'

export function createMetadata(
  title: string,
  description: string,
  canonical: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}
