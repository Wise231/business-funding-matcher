# FundMatch SA — Business Funding Matcher

A React + JavaScript MVP that helps South African businesses discover potentially relevant funding pathways based on business category, stage, province and optional ownership context.

## Features
- Business profile matcher with indicative relevance scoring.
- Searchable funding directory and official provider links.
- REST API built with Express: `GET /api/health`, `GET /api/opportunities`, `POST /api/match`.
- Local catalogue fallback if the API is unavailable.
- Responsive layout and dark/light theme.

## Important accuracy note
This is a funding discovery prototype, not a lender, funding application portal, eligibility decision engine or guarantee of funding. Results are indicative leads only. Funding products, eligibility criteria, application windows and budgets change; users must confirm current details directly with each provider. The seed catalogue deliberately marks every listing **Check provider** rather than claiming a programme is open. No public API shared by all the listed funders has been assumed: the app includes its own REST API and a curated starter dataset.

The prototype does not collect ID numbers, bank details, tax documents or sensitive financial records. The API has no authentication or database and is for demo/MVP use only.

## Run locally
Install Node.js LTS from https://nodejs.org/ then run:

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173  
API: http://localhost:4000  
Health: http://localhost:4000/api/health  
Directory JSON: http://localhost:4000/api/opportunities

## API examples

```bash
curl "http://localhost:4000/api/opportunities?sector=Agriculture&stage=Startup"

curl -X POST http://localhost:4000/api/match \\
  -H "Content-Type: application/json" \\
  -d '{"sector":"Technology","stage":"Startup","province":"Gauteng","youthOwned":true,"blackOwned":false}'
```

Match scores are simple relevance heuristics, not approval probabilities or proof of eligibility. Improve with verified programme-level criteria before production use.

## Environment
Copy `.env.example` to `.env`. For a separately hosted API set `VITE_API_BASE_URL=https://your-api-domain.example`. Leave blank locally; Vite proxies `/api` to port 4000.

## Push to GitHub
You can push source code directly; you do not need to compile locally first.

```bash
git init
git add .
git commit -m "Initial commit: FundMatch SA business funding matcher"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/business-funding-matcher.git
git push -u origin main
```
If Git is already initialised or a remote exists, inspect `git status` and `git remote -v` before repeating commands.

## Deployment
GitHub stores source code but does not run the Express API. For a live full-stack deployment, host the Node API on a Node-capable service (such as Render or Railway) and deploy the Vite frontend to a static host (such as Vercel or Netlify). Set `VITE_API_BASE_URL` to the deployed API URL. GitHub Pages can host only the static frontend; it cannot run Express. Without a separately hosted API, the frontend's local fallback catalogue still works.

## Starter catalogue sources
- SEDFA: https://www.sedfa.org.za/
- NYDA: https://www.nyda.gov.za/
- NEF: https://www.nefcorp.co.za/
- IDC: https://www.idc.co.za/
- TIA: https://www.tia.org.za/
- Land Bank: https://landbank.co.za/
- the dtic: https://www.thedtic.gov.za/
- South African Government small-business support overview: https://www.gov.za/about-government/small-business-development

The catalogue is a curated starter dataset, not an official live feed. Establish a reliable update and human verification process before using it commercially.

## Production roadmap
1. Add a database and authenticated admin dashboard to manage opportunities.
2. Store programme-level rules, source URLs, last-verified dates and expiry dates.
3. Add scheduled checks plus human review for changing funding calls.
4. Design POPIA-compliant privacy, security and retention controls before user accounts or personal data.
5. Add application tracking without implying the platform submits applications to funders.

FundMatch SA is an independent discovery prototype and is not affiliated with or endorsed by the listed organisations. It does not provide financial, legal or tax advice.
