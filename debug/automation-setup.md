## LeadConnector Automation Setup for 60-Second Snapshot

### Prerequisites
- Custom fields must exist in the LC location:
  - `snapshot_score` (text)
  - `snapshot_tier` (text)
  - `snapshot_answers` (text)
- Email template "Your AI Snapshot Results Are In" created from `email-templates/snapshot-thankyou.html`

### Workflow Configuration

**Workflow Name:** Snapshot Quiz - Results + Follow-up

**Trigger:** Contact Tag Added = "snapshot-quiz"

**Steps:**

1. **Wait** - 0 minutes (immediate execution)

2. **Send Email** action:
   - Template: "Your AI Snapshot Results Are In"
   - From: OB.1 AI Solutions <admin@ob1ai.co>
   - Merge fields map to contact custom fields:
     - {{contact.name}} = Contact First Name
     - {{snapshot_score}} = Custom Field "snapshot_score"
     - {{snapshot_tier}} = Custom Field "snapshot_tier"

3. **Add Tag:** "snapshot-email-sent"

4. **Internal Notification:**
   - Type: Email
   - To: master_jedi@ob1ai.co
   - Subject: "New Snapshot Lead: {{contact.name}}"
   - Body: "New quiz submission from {{contact.name}} ({{contact.email}}). Score: {{snapshot_score}}/40. Tier: {{snapshot_tier}}."

5. **Wait** - 24 hours

6. **If/Else Branch:**
   - Condition: Contact does NOT have tag "booked-discovery"
   - If true: Send follow-up email nudging them to book
   - If false: End workflow

### Manual Setup Steps in GHL UI

1. Go to Automation > Workflows > Create Workflow
2. Choose "Start from Scratch"
3. Set trigger: Contact Tag Added > "snapshot-quiz"
4. Add each action step as described above
5. Toggle workflow to "Published"
6. Test with a manual tag assignment on a test contact

### Verification

1. Submit the quiz on ob1ai.co with a test email
2. Check GHL Contacts for the new entry with tags and custom fields
3. Verify the thank-you email arrives within 1 minute
4. Verify master_jedi@ob1ai.co receives the internal notification
5. Check the contact has the "snapshot-email-sent" tag
