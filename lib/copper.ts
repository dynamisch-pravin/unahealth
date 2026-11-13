// lib/copper.ts
// Creates a LEAD in Copper (shows up under Contacts → Leads).

const COPPER_LEADS_URL = 'https://api.copper.com/developer_api/v1/leads'

type CopperLeadInput = {
  name: string
  email: string
  phone?: string
  topic: string
  message?: string
}

export async function createCopperLead({ name, email, phone, topic, message }: CopperLeadInput) {
  const apiKey = process.env.COPPER_API_KEY
  const userEmail = process.env.COPPER_USER_EMAIL
  const messageFieldId = process.env.COPPER_MESSAGE_FIELD_ID

  if (!apiKey || !userEmail) {
    throw new Error('Missing env vars: COPPER_API_KEY or COPPER_USER_EMAIL')
  }

  const payload: Record<string, unknown> = {
    name,
    // Leads take a single email object (People use an "emails" array)
    email: { email, category: 'work' },
  }

  if (phone) {
    payload.phone_numbers = [{ number: phone, category: 'mobile' }]
  }

  if (messageFieldId) {
    // This custom field must be enabled for Leads in Copper's settings
    payload.custom_fields = [
      {
        custom_field_definition_id: Number(messageFieldId),
        value: `Topic: ${topic}\n\n${message || '—'}`,
      },
    ]
  }

  const res = await fetch(COPPER_LEADS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-PW-AccessToken': apiKey,
      'X-PW-Application': 'developer_api',
      'X-PW-UserEmail': userEmail,
    },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Copper API error ${res.status}: ${body}`)
  }

  return res.json()
}