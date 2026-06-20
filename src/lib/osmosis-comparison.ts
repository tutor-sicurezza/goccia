export interface OsmosisSystemPros {
  items: string[];
}
export interface OsmosisSystemCons {
  items: string[];
}

export interface OsmosisSystem {
  id: string;
  rank: number;
  itName: string;
  type: 'sottolavello' | 'portatile' | 'commerciale';
  priceRange: string;
  productionRate: string;
  wasteRatio: string;
  membranePermeate: string;
  bestFor: string[];
  notIdealFor: string[];
  pros: string[];
  cons: string[];
  maintenance: string;
  filterStages: number;
  installationDifficulty: 'facile' | 'media' | 'professionale';
  description: string;
}

export interface ComparisonRow {
  label: string;
  values: { systemId: string; value: string }[];
}

export const OSMOSIS_SYSTEMS: OsmosisSystem[] = [
  {
    id: 'sottolavello-classico',
    rank: 1,
    itName: 'Sottolavello classico con serbatoio',
    type: 'sottolavello',
    priceRange: '200-450 €',
    productionRate: '180-250 L/giorno',
    wasteRatio: '3:1 o 4:1 (3-4 L scarto per 1 L pure)',
    membranePermeate: '97-98% sali disciolti, metalli pesanti, PFAS, nitrati',
    bestFor: [
      'Famiglie da 2 a 4 persone con consumo da cucina',
      'Chi cerca un primo impianto a budget contenuto',
      'Abitazioni con buona pressione di linea (2,5-3 bar)',
      'Utenti che accettano un piccolo serbatoio sotto il lavello',
    ],
    notIdealFor: [
      'Chi non tollera il principio del serbatoio di accumulo',
      'Cucine con mobile sottolavello già pieno di altri impianti',
      'Chi considera prioritario il risparmio idrico',
    ],
    pros: [
      'Costo di acquisto contenuto e ricambi diffusi sul mercato',
      'Manutenzione semplice e prevedibile (cartucce annuali)',
      'Permeato con qualità chimica molto elevata',
      'Tecnologia matura, decine di produttori compatibili tra loro',
      'Erogazione costante grazie al serbatoio pressurizzato',
    ],
    cons: [
      'Il serbatoio contiene acqua "ferma" che richiede sanificazioni periodiche per evitare ricrescita batterica',
      'Rapporto scarto/permeato elevato: si scaricano 3-4 L per ogni litro reso potabile',
      'Il serbatoio occupa spazio significativo (volume 8-12 L)',
      'Erogazione lenta dopo svuotamento del serbatoio (attesa di ripristino)',
    ],
    maintenance:
      'Sostituzione cartucce pre-filtro ogni 6-12 mesi, membrana RO ogni 24-36 mesi, sanificazione serbatoio annuale. Costo medio annuo 60-120 € di ricambi.',
    filterStages: 5,
    installationDifficulty: 'media',
    description:
      "Il sistema sottolavello con serbatoio rappresenta la configurazione storica dell'osmosi inversa domestica. L'acqua di rete attraversa una sequenza di pre-filtri (sedimenti, carbone attivo) che proteggono la membrana semipermeabile, viene spinta dalla pressione di linea contro la membrana ad osmosi inversa, e il permeato viene raccolto in un serbatoio pressurizzato a vescica (in genere 8-12 litri). Quando si apre il rubinetto dedicato l'acqua esce dal serbatoio sotto pressione, garantendo una portata di erogazione gradevole anche se la produzione effettiva della membrana è lenta (8-15 L/ora). A valle del serbatoio è quasi sempre presente un post-filtro a carbone che rifinisce sapore e odore. Alcuni modelli integrano un remineralizzatore opzionale per riportare in soluzione una piccola quota di calcio e magnesio. La tecnologia è collaudata, le parti di ricambio sono standardizzate e i costi di esercizio sono i più bassi della categoria. Il limite strutturale è duplice: il serbatoio costituisce un volume d'acqua stagnante che, senza sanificazione periodica, può ospitare biofilm; e il rapporto di scarto resta sfavorevole (3:1 o 4:1) perché la membrana lavora a bassa pressione e bassa efficienza. Per una famiglia di 2-4 persone che usa l'osmosi solo per bere e cucinare resta comunque la scelta con il miglior rapporto qualità/prezzo.",
  },
  {
    id: 'sottolavello-senza-serbatoio',
    rank: 2,
    itName: 'Sottolavello senza serbatoio on-demand',
    type: 'sottolavello',
    priceRange: '450-900 €',
    productionRate: '600-1200 L/giorno (alta portata istantanea)',
    wasteRatio: '1:1 o 2:1 (membrana ad alta efficienza)',
    membranePermeate: '98-99% sali disciolti, metalli pesanti, PFAS, nitrati',
    bestFor: [
      'Chi vuole eliminare il serbatoio per ragioni igieniche',
      'Cucine con mobile sottolavello stretto o già occupato',
      'Famiglie medio-grandi (4-6 persone) con consumo elevato',
      'Chi preferisce un design compatto e moderno',
      'Utenti attenti allo spreco idrico ma non disposti a investire nella categoria zero-waste',
    ],
    notIdealFor: [
      'Abitazioni con pressione di linea molto bassa (< 2 bar)',
      'Chi cerca il prezzo più basso possibile',
      'Chi non vuole dipendere da una pompa elettrica',
    ],
    pros: [
      'Nessun serbatoio di accumulo, quindi nessuna acqua stagnante',
      'Erogazione istantanea ad alta portata (1-2 L/min) tipo rubinetto normale',
      'Ingombro ridotto sotto il lavello',
      'Membrane ad alta efficienza con rapporto di scarto migliore (1:1 o 2:1)',
      'Display digitali su molti modelli per monitorare TDS e vita dei filtri',
    ],
    cons: [
      'Prezzo iniziale circa doppio rispetto alla categoria base',
      'Richiede pompa booster elettrica (consumo di rete e dipendenza dalla corrente)',
      'Manutenzione più delicata: la membrana CCRO è meno tollerante a sedimenti residui',
      'Alcuni modelli hanno cartucce proprietarie costose',
    ],
    maintenance:
      'Sostituzione cartucce composite ogni 12 mesi, membrana ogni 24-36 mesi. Nessuna sanificazione serbatoio. Costo medio annuo 100-180 €.',
    filterStages: 4,
    installationDifficulty: 'media',
    description:
      "I sistemi sottolavello senza serbatoio (detti anche tankless o on-demand) sono l'evoluzione architetturale dell'osmosi inversa domestica. La differenza chiave è la presenza di una pompa booster elettrica che porta la pressione di esercizio sulla membrana a 6-8 bar (contro i 2-3 bar della linea idrica), consentendo l'uso di membrane CCRO (Counter Current Reverse Osmosis) ad alta portata che producono fino a 1200 L/giorno. Questa produzione elevata rende inutile l'accumulo: l'acqua viene prodotta nel momento in cui si apre il rubinetto, con un piccolissimo polmone interno (pochi decilitri) per assorbire i transitori di avvio. L'eliminazione del serbatoio risolve due problemi storici dell'osmosi domestica: l'occupazione di spazio nel mobile e la presenza di acqua ferma che richiede sanificazioni. Il rapporto di scarto migliora sensibilmente (1:1 o 2:1) grazie alla pressione di lavoro più alta. In compenso il sistema dipende dalla corrente elettrica, ha un prezzo di acquisto superiore e i ricambi sono spesso cartucce composite multi-stadio proprietarie. La qualità del permeato è eccellente (98-99% di reiezione) e molti modelli integrano display TDS che permettono di verificare in tempo reale il funzionamento della membrana. È la categoria che sta progressivamente sostituendo il sottolavello classico nelle nuove installazioni.",
  },
  {
    id: 'portatile',
    rank: 3,
    itName: 'Portatile da appoggio sul lavello',
    type: 'portatile',
    priceRange: '150-350 €',
    productionRate: '100-180 L/giorno',
    wasteRatio: '3:1 o 4:1',
    membranePermeate: '96-98% sali disciolti, metalli pesanti, PFAS',
    bestFor: [
      'Chi vive in affitto e non può modificare il mobile sottolavello',
      'Single o coppie con consumo limitato',
      'Chi vuole testare la tecnologia prima di investire in un fisso',
      'Camper, case vacanza, soggiorni temporanei',
      'Utenti con bassa manualità che preferiscono nessuna installazione idraulica',
    ],
    notIdealFor: [
      'Famiglie numerose (la produzione è limitata)',
      'Cucine con piano lavoro già affollato',
      'Chi cerca la massima qualità chimica del permeato',
    ],
    pros: [
      'Nessuna installazione: si collega al rubinetto con un raccordo a deviatore',
      'Trasportabile in caso di trasloco',
      'Prezzo di ingresso basso',
      'Spesso integra display, TDS-meter e indicatori di sostituzione filtri',
      'Riduzione fiscale di ingombro nel mobile sottolavello',
    ],
    cons: [
      'Occupa spazio visibile sul piano cucina',
      'Estetica spesso meno curata di un sottolavello fisso',
      'Produzione oraria inferiore (5-8 L/ora)',
      'Tubazioni esposte che possono essere urtate o piegate',
    ],
    maintenance:
      'Sostituzione cartucce composite ogni 6-12 mesi (modelli quick-change). Costo medio annuo 80-140 €. Membrana sostituita ogni 24 mesi.',
    filterStages: 4,
    installationDifficulty: 'facile',
    description:
      "I sistemi portatili da appoggio rappresentano la categoria che ha aperto l'osmosi inversa al mercato di massa, grazie all'eliminazione della barriera dell'installazione. Il sistema è racchiuso in un mobiletto autonomo che si appoggia sul piano del lavello e si collega al rubinetto della cucina attraverso un raccordo deviatore (la classica leva che convoglia l'acqua o al rubinetto normale o all'osmosi). All'interno il sistema replica la stessa architettura di un sottolavello compatto: pre-filtri, membrana RO, post-carbone e un piccolo polmone di accumulo o, nei modelli più recenti, erogazione on-demand con pompa interna. La produzione oraria è limitata (5-8 L/ora) perché la membrana è di taglio piccolo, ma l'autonomia giornaliera resta sufficiente per single, coppie o famiglie con consumo medio-basso. Il vantaggio principale è la trasportabilità: chi vive in affitto, in case vacanza o prevede traslochi può portare con sé l'impianto. Il prezzo di ingresso è basso, l'installazione è alla portata di chiunque sappia avvitare un raccordo. Gli svantaggi sono di natura estetica e funzionale: il dispositivo occupa spazio visibile, le tubazioni restano in vista, e la qualità chimica del permeato è leggermente inferiore a un sottolavello dedicato per via delle dimensioni ridotte della membrana. È una scelta ragionevole per chi non può o non vuole affrontare l'installazione fissa.",
  },
  {
    id: 'flow-restrictor-zero-waste',
    rank: 4,
    itName: 'Sottolavello ad alta efficienza con recircolo (zero-waste)',
    type: 'sottolavello',
    priceRange: '700-1500 €',
    productionRate: '300-500 L/giorno',
    wasteRatio: '1:1 o quasi 0 (recircolo del concentrato)',
    membranePermeate: '98-99% sali disciolti, metalli pesanti, PFAS, nitrati',
    bestFor: [
      'Famiglie attente al consumo idrico e impatto ambientale',
      'Zone con problemi ricorrenti di siccità o razionamenti',
      'Palazzine condominiali con pressione di linea bassa (la pompa compensa)',
      'Utenti che pagano l\'acqua a consumo reale (bolletta variabile)',
      'Chi vuole il massimo recupero idrico senza compromessi sulla qualità',
    ],
    notIdealFor: [
      'Chi cerca un impianto economico',
      'Utenti che non vogliono dipendere da assistenza tecnica per la manutenzione',
      'Installazioni fai-da-te di chi non ha competenze idrauliche',
    ],
    pros: [
      'Recupero idrico massimo: scarto ridotto fino al rapporto 1:1 o inferiore',
      'Membrana ad alta reiezione, qualità permeato eccellente',
      'Numero di stadi più alto, filtrazione più raffinata',
      'Spesso include UV finale per sicurezza microbiologica aggiuntiva',
      'Dimensionamento adatto anche a famiglie di 5-6 persone',
    ],
    cons: [
      'Costo iniziale elevato (700-1500 €)',
      'Installazione richiede tecnico qualificato (collegamenti scarico-recircolo, elettrici)',
      'Manutenzione più frequente delle cartucce di pre-filtrazione (il concentrato concentra le impurità)',
      'Consumo elettrico per pompa e UV non trascurabile su uso continuativo',
    ],
    maintenance:
      'Cartucce pre-filtro ogni 6 mesi (carico più elevato), membrana ogni 24-36 mesi, lampada UV ogni 12 mesi. Costo medio annuo 150-250 €.',
    filterStages: 7,
    installationDifficulty: 'professionale',
    description:
      "I sistemi ad alta efficienza con recircolo, talvolta chiamati commercialmente \"zero-waste\", sono progettati attorno a un obiettivo specifico: minimizzare il rapporto di scarto idrico, che è storicamente il punto debole dell'osmosi inversa. La membrana RO, per principio fisico, separa il permeato dal concentrato; in un sistema tradizionale il concentrato finisce direttamente nello scarico. In un sistema zero-waste una pompa di recircolo riporta parte del concentrato a monte della membrana, permettendole di lavorare con un volume effettivamente filtrato superiore al volume di acqua prelevata dalla rete. Questo riduce il rapporto di scarto a 1:1, e in alcune configurazioni con flow restrictor dinamico avanzato anche a 0,5:1. Per evitare l'accumulo di sali nel circuito di recircolo, un controllo elettronico monitora la conducibilità e attiva uno spurgo periodico. Il pacchetto include in genere 6-7 stadi di filtrazione, una pompa booster, una lampada UV di sicurezza finale e un display di monitoraggio. Il prezzo riflette la complessità: 700-1500 € per l'impianto, più l'installazione professionale. La manutenzione è più frequente perché le cartucce di pre-filtro lavorano su un carico maggiore. È la scelta di chi vuole la massima efficienza idrica e accetta il costo iniziale più alto in cambio di una bolletta dell'acqua sensibilmente più bassa nel tempo.",
  },
  {
    id: 'commerciale-tank',
    rank: 5,
    itName: 'Commerciale tank-based per uso professionale',
    type: 'commerciale',
    priceRange: '1500-4000 €',
    productionRate: '1500-5000 L/giorno',
    wasteRatio: '2:1 o 1:1',
    membranePermeate: '98-99% sali disciolti, metalli pesanti, PFAS, nitrati',
    bestFor: [
      'Ristoranti con 30-100 coperti al giorno',
      'Bar e caffetterie ad alto consumo',
      'B&B, agriturismi, case vacanza con ricambio ospiti',
      'Piccoli laboratori alimentari (pasticcerie, gelaterie, panifici)',
      'Uffici grandi (50+ persone) con erogatori multipli',
    ],
    notIdealFor: [
      'Uso esclusivamente domestico (sovradimensionato)',
      'Locali con bassa rotazione (acqua di accumulo che ristagna)',
      'Chi non può sostenere un contratto di manutenzione professionale',
    ],
    pros: [
      'Produzione adeguata a flussi commerciali costanti',
      'Serbatoio di accumulo di grande volume (50-200 L) con erogazione multipla simultanea',
      'Componentistica industriale, longevità superiore (10+ anni)',
      'Possibilità di integrare addolcimento a monte e remineralizzazione a valle',
      'Spesso conforme a normative HACCP per uso alimentare',
    ],
    cons: [
      'Investimento iniziale elevato (1500-4000 €)',
      'Richiede installazione e manutenzione contrattualizzata con tecnico specializzato',
      'Ingombro significativo, serve un vano tecnico o un locale tecnico',
      'Consumo elettrico continuativo della pompa',
    ],
    maintenance:
      'Contratto di manutenzione annuale con tecnico: sostituzione cartucce ogni 6 mesi, membrana ogni 24 mesi, sanificazione semestrale del serbatoio, controllo HACCP. Costo medio annuo 300-600 €.',
    filterStages: 7,
    installationDifficulty: 'professionale',
    description:
      "I sistemi commerciali tank-based sono pensati per attività professionali in cui il consumo giornaliero di acqua trattata supera abbondantemente quello domestico e dove la continuità di erogazione è essenziale. Architettonicamente sono dimensionati su pompe booster di potenza maggiore (300-600 W), membrane RO di taglio industriale (membrane da 200 GPD o multiple in parallelo) e serbatoi di accumulo che vanno da 50 a 200 litri, spesso atossici e certificati per contatto alimentare. Il serbatoio è essenziale in contesto commerciale perché permette di servire più punti di erogazione contemporaneamente (lavabicchieri, macchina del caffè, rubinetto cucina, erogatori sala) senza cali di pressione. La filtrazione è multi-stadio (tipicamente 6-7 stadi) con possibilità di pre-trattamento dedicato (addolcimento per zone con acqua molto dura, decloraminazione per acquedotti che usano clorammine). Il rapporto di scarto è ottimizzato a 1:1 o 2:1. La componentistica è di qualità industriale, con valvole, raccordi e materiali pensati per durare oltre dieci anni di esercizio continuativo. Il prezzo iniziale (1500-4000 €) include in genere installazione e primo collaudo; la manutenzione è quasi sempre legata a un contratto annuale che, per attività con obblighi HACCP, comprende anche analisi periodiche dell'acqua in uscita. Per uso esclusivamente domestico è sovradimensionato; per piccole attività commerciali è la categoria di riferimento.",
  },
];

export const OSMOSIS_COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: 'Prezzo iniziale',
    values: [
      { systemId: 'sottolavello-classico', value: '200-450 €' },
      { systemId: 'sottolavello-senza-serbatoio', value: '450-900 €' },
      { systemId: 'portatile', value: '150-350 €' },
      { systemId: 'flow-restrictor-zero-waste', value: '700-1500 €' },
      { systemId: 'commerciale-tank', value: '1500-4000 €' },
    ],
  },
  {
    label: 'Produzione L/giorno',
    values: [
      { systemId: 'sottolavello-classico', value: '180-250 L' },
      { systemId: 'sottolavello-senza-serbatoio', value: '600-1200 L' },
      { systemId: 'portatile', value: '100-180 L' },
      { systemId: 'flow-restrictor-zero-waste', value: '300-500 L' },
      { systemId: 'commerciale-tank', value: '1500-5000 L' },
    ],
  },
  {
    label: 'Spreco acqua (scarto:permeato)',
    values: [
      { systemId: 'sottolavello-classico', value: '3:1 o 4:1' },
      { systemId: 'sottolavello-senza-serbatoio', value: '1:1 o 2:1' },
      { systemId: 'portatile', value: '3:1 o 4:1' },
      { systemId: 'flow-restrictor-zero-waste', value: '1:1 o inferiore' },
      { systemId: 'commerciale-tank', value: '1:1 o 2:1' },
    ],
  },
  {
    label: 'Stadi di filtrazione',
    values: [
      { systemId: 'sottolavello-classico', value: '5 stadi' },
      { systemId: 'sottolavello-senza-serbatoio', value: '4 stadi compositi' },
      { systemId: 'portatile', value: '4 stadi' },
      { systemId: 'flow-restrictor-zero-waste', value: '7 stadi + UV' },
      { systemId: 'commerciale-tank', value: '7 stadi industriali' },
    ],
  },
  {
    label: 'Difficoltà installazione',
    values: [
      { systemId: 'sottolavello-classico', value: 'Media (idraulico consigliato)' },
      { systemId: 'sottolavello-senza-serbatoio', value: 'Media (richiede presa elettrica)' },
      { systemId: 'portatile', value: 'Facile (autoinstallazione)' },
      { systemId: 'flow-restrictor-zero-waste', value: 'Professionale' },
      { systemId: 'commerciale-tank', value: 'Professionale (locale tecnico)' },
    ],
  },
  {
    label: 'Manutenzione annua',
    values: [
      { systemId: 'sottolavello-classico', value: '60-120 €' },
      { systemId: 'sottolavello-senza-serbatoio', value: '100-180 €' },
      { systemId: 'portatile', value: '80-140 €' },
      { systemId: 'flow-restrictor-zero-waste', value: '150-250 €' },
      { systemId: 'commerciale-tank', value: '300-600 € (contratto)' },
    ],
  },
  {
    label: 'Ideale per famiglie di',
    values: [
      { systemId: 'sottolavello-classico', value: '2-4 persone' },
      { systemId: 'sottolavello-senza-serbatoio', value: '3-6 persone' },
      { systemId: 'portatile', value: '1-3 persone' },
      { systemId: 'flow-restrictor-zero-waste', value: '4-6 persone' },
      { systemId: 'commerciale-tank', value: 'Uso commerciale, non residenziale' },
    ],
  },
];

export interface ComparisonFAQ {
  q: string;
  a: string;
}

export const OSMOSIS_COMPARISON_FAQS: ComparisonFAQ[] = [
  {
    q: "L'osmosi inversa toglie troppi minerali all'acqua?",
    a: "La membrana RO trattiene 96-99% di tutti i soluti disciolti, inclusi calcio e magnesio. Il contributo dei minerali presenti nell'acqua del rubinetto al fabbisogno giornaliero è però marginale (la principale fonte resta l'alimentazione: latticini, verdure, legumi). Chi vuole comunque reintrodurre una quota di sali può scegliere modelli con remineralizzatore post-membrana, che aggiunge piccole quantità di calcio e magnesio. Non è una scelta sanitaria obbligata, è una preferenza di gusto.",
  },
  {
    q: 'Quanto costa mantenerla all\'anno?',
    a: 'Dipende dalla categoria di impianto: 60-120 € per un sottolavello classico, 100-180 € per un sistema senza serbatoio, 150-250 € per un sistema zero-waste, 300-600 € per un impianto commerciale con contratto. Il costo include la sostituzione delle cartucce di pre-filtro (annuali) e della membrana RO (ogni 24-36 mesi). Vanno considerati anche piccoli costi accessori come la sanificazione periodica del serbatoio nelle configurazioni che lo prevedono.',
  },
  {
    q: 'Posso installarla da solo?',
    a: 'Dipende dal tipo. Un sistema portatile da appoggio si installa con un raccordo deviatore e non richiede competenze idrauliche. Un sottolavello classico richiede un livello di manualità medio: collegamento alla rete idrica fredda, scarico in deviatore, foro sul piano per il rubinetto dedicato. I sistemi zero-waste e commerciali richiedono un tecnico qualificato perché coinvolgono anche collegamenti elettrici, pompe e talvolta certificazioni HACCP.',
  },
  {
    q: 'Quanto dura la membrana?',
    a: "La membrana RO ha una durata tipica di 24-36 mesi in uso domestico, a condizione che i pre-filtri vengano sostituiti regolarmente (la membrana è la parte più costosa e si rovina rapidamente se a monte arrivano sedimenti o cloro libero). Negli impianti commerciali la durata scende a 18-24 mesi per via del carico di lavoro più alto. Un indicatore di fine vita è l'aumento del TDS in uscita: se passa stabilmente sopra 50-60 ppm partendo da acqua di rete a 300-400 ppm, la membrana sta perdendo selettività.",
  },
  {
    q: "L'acqua di osmosi è 'morta' o 'acida'?",
    a: "La definizione di acqua 'morta' non ha base scientifica: il permeato è semplicemente un'acqua a bassissimo contenuto di soluti disciolti. Il pH effettivo dipende dalla CO2 disciolta e si attesta tipicamente tra 6,5 e 7,0, valori entro i limiti del D.Lgs. 18/2023 sulle acque destinate al consumo umano. Chi è infastidito dal sapore neutro può aggiungere un remineralizzatore o un sistema di carbonatazione. Non c'è alcuna evidenza scientifica di rischi per la salute legati al consumo di acqua osmotizzata.",
  },
  {
    q: 'Conviene aggiungere il post-carbone con remineralizzatore?',
    a: 'Il post-filtro a carbone migliora il gusto rifinendo eventuali tracce di odore residuo e va considerato come dotazione standard. Il remineralizzatore è invece una scelta di preferenza personale: aggiunge piccole quantità di calcio e magnesio (in genere 30-60 ppm di durezza residua) per restituire al permeato un sapore più simile a un\'acqua minerale leggera. Non è un\'esigenza sanitaria, ma molti utenti lo apprezzano. Va sostituito ogni 12 mesi.',
  },
  {
    q: 'Posso usarla per il bagnetto del neonato?',
    a: "Sì, e in molti casi è una scelta sensata: l'osmosi inversa rimuove cloro, PFAS, nitrati e tracce di metalli pesanti, contaminanti verso i quali un neonato ha tolleranza ridotta. Per la preparazione del biberon va considerato che il permeato è un'acqua a basso contenuto di sodio (ottimo per i lattanti) e che il latte in formula apporta già i minerali necessari. Per il bagnetto invece la qualità dell'acqua di rete italiana è in genere sufficiente; l'osmosi diventa utile in zone con cloro elevato o problematiche specifiche di contaminazione documentate.",
  },
  {
    q: 'Come verifico che funzioni davvero?',
    a: "Il modo più affidabile è far analizzare un campione di acqua prima e dopo l'impianto in un laboratorio di analisi delle acque. Un'analisi base (parametri chimico-fisici, nitrati, cloro, durezza, conducibilità) costa 60-120 € e fornisce evidenza oggettiva del corretto funzionamento. Le misure casalinghe con TDS-meter sono utili come indicatore quotidiano (un buon impianto riduce il TDS da 300-400 ppm di rete a 10-30 ppm in uscita), ma non sostituiscono un'analisi di laboratorio quando si vogliono verificare contaminanti specifici come PFAS, metalli pesanti o pesticidi.",
  },
];

export interface DecisionPath {
  scenario: string;
  recommendation: string;
}

export const OSMOSIS_DECISION_PATHS: DecisionPath[] = [
  {
    scenario:
      'Famiglia di 4 persone, budget contenuto, vuole bere acqua del rubinetto con la qualità di un\'acqua in bottiglia, solo per uso cucina.',
    recommendation:
      "Categoria 'sottolavello-classico': è il miglior compromesso prezzo/prestazioni per un uso domestico standard, la manutenzione è semplice e i ricambi sono diffusi.",
  },
  {
    scenario:
      "Famiglia di 4 persone particolarmente attenta agli sprechi idrici e all'impatto ambientale, budget medio-alto.",
    recommendation:
      "Categoria 'flow-restrictor-zero-waste': il rapporto di scarto a 1:1 (o inferiore) riduce sensibilmente il consumo idrico complessivo, ripagando nel tempo il costo iniziale più alto.",
  },
  {
    scenario:
      'Coppia che vive in affitto, non può modificare il mobile sottolavello e potrebbe traslocare entro due o tre anni.',
    recommendation:
      "Categoria 'portatile': nessuna installazione idraulica fissa, si collega al rubinetto con un raccordo deviatore e si porta via in caso di trasloco.",
  },
  {
    scenario: 'Ristorante con 50 coperti al giorno che vuole servire acqua trattata in caraffa e usarla in cucina.',
    recommendation:
      "Categoria 'commerciale-tank': la produzione e il serbatoio di accumulo sono dimensionati per flussi commerciali continuativi, e la componentistica è certificata per uso alimentare HACCP.",
  },
  {
    scenario:
      'Famiglia che vive in una zona del Veneto interessata da contaminazione PFAS e vuole la massima sicurezza per i bambini.',
    recommendation:
      "Categoria 'flow-restrictor-zero-waste' (per la membrana ad alta reiezione e l'UV finale) o in alternativa 'sottolavello-senza-serbatoio' (per evitare acqua di accumulo). Verificare comunque i risultati con un'analisi PFAS in laboratorio dopo l'installazione.",
  },
  {
    scenario:
      'Persona sola, cucina molto piccola, vuole solo bere e cucinare con acqua trattata senza occupare il piano di lavoro.',
    recommendation:
      "Categoria 'sottolavello-senza-serbatoio': l'ingombro nel mobile è minimo e non occupa il piano cucina; in alternativa 'portatile' se non si vogliono fare modifiche idrauliche.",
  },
  {
    scenario:
      'Famiglia con neonato che vive in un edificio storico del centro di Roma con tubazioni vecchie e sospetto di piombo nelle prese interne.',
    recommendation:
      "Categoria 'sottolavello-classico' con kit pre-filtro anti-piombo aggiuntivo: la membrana RO trattiene il piombo con efficienza superiore al 98%, e un'analisi pre/post in laboratorio è raccomandata per quantificare la riduzione effettiva.",
  },
];
