import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="UNA Resources"
        headline="Coming soon."
        subheadline="This page is in development. Reach out to our team to learn more."
        ctaLabel="Contact Us"
      />
      <ContactSection />
    </>
  )
}
