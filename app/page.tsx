import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}
import Stats from '@/components/Stats'
import VideoSection from '@/components/VideoSection'
import WhatIsUna from '@/components/WhatIsUna'
import UseCases from '@/components/UseCases'
import Partners from '@/components/Partners'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <VideoSection />
      <WhatIsUna />
      <UseCases />
      <Partners />
      <Testimonials />
      <ContactSection />
    </>
  )
}
