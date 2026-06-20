export interface DashboardCopy {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; intro: string };
  cardsHeader: { title: string; subtitle: string };
  trendHeader: { title: string; subtitle: string };
  mapHeader: { title: string; subtitle: string };
  disclaimer: string;
  emptyState: { title: string; description: string };
  methodologyNote: string;
}

export const DASHBOARD_COPY: DashboardCopy = {
  metaTitle: "Dashboard pubblica GoccIA · Statistiche aggregate sull'acqua in Italia",
  metaDescription:
    "Benchmark anonimo e aggregato delle submission GoccIA: distribuzione dei verdetti, andamento del punteggio medio nazionale e sintesi delle criticità note per regione. I dati non sostituiscono il monitoraggio ufficiale di ARPA, ATS e gestori idrici.",
  hero: {
    eyebrow: "Dashboard pubblica · Dati aggregati anonimi",
    title: "Com'è l'acqua in Italia secondo GoccIA",
    intro:
      "Questa pagina raccoglie in forma anonima e aggregata i risultati delle valutazioni effettuate dagli utenti con il tool GoccIA. È un benchmark partecipativo, non un sistema di monitoraggio ufficiale: non sostituisce i controlli di ARPA regionali, ATS e gestori idrici, ma offre una fotografia trasparente di come viene percepita la qualità dell'acqua di rete in Italia. Ogni punteggio individuale resta privato: pubblichiamo solo medie, conteggi e tendenze. Condividiamo apertamente i metodi di calcolo e i limiti del campione perché crediamo nella trasparenza metodologica.",
  },
  cardsHeader: {
    title: "Distribuzione dei verdetti",
    subtitle:
      "Quante submission hanno ricevuto ciascun verdetto (Eccellente / Buona / Discreta / Da migliorare / Critica)",
  },
  trendHeader: {
    title: "Andamento ultimo mese",
    subtitle: "Punteggio medio nazionale degli ultimi 30 giorni",
  },
  mapHeader: {
    title: "Problemi tipici per area geografica",
    subtitle:
      "Sintesi delle criticità ricorrenti per regione, dalla documentazione pubblica (ARPA/ISS) e dalla letteratura tecnica",
  },
  disclaimer:
    "I dati mostrati in questa pagina provengono esclusivamente dalle persone che hanno scelto di utilizzare il tool GoccIA e di completare almeno una valutazione. Si tratta quindi di un campione autoselezionato, non di un campione statisticamente rappresentativo della popolazione italiana né del territorio nazionale. Le submission sono raccolte in forma anonima e mostrate solo in forma aggregata: non è possibile, da queste statistiche, risalire al singolo utente o alla singola valutazione. Le tendenze che vedi possono essere influenzate dalla copertura geografica reale del tool: tipicamente arrivano più submission dalle grandi città e dalle aree con maggiore alfabetizzazione digitale, mentre aree rurali o piccoli comuni risultano sottorappresentati. Per questo motivo i numeri vanno letti come un indicatore di percezione e di tendenza, non come una misura ufficiale della qualità dell'acqua potabile. Per dati rappresentativi e validati a livello territoriale è necessario fare riferimento alle fonti istituzionali: i rapporti delle ARPA regionali, i report dell'Istituto Superiore di Sanità, i bollettini delle ATS locali e, soprattutto, le analisi pubblicate dai gestori del servizio idrico integrato del proprio comune. GoccIA è un servizio aperto e in crescita: il valore informativo del benchmark aumenterà con il tempo, con l'allargarsi del bacino di utenti e con il miglioramento progressivo della copertura geografica.",
  emptyState: {
    title: "Stiamo raccogliendo dati",
    description:
      "Il benchmark si aggiornerà man mano che arriveranno nuove submission. Torna presto. Intanto puoi calcolare il tuo punteggio con il tool nella home.",
  },
  methodologyNote:
    "Le percentuali mostrate nella distribuzione dei verdetti sono calcolate a partire dalla view materializzata `goccia_benchmark` su Supabase, che aggrega le submission per giorno e per verdetto. Il punteggio medio nazionale è ottenuto come media ponderata sui giorni del periodo selezionato, usando il numero di submission (count) come peso e il punteggio medio giornaliero (avg_score) come valore: questo evita che giorni con pochissime submission abbiano lo stesso peso di giorni con molte valutazioni. La sintesi per regione incrocia il campo CAP, facoltativo e compilato dall'utente, con le criticità documentate in fonti pubbliche (rapporti ARPA, letteratura tecnica, casi storici noti). Quando il CAP non è disponibile la submission contribuisce solo al dato nazionale.",
};

export interface RegionInsight {
  region: string;
  commonIssue: string;
  callout?: string;
}

export const REGION_INSIGHTS: RegionInsight[] = [
  {
    region: "Veneto",
    commonIssue: "PFAS storico area Miteni (Vicenza, Verona, Padova)",
    callout:
      "Una delle contaminazioni da sostanze perfluoroalchiliche più estese mai documentate in Europa.",
  },
  {
    region: "Lazio",
    commonIssue: "Fluoruri e arsenico vulcanici (area Viterbo, Colli Albani)",
    callout:
      "Origine geogenica legata al vulcanismo: richiede trattamento dedicato dai gestori idrici.",
  },
  {
    region: "Lombardia",
    commonIssue: "Durezza generalmente alta, PFAS monitorati",
  },
  {
    region: "Piemonte",
    commonIssue:
      "Hotspot Spinetta Marengo (PFAS), cromo VI storico (Torino zona Acerbi)",
  },
  {
    region: "Toscana",
    commonIssue:
      "Distretto tessile Prato, sorgenti acidule, qualità generalmente buona",
  },
  {
    region: "Emilia-Romagna",
    commonIssue:
      "Nitrati Pianura Padana, intrusione salinizzazione costa adriatica",
  },
  {
    region: "Campania",
    commonIssue:
      "Sorgenti appenniniche di qualità generalmente buona, alcune problematiche locali",
  },
  {
    region: "Sicilia",
    commonIssue:
      "Acque calcaree, vulcaniche (Etna), differenze tra costa e interno",
  },
  {
    region: "Sardegna",
    commonIssue: "Falda + invasi, qualità variabile per area",
  },
  {
    region: "Puglia",
    commonIssue: "Acqua trasportata da Basilicata (AQP), calcare salentino",
  },
  {
    region: "Calabria",
    commonIssue:
      "Sorgenti silane e peloritane, qualità generalmente buona",
  },
  {
    region: "Basilicata",
    commonIssue:
      "Acquedotto Lucano fornisce anche la Puglia, qualità generalmente buona",
  },
  {
    region: "Trentino-Alto Adige",
    commonIssue: "Sorgenti alpine pure, qualità storicamente eccellente",
  },
  {
    region: "Friuli-Venezia Giulia",
    commonIssue:
      "Sorgenti del Carso e friulane, qualità generalmente molto buona",
  },
  {
    region: "Marche",
    commonIssue: "Falda dorica, sorgenti appenniniche di qualità",
  },
  {
    region: "Umbria",
    commonIssue: "Sorgenti tiberine e appenniniche di qualità buona",
  },
  {
    region: "Abruzzo",
    commonIssue: "Sorgenti appenniniche, qualità generalmente buona",
  },
  {
    region: "Molise",
    commonIssue: "Sorgenti appenniniche, qualità generalmente buona",
  },
  {
    region: "Liguria",
    commonIssue: "Acque costiere appenniniche, qualità generalmente buona",
  },
  {
    region: "Valle d'Aosta",
    commonIssue: "Sorgenti alpine pure, qualità eccellente",
  },
];
