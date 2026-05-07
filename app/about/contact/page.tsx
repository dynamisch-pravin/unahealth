'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Send, CheckCircle, MapPin, Mail, Phone, Building2, Linkedin } from 'lucide-react'

const helpOptions = [
  { value: '',        label: 'How can we help?' },
  { value: 'sales',   label: 'Sales' },
  { value: 'support', label: 'Technical Support' },
  { value: 'investor',label: 'Investor Opportunities' },
  { value: 'wallet',  label: "I'd like a FREE UNA Wallet account" },
]

const contactInfo = [
  { Icon: Phone,    label: 'Phone',  value: '336.544.4829',           href: 'tel:3365444829' },
  { Icon: Mail,     label: 'Email',  value: 'hello@unahealth.com',    href: 'mailto:hello@unahealth.com' },
  { Icon: Building2,label: 'Office', value: 'Available by appointment only', href: undefined },
  { Icon: MapPin,   label: 'Location', value: 'Greensboro, North Carolina', href: undefined },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/unahealthinc',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/unahealthinc',
    svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/una-health',
    svg: <Linkedin size={18} />,
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/unahealthinc',
    svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', help: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden pt-36 pb-24">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-red/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red bg-brand-red/10 px-4 py-1.5 rounded-full mb-5">
            Contact Us
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-5">
            Let&apos;s connect
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Have questions or need to get in touch? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">

            {/* Left — contact info */}
            <div className="flex flex-col gap-6">

              {/* Info cards */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                <h2 className="text-lg font-bold text-brand-navy mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactInfo.map(({ Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-red/8 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-brand-red" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                        {href
                          ? <a href={href} className="text-sm font-medium text-brand-navy hover:text-brand-red transition-colors">{value}</a>
                          : <p className="text-sm font-medium text-brand-navy">{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
                <h2 className="text-lg font-bold text-brand-navy mb-5">Follow Us</h2>
                <div className="flex gap-3">
                  {socials.map(({ svg, label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-200 shadow-sm">
                      {svg}
                    </a>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="bg-brand-navy rounded-3xl p-8">
                <p className="text-sm font-semibold text-white mb-2">Our team is ready to help</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Whether you&apos;re a hospital network, staffing agency, or healthcare professional — we&apos;re here to help you get the most out of UNA.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">Message received!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Thanks! A member of our team will be in touch within one business day.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', help: '', message: '' }) }}
                    className="mt-6 text-sm font-semibold text-brand-red hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brand-navy mb-1">Send us a message</h2>
                  <p className="text-slate-500 text-sm mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="name">
                          Your name <span className="text-red-400">*</span>
                        </label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder-slate-300" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="email">
                          Your email <span className="text-red-400">*</span>
                        </label>
                        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder="jane@hospital.com"
                          className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder-slate-300" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="phone">
                        Your phone number
                      </label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder-slate-300" />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="help">
                        How can we help? <span className="text-red-400">*</span>
                      </label>
                      <select id="help" name="help" required value={form.help} onChange={handleChange}
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-slate-600 bg-white">
                        {helpOptions.map(o => (
                          <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="message">
                        Your message
                      </label>
                      <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Tell us about your organization..."
                        className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all placeholder-slate-300 resize-none" />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red hover:bg-brand-redDark text-white font-bold rounded-xl transition-colors shadow-md text-sm disabled:opacity-70">
                      {loading
                        ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                        : <>Send Message <Send size={15} /></>}
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      By submitting, you agree to our{' '}
                      <Link href="/resources/privacy-policy" className="text-brand-red hover:underline">Privacy Policy</Link>.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
