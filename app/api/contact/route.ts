import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

const helpLabels: Record<string, string> = {
  sales:    'Sales',
  support:  'Technical Support',
  investor: 'Investor Opportunities',
  wallet:   'FREE UNA Wallet account',
}

export async function POST(req: Request) {
  const { name, email, phone, help, message } = await req.json()

  if (!name || !email || !help) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

  try {
    await sgMail.send({
      from: {
        email: process.env.SENDGRID_FROM_EMAIL!,
        name: 'UNA Health Website',
      },
      to: process.env.CONTACT_TO_EMAIL ?? 'hello@unahealth.com',
      replyTo: { email, name },
      subject: `New contact form submission — ${helpLabels[help] ?? help}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1e293b">
          <div style="background:#0F2B5B;border-radius:12px;padding:20px 24px;margin-bottom:24px">
            <h1 style="color:white;margin:0;font-size:20px">New Contact Form Submission</h1>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px">UNA Health Website</p>
          </div>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569;width:140px">Name</td>
              <td style="padding:12px 8px">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569">Email</td>
              <td style="padding:12px 8px"><a href="mailto:${email}" style="color:#E9384D">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569">Phone</td>
              <td style="padding:12px 8px">${phone || '—'}</td>
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0">
              <td style="padding:12px 8px;font-weight:600;color:#475569">Topic</td>
              <td style="padding:12px 8px">
                <span style="background:rgba(233,56,77,0.08);color:#C42038;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600">
                  ${helpLabels[help] ?? help}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 8px;font-weight:600;color:#475569;vertical-align:top">Message</td>
              <td style="padding:12px 8px;white-space:pre-line">${message || '—'}</td>
            </tr>
          </table>
        </div>
      `,
    })
  } catch (err) {
    console.error('SendGrid error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
