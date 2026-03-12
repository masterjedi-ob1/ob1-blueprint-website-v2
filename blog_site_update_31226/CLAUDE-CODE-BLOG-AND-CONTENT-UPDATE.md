# Claude Code Task: OB.1 Website Major Update — Blog, Content, Multimedia Removal

## Project: ob1-blueprint-website-v2 (Next.js on Vercel, ob1ai.co)
## Priority: HIGH — needs to be functional before tomorrow's meeting with Chloe

---

## OVERVIEW: 5 Tasks

1. **Remove** the "See OB.1 in Action" multimedia section from the homepage
2. **Create** "The Drafting Table" blog system under /workshop with 3 articles
3. **Host** 2 PDFs and wire download buttons on the Workshop page
4. **Create** individual article pages at /workshop/[slug]
5. **Add** lead capture modal for the gated Case Study PDF

---

## TASK 1: Remove "See OB.1 in Action" Multimedia Section

### What to remove
The homepage has a section titled "See OB.1 in Action" with:
- A heading: "See OB.1 **in Action**"
- Subtitle: "Real projects. Real results. Real executives who stopped debating and started building."
- Filter tabs: All, Video, Case Study, Testimonial
- A 3x2 grid of media cards (videos, case studies, testimonials)
- The entire section sits between the stats/CTA area and whatever comes after

### How to find it
```bash
grep -rn "in Action\|See OB.1\|Real projects\|stopped debating" --include="*.tsx" --include="*.ts" --include="*.jsx" .
grep -rn "Video.*Case Study.*Testimonial\|media.*grid\|portfolio" --include="*.tsx" --include="*.ts" --include="*.jsx" .
```

### What to do
- Comment out or remove the entire section component
- If it's a separate component file, remove the import and usage from the homepage
- If it's inline in the page, remove the JSX block
- Do NOT remove any other homepage sections
- Verify the homepage still flows properly without it (the sections above and below should connect cleanly)

---

## TASK 2: Create "The Drafting Table" Blog System

### Architecture
The blog lives under the existing Workshop page. The Workshop page currently has sections for "Blog & Insights", "Technical Docs", and "Multimedia." We're replacing this with an actual functional blog.

### Route structure
```
/workshop                    → Blog index page ("The Drafting Table")
/workshop/[slug]             → Individual article pages
```

### Blog index page (/workshop)

**Hero section:**
- Keep the existing Workshop hero but update the heading/branding
- Title: "The Drafting Table"
- Subtitle: "Frameworks, field notes, and honest thinking for leaders building something real with AI."
- If a hero background image exists at `public/images/drafting-table-hero.png`, use it behind the gradient (same pattern as previously described: `opacity-20` behind gradient overlay). If not, keep the current gradient.

**Blog listing section:**
- Display 3 blog article cards in a responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each card shows: featured image (or placeholder), title, date, category tag, excerpt (first ~150 chars of body), "Read More" link
- Cards link to /workshop/[slug]
- Category filter tabs: "All", "Frameworks", "Field Notes", "Honest Thinking"
- Style: OB.1 brand theme — navy background, parchment cards, orange category tags, charcoal text

### Blog article data

Create a data file at `lib/blog-posts.ts` or `data/blog-posts.ts`:

```typescript
export interface BlogPost {
  title: string
  slug: string
  date: string
  author: string
  category: string
  tags: string[]
  description: string
  ogImage: string
  content: string // MDX or raw markdown string
}

export const blogPosts: BlogPost[] = [
  {
    title: "OpenClaw: The Viral AI Agent Taking Over Your Terminal (And Why You Should Be Careful)",
    slug: "openclaw-viral-ai-agent-terminal-security",
    date: "2026-03-10",
    author: "Chris McCarthy",
    category: "Field Notes",
    tags: ["AI Agents", "OpenClaw", "Security", "Terminal AI", "RAK Framework"],
    description: "OpenClaw has exploded to 200K GitHub stars, but its execution-level access creates serious security risks. Here's what you need to know about the RAK framework before deploying autonomous agents.",
    ogImage: "/images/blog/openclaw-terminal-agent.png",
    content: `... (PASTE FULL MARKDOWN CONTENT FROM blog-01-openclaw-terminal-agent.md) ...`
  },
  {
    title: "Beyond Autocomplete: How Claude Code is Redefining the AI Coding Assistant",
    slug: "claude-code-redefining-ai-coding-assistant",
    date: "2026-03-08",
    author: "Chris McCarthy",
    category: "Frameworks",
    tags: ["Claude Code", "Anthropic", "AI Development", "Coding Tools", "Developer Productivity"],
    description: "Claude Code isn't another autocomplete plugin. It's an agentic coding tool that lives in your terminal, reasons through complex architectures, and respects your project's rules. Here's why it matters.",
    ogImage: "/images/blog/claude-code-terminal.png",
    content: `... (PASTE FULL MARKDOWN CONTENT FROM blog-02-claude-code-coding-assistant.md) ...`
  },
  {
    title: "From Runaway Agents to Smart Governance: Solving the $50K AI Bill Horror Story",
    slug: "runaway-agents-smart-governance-ai-cost-control",
    date: "2026-03-06",
    author: "Chris McCarthy",
    category: "Honest Thinking",
    tags: ["AI Governance", "Cost Control", "Rate Limiting", "Autonomous Agents", "Risk Management"],
    description: "A developer woke up to a $50,000 AWS bill from an autonomous agent stuck in a loop. Traditional rate limiting failed. Here's the Intelligent Rate Limiting framework that prevents it.",
    ogImage: "/images/blog/ai-cost-governance.png",
    content: `... (PASTE FULL MARKDOWN CONTENT FROM blog-03-runaway-agents-governance.md) ...`
  }
]
```

The 3 markdown files are provided in the `blog-content/` folder in the project root. Read them and paste the full content into the data file (escape backticks as needed).

---

## TASK 3: Create Individual Article Pages (/workshop/[slug])

### Create the dynamic route

Create `app/workshop/[slug]/page.tsx` (or wherever the app router lives):

```tsx
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-posts' // adjust path
import type { Metadata } from 'next'

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    // Article layout — see styling notes below
  )
}
```

### Article page layout

Each article page needs:

1. **Breadcrumb**: `The Drafting Table > [Category] > [Title]` with "The Drafting Table" linking back to /workshop
2. **Article header**:
   - Category tag (orange badge)
   - Title (large, white on navy or charcoal on parchment)
   - Author: "Chris McCarthy" + date formatted nicely
   - Estimated read time (calculate from word count: words / 200)
3. **Article body**:
   - Render the markdown content as HTML
   - Use a markdown renderer (react-markdown, @next/mdx, or similar)
   - Style with prose/typography classes (Tailwind @tailwindcss/typography plugin or custom styles)
   - Code blocks styled with the OB.1 mono font
   - H2 headings with orange left-border accent (3px)
   - Blockquotes styled as callout boxes (parchment background, orange left border)
4. **FAQ section**: Render the FAQ from the markdown as an accordion or simple Q&A list
5. **CTA footer**: 
   - "Take the 60-Second Snapshot" button (orange, links to /snapshot or app.auditynow.com)
   - "Book a Blueprint Session" button (secondary, links to /contact)
6. **Back to Workshop link**: At the bottom, link back to /workshop

### Markdown rendering

Install if needed:
```bash
npm install react-markdown remark-gfm
```

Or if using MDX, install @next/mdx. Keep it simple. react-markdown with remark-gfm is the fastest path.

---

## TASK 4: Host PDFs and Wire Download Buttons

### PDFs to host
Two PDF files need to be accessible:
1. `OB1_Operational_Blueprint_Framework.pdf` (42 pages, 3.2MB)
2. `OB1_AI_Vendor_Selection_Matrix.pdf` (68 pages, 5.8MB)

### Option A: Host locally in the Next.js project (simplest, do this)
```bash
mkdir -p public/docs
cp workshop-pdfs/OB1_Operational_Blueprint_Framework.pdf public/docs/
cp workshop-pdfs/OB1_AI_Vendor_Selection_Matrix.pdf public/docs/
```

The PDFs will be available at:
- `https://ob1ai.co/docs/OB1_Operational_Blueprint_Framework.pdf`
- `https://ob1ai.co/docs/OB1_AI_Vendor_Selection_Matrix.pdf`

### Wire up download buttons

Find the Workshop page's "Technical Docs" section where there are "Download PDF" buttons that currently do nothing:

```bash
grep -rn "Download PDF\|download.*pdf\|technical.*doc" --include="*.tsx" --include="*.ts" --include="*.jsx" .
```

Update the buttons to use standard anchor tags with download attribute:

```tsx
<a
  href="/docs/OB1_Operational_Blueprint_Framework.pdf"
  download
  className="..." // keep existing button styles
>
  Download PDF
</a>

<a
  href="/docs/OB1_AI_Vendor_Selection_Matrix.pdf"
  download
  className="..." // keep existing button styles
>
  Download PDF
</a>
```

### Note on LeadConnector hosting (FUTURE)
Chris is considering hosting these through LeadConnector/GHL instead. For now, host locally in `public/docs/`. The LC integration can replace the URLs later without changing the component structure. Just swap the `href` value when ready.

---

## TASK 5: Lead Capture Modal for Gated Case Study

### Context
The professional services Case Study (the "Scaling Agentic Workforces Safely" article) needs to be gated behind an email capture. When someone clicks "Request Access" on the case study card, a modal should appear.

### Implementation

Create a simple modal component:

```tsx
// components/LeadCaptureModal.tsx
'use client'
import { useState } from 'react'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  downloadUrl?: string
}

export function LeadCaptureModal({ isOpen, onClose, title, description, downloadUrl }: LeadCaptureModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    // For now, just log and show success
    // TODO: Wire to LeadConnector/GHL API or webhook endpoint
    console.log('Lead capture:', { name, email, asset: title })
    
    // Placeholder: POST to a webhook (update URL when LC is ready)
    // try {
    //   await fetch('https://your-ghl-webhook-url', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, source: 'case-study-download', asset: title })
    //   })
    // } catch (err) { console.error(err) }

    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-4 bg-[#F5F0E8] rounded-lg shadow-xl border border-[#1B3A5C]">
        <button onClick={onClose} className="absolute top-3 right-3 text-[#8B8178] hover:text-[#3D3832]">
          ✕
        </button>
        
        {!submitted ? (
          <div className="p-8">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#D97757]">
              Gated Resource
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#3D3832]">{title}</h3>
            <p className="mt-2 text-sm text-[#8B8178]">{description}</p>
            
            <div className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#3D3832]">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-[#1B3A5C]/30 rounded bg-white text-[#3D3832] focus:border-[#D97757] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3D3832]">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-3 py-2 border border-[#1B3A5C]/30 rounded bg-white text-[#3D3832] focus:border-[#D97757] focus:outline-none"
                  placeholder="you@company.com"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!email || !name}
                className="w-full py-3 bg-[#D97757] text-white font-bold rounded hover:bg-[#E09070] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Get Access
              </button>
            </div>
            <p className="mt-3 text-xs text-[#8B8178] text-center">
              No spam. Just the case study + one follow-up email.
            </p>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-[#3D3832]">You're in.</h3>
            <p className="mt-2 text-sm text-[#8B8178]">Check your inbox for the download link.</p>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="mt-4 inline-block py-2 px-6 bg-[#1B3A5C] text-white rounded hover:bg-[#2E5E8E] transition-colors"
              >
                Download Now
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
```

### Wire the modal to the case study card

On the Workshop page, find or create a card for the "Scaling Agentic Workforces" case study. The "Request Access" button should open this modal:

```tsx
'use client'
import { useState } from 'react'
import { LeadCaptureModal } from '@/components/LeadCaptureModal'

// In the component:
const [showCaseStudyModal, setShowCaseStudyModal] = useState(false)

// Button:
<button onClick={() => setShowCaseStudyModal(true)} className="...">
  Request Access
</button>

// Modal (place at end of component JSX):
<LeadCaptureModal
  isOpen={showCaseStudyModal}
  onClose={() => setShowCaseStudyModal(false)}
  title="Case Study: Scaling Agentic Workforces Safely"
  description="How midmarket professional services firms use responsible AI frameworks to transform engineers into architects while maintaining security and compliance."
/>
```

---

## RSS FEED (Bonus, do if time allows)

Create `app/workshop/rss.xml/route.ts`:

```typescript
import { blogPosts } from '@/lib/blog-posts'

export async function GET() {
  const baseUrl = 'https://ob1ai.co'
  
  const items = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/workshop/${post.slug}</link>
        <description><![CDATA[${post.description}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <category>${post.category}</category>
        <guid>${baseUrl}/workshop/${post.slug}</guid>
      </item>
    `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/1999/xhtml">
  <channel>
    <title>The Drafting Table | OB.1 AI Solutions</title>
    <link>${baseUrl}/workshop</link>
    <description>Frameworks, field notes, and honest thinking for leaders building something real with AI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/workshop/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
```

RSS will be available at `https://ob1ai.co/workshop/rss.xml` for LeadConnector/GHL syndication.

---

## FILE INVENTORY: What Goes Where

```
public/
  docs/
    OB1_Operational_Blueprint_Framework.pdf
    OB1_AI_Vendor_Selection_Matrix.pdf
  images/
    blog/
      openclaw-terminal-agent.png      (placeholder or generated)
      claude-code-terminal.png          (placeholder or generated)
      ai-cost-governance.png            (placeholder or generated)
    drafting-table-hero.png             (if generated from Nano Banana)

app/
  workshop/
    page.tsx                            (updated blog index)
    [slug]/
      page.tsx                          (article page template)
    rss.xml/
      route.ts                          (RSS feed)

lib/ (or data/)
  blog-posts.ts                         (blog post data with full content)

components/
  LeadCaptureModal.tsx                  (email capture modal)
```

---

## BLOG ARTICLE PLACEHOLDER IMAGES

If the Nano Banana hero images for individual blog posts haven't been generated yet, create simple placeholder divs with the OB.1 brand gradient:

```tsx
<div className="w-full aspect-[16/9] bg-gradient-to-br from-[#0D1B2A] via-[#1B3A5C] to-[#2E5E8E] rounded-lg flex items-center justify-center">
  <span className="text-[#D97757] font-bold text-sm tracking-[0.15em] uppercase">
    {post.category}
  </span>
</div>
```

These can be swapped for real images later.

---

## DEPLOYMENT

```bash
npm run build
git add -A
git commit -m "feat: add Drafting Table blog, 3 articles, PDF hosting, lead capture modal, remove multimedia section"
git push origin main
```

## VERIFICATION CHECKLIST
- [ ] Homepage: "See OB.1 in Action" multimedia section is GONE
- [ ] /workshop loads with "The Drafting Table" branding and 3 blog cards
- [ ] /workshop/openclaw-viral-ai-agent-terminal-security renders full article
- [ ] /workshop/claude-code-redefining-ai-coding-assistant renders full article  
- [ ] /workshop/runaway-agents-smart-governance-ai-cost-control renders full article
- [ ] Each article has breadcrumb, metadata, rendered markdown, CTA footer
- [ ] /docs/OB1_Operational_Blueprint_Framework.pdf downloads correctly
- [ ] /docs/OB1_AI_Vendor_Selection_Matrix.pdf downloads correctly
- [ ] Download PDF buttons on Workshop page actually trigger downloads
- [ ] Case study "Request Access" button opens lead capture modal
- [ ] Modal collects name + email and shows success state
- [ ] /workshop/rss.xml returns valid RSS XML
- [ ] All pages have proper OG metadata for social sharing
- [ ] Mobile responsive across all new pages
