import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'
import { createCopperLead } from '@/lib/copper'

const helpLabels: Record<string, string> = {
  sales:    'Sales',
  support:  'Technical Support',
  investor: 'Investor Opportunities',
  wallet:   'FREE UNA Wallet account',
}

// NEW: escape user input before putting it into the email HTML
const esc = (value: unknown) =>
  String(value ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!),
  )

// NEW: verify the reCAPTCHA token with the secret key
async function verifyCaptcha(token: unknown): Promise<boolean> {
  // NEW: skip the check while testing locally (NEXT_PUBLIC_DISABLE_CAPTCHA=true in .env.local)
  if (process.env.NEXT_PUBLIC_DISABLE_CAPTCHA === 'true') {
    console.warn('Captcha check is DISABLED — do not use this setting in production.')
    return true
  }

  const secret = process.env.COPPER_SECRET_KEY
  if (!secret) {
    console.error('Missing env var: COPPER_SECRET_KEY')
    return false
  }
  if (typeof token !== 'string' || !token) return false

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token }),
    })
    const data: { success: boolean; 'error-codes'?: string[] } = await res.json()
    if (!data.success) console.error('Captcha failed:', data['error-codes'])
    return data.success
  } catch (err) {
    console.error('Captcha verification error:', err)
    return false
  }
}

export async function POST(req: Request) {
  const { name, email, phone, help, message, token } = await req.json()

  if (!name || !email || !help) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // NEW: reject before sending any email or touching Copper
  if (!(await verifyCaptcha(token))) {
    return NextResponse.json(
      { error: 'Captcha check failed. Please tick “I’m not a robot” and try again.' },
      { status: 400 },
    )
  }

  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
    console.error('Missing env vars: SENDGRID_API_KEY or SENDGRID_FROM_EMAIL')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const topic = helpLabels[help] ?? help

  try {
    await sgMail.send({
      from: {
        email: process.env.SENDGRID_FROM_EMAIL!,
        name: 'UNA Health Website',
      },
      to: process.env.CONTACT_TO_EMAIL ?? 'hello@unahealth.com',
      replyTo: { email, name },
      subject: `New contact form submission — ${topic}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b">
          <div style="background:#0F2B5B;border-radius:12px;padding:20px 24px;margin-bottom:24px">
            <h1 style="color:white;margin:0;font-size:20px">New Contact Form Submission</h1>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px">UNA Health Website</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569;width:140px">Name</td>
              <td style="padding:12px 8px">${esc(name)}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569">Email</td>
              <td style="padding:12px 8px"><a href="mailto:${esc(email)}" style="color:#E9384D">${esc(email)}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569">Phone</td>
              <td style="padding:12px 8px">${esc(phone) || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569">Topic</td>
              <td style="padding:12px 8px">
                <span style="background:rgba(233,56,77,0.08);color:#C42038;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">
                  ${esc(topic)}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 8px;font-weight:600;color:#475569;vertical-align:top">Message</td>
              <td style="padding:12px 8px;white-space:pre-line">${esc(message) || '—'}</td>
            </tr>
          </table>
        </div>
      `,
    })
  } catch (err: unknown) {
    const body = (err as { response?: { body?: unknown } })?.response?.body
    console.error('SendGrid error:', body ?? err)
    return NextResponse.json({ error: 'Failed to send email', detail: body }, { status: 500 })
  }

  // Best-effort CRM sync — the email above has already gone out, so the visitor still sees success.
  // `crm` in the response shows whether Copper worked (check the Network tab); the reason is in the server log.
  let crm: 'ok' | 'failed' = 'ok'
  try {
    const lead = await createCopperLead({ name, email, phone, topic, message })
    console.log('Copper lead created:', lead?.id)
  } catch (err: unknown) {
    crm = 'failed'
    console.error('Copper sync failed:', err instanceof Error ? err.message : err)
  }

  return NextResponse.json({ success: true, crm })
}