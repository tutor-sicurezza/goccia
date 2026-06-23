import type { NeighborhoodGuide } from "./neighborhood-guides";

const AMAP_PARAGRAPH =
  "Il gestore del servizio idrico integrato per Palermo è AMAP S.p.A. (Azienda Meridionale Acque Palermo), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete cittadina è alimentata prevalentemente dagli invasi di Scanzano e Piana degli Albanesi, integrati da sorgenti locali e pozzi: questa origine mista, prevalentemente carsica, conferisce all'acqua un profilo medio-duro, calcareo, con buona mineralizzazione naturale e una conducibilità tipica delle acque del comprensorio palermitano.";

const CONTROLS_PARAGRAPH =
  "I controlli sull'acqua distribuita seguono il D.Lgs. 18/2023, che recepisce la Direttiva UE 2020/2184: gli autocontrolli di AMAP S.p.A. lungo la filiera si affiancano ai controlli ufficiali dell'ASP di Palermo e al monitoraggio ambientale di ARPA Sicilia. I referti per zona di distribuzione sono consultabili sul portale del gestore.";

const HARDNESS_PARAGRAPH =
  "Caratteristica costante a Palermo è la durezza dell'acqua, mediamente medio-alta per via dell'origine carsica degli invasi e delle sorgenti: questo si traduce in formazione di calcare su rubinetti, boiler e lavastoviglie. È un fenomeno estetico e impiantistico, non un problema sanitario: l'OMS conferma che non esistono evidenze di rischio per la salute legate alla durezza dell'acqua potabile.";

interface QuartiereSpec {
  slug: string;
  name: string;
  district: string;
  context: string;
  buildingAge: NeighborhoodGuide["buildingAge"];
  risks: string[];
  ctaVariant: NeighborhoodGuide["ctaVariant"];
  notes: string;
}

const QUARTIERI: QuartiereSpec[] = [
  {
    slug: "palermo-centro-storico",
    name: "Centro storico",
    district: "I Circoscrizione",
    context:
      "il cuore antico della città racchiuso fra i quattro mandamenti (Albergheria, Capo, Vucciria, Kalsa), con palazzi nobiliari, bagli e cortili spesso pre-ottocenteschi",
    buildingAge: "storico-pre1900",
    risks: [
      "Piombo da tubazioni interne pre-1960",
      "Stagnazione in palazzi a uso turistico o sfitti",
      "Durezza medio-alta da invasi carsici",
      "Calcare in caldaie e scaldabagni",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "Negli edifici del Centro storico convivono colonne montanti e diramazioni rifatte in epoche diverse, talvolta con tratti residui di piombo nei collegamenti privati antecedenti al divieto del 1989.",
  },
  {
    slug: "palermo-vucciria",
    name: "Vucciria",
    district: "I Circoscrizione",
    context:
      "il mandamento del mercato storico, fitto di vicoli e palazzi di varia epoca, oggi anche zona di movida con esercizi commerciali e affitti brevi",
    buildingAge: "storico-pre1900",
    risks: [
      "Piombo possibile in palazzi pre-1960",
      "Stagnazione in B&B e affitti brevi",
      "Durezza medio-alta tipica della rete AMAP",
      "Cloro residuo variabile nei tratti distali",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "La Vucciria è caratterizzata da edifici stratificati su impianti idrici rifatti più volte: nei tratti privati interni possono persistere materiali datati che, dopo lunghe stagnazioni, rilasciano tracce di metalli al primo getto.",
  },
  {
    slug: "palermo-kalsa",
    name: "Kalsa",
    district: "I Circoscrizione",
    context:
      "il mandamento di Tribunali-Castellammare, fra Foro Italico e Palazzo Steri, con palazzi nobiliari e una progressiva riqualificazione residenziale",
    buildingAge: "storico-pre1900",
    risks: [
      "Tubazioni interne in edifici pre-1900",
      "Piombo possibile in collegamenti privati pre-1960",
      "Salmastro indiretto in alcune cantine fronte mare",
      "Calcare diffuso da acqua medio-dura",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "Alla Kalsa la vicinanza al mare non altera la qualità dell'acqua AMAP a rubinetto (la rete è separata), ma l'umidità e gli impianti datati di alcuni palazzi rendono utile un controllo periodico su microbiologica e metalli.",
  },
  {
    slug: "palermo-noce",
    name: "Noce",
    district: "III Circoscrizione",
    context:
      "quartiere semicentrale a ovest, con edilizia prevalentemente del dopoguerra e degli anni '60-'70",
    buildingAge: "dopoguerra",
    risks: [
      "Impianti condominiali anni '60-'70",
      "Possibili tratti residui di piombo nei palazzi più datati",
      "Durezza medio-alta",
      "Calcare in elettrodomestici",
    ],
    ctaVariant: "completa",
    notes:
      "Alla Noce gli edifici del dopoguerra hanno spesso impianti idrici originari mai sostituiti integralmente: una verifica su piombo, rame e nichel ha senso soprattutto nei palazzi antecedenti agli anni '80.",
  },
  {
    slug: "palermo-zisa",
    name: "Zisa",
    district: "I Circoscrizione",
    context:
      "quartiere attorno al castello arabo-normanno della Zisa, con tessuto urbano misto fra edifici storici e palazzine del Novecento",
    buildingAge: "misto",
    risks: [
      "Impianti misti fra edifici pre-1900 e palazzine novecentesche",
      "Piombo possibile in tratti residui pre-1960",
      "Durezza medio-alta tipica AMAP",
      "Stagnazione in case sfitte o sottoutilizzate",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "Alla Zisa la varietà edilizia rende difficile generalizzare: in via prudenziale, nei palazzi pre-1980 conviene includere piombo e rame nel pannello di analisi.",
  },
  {
    slug: "palermo-cuba",
    name: "Cuba",
    district: "I Circoscrizione",
    context:
      "area limitrofa al Castello della Cuba, fra Zisa e Calatafimi, con edilizia residenziale di primo e medio Novecento",
    buildingAge: "primo-novecento",
    risks: [
      "Impianti condominiali primo Novecento",
      "Tubazioni interne datate nei palazzi pre-1960",
      "Durezza medio-alta",
      "Calcare in caldaie e boiler",
    ],
    ctaVariant: "completa",
    notes:
      "A Cuba gli edifici di primo Novecento mantengono spesso colonne montanti originarie: una verifica su metalli e microbiologica è utile prima di consumare l'acqua del rubinetto in modo continuativo.",
  },
  {
    slug: "palermo-mondello",
    name: "Mondello",
    district: "VII Circoscrizione",
    context:
      "borgata marinara a nord-ovest, con ville liberty, seconde case e una forte stagionalità turistica",
    buildingAge: "misto",
    risks: [
      "Stagnazione in seconde case a uso estivo",
      "Variabilità della pressione nei mesi di picco turistico",
      "Durezza medio-alta tipica della rete AMAP",
      "Microbiologica da verificare dopo lunghe assenze",
    ],
    ctaVariant: "microbiologica",
    notes:
      "A Mondello la stagionalità è il fattore chiave: nelle case usate solo d'estate è prudente, alla riapertura, far scorrere abbondantemente l'acqua e, se si beve da rubinetto, eseguire un controllo microbiologico e dei metalli.",
  },
  {
    slug: "palermo-libertà",
    name: "Libertà",
    district: "VIII Circoscrizione",
    context:
      "asse di via Libertà, fra Politeama e Giardino Inglese, con palazzi liberty e residenza signorile fra Ottocento e primo Novecento",
    buildingAge: "primo-novecento",
    risks: [
      "Impianti d'epoca in palazzi liberty",
      "Possibili tratti di piombo nei collegamenti privati pre-1960",
      "Durezza medio-alta",
      "Calcare sugli impianti centralizzati",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "Nei palazzi liberty della Libertà gli impianti sono spesso stati rifatti solo a tratti: la verifica dei metalli pesanti, soprattutto piombo e rame, resta utile prima di destinare l'acqua a uso alimentare quotidiano.",
  },
  {
    slug: "palermo-politeama",
    name: "Politeama",
    district: "I Circoscrizione",
    context:
      "area attorno a piazza Castelnuovo e al Teatro Politeama, cerniera fra centro storico e città ottocentesca",
    buildingAge: "primo-novecento",
    risks: [
      "Edifici di fine Ottocento e primo Novecento",
      "Tubazioni interne stratificate",
      "Durezza medio-alta tipica AMAP",
      "Stagnazione in uffici e studi chiusi nel weekend",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "Al Politeama coesistono uso residenziale e terziario: in uffici chiusi nel weekend la stagnazione è frequente e il primo getto del lunedì non andrebbe usato per uso alimentare senza scorrimento.",
  },
  {
    slug: "palermo-borgo-vecchio",
    name: "Borgo Vecchio",
    district: "I Circoscrizione",
    context:
      "quartiere storico-popolare fra il porto e via Libertà, con edilizia bassa e fitta, in parte ottocentesca",
    buildingAge: "storico-pre1900",
    risks: [
      "Impianti idrici interni datati",
      "Piombo possibile nei tratti privati pre-1960",
      "Durezza medio-alta",
      "Stagnazione in case sfitte",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "Al Borgo Vecchio il tessuto edilizio popolare ha visto interventi parziali sugli impianti: nelle case antecedenti agli anni '60 una verifica dei metalli pesanti è coerente con il principio di precauzione.",
  },
  {
    slug: "palermo-cep",
    name: "CEP",
    district: "VI Circoscrizione",
    context:
      "quartiere di edilizia popolare degli anni '60-'70 nella zona occidentale, parte del piano di edilizia economica e popolare",
    buildingAge: "dopoguerra",
    risks: [
      "Impianti condominiali originari anni '60-'70",
      "Calcare diffuso su impianti centralizzati",
      "Durezza medio-alta",
      "Possibili manutenzioni rete localizzate",
    ],
    ctaVariant: "completa",
    notes:
      "Al CEP gli impianti condominiali originari non sempre sono stati sostituiti: oltre alla durezza è utile valutare microbiologica e metalli, soprattutto se non si conoscono i materiali delle colonne montanti.",
  },
  {
    slug: "palermo-borgo-nuovo",
    name: "Borgo Nuovo",
    district: "V Circoscrizione",
    context:
      "quartiere popolare a nord-ovest, sviluppato fra gli anni '60 e '70 come espansione residenziale",
    buildingAge: "dopoguerra",
    risks: [
      "Edifici dopoguerra con impianti originari",
      "Calcare in elettrodomestici",
      "Durezza medio-alta",
      "Variabilità del cloro residuo",
    ],
    ctaVariant: "completa",
    notes:
      "A Borgo Nuovo la rete domestica risale spesso alla costruzione originaria: un controllo periodico su microbiologica e durezza è una buona pratica per chi consuma l'acqua del rubinetto in famiglia.",
  },
  {
    slug: "palermo-pallavicino",
    name: "Pallavicino",
    district: "VII Circoscrizione",
    context:
      "quartiere a nord, fra Tommaso Natale e la borgata, con edilizia residenziale mista del secondo Novecento",
    buildingAge: "dopoguerra",
    risks: [
      "Impianti residenziali del secondo Novecento",
      "Durezza medio-alta tipica AMAP",
      "Calcare su boiler e caldaie",
      "Stagnazione in case di villeggiatura",
    ],
    ctaVariant: "completa",
    notes:
      "A Pallavicino la presenza di seconde case rende utile, alla riapertura stagionale, un controllo combinato di microbiologica e parametri chimici di base.",
  },
  {
    slug: "palermo-resuttana",
    name: "Resuttana",
    district: "VII Circoscrizione",
    context:
      "quartiere residenziale a nord, fra viale Strasburgo e via San Lorenzo, con palazzine fra gli anni '70 e i '90",
    buildingAge: "moderno",
    risks: [
      "Impianti condominiali anni '70-'90",
      "Durezza medio-alta",
      "Calcare su elettrodomestici",
      "Stagnazione in alloggi temporaneamente sfitti",
    ],
    ctaVariant: "kit-analisi",
    notes:
      "A Resuttana gli impianti sono mediamente più recenti rispetto al centro: il pannello di controllo può essere alleggerito, ma durezza e microbiologica restano informazioni utili.",
  },
  {
    slug: "palermo-acquasanta",
    name: "Acquasanta",
    district: "II Circoscrizione",
    context:
      "borgata marinara a nord del porto, fra l'Arenella e il lungomare, con edilizia popolare ottocentesca e novecentesca",
    buildingAge: "misto",
    risks: [
      "Impianti idrici interni stratificati",
      "Piombo possibile nei tratti pre-1960",
      "Durezza medio-alta tipica AMAP",
      "Umidità in cantine fronte mare",
    ],
    ctaVariant: "metalli-pesanti",
    notes:
      "All'Acquasanta convivono edilizia popolare antica e palazzine più recenti: nei palazzi pre-1980 conviene includere piombo, rame e nichel nel pannello di analisi.",
  },
  {
    slug: "palermo-arenella",
    name: "Arenella",
    district: "II Circoscrizione",
    context:
      "borgata marinara storica a nord del porto, fra le tonnare dismesse e Vergine Maria",
    buildingAge: "misto",
    risks: [
      "Edilizia mista storico-novecentesca",
      "Stagnazione in case sottoutilizzate",
      "Durezza medio-alta",
      "Microbiologica da verificare dopo lunghe assenze",
    ],
    ctaVariant: "microbiologica",
    notes:
      "All'Arenella la sovrapposizione di edifici antichi e palazzine successive consiglia un approccio prudente: un controllo microbiologico e dei metalli ha valore informativo per chi consuma l'acqua del rubinetto stabilmente.",
  },
  {
    slug: "palermo-sferracavallo",
    name: "Sferracavallo",
    district: "VII Circoscrizione",
    context:
      "borgata marinara all'estremo nord-ovest della città, con forte vocazione turistica e residenza stagionale",
    buildingAge: "misto",
    risks: [
      "Stagnazione in case di villeggiatura",
      "Durezza medio-alta tipica AMAP",
      "Variabilità della pressione nei picchi estivi",
      "Calcare diffuso",
    ],
    ctaVariant: "microbiologica",
    notes:
      "A Sferracavallo, come a Mondello, la stagionalità impone alla riapertura un robusto scorrimento dell'acqua e, idealmente, un controllo microbiologico e dei parametri chimici di base.",
  },
  {
    slug: "palermo-roccella",
    name: "Roccella",
    district: "II Circoscrizione",
    context:
      "quartiere periferico a sud-est, sviluppato come edilizia residenziale pubblica fra anni '70 e '80",
    buildingAge: "dopoguerra",
    risks: [
      "Edilizia residenziale pubblica anni '70-'80",
      "Impianti condominiali originari",
      "Durezza medio-alta",
      "Calcare su elettrodomestici e caldaie",
    ],
    ctaVariant: "completa",
    notes:
      "Alla Roccella i grandi complessi residenziali pubblici hanno impianti idrici di età omogenea, spesso originari: un controllo periodico aiuta a documentare nel tempo la qualità a rubinetto.",
  },
  {
    slug: "palermo-brancaccio",
    name: "Brancaccio",
    district: "II Circoscrizione",
    context:
      "quartiere popolare a sud-est, fra zona industriale e residenziale, con edilizia del dopoguerra",
    buildingAge: "dopoguerra",
    risks: [
      "Edilizia popolare dopoguerra",
      "Impianti condominiali originari",
      "Durezza medio-alta tipica AMAP",
      "Vicinanza ad ambiti produttivi (rilevante per l'ambiente, non per la rete potabile)",
    ],
    ctaVariant: "completa",
    notes:
      "A Brancaccio la vicinanza ad ambiti produttivi riguarda il contesto ambientale, non l'acqua di rete: i parametri AMAP a rubinetto restano vincolati al D.Lgs. 18/2023, ma un controllo periodico è una buona pratica.",
  },
  {
    slug: "palermo-bonagia",
    name: "Bonagia",
    district: "V Circoscrizione",
    context:
      "quartiere residenziale a nord-ovest, con edilizia popolare e palazzine del secondo Novecento",
    buildingAge: "dopoguerra",
    risks: [
      "Impianti dopoguerra non sempre rinnovati",
      "Durezza medio-alta",
      "Calcare diffuso",
      "Stagnazione in alloggi sottoutilizzati",
    ],
    ctaVariant: "completa",
    notes:
      "A Bonagia l'edilizia popolare del secondo Novecento non ha sempre visto rifacimenti integrali degli impianti: un controllo di durezza, microbiologica e metalli aiuta a costruire una baseline affidabile.",
  },
];

function buildEntry(q: QuartiereSpec): NeighborhoodGuide {
  const { slug, name, district, context, buildingAge, risks, ctaVariant, notes } = q;
  const palazziAntichi = buildingAge === "storico-pre1900" || buildingAge === "primo-novecento";
  return {
    slug,
    citySlug: "palermo",
    cityName: "Palermo",
    neighborhoodName: name,
    district,
    shortTitle: `Acqua del rubinetto a ${name} (Palermo): durezza, calcare, controlli`,
    metaDescription: `Acqua del rubinetto a ${name}, Palermo (${district}). Gestore AMAP S.p.A., origine da invasi e sorgenti, acqua medio-dura e calcarea. Cosa controllare e quando, secondo D.Lgs. 18/2023.`,
    searchKeywords: [
      `acqua ${name.toLowerCase()} palermo`,
      `acqua rubinetto ${name.toLowerCase()}`,
      `qualità acqua palermo ${name.toLowerCase()}`,
      `durezza acqua palermo ${name.toLowerCase()}`,
      `amap ${name.toLowerCase()}`,
      `analisi acqua palermo ${name.toLowerCase()}`,
    ],
    intro: `${name} è ${context}, all'interno della ${district} di Palermo. L'acqua del rubinetto distribuita da AMAP S.p.A. arriva qui prevalentemente dagli invasi di Scanzano e Piana degli Albanesi, con apporto di sorgenti locali: il profilo è tipicamente medio-duro, calcareo, con una conducibilità nella media del comprensorio palermitano. In quartieri come ${name} il fattore che incide di più sulla qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: sapere cosa controllare a ${name} aiuta a usare l'acqua del rubinetto in sicurezza, riducendo il consumo di acqua in bottiglia.`,
    buildingAge,
    typicalRisks: risks,
    sections: [
      {
        heading: `L'acqua a ${name}: contesto urbano e tubazioni`,
        paragraphs: [
          AMAP_PARAGRAPH,
          `A ${name}, ${context}, la rete pubblica AMAP è soggetta a manutenzione periodica fino al contatore, mentre gli impianti interni condominiali ricadono sotto la responsabilità dell'amministratore e dei singoli proprietari. ${notes}`,
        ],
        bullets: [
          `Quartiere all'interno della ${district}`,
          "Rete pubblica gestita da AMAP S.p.A.",
          "Origine: invasi (Scanzano, Piana degli Albanesi) e sorgenti locali",
          "Profilo: acqua medio-dura, calcarea",
        ],
      },
      {
        heading: `Rischi specifici a ${name}`,
        paragraphs: [
          palazziAntichi
            ? `Negli edifici antecedenti al 1960 possono persistere tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend) il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima di destinare l'acqua a uso alimentare.`
            : `Anche negli edifici del dopoguerra o più moderni gli impianti condominiali originari, se mai sostituiti integralmente, possono favorire stagnazioni e accumuli: il primo getto del mattino, soprattutto dopo periodi di assenza, va sempre fatto scorrere prima dell'uso alimentare.`,
          HARDNESS_PARAGRAPH,
          "Se nel condominio è presente un impianto centralizzato di acqua calda sanitaria, vale la pena includere nel monitoraggio i parametri legati alla legionella, secondo le Linee guida del Ministero della Salute del 2015.",
        ],
        bullets: risks,
      },
      {
        heading: `Cosa controllare a casa a ${name}`,
        paragraphs: [
          `Per famiglie residenti a ${name} il pannello minimo ragionevole è: durezza totale, conducibilità, cloro residuo, microbiologica di base (Escherichia coli, coliformi totali, enterococchi) e, in edifici antecedenti al 1980, anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, da personale di un laboratorio qualificato.`,
          "Famiglie con neonati, donne in gravidanza o persone immunocompromesse possono ampliare il pannello con nitrati e arsenico. Dopo manutenzioni o ristrutturazioni degli impianti, è opportuno ripetere il controllo a distanza di 2-3 mesi.",
          CONTROLS_PARAGRAPH,
        ],
      },
      {
        heading: `Quando fare un'analisi a ${name}`,
        paragraphs: [
          `Trigger tipici a ${name}: arrivo di un neonato in casa, gravidanza, ristrutturazione di bagno o cucina con sostituzione di tubazioni, cambio nel sapore, nel colore o nell'odore dell'acqua, dubbi sull'età dell'impianto condominiale, compravendita immobiliare, oppure la scelta di passare dall'acqua in bottiglia a quella del rubinetto per ragioni ambientali ed economiche. Un'analisi di laboratorio, anche puntuale, fornisce una baseline su cui ragionare nel tempo.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Chi gestisce l'acqua del rubinetto a ${name}?`,
        a: "Il servizio idrico integrato di Palermo è gestito da AMAP S.p.A. (Azienda Meridionale Acque Palermo), che cura captazione, adduzione e distribuzione. I controlli ufficiali competono all'ASP di Palermo, il monitoraggio ambientale ad ARPA Sicilia.",
      },
      {
        q: `L'acqua del rubinetto a ${name} è dura?`,
        a: "Sì, l'acqua di Palermo è generalmente medio-dura e calcarea, per via dell'origine prevalente da invasi e sorgenti carsiche (Scanzano, Piana degli Albanesi). La durezza non rappresenta un rischio per la salute, ma incide su elettrodomestici e gusto.",
      },
      {
        q: palazziAntichi
          ? `A ${name} ci sono ancora tubazioni in piombo?`
          : `A ${name} ha senso analizzare i metalli pesanti?`,
        a: palazziAntichi
          ? "Negli edifici antecedenti al 1960 possono esserci tratti residui di piombo nei collegamenti privati interni. La rete pubblica AMAP non utilizza piombo: il rischio, dove esiste, è nei tratti privati a valle del contatore."
          : "Sì, soprattutto nei palazzi antecedenti agli anni '80 con impianti originari. Anche se la rete pubblica AMAP è conforme al D.Lgs. 18/2023, gli impianti privati interni possono incidere sui valori al rubinetto.",
      },
      {
        q: "Devo bollire l'acqua del rubinetto?",
        a: "No, in condizioni ordinarie l'acqua AMAP è potabile e controllata. Bollire elimina la microbiologia ma concentra eventuali sali e metalli per evaporazione, quindi non è una strategia preventiva utile contro le contaminazioni chimiche.",
      },
      {
        q: "Dove trovo i referti del gestore?",
        a: "AMAP S.p.A. pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per zona di distribuzione. I controlli ufficiali sono di competenza dell'ASP di Palermo, il monitoraggio ambientale di ARPA Sicilia.",
      },
    ],
    ctaVariant,
    ctaContext: `Analisi acqua del rubinetto a ${name} (Palermo) con un laboratorio qualificato: durezza, microbiologica e — nei palazzi antichi — verifica metalli (piombo, rame, nichel), in coerenza con il D.Lgs. 18/2023.`,
  };
}

export const NEIGHBORHOODS_PALERMO: NeighborhoodGuide[] = QUARTIERI.map(buildEntry);
