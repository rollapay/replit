export interface Job {
  id: string
  title: string
  company: string
  companyId: string
  companyLogo: string
  location: string
  remote: boolean
  hybrid: boolean
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  salary: {
    min: number
    max: number
    currency: string
  }
  stack: string[]
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  postedAt: string
  featured: boolean
  applicants: number
}

export interface Company {
  id: string
  name: string
  logo: string
  website: string
  industry: string
  size: string
  location: string
  description: string
  openRoles: number
  stack: string[]
  founded: number
  featured: boolean
}

export type JobType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'all'
export type LocationType = 'remote' | 'hybrid' | 'onsite' | 'all'

// --- Didit Reusable KYC ---------------------------------------------------

// "user" => KYC, "business" => KYB. Drives which related rows are cloned.
export type DiditSessionKind = 'user' | 'business'

// Body for POST /v3/session/{sessionId}/share/
export interface DiditShareRequest {
  // Source session to share. Must be in a finished status
  // (Approved / Declined / In Review).
  sessionId: string
  // Receiving application UUID — only this app can redeem the token.
  forApplicationId: string
  // 60..86400 seconds. Defaults to 3600 (1h) when omitted.
  ttlInSeconds?: number
}

// Response from the share endpoint.
export interface DiditShareResponse {
  share_token: string
  for_application_id: string
  session_kind: DiditSessionKind
}

// Body for POST /v3/session/import-shared/
export interface DiditImportSharedRequest {
  shareToken: string
  // true  => cloned session keeps the source status.
  // false => cloned session is forced to "In Review".
  trustReview: boolean
  // Workflow that must exist on the receiving application.
  workflowId: string
  // Optional. Defaults to the source session's vendor_data.
  vendorData?: string
}

// The import endpoint returns the canonical decision payload — the same shape
// as GET /v3/session/{sessionId}/decision/. It is large and varies by
// session_kind, so we keep it open while guaranteeing the audit fields.
export interface DiditDecision {
  session_id: string
  shared_from_session: string
  [key: string]: unknown
}
