import { DiditError, importSharedSession } from '@/lib/didit'
import type { DiditImportSharedRequest } from '@/types'

export const runtime = 'nodejs'

// POST /api/didit/import-shared
//
// Proxies Didit's "redeem share token" call on the RECEIVING application.
// Authenticates with the receiving application's own key — falls back to
// DIDIT_API_KEY for single-tenant setups where one key covers both apps.
//
// Body: { shareToken, trustReview, workflowId, vendorData? }
// Returns Didit's decision payload (201) for the freshly cloned session.
export async function POST(request: Request) {
  const apiKey = process.env.DIDIT_RECEIVING_API_KEY ?? process.env.DIDIT_API_KEY
  if (!apiKey) {
    return json(
      { error: 'DIDIT_RECEIVING_API_KEY (or DIDIT_API_KEY) is not configured.' },
      500
    )
  }

  let body: Partial<DiditImportSharedRequest>
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400)
  }

  const { shareToken, trustReview, workflowId, vendorData } = body
  if (!shareToken || typeof shareToken !== 'string') {
    return json({ error: 'shareToken is required.' }, 400)
  }
  if (typeof trustReview !== 'boolean') {
    return json({ error: 'trustReview is required and must be a boolean.' }, 400)
  }
  if (!workflowId || typeof workflowId !== 'string') {
    return json({ error: 'workflowId is required.' }, 400)
  }
  if (vendorData !== undefined && typeof vendorData !== 'string') {
    return json({ error: 'vendorData must be a string.' }, 400)
  }

  try {
    const decision = await importSharedSession(
      { shareToken, trustReview, workflowId, vendorData },
      apiKey
    )
    // 201: a new cloned session was created on the receiving application.
    return json(decision, 201)
  } catch (err) {
    return handleDiditError(err)
  }
}

function json(payload: unknown, status: number) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function handleDiditError(err: unknown) {
  if (err instanceof DiditError) {
    // Forward Didit's status and message verbatim so callers can distinguish
    // expired tokens (400), wrong application (400/403), already-shared (403),
    // and missing workflow (404).
    return json({ error: err.message }, err.status)
  }
  const message = err instanceof Error ? err.message : 'Unknown error'
  return json({ error: message }, 502)
}
