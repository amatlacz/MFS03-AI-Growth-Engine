# CLAUDE.md – AI Growth Engine 2.0

## Context

This is a sample project used in the **MBA for Startups** program. Students are learning how to build and ship web products using AI tools — with no prior programming experience required. You are their AI pair programmer inside Cursor.

The goal is to help students move fast: understand the codebase, make changes confidently, and deploy working software to the internet.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## How to Run the Project Locally

```bash
npm install      # install dependencies (run once)
npm run dev      # start the dev server at http://localhost:3000
```

---

## How to Deploy to Vercel

Students deploy directly from GitHub. The flow is:

1. Push changes to the `main` branch on GitHub
2. Vercel detects the push and deploys automatically
3. The live URL is visible in the Vercel dashboard

For the first deploy, the project must be imported into Vercel:
- Go to [vercel.com](https://vercel.com) → **Add New Project**
- Select the GitHub repository
- Leave all settings at their defaults and click **Deploy**

After that, every push to `main` triggers a new deployment automatically.

---

## Working with Students

Students are MBA participants — they understand business and product thinking but are not experienced developers. When helping them:

- **Explain what you are doing and why**, not just what to type
- **Prefer simple, readable code** over clever or optimized solutions
- **One change at a time** — avoid large refactors that are hard to follow
- **When something breaks**, explain the error in plain language before suggesting a fix
- If a student asks "how do I add X", treat it as a product request and implement it, not just describe how

---

## Project Conventions

- Pages live in `app/` (Next.js App Router)
- Components live in `components/`
- Keep components small and single-purpose
- Use Tailwind classes for all styling — avoid inline styles and separate CSS files
- No backend or database unless explicitly asked for

---

## Common Tasks

**Add a new page:**
Create a new folder under `app/` with a `page.tsx` file inside it.

**Add a component:**
Create a `.tsx` file in `components/` and import it where needed.

**Change text or content:**
Find the relevant `page.tsx` or component and edit the JSX directly.

**Change colors or layout:**
Edit the Tailwind classes on the relevant elements.
