import { NextRequest, NextResponse } from "next/server";

const LC_BASE_URL = "https://services.leadconnectorhq.com";
const LC_API_VERSION = "2021-07-28";

export async function POST(req: NextRequest) {
  const LC_API_KEY = process.env.LC_API_KEY;
  const LC_LOCATION_ID = process.env.LC_LOCATION_ID;

  if (!LC_API_KEY || !LC_LOCATION_ID) {
    console.warn("LeadConnector env vars not set, lead not captured");
    return NextResponse.json({ ok: false, error: "env vars not set" }, { status: 200 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const data = body as {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    score: number;
    tier: string;
    answers: number[];
  };

  const contactPayload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    companyName: data.company || "",
    locationId: LC_LOCATION_ID,
    source: "60-Second Snapshot - ob1ai.co",
  };

  try {
    // Step 1: Create or update contact via v2 API
    const createRes = await fetch(`${LC_BASE_URL}/contacts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LC_API_KEY}`,
        Version: LC_API_VERSION,
      },
      body: JSON.stringify(contactPayload),
    });

    if (!createRes.ok) {
      const err = await createRes.text();
      console.error("LC contact creation failed:", createRes.status, err);
      return NextResponse.json({ ok: false, error: err }, { status: 200 });
    }

    const { contact } = (await createRes.json()) as { contact: { id: string } };
    const contactId = contact.id;

    // Step 2: Add tags via v2 API
    const tags = ["snapshot-quiz", `tier-${data.tier}`, `score-${data.score}`];
    const tagRes = await fetch(`${LC_BASE_URL}/contacts/${contactId}/tags`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LC_API_KEY}`,
        Version: LC_API_VERSION,
      },
      body: JSON.stringify({ tags }),
    });

    if (!tagRes.ok) {
      console.warn("LC tag assignment failed:", tagRes.status, await tagRes.text());
    }

    // Step 3: Update custom fields (uses field keys; will succeed if fields exist in LC)
    const updatePayload = {
      customFields: [
        { key: "snapshot_score", field_value: String(data.score) },
        { key: "snapshot_tier", field_value: data.tier },
        { key: "snapshot_answers", field_value: data.answers.join(",") },
      ],
    };

    const updateRes = await fetch(`${LC_BASE_URL}/contacts/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LC_API_KEY}`,
        Version: LC_API_VERSION,
      },
      body: JSON.stringify(updatePayload),
    });

    if (!updateRes.ok) {
      console.warn("LC custom field update failed:", updateRes.status, await updateRes.text());
    }

    console.log("LC lead captured:", contactId, data.email, `score=${data.score}`, `tier=${data.tier}`);
    return NextResponse.json({ ok: true, contactId });
  } catch (e) {
    console.error("LC capture error:", e);
    return NextResponse.json({ ok: false, error: String(e) }, { status: 200 });
  }
}
