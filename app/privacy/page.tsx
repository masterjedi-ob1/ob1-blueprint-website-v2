import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LegalShell, { H2, P, UL, LI, B, MailLink, Table } from "@/components/legal/legal-shell"

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | OB.1 AI Solutions" },
  description:
    "How OB.1 AI Solutions collects, uses, shares, and protects personal information through ob1ai.co. Version 1.0, effective August 25, 2026.",
  alternates: { canonical: "https://ob1ai.co/privacy" },
  openGraph: {
    title: "Privacy Policy | OB.1 AI Solutions",
    description: "How OB.1 AI Solutions collects, uses, shares, and protects personal information through ob1ai.co.",
    url: "https://ob1ai.co/privacy",
    siteName: "OB.1 AI Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OB.1 AI Solutions — Privacy Policy" }],
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LegalShell
        title="OB.1 AI Solutions — Privacy Policy"
        publicationNote="Version 1.0 — for publication at ob1ai.co/privacy"
      >
        <P>
          OB.1 AI Solutions LLC ("OB.1," "we," "us," or "our") is an Ohio limited liability company providing AI
          advisory, readiness assessment, and AI governance services. This Privacy Policy explains how we collect, use,
          share, and protect personal information through ob1ai.co and our related forms, assessments, and
          communications (the "Site").
        </P>
        <P>
          This policy covers the Site and our marketing and business-development activities. It does <B>not</B> cover:
        </P>
        <UL>
          <LI>
            <B>Client engagement data.</B> When we process data on behalf of a client under a signed Client Agreement,
            we act as a service provider or processor under that agreement and, where applicable, a Data Processing
            Addendum. The client's own privacy notice governs that data.
          </LI>
          <LI>
            <B>Software and tools we build for you.</B> Bespoke software, applications, and hosted environments OB.1
            builds or operates as part of an engagement are governed by the applicable Client Agreement and any
            accompanying data processing terms.
          </LI>
        </UL>

        <H2>1. Information We Collect</H2>
        <P>
          <B>Information you give us.</B>
        </P>
        <Table
          headers={["Category", "Examples", "Where it comes from"]}
          rows={[
            [
              "Identifiers",
              "Name, business email, phone, company name, job title",
              "Contact forms, assessments, newsletter signup, demo requests",
            ],
            [
              "Professional information",
              "Industry, headcount, role, tech stack, budget range, timeline",
              "Readiness assessments, scorecards, discovery forms",
            ],
            [
              "Business content",
              "Process descriptions, pain points, documents or notes you choose to upload",
              "Assessment tools, uploads",
            ],
            [
              "Communications",
              "Emails, meeting requests, scheduling details, meeting notes and recordings where you have consented",
              "Email, calendar, video calls",
            ],
            [
              "Commercial information",
              "Services inquired about, engagement history, invoices and payment status",
              "Direct interaction; billing systems",
            ],
          ]}
        />
        <P>
          <B>Information collected automatically.</B> IP address, approximate location derived from IP, browser and
          device type, operating system, referring URL, pages viewed, time on page, and interaction events — collected
          through cookies and similar technologies.
        </P>
        <P>
          <B>Information from third parties.</B> Business contact and firmographic data from enrichment and
          lead-generation providers, publicly available professional profiles, and referrals from coalition partners.
        </P>
        <P>
          <B>What we do not want.</B> Do not submit protected health information, payment card numbers, Social Security
          or other government identification numbers, biometric data, precise geolocation, or any other sensitive or
          regulated data through the Site. If you send it anyway, we will delete it.
        </P>

        <H2>2. How We Use Information</H2>
        <P>We use personal information to:</P>
        <UL>
          <LI>respond to inquiries and provide requested materials;</LI>
          <LI>generate and deliver readiness assessments, scorecards, and related output;</LI>
          <LI>deliver, administer, and improve our services and the Site;</LI>
          <LI>send marketing communications you can opt out of at any time;</LI>
          <LI>schedule and conduct meetings;</LI>
          <LI>process payments and manage the business relationship;</LI>
          <LI>maintain security, prevent fraud, and enforce our Terms of Use;</LI>
          <LI>produce de-identified, aggregated analytics and benchmarks; and</LI>
          <LI>comply with legal obligations.</LI>
        </UL>
        <P>
          <B>
            We do not sell your personal information, and we do not share it for cross-context behavioral advertising.
          </B>{" "}
          We do not currently use advertising pixels, ad-network tags, or cross-site retargeting technologies on the
          Site.
        </P>

        <H2>3. Artificial Intelligence</H2>
        <P>
          We use AI systems in our business, and you should understand what that means for your information.
        </P>
        <P>
          <B>Third-party AI and platform providers.</B> Information you submit through the Site may be transmitted to
          and processed by the following providers in order to store your submission and generate the output you
          requested:
        </P>
        <Table
          headers={["Provider", "Role", "What it processes"]}
          rows={[
            [
              "Airtable",
              "Primary data store for submissions and engagement records",
              "Contact details, form responses, engagement records",
            ],
            [
              "Audity (RAC Projects Group, LLC)",
              "AI readiness assessment and report generation",
              "Documents, process descriptions, and assessment inputs you provide",
            ],
            ["pipeline.help", "Outreach and relationship management", "Business contact details and outreach history"],
          ]}
        />
        <P>
          We update this list as our providers change. Questions about any provider go to{" "}
          <MailLink address="legal@ob1ai.co" />.
        </P>
        <P>
          <B>Model training.</B> We do not use information you submit through the Site to train our own artificial
          intelligence models. Third-party providers process your information to deliver the services described above,
          and their use is governed by their own terms in addition to our agreements with them. We review those terms
          and work to restrict our providers' use of your information to providing services to us. If you have a
          specific question about a provider's data practices, contact <MailLink address="legal@ob1ai.co" /> before
          submitting anything.
        </P>
        <P>
          <B>Accuracy.</B> AI-assisted output may be inaccurate or incomplete. It is informational only and requires
          human verification. See Section 4 of our Terms of Use.
        </P>
        <P>
          <B>No automated decisions with legal effect.</B> We do not use automated processing to make decisions that
          produce legal or similarly significant effects about you.
        </P>

        <H2>4. Cookies and Tracking</H2>
        <P>We use cookies and similar technologies in two categories:</P>
        <Table
          headers={["Category", "Purpose"]}
          rows={[
            [
              <B key="essential">Essential</B>,
              "Site function, security, load balancing, form submission. Required for the Site to work.",
            ],
            [<B key="analytics">Analytics</B>, "Understanding how the Site is used so we can improve it."],
          ]}
        />
        <P>
          <B>We do not use advertising, retargeting, or cross-site tracking pixels on the Site.</B>
        </P>
        <P>
          <B>Your choices.</B> You can block or delete cookies through your browser settings, though some Site features
          may not function correctly if you block essential cookies. Where we present a cookie preference control, you
          can change your choices there at any time. We honor Global Privacy Control (GPC) and similar browser-level
          opt-out signals.
        </P>

        <H2>5. Outreach and Messaging</H2>
        <P>
          We conduct business development outreach through professional networking platforms and messaging services,
          including LinkedIn and WhatsApp, using a third-party outreach provider.
        </P>
        <UL>
          <LI>
            <B>Business contacts only.</B> We contact people in a professional capacity about professional services. We
            do not send consumer marketing.
          </LI>
          <LI>
            <B>Opt out any time.</B> Reply asking us to stop, or email <MailLink address="legal@ob1ai.co" />, and we
            will remove you from outreach and keep a suppression record so the request is honored going forward.
          </LI>
          <LI>
            <B>Platform terms apply.</B> Messages sent through LinkedIn or WhatsApp are also subject to those platforms'
            own terms and privacy policies.
          </LI>
          <LI>
            <B>No sale of contact data.</B> We do not sell or rent the business contact information we hold.
          </LI>
        </UL>

        <H2>6. How We Share Information</H2>
        <P>We share personal information with:</P>
        <UL>
          <LI>
            <B>Service providers</B> — hosting, data storage (Airtable), assessment and AI processing (Audity), outreach
            and relationship management (pipeline.help), email, scheduling, e-signature, and payment processing, each
            bound to use it only to provide services to us.
          </LI>
          <LI>
            <B>Coalition and referral partners</B> — only where you have asked for an introduction or where the
            engagement requires it, and subject to confidentiality obligations.
          </LI>
          <LI>
            <B>Professional advisors</B> — counsel, accountants, and insurers, under duties of confidentiality.
          </LI>
          <LI>
            <B>Legal and safety</B> — where required by law, subpoena, or court order, or to protect our rights,
            property, or safety, or that of others.
          </LI>
          <LI>
            <B>Business transfers</B> — in connection with a merger, financing, acquisition, or sale of assets, subject
            to this policy.
          </LI>
        </UL>
        <P>
          We do not share your business content with other clients or prospects, and we do not publish identifiable
          details from your submissions without written permission.
        </P>

        <H2>7. Data Retention</H2>
        <P>
          We keep personal information only as long as needed for the purposes described above, then delete or
          de-identify it.
        </P>
        <Table
          headers={["Data", "Retention"]}
          rows={[
            ["Marketing contacts", "Until you unsubscribe, plus a suppression record so we honor the opt-out"],
            [
              "Long-form submissions and assessment inputs",
              "Retained in Airtable for 24 months from submission, unless an engagement follows",
            ],
            [
              "Engagement and client records",
              "Term of the engagement plus 7 years, for legal, tax, and insurance purposes",
            ],
            ["Outreach and contact records", "Until you opt out, plus a suppression record so the opt-out is honored"],
            ["Records subject to legal hold", "Until the hold is released"],
          ]}
        />

        <H2>8. Security</H2>
        <P>
          We use administrative, technical, and physical safeguards appropriate to the nature of the information,
          including access controls, encryption in transit, least-privilege provisioning, and vendor diligence.
        </P>
        <P>
          No method of transmission or storage is completely secure. We cannot guarantee absolute security, and you
          transmit information at your own risk.
        </P>

        <H2>9. Your Privacy Rights</H2>
        <P>Depending on where you live, you may have the right to:</P>
        <UL>
          <LI>
            <B>know</B> what personal information we hold and how we use it;
          </LI>
          <LI>
            <B>access</B> a copy of it;
          </LI>
          <LI>
            <B>correct</B> inaccurate information;
          </LI>
          <LI>
            <B>delete</B> it, subject to legal exceptions;
          </LI>
          <LI>
            <B>opt out</B> of sale, sharing, or targeted advertising;
          </LI>
          <LI>
            <B>limit</B> use of sensitive personal information;
          </LI>
          <LI>
            <B>portability</B> — receive your data in a portable format; and
          </LI>
          <LI>
            <B>non-discrimination</B> for exercising these rights.
          </LI>
        </UL>
        <P>
          <B>How to exercise them.</B> Email <MailLink address="legal@ob1ai.co" /> with your request. We will verify
          your identity — typically by confirming control of the email address on file — and respond within the time
          required by applicable law (generally 45 days under California law, extendable once by 45 days; 30 days under
          GDPR, extendable by 60 days).
        </P>
        <P>
          <B>Authorized agents.</B> You may use an authorized agent, who must provide written permission and whose
          authority we may verify with you directly.
        </P>
        <P>
          <B>Appeals.</B> If we deny your request, you may appeal by replying to our decision with "Appeal" in the
          subject line. We will respond within 45 days.
        </P>
        <P>
          <B>California residents.</B> You have the rights described above under the CCPA/CPRA. We do not sell your
          personal information or share it for cross-context behavioral advertising. We do not knowingly collect the
          personal information of anyone under 16. We will not discriminate against you for exercising any of these
          rights.
        </P>
        <P>
          <B>EEA/UK residents.</B> Where GDPR or UK GDPR applies, our lawful bases are: performance of a contract
          (responding to your request and delivering services), legitimate interests (marketing to business contacts,
          security, service improvement), consent (cookies and marketing where required), and legal obligation. You may
          withdraw consent at any time and lodge a complaint with your supervisory authority. Transfers of personal
          information to the United States are made under Standard Contractual Clauses or another approved mechanism.
        </P>

        <H2>10. Children</H2>
        <P>
          The Site is not directed to individuals under 18, and we do not knowingly collect their personal information.
          If we learn we have, we will delete it.
        </P>

        <H2>11. Third-Party Sites</H2>
        <P>
          The Site links to third-party websites and services we do not control. Their privacy practices are governed by
          their own policies.
        </P>

        <H2>12. Changes to This Policy</H2>
        <P>
          We may update this policy. The "Last Updated" date reflects the current version. We will post material changes
          on this page and, where required, notify you directly.
        </P>

        <H2>13. Contact Us</H2>
        <P>
          <B>OB.1 AI Solutions LLC</B> Hudson, Ohio 44236 Privacy and legal inquiries:{" "}
          <MailLink address="legal@ob1ai.co" />
        </P>
      </LegalShell>
      <Footer />
    </main>
  )
}
