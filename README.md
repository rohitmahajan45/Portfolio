# Rohit Mahajan — Portfolio

This repository is a production-ready Next.js portfolio template built for a Data Analyst / aspiring Data Scientist. It includes React Three Fiber 3D elements, Tailwind CSS, and Framer Motion transitions.

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build for production and deploy to Vercel:

```bash
npm run build
npm run start
```

Environment variables (for contact email):

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

Deploy to Vercel: Connect the repository and set environment variables in the Vercel dashboard. Vercel will run `npm run build` automatically.

## Deployment — Make the site live

Two common options to publish the site:

1) Push to GitHub and connect the repository to Vercel (recommended)

- Initialize git, commit, and push to a new GitHub repo:

```bash
git init
git add .
git commit -m "Initial portfolio site"
# create a GitHub repo (replace URL)
git remote add origin https://github.com/<your-username>/rohit-portfolio.git
git push -u origin main
```

- In Vercel dashboard: Import Project → choose the repo → Set environment variables (`SMTP_*`, `CONTACT_EMAIL`) → Deploy.

2) Deploy directly from your machine using the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notes:
- Use `.env.local` (not committed) for local testing; see `.env.example`.
- Add `resume.pdf` to the `public/` folder so `/resume.pdf` works.
- After deploy, set env vars in Vercel Dashboard under Project Settings → Environment Variables.

