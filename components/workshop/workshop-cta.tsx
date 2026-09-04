import { CtaBand } from "@/components/cta-band"

export default function WorkshopCTA() {
  return (
    <CtaBand
      tone="stone"
      heading={
        <>
          Ready to put this thinking to{" "}
          <span className="text-orange-400">work?</span>
        </>
      }
      subhead="Start with a diagnostic assessment to see where you stand, then let us help you build from there."
      primary={{
        label: "Get Your AI Readiness Score",
        href: "https://score.ob1ai.co/survey/16b293db06d1",
        icon: "fileCheck",
      }}
      secondary={{
        label: "Talk to Us",
        href: "https://airtable.com/appdUlBzoWdtw59KU/pagOSNcWAQqsUwe3O/form",
      }}
    />
  )
}
