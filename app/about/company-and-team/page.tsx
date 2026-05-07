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
    accent: '#0B72B5',
    photo: '/team/ron.jpg',
    bio: 'Ron is a nurse entrepreneur who started his career as a Med-Surg RN on Long Island, NY. He became a nurse manager soon thereafter, leaving the systems and operations of Healthcare Staffing. In 2004, Ron founded and launched NurseTesting.com, which later became Prophecy Healthcare. He successfully sold Prophecy to APS/Relias in 2015. Ron Co-Founded JobRobotix in 2016 (with a successful exit in 2022), and subsequently launched UNA Health in 2020. Ron has almost 20 years experience building & scaling innovative, next-generation technology for healthcare markets.',
  },
  {
    name: 'Leslie Jeffries MSN, BSN, RN',
    title: 'Senior VP of Operations',
    initials: 'LJ',
    accent: '#E9384D',
    photo: '/team/leslie.jpg',
    bio: 'Leslie is a registered nurse with clinical background in ICU, Telemetry, and nursing management. Her executive experience is multi-faceted, including VMS operations in healthcare staffing, pre-employment testing at Prophecy Healthcare, assessment-driven learning for physicians and nurses, consulting for healthcare staffing companies working towards Joint Commission certification, and operations of UNA Health. Outside of UNA, she volunteers as a basketball coach, pianist, and several boards of directors for various non-profit organizations.',
  },
]

const sisco = [
  {
    name: 'Dr. Rob Kittinger',
    role: 'Ph.D. Industrial-Organizational Psychology',
    photo: '/team/rob.jpg',
    initials: 'RK',
    detail: 'Extensive background with Amazon, Sandia National Labs, and the U.S. Navy. Expertise in advanced technology, statistics, and high-stakes testing.',
  },
  {
    name: 'T.J. Waggoner',
    role: 'Psychology & Organizational Behavior',
    photo: '/team/tj.jpg',
    initials: 'TW',
    detail: 'CEO and co-founder of Waggoner Diagnostics, focusing on occupational health improvements and federal agency consulting.',
  },
]

function LeaderCard({ member }: { member: typeof team[0] }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: member.accent }} />

      <div className="p-8">
        {/* Photo + name row */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white shadow-lg"
              style={{ boxShadow: `0 8px 24px ${member.accent}30` }}>
              {!failed ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover object-top w-full h-full"
                  onError={() => setFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: member.accent }}>
                  {member.initials}
                </div>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-brand-navy leading-tight">{member.name}</h3>
            <span className="inline-block mt-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: member.accent, backgroundColor: member.accent + '15' }}>
              {member.title}
            </span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-slate-500 leading-relaxed text-sm">{member.bio}</p>
      </div>
    </div>
  )
}

function AdvisorCard({ advisor }: { advisor: typeof sisco[0] }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 flex gap-6 p-7 items-start">
      {/* Portrait photo */}
      <div className="flex-shrink-0">
        <div className="w-28 h-36 rounded-2xl overflow-hidden shadow-md bg-slate-100">
          {!failed ? (
            <Image
              src={advisor.photo}
              alt={advisor.name}
              width={112}
              height={144}
              className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-500"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-blue">
              <span className="text-white text-3xl font-bold">{advisor.initials}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pt-1">
        <h3 className="text-lg font-bold text-brand-navy mb-1 leading-tight">{advisor.name}</h3>
        <p className="text-xs font-bold text-brand-blue mb-3 uppercase tracking-widest">{advisor.role}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{advisor.detail}</p>
      </div>
    </div>
  )
}

function SiscoLogo() {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <p className="text-3xl font-extrabold text-brand-navy tracking-tight">SISCo <span className="text-brand-blue font-medium text-lg">Powered by UNA</span></p>
  }
  return (
    <Image
      src="/team/sisco-logo.png"
      alt="SISCo – Powered by UNA"
      width={260}
      height={90}
      className="mx-auto h-20 w-auto"
      onError={() => setFailed(true)}
    />
  )
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Our People</span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">Leadership Team</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map(m => <LeaderCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* SISCo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SiscoLogo />
            <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
              Our expert advisory board guiding UNA&apos;s clinical and technological direction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {sisco.map(s => <AdvisorCard key={s.name} advisor={s} />)}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
