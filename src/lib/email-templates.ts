export interface EmailTemplate {
  id: string;
  subject: string;
  preheader: string;
  htmlBody: string;
  textBody: string;
  delayDays: number;
  ctaLabel: string;
  ctaUrl: string;
}

const BODY_BG = "#020617";
const CARD_BG = "#0f172a";
const TEXT = "#cbd5e1";
const HEADING = "#f1f5f9";
const MUTED = "#94a3b8";
const BORDER = "rgba(255,255,255,0.08)";
const ACCENT_GRADIENT = "linear-gradient(90deg,#8b5cf6,#0ea5e9)";

function wrapHtml(options: {
  preheader: string;
  innerHtml: string;
}): string {
  const { preheader, innerHtml } = options;
  return (
    '<!DOCTYPE html>' +
    '<html lang="it">' +
    '<head>' +
    '<meta charset="utf-8" />' +
    '<meta name="viewport" content="width=device-width, initial-scale=1" />' +
    '<title>GoccIA</title>' +
    '</head>' +
    '<body style="margin:0;padding:0;background-color:' + BODY_BG + ';font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Helvetica,Arial,sans-serif;">' +
    '<div style="display:none;font-size:1px;color:' + BODY_BG + ';line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">' +
    escapeHtml(preheader) +
    '</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:' + BODY_BG + ';padding:24px 12px;">' +
    '<tr><td align="center">' +
    '<table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:560px;max-width:100%;background-color:' + CARD_BG + ';border-radius:24px;border:1px solid ' + BORDER + ';">' +
    '<tr><td style="padding:32px;">' +
    '<div style="font-size:22px;font-weight:700;color:' + HEADING + ';letter-spacing:-0.02em;margin:0 0 24px 0;">GoccIA</div>' +
    innerHtml +
    '<hr style="border:none;border-top:1px solid ' + BORDER + ';margin:32px 0 20px 0;" />' +
    '<div style="font-size:12px;line-height:1.6;color:' + MUTED + ';">' +
    'Strumento informativo: non sostituisce il rapporto di prova di laboratorio.<br />' +
    'GoccIA &egrave; un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).<br />' +
    '<a href="https://goccia.org/unsubscribe?email={EMAIL}" style="color:' + MUTED + ';text-decoration:underline;">Disiscriviti dalla newsletter</a> &middot; ' +
    '<a href="https://goccia.org/privacy" style="color:' + MUTED + ';text-decoration:underline;">Informativa privacy</a>' +
    '</div>' +
    '</td></tr>' +
    '</table>' +
    '</td></tr>' +
    '</table>' +
    '</body>' +
    '</html>'
  );
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function heading(text: string): string {
  return '<h1 style="font-size:24px;line-height:1.3;color:' + HEADING + ';margin:0 0 16px 0;font-weight:700;letter-spacing:-0.01em;">' + text + '</h1>';
}

function paragraph(html: string): string {
  return '<p style="font-size:15px;line-height:1.65;color:' + TEXT + ';margin:0 0 16px 0;">' + html + '</p>';
}

function ctaButton(label: string, url: string): string {
  return (
    '<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0;">' +
    '<tr><td style="background-image:' + ACCENT_GRADIENT + ';background-color:#8b5cf6;border-radius:14px;">' +
    '<a href="' + url + '" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:14px;">' +
    escapeHtml(label) +
    '</a>' +
    '</td></tr>' +
    '</table>'
  );
}

function listItem(html: string): string {
  return '<li style="font-size:15px;line-height:1.65;color:' + TEXT + ';margin:0 0 12px 0;">' + html + '</li>';
}

function link(label: string, url: string): string {
  return '<a href="' + url + '" style="color:#7dd3fc;text-decoration:underline;">' + escapeHtml(label) + '</a>';
}

// ---------------- WELCOME ----------------
const welcomeInner =
  heading("Benvenuto in GoccIA") +
  paragraph("Grazie per esserti iscritto. Hai fatto un passo concreto verso una scelta pi&ugrave; consapevole sull&rsquo;acqua che bevi ogni giorno.") +
  paragraph("Nelle prossime 5 settimane riceverai contenuti pensati per aiutarti a:") +
  '<ul style="padding-left:20px;margin:0 0 16px 0;">' +
  listItem("<strong style=\"color:" + HEADING + ";\">Leggere un referto dell&rsquo;acqua</strong> senza dover essere un chimico: guide chiare parametro per parametro.") +
  listItem("<strong style=\"color:" + HEADING + ";\">Fare scelte pratiche per casa tua</strong>: caraffa, addolcitore, osmosi inversa &mdash; cosa serve davvero e cosa no.") +
  listItem("<strong style=\"color:" + HEADING + ";\">Capire i casi italiani documentati</strong> (PFAS Veneto, cromo VI Brescia, piombo edifici storici) e cosa significano per te oggi.") +
  '</ul>' +
  paragraph("Niente spam, niente vendita dati a terzi. Solo contenuti utili. Se non li trovi tali, in fondo a ogni email c&rsquo;&egrave; un link per disiscriverti in un click.") +
  paragraph("Vuoi iniziare subito? Inserisci il tuo Comune e ottieni in 30 secondi un punteggio sulla qualit&agrave; dell&rsquo;acqua del rubinetto nella tua zona, basato sui dati pubblici del gestore.") +
  ctaButton("Calcola il punteggio della tua acqua", "https://goccia.org/") +
  paragraph("A presto,<br />Il team GoccIA");

const welcomeText =
  "Benvenuto in GoccIA\n\n" +
  "Grazie per esserti iscritto. Hai fatto un passo concreto verso una scelta piu' consapevole sull'acqua che bevi ogni giorno.\n\n" +
  "Nelle prossime 5 settimane riceverai contenuti pensati per aiutarti a:\n" +
  "- Leggere un referto dell'acqua senza essere un chimico: guide chiare parametro per parametro.\n" +
  "- Fare scelte pratiche per casa tua: caraffa, addolcitore, osmosi inversa - cosa serve davvero e cosa no.\n" +
  "- Capire i casi italiani documentati (PFAS Veneto, cromo VI Brescia, piombo edifici storici).\n\n" +
  "Niente spam, niente vendita dati. Disiscrizione in un click in fondo a ogni email.\n\n" +
  "Vuoi iniziare subito? Calcola il punteggio della tua acqua: https://goccia.org/\n\n" +
  "A presto,\nIl team GoccIA\n\n" +
  "---\n" +
  "Strumento informativo: non sostituisce il rapporto di prova di laboratorio.\n" +
  "GoccIA e' un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).\n" +
  "Disiscriviti: https://goccia.org/unsubscribe?email={EMAIL}\n" +
  "Privacy: https://goccia.org/privacy";

// ---------------- DRIP 1 ----------------
const drip1Inner =
  heading("I 5 parametri da guardare per primi") +
  paragraph("Su un referto dell&rsquo;acqua potabile compaiono spesso oltre 20 valori. La buona notizia: per farsi un&rsquo;idea iniziale ne bastano cinque. Ecco quali e perch&eacute;.") +
  '<ol style="padding-left:20px;margin:0 0 16px 0;">' +
  listItem("<strong style=\"color:" + HEADING + ";\">Escherichia coli</strong> &mdash; limite di legge: 0 UFC/100 ml. Tolleranza zero: indica contaminazione fecale recente. &Egrave; il primo valore che un laboratorio controlla. " + link("Guida E. coli", "https://goccia.org/parametri/escherichia-coli") + ".") +
  listItem("<strong style=\"color:" + HEADING + ";\">Piombo</strong> &mdash; limite: 5 &micro;g/L (dal 2036, oggi 10). Critico in edifici costruiti prima del 1980 con tubature originali. " + link("Guida piombo", "https://goccia.org/parametri/piombo") + ".") +
  listItem("<strong style=\"color:" + HEADING + ";\">Nitrati</strong> &mdash; limite: 50 mg/L. Indicatore di pressione agricola e zootecnica. Rilevante in Pianura Padana, Veneto, Emilia. " + link("Guida nitrati", "https://goccia.org/parametri/nitrati") + ".") +
  listItem("<strong style=\"color:" + HEADING + ";\">Cloro residuo</strong> &mdash; limite consigliato: 0,2 mg/L al rubinetto. Non &egrave; pericoloso ai valori di legge, ma incide su sapore e odore. " + link("Guida cloro", "https://goccia.org/parametri/cloro-residuo") + ".") +
  listItem("<strong style=\"color:" + HEADING + ";\">Durezza</strong> &mdash; nessun limite sanitario, ma sopra 30 &deg;F incide su elettrodomestici e gusto. " + link("Guida durezza", "https://goccia.org/parametri/durezza") + ".") +
  '</ol>' +
  paragraph("Per ognuno trovi nella guida: limite normativo, fonti possibili, come si abbatte e quando ha senso preoccuparsi davvero.") +
  ctaButton("Vedi tutti i 24 parametri", "https://goccia.org/parametri") +
  paragraph("Nella prossima email: rubinetto o minerale? La risposta &egrave; meno ovvia di quello che si racconta in TV.");

const drip1Text =
  "I 5 parametri da guardare per primi\n\n" +
  "Su un referto compaiono oltre 20 valori. Per iniziare ne bastano cinque:\n\n" +
  "1. Escherichia coli - limite 0 UFC/100 ml. Tolleranza zero. https://goccia.org/parametri/escherichia-coli\n" +
  "2. Piombo - limite 5 ug/L dal 2036 (oggi 10). Critico in edifici pre-1980. https://goccia.org/parametri/piombo\n" +
  "3. Nitrati - limite 50 mg/L. Pressione agricola. https://goccia.org/parametri/nitrati\n" +
  "4. Cloro residuo - 0,2 mg/L consigliato. Sapore. https://goccia.org/parametri/cloro-residuo\n" +
  "5. Durezza - sopra 30 gradi F incide su elettrodomestici. https://goccia.org/parametri/durezza\n\n" +
  "Vedi tutti i 24 parametri: https://goccia.org/parametri\n\n" +
  "---\n" +
  "Strumento informativo: non sostituisce il rapporto di prova di laboratorio.\n" +
  "GoccIA e' un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).\n" +
  "Disiscriviti: https://goccia.org/unsubscribe?email={EMAIL}\n" +
  "Privacy: https://goccia.org/privacy";

// ---------------- DRIP 2 ----------------
const drip2Inner =
  heading("Rubinetto o minerale? La verit&agrave; scomoda") +
  paragraph("In Italia consumiamo pi&ugrave; acqua in bottiglia di chiunque in Europa: oltre 200 litri a persona ogni anno. Eppure il rubinetto, nella maggior parte dei Comuni, &egrave; controllato pi&ugrave; spesso e con metodi pi&ugrave; severi. Facciamo i conti.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Controlli.</strong> L&rsquo;acqua del rubinetto &egrave; soggetta a monitoraggio continuo dal gestore e dall&rsquo;ASL su circa 50 parametri (D.Lgs. 18/2023). L&rsquo;acqua minerale ha una composizione dichiarata in etichetta e controlli meno frequenti per legge.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Costo.</strong> Il rubinetto costa in media 1&euro; per 1.000 litri. Una bottiglia da supermercato costa 100&euro; per la stessa quantit&agrave;. Differenza: 100x.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Impatto ambientale.</strong> Una famiglia di 4 persone che beve solo bottiglia produce circa 1.700 bottiglie di plastica all&rsquo;anno e movimenta camion per il trasporto. Il rubinetto &egrave; gi&agrave; in casa.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Quando la bottiglia ha senso.</strong> Ci sono casi reali: acqua del rubinetto con superamenti documentati, esigenze terapeutiche specifiche, viaggi in zone con reti idriche non affidabili. Ma sono eccezioni, non la regola.") +
  ctaButton("Confronta rubinetto vs minerale", "https://goccia.org/rubinetto-vs-minerale") +
  paragraph("Sulla pagina trovi anche un calcolatore CO2 che stima l&rsquo;impatto della tua famiglia.");

const drip2Text =
  "Rubinetto o minerale? La verita' scomoda\n\n" +
  "In Italia consumiamo oltre 200 litri di acqua in bottiglia a persona all'anno. Facciamo i conti.\n\n" +
  "Controlli: il rubinetto e' monitorato in continuo dal gestore e dall'ASL su circa 50 parametri (D.Lgs. 18/2023). La minerale ha controlli meno frequenti per legge.\n" +
  "Costo: rubinetto 1 euro per 1.000 litri, bottiglia 100 euro per la stessa quantita'. Differenza: 100x.\n" +
  "Impatto: famiglia di 4 che beve solo bottiglia = 1.700 bottiglie plastica/anno.\n" +
  "Quando la bottiglia ha senso: superamenti documentati, esigenze terapeutiche, viaggi. Sono eccezioni.\n\n" +
  "Confronta rubinetto vs minerale: https://goccia.org/rubinetto-vs-minerale\n\n" +
  "---\n" +
  "Strumento informativo: non sostituisce il rapporto di prova di laboratorio.\n" +
  "GoccIA e' un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).\n" +
  "Disiscriviti: https://goccia.org/unsubscribe?email={EMAIL}\n" +
  "Privacy: https://goccia.org/privacy";

// ---------------- DRIP 3 ----------------
const drip3Inner =
  heading("I 3 casi che hanno cambiato l&rsquo;acqua in Italia") +
  paragraph("Negli ultimi vent&rsquo;anni tre casi documentati hanno riscritto come monitoriamo l&rsquo;acqua del rubinetto in Italia. Capirli aiuta a leggere meglio anche il presente.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">PFAS in Veneto (dal 2013).</strong> L&rsquo;ARPAV rileva concentrazioni anomale di sostanze perfluoroalchiliche nelle falde tra Vicenza, Verona e Padova, riconducibili allo stabilimento Miteni di Trissino. Oltre 350.000 residenti coinvolti. La Regione installa filtri a carbone attivo sugli acquedotti e attiva sorveglianza sanitaria. Nel 2024 il Parlamento UE ha fissato nuovi limiti europei per i PFAS nell&rsquo;acqua potabile.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Cromo esavalente a Brescia (anni 2000-2010).</strong> Le indagini sull&rsquo;area Caffaro/SIN Brescia mostrano contaminazione storica da cromo VI e PCB nei suoli. Alcuni pozzi vengono chiusi, l&rsquo;acquedotto adegua trattamenti e mappature. Il limite per il cromo VI nell&rsquo;acqua potabile &egrave; oggi 10 &micro;g/L (D.Lgs. 18/2023).") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Piombo negli edifici storici.</strong> Non &egrave; un &ldquo;caso&rdquo; localizzato ma una questione strutturale: gli edifici costruiti prima del 1980, soprattutto nei centri storici, possono avere ancora tubazioni interne in piombo. Il problema sta nell&rsquo;ultimo tratto, dopo il contatore, di responsabilit&agrave; del proprietario. Il nuovo limite UE scender&agrave; a 5 &micro;g/L nel 2036.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Cosa significa oggi.</strong> Se vivi in queste aree, l&rsquo;acquedotto pubblico ha gi&agrave; messo in atto barriere. Ma il tratto privato (tubature condominiali) resta sotto la responsabilit&agrave; del proprietario: un&rsquo;analisi al rubinetto &egrave; l&rsquo;unico modo per saperlo.") +
  ctaButton("Vedi se vivi in zona PFAS", "https://goccia.org/blog/pfas-italia-mappa");

const drip3Text =
  "I 3 casi che hanno cambiato l'acqua in Italia\n\n" +
  "PFAS in Veneto (dal 2013): ARPAV rileva contaminazione tra Vicenza/Verona/Padova da stabilimento Miteni. 350.000 residenti coinvolti. Installati filtri a carbone attivo. Nel 2024 limiti UE per PFAS.\n\n" +
  "Cromo VI a Brescia (anni 2000-2010): area Caffaro/SIN, contaminazione storica. Pozzi chiusi, trattamenti adeguati. Limite oggi 10 ug/L (D.Lgs. 18/2023).\n\n" +
  "Piombo edifici storici: questione strutturale per edifici pre-1980. Ultimo tratto dopo contatore = responsabilita' privata. Limite UE a 5 ug/L dal 2036.\n\n" +
  "Cosa significa oggi: l'acquedotto ha messo barriere, ma il tratto privato resta del proprietario. Solo un'analisi al rubinetto puo' dirlo.\n\n" +
  "Vedi se vivi in zona PFAS: https://goccia.org/blog/pfas-italia-mappa\n\n" +
  "---\n" +
  "Strumento informativo: non sostituisce il rapporto di prova di laboratorio.\n" +
  "GoccIA e' un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).\n" +
  "Disiscriviti: https://goccia.org/unsubscribe?email={EMAIL}\n" +
  "Privacy: https://goccia.org/privacy";

// ---------------- DRIP 4 ----------------
const drip4Inner =
  heading("Caraffa, addolcitore, osmosi: cosa serve davvero?") +
  paragraph("Il mercato del trattamento acqua &egrave; pieno di promesse vaghe. Una scelta sbagliata pu&ograve; costare fino a 1.500&euro; per risolvere un problema che non avevi. Una mini-mappa ragionata.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Caraffa filtrante.</strong> Riduce cloro, qualche metallo e migliora sapore. Costa 30-50&euro; pi&ugrave; cartucce. NON elimina nitrati, PFAS, batteri. Senso: se vuoi solo un&rsquo;acqua dal gusto migliore.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Addolcitore a resine.</strong> Riduce calcare (durezza). Costa 800-2.000&euro;. NON migliora la qualit&agrave; sanitaria. NON elimina contaminanti chimici. Senso: solo se hai elettrodomestici che si rompono per il calcare o caldaie a rischio.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Osmosi inversa.</strong> Riduce gran parte dei contaminanti disciolti: nitrati, PFAS (con membrane adeguate), metalli pesanti, durezza. Costa 500-1.500&euro;. NON &egrave; gratis: serve manutenzione e produce acqua di scarto. Senso: se hai contaminazioni documentate o sei in zona a rischio.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Carbone attivo (sottolavello).</strong> Riduce cloro, alcuni pesticidi, sostanze organiche. NON elimina nitrati, metalli pesanti, sali. Costa 150-400&euro;. Senso: integrazione mirata.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">La regola d&rsquo;oro.</strong> Prima del trattamento, analizza l&rsquo;acqua. Dopo l&rsquo;installazione, rianalizza per verificare che il trattamento funzioni davvero. Senza pre/post non hai prova del miglioramento.") +
  ctaButton("Confronta i trattamenti", "https://goccia.org/trattamenti");

const drip4Text =
  "Caraffa, addolcitore, osmosi: cosa serve davvero?\n\n" +
  "Una scelta sbagliata puo' costare fino a 1.500 euro per risolvere un problema che non avevi.\n\n" +
  "Caraffa: 30-50 euro. Migliora sapore. NON elimina nitrati, PFAS, batteri.\n" +
  "Addolcitore: 800-2.000 euro. Riduce calcare. NON migliora qualita' sanitaria.\n" +
  "Osmosi inversa: 500-1.500 euro. Riduce nitrati, PFAS, metalli, durezza. Richiede manutenzione, produce scarto.\n" +
  "Carbone attivo sottolavello: 150-400 euro. Riduce cloro, alcuni pesticidi. NON elimina nitrati ne' metalli.\n\n" +
  "Regola d'oro: analizza prima e dopo. Senza pre/post non hai prova che il trattamento funzioni.\n\n" +
  "Confronta i trattamenti: https://goccia.org/trattamenti\n\n" +
  "---\n" +
  "Strumento informativo: non sostituisce il rapporto di prova di laboratorio.\n" +
  "GoccIA e' un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).\n" +
  "Disiscriviti: https://goccia.org/unsubscribe?email={EMAIL}\n" +
  "Privacy: https://goccia.org/privacy";

// ---------------- DRIP 5 ----------------
const drip5Inner =
  heading("Quando vale la pena fare l&rsquo;analisi") +
  paragraph("Hai diversi modi per controllare l&rsquo;acqua di casa tua. Ognuno ha il suo posto. Una guida onesta per non sprecare soldi e non sottovalutare rischi reali.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Strisce reattive (5-15&euro;).</strong> Indicano in modo approssimativo cloro, durezza, pH, talvolta nitrati. Utili per uno screening rapido. Margine di errore alto: servono come indicazione, non come prova.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Kit casalinghi (30-80&euro;).</strong> Test colorimetrici pi&ugrave; precisi delle strisce. Coprono pochi parametri. Non hanno valore legale n&eacute; sanitario formale.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Analisi di laboratorio.</strong> Il campione &egrave; analizzato con strumenti dedicati e metodi validati conformi a norme tecniche di riferimento (cromatografia ionica, spettrometria, microbiologia di base). Esce un rapporto di prova firmato che riporta valori, limiti e incertezza.") +
  paragraph("<strong style=\"color:" + HEADING + ";\">Quando ha senso il rapporto firmato:</strong>") +
  '<ul style="padding-left:20px;margin:0 0 16px 0;">' +
  listItem("Gravidanza o presenza di neonati in casa.") +
  listItem("Edifici costruiti prima del 1980 con tubature originali (rischio piombo).") +
  listItem("Residenza in area con contaminazioni documentate (PFAS, nitrati, arsenico, cromo VI).") +
  listItem("Sospetto puntuale: cambio di colore, odore o sapore dell&rsquo;acqua.") +
  listItem("Atti legali (compravendita, contestazioni condominiali, perizie).") +
  listItem("Decisione condominiale prima di installare un trattamento centralizzato.") +
  '</ul>' +
  paragraph("Se sei in uno di questi casi, la differenza tra una striscia da 5&euro; e un rapporto di prova di laboratorio &egrave; sostanziale. Il rapporto &egrave; un documento opponibile, ti dice esattamente cosa c&rsquo;&egrave; e a che concentrazione.") +
  ctaButton("Richiedi un'analisi su 123acqua.com", "https://123acqua.com") +
  paragraph("Grazie per aver letto fin qui. Se hai domande, rispondi a questa email: leggiamo tutto.<br />Il team GoccIA");

const drip5Text =
  "Quando vale la pena fare l'analisi\n\n" +
  "Strisce reattive (5-15 euro): screening rapido, margine errore alto.\n" +
  "Kit casalinghi (30-80 euro): pochi parametri, nessun valore legale.\n" +
  "Analisi di laboratorio: strumenti dedicati, metodi validati conformi a norme tecniche, rapporto di prova firmato con valori, limiti, incertezza.\n\n" +
  "Quando ha senso il rapporto firmato:\n" +
  "- Gravidanza o neonati in casa.\n" +
  "- Edifici pre-1980 (rischio piombo).\n" +
  "- Aree con contaminazioni documentate (PFAS, nitrati, arsenico, cromo VI).\n" +
  "- Sospetto puntuale (cambio colore/odore/sapore).\n" +
  "- Atti legali (compravendita, contestazioni, perizie).\n" +
  "- Decisioni condominiali prima di trattamento centralizzato.\n\n" +
  "Il rapporto e' un documento opponibile.\n\n" +
  "Richiedi un'analisi: https://123acqua.com\n\n" +
  "---\n" +
  "Strumento informativo: non sostituisce il rapporto di prova di laboratorio.\n" +
  "GoccIA e' un marchio commerciale di Labservice S.r.l. (P.IVA IT09433191005).\n" +
  "Disiscriviti: https://goccia.org/unsubscribe?email={EMAIL}\n" +
  "Privacy: https://goccia.org/privacy";

export const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    id: "welcome",
    subject: "Benvenuto/a in GoccIA — capirai meglio la tua acqua del rubinetto",
    preheader: "Le prossime 5 email ti accompagnano alla scoperta della qualità dell'acqua del rubinetto in Italia.",
    htmlBody: wrapHtml({
      preheader: "Le prossime 5 email ti accompagnano alla scoperta della qualita' dell'acqua del rubinetto in Italia.",
      innerHtml: welcomeInner,
    }),
    textBody: welcomeText,
    delayDays: 0,
    ctaLabel: "Calcola il punteggio della tua acqua",
    ctaUrl: "https://goccia.org/",
  },
  {
    id: "drip-1-parametri",
    subject: "I 5 parametri che devi guardare per primi",
    preheader: "Su un referto ci sono 20+ parametri. Inizia da questi.",
    htmlBody: wrapHtml({
      preheader: "Su un referto ci sono 20+ parametri. Inizia da questi.",
      innerHtml: drip1Inner,
    }),
    textBody: drip1Text,
    delayDays: 4,
    ctaLabel: "Vedi tutti i 24 parametri",
    ctaUrl: "https://goccia.org/parametri",
  },
  {
    id: "drip-2-rubinetto-vs-minerale",
    subject: "Acqua del rubinetto o minerale? La verità scomoda",
    preheader: "Spoiler: dipende, ma non come pensi.",
    htmlBody: wrapHtml({
      preheader: "Spoiler: dipende, ma non come pensi.",
      innerHtml: drip2Inner,
    }),
    textBody: drip2Text,
    delayDays: 8,
    ctaLabel: "Confronta rubinetto vs minerale",
    ctaUrl: "https://goccia.org/rubinetto-vs-minerale",
  },
  {
    id: "drip-3-casi-italia",
    subject: "I 3 casi che hanno cambiato l'acqua del rubinetto in Italia",
    preheader: "PFAS Veneto, cromo VI Brescia, piombo edifici storici.",
    htmlBody: wrapHtml({
      preheader: "PFAS Veneto, cromo VI Brescia, piombo edifici storici.",
      innerHtml: drip3Inner,
    }),
    textBody: drip3Text,
    delayDays: 14,
    ctaLabel: "Vedi se vivi in zona PFAS",
    ctaUrl: "https://goccia.org/blog/pfas-italia-mappa",
  },
  {
    id: "drip-4-trattamenti",
    subject: "Caraffa, addolcitore, osmosi inversa: cosa serve davvero?",
    preheader: "Una scelta sbagliata può costarti 1.500 € e zero benefici.",
    htmlBody: wrapHtml({
      preheader: "Una scelta sbagliata puo' costarti 1.500 euro e zero benefici.",
      innerHtml: drip4Inner,
    }),
    textBody: drip4Text,
    delayDays: 21,
    ctaLabel: "Confronta i trattamenti",
    ctaUrl: "https://goccia.org/trattamenti",
  },
  {
    id: "drip-5-analisi-laboratorio",
    subject: "Quando vale davvero la pena fare l'analisi",
    preheader: "Strisce, kit, laboratorio: ognuno ha il suo posto.",
    htmlBody: wrapHtml({
      preheader: "Strisce, kit, laboratorio: ognuno ha il suo posto.",
      innerHtml: drip5Inner,
    }),
    textBody: drip5Text,
    delayDays: 30,
    ctaLabel: "Richiedi un'analisi su 123acqua.com",
    ctaUrl: "https://123acqua.com",
  },
];
