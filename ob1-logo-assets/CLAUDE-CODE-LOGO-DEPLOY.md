# Claude Code Task: Apply OB.1 Logo Globally to ob1-blueprint-website-v2

## Context
This is a Next.js project deployed on Vercel at ob1ai.co. We need to apply the OB.1 logo across ALL touchpoints: favicon, OG image, social cards, site header, and metadata. The logo assets have already been generated and are in the `ob1-logo-assets/` folder (copy them into the project first).

## Pre-generated Assets (in ob1-logo-assets/)
- `favicon.ico` (multi-size ICO: 16, 32, 48)
- `icon-16x16.png`, `icon-32x32.png`, `icon-192x192.png`, `icon-512x512.png`
- `apple-touch-icon.png` (180x180)
- `og-image.png` (1200x630, navy background with centered logo)
- `twitter-card.png` (1200x600)
- `social-square.png` (1080x1080)
- `original-logo.png` (744x740 source file)

## Step 1: Copy Assets Into the Project

```bash
# Navigate to the project root
cd ~/path/to/ob1-blueprint-website-v2

# Copy all assets to the public directory (Next.js serves these statically)
cp ob1-logo-assets/favicon.ico public/favicon.ico
cp ob1-logo-assets/apple-touch-icon.png public/apple-touch-icon.png
cp ob1-logo-assets/icon-16x16.png public/icon-16x16.png
cp ob1-logo-assets/icon-32x32.png public/icon-32x32.png
cp ob1-logo-assets/icon-192x192.png public/icon-192x192.png
cp ob1-logo-assets/icon-512x512.png public/icon-512x512.png
cp ob1-logo-assets/og-image.png public/og-image.png
cp ob1-logo-assets/twitter-card.png public/twitter-card.png
cp ob1-logo-assets/social-square.png public/social-square.png
cp ob1-logo-assets/original-logo.png public/logo.png
```

## Step 2: Update App Metadata (Next.js App Router)

Find the root `layout.tsx` (likely `app/layout.tsx` or `src/app/layout.tsx`). Update or add the metadata export:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'OB.1 AI Solutions | Operational Blueprint for AI Implementation',
    template: '%s | OB.1 AI Solutions',
  },
  description: 'Audit-first AI consulting. We turn AI ambitions into executable operational blueprints with measurable results. Rules before tools.',
  metadataBase: new URL('https://ob1ai.co'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ob1ai.co',
    siteName: 'OB.1 AI Solutions',
    title: 'OB.1 AI Solutions | Operational Blueprint for AI Implementation',
    description: 'Audit-first AI consulting. We turn AI ambitions into executable operational blueprints with measurable results.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OB.1 AI Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OB.1 AI Solutions | Operational Blueprint for AI Implementation',
    description: 'Audit-first AI consulting. We turn AI ambitions into executable operational blueprints with measurable results.',
    images: ['/twitter-card.png'],
  },
  manifest: '/site.webmanifest',
}
```

## Step 3: Create Web App Manifest

Create `public/site.webmanifest`:

```json
{
  "name": "OB.1 AI Solutions",
  "short_name": "OB.1 AI",
  "description": "Operational Blueprint for AI Implementation",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0D1B2A",
  "theme_color": "#0D1B2A",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Step 4: Update Any Existing Logo References in Components

Search the entire codebase for any hardcoded logo references and replace them:

```bash
# Find all logo/image references
grep -rn "logo" --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.css" .
grep -rn "favicon" --include="*.tsx" --include="*.ts" --include="*.html" .
grep -rn "og-image\|og:image\|openGraph" --include="*.tsx" --include="*.ts" .
```

For any header/navbar component that renders a logo, update the `<Image>` or `<img>` tag:

```tsx
import Image from 'next/image'

// In your header/navbar component:
<Image
  src="/logo.png"
  alt="OB.1 AI Solutions"
  width={120}
  height={119}
  priority
  className="h-10 w-auto"  // Adjust as needed
/>
```

## Step 5: Remove Old/Conflicting Assets

```bash
# Check for and remove any old favicon or logo files that might conflict
# Common Next.js locations:
ls -la app/favicon.ico 2>/dev/null
ls -la app/icon.* 2>/dev/null
ls -la app/apple-icon.* 2>/dev/null
ls -la app/opengraph-image.* 2>/dev/null

# If any of these exist in the app/ directory (file-based metadata),
# they will OVERRIDE the metadata export. Remove them:
rm -f app/favicon.ico app/icon.png app/icon.svg app/apple-icon.png app/opengraph-image.png app/opengraph-image.jpg
# Also check src/app/ if using src directory
rm -f src/app/favicon.ico src/app/icon.png src/app/icon.svg src/app/apple-icon.png src/app/opengraph-image.png
```

**IMPORTANT:** Next.js file-based metadata (files named `favicon.ico`, `icon.png`, `opengraph-image.png` in the `app/` directory) takes precedence over the metadata export. If any of these files exist in `app/`, remove them so the `public/` versions are used via the metadata config.

## Step 6: Verify and Deploy

```bash
# Build locally to check for errors
npm run build

# If clean, commit and push
git add -A
git commit -m "feat: apply OB.1 logo globally (favicon, OG, social, manifest)"
git push origin main
```

Vercel will auto-deploy from the push.

## Verification Checklist After Deploy
- [ ] Favicon shows in browser tab (check multiple browsers)
- [ ] OG image shows when sharing ob1ai.co on LinkedIn/Twitter/Slack
- [ ] Apple touch icon shows when adding to iOS home screen
- [ ] Logo renders in site header/navbar
- [ ] `https://ob1ai.co/site.webmanifest` returns valid JSON
- [ ] `https://ob1ai.co/og-image.png` loads correctly
- [ ] `https://ob1ai.co/favicon.ico` loads correctly

## OG Image Testing
After deploy, validate with these tools:
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter: https://cards-dev.twitter.com/validator
- Facebook: https://developers.facebook.com/tools/debug/
- General: https://www.opengraph.xyz/
