# plan.md — OB.1 Website v2

## Task 0: Clone & Orient ✅
- [x] Clone repo
- [x] pnpm install
- [x] Pull v0 shadcn components
- [x] Organize components into services/ and workshop/ subdirs
- [x] Create 3 route pages (services, workshop, foundation redirect)
- [x] pnpm build passes
- [x] Map project structure
- [x] Create 5-file workflow
- [x] Chris approval to proceed

## Task 1: Deploy Services + Workshop (CURRENT)
- [x] Verify pnpm build passes with no errors
- [x] Verify navbar says "The Workshop" and links to /services, /workshop
- [ ] Verify /foundation redirects to /workshop on preview
- [ ] Deploy to Vercel PREVIEW only
- [ ] Chris approves preview → production push

## Task 2: Build About Page
- Create app/about/page.tsx
- Sections: Hero, Founder Story, Methodology, Team, NE Ohio Roots, CTA
- Use chris-mccarthy-profile.jpg, styled placeholders for Chloe/Jeremy
- Update navbar.tsx: About href "#about" → "/about"
- Update footer.tsx: About href "#about" → "/about"
- Deploy to Vercel PREVIEW only

## Task 3: Digital Asset Spec
- Audit all images in /public/
- Create digital-assets-spec.md
- Flag oversized assets
- Include generation prompts for replacements
