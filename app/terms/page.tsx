import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LegalShell, { H2, P, UL, LI, B, MailLink } from "@/components/legal/legal-shell"

export const metadata: Metadata = {
  title: { absolute: "Terms of Use | OB.1 AI Solutions" },
  description:
    "The terms that govern use of ob1ai.co, including its forms, assessments, and downloadable materials. Version 1.0, effective August 25, 2026.",
  alternates: { canonical: "https://ob1ai.co/terms" },
  openGraph: {
    title: "Terms of Use | OB.1 AI Solutions",
    description: "The terms that govern use of ob1ai.co, including its forms, assessments, and downloadable materials.",
    url: "https://ob1ai.co/terms",
    siteName: "OB.1 AI Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "OB.1 AI Solutions — Terms of Use" }],
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LegalShell
        title="OB.1 AI Solutions — Terms of Use"
        publicationNote="Version 1.0 — for publication at ob1ai.co/terms"
      >
        <P>
          These Terms of Use ("Terms") govern your access to and use of ob1ai.co and any related pages, forms,
          assessments, calculators, downloadable materials, and communications we make publicly available (together, the
          "Site"). The Site is operated by OB.1 AI Solutions LLC, an Ohio limited liability company ("OB.1," "we," "us,"
          or "our").
        </P>
        <P>
          By accessing or using the Site, you agree to these Terms. If you do not agree, do not use the Site.
        </P>

        <H2>1. What These Terms Do and Do Not Cover</H2>
        <P>
          These Terms govern the <B>Site only</B>.
        </P>
        <P>
          They do <B>not</B> govern:
        </P>
        <P>
          <B>(a) Engagements.</B> Any paid engagement, consulting service, deliverable, assessment, or professional
          relationship between OB.1 and a client. Those are governed exclusively by a separately executed Master
          Services Agreement, Statement of Work, order form, or other written agreement (each, a "Client Agreement").
        </P>
        <P>
          <B>(b) Software, tools, and platforms.</B> Any software, application, tool, or hosted environment OB.1 builds,
          configures, licenses, or operates for you — including bespoke and custom-built software delivered as part of an
          OB.1 engagement — together with any related invoicing. These are governed by the applicable Client Agreement
          and any accompanying license, hosting, or data processing terms, not by these Terms. Invoices are processed
          through our third-party payment processor and are subject to that processor's terms.
        </P>
        <P>
          <B>Order of precedence.</B> If any provision of these Terms conflicts with a Client Agreement or applicable
          product or license terms, that agreement controls as to the subject matter it covers. Nothing in these Terms
          expands, limits, or modifies the rights, obligations, warranties, indemnities, or liability allocations set out
          in those agreements.
        </P>

        <H2>2. Eligibility</H2>
        <P>
          You must be at least 18 years old and legally able to enter a binding contract. If you use the Site on behalf
          of an organization, you represent that you are authorized to bind that organization to these Terms.
        </P>
        <P>
          The Site is directed to businesses and business professionals. It is not directed to children, and we do not
          knowingly collect information from anyone under 18.
        </P>

        <H2>3. Informational Purpose and No Professional Advice</H2>
        <P>
          Content on the Site — including articles, frameworks, methodology descriptions, readiness assessments,
          scorecards, calculators, ROI estimates, and any AI-generated output — is provided for{" "}
          <B>general informational purposes only</B>.
        </P>
        <P>It does not constitute, and must not be relied on as:</P>
        <UL>
          <LI>legal advice;</LI>
          <LI>accounting, tax, or financial advice;</LI>
          <LI>regulatory or compliance certification;</LI>
          <LI>medical, clinical, or healthcare advice; or</LI>
          <LI>a professional opinion of any kind.</LI>
        </UL>
        <P>
          No attorney-client, fiduciary, advisory, or other professional relationship is created by your use of the Site,
          by submitting a form, by completing an assessment, or by receiving materials from us. A professional
          relationship with OB.1 arises only under a signed Client Agreement.
        </P>
        <P>
          You are solely responsible for evaluating any Site content against your own circumstances and for obtaining
          qualified professional advice before acting on it.
        </P>

        <H2>4. AI-Generated Content</H2>
        <P>
          Portions of the Site and certain materials we provide are produced with the assistance of artificial
          intelligence systems, including third-party large language models and third-party platforms.
        </P>
        <P>You acknowledge and agree that:</P>
        <UL>
          <LI>
            <B>AI output can be wrong.</B> AI systems may produce inaccurate, incomplete, outdated, or fabricated
            information, including plausible-sounding figures, citations, and recommendations.
          </LI>
          <LI>
            <B>We make no accuracy warranty.</B> We do not warrant the accuracy, completeness, reliability, or fitness
            for any purpose of AI-assisted output on the Site.
          </LI>
          <LI>
            <B>Human review is your responsibility.</B> Any AI-assisted output you receive through the Site is a
            starting point, not a validated conclusion. You must independently verify it before relying on it or
            presenting it to any third party.
          </LI>
          <LI>
            <B>Estimates are estimates.</B> Any readiness score, maturity index, savings projection, ROI figure, payback
            period, or roadmap generated on or through the Site is a modeled estimate based on inputs you supply. It is
            not a guarantee, forecast, projection of results, or representation of outcomes you will achieve.
          </LI>
          <LI>
            <B>Third-party processing.</B> Information you submit through Site assessments and tools may be processed by
            third-party AI and platform providers. See our Privacy Policy for details.
          </LI>
        </UL>

        <H2>5. Submissions You Make to Us</H2>
        <P>
          If you submit information to the Site — through a contact form, readiness assessment, scorecard, calculator,
          newsletter signup, or uploaded document ("Submissions") — the following applies.
        </P>
        <P>
          <B>You keep ownership.</B> You retain all right, title, and interest in your Submissions.
        </P>
        <P>
          <B>Limited license to us.</B> You grant OB.1 a non-exclusive, worldwide, royalty-free license to host, store,
          reproduce, and process your Submissions solely to (a) respond to your inquiry, (b) generate and deliver the
          output you requested, (c) operate, secure, and maintain the Site, and (d) comply with law.
        </P>
        <P>
          <B>What we will not do.</B> We will not sell your Submissions. We will not use your Submissions to train our
          own artificial intelligence models. We will not publish or disclose identifiable content from your Submissions
          without your written permission.
        </P>
        <P>
          <B>Third-party processing.</B> Your Submissions are stored and processed by third-party providers we use to
          operate the Site and generate the output you requested. Those providers are identified in our Privacy Policy,
          and their handling of your Submissions is governed by their own terms in addition to our agreements with them.
          If you do not want your Submissions processed by third-party providers, do not submit them.
        </P>
        <P>
          <B>Aggregated data.</B> We may create and use de-identified, aggregated statistics derived from Site usage —
          for example, how many assessments scored in a given range — provided the result cannot reasonably be used to
          identify you or your organization. We own that aggregated data.
        </P>
        <P>
          <B>Your representations.</B> You represent that you have the right to submit what you submit, that it does not
          contain anyone else's confidential information without authorization, and that it does not include protected
          health information, payment card data, government identification numbers, or other sensitive regulated data.
          Do not upload regulated data to the Site.
        </P>
        <P>
          <B>Feedback.</B> If you send us suggestions, ideas, or feedback about OB.1 or our services, you grant us an
          unrestricted, perpetual, irrevocable right to use it without obligation or compensation to you.
        </P>

        <H2>6. Our Intellectual Property</H2>
        <P>
          The Site and its contents — including text, graphics, logos, layouts, frameworks, diagrams, methodologies,
          assessment instruments, scoring logic, templates, and software — are owned by OB.1 or our licensors and are
          protected by copyright, trademark, trade secret, and other laws.
        </P>
        <P>
          <B>Marks.</B> "OB.1," "OB.1 AI Solutions," "Chieftain," "5-Phase Operational Blueprint," "Rules Before Tools,"
          and associated logos and taglines are trademarks or service marks of OB.1, whether registered or unregistered.
          Nothing on the Site grants you any license to use them.
        </P>
        <P>
          <B>Methodology.</B> The 5-Phase Operational Blueprint and OB.1's related governance frameworks, sequencing,
          scoring criteria, checkpoint logic, and assessment design constitute OB.1's proprietary methodology and, where
          applicable, our trade secrets. Access to Site content does not grant you any right to reproduce, adapt,
          reverse engineer, benchmark, or create derivative works from that methodology.
        </P>
        <P>
          <B>Limited personal license.</B> We grant you a limited, revocable, non-exclusive, non-transferable license to
          view and download Site materials for your own internal business evaluation. Any other use — including
          reproduction, redistribution, resale, framing, scraping, or incorporation into another product or service —
          requires our prior written consent.
        </P>

        <H2>7. Acceptable Use</H2>
        <P>You agree not to:</P>
        <UL>
          <LI>use the Site for any unlawful purpose or in violation of these Terms;</LI>
          <LI>
            access the Site through scrapers, crawlers, bots, or other automated means without our written permission;
          </LI>
          <LI>attempt to gain unauthorized access to any part of the Site or its underlying systems;</LI>
          <LI>interfere with or disrupt the Site's operation or security;</LI>
          <LI>upload malicious code, or content that is infringing, defamatory, harassing, or unlawful;</LI>
          <LI>misrepresent your identity or affiliation;</LI>
          <LI>
            reverse engineer, decompile, or attempt to derive the source code, prompts, scoring logic, or model
            configuration underlying any Site tool; or
          </LI>
          <LI>use the Site to develop, train, benchmark, or improve a competing product or service.</LI>
        </UL>
        <P>
          We may suspend or terminate your access at any time, with or without notice, for any reason.
        </P>

        <H2>8. Third-Party Services, Links, and Platforms</H2>
        <P>
          The Site links to and integrates with third-party services, including scheduling, analytics, email, payment,
          hosting, AI model providers, and assessment platforms.
        </P>
        <P>
          We do not control those services and are not responsible for their content, practices, availability, or terms.
          Your use of a third-party service is governed by that provider's own terms and privacy policy. Links do not
          imply endorsement.
        </P>

        <H2>9. No Warranty</H2>
        <P>
          THE SITE AND ALL CONTENT, TOOLS, ASSESSMENTS, AND OUTPUT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT
          WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
        </P>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OB.1 DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND ANY WARRANTY ARISING FROM
          COURSE OF DEALING OR USAGE OF TRADE.
        </P>
        <P>
          WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS, OR
          THAT ANY CONTENT OR OUTPUT WILL BE ACCURATE, CURRENT, OR COMPLETE.
        </P>
        <P>
          Some jurisdictions do not allow the exclusion of certain warranties. In those jurisdictions, the above
          exclusions apply to the fullest extent permitted.
        </P>

        <H2>10. Limitation of Liability</H2>
        <P>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OB.1 AND ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES, CONTRACTORS, AND
          AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
          DAMAGES, OR FOR ANY LOST PROFITS, LOST REVENUE, LOST BUSINESS OPPORTUNITY, LOST DATA, OR BUSINESS
          INTERRUPTION, ARISING OUT OF OR RELATING TO YOUR USE OF THE SITE, REGARDLESS OF THE THEORY OF LIABILITY AND
          EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </P>
        <P>
          OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE SITE WILL NOT EXCEED ONE
          HUNDRED U.S. DOLLARS ($100.00).
        </P>
        <P>
          For the avoidance of doubt, this Section 10 applies to the Site only. Liability arising under a Client
          Agreement is governed exclusively by that agreement.
        </P>
        <P>
          Some jurisdictions do not allow certain limitations of liability. In those jurisdictions, our liability is
          limited to the fullest extent permitted by law.
        </P>

        <H2>11. Indemnification</H2>
        <P>
          You agree to defend, indemnify, and hold harmless OB.1 and its members, managers, officers, employees,
          contractors, and agents from any claims, damages, liabilities, losses, and expenses (including reasonable
          attorneys' fees) arising out of or related to: (a) your use of the Site; (b) your violation of these Terms;
          (c) your Submissions; or (d) your violation of any law or third-party right.
        </P>

        <H2>12. Governing Law and Dispute Resolution</H2>
        <P>
          <B>Governing law.</B> These Terms are governed by the laws of the State of Ohio, without regard to
          conflict-of-law principles.
        </P>
        <P>
          <B>Informal resolution first.</B> Before filing any claim, you agree to contact us at{" "}
          <MailLink address="legal@ob1ai.co" /> and attempt in good faith to resolve the dispute informally for at least
          thirty (30) days.
        </P>
        <P>
          <B>Venue.</B> Any dispute not resolved informally will be brought exclusively in the state or federal courts
          located in Summit County, Ohio, and you consent to personal jurisdiction and venue there and waive any
          objection based on inconvenient forum.
        </P>
        <P>
          <B>Class action waiver.</B> YOU AND OB.1 AGREE THAT CLAIMS MAY BE BROUGHT ONLY IN AN INDIVIDUAL CAPACITY, AND
          NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, COLLECTIVE, OR REPRESENTATIVE PROCEEDING. YOU AND
          OB.1 EACH WAIVE ANY RIGHT TO A JURY TRIAL.
        </P>
        <P>
          <B>Time limit.</B> Any claim must be filed within one (1) year after it arises, or it is permanently barred,
          to the extent permitted by law.
        </P>

        <H2>13. Changes to These Terms</H2>
        <P>
          We may update these Terms at any time. The "Last Updated" date reflects the most recent version. Material
          changes will be posted on this page. Your continued use of the Site after changes take effect constitutes
          acceptance.
        </P>

        <H2>14. General</H2>
        <P>
          <B>Severability.</B> If any provision is held unenforceable, the remainder stays in effect and the
          unenforceable provision is modified to the minimum extent necessary.
        </P>
        <P>
          <B>No waiver.</B> Our failure to enforce any provision is not a waiver of it.
        </P>
        <P>
          <B>Assignment.</B> You may not assign these Terms. We may assign them in connection with a merger,
          acquisition, reorganization, or sale of assets.
        </P>
        <P>
          <B>Entire agreement.</B> These Terms, together with our Privacy Policy, are the entire agreement between you
          and OB.1 regarding the Site, and supersede any prior understanding regarding the Site.
        </P>
        <P>
          <B>Survival.</B> Sections 3, 4, 5, 6, 9, 10, 11, 12, and 14 survive termination.
        </P>

        <H2>15. Contact</H2>
        <P>
          OB.1 AI Solutions LLC Hudson, Ohio 44236 <MailLink address="legal@ob1ai.co" />
        </P>
      </LegalShell>
      <Footer />
    </main>
  )
}
