import { DiditError, mintShareToken } from '@/lib/didit'
import type { DiditShareRequest } from '@/types'

export const runtime = 'nodejs'

// POST /api/didit/share
//
// Proxies Didit's "mint share token" call on the SOURCE application. The
// source session must already be in a finished status (Approved / Declined /
// In Review). Authenticates with the source application's own key.
//
// Body: { sessionId, forApplicationId, ttlInSeconds? }
// Returns Didit's { share_token, for_application_id, session_kind }.
export async function POST(request: Request) {
  const apiKey = process.env.DIDIT_API_KEY
  if (!apiKey) {
    return json({ error: 'DIDIT_API_KEY is not configured.' }, 500)
  }

  let body: Partial<DiditShareRequest>
  try {
    body = await request.json()
  } catch {
    return json({ error: 'Request body must be valid JSON.' }, 400)
  }

  const { sessionId, forApplicationId, ttlInSeconds } = body
  if (!sessionId || typeof sessionId !== 'string') {
    return json({ error: 'sessionId is required.' }, 400)
  }
  if (!forApplicationId || typeof forApplicationId !== 'string') {
    return json({ error: 'forApplicationId is required.' }, 400)
  }
  if (ttlInSeconds !== undefined && typeof ttlInSeconds !== 'number') {
    return json({ error: 'ttlInSeconds must be a number.' }, 400)
  }

  try {
    const result = await mintShareToken(
      { sessionId, forApplicationId, ttlInSeconds },
      apiKey
    )
    return json(result, 200)
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
    // Forward Didit's status and message (e.g. 400 "Only finished sessions
    // (Approved, Declined, In Review) can be shared.").
    return json({ error: err.message }, err.status)
  }
  const message = err instanceof Error ? err.message : 'Unknown error'
  return json({ error: message }, 502)
}
