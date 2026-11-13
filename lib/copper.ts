// lib/copper.ts
// Creates a LEAD in Copper (shows up under Contacts → Leads).

const COPPER_API = 'https://api.copper.com/developer_api/v1'

// The name of the custom field on Leads in Copper (must match exactly, ignoring case)
const HELP_FIELD_NAME = 'How can we help?'

type CopperLeadInput = {
  name: string
  email: string
  phone?: string
  topic: string
  message?: string
}

type CustomFieldDefinition = {
  id: number
  name: string
  data_type: string
  available_on?: string[]
  options?: { id: number; name: string }[]
}

function copperHeaders() {
  const apiKey = process.env.COPPER_API_KEY
  const userEmail = process.env.COPPER_USER_EMAIL
  if (!apiKey || !userEmail) {
    throw new Error('Missing env vars: COPPER_API_KEY or COPPER_USER_EMAIL')
  }
  return {
    'Content-Type': 'application/json',
    'X-PW-AccessToken': apiKey,
    'X-PW-Application': 'developer_api',
    'X-PW-UserEmail': userEmail,
  }
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '')

// Finds the "How can we help?" field and works out the value Copper expects.
// Dropdown fields need the option's ID, not its text.
async function buildHelpField(topic: string) {
  const res = await fetch(`${COPPER_API}/custom_field_definitions`, { headers: copperHeaders() })
  if (!res.ok) {
    console.warn('Could not load Copper custom fields:', res.status, await res.text())
    return null
  }

  const fields: CustomFieldDefinition[] = await res.json()
  const field = fields.find(
    f => normalize(f.name) === normalize(HELP_FIELD_NAME) &&
         (!f.available_on || f.available_on.includes('lead')),
  )

  if (!field) {
    console.warn(`Copper: no Lead custom field named "${HELP_FIELD_NAME}" was found.`)
    return null
  }

  // Text fields take the text directly
  if (!field.options?.length) {
    return { custom_field_definition_id: field.id, value: topic }
  }

  // Dropdown / multi-select: match the option by name (exact first, then partial)
  const t = normalize(topic)
  const option =
    field.options.find(o => normalize(o.name) === t) ??
    field.options.find(o => normalize(o.name).includes(t) || t.includes(normalize(o.name)))

  if (!option) {
    console.warn(
      `Copper: "${topic}" doesn't match any option of "${field.name}". Options are:`,
      field.options.map(o => o.name),
    )
    return null
  }

  const isMulti = field.data_type.toLowerCase().includes('multi')
  return { custom_field_definition_id: field.id, value: isMulti ? [option.id] : option.id }
}

export async function createCopperLead({ name, email, phone, topic, message }: CopperLeadInput) {
  const headers = copperHeaders()
  const messageFieldId = process.env.COPPER_MESSAGE_FIELD_ID

  const payload: Record<string, unknown> = {
    name,
    // Leads take a single email object (People use an "emails" array)
    email: { email, category: 'work' },
    // "details" is the lead's Description field
    details: message || '—',
  }

  if (phone) {
    payload.phone_numbers = [{ number: phone, category: 'mobile' }]
  }

  const customFields: { custom_field_definition_id: number; value: unknown }[] = []

  // "How can we help?" field
  const helpField = await buildHelpField(topic)
  if (helpField) customFields.push(helpField)

  // Optional message custom field (remove COPPER_MESSAGE_FIELD_ID from .env.local if not needed)
  if (messageFieldId) {
    customFields.push({ custom_field_definition_id: Number(messageFieldId), value: message || '—' })
  }

  if (customFields.length) payload.custom_fields = customFields

  const res = await fetch(`${COPPER_API}/leads`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Copper API error ${res.status}: ${body}`)
  }

  return res.json()
}