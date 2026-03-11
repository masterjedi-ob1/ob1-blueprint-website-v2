import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const LC_API_KEY = process.env.LC_API_KEY;
  const LC_LOCATION_ID = process.env.LC_LOCATION_ID;

  if (!LC_API_KEY || !LC_LOCATION_ID) {
    console.warn("LeadConnector env vars not set — lead not captured");
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

  const payload = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    companyName: data.company || "",
    locationId: LC_LOCATION_ID,
    tags: [`snapshot-quiz`, `tier-${data.tier}`, `score-${data.score}`],
    customFields: [
      { key: "snapshot_score", field_value: String(data.score) },
      { key: "snapshot_tier", field_value: data.tier },
      { key: "snapshot_answers", field_value: data.answers.join(",") },
    ],
    source: "60-Second Snapshot — ob1ai.co",
  };

  try {
    const res = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LC_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("LC capture failed:", err);
      return NextResponse.json({ ok: false, error: err }, { status: 200 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("LC capture error:", e);
    return NextResponse.json({ ok: false, error: String(e) }, { status: 200 });
  }
}
