# GoccIA — `goccia.org`

Tool gratuito che assegna un punteggio **1–99** all'acqua del rubinetto a partire dai valori del referto di analisi. Nessun login, anonimo, motore di scoring **deterministico** (stesso input → stesso punteggio).

## Setup

- Node ≥ 20, npm
- `cp .env.example .env.local` e compilare:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `GOCCIA_IP_SALT` (stringa random lunga, per hashing IP anti-abuso)
  - `NEXT_PUBLIC_SITE_URL=https://goccia.org`
- `npm install`
- `npm run dev`

## Comandi

- `npm run dev` — sviluppo
- `npm run build` — build produzione
- `npm run type-check` — TypeScript strict
- `npm test` — vitest sul motore di scoring

## Supabase

- Applicare la migration `supabase/migrations/0001_goccia_submissions.sql` (tabella `goccia_submissions` + view `goccia_benchmark`).

## Deploy su Vercel

- Nuovo progetto Vercel collegato a questo repo
- Aggiungere le env elencate sopra (Production + Preview)
- Dominio: `goccia.org` (apex) + `www.goccia.org` con redirect 308 sull'apex
- DNS: record A/CNAME verso Vercel, SSL automatico

## Sincronizzazione con 123Acqua

Il motore in `packages/aquascore/` è una copia di quello presente nel repo principale di **123Acqua** (`src/lib/aquascore`). Se cambi pesi, soglie o aggiungi parametri da una parte, riporta le stesse modifiche anche dall'altra — oppure pubblica il package su un registry privato condiviso ed eliminala da entrambi i repo.

## Struttura

```
packages/aquascore/   motore puro 1–99 (zero deps)
src/app/              Next.js App Router
src/lib/supabase/     client server + browser
supabase/migrations/  schema
```

## Vincoli normativi

- Non scrivere "accreditato", "Accredia" o "ISO 17025" riferiti al laboratorio. Wording ammesso: **"laboratorio qualificato"**, **"metodi validati conformi a norme tecniche"**, **"processi tecnici documentati"**.
- Solo italiano nell'UI.
- Punteggio sempre **1–99** (mai 0–100): nessuna acqua è perfetta, nessuna è ingestibile per definizione.
- Strumento informativo: **non sostituisce il rapporto di prova** né costituisce parere medico o legale.
