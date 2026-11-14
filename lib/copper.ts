// lib/copper.ts
// Creates a LEAD in Copper (shows up under Contacts → Leads).

const COPPER_API = 'https://api.copper.com/developer_api/v1'

// The name of the custom field on Leads in Copper (must match exactly, ignoring case)
const HELP_FIELD_NAME = 'How can we help?'

// Hidden value: every lead from the website gets this Source (not shown on the form)
const SOURCE_FIELD_NAME = 'Source'
const DEFAULT_SOURCE = 'Website enquiry'

// Hidden value: every lead from the website is assigned to this Copper user ("Owned By").
// Use the name exactly as Copper shows it, or the user's Copper login email.
const DEFAULT_OWNER = 'Rutuja D'

// Hidden: a follow-up task is created on every new lead, due today
const DEFAULT_TASK_NAME = 'Newly Lead created from website'

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

async function getJson<T>(path: string): Promise<T | null> {
  const res = await fetch(`${COPPER_API}${path}`, { headers: copperHeaders() })
  if (!res.ok) {
    console.warn(`Copper GET ${path} failed:`, res.status, await res.text())
    return null
  }
  return res.json()
}

// Finds a Lead custom field by name and works out the value Copper expects.
// Dropdown fields need the option's ID, not its text.
function buildCustomField(fields: CustomFieldDefinition[], fieldName: string, value: string) {
  const field = fields.find(
    f => normalize(f.name) === normalize(fieldName) &&
         (!f.available_on || f.available_on.includes('lead')),
  )
  if (!field) return null

  // Text fields take the text directly
  if (!field.options?.length) {
    return { custom_field_definition_id: field.id, value }
  }

  // Dropdown / multi-select: match the option by name (exact first, then partial)
  const v = normalize(value)
  const option =
    field.options.find(o => normalize(o.name) === v) ??
    field.options.find(o => normalize(o.name).includes(v) || v.includes(normalize(o.name)))

  if (!option) {
    console.warn(
      `Copper: "${value}" doesn't match any option of "${field.name}". Options are:`,
      field.options.map(o => o.name),
    )
    return null
  }

  const isMulti = field.data_type.toLowerCase().includes('multi')
  return { custom_field_definition_id: field.id, value: isMulti ? [option.id] : option.id }
}

// Copper's built-in "Source" field on leads uses customer_source_id
async function findCustomerSourceId(sourceName: string): Promise<number | null> {
  const sources = await getJson<{ id: number; name: string }[]>('/customer_sources')
  const match = sources?.find(s => normalize(s.name) === normalize(sourceName))
  return match?.id ?? null
}

// Copper's "Owned By" on leads uses assignee_id (a Copper user ID)
async function findUserId(nameOrEmail: string): Promise<number | null> {
  const res = await fetch(`${COPPER_API}/users/search`, {
    method: 'POST',
    headers: copperHeaders(),
    body: JSON.stringify({ page_size: 200 }),
  })
  if (!res.ok) {
    console.warn('Copper users search failed:', res.status, await res.text())
    return null
  }
  const users: { id: number; name: string; email: string }[] = await res.json()
  const target = normalize(nameOrEmail)
  const match =
    users.find(u => normalize(u.email ?? '') === target) ??
    users.find(u => normalize(u.name ?? '') === target) ??
    users.find(u => normalize(u.name ?? '').startsWith(target))

  if (!match) {
    console.warn(`Copper: no user matching "${nameOrEmail}". Users are:`, users.map(u => u.name))
    return null
  }
  return match.id
}

// Creates a task linked to the lead (shows in the lead's Tasks column)
async function createLeadTask(leadId: number, assigneeId: number | null) {
  const task: Record<string, unknown> = {
    name: DEFAULT_TASK_NAME,
    related_resource: { id: leadId, type: 'lead' },
    due_date: Math.floor(Date.now() / 1000), // today (Copper uses Unix seconds)
    priority: 'None',
    status: 'Open',
  }
  if (assigneeId) task.assignee_id = assigneeId

  const res = await fetch(`${COPPER_API}/tasks`, {
    method: 'POST',
    headers: copperHeaders(),
    body: JSON.stringify(task),
  })
  if (!res.ok) {
    console.warn('Copper task creation failed:', res.status, await res.text())
  }
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
  const fieldDefs = (await getJson<CustomFieldDefinition[]>('/custom_field_definitions')) ?? []

  // "How can we help?" field
  const helpField = buildCustomField(fieldDefs, HELP_FIELD_NAME, topic)
  if (helpField) customFields.push(helpField)
  else console.warn(`Copper: could not set "${HELP_FIELD_NAME}".`)

  // Hidden "Source" = Website enquiry
  // Tries Copper's built-in Source first, then a custom field named "Source".
  const sourceId = await findCustomerSourceId(DEFAULT_SOURCE)
  if (sourceId) {
    payload.customer_source_id = sourceId
  } else {
    const sourceField = buildCustomField(fieldDefs, SOURCE_FIELD_NAME, DEFAULT_SOURCE)
    if (sourceField) customFields.push(sourceField)
    else console.warn(`Copper: could not set Source to "${DEFAULT_SOURCE}".`)
  }

  // Optional message custom field (remove COPPER_MESSAGE_FIELD_ID from .env.local if not needed)
  if (messageFieldId) {
    customFields.push({ custom_field_definition_id: Number(messageFieldId), value: message || '—' })
  }

  // Hidden "Owned By" = Rutuja D
  const ownerId = await findUserId(DEFAULT_OWNER)
  if (ownerId) payload.assignee_id = ownerId

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

  const lead = await res.json()

  // Follow-up task, assigned to the same owner. A task failure won't undo the lead.
  await createLeadTask(lead.id, ownerId)

  return lead
}