'use client'

import { useState } from 'react'
import ContactSection from '@/components/ContactSection'
import { ChevronDown } from 'lucide-react'

const sections = [
  {
    title: 'Super Admins, Admins & Recruiters',
    color: 'bg-brand-blue',
    faqs: [
      {
        q: 'What is UNA?',
        a: 'UNA is a comprehensive platform that provides Clinical Competency Testing solutions, skills checklists, self-assessment tools, and mandatory courses for healthcare professionals.',
      },
      {
        q: 'How do I create and manage profiles for my healthcare professionals (HCPs)?',
        a: 'Profiles can be created and managed within the UNA admin dashboard or through integrated core ATS platforms, onboarding tools, or CRM systems.',
      },
      {
        q: 'How can I assign content to HCPs?',
        a: 'Content assignment occurs through the UNA admin dashboard or integrated solutions, including competency tests, skills checklists, and mandatory courses for individual HCPs or groups.',
      },
      {
        q: 'How do I track the progress of assigned content?',
        a: 'Real-time monitoring happens through the UNA admin dashboard with detailed reports. The API also supports progress tracking integration into your system of record.',
      },
      {
        q: 'Can I add custom or client-specific content to the UNA platform?',
        a: 'Yes, the platform allows course customization to meet organizational requirements and includes client-specific education modules.',
      },
      {
        q: 'How secure is the UNA platform?',
        a: 'UNA employs advanced security measures to ensure the protection of sensitive data. All data is stored securely, and access is controlled.',
      },
      {
        q: 'What kind of support does UNA offer for integration?',
        a: 'UNA provides API documentation and technical support to assist with integration and address questions during implementation.',
      },
      {
        q: 'How do we contact UNA?',
        a: 'Contact via phone at 336-544-4829 (9am–5pm EST) or email help@unahealth.com (9am–9pm EST).',
      },
    ],
  },
  {
    title: 'HCPs, Candidates & Clinicians',
    color: 'bg-teal-500',
    faqs: [
      {
        q: 'What is the UNA platform?',
        a: 'UNA is an easy-to-use, mobile platform designed to help healthcare professionals manage their clinical competency, complete mandatory courses, and stay compliant with industry standards.',
      },
      {
        q: 'How do I access my assigned content?',
        a: 'After receiving an email invitation from your recruiting organization, access your assignments through the UNA web portal using your login credentials.',
      },
      {
        q: 'Can I complete my assignments on a mobile device?',
        a: 'Yes, the platform is mobile-friendly, enabling completion of assignments on mobile devices.',
      },
      {
        q: 'How is my personal information protected on UNA?',
        a: 'Your personal information and credentials are stored securely, and access is restricted to authorized personnel only.',
      },
      {
        q: 'Who do I contact if I need help with the UNA platform?',
        a: "Contact your organization's admin user or UNA's support team via help@unahealth.com or the in-app help section.",
      },
      {
        q: 'Can I update my personal and professional information on UNA?',
        a: 'Yes, users can update profile information through the platform to maintain current credentials, certifications, and contact details.',
      },
    ],
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border border-slate-100 rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'shadow-md' : 'hover:border-slate-200'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`text-sm font-semibold leading-snug transition-colors ${open ? 'text-brand-blue' : 'text-slate-800 group-hover:text-brand-blue'}`}>
          {q}
        </span>
        <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 ${open ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-light group-hover:text-brand-blue'}`}>
          <ChevronDown size={15} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FaqsPage() {
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
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
            FAQs
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-4">
            Frequently asked questions.
          </h1>
          <p className="text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about UNA. Can&apos;t find what you&apos;re looking for? Reach out to our team.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-14 last:mb-0">
              {/* Section header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-8 rounded-full ${section.color}`} />
                <h2 className="text-xl font-bold text-brand-navy">{section.title}</h2>
              </div>

              {/* FAQ items */}
              <div className="space-y-3 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                {section.faqs.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="mt-16 bg-brand-navy rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-slate-300 mb-6 max-w-md mx-auto">
              Our team is available Monday–Friday, 9am–9pm EST. We're happy to help.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="tel:3365444829"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 transition-all">
                📞 336-544-4829
              </a>
              <a href="mailto:help@unahealth.com"
                className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-redDark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all">
                ✉️ help@unahealth.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
