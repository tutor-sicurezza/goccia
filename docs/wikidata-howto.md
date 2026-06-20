# Wikidata — creazione Q-item per GoccIA

## Perché Wikidata (e non Wikipedia)

- **Wikipedia** richiede notabilità: 2-3 fonti indipendenti autorevoli che parlino del progetto. **Non l'hai ancora**.
- **Wikidata** è il database strutturato (Q-item) che alimenta:
  - Il **Google Knowledge Graph** (pannello laterale "GoccIA" su Google)
  - DuckDuckGo Instant Answers
  - Apple Spotlight / Siri
  - Amazon Alexa
  - Tutti gli assistenti LLM (ChatGPT, Perplexity, Claude usano dump Wikidata)
- Wikidata è **molto più permissivo**: basta che l'entità esista e abbia almeno una fonte verificabile (qui: il sito + repo GitHub MIT).

## 🚀 One-click (path veloce)

Apri questo link → fai login (in alto a destra) → Run:

https://quickstatements.toolforge.org/#/v1=CREATE%7C%7CLAST%7CLit%7C%22GoccIA%22%7C%7CLAST%7CLen%7C%22GoccIA%22%7C%7CLAST%7CDit%7C%22strumento%20web%20gratuito%20e%20open%20source%20che%20assegna%20un%20punteggio%201-99%20all%20acqua%20del%20rubinetto%20a%20partire%20dai%20valori%20del%20referto%22%7C%7CLAST%7CDen%7C%22free%20open-source%20Italian%20web%20tool%20that%20assigns%20a%201-99%20score%20to%20tap-water%20based%20on%20lab%20report%20values%22%7C%7CLAST%7CAit%7C%22Goccia.org%22%7C%7CLAST%7CAen%7C%22Goccia.org%22%7C%7CLAST%7CP31%7CQ193424%7C%7CLAST%7CP31%7CQ341%7C%7CLAST%7CP275%7CQ334661%7C%7CLAST%7CP856%7C%22https%3A%2F%2Fgoccia.org%22%7C%7CLAST%7CP1324%7C%22https%3A%2F%2Fgithub.com%2Ftutor-sicurezza%2Fgoccia%22%7C%7CLAST%7CP407%7CQ652%7C%7CLAST%7CP277%7CQ978185%7C%7CLAST%7CP400%7CQ35476%7C%7CLAST%7CP571%7C%2B2026-06-20T00%3A00%3A00Z%2F11%7C%7CLAST%7CP17%7CQ38%7C%7CLAST%7CP306%7CQ466

## Come pubblicare (path manuale, equivalente)

1. Apri: **https://quickstatements.toolforge.org/#/batch**
2. Login con il pulsante "Log in" in alto (usa account Wikipedia/Wikimedia — gratuito; se non ce l'hai, crealo qui: https://it.wikipedia.org/wiki/Speciale:CreaUtenza, vuole solo username + password)
3. Incolla questo blocco dentro la textarea principale:

```
CREATE
LAST	Lit	"GoccIA"
LAST	Len	"GoccIA"
LAST	Dit	"strumento web gratuito e open source che assegna un punteggio 1-99 all'acqua del rubinetto a partire dai valori del referto"
LAST	Den	"free open-source Italian web tool that assigns a 1-99 score to tap-water based on lab report values"
LAST	Ait	"Goccia.org"
LAST	Aen	"Goccia.org"
LAST	P31	Q193424
LAST	P31	Q341
LAST	P275	Q334661
LAST	P856	"https://goccia.org"
LAST	P1324	"https://github.com/tutor-sicurezza/goccia"
LAST	P407	Q652
LAST	P277	Q978185
LAST	P400	Q35476
LAST	P571	+2026-06-20T00:00:00Z/11
LAST	P17	Q38
LAST	P306	Q466
```

4. Click **"Import V1 commands"** in basso → poi click **"Run!"** in alto
5. QuickStatements crea il Q-item ed esegue tutte le 17 dichiarazioni. Riceverai il QID (es. `Q123456789`). Salvalo.

## Cosa fa il batch (riga per riga)

| Riga | Significato |
|---|---|
| `CREATE` | crea nuovo item |
| `Lit "GoccIA"` | etichetta italiana |
| `Len "GoccIA"` | etichetta inglese |
| `Dit "..."` | descrizione italiana |
| `Den "..."` | descrizione inglese |
| `Ait "Goccia.org"` | alias italiano |
| `P31 Q193424` | instance of: **web application** |
| `P31 Q341` | instance of: **software libero** (FOSS) |
| `P275 Q334661` | licenza: **MIT License** |
| `P856 https://goccia.org` | sito ufficiale |
| `P1324 https://github.com/...` | source code repository |
| `P407 Q652` | lingua dell'opera: **italiano** |
| `P277 Q978185` | scritto in: **TypeScript** |
| `P400 Q35476` | piattaforma: **World Wide Web** |
| `P571 +2026-06-20...` | data di creazione |
| `P17 Q38` | paese: **Italia** |
| `P306 Q466` | sistema operativo: **multipiattaforma (web)** |

## Dopo la creazione

Manda il QID a Google Search Console per accelerare il match con il Knowledge Graph (non obbligatorio — Google lo trova da solo entro 1-4 settimane).

Quando carichi il logo su Commons (vedi `wikimedia-commons-upload.md`), torna sul Q-item e aggiungi:
- **P154** (logo image) → `Goccia.org logo.svg`

Quando avrai una pagina Wikipedia (più avanti, dopo press indipendente), il link tra Wikipedia e Wikidata sarà automatico tramite sitelink.

## Troubleshooting

- **"Property P-XXX does not exist"** → il QID di una property può cambiare? No, sono stabili. Se errore: verifica TAB (non spazi) tra colonne.
- **"Item already exists"** → qualcuno l'ha già creato; cerca "GoccIA" su Wikidata e modifica il Q-item esistente.
- **"Not logged in"** → ricarica e fai login dall'icona in alto a destra.
