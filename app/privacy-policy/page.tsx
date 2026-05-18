import { createMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Shield, Eye, Share2, Cookie, Database, Server, Lock, Trash2, ExternalLink, RefreshCw, Mail } from 'lucide-react'
import ContactSection from '@/components/ContactSection'

export const metadata = createMetadata(
  'Privacy Policy | UNA Health',
  "Read UNA Health's privacy policy to understand how we collect, use, and protect your personal information on our clinical credentialing platform.",
  '/privacy-policy',
)

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#E9384D 0%,rgba(233,56,77,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(15,43,91,0.04) 0%,transparent 65%)', filter: 'blur(40px)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.2]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
            <Shield size={11} />
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-base mb-6 max-w-xl leading-relaxed">
            We value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-1.5 text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              Created: May 5, 2022
            </span>
            <span className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-1.5 text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue inline-block" />
              Last modified: May 23, 2024
            </span>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>

            {/* Main content */}
            <div className="space-y-12">

              <PolicyBlock id="introduction" icon={Shield} title="Introduction">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Welcome to UNA Health (the &ldquo;<Link href="https://unahealth.com" className="text-brand-blue hover:underline font-medium">https://unahealth.com</Link>&rdquo;). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This policy applies to information we collect:
                </p>
              </PolicyBlock>

              <PolicyBlock id="information" icon={Eye} title="We may collect the following types of information:">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-5 inline-block w-full sm:w-64">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-navy mb-3">Personal Information</p>
                  <ul className="space-y-2.5">
                    {['Name', 'Email address', 'Phone number', 'Address'].map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We Collect Information from our websites, through mobile and desktop applications you download from this website. When you interact with advertising and applications on third-party websites and services if those applications or advertising include links to this policy.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  About your internet connection, the equipment you use to access our website, and usage details. We collect this information.
                </p>
              </PolicyBlock>

              <PolicyBlock id="how-we-collect" icon={Database} title="We collect information in various ways, including:">
                <BulletList items={[
                  'Directly from you when you provide it to us (e.g., through forms or account creation).',
                  'Automatically as you navigate through the Website (e.g., usage details, IP addresses, and cookies).',
                  'From third parties, like analytics providers and social media platforms.',
                ]} />
              </PolicyBlock>

              <PolicyBlock id="use" icon={Server} title="Use of Your Information">
                <p className="text-slate-600 leading-relaxed mb-4">We use the information we collect for purposes such as:</p>
                <BulletList items={[
                  'Providing and improving our services.',
                  'Personalizing your experience on the Website.',
                  'Communicating with you about updates, offers, and promotions.',
                  'Analysing Website usage and trends to enhance user experience.',
                  'Ensure security and integrity of our systems.',
                ]} />
              </PolicyBlock>

              <PolicyBlock id="sharing" icon={Share2} title="Sharing Your Information">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 px-5 py-4 mb-5 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield size={11} className="text-emerald-600" />
                  </div>
                  <p className="text-sm font-semibold text-emerald-800">We do not sell or rent your personal information to third parties.</p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Provider may disclose your personal information if required to do so by law (for example, a subpoena) or regulation, or in good faith to (a) comply with legal processes served on the site, or (b) protect the rights and property of Provider, or (c) where our records indicate fraudulent activity or other deceptive practices that a governmental agency should be made aware of, or (d) where your communication suggests possible harm to others.
                </p>
              </PolicyBlock>

              <PolicyBlock id="cookies" icon={Cookie} title="Cookies and Tracking Technologies">
                <p className="text-slate-600 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </PolicyBlock>

              <PolicyBlock id="auto-collection" icon={Eye} title="Information we collect through automatic data collection technologies">
                <p className="text-slate-600 leading-relaxed mb-4">
                  As you navigate through and interact with our website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions and patterns, including:
                </p>
                <BulletList items={[
                  'Details of your visits to our website, including traffic data and other communications data and resources you access and use on the website.',
                  'Information about your computer and internet connection, including your IP address, operating system, and browser type.',
                ]} />
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
                  <p className="text-sm text-slate-600">
                    The technology we use for this automatic data collection may include{' '}
                    <strong className="text-brand-navy font-semibold">Cookies (or browser type) and flash cookies.</strong>
                  </p>
                </div>
              </PolicyBlock>

              <PolicyBlock id="security" icon={Lock} title="Data Security">
                <div className="space-y-3">
                  {[
                    { icon: Lock,   text: 'Provider strictly protects the security of your personal information. We carefully protect your data from loss, misuse, unauthorized access or disclosure, alteration, or destruction.' },
                    { icon: Server, text: 'Your personal information is never shared outside the company without your permission, except as stated herein. Inside the company, data is stored in password-controlled servers with limited access.' },
                    { icon: Shield, text: 'We use SSL encryption when collecting or transferring sensitive data such as credit card and personal information.' },
                  ].map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5">
                      <div className="w-8 h-8 rounded-xl bg-brand-navy/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-brand-navy" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </PolicyBlock>

              <PolicyBlock id="erasure" icon={Trash2} title="Data Erasure">
                <p className="text-slate-600 leading-relaxed mb-4">
                  We do not hold your personal information for longer than is necessary. When we no longer have any use for your data, your data is deleted.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  User accounts, email addresses on our email lists, and related necessary information (First name, Last name, Email address, etc.) can be deleted upon request, under the understanding that this may affect the quality of future service received, experience of our sites, products and services, and ability for you to correctly access or otherwise receive our sites, products, and services.
                </p>
              </PolicyBlock>

              <PolicyBlock id="links" icon={ExternalLink} title="Links">
                <p className="text-slate-600 leading-relaxed">
                  This website may contain links to other sites. Please be aware that we are not responsible for the content or privacy of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                </p>
              </PolicyBlock>

              <PolicyBlock id="policy-updates" icon={RefreshCw} title="Policy Updates">
                <p className="text-slate-600 leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </PolicyBlock>

              <PolicyBlock id="contact" icon={Mail} title="Contact" last>
                <p className="text-slate-600 leading-relaxed mb-5">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <a href="mailto:hello@unahealth.com"
                  className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-navy/90 transition-colors">
                  <Mail size={15} />
                  hello@unahealth.com
                </a>
              </PolicyBlock>

            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}

function PolicyBlock({ id, icon: Icon, title, children, last = false }: {
  id: string
  icon: React.ElementType
  title: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <div id={id} className={`scroll-mt-24 ${last ? '' : 'pb-12 border-b border-slate-100'}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#E9384D,#C42038)' }}>
          <Icon size={15} className="text-white" />
        </div>
        <h2 className="text-lg font-extrabold text-brand-navy tracking-tight leading-snug">{title}</h2>
      </div>
      {children}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0 mt-2" />
          {item}
        </li>
      ))}
    </ul>
  )
}
