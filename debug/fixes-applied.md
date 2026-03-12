# Fixes Applied to 60-Second Snapshot Pipeline

## Fix 1: Switch from GHL v1 to v2 API

**File:** `app/api/capture-lead/route.ts`

**Before:**
```
POST https://rest.gohighlevel.com/v1/contacts/
Authorization: Bearer pit-...
```
Result: 401 `{"msg":"Api key is invalid."}`

**After:**
```
POST https://services.leadconnectorhq.com/contacts/
Authorization: Bearer pit-...
Version: 2021-07-28
```
Result: 201 (contact created)

**Root cause:** The PIT (Private Integration Token) in `.env.local` is a v2 API key. The code was calling the v1 endpoint, which only accepts v1 agency/location API keys.

## Fix 2: Add separate tag assignment step

**Before:** Tags were embedded in the contact creation payload (not supported in v2).

**After:** Tags are added via a dedicated `POST /contacts/{contactId}/tags` call after contact creation.

## Fix 3: Add separate custom field update step

**Before:** Custom fields were embedded in the contact creation payload with a format incompatible with v2.

**After:** Custom fields are updated via a dedicated `PUT /contacts/{contactId}` call with `{key, field_value}` format.

**Note:** Custom fields (`snapshot_score`, `snapshot_tier`, `snapshot_answers`) must be created in the GHL admin UI for the location before values will persist. The API call succeeds but silently ignores unknown field keys.

## Fix 4: Client-side response checking

**File:** `app/snapshot/page.tsx`

**Before:** `captureLeadToLC()` was fire-and-forget; no response checking.

**After:** Function returns `boolean` indicating success/failure. Response JSON is parsed and errors are logged to console.

## Fix 5: Remove em dash from source field

**Before:** `"60-Second Snapshot — ob1ai.co"` (em dash)
**After:** `"60-Second Snapshot - ob1ai.co"` (hyphen)

## Test Results

### Direct API test (curl):
- Contact creation: 201 OK
- Tag assignment: 201 OK, tags `snapshot-quiz`, `tier-emerging`, `score-17` applied
- Custom field update: 200 OK (fields not persisted; custom fields need to be created in GHL UI)

### Local dev server test (curl to localhost:3000):
- `POST /api/capture-lead`: `{"ok":true,"contactId":"LulDWJePdM1HKbmh8auk"}`
- Contact verified in GHL with name, email, phone, company, source, and tags

### Full browser flow (Playwright on localhost:3000):
- 10 questions answered, capture form filled, submitted
- Results page displayed (score 17, AI Emerging Stage)
- Contact "LocalTest Verify" created in GHL with tags
- Zero console errors

## Remaining Action Items

1. **Create custom fields in GHL:** Add `snapshot_score` (text), `snapshot_tier` (text), `snapshot_answers` (text) in the GHL location settings
2. **Deploy to Vercel:** Push changes and verify on production
3. **Set up automation workflow:** See `debug/automation-setup.md`
