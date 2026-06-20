export interface CalculatorMeta {
  slug: string;
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  componentName: string;
}

export const CALCULATORS_META: CalculatorMeta[] = [
  {
    slug: 'durezza-convertitore',
    shortTitle: 'Convertitore durezza acqua: °F ↔ °dH ↔ ppm',
    metaDescription:
      "Converti la durezza dell'acqua tra gradi francesi (°F), gradi tedeschi (°dH), parti per milione (ppm) e grani per gallone (gpg).",
    searchKeywords: [
      'durezza acqua conversione',
      'gradi francesi gradi tedeschi',
      'convertitore durezza ppm',
      'conversione gpg ppm CaCO3',
      'unità misura durezza acqua',
    ],
    intro:
      "Le unità con cui si misura la durezza dell'acqua cambiano da Paese a Paese: in Italia si usano i gradi francesi (°F), in Germania i gradi tedeschi (°dH), nei rapporti tecnici internazionali ppm di carbonato di calcio (CaCO₃) e nei manuali statunitensi i grani per gallone (gpg). Il problema nasce quando il rapporto del laboratorio, l'etichetta dell'addolcitore o l'analisi sul sito del gestore usano scale diverse: senza una conversione affidabile è facile sbagliare la regolazione di un impianto o sottostimare il grado di calcare. Questo convertitore lavora in tempo reale: inserisci un valore in una qualsiasi unità e leggi gli altri tre, già arrotondati con la virgola decimale italiana.",
    componentName: 'DurezzaConverterCalc',
  },
  {
    slug: 'addolcitore-roi',
    shortTitle: 'Calcolatore ROI addolcitore: conviene davvero?',
    metaDescription:
      "Calcola il ritorno economico di un addolcitore d'acqua casalingo in 10 anni: costo iniziale, sale, risparmi su elettrodomestici, manutenzione.",
    searchKeywords: [
      'addolcitore conviene calcolo',
      'ROI addolcitore',
      'costo addolcitore 10 anni',
      'addolcitore acqua conviene casa',
      'risparmio addolcitore elettrodomestici',
    ],
    intro:
      "Un addolcitore d'acqua casalingo costa fra 800 e 2.000 € di installazione, più una spesa ricorrente di sale rigenerante e manutenzione annuale. La promessa è che, nel medio periodo, recuperi questi soldi grazie a caldaia, lavatrice e scaldabagno che durano di più, meno calcare nelle tubazioni e minor consumo di detergenti. Ma il calcolo dipende fortemente dalla durezza di partenza: con 15 °F è probabilmente uno spreco, con 45 °F può ripagarsi in pochi anni. Questo calcolatore prende i tuoi numeri reali (durezza, persone, costi locali) e ti dice in modo trasparente se, su un orizzonte tipico di 10 anni, l'investimento è economicamente sensato.",
    componentName: 'AddolcitoreROICalc',
  },
  {
    slug: 'bolletta-acqua-stima',
    shortTitle: 'Stima bolletta acqua: simulatore famiglia italiana',
    metaDescription:
      'Quanto pagherai di bolletta acqua all\'anno secondo numero persone, consumo medio e tariffa media regionale italiana.',
    searchKeywords: [
      'stima bolletta acqua',
      'calcolo bolletta idrica',
      'quanto costa acqua famiglia',
      'simulatore bolletta acqua Italia',
      'tariffa media acqua m3',
    ],
    intro:
      "La bolletta dell'acqua in Italia è una delle più variabili d'Europa: a parità di consumo si può pagare meno di 1 €/m³ in alcune zone del Nord-Est e oltre 3 €/m³ in alcune realtà del Centro-Sud. La maggior parte delle famiglie non sa quanto consuma davvero, perché la fattura unisce acquedotto, fognatura, depurazione e quote fisse in voci poco trasparenti. Questo simulatore parte dalle tue abitudini reali — quante persone in casa, quanti litri al giorno a testa, quale tariffa media nella tua regione — e stima il costo annuo e mensile. Mostra anche quanto costerebbe lo stesso volume comprato in bottiglia, così capisci subito il valore dell'acqua del rubinetto.",
    componentName: 'BollettaSimulatorCalc',
  },
  {
    slug: 'sodio-acqua-dieta',
    shortTitle: "Sodio nell'acqua: quanto contribuisce alla tua dieta?",
    metaDescription:
      "Calcola quanto sodio assumi dall'acqua che bevi e confrontalo col limite dietetico WHO (5 g sale/giorno).",
    searchKeywords: [
      'sodio acqua dieta',
      'quanto sodio acqua',
      'limite sodio acqua bere',
      'acqua iposodica calcolo',
      'sodio acqua rubinetto bollette',
    ],
    intro:
      "L'Organizzazione Mondiale della Sanità raccomanda di non superare 5 grammi di sale al giorno, corrispondenti a circa 2.000 mg di sodio. La quota più rilevante arriva dal cibo (pane, formaggi, salumi, snack), ma anche l'acqua dà un contributo: dipende molto dalla fonte, perché si passa da 1-2 mg/L delle acque oligominerali fino a 200 mg/L di alcune acque effervescenti naturali o di pozzi con elevata mineralizzazione. Per chi segue una dieta iposodica — ipertensione, scompenso, gravidanza — anche pochi milligrammi al litro contano. Questo calcolatore stima il sodio quotidiano combinando acqua e cibo, e ti dice quanto sei vicino al tetto raccomandato.",
    componentName: 'SodioCalc',
  },
  {
    slug: 'analisi-acqua-quando-rifare',
    shortTitle: "Quando rifare l'analisi acqua? Calcolatore personale",
    metaDescription:
      "Inserisci data ultima analisi, presenza di neonati, età edificio: il calcolatore ti dice se è il momento di ripetere l'analisi.",
    searchKeywords: [
      'quando rifare analisi acqua',
      'frequenza analisi acqua casa',
      'ogni quanto analizzare acqua rubinetto',
      'analisi acqua neonato',
      'analisi acqua PFAS arsenico',
    ],
    intro:
      "Non esiste una scadenza universale per l'analisi dell'acqua di casa: dipende dall'età dell'edificio (tubazioni in piombo o zincato pre-1970 si degradano nel tempo), dalla composizione della famiglia (neonati, gravidanza, anziani sono più sensibili a nitrati e contaminanti) e dalla zona geografica (PFAS in Veneto, arsenico nel Viterbese, nitrati in Pianura Padana). Anche una rete pubblica conforme può presentare problemi nell'ultimo tratto privato. Questo calcolatore pesa i tuoi fattori personali e suggerisce una data realistica per il prossimo controllo, evitando sia di sprecare soldi in analisi inutili sia di rimandare troppo quando ci sono indicatori di rischio.",
    componentName: 'AnalisiTimingCalc',
  },
];
