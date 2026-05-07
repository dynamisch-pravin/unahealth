'use client'

import { useState } from 'react'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'

const team = [
  {
    name: 'Ron Gonzalez, MS BSN',
    title: 'Founder / CEO',
    initials: 'RG',
    color: 'bg-brand-blue',
    photo: '/team/ron.jpg',
    bio: 'Ron is a nurse entrepreneur who started his career as a Med-Surg RN on Long Island, NY. He became a nurse manager soon thereafter, leaving the systems and operations of Healthcare Staffing. In 2004, Ron founded and launched NurseTesting.com, which later became Prophecy Healthcare. He successfully sold Prophecy to APS/Relias in 2015. Ron Co-Founded JobRobotix in 2016 (with a successful exit in 2022), and subsequently launched UNA Health in 2020. Ron has almost 20 years experience building & scaling innovative, next-generation technology for healthcare markets.',
  },
  {
    name: 'Leslie Jeffries MSN, BSN, RN',
    title: 'Senior VP of Operations',
    initials: 'LJ',
    color: 'bg-rose-500',
    photo: '/team/leslie.jpg',
    bio: 'Leslie is a registered nurse with clinical background in ICU, Telemetry, and nursing management. Her executive experience is multi-faceted, including VMS operations in healthcare staffing, pre-employment testing at Prophecy Healthcare, assessment-driven learning for physicians and nurses, consulting for healthcare staffing companies working towards Joint Commission certification, and operations of UNA Health. Outside of UNA, she volunteers as a basketball coach, pianist, and several boards of directors for various non-profit organizations.',
  },
]

const sisco = [
  {
    name: 'Dr. Rob Kittinger',
    role: 'Ph.D. Industrial-Organizational Psychology',
    bg: 'bg-slate-50',
    photo: '/team/rob.jpg',
    detail: 'Extensive background with Amazon, Sandia National Labs, and the U.S. Navy. Expertise in advanced technology, statistics, and high-stakes testing.',
  },
  {
    name: 'T.J. Waggoner',
    role: 'Psychology & Organizational Behavior',
    bg: 'bg-orange-50',
    photo: '/team/tj.jpg',
    detail: 'CEO and co-founder of Waggoner Diagnostics, focusing on occupational health improvements and federal agency consulting.',
  },
]

function Avatar({ photo, initials, color, name }: { photo?: string; initials: string; color: string; name: string }) {
  const [failed, setFailed] = useState(false)
  if (photo && !failed) {
    return (
      <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
        <Image src={photo} alt={name} width={64} height={64} className="object-cover w-full h-full" onError={() => setFailed(true)} />
      </div>
    )
  }
  return (
    <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white text-xl font-bold flex-shrink-0`}>
      {initials}
    </div>
  )
}

function SiscoMemberPhoto({ photo, name }: { photo: string; name: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
      <Image src={photo} alt={name} width={56} height={56} className="object-cover w-full h-full" onError={() => setFailed(true)} />
    </div>
  )
}

function SiscoLogo() {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <p className="text-2xl font-extrabold text-brand-navy tracking-tight mb-6">⚡ SISCo <span className="text-brand-blue font-medium text-base">Powered by UNA</span></p>
  }
  return <Image src="/team/sisco-logo.png" alt="SISCo – Powered by UNA" width={220} height={80} className="mx-auto mb-6 h-16 w-auto" onError={() => setFailed(true)} />
}

export default function CompanyAndTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Company and Team"
        headline="Made for nurses, by nurses."
        subheadline="UNA was established by professionals with decades of healthcare staffing experience who understand the challenges clinicians face and the operational needs of healthcare organizations."
      />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Our Mission</span>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy mb-6">What is UNA?</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            UNA is a suite of comprehensive mobile-first solutions for hospital networks, staffing agencies, and healthcare professionals.
            Better connect with candidates, improve applicant engagement, optimize compliance workflows, and set a new higher standard for
            your career or the clinicians in your organization.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map(m => (
              <div key={m.name} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-5 mb-5">
                  <Avatar photo={m.photo} initials={m.initials} color={m.color} name={m.name} />
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">{m.name}</h3>
                    <p className="text-sm font-semibold text-brand-blue mt-0.5">{m.title}</p>
                  </div>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SISCo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SiscoLogo />
            <p className="mt-3 text-slate-500 max-w-xl mx-auto">Our expert advisory board guiding UNA&apos;s clinical and technological direction.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {sisco.map(s => (
              <div key={s.name} className={`${s.bg} rounded-2xl p-7 border border-slate-100 flex items-start gap-4`}>
                <SiscoMemberPhoto photo={s.photo} name={s.name} />
                <div>
                  <h3 className="text-base font-bold text-brand-navy mb-1">{s.name}</h3>
                  <p className="text-xs font-semibold text-brand-blue mb-3">{s.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
