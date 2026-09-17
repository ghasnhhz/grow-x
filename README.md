# GrowLeague

GrowLeague is a paid growth league for small X creators. Accounts with 10–5,000 followers are grouped by size and ranked by measured follower growth.

**Product rule:** money buys features; growth buys rank.

## Stack
- Next.js 16 App Router + TypeScript
- Neon Postgres + Drizzle ORM
- Custom X OAuth 2.0 PKCE
- Vercel + Vercel Cron
- Dodo Payments in the final phase

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```
The public UI uses demo data until `DATABASE_URL` is configured.

## Database
```bash
npm run db:generate
npm run db:migrate
```

## X setup
Configure the callback URL as `http://localhost:3000/api/auth/x/callback`, then fill `X_CLIENT_ID`, `X_CLIENT_SECRET`, `X_BEARER_TOKEN`, `X_REDIRECT_URI`, and `SESSION_SECRET`.

The user OAuth access token is used only during account verification and is not stored. Daily follower snapshots use the app bearer token.

## Checks
```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy
Vercel only. `vercel.json` schedules one daily snapshot cron. Set `CRON_SECRET` in Vercel.

## Pricing
- Member — $3/month
- Pro — $10/month
- Max — $19/month
- 7-day trial before paid tracking

## Payments
Dodo Payments is intentionally the final implementation phase. Environment variable names are reserved in `.env.example`.
