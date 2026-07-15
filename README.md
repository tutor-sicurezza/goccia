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

## Analisi reali per comune (pipeline di scraping)

Obiettivo: pubblicare, comune per comune, i valori reali delle analisi dell'acqua
estratti dai referti pubblici dei gestori, con tabella + punteggio 1–99 e link alla
fonte. Publishing **data-gated**: una pagina comune con i dati viene generata solo
quando esiste un referto reale (`src/data/comuni-analyses.json`), così non si creano
pagine vuote/duplicate (niente doorway pages penalizzate).

Flusso:

1. **Estrazione** — `scripts/scrape_comune.py` trasforma un referto (PDF/CSV/testo)
   in un record strutturato e lo scrive in `src/data/comuni-analyses.json`:

   ```
   python3 scripts/scrape_comune.py \
     --slug latina --comune "Latina" --provincia LT --regione Lazio \
     --gestore "Acqualatina S.p.A." --data 2026-03-12 \
     --source-url "https://.../referto.pdf" \
     --source-label "Acqualatina — referto Q1 2026" \
     --pdf referto.pdf        # oppure --csv referto.csv / --text referto.txt
   ```

   L'estrazione PDF usa `pdfplumber` se installato (`pip install pdfplumber`);
   in alternativa accetta un CSV `parametro;valore;unità` o testo già estratto,
   così la pipeline gira anche senza dipendenze pesanti. I parametri non
   riconosciuti vengono **scartati, non indovinati**. Test del core (mappatura
   nomi + parsing valori): `python3 scripts/test_scrape.py`.

2. **Scoring** — `src/lib/comune-analyses.ts` ricalcola il punteggio con lo stesso
   motore `aquascore` dello strumento pubblico (deterministico) ed espone le
   aggregazioni "comuni più a rischio" e "rischio per inquinante".

3. **Pubblicazione** — la pagina `/acqua-di-{comune}` mostra la tabella + punteggio
   quando esiste un report; `/comuni-a-rischio` aggrega la classifica e le
   contaminazioni documentate; `sitemap.ts` include automaticamente i comuni con dati.

Regola inderogabile: **nessun valore inventato**. Ogni record cita la fonte pubblica
(`sourcePdfUrl`) e la data di campionamento.

## Struttura

```
packages/aquascore/   motore puro 1–99 (zero deps)
src/app/              Next.js App Router
src/lib/supabase/     client server + browser
supabase/migrations/  schema
```

### Route con URL riscritti

Le guide città vivono in `src/app/citta/[citta]/` ma l'URL pubblico è
`/acqua-di-{slug}` (rewrite in `next.config.mjs`; `/citta/{slug}` fa redirect
308 all'URL canonico). In Next un segmento è dinamico solo se è interamente
`[param]`: una cartella `acqua-di-[citta]` verrebbe trattata come percorso
letterale.

### Sezioni dati

- `src/lib/official-sources.ts` — dove ogni gestore pubblica le analisi
  ufficiali (link individuati su fonti pubbliche, campo `confidence`).
  Alimenta `/analisi-ufficiali` e il box nelle pagine città.
- `src/lib/water-history.ts` — storico personale delle analisi in
  `localStorage` (nessun dato lascia il browser). Alimenta `/storico` e il
  salvataggio automatico dalla pagina risultato.

## Vincoli normativi

- Non scrivere "accreditato", "Accredia" o "ISO 17025" riferiti al laboratorio. Wording ammesso: **"laboratorio qualificato"**, **"metodi validati conformi a norme tecniche"**, **"processi tecnici documentati"**.
- Solo italiano nell'UI.
- Punteggio sempre **1–99** (mai 0–100): nessuna acqua è perfetta, nessuna è ingestibile per definizione.
- Strumento informativo: **non sostituisce il rapporto di prova** né costituisce parere medico o legale.
