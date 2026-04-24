import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact UNA Health"
        headline="Ready to start?"
        subheadline="Fill out the form below to learn more from our team. Whether you're a hospital network, staffing agency, or healthcare professional — we're here to help."
      />
      <ContactSection />
    </>
  )
}
