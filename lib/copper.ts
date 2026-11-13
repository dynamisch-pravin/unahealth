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

  const description = `${message || '—'}`

  const payload: Record<string, unknown> = {
    name,
    // Leads take a single email object (People use an "emails" array)
    email: { email, category: 'work' },
    // "details" is the lead's Description field in Copper
    details: description,
  }

  if (phone) {
    payload.phone_numbers = [{ number: phone, category: 'mobile' }]
  }

  // Optional: also copy it into a custom field if you still use one.
  // Remove COPPER_MESSAGE_FIELD_ID from .env.local if you only want the Description.
  if (messageFieldId) {
    payload.custom_fields = [
      {
        custom_field_definition_id: Number(messageFieldId),
        value: description,
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