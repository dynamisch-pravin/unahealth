import Link from 'next/link'
import ContactSection from '@/components/ContactSection'

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#E9384D 0%,rgba(233,56,77,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(233,56,77,0.05) 0%,transparent 65%)', filter: 'blur(40px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-full pointer-events-none opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 20% 50%, black 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 20% 50%, black 20%, transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>Created: May 5, 2022</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 inline-block" />
            <span>Last modified: May 23, 2024</span>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">

            {/* Intro */}
            <p className="text-slate-600 leading-relaxed text-base mb-10">
              Welcome to UNA Health (<Link href="https://unahealth.com" className="text-brand-blue hover:underline">https://unahealth.com</Link>).
              We value your privacy and are committed to protecting your personal data.
              This policy applies to information collected through our websites, mobile and desktop applications,
              and third-party advertising containing links to this policy.
            </p>

            <PolicySection number="1" title="Types of Information Collected">
              <p className="text-slate-600 leading-relaxed mb-4">We may collect the following types of information:</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-3">Personal Information</p>
                  <ul className="space-y-2">
                    {['Name', 'Email address', 'Phone number', 'Address'].map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-navy mb-3">Technical Information</p>
                  <ul className="space-y-2">
                    {['Internet connection details', 'Equipment used to access the site', 'Usage details and traffic data'].map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 inline-block" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </PolicySection>

            <PolicySection number="2" title="How We Collect Information">
              <p className="text-slate-600 leading-relaxed mb-3">Information is gathered through:</p>
              <ul className="space-y-2 mb-4">
                {[
                  'Direct provision — forms, account creation, and contact submissions',
                  'Automatic collection while navigating the site (usage details, IP addresses, cookies)',
                  'Third-party sources such as analytics providers and social media platforms',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="3" title="Use of Information">
              <p className="text-slate-600 leading-relaxed mb-3">We use collected information for:</p>
              <ul className="space-y-2">
                {[
                  'Providing and improving our services',
                  'Personalizing your user experience',
                  'Communicating about updates, offers, and promotions',
                  'Analyzing website usage and trends',
                  'Ensuring system security and integrity',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="4" title="Information Sharing">
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong className="text-brand-navy font-semibold">We do not sell or rent your personal information to third parties.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed mb-3">Disclosure occurs only when:</p>
              <ul className="space-y-2">
                {[
                  'Required by law or regulation',
                  'Necessary to comply with legal processes',
                  'Protecting company rights and property',
                  'Responding to fraudulent activity',
                  'Addressing potential harm to others',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="5" title="Cookies and Tracking Technologies">
              <p className="text-slate-600 leading-relaxed mb-4">
                Our site uses cookies and similar technologies to track activity and improve your experience.
                You can configure your browser to refuse cookies, though this may limit certain website functionality.
              </p>
              <p className="text-slate-600 leading-relaxed mb-3">Automatic data collection includes:</p>
              <ul className="space-y-2">
                {[
                  'Visit details and traffic data',
                  'IP address, operating system, and browser type',
                  'Resources accessed and used during your visit',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="6" title="Data Security">
              <p className="text-slate-600 leading-relaxed mb-3">
                We strictly protect the security of your personal information. Our protection measures include:
              </p>
              <ul className="space-y-2">
                {[
                  'Password-controlled servers with limited internal access',
                  'SSL encryption for all sensitive data transfers',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2 inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </PolicySection>

            <PolicySection number="7" title="Data Retention and Erasure">
              <p className="text-slate-600 leading-relaxed">
                Personal data is retained only as long as necessary to provide our services. You may request deletion of
                your account, email address, and related information at any time. Please be aware that deletion may affect
                service quality and access to certain features.
              </p>
            </PolicySection>

            <PolicySection number="8" title="External Links">
              <p className="text-slate-600 leading-relaxed">
                Our site contains links to third-party websites. We are not responsible for the content or privacy
                practices of those external sites. We encourage you to review their privacy policies before providing
                any personal information.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Policy Updates">
              <p className="text-slate-600 leading-relaxed">
                This privacy policy may be updated periodically to reflect changes in our practices or applicable law.
                We advise you to review this page regularly for any updates. Continued use of our services after
                changes are posted constitutes your acceptance of the revised policy.
              </p>
            </PolicySection>

            <PolicySection number="10" title="Contact Us" last>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions or concerns about this privacy policy or how we handle your data,
                please reach out to us:
              </p>
              <a href="mailto:hello@unahealth.com"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline">
                hello@unahealth.com
              </a>
            </PolicySection>

          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function PolicySection({ number, title, children, last = false }: {
  number: string
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div className={`${last ? '' : 'mb-10 pb-10 border-b border-slate-100'}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
          {number}
        </span>
        <h2 className="text-xl font-extrabold text-brand-navy tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  )
}
