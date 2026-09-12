# Duy Lam — portfolio

One-page personal site for selected product work. Static Next.js App Router. No database, auth, CMS, analytics, or backend.

Live source of product evidence: [duylam-builds](https://github.com/Duylamneuuu/duylam-builds). Screenshots in `public/work/` are copied from that public repo.

## Local

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm start
```

## Deploy on Vercel Hobby

`main` is deploy-ready. Preferred project name: `duylam-portfolio`. Stay on **Hobby** — do not upgrade.

This cloud agent could not finish GitHub → Vercel linking because the Vercel account needs a GitHub Login Connection first.

1. Open [Vercel](https://vercel.com/login) and sign in with GitHub (Hobby).
2. If asked, add a GitHub Login Connection: [login methods](https://vercel.com/docs/accounts/create-an-account#login-methods-and-connections).
3. Go to [vercel.com/new](https://vercel.com/new) and import `Duylamneuuu/duylam-portfolio`.
4. Project name: `duylam-portfolio`. Framework: Next.js. Root: `./`. No env vars.
5. Deploy. Production URL should be `https://duylam-portfolio.vercel.app` (or the unique `.vercel.app` Vercel assigns).
6. Project → Settings → Deployment Protection: turn off Vercel Authentication for Production so the site is public.

CLI alternative from a logged-in Hobby account:

```bash
npx vercel login
npx vercel --yes --prod --name duylam-portfolio
```

The GitHub repo is already on `main` and ready to import. No paid plan is required.

## Claims

Copy stays limited to verified student / prototype status. No launch, user, revenue, leadership, employment, award, or traction claims.
