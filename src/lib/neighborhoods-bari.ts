import type { NeighborhoodGuide } from "./neighborhood-guides";

export const NEIGHBORHOODS_BARI: NeighborhoodGuide[] = [
  {
    slug: "bari-murat",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Murat",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Murat (Bari): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Murat, Bari (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua murat bari", "acqua rubinetto murat", "qualita acqua bari murat", "tubazioni piombo murat", "durezza acqua bari murat"],
    intro: "Murat è il quartiere ottocentesco a scacchiera che si estende a sud di Bari Vecchia, parte del Municipio I. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Murat il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Murat aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Tubazioni vetuste palazzi ottocenteschi", "Stagnazione condomini d'epoca", "Possibili tracce di piombo"],
    sections: [
      {
        heading: "L'acqua a Murat: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Murat, parte del Municipio I, la rete attraversa edifici a scacchiera di matrice ottocentesca: il quartiere borghese del piano Murattiano. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore. In molte zone di Bari permangono tubazioni distributive vetuste, oggetto di sostituzioni progressive."
        ]
      },
      {
        heading: "Rischi specifici a Murat",
        paragraphs: [
          "Negli edifici storici antecedenti al 1960 può capitare di trovare ancora tratti residui di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Murat è generalmente medio-bassa rispetto ad altre città italiane, ma può variare nel tempo in funzione delle fonti attive. Se la zona condominiale ha sistemi centralizzati di acqua calda, è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Murat",
        paragraphs: [
          "Per famiglie residenti a Murat consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In zone con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Murat",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Murat, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Murat?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei. La rete pubblica AQP è stata progressivamente bonificata." },
      { q: "L'acqua di Murat è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane, dipendendo dalle fonti attive di volta in volta nel sistema Sele-Calore. È normale e non pericolosa per la salute." },
      { q: "Devo bollire l'acqua del rubinetto a Murat?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Murat (Bari) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "bari-libertà",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Libertà",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Libertà (Bari): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Libertà, Bari (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, rischi piombo nei palazzi storici. Cosa controllare e quando.",
    searchKeywords: ["acqua liberta bari", "acqua rubinetto liberta", "qualita acqua bari liberta", "tubazioni piombo liberta", "durezza acqua bari liberta"],
    intro: "Libertà è un quartiere popolare e popoloso a ovest di Murat, parte del Municipio I, sviluppatosi a cavallo tra fine Ottocento e primo Novecento. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Libertà il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: gli edifici a tipologia popolare di inizio Novecento, oggi solo parzialmente ristrutturati, possono ospitare tratti di tubazioni datate. Sapere cosa controllare a Libertà aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Impianti datati case popolari storiche", "Possibile piombo in tratti residui", "Tubazioni distributive vetuste"],
    sections: [
      {
        heading: "L'acqua a Libertà: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Libertà, parte del Municipio I, la rete attraversa un tessuto urbano denso fatto di palazzine di inizio Novecento, case popolari storiche e nuovi inserimenti edilizi. I tratti pubblici a monte del contatore sono soggetti a manutenzione progressiva di AQP, ma in alcune strade del quartiere le tubazioni distributive risalgono ancora a impianti datati."
        ]
      },
      {
        heading: "Rischi specifici a Libertà",
        paragraphs: [
          "Negli edifici antecedenti al 1960 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati. È buona pratica far scorrere alcuni litri prima dell'uso alimentare, soprattutto al mattino.",
          "La durezza dell'acqua AQP a Libertà è generalmente medio-bassa, in linea con il resto della città. Nei condomini con impianti centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Libertà",
        paragraphs: [
          "Per famiglie residenti a Libertà consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Libertà",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Libertà, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Libertà?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni delle case popolari storiche. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Libertà è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Libertà?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Libertà (Bari) con un laboratorio qualificato: durezza, microbiologica, e — nei palazzi antichi — verifica metalli (piombo, rame, nichel).",
  },
  {
    slug: "bari-japigia",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Japigia",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Japigia (Bari): durezza, parametri, controlli",
    metaDescription: "Acqua del rubinetto a Japigia, Bari (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, palazzi dopoguerra. Cosa controllare e quando.",
    searchKeywords: ["acqua japigia bari", "acqua rubinetto japigia", "qualita acqua bari japigia", "durezza acqua japigia", "analisi acqua japigia"],
    intro: "Japigia è un quartiere residenziale a sud-est di Bari, parte del Municipio I, sviluppato in massima parte tra anni '60 e '80 con palazzine multipiano e edilizia residenziale pubblica. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Japigia gli impianti interni sono in larga parte coevi all'edificazione: tubazioni in acciaio, rame o materiali plastici di prima generazione che, dopo decenni di esercizio, possono mostrare i segni dell'invecchiamento. Sapere cosa controllare a Japigia aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni in rame anni '60-'80", "Stagnazione in condomini di grandi dimensioni", "Durezza variabile"],
    sections: [
      {
        heading: "L'acqua a Japigia: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Japigia, parte del Municipio I, la rete distribuisce ai grandi complessi residenziali del dopoguerra: condomini multipiano con lunghe colonne montanti e impianti coevi. I tratti pubblici di adduzione sono in genere relativamente recenti, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Japigia",
        paragraphs: [
          "Negli edifici degli anni '60-'80 le tubazioni interne sono in genere in acciaio zincato o rame: dopo molti anni di esercizio possono rilasciare quantità misurabili di rame o nichel, soprattutto in caso di acque leggermente aggressive o in punti di stagnazione. È buona pratica far scorrere alcuni litri prima dell'uso alimentare al mattino.",
          "La durezza dell'acqua AQP a Japigia è generalmente medio-bassa, in linea con il resto della città. Nei grandi condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Japigia",
        paragraphs: [
          "Per famiglie residenti a Japigia consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici dei primi anni '60 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Japigia",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Japigia, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Japigia?", a: "Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei. È più probabile trovare cessione di rame o nichel da tubazioni e raccordi datati." },
      { q: "L'acqua di Japigia è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Japigia?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Japigia (Bari) con un laboratorio qualificato: durezza, microbiologica, e verifica metalli da tubazioni interne dei condomini del dopoguerra.",
  },
  {
    slug: "bari-poggiofranco",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Poggiofranco",
    district: "Municipio II",
    shortTitle: "Acqua del rubinetto a Poggiofranco (Bari): durezza e parametri",
    metaDescription: "Acqua del rubinetto a Poggiofranco, Bari (Municipio II). Gestore Acquedotto Pugliese (AQP), durezza variabile, edifici residenziali moderni. Cosa controllare.",
    searchKeywords: ["acqua poggiofranco bari", "acqua rubinetto poggiofranco", "qualita acqua bari poggiofranco", "durezza acqua poggiofranco", "analisi acqua poggiofranco"],
    intro: "Poggiofranco è un quartiere residenziale del sud-ovest di Bari, parte del Municipio II, sviluppatosi soprattutto dagli anni '70 in poi con palazzine moderne e villini. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Poggiofranco il fattore più importante per la qualità a rubinetto è la condizione delle colonne montanti dei condomini e dell'ultimo tratto verso i singoli appartamenti, oltre a eventuali fenomeni di stagnazione. Sapere cosa controllare a Poggiofranco aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "moderno",
    typicalRisks: ["Tubazioni in rame condomini anni '70-'90", "Stagnazione in colonne montanti lunghe", "Durezza variabile"],
    sections: [
      {
        heading: "L'acqua a Poggiofranco: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Poggiofranco, parte del Municipio II, la rete distribuisce a un tessuto residenziale recente, fatto di palazzine moderne e villette unifamiliari. I tratti pubblici di AQP sono in genere recenti, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Poggiofranco",
        paragraphs: [
          "Nei condomini costruiti dagli anni '70 in poi le tubazioni interne sono in genere in rame o materiali plastici idonei: il rischio piombo è basso, mentre può presentarsi cessione di rame o nichel in caso di acque leggermente aggressive o di stagnazione prolungata.",
          "La durezza dell'acqua AQP a Poggiofranco è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Poggiofranco",
        paragraphs: [
          "Per famiglie residenti a Poggiofranco consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e — solo in caso di edifici dei primi anni '60 — anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Poggiofranco",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Poggiofranco, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Poggiofranco?", a: "Nei palazzi degli anni '70 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei. È più probabile trovare cessione di rame o nichel da raccordi e rubinetterie." },
      { q: "L'acqua di Poggiofranco è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Poggiofranco?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Poggiofranco (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli nei condomini residenziali moderni.",
  },
  {
    slug: "bari-carrassi",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Carrassi",
    district: "Municipio II",
    shortTitle: "Acqua del rubinetto a Carrassi (Bari): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Carrassi, Bari (Municipio II). Gestore Acquedotto Pugliese (AQP), durezza variabile, palazzi dopoguerra. Cosa controllare e quando.",
    searchKeywords: ["acqua carrassi bari", "acqua rubinetto carrassi", "qualita acqua bari carrassi", "durezza acqua carrassi", "analisi acqua carrassi"],
    intro: "Carrassi è un quartiere residenziale a sud di Bari, parte del Municipio II, sviluppatosi a partire dagli anni '50 con un'edilizia mista di palazzine e villini. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Carrassi il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono dei primi anni '60, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Carrassi aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni anni '50-'60", "Possibile piombo nei tratti più datati", "Stagnazione in colonne montanti"],
    sections: [
      {
        heading: "L'acqua a Carrassi: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Carrassi, parte del Municipio II, la rete distribuisce a un tessuto urbano misto, formato in larga parte tra anni '50 e '70. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Carrassi",
        paragraphs: [
          "Negli edifici dei primi anni '60 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Carrassi è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Carrassi",
        paragraphs: [
          "Per famiglie residenti a Carrassi consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Carrassi",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Carrassi, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Carrassi?", a: "Nei palazzi dei primi anni '60 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Dagli anni '70 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Carrassi è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Carrassi?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Carrassi (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli (piombo, rame, nichel) nei palazzi del dopoguerra.",
  },
  {
    slug: "bari-picone",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Picone",
    district: "Municipio II",
    shortTitle: "Acqua del rubinetto a Picone (Bari): durezza, parametri, controlli",
    metaDescription: "Acqua del rubinetto a Picone, Bari (Municipio II). Gestore Acquedotto Pugliese (AQP), durezza variabile, palazzi dopoguerra. Cosa controllare e quando.",
    searchKeywords: ["acqua picone bari", "acqua rubinetto picone", "qualita acqua bari picone", "durezza acqua picone", "analisi acqua picone"],
    intro: "Picone è un quartiere residenziale a sud di Bari, parte del Municipio II, sviluppatosi soprattutto tra anni '50 e '80 con palazzine e condomini di media densità. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Picone il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono dei primi anni '60, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Picone aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni anni '50-'70", "Possibile piombo nei tratti più datati", "Stagnazione weekend"],
    sections: [
      {
        heading: "L'acqua a Picone: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Picone, parte del Municipio II, la rete distribuisce a un tessuto urbano residenziale di media densità, formato in larga parte tra anni '50 e '80. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Picone",
        paragraphs: [
          "Negli edifici dei primi anni '60 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Picone è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Picone",
        paragraphs: [
          "Per famiglie residenti a Picone consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Picone",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Picone, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Picone?", a: "Nei palazzi dei primi anni '60 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Dagli anni '70 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Picone è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Picone?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Picone (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli (piombo, rame, nichel) nei palazzi del dopoguerra.",
  },
  {
    slug: "bari-san-pasquale",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "San Pasquale",
    district: "Municipio II",
    shortTitle: "Acqua del rubinetto a San Pasquale (Bari): durezza e parametri",
    metaDescription: "Acqua del rubinetto a San Pasquale, Bari (Municipio II). Gestore Acquedotto Pugliese (AQP), durezza variabile, palazzi misti. Cosa controllare e quando.",
    searchKeywords: ["acqua san pasquale bari", "acqua rubinetto san pasquale", "qualita acqua bari san pasquale", "durezza acqua san pasquale", "analisi acqua san pasquale"],
    intro: "San Pasquale è un quartiere residenziale di Bari a est di Murat, parte del Municipio II, con un tessuto edilizio misto compreso tra primi Novecento e anni '70. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come San Pasquale il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a San Pasquale aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Tubazioni in palazzi primo Novecento", "Possibile piombo nei tratti residui", "Stagnazione condomini d'epoca"],
    sections: [
      {
        heading: "L'acqua a San Pasquale: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A San Pasquale, parte del Municipio II, la rete distribuisce a un tessuto urbano misto, formato sia da palazzine di inizio Novecento che da condomini del dopoguerra. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a San Pasquale",
        paragraphs: [
          "Negli edifici antecedenti al 1960 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a San Pasquale è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a San Pasquale",
        paragraphs: [
          "Per famiglie residenti a San Pasquale consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a San Pasquale",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a San Pasquale, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a San Pasquale?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di San Pasquale è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a San Pasquale?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a San Pasquale (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli nei palazzi del primo Novecento e del dopoguerra.",
  },
  {
    slug: "bari-santo-spirito",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Santo Spirito",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto a Santo Spirito (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Santo Spirito, Bari (Municipio V). Gestore Acquedotto Pugliese (AQP), durezza variabile, frazione costiera. Cosa controllare e quando.",
    searchKeywords: ["acqua santo spirito bari", "acqua rubinetto santo spirito", "qualita acqua bari santo spirito", "durezza acqua santo spirito", "analisi acqua santo spirito"],
    intro: "Santo Spirito è una frazione costiera a nord-ovest di Bari, parte del Municipio V, con un'edilizia mista che spazia dalle vecchie palazzine sul lungomare alle nuove costruzioni residenziali e a numerose seconde case. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Santo Spirito incidono in modo particolare le stagnazioni nelle abitazioni utilizzate solo in estate e la presenza di tratti distributivi storici. Sapere cosa controllare a Santo Spirito aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Stagnazione marcata in seconde case", "Tubazioni vetuste in alcune strade", "Impianti misti"],
    sections: [
      {
        heading: "L'acqua a Santo Spirito: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Santo Spirito, parte del Municipio V, la rete distribuisce a un tessuto urbano costiero misto, con una quota significativa di abitazioni a uso stagionale. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Santo Spirito",
        paragraphs: [
          "Il rischio prevalente a Santo Spirito è la stagnazione: nelle seconde case lasciate chiuse per molti mesi l'acqua resta ferma a lungo nelle tubazioni, favorendo la cessione di eventuali metalli e l'accumulo di biofilm. Alla riapertura è opportuno far scorrere abbondantemente l'acqua prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Santo Spirito è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Santo Spirito",
        paragraphs: [
          "Per famiglie residenti a Santo Spirito consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. Per le seconde case riaperte a inizio stagione è particolarmente utile un controllo microbiologico, eventualmente ripetuto dopo 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Santo Spirito",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Santo Spirito, riapertura di una casa stagionale dopo l'inverno, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Santo Spirito?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni delle case più datate sul lungomare. Nei palazzi degli anni '60 in poi il piombo è raro." },
      { q: "L'acqua di Santo Spirito è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Santo Spirito?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Santo Spirito (Bari) con un laboratorio qualificato: microbiologica, durezza e verifica metalli, particolarmente utile nelle seconde case riaperte a inizio stagione.",
  },
  {
    slug: "bari-palese",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Palese",
    district: "Municipio V",
    shortTitle: "Acqua del rubinetto a Palese (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Palese, Bari (Municipio V). Gestore Acquedotto Pugliese (AQP), durezza variabile, frazione costiera. Cosa controllare e quando.",
    searchKeywords: ["acqua palese bari", "acqua rubinetto palese", "qualita acqua bari palese", "durezza acqua palese", "analisi acqua palese"],
    intro: "Palese è una frazione costiera a nord-ovest di Bari, parte del Municipio V, contigua all'aeroporto e contigua a Santo Spirito. Il tessuto edilizio è misto, con palazzine residenziali, case unifamiliari e abitazioni a uso stagionale. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Palese pesano la stagnazione nelle seconde case e la presenza di tratti distributivi storici in alcune zone. Sapere cosa controllare a Palese aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Stagnazione in abitazioni stagionali", "Tratti distributivi vetusti", "Impianti interni di varie epoche"],
    sections: [
      {
        heading: "L'acqua a Palese: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Palese, parte del Municipio V, la rete distribuisce a un tessuto urbano costiero, con una quota significativa di abitazioni a uso non continuativo. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Palese",
        paragraphs: [
          "Il rischio prevalente a Palese è la stagnazione nelle case usate solo per alcuni periodi dell'anno: l'acqua ferma a lungo nelle tubazioni può favorire la cessione di metalli e la formazione di biofilm. Alla riapertura è opportuno far scorrere abbondantemente l'acqua prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Palese è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Palese",
        paragraphs: [
          "Per famiglie residenti a Palese consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. Per le abitazioni a uso stagionale è particolarmente utile un controllo microbiologico alla riapertura."
        ]
      },
      {
        heading: "Quando fare un'analisi a Palese",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Palese, riapertura di una casa stagionale, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Palese?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni delle case più datate. Nei palazzi degli anni '60 in poi il piombo è raro." },
      { q: "L'acqua di Palese è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Palese?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Palese (Bari) con un laboratorio qualificato: microbiologica, durezza e verifica metalli, particolarmente utile nelle abitazioni a uso stagionale.",
  },
  {
    slug: "bari-san-paolo",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "San Paolo",
    district: "Municipio III",
    shortTitle: "Acqua del rubinetto a San Paolo (Bari): durezza e parametri",
    metaDescription: "Acqua del rubinetto a San Paolo, Bari (Municipio III). Gestore Acquedotto Pugliese (AQP), durezza variabile, grandi complessi anni '60-'80. Cosa controllare.",
    searchKeywords: ["acqua san paolo bari", "acqua rubinetto san paolo", "qualita acqua bari san paolo", "durezza acqua san paolo", "analisi acqua san paolo"],
    intro: "San Paolo è un grande quartiere di edilizia residenziale pubblica a ovest di Bari, parte del Municipio III, sviluppato in massima parte tra anni '60 e '80 con condomini multipiano di grandi dimensioni. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A San Paolo gli impianti interni sono in larga parte coevi all'edificazione: tubazioni in acciaio zincato o rame che dopo decenni possono mostrare i segni dell'invecchiamento. Sapere cosa controllare a San Paolo aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni acciaio zincato anni '60-'80", "Lunghe colonne montanti", "Stagnazione in alloggi temporaneamente non utilizzati"],
    sections: [
      {
        heading: "L'acqua a San Paolo: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A San Paolo, parte del Municipio III, la rete distribuisce a grandi complessi di edilizia residenziale pubblica con condomini multipiano e lunghe colonne montanti. I tratti pubblici di adduzione sono in genere relativamente recenti, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a San Paolo",
        paragraphs: [
          "Negli edifici degli anni '60-'80 le tubazioni interne sono in genere in acciaio zincato o rame: dopo molti anni di esercizio possono rilasciare quantità misurabili di rame, ferro o nichel, soprattutto in caso di acque leggermente aggressive o in punti di stagnazione. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a San Paolo è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a San Paolo",
        paragraphs: [
          "Per famiglie residenti a San Paolo consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a San Paolo",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a San Paolo, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a San Paolo?", a: "Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei. È più probabile trovare cessione di rame, ferro o nichel da tubazioni e raccordi datati." },
      { q: "L'acqua di San Paolo è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a San Paolo?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a San Paolo (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli da tubazioni interne nei grandi condomini.",
  },
  {
    slug: "bari-stanic",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Stanic",
    district: "Municipio III",
    shortTitle: "Acqua del rubinetto a Stanic (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Stanic, Bari (Municipio III). Gestore Acquedotto Pugliese (AQP), durezza variabile, area periferica industriale. Cosa controllare.",
    searchKeywords: ["acqua stanic bari", "acqua rubinetto stanic", "qualita acqua bari stanic", "durezza acqua stanic", "analisi acqua stanic"],
    intro: "Stanic è una zona periferica a nord-ovest di Bari, parte del Municipio III, originatasi attorno agli insediamenti industriali del dopoguerra e oggi caratterizzata da un tessuto misto con edilizia residenziale, attività produttive e infrastrutture. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Stanic incidono in particolare la presenza di tratti distributivi datati e la prossimità di aree produttive. Sapere cosa controllare a Stanic aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni distributive vetuste", "Prossimità ad aree produttive", "Impianti interni datati"],
    sections: [
      {
        heading: "L'acqua a Stanic: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Stanic, parte del Municipio III, la rete distribuisce a un'area periferica nata attorno alle attività industriali del dopoguerra. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, ma in alcune strade del quartiere le tubazioni distributive risalgono ancora a impianti datati."
        ]
      },
      {
        heading: "Rischi specifici a Stanic",
        paragraphs: [
          "Negli edifici dei primi anni '60 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni il primo getto d'acqua può contenere tracce di metalli rilasciati. È buona pratica far scorrere alcuni litri prima dell'uso alimentare. La prossimità ad aree produttive rende particolarmente sensato un controllo periodico.",
          "La durezza dell'acqua AQP a Stanic è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Stanic",
        paragraphs: [
          "Per famiglie residenti a Stanic consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Stanic",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Stanic, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Stanic?", a: "Nei palazzi dei primi anni '60 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Dagli anni '70 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Stanic è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Stanic?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Stanic (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli in un'area periferica con storia industriale.",
  },
  {
    slug: "bari-loseto",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Loseto",
    district: "Municipio IV",
    shortTitle: "Acqua del rubinetto a Loseto (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Loseto, Bari (Municipio IV). Gestore Acquedotto Pugliese (AQP), durezza variabile, frazione collinare. Cosa controllare e quando.",
    searchKeywords: ["acqua loseto bari", "acqua rubinetto loseto", "qualita acqua bari loseto", "durezza acqua loseto", "analisi acqua loseto"],
    intro: "Loseto è una frazione collinare a sud di Bari, parte del Municipio IV, di matrice storica rurale e oggi residenziale, con un tessuto edilizio fatto di vecchie case di campagna, palazzine recenti e villette unifamiliari. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Loseto incidono la natura periferica della distribuzione e la presenza di tratti di rete più datati in alcune strade. Sapere cosa controllare a Loseto aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Tratti di rete distributiva periferica", "Impianti interni di varie epoche", "Possibile cessione metalli in case rurali"],
    sections: [
      {
        heading: "L'acqua a Loseto: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Loseto, parte del Municipio IV, la rete distribuisce a un tessuto misto rurale-residenziale con vecchie masserie, case di campagna riconvertite e nuove costruzioni. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, ma in alcune strade del quartiere le condotte risalgono ancora a impianti più datati."
        ]
      },
      {
        heading: "Rischi specifici a Loseto",
        paragraphs: [
          "Nelle case più datate possono persistere tratti di tubazioni interne in materiali ormai non più ammessi: dopo lunghe stagnazioni il primo getto d'acqua può contenere tracce di metalli rilasciati. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Loseto è generalmente medio-bassa, in linea con il resto della città. Nelle abitazioni con sistemi autonomi di acqua calda è opportuno considerare anche un controllo periodico per i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Loseto",
        paragraphs: [
          "Per famiglie residenti a Loseto consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di case antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In abitazioni con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Loseto",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto, vendita o acquisto di un immobile a Loseto, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Loseto?", a: "Nelle case più datate possono esserci tratti residui in materiali oggi non più ammessi. Nei fabbricati degli anni '70 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Loseto è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Loseto?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Loseto (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli in una frazione periferica a tessuto misto.",
  },
  {
    slug: "bari-ceglie",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Ceglie del Campo",
    district: "Municipio IV",
    shortTitle: "Acqua del rubinetto a Ceglie del Campo (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Ceglie del Campo, Bari (Municipio IV). Gestore Acquedotto Pugliese (AQP), durezza variabile, ex comune autonomo. Cosa controllare.",
    searchKeywords: ["acqua ceglie del campo bari", "acqua rubinetto ceglie", "qualita acqua bari ceglie", "durezza acqua ceglie", "analisi acqua ceglie del campo"],
    intro: "Ceglie del Campo è un'antica frazione di Bari, parte del Municipio IV, ex comune autonomo con un nucleo storico ben riconoscibile e una crescita residenziale recente attorno al borgo. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Ceglie incidono la dualità tra centro storico, con impianti molto datati, e tessuto residenziale moderno. Sapere cosa controllare a Ceglie del Campo aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Impianti molto datati nel borgo storico", "Tratti distributivi vetusti", "Stagnazione in case poco utilizzate"],
    sections: [
      {
        heading: "L'acqua a Ceglie del Campo: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Ceglie del Campo, parte del Municipio IV, la rete distribuisce a un tessuto urbano che mescola un borgo storico antico e un'espansione residenziale recente. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Ceglie del Campo",
        paragraphs: [
          "Nel nucleo storico di Ceglie possono persistere tratti di tubazioni interne in piombo nei collegamenti privati delle case più antiche: dopo lunghe stagnazioni il primo getto d'acqua può contenere tracce di metalli rilasciati. È buona pratica far scorrere alcuni litri prima dell'uso alimentare. Nelle case di costruzione più recente questo rischio è basso.",
          "La durezza dell'acqua AQP a Ceglie del Campo è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Ceglie del Campo",
        paragraphs: [
          "Per famiglie residenti a Ceglie del Campo consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Ceglie del Campo",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Ceglie del Campo, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Ceglie del Campo?", a: "Nel nucleo storico, in case antecedenti al 1960, possono esserci tratti residui in piombo nei collegamenti privati. Nelle costruzioni più recenti è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Ceglie del Campo è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Ceglie del Campo?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Ceglie del Campo (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli, particolarmente utile nel nucleo storico.",
  },
  {
    slug: "bari-carbonara",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Carbonara",
    district: "Municipio IV",
    shortTitle: "Acqua del rubinetto a Carbonara (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Carbonara, Bari (Municipio IV). Gestore Acquedotto Pugliese (AQP), durezza variabile, ex comune autonomo. Cosa controllare e quando.",
    searchKeywords: ["acqua carbonara bari", "acqua rubinetto carbonara", "qualita acqua bari carbonara", "durezza acqua carbonara", "analisi acqua carbonara"],
    intro: "Carbonara è un'antica frazione di Bari, parte del Municipio IV, ex comune autonomo, con un nucleo storico e una significativa espansione residenziale del dopoguerra. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Carbonara incidono la dualità tra centro storico antico, con impianti molto datati, e quartieri residenziali del dopoguerra. Sapere cosa controllare a Carbonara aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Impianti datati nel nucleo storico", "Tubazioni anni '60-'70 nelle nuove zone", "Stagnazione in case poco utilizzate"],
    sections: [
      {
        heading: "L'acqua a Carbonara: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Carbonara, parte del Municipio IV, la rete distribuisce a un tessuto urbano che mescola un borgo storico e quartieri residenziali del dopoguerra. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Carbonara",
        paragraphs: [
          "Nel nucleo storico di Carbonara possono persistere tratti di tubazioni interne in piombo nei collegamenti privati delle case più antiche: dopo lunghe stagnazioni il primo getto d'acqua può contenere tracce di metalli rilasciati. È buona pratica far scorrere alcuni litri prima dell'uso alimentare. Nei palazzi del dopoguerra il rischio piombo è basso, ma può presentarsi cessione di rame o nichel.",
          "La durezza dell'acqua AQP a Carbonara è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Carbonara",
        paragraphs: [
          "Per famiglie residenti a Carbonara consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Carbonara",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Carbonara, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Carbonara?", a: "Nel nucleo storico, in case antecedenti al 1960, possono esserci tratti residui in piombo nei collegamenti privati. Nei palazzi del dopoguerra è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Carbonara è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Carbonara?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Carbonara (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli, particolarmente utile nel nucleo storico.",
  },
  {
    slug: "bari-torre-a-mare",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Torre a Mare",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Torre a Mare (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Torre a Mare, Bari (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, frazione costiera. Cosa controllare e quando.",
    searchKeywords: ["acqua torre a mare bari", "acqua rubinetto torre a mare", "qualita acqua torre a mare", "durezza acqua torre a mare", "analisi acqua torre a mare"],
    intro: "Torre a Mare è una frazione costiera a sud-est di Bari, parte del Municipio I, sviluppata attorno al borgo marinaro e con una forte componente di seconde case e abitazioni a uso stagionale. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Torre a Mare incidono in modo particolare la stagnazione nelle abitazioni utilizzate solo in estate e la presenza di tratti distributivi periferici. Sapere cosa controllare a Torre a Mare aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "misto",
    typicalRisks: ["Stagnazione marcata in seconde case", "Tratti distributivi periferici", "Impianti interni di varie epoche"],
    sections: [
      {
        heading: "L'acqua a Torre a Mare: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Torre a Mare, parte del Municipio I, la rete distribuisce a un tessuto urbano costiero con una forte presenza di abitazioni a uso stagionale. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Torre a Mare",
        paragraphs: [
          "Il rischio prevalente a Torre a Mare è la stagnazione: nelle seconde case lasciate chiuse per molti mesi l'acqua resta ferma a lungo nelle tubazioni, favorendo la cessione di eventuali metalli e l'accumulo di biofilm. Alla riapertura è opportuno far scorrere abbondantemente l'acqua prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Torre a Mare è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Torre a Mare",
        paragraphs: [
          "Per famiglie residenti a Torre a Mare consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. Per le seconde case riaperte a inizio stagione è particolarmente utile un controllo microbiologico."
        ]
      },
      {
        heading: "Quando fare un'analisi a Torre a Mare",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Torre a Mare, riapertura di una casa stagionale, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Torre a Mare?", a: "Nelle case più datate del borgo marinaro possono esserci tratti residui in piombo. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Torre a Mare è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Torre a Mare?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Torre a Mare (Bari) con un laboratorio qualificato: microbiologica, durezza e verifica metalli, particolarmente utile nelle seconde case.",
  },
  {
    slug: "bari-vecchia",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Bari Vecchia",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Bari Vecchia: cosa controllare",
    metaDescription: "Acqua del rubinetto a Bari Vecchia (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, palazzi storici e piombo nei tratti interni. Cosa controllare.",
    searchKeywords: ["acqua bari vecchia", "acqua rubinetto bari vecchia", "qualita acqua bari vecchia", "tubazioni piombo bari vecchia", "analisi acqua bari vecchia"],
    intro: "Bari Vecchia, il nucleo medievale racchiuso fra il porto e il lungomare, è la zona storica per antonomasia della città, parte del Municipio I. Il tessuto edilizio è in larghissima parte antecedente al 1900, con stratificazioni di impianti idrici nei secoli. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Bari Vecchia il fattore decisivo per la qualità a rubinetto è la condizione delle tubazioni interne dei palazzi storici, dove possono ancora trovarsi tratti datati. Sapere cosa controllare a Bari Vecchia aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "storico-pre1900",
    typicalRisks: ["Piombo da tubazioni interne pre-1960", "Stagnazione in palazzi con appartamenti poco utilizzati", "Tratti distributivi vetusti"],
    sections: [
      {
        heading: "L'acqua a Bari Vecchia: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Bari Vecchia la rete pubblica si innesta su un nucleo medievale stratificato nei secoli: palazzi e case che hanno conosciuto interventi successivi nel tempo, ma non sempre integrali. Possono permanere tratti di impianti interni (colonne, raccordi, ultimi metri verso il rubinetto) realizzati prima delle normative restrittive sull'uso del piombo in ambito idropotabile."
        ]
      },
      {
        heading: "Rischi specifici a Bari Vecchia",
        paragraphs: [
          "Il rischio principale a Bari Vecchia è il piombo: non si tratta di un problema della rete AQP, ma delle tubazioni interne ai palazzi più antichi, in cui il metallo può cedere lentamente all'acqua, soprattutto in caso di stagnazione notturna o periodi di assenza degli inquilini. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "Un secondo rischio è la stagnazione: appartamenti utilizzati saltuariamente, anche per uso turistico, lasciano l'acqua ferma a lungo nelle tubazioni. La durezza dell'acqua AQP è generalmente medio-bassa. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Bari Vecchia",
        paragraphs: [
          "Per famiglie residenti a Bari Vecchia consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e — priorità alta nei palazzi pre-1960 — piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato: il modo in cui si raccoglie il campione (first draw vs. acqua corrente) cambia il risultato sul piombo.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con ristrutturazioni recenti, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Bari Vecchia",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, ingresso in un appartamento storico, ripresa dell'utenza dopo lunghi periodi di assenza, vendita o acquisto di un immobile a Bari Vecchia, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Bari Vecchia?", a: "Nella rete pubblica AQP il piombo è stato progressivamente sostituito. Negli impianti interni dei palazzi storici, invece, possono permanere tratti realizzati prima delle normative restrittive: per saperlo con certezza serve un'analisi al rubinetto." },
      { q: "L'acqua di Bari Vecchia è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Bari Vecchia?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua di rubinetto a Bari Vecchia con focus su piombo e metalli da tubazioni interne dei palazzi storici del nucleo medievale.",
  },
  {
    slug: "bari-madonnella",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Madonnella",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Madonnella (Bari): durezza, piombo, controlli",
    metaDescription: "Acqua del rubinetto a Madonnella, Bari (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, palazzi otto-novecenteschi. Cosa controllare e quando.",
    searchKeywords: ["acqua madonnella bari", "acqua rubinetto madonnella", "qualita acqua bari madonnella", "tubazioni piombo madonnella", "analisi acqua madonnella"],
    intro: "Madonnella è un quartiere a sud-est di Murat, parte del Municipio I, a ridosso del lungomare. Il tessuto edilizio è prevalentemente otto-novecentesco, con palazzine di inizio Novecento e alcune nuove costruzioni. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Madonnella il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono antecedenti al 1960, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Madonnella aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "primo-novecento",
    typicalRisks: ["Tubazioni in palazzi otto-novecenteschi", "Possibile piombo nei tratti residui", "Stagnazione condomini d'epoca"],
    sections: [
      {
        heading: "L'acqua a Madonnella: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Madonnella, parte del Municipio I, la rete distribuisce a un tessuto urbano prevalentemente otto-novecentesco. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore. In alcune zone permangono tubazioni distributive vetuste."
        ]
      },
      {
        heading: "Rischi specifici a Madonnella",
        paragraphs: [
          "Negli edifici antecedenti al 1960 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati dalle pareti delle tubazioni. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Madonnella è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Madonnella",
        paragraphs: [
          "Per famiglie residenti a Madonnella consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Madonnella",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Madonnella, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Madonnella?", a: "In edifici antecedenti al 1960 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni. Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Madonnella è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Madonnella?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Madonnella (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli (piombo, rame, nichel) nei palazzi otto-novecenteschi.",
  },
  {
    slug: "bari-san-girolamo",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "San Girolamo",
    district: "Municipio III",
    shortTitle: "Acqua del rubinetto a San Girolamo (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a San Girolamo, Bari (Municipio III). Gestore Acquedotto Pugliese (AQP), durezza variabile, frazione costiera nord. Cosa controllare.",
    searchKeywords: ["acqua san girolamo bari", "acqua rubinetto san girolamo", "qualita acqua bari san girolamo", "durezza acqua san girolamo", "analisi acqua san girolamo"],
    intro: "San Girolamo è una frazione costiera a nord di Bari, parte del Municipio III, lungo il litorale nord-occidentale della città. Il tessuto edilizio è misto, con palazzine residenziali del dopoguerra e nuove costruzioni residenziali. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A San Girolamo incidono la posizione costiera e la presenza di abitazioni a uso non sempre continuativo. Sapere cosa controllare a San Girolamo aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni anni '60-'80 nei condomini", "Stagnazione in case poco utilizzate", "Tratti distributivi periferici"],
    sections: [
      {
        heading: "L'acqua a San Girolamo: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A San Girolamo, parte del Municipio III, la rete distribuisce a un tessuto urbano costiero del dopoguerra. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a San Girolamo",
        paragraphs: [
          "Negli edifici degli anni '60-'80 le tubazioni interne sono in genere in acciaio zincato o rame: dopo molti anni di esercizio possono rilasciare quantità misurabili di rame o nichel, soprattutto in punti di stagnazione. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a San Girolamo è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a San Girolamo",
        paragraphs: [
          "Per famiglie residenti a San Girolamo consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a San Girolamo",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a San Girolamo, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a San Girolamo?", a: "Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei. È più probabile trovare cessione di rame o nichel da tubazioni e raccordi datati." },
      { q: "L'acqua di San Girolamo è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a San Girolamo?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a San Girolamo (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli nei condomini del dopoguerra in zona costiera.",
  },
  {
    slug: "bari-fesca",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Fesca",
    district: "Municipio III",
    shortTitle: "Acqua del rubinetto a Fesca (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Fesca, Bari (Municipio III). Gestore Acquedotto Pugliese (AQP), durezza variabile, frazione costiera. Cosa controllare e quando.",
    searchKeywords: ["acqua fesca bari", "acqua rubinetto fesca", "qualita acqua bari fesca", "durezza acqua fesca", "analisi acqua fesca"],
    intro: "Fesca è una zona costiera a nord-ovest di Bari, parte del Municipio III, contigua a San Girolamo. Il tessuto edilizio è prevalentemente del dopoguerra, con palazzine e villini e una significativa componente di abitazioni a uso non sempre continuativo. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. A Fesca incidono la posizione costiera periferica e la presenza di tratti distributivi storici in alcune strade. Sapere cosa controllare a Fesca aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Tubazioni interne dopoguerra", "Stagnazione in case poco utilizzate", "Tratti distributivi periferici"],
    sections: [
      {
        heading: "L'acqua a Fesca: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Fesca, parte del Municipio III, la rete distribuisce a un tessuto urbano costiero periferico, formato in larga parte tra anni '60 e '80. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore."
        ]
      },
      {
        heading: "Rischi specifici a Fesca",
        paragraphs: [
          "Negli edifici degli anni '60-'80 le tubazioni interne sono in genere in acciaio zincato o rame: dopo molti anni di esercizio possono rilasciare quantità misurabili di rame o nichel, soprattutto in punti di stagnazione. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Fesca è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Fesca",
        paragraphs: [
          "Per famiglie residenti a Fesca consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Fesca",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Fesca, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Fesca?", a: "Nei palazzi degli anni '60 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei. È più probabile trovare cessione di rame o nichel da tubazioni e raccordi datati." },
      { q: "L'acqua di Fesca è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Fesca?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "completa",
    ctaContext: "Analisi acqua del rubinetto a Fesca (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli nei condomini costieri del dopoguerra.",
  },
  {
    slug: "bari-marconi",
    citySlug: "bari",
    cityName: "Bari",
    neighborhoodName: "Marconi",
    district: "Municipio I",
    shortTitle: "Acqua del rubinetto a Marconi (Bari): qualità e parametri",
    metaDescription: "Acqua del rubinetto a Marconi, Bari (Municipio I). Gestore Acquedotto Pugliese (AQP), durezza variabile, edilizia mista del dopoguerra. Cosa controllare.",
    searchKeywords: ["acqua marconi bari", "acqua rubinetto marconi", "qualita acqua bari marconi", "durezza acqua marconi", "analisi acqua marconi bari"],
    intro: "Marconi è un quartiere a nord-ovest di Bari, parte del Municipio I, sviluppatosi tra anni '50 e '70 in zona portuale, con un tessuto urbano misto tra edilizia popolare e residenziale. L'acqua del rubinetto distribuita da Acquedotto Pugliese (AQP) arriva qui prevalentemente dagli schemi idrici del Sele-Calore in Basilicata, trasportata in Puglia attraverso lunghe gallerie: il profilo è tipicamente a durezza variabile (mediamente medio-bassa) e con qualità chimica buona alla partenza. In quartieri come Marconi il fattore più importante per la qualità a rubinetto è l'età degli impianti condominiali e dei tratti privati interni: dove gli edifici sono dei primi anni '60, possono persistere tratti di tubazioni in materiali datati che, in caso di stagnazione, possono rilasciare metalli. Sapere cosa controllare a Marconi aiuta a sfruttare l'acqua del rubinetto in sicurezza, riducendo lo spreco di plastica dell'acqua in bottiglia.",
    buildingAge: "dopoguerra",
    typicalRisks: ["Impianti datati nelle case popolari", "Tubazioni anni '50-'70", "Prossimità ad area portuale"],
    sections: [
      {
        heading: "L'acqua a Marconi: contesto urbano e tubazioni",
        paragraphs: [
          "Il gestore del servizio idrico integrato di Bari è Acquedotto Pugliese (AQP), che cura captazione, adduzione e distribuzione dell'acqua potabile in città. La rete barese è alimentata prevalentemente da acque trasportate dalla Basilicata, attraverso gli schemi del Sele-Calore: una specificità storica della Puglia, che dipende da fonti extraregionali per la maggior parte del proprio fabbisogno.",
          "A Marconi, parte del Municipio I, la rete distribuisce a un tessuto urbano misto del dopoguerra, in zona portuale. I tratti pubblici a monte del contatore sono soggetti a manutenzione periodica di AQP, mentre gli impianti interni dei condomini ricadono sotto la responsabilità dell'amministratore. In alcune strade del quartiere permangono tubazioni distributive vetuste."
        ]
      },
      {
        heading: "Rischi specifici a Marconi",
        paragraphs: [
          "Negli edifici dei primi anni '60 possono persistere tratti di tubazioni in piombo nei collegamenti privati interni: dopo lunghe stagnazioni (notte, weekend), il primo getto d'acqua può contenere tracce di metalli rilasciati. È buona pratica far scorrere alcuni litri prima dell'uso alimentare.",
          "La durezza dell'acqua AQP a Marconi è generalmente medio-bassa, in linea con il resto della città. Nei condomini con sistemi centralizzati di acqua calda è opportuno includere nel monitoraggio i parametri legati alla legionella, secondo le linee guida del Ministero della Salute (2015)."
        ]
      },
      {
        heading: "Cosa controllare a casa a Marconi",
        paragraphs: [
          "Per famiglie residenti a Marconi consigliamo come pannello minimo: durezza totale, conducibilità, cloro residuo, microbiologica di base (E. coli, coliformi, enterococchi), e in caso di edifici antecedenti al 1980 anche piombo, rame e nichel. Il prelievo va eseguito con metodi validati conformi a norme tecniche, possibilmente da personale di un laboratorio qualificato.",
          "Chi ha neonati o donne in gravidanza può aggiungere nitrati e arsenico al pacchetto. In stabili con manutenzioni recenti o ristrutturazioni, vale la pena ripetere il controllo a distanza di 2-3 mesi."
        ]
      },
      {
        heading: "Quando fare un'analisi a Marconi",
        paragraphs: [
          "Trigger tipici: arrivo di un neonato in casa, gravidanza, ristrutturazione del bagno o della cucina con sostituzione tubazioni, cambio nel sapore o nel colore dell'acqua, dubbio sull'età dell'impianto condominiale, vendita o acquisto di un immobile a Marconi, o semplicemente passare dal consumo di acqua in bottiglia a quella del rubinetto per ragioni ambientali."
        ]
      }
    ],
    faqs: [
      { q: "Le tubazioni in piombo sono ancora presenti a Marconi?", a: "Nei palazzi dei primi anni '60 possono esserci tratti residui in piombo, soprattutto nei collegamenti privati interni delle case popolari. Dagli anni '70 in poi il piombo è raro, sostituito da rame, acciaio o materiali plastici idonei." },
      { q: "L'acqua di Marconi è dura?", a: "L'acqua AQP a Bari ha durezza variabile, generalmente medio-bassa rispetto ad altre città italiane. Dipende dalle fonti attive di volta in volta nel sistema Sele-Calore." },
      { q: "Devo bollire l'acqua del rubinetto a Marconi?", a: "No, in condizioni ordinarie l'acqua di AQP è potabile e controllata. Bollire l'acqua elimina la microbiologia ma concentra eventuali metalli o sali per evaporazione, quindi non è una buona strategia preventiva contro contaminazioni chimiche." },
      { q: "Dove trovo i referti del gestore?", a: "Acquedotto Pugliese pubblica i dati di qualità dell'acqua sul proprio sito istituzionale, suddivisi per comune e zona di distribuzione. Controlli ufficiali sono inoltre svolti da ATS Bari e ARPA Puglia." }
    ],
    ctaVariant: "metalli-pesanti",
    ctaContext: "Analisi acqua del rubinetto a Marconi (Bari) con un laboratorio qualificato: durezza, microbiologica e verifica metalli (piombo, rame, nichel) nei palazzi del dopoguerra in zona portuale.",
  },
];
