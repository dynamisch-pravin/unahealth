'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import ContactSection from '@/components/ContactSection'
import { Clock, Search, ArrowRight, ClipboardList, BookOpen, GraduationCap } from 'lucide-react'

const tests = [
  { name: 'Medical Lab Scientist/Technologist', time: '00:31:17' },
  { name: 'Behavioral Health RN', time: '00:30:22' },
  { name: 'Long Term Care RN', time: '00:30:18' },
  { name: 'Dialysis RN', time: '00:30:09' },
  { name: 'Emergency Department RN', time: '00:29:16' },
  { name: 'PICU RN', time: '00:28:53' },
  { name: 'Medical Surgical/Tele RN', time: '00:28:45' },
  { name: 'Medical Surgical RN', time: '00:27:37' },
  { name: 'NICU RN', time: '00:27:32' },
  { name: 'PACU RN', time: '00:27:27' },
  { name: 'Clinic RN', time: '00:27:14' },
  { name: 'ICU RN', time: '00:26:47' },
  { name: 'Pediatrics RN', time: '00:26:43' },
  { name: 'Medical Assistant', time: '00:26:40' },
  { name: 'Telemetry RN', time: '00:26:31' },
  { name: 'Respiratory Therapist', time: '00:26:30' },
  { name: 'Progressive Care RN', time: '00:26:25' },
  { name: 'LPN/LVN', time: '00:25:37' },
  { name: 'RN Pharmacology', time: '00:25:19' },
  { name: 'Operating Room RN', time: '00:24:55' },
  { name: 'Labor & Delivery RN', time: '00:24:25' },
  { name: 'Radiology Technologist', time: '00:23:24' },
  { name: 'Surgical Technologist', time: '00:22:19' },
  { name: 'Certified Nursing Assistant', time: '00:22:16' },
  { name: 'Sterile Processing Tech', time: '00:21:32' },
  { name: 'Medication Aide', time: '00:20:10' },
  { name: 'Basic Math Ability', time: '00:15:19' },
  { name: 'Dysrhythmia Interpretation (General)', time: '00:13:13' },
  { name: 'Dysrhythmia Interpretation (Basic)', time: '00:12:58' },
  { name: 'Color Vision', time: '00:02:00' },
]

const checklists = [
  { name: 'Anesthesia Technician', time: '0:06:19' },
  { name: 'Behavioral Health LPN', time: '0:07:05' },
  { name: 'Behavioral Health RN', time: '0:12:34' },
  { name: 'Behavioral Health Tech', time: '0:08:21' },
  { name: 'Biomedical Technician', time: '0:02:35' },
  { name: 'Cardiac Sonographer', time: '0:05:34' },
  { name: 'Cardiovascular Tech (Cath Lab Tech)', time: '0:14:45' },
  { name: 'Case Management LPN', time: '0:07:15' },
  { name: 'Case Management RN', time: '0:10:37' },
  { name: 'Cath Lab RN', time: '0:11:16' },
  { name: 'Certified Nursing Assistant', time: '0:04:48' },
  { name: 'Clinical Nurse Manager', time: '0:05:27' },
  { name: 'Clinical Social Worker', time: '0:03:39' },
  { name: 'Clinic RN', time: '0:14:29' },
  { name: 'Corrections RN', time: '0:09:52' },
  { name: 'COVID-19 Vaccination Administrator', time: '0:03:52' },
  { name: 'COVID ICU RN', time: '0:12:05' },
  { name: 'COVID Med-Surg RN', time: '0:13:39' },
  { name: 'CT Tech', time: '0:04:55' },
  { name: 'CVICU RN', time: '0:13:04' },
  { name: 'CVOR RN', time: '0:03:07' },
  { name: 'Cytotechnologist', time: '0:01:13' },
  { name: 'Dental Assistant', time: '0:06:20' },
  { name: 'Dental Hygienist', time: '0:05:58' },
  { name: 'Dialysis RN', time: '0:06:23' },
  { name: 'Dialysis Technician', time: '0:03:30' },
  { name: 'EEG Tech - Electroencephalography', time: '0:06:21' },
  { name: 'Emergency Department LPN', time: '0:20:50' },
  { name: 'Emergency Department RN', time: '0:17:48' },
  { name: 'EMT (Emergency Medical Technician)', time: '0:04:13' },
  { name: 'Endoscopy/GI Lab RN', time: '0:05:32' },
  { name: 'Environmental Services', time: '0:03:09' },
  { name: 'First Assist (OR)', time: '0:14:49' },
  { name: 'Histology Technician', time: '0:06:07' },
  { name: 'Home Health Aide', time: '0:05:29' },
  { name: 'Home Health RN', time: '0:12:42' },
  { name: 'Hospice & Palliative Care RN', time: '0:07:18' },
  { name: 'ICU RN', time: '0:13:50' },
  { name: 'Interventional Radiology RN', time: '0:06:27' },
  { name: 'Interventional Radiology Technologist', time: '0:06:22' },
  { name: 'IV Therapy & Infusion RN', time: '0:13:56' },
  { name: 'Labor & Delivery RN', time: '0:11:55' },
  { name: 'Long Term Care/Skilled RN', time: '0:12:54' },
  { name: 'LPN - IV Therapy', time: '0:02:00' },
  { name: 'LPN/LVN', time: '0:13:54' },
  { name: 'LPN - Pediatrics', time: '0:04:29' },
  { name: 'LTAC RN (Long-Term Acute Care)', time: '0:12:15' },
  { name: 'Medical Assistant', time: '0:09:16' },
  { name: 'Medical Laboratory Technician', time: '0:10:12' },
  { name: 'Medical Lab Scientist/Technologist', time: '0:06:38' },
  { name: 'Medication Aide', time: '0:03:51' },
  { name: 'Med Surgical RN', time: '0:15:00' },
  { name: 'Med-Surg/Telemetry RN', time: '0:13:14' },
  { name: 'Monitor Technician - ECG/EKG', time: '0:04:06' },
  { name: 'Mother-Baby RN', time: '0:11:46' },
  { name: 'MRI Tech', time: '0:09:31' },
  { name: 'NICU RN', time: '0:15:35' },
  { name: 'Nurse Practitioner', time: '0:11:52' },
  { name: 'Occupational Therapist', time: '0:09:43' },
  { name: 'Occupational Therapist Assistant', time: '0:06:02' },
  { name: 'Oncology RN', time: '0:16:56' },
  { name: 'Ophthalmology Tech/Assistant', time: '0:05:48' },
  { name: 'OR RN - Circulator', time: '0:07:38' },
  { name: 'OR RN - Scrub', time: '0:06:43' },
  { name: 'PACU RN', time: '0:16:20' },
  { name: 'Paramedic', time: '0:03:34' },
  { name: 'Patient Care Technician', time: '0:04:27' },
  { name: 'Pediatrics RN', time: '0:13:52' },
  { name: 'Pharmacist', time: '0:06:29' },
  { name: 'Pharmacy Technician', time: '0:07:21' },
  { name: 'Phlebotomist', time: '0:05:15' },
  { name: 'Physical Therapist', time: '0:08:33' },
  { name: 'Physical Therapist Assistant', time: '0:06:45' },
  { name: 'PICU RN', time: '0:13:25' },
  { name: 'Pre-Operative RN', time: '0:15:10' },
  { name: 'Progressive Care Unit RN', time: '0:13:56' },
  { name: 'Psychiatric RN', time: '0:10:22' },
  { name: 'Radiation Therapist', time: '0:03:41' },
  { name: 'Radiology Technologist All Modalities', time: '0:08:39' },
  { name: 'Radiology Technologist General', time: '0:08:19' },
  { name: 'Registered Dietician/Nutritionist', time: '0:05:46' },
  { name: 'Respiratory Therapist', time: '0:07:38' },
  { name: 'School LPN', time: '0:11:44' },
  { name: 'School RN', time: '0:09:56' },
  { name: 'Sleep Tech - Polysomnography', time: '0:04:12' },
  { name: 'Speech Language Pathologist', time: '0:08:25' },
  { name: 'Step-Down Unit RN', time: '0:13:38' },
  { name: 'Sterile Processing Technologist', time: '0:03:13' },
  { name: 'Surgical Technologist', time: '0:06:47' },
  { name: 'Telemetry RN', time: '0:14:06' },
  { name: 'Ultrasound Technologist', time: '0:06:09' },
  { name: 'Vascular Ultrasound Technician', time: '0:08:11' },
  { name: 'Wound Care RN', time: '0:08:21' },
]

const mandatories = [
  { name: 'Core II Mandatory', time: '0:34:05' },
  { name: 'Core I Mandatory', time: '0:30:50' },
  { name: 'Core III Mandatory', time: '0:19:54' },
  { name: 'Infection Control & Bloodborne Pathogens', time: '0:06:43' },
  { name: 'Patient Safety Systems', time: '0:06:21' },
  { name: 'COVID-19', time: '0:06:01' },
  { name: 'Sexual Harassment', time: '0:05:02' },
  { name: 'Hazard Communication', time: '0:04:51' },
  { name: 'Cultural Diversity', time: '0:04:18' },
  { name: 'National Patient Safety Goals - Hospital', time: '0:04:10' },
  { name: 'Moderate (Conscious) Sedation', time: '0:03:54' },
  { name: 'Age Specific Care', time: '0:03:46' },
  { name: 'Ethics', time: '0:03:46' },
  { name: 'Restraints', time: '0:03:21' },
  { name: 'Environmental Safety', time: '0:03:19' },
  { name: 'Dementia Training-CMS', time: '0:03:18' },
  { name: 'HIPAA', time: '0:03:13' },
  { name: 'Patient Rights', time: '0:02:59' },
  { name: 'EMTALA', time: '0:02:53' },
  { name: 'Emergency Preparedness', time: '0:02:52' },
  { name: 'Body Mechanics', time: '0:02:50' },
  { name: 'Fire Safety', time: '0:02:45' },
  { name: 'National Patient Safety Goals - Nursing Care Center', time: '0:02:40' },
  { name: 'Workplace Violence', time: '0:02:37' },
  { name: 'Abuse & Neglect', time: '0:02:16' },
  { name: 'Pain Management', time: '0:02:06' },
  { name: 'National Patient Safety Goals - Assisted Living', time: '0:01:40' },
  { name: 'National Patient Safety Goals - Home Care', time: '0:01:21' },
]

const tabs = [
  { id: 'tests', label: 'Tests', icon: GraduationCap, data: tests, count: tests.length, color: '#3B82F6' },
  { id: 'checklists', label: 'Checklists', icon: ClipboardList, data: checklists, count: checklists.length, color: '#0D9488' },
  { id: 'mandatories', label: 'Mandatories', icon: BookOpen, data: mandatories, count: mandatories.length, color: '#7C3AED' },
]

function timeToSeconds(t: string) {
  const parts = t.split(':').map(Number)
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  return parts[0] * 60 + parts[1]
}

export default function UNADashPage() {
  const [activeTab, setActiveTab] = useState('tests')
  const [query, setQuery] = useState('')

  const current = tabs.find(t => t.id === activeTab)!

  const filtered = useMemo(() => {
    if (!query.trim()) return current.data
    const q = query.toLowerCase()
    return current.data.filter(item => item.name.toLowerCase().includes(q))
  }, [current.data, query])

  const avgSeconds = useMemo(() => {
    const total = current.data.reduce((s, i) => s + timeToSeconds(i.time), 0)
    return Math.round(total / current.data.length)
  }, [current.data])

  const avgFormatted = `${String(Math.floor(avgSeconds / 60)).padStart(2, '0')}:${String(avgSeconds % 60).padStart(2, '0')}`

  return (
    <>
      {/* ── Hero ── light */}
      <section className="relative bg-white overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 border-b border-slate-100">
        <div className="absolute top-0 left-0 right-0 h-[3px] z-10"
          style={{ background: 'linear-gradient(90deg,#E9384D 0%,rgba(233,56,77,0.25) 45%,transparent 75%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(233,56,77,0.05) 0%,transparent 65%)', filter: 'blur(40px)' }} />
        <div className="absolute top-0 left-0 bottom-0 w-full pointer-events-none opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'radial-gradient(ellipse at 15% 50%, black 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 15% 50%, black 20%, transparent 70%)' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-6 text-brand-blue border-brand-blue/30 bg-brand-blue/5">
            Last updated: July 2024
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-5">
            How long could it take?
          </h1>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            Average completion times for competency exams, skills checklists, and mandatory courses —
            based on a minimum of 250 completions per content area.
          </p>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {tabs.map(t => (
              <div key={t.id} className="rounded-2xl p-5 border border-slate-100 bg-slate-50 text-center hover:shadow-sm transition-all">
                <t.icon size={20} className="mx-auto mb-2" style={{ color: t.color }} />
                <div className="text-3xl font-extrabold text-brand-navy tracking-tight">{t.count}</div>
                <div className="text-xs mt-1 text-slate-500 font-medium">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data section ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-white rounded-2xl p-1.5 border border-slate-100 shadow-sm">
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => { setActiveTab(t.id); setQuery('') }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === t.id ? 'text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
                style={activeTab === t.id ? { backgroundColor: t.color } : {}}
              >
                <t.icon size={15} />
                {t.label}
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  activeTab === t.id ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {t.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search + avg bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={`Search ${current.label.toLowerCase()}...`}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
              />
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm shrink-0">
              <Clock size={14} className="text-slate-400" />
              <span className="text-slate-500">Avg:</span>
              <span className="font-bold text-brand-navy">{avgFormatted}</span>
            </div>
          </div>

          {/* Results count */}
          {query && (
            <p className="text-xs text-slate-400 mb-4">
              Showing {filtered.length} of {current.count} results
            </p>
          )}

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] text-xs font-bold uppercase tracking-widest text-slate-400 px-6 py-3 border-b border-slate-100"
              style={{ backgroundColor: 'rgba(0,0,0,0.015)' }}>
              <span>Content Name</span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                Avg. Time
              </span>
            </div>

            {filtered.length === 0 ? (
              <div className="px-6 py-12 text-center text-slate-400 text-sm">
                No results found for &ldquo;{query}&rdquo;
              </div>
            ) : (
              <div className="divide-y divide-slate-50">
                {filtered.map((item, i) => (
                  <div key={item.name}
                    className="grid grid-cols-[1fr_auto] px-6 py-3.5 items-center hover:bg-slate-50/70 transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-300 w-6 shrink-0 tabular-nums">{i + 1}</span>
                      <span className="text-sm text-slate-700 group-hover:text-brand-navy transition-colors font-medium">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-bold tabular-nums"
                      style={{ color: current.color }}>
                      <Clock size={12} className="text-slate-300" />
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer note */}
          <p className="mt-4 text-xs text-slate-400 text-center">
            Average completion times based on a minimum of 250 completions per content area.
          </p>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start?</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.60)' }}>
            See how UNA&apos;s fast, mobile-first testing can streamline competency compliance for your organization.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full transition-all text-sm shadow-lg group"
              style={{ backgroundColor: '#E9384D' }}>
              Get Started
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/resources/una-test"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full border text-sm transition-all"
              style={{ color: 'rgba(255,255,255,0.80)', borderColor: 'rgba(255,255,255,0.20)', background: 'rgba(255,255,255,0.07)' }}>
              Check out UNA Test
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
