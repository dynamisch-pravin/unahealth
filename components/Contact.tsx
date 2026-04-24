'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react'
import { gsap } from '@/lib/gsap'

const helpOptions = [
  { value: '', label: 'How can we help?' },
  { value: 'sales', label: 'Sales — Hospital Networks' },
  { value: 'staffing', label: 'Sales — Staffing Agencies' },
  { value: 'wallet', label: 'Free Wallet Account (Clinicians)' },
  { value: 'technical', label: 'Technical Support' },
  { value: 'demo', label: 'Request a Demo' },
  { value: 'partnership', label: 'Partnership Inquiry' },
  { value: 'other', label: 'Other' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', help: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading badge
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' } }
      )

      // Left panel slides in from left
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )

      // Right panel slides in from right
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.85, ease: 'power3.out', delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      )

      // Form fields stagger in
      const fields = rightRef.current?.querySelectorAll('input, select, textarea, button[type="submit"]')
      if (fields?.length) {
        gsap.fromTo(
          fields,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, delay: 0.45,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)

    // Animate success state
    if (rightRef.current) {
      gsap.to(rightRef.current, {
        scale: 0.97, opacity: 0, duration: 0.25, ease: 'power2.in',
        onComplete: () => {
          setSubmitted(true)
          gsap.fromTo(rightRef.current,
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.5)' }
          )
        },
      })
    } else {
      setSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div ref={leftRef}>
            <span ref={headingRef} className="text-xs font-semibold text-brand-blue uppercase tracking-widest">
              Contact Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-5">
              Ready to start?
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Whether you represent a hospital, a staffing agency, or you're a nurse ready to take control of your
              career — we're here to help. Reach out and a member of our team will be in touch within one business
              day.
            </p>

            <div className="space-y-5">
              {[
                { Icon: MapPin, label: 'Headquarters', value: 'Greensboro, North Carolina', href: undefined },
                { Icon: Mail, label: 'Email', value: 'hello@unahealth.com', href: 'mailto:hello@unahealth.com' },
                { Icon: Phone, label: 'Phone', value: '336.544.4829', href: 'tel:3365444829' },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-navy">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-brand-blue hover:underline mt-0.5 block">
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm text-slate-500 mt-0.5">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-semibold text-brand-navy mb-3">Not ready to talk yet?</p>
              <ul className="space-y-2">
                {[
                  'Browse our product docs & FAQs',
                  'Create a free clinician Wallet — no credit card needed',
                  'Watch a 3-minute platform overview video',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef}>
            {submitted ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Message received!</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Thanks for reaching out. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', phone: '', help: '', message: '' })
                  }}
                  className="mt-6 text-sm font-medium text-brand-blue hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="name">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all placeholder-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="email">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jane@hospital.com"
                      className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all placeholder-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel"
                    value={form.phone} onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all placeholder-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="help">
                    How can we help? <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="help" name="help" required
                    value={form.help} onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-slate-600 bg-white"
                  >
                    {helpOptions.map((o) => (
                      <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us a bit about your organization and what you're looking for..."
                    className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all placeholder-slate-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-magnetic w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-navy text-white font-semibold rounded-xl transition-colors shadow-md text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>Send Message <Send size={15} /></>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-brand-blue hover:underline">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
