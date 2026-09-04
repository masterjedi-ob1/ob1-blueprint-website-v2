import type { ReactNode } from "react"

/**
 * Shared chrome for the published legal documents (/terms, /privacy).
 * Layout, type scale, and color follow the /about and /governance pattern.
 * The document body is wrapped in [data-legal-doc] so the published text can
 * be extracted and diffed against the approved source markdown.
 */
export default function LegalShell({
  title,
  publicationNote,
  children,
}: {
  title: string
  publicationNote: string
  children: ReactNode
}) {
  return (
    <section data-legal-doc className="bg-slate-950 pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div aria-hidden className="h-px w-12 bg-orange-500 mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">{title}</h1>

          <div className="rounded-lg border border-slate-800 border-t-2 border-t-orange-500 bg-slate-900/60 p-6">
            <p className="text-base font-bold text-white">OB.1 AI Solutions LLC</p>
            <p className="mt-1 text-sm text-slate-400">Hudson, Ohio 44236</p>
            <p className="mt-1 text-sm">
              <a
                href="mailto:legal@ob1ai.co"
                className="text-orange-500 hover:text-orange-400 underline underline-offset-4 transition-colors"
              >
                legal@ob1ai.co
              </a>
            </p>
            <p className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400">
              Effective Date: August 25, 2026 · Last Updated: August 25, 2026
            </p>
            <p className="mt-1 text-sm text-slate-400">{publicationNote}</p>
          </div>

          <article className="mt-12 border-t border-slate-800 pt-12">
            {children}
            <p className="mt-16 pt-8 border-t border-slate-800 text-sm italic text-slate-500">
              Rules Before Tools ™ · ob1ai.co
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

/** Numbered section heading. */
export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 leading-snug first:mt-0">{children}</h2>
}

/** Body paragraph. */
export function P({ children }: { children: ReactNode }) {
  return <p className="text-base text-slate-300 leading-relaxed mb-5">{children}</p>
}

/** Bulleted list. */
export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-3 mb-5">{children}</ul>
}

/** Bulleted list item. */
export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-base text-slate-300 leading-relaxed">
      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-sm bg-orange-500" />
      <span>{children}</span>
    </li>
  )
}

/** Inline emphasis used for the run-in bold lead of a clause. */
export function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>
}

/** mailto: link styled to match the site. */
export function MailLink({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className="text-orange-500 hover:text-orange-400 underline underline-offset-4 transition-colors"
    >
      {address}
    </a>
  )
}

/** Horizontally scrollable data table. */
export function Table({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div className="mb-5 overflow-x-auto rounded-lg border border-slate-800">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-slate-900/80">
            {headers.map((header, i) => (
              <th
                key={i}
                scope="col"
                className="border-b border-slate-800 px-4 py-3 font-mono text-xs uppercase tracking-widest text-orange-500 align-bottom"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="align-top">
              {row.map((cell, c) => (
                <td key={c} className="border-b border-slate-800 px-4 py-3 text-slate-300 leading-relaxed last:border-r-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
