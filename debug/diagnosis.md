# 60-Second Snapshot Quiz: Root Cause Analysis

## Summary

The quiz UI works correctly end-to-end. The pipeline breaks at the LeadConnector API call in `/api/capture-lead/route.ts`. Contacts are NOT being created in GHL.

## Root Cause: v1 API endpoint used with v2 API key

The `.env.local` contains a **Private Integration Token** (PIT):
```
LC_API_KEY=pit-65ca4a54-d437-4ce4-8cfd-ce6ba006f6cf
```

PIT tokens are for the **GHL API v2** (`https://services.leadconnectorhq.com/`).

The code calls the **v1 endpoint**: `https://rest.gohighlevel.com/v1/contacts/`

### Evidence

**v1 API test (current code path):**
```
POST https://rest.gohighlevel.com/v1/contacts/
Authorization: Bearer pit-65ca4a54-...
Response: 401 {"msg":"Api key is invalid."}
```

**v2 API test (correct endpoint):**
```
POST https://services.leadconnectorhq.com/contacts/
Authorization: Bearer pit-65ca4a54-...
Version: 2021-07-28
Response: 201 (contact created successfully)
```

## Secondary Issues

1. **Missing `Version` header**: v2 API requires `Version: 2021-07-28` header.
2. **Custom fields format**: v2 uses `customFields` as an array of `{id, field_value}` objects with field IDs, not string keys. The current code sends `{key, field_value}` which would be silently ignored.
3. **Tags not supported in v2 contact creation**: Tags must be added via a separate `POST /contacts/{contactId}/tags` call, or via workflows.
4. **Client-side fire-and-forget**: `captureLeadToLC()` in `page.tsx` does not check the API response for success/failure. Users always see results even when lead capture fails silently.
5. **Em dash in source field**: `"60-Second Snapshot — ob1ai.co"` violates the project's no-em-dash style rule.

## Impact

- Every quiz submission since deployment has silently failed to create a GHL contact
- No leads captured, no emails sent, no pipeline entries created
- Users see their results (good UX), but OB.1 gets zero lead data (bad business outcome)

## Fix Required

1. Switch endpoint from `rest.gohighlevel.com/v1/contacts/` to `services.leadconnectorhq.com/contacts/`
2. Add `Version: 2021-07-28` header
3. Add tags via separate API call after contact creation
4. Fix custom fields to use field IDs (or remove until IDs are configured in GHL)
5. Return success/failure status to the client and log it
