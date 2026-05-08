'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, CalendarDays, Mail, Linkedin, TrendingUp, Lightbulb, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero'
import ContactSection from '@/components/ContactSection'

const team = [
  {
    name: 'Ron Gonzalez, MS BSN',
    title: 'Founder / CEO',
    initials: 'RG',
    photo: '/team/ron.jpg',
    bio: 'Ron is a nurse entrepreneur who started his career as a Med-Surg RN on Long Island, NY. He became a nurse manager soon thereafter, leaving the systems and operations of Healthcare Staffing. In 2004, Ron founded and launched NurseTesting.com, which later became Prophecy Healthcare. He successfully sold Prophecy to APS/Relias in 2015. Ron Co-Founded JobRobotix in 2016 (with a successful exit in 2022), and subsequently launched UNA Health in 2020. Ron has almost 20 years experience building & scaling innovative, next-generation technology for healthcare markets.',
    social: {
      phone: 'tel:3365444829',
      calendar: 'https://calendly.com/una-ron',
      email: 'mailto:ron@unahealth.com',
      linkedin: 'https://www.linkedin.com/in/gonzonurse/',
    },
  },
  {
    name: 'Leslie Jeffries, MSN BSN RN',
    title: 'Senior VP of Operations',
    initials: 'LJ',
    photo: '/team/leslie.jpg',
    bio: 'Leslie is a registered nurse with clinical background in ICU, Telemetry, and nursing management. Her executive experience is multi-faceted, including VMS operations in healthcare staffing, pre-employment testing at Prophecy Healthcare, assessment-driven learning for physicians and nurses, consulting for healthcare staffing companies working towards Joint Commission certification and operations at UNA Health. Outside of UNA, she volunteers as a basketball coach, pianist, and several boards of directors for various non-profit organizations.',
    social: {
      phone: 'tel:3365444829',
      calendar: 'https://calendly.com/una-leslie',
      email: 'mailto:leslie@unahealth.com',
      linkedin: 'https://www.linkedin.com/in/leslie-jeffries-0290581/',
    },
  },

  {
    name: 'Parag Tribhuwankar',
    title: 'CEO & Founder, Dynamisch',
    initials: 'PT',
    photo: '/team/parag.png',
    bio: 'Parag is the Founder & CEO of Dynamisch, with over 15 years in IT and software. He orchestrates success through strategic foresight, consistent dedication, and meticulous execution — guiding the company to serve clients in Healthcare, Banking & Finance, ISVs, and Product-based companies. Known for flawless operations and deep technical acumen, he fosters a culture of innovation that positions Dynamisch at the forefront of the IT service industry.',
    social: {
      phone: undefined,
      calendar: undefined,
      email: undefined,
      linkedin: 'https://www.linkedin.com/in/paragtribhuwankar/',
    },
  },
    {
    name: 'Hiten Ahirrao',
    title: 'Chief Technology Officer',
    initials: 'HA',
    photo: '/team/hiten.png',
    bio: 'Hiten is the Chief Technology Officer of Dynamisch with over 14 years of experience, architecting scalable IT infrastructures that adapt to dynamic business expansion. A trailblazer in AI, machine learning, and cloud computing, he champions robust security implementations including advanced firewalls and intrusion detection systems. His collaborative leadership cultivates top talent and inspires teams to transform organizational vision into technological reality.',
    social: {
      phone: undefined,
      calendar: undefined,
      email: undefined,
      linkedin: 'https://www.linkedin.com/in/hiten-ahirrao/',
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

const siscoObjectives = [
  'Develop cutting-edge tools that redefine and standardize clinical hiring.',
  'Elevate standards for candidate engagement and compliance.',
  'Set foundational clinical competencies for roles spanning Nursing, Allied Health, and Providers.',
]

function LeaderCard({ member }: { member: typeof team[0] }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col">
      {/* Photo + identity */}
      <div className="flex flex-col items-center pt-10 px-8 pb-8">
        {/* Photo */}
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 flex-shrink-0"
          style={{ boxShadow: '0 0 0 4px white, 0 0 0 7px #E9384D35, 0 12px 32px rgba(0,0,0,0.18)' }}>
          {!failed ? (
            <Image src={member.photo} alt={member.name} width={112} height={112}
              className="object-cover object-top w-full h-full" onError={() => setFailed(true)} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-red text-white text-3xl font-bold">
              {member.initials}
            </div>
          )}
        </div>

        {/* Name + title */}
        <h3 className="text-xl font-extrabold text-brand-navy text-center leading-tight mb-2">{member.name}</h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-4">
          {member.title}
        </span>

        {/* Social icons */}
        <div className="flex items-center gap-2 mb-6">
          {[
            { href: member.social.phone,    Icon: Phone,        label: 'Phone' },
            { href: member.social.calendar, Icon: CalendarDays, label: 'Schedule' },
            { href: member.social.email,    Icon: Mail,         label: 'Email' },
            { href: member.social.linkedin, Icon: Linkedin,     label: 'LinkedIn' },
          ].filter(({ href }) => !!href).map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-200 shadow-sm">
              <Icon size={14} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-6" />

        {/* Bio */}
        <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  )
}

function AdvisorCard({ advisor }: { advisor: typeof sisco[0] }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm p-7 flex gap-6 items-start hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md bg-slate-100">
          {!failed ? (
            <Image src={advisor.photo} alt={advisor.name} width={80} height={80}
              className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
              onError={() => setFailed(true)} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-blue text-white text-2xl font-bold">
              {advisor.initials}
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-brand-navy mb-0.5 leading-tight">{advisor.name}</h3>
        <p className="text-xs font-semibold text-brand-blue mb-3 uppercase tracking-widest">{advisor.role}</p>
        <p className="text-sm text-slate-500 leading-relaxed">{advisor.detail}</p>
      </div>
    </div>
  )
}

function SiscoLogo() {
  const [failed, setFailed] = useState(false)
  if (failed) return <p className="text-3xl font-extrabold text-brand-navy">SISCo <span className="text-brand-blue font-medium text-lg">Powered by UNA</span></p>
  return <Image src="/team/sisco-logo.png" alt="SISCo" width={220} height={80} className="h-16 w-auto" onError={() => setFailed(true)} />
}

export default function CompanyAndTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Company and Team"
        headline="Made for nurses, by nurses."
        subheadline="UNA was established by professionals with decades of healthcare staffing experience who understand the challenges clinicians face and the operational needs of healthcare organizations."
      />

      {/* Mission + Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Our Mission</span>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy">What is UNA?</h2>
          </div>
          <p className="text-lg text-slate-500 leading-relaxed text-center max-w-3xl mx-auto mb-14">
            UNA is a suite of comprehensive mobile-first solutions for hospital networks, staffing agencies, and healthcare professionals. Better connect with candidates, improve applicant engagement, optimize compliance workflows, and set a new higher standard for your career or the clinicians in your organization.
          </p>
          {/* Stat strip */}
          <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
            {[
              { value: '2,000+', label: 'Hospital Networks' },
              { value: '50k+',   label: 'Clinicians Served' },
              { value: '20 yrs', label: 'Industry Experience' },
            ].map(s => (
              <div key={s.label} className="py-8 text-center">
                <p className="text-3xl font-extrabold text-brand-navy">{s.value}</p>
                <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History + Vision — two-column cards */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">

          {/* History */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5">
              <TrendingUp size={22} className="text-brand-blue" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-3">Our history of success</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              The UNA Team has deep roots in the healthcare staffing and acute care delivery systems. Our strategy and entrepreneurial spirit are driven by a desire to elevate the process for both talented clinicians and exemplary organizations.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-brand-navy rounded-3xl p-8 border border-brand-navy shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <Lightbulb size={22} className="text-yellow-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our vision for the future</h3>
            <p className="text-slate-300 leading-relaxed text-sm mb-4">
              UNA&apos;s vision is simple — create technology that does two things:
            </p>
            <ol className="space-y-3">
              {[
                'Improve on-boarding, productivity, and talent retention for hospitals and healthcare staffing companies.',
                'Empower healthcare professionals to take control of their careers by optimizing credentialling, recruitment, and accessibility.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-red text-white text-[10px] font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="text-slate-400 text-xs mt-4 leading-relaxed">
              We understand that talent drives the market — UNA is positioned to embrace that change.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Our People</span>
            <h2 className="mt-2 text-3xl font-bold text-brand-navy">Leadership Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map(m => <LeaderCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* SISCo — light panel */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* SISCo intro */}
          <div className="flex flex-col md:flex-row items-start gap-10 mb-14 pb-14 border-b border-slate-200">
            <div className="flex-shrink-0">
              <SiscoLogo />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-brand-navy mb-3">Our commitment to excellence</h2>
              <p className="text-slate-500 leading-relaxed mb-5">
                UNA formed the Strategic and Innovation Steering Committee (SISCo) with a mission to spearhead innovations in clinical recruitment.
              </p>
              <p className="text-sm font-semibold text-slate-700 mb-3">It is SISCo&apos;s core objective to:</p>
              <ul className="space-y-2.5">
                {siscoObjectives.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                    <CheckCircle2 size={16} className="text-brand-red flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Advisors */}
          <p className="text-slate-500 text-center text-sm mb-8">
            In addition to the core UNA leadership, SISCo is proud to include these distinguished members.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {sisco.map(s => <AdvisorCard key={s.name} advisor={s} />)}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
