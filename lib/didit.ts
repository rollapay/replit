import type {
  DiditDecision,
  DiditImportSharedRequest,
  DiditShareRequest,
  DiditShareResponse,
} from '@/types'

// Didit Reusable KYC client.
//
// Hands off a finished verification session from one Didit application to
// another without re-running the verification:
//   1. The source application mints a short-lived share token (an HS256 JWT).
//   2. The receiving application redeems that token to clone the session.
//
// Each call authenticates with its own application API key via `x-api-key`,
// so the two helpers below take the key explicitly rather than reading a
// single shared secret.

export const DIDIT_BASE_URL = 'https://verification.didit.me/v3'

// ttl_in_seconds bounds enforced by Didit. We mirror them client-side so a
// bad value fails fast with a clear message instead of a generic 400.
export const DIDIT_TTL_MIN_SECONDS = 60
export const DIDIT_TTL_MAX_SECONDS = 86400
export const DIDIT_TTL_DEFAULT_SECONDS = 3600

// Error raised when Didit responds with a non-2xx status. `status` carries the
// upstream HTTP status so callers can forward it; `body` is the parsed payload
// for logging / debugging.
export class DiditError extends Error {
  readonly status: number
  readonly body: unknown

  constructor(status: number, message: string, body?: unknown) {
    super(message)
    this.name = 'DiditError'
    this.status = status
    this.body = body
  }
}

// Pull the human-readable message out of Didit's error envelope. Didit returns
// either { detail: "..." } or { message: "..." }; fall back to a status line.
function extractErrorMessage(body: unknown, status: number): string {
  if (body && typeof body === 'object') {
    const record = body as Record<string, unknown>
    const candidate = record.detail ?? record.message ?? record.error
    if (typeof candidate === 'string' && candidate.length > 0) return candidate
  }
  return `Didit request failed with status ${status}.`
}

async function diditFetch<T>(
  path: string,
  apiKey: string,
  payload: Record<string, unknown>
): Promise<T> {
  const response = await fetch(`${DIDIT_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    // Verification calls are not cacheable.
    cache: 'no-store',
  })

  // Tolerate empty / non-JSON bodies (some errors arrive without one).
  const text = await response.text()
  let body: unknown = null
  if (text) {
    try {
      body = JSON.parse(text)
    } catch {
      body = text
    }
  }

  if (!response.ok) {
    throw new DiditError(
      response.status,
      extractErrorMessage(body, response.status),
      body
    )
  }

  return body as T
}

// Step 1 — mint a share token on the source application.
//
// The source session must already be in a finished status (Approved /
// Declined / In Review), otherwise Didit returns 400. Tokens are not
// idempotent (each call mints a fresh JWT) and cannot be revoked — they
// simply expire after `ttlInSeconds`.
export async function mintShareToken(
  { sessionId, forApplicationId, ttlInSeconds }: DiditShareRequest,
  apiKey: string
): Promise<DiditShareResponse> {
  const ttl = ttlInSeconds ?? DIDIT_TTL_DEFAULT_SECONDS
  if (
    !Number.isInteger(ttl) ||
    ttl < DIDIT_TTL_MIN_SECONDS ||
    ttl > DIDIT_TTL_MAX_SECONDS
  ) {
    throw new DiditError(
      400,
      `ttl_in_seconds must be an integer between ${DIDIT_TTL_MIN_SECONDS} and ${DIDIT_TTL_MAX_SECONDS}.`
    )
  }

  return diditFetch<DiditShareResponse>(
    `/session/${encodeURIComponent(sessionId)}/share/`,
    apiKey,
    {
      for_application_id: forApplicationId,
      ttl_in_seconds: ttl,
    }
  )
}

// Step 2 — redeem a share token on the receiving application.
//
// `workflowId` must exist on the receiving app. A given token can only be
// redeemed once per receiving app (403 otherwise — mint a new one). The cloned
// session gets a fresh session_id and a `shared_from_session` pointer for
// audit.
export async function importSharedSession(
  { shareToken, trustReview, workflowId, vendorData }: DiditImportSharedRequest,
  apiKey: string
): Promise<DiditDecision> {
  const payload: Record<string, unknown> = {
    share_token: shareToken,
    trust_review: trustReview,
    workflow_id: workflowId,
  }
  // Optional — omit so Didit falls back to the source session's vendor_data.
  if (vendorData !== undefined) payload.vendor_data = vendorData

  return diditFetch<DiditDecision>('/session/import-shared/', apiKey, payload)
}
