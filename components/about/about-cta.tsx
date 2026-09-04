import { CtaBand } from "@/components/cta-band"

export default function AboutCTA() {
  return (
    <CtaBand
      heading={
        <>
          Ready to build your <span className="text-orange-500">blueprint?</span>
        </>
      }
      subhead="Start with a conversation. No pitch, no pressure, just clarity on where you stand and what's possible."
      primary={{
        label: "Get Your AI Readiness Score",
        href: "https://score.ob1ai.co/survey/16b293db06d1",
        icon: "fileCheck",
      }}
      secondary={{
        label: "Contact Us",
        href: "https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form",
      }}
    />
  )
}
