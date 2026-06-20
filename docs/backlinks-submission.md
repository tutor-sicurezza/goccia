# Backlinks — piano di submission per goccia.org

> Lista pragmatica: solo siti **alta autorità** o **rilevanti per nicchia** (acqua, ambiente, civic tech, open source). Nessun directory di bassa qualità (sarebbero ignorate o peggio).

Compila i form con questi valori fissi:

- **Nome**: GoccIA
- **URL**: https://goccia.org
- **Descrizione breve (160 char)**: GoccIA assegna un punteggio 1–99 all'acqua del rubinetto a partire dai valori del referto. Gratuito, anonimo, in italiano. Basato su D.Lgs. 18/2023.
- **Descrizione lunga**: Strumento web gratuito che, dato l'inserimento dei valori di un'analisi dell'acqua potabile (anche da laboratori diversi), restituisce un punteggio sintetico 1–99 con verdetto, subscore Salute/Estetica/Impianti e spiegazioni dei parametri oltre soglia. Motore deterministico open-source basato sui limiti del D.Lgs. 18/2023 e sui range ideali WHO/EFSA. Nessun login, nessun cookie di profilazione. Servizio di 123Acqua.
- **Categoria**: Utility / Health / Civic tech / Open data
- **Tag**: acqua potabile, qualità acqua, D.Lgs 18/2023, calcolatore, sicurezza alimentare, open source
- **Lingua**: Italiano
- **Email**: privacy@goccia.org (o la tua)
- **Repo open-source**: https://github.com/tutor-sicurezza/goccia

---

## A) Alta autorità — fai prima questi (DA 70+)

| Sito | Submission URL | Note |
|---|---|---|
| **Google Search Console** | https://search.google.com/search-console | Aggiungi proprietà → verifica con meta tag (vedi sotto §Verification) → invia sitemap `https://goccia.org/sitemap.xml` |
| **Bing Webmaster Tools** | https://www.bing.com/webmasters | Importa da Search Console (1 click). Invia sitemap. |
| **Product Hunt** | https://www.producthunt.com/posts/new | Lancio "GoccIA — water quality score for Italian tap water". Tag: #italian #open-source #civic-tech |
| **Hacker News (Show HN)** | https://news.ycombinator.com/submit | Titolo: "Show HN: GoccIA – Free 1–99 score for Italian tap-water analyses". Solo se sei iscritto da >1 anno o l'account ha karma. |
| **GitHub topics** | già fatto automaticamente | 12 topic settati sul repo |
| **Awesome lists** | PR su `awesome-italia`, `awesome-civictech`, `awesome-water` | https://github.com/topics/awesome — cerca quelle pertinenti, apri PR |
| **Open Source Italy / Italia Open Source** | https://www.italiaopensource.it/ | community map IT open source |
| **Developers Italia (catalogo)** | https://developers.italia.it/it/software/ | `publiccode.yml` nel repo + segnalazione |

## B) Civic tech / open data IT (DA 40–70)

| Sito | URL | Note |
|---|---|---|
| **OnData** | https://ondata.it/ | Associazione open data Italia, hanno una lista risorse |
| **Confronta Bollette / consumer-tech** | https://www.altroconsumo.it/ | Hanno sezione "strumenti utili" — propor inclusione editorialmente |
| **Italian Civic Hackers** | https://civichackers.it/ | comunità, segnala in newsletter |
| **Schoolofdata** | https://schoolofdata.org/ | tool civic-tech open |

## C) Acqua / ambiente IT (DA 30–60)

| Sito | URL | Note |
|---|---|---|
| **Acquambiente.org** | https://acquambiente.org/ | rivista divulgativa |
| **Acqua.gov.it** | https://acqua.gov.it/ | ufficiale, hanno sezione strumenti — richiesta editorial |
| **Watergeneration** | https://www.watergeneration.it/ | sito divulgativo |
| **ISPRA** | https://www.isprambiente.gov.it/ | per credibilità: segnalarlo in iniziative open data sulle acque |

## D) Submission programmatica (le faccio io quando dici "vai")

Questi accettano POST API o RSS:

| Endpoint | Cosa | Quando |
|---|---|---|
| `POST https://api.indexnow.org/IndexNow` | Bing/Yandex/Naver/Seznam | ✅ **già fatto** — richiamare ad ogni deploy con nuove URL |
| `POST https://www.google.com/ping?sitemap=...` | Google sitemap ping | richiamare ad ogni release |
| `POST https://www.bing.com/ping?sitemap=...` | Bing sitemap ping | idem |

## Verification per Google Search Console / Bing

Quando crei la property:
- **Metodo consigliato**: meta tag HTML
- Copia il codice di verifica e settalo come env var su Vercel:
  ```
  vercel env add GOOGLE_SITE_VERIFICATION production
  # incolla il valore (solo il content, es. "abc123XYZ")
  vercel env add BING_SITE_VERIFICATION production
  ```
- Redeploy: `vercel deploy --prod --yes`
- Il layout legge automaticamente le env e inietta `<meta name="google-site-verification">` e `<meta name="msvalidate.01">`.

## Ordine consigliato

1. **Settimana 1**: A1 (GSC), A2 (Bing), A3 (Product Hunt — pianifica lancio martedì 9:01 PT)
2. **Settimana 1–2**: A7 (publiccode.yml), A6 (awesome PRs)
3. **Settimana 2**: B1, B2, B3 — outreach email
4. **Settimana 3+**: C — outreach editoriale (più lento, alto valore)

## Cosa NON fare

- ❌ Submission massiva a 500 directory generiche
- ❌ Comprare backlink (Fiverr, sape, etc.)
- ❌ Spam commenti blog / forum
- ❌ Footer link a goccia.org da siti senza relazione tematica
- ❌ Reciproci link massivi

Tutto quanto sopra → penalty Google + danno reputazionale 123Acqua.
