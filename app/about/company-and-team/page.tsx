'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, CalendarDays, Mail, Linkedin, Feather, Rocket } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'

const team = [
  {
    name: 'Ron Gonzalez, MS BSN',
    title: 'Founder / CEO',
    initials: 'RG',
    accent: '#E9384D',
    photo: '/team/ron.jpg',
    bio: 'Ron is a nurse entrepreneur who started his career as a Med-Surg RN on Long Island, NY. He became a nurse manager soon thereafter, leaving the systems and operations of Healthcare Staffing. In 2004, Ron founded and launched NurseTesting.com, which later became Prophecy Healthcare. He successfully sold Prophecy to APS/Relias in 2015. Ron Co-Founded JobRobotix in 2016 (with a successful exit in 2022), and subsequently launched UNA Health in 2020. Ron has almost 20 years experience building & scaling innovative, next-generation technology for healthcare markets.',
    social: {
      phone: 'tel:3365444829',
      calendar: 'https://calendly.com/una-ron',
      email: 'mailto:ron@unahealth.com',
      linkedin: 'https://www.linkedin.com/in/gonzonurse/',
    },
  },
]

const sisco = [
  {
    name: 'Dr. Rob Kittinger',
    role: 'Ph.D. Industrial-Organizational Psychology',
    photo: '/team/rob.jpg',
    initials: 'RK',
    detail: 'With a Ph.D. in Industrial-Organizational Psychology, Dr. Kittinger has an extensive background in organizations such as Amazon, Sandia National Labs, and the U.S. Navy. His work primarily involves advanced technology, statistics, and high-stakes testing.',
  },
  {
    name: 'T.J. Waggoner',
    role: 'Psychology & Organizational Behavior',
    photo: '/team/tj.jpg',
    initials: 'TW',
    detail: 'Educated in psychology and organizational behavior, T.J. is the CEO and co-founder of Waggoner Diagnostics. He has played an instrumental role in improving color vision in occupational health and consults extensively with federal agencies.',
  },
]

function LeaderCard({ member }: { member: typeof team[0] }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row">

      {/* Left: photo panel */}
      <div className="relative md:w-72 flex-shrink-0 flex items-center justify-center p-10"
        style={{ background: `linear-gradient(135deg, ${member.accent}18 0%, ${member.accent}08 100%)` }}>
        <div className="relative">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl"
            style={{ boxShadow: `0 0 0 5px white, 0 0 0 8px ${member.accent}40, 0 20px 40px ${member.accent}30` }}>
            {!failed ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={192}
                height={192}
                className="object-cover object-top w-full h-full"
                onError={() => setFailed(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold"
                style={{ backgroundColor: member.accent }}>
                {member.initials}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right: content */}
      <div className="flex-1 p-10 flex flex-col justify-center">
        {/* Accent bar */}
        <div className="w-10 h-1 rounded-full mb-5" style={{ backgroundColor: member.accent }} />

        <h3 className="text-2xl font-bold text-brand-navy leading-tight mb-1">{member.name}</h3>
        <p className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: member.accent }}>
          {member.title}
        </p>
        <p className="text-slate-500 leading-relaxed text-sm mb-7">{member.bio}</p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {[
            { href: member.social.phone,    Icon: Phone,        label: 'Phone' },
            { href: member.social.calendar, Icon: CalendarDays, label: 'Schedule' },
            { href: member.social.email,    Icon: Mail,         label: 'Email' },
            { href: member.social.linkedin, Icon: Linkedin,     label: 'LinkedIn' },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 border border-slate-200 hover:text-white transition-all duration-200"
              style={{ ['--hover-bg' as string]: member.accent }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = member.accent; (e.currentTarget as HTMLElement).style.borderColor = member.accent }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = ''; (e.currentTarget as HTMLElement).style.borderColor = '' }}>
              <Icon size={16} />
            </a>
          ))}
        </div>
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

      {/* History of success */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <Feather size={36} className="text-slate-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">Our history of success</h2>
              <p className="text-slate-500 leading-relaxed">
                The UNA Team has deep roots in the healthcare staffing and acute care delivery systems. Our strategy and entrepreneurial spirit are driven by a desire to elevate the process for both talented clinicians and exemplary organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the future */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row-reverse items-center sm:items-start gap-8">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center">
              <Rocket size={36} className="text-slate-500" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-brand-navy mb-3">Our vision for the future</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                UNA&apos;s vision is simple — create technology that does two things:
              </p>
              <ol className="space-y-3 mb-4">
                <li className="flex gap-3 text-slate-500 text-sm leading-relaxed">
                  <span className="font-bold text-brand-navy flex-shrink-0">1)</span>
                  Improve on-boarding, productivity, and talent retention for hospitals and healthcare staffing companies.
                </li>
                <li className="flex gap-3 text-slate-500 text-sm leading-relaxed">
                  <span className="font-bold text-brand-navy flex-shrink-0">2)</span>
                  Empower healthcare professionals to take control of their careers by optimizing credentialling, recruitment, and accessibility.
                </li>
              </ol>
              <p className="text-slate-500 leading-relaxed text-sm">
                We understand that talent drives the market — UNA is positioned to embrace that change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-brand-blue uppercase tracking-widest">Our People</span>
            <h2 className="mt-3 text-3xl font-bold text-brand-navy">Leadership Team</h2>
          </div>
          <div className="flex flex-col gap-8">
            {team.map(m => <LeaderCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* SISCo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Commitment intro — logo left, text right */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
              <SiscoLogo />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-3">Our commitment to excellence</h2>
              <p className="text-slate-500 mb-4 leading-relaxed">
                UNA formed the Strategic and Innovation Steering Committee (SISCo) with a mission to spearhead innovations in clinical recruitment.
              </p>
              <p className="text-slate-600 font-medium mb-3">It is SISCo&apos;s core objective to:</p>
              <ul className="space-y-2">
                {[
                  'Develop cutting-edge tools that redefine and standardize clinical hiring.',
                  'Elevate standards for candidate engagement and compliance.',
                  'Set foundational clinical competencies for roles spanning Nursing, Allied Health, and Providers.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-500">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advisor cards */}
          <p className="text-slate-500 text-center mb-8">
            In addition to the core UNA leadership, SISCo is proud to include these distinguished members.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {sisco.map(s => <AdvisorCard key={s.name} advisor={s} />)}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
