import type { SubscoreKey } from '@aquascore/index';

// Re-export to satisfy unused-import strictness in environments that enable it.
export type _SubscoreKeyRef = SubscoreKey;

export interface ParameterGuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ParameterFAQ {
  q: string;
  a: string;
}

export interface ParameterGuide {
  id: string;
  itName: string;
  slug: string;
  category: 'salute' | 'estetica' | 'impianti' | 'microbiologia';
  shortTitle: string;
  metaDescription: string;
  searchKeywords: string[];
  intro: string;
  sections: ParameterGuideSection[];
  faqs: ParameterFAQ[];
  relatedIds: string[];
  ctaContext: string;
}

export const PARAMETER_GUIDES: ParameterGuide[] = [];

const GUIDE_INDEX: Map<string, ParameterGuide> = new Map();

function registerGuide(guide: ParameterGuide): void {
  PARAMETER_GUIDES.push(guide);
  GUIDE_INDEX.set(guide.id, guide);
}

export function getGuideById(id: string): ParameterGuide | undefined {
  return GUIDE_INDEX.get(id);
}

export function getGuidesByCategory(cat: ParameterGuide['category']): ParameterGuide[] {
  return PARAMETER_GUIDES.filter((g) => g.category === cat);
}

// ============================================================================
// 1. pH
// ============================================================================
registerGuide({
  id: 'ph',
  itName: 'pH',
  slug: 'ph',
  category: 'impianti',
  shortTitle: "pH dell'acqua del rubinetto: valori, limiti e correzione",
  metaDescription:
    "Il pH dell'acqua potabile deve restare tra 6,5 e 9,5 secondo il D.Lgs. 18/2023. Scopri valori ideali, effetti sugli impianti e come correggerli.",
  searchKeywords: [
    'ph acqua',
    'ph acqua rubinetto',
    'ph acqua potabile',
    'valore ph acqua',
    'come misurare ph acqua',
    'acqua troppo acida',
    'acqua basica rubinetto',
  ],
  intro:
    "Il pH esprime quanto un'acqua sia acida, neutra o basica, su una scala che va da 0 a 14. È uno dei parametri più semplici da misurare, ma anche uno dei più importanti per valutare la qualità dell'acqua del rubinetto: un pH fuori range non è di per sé pericoloso per la salute, ma può aggredire le tubature, favorire il rilascio di metalli e modificare il sapore. Conoscerlo aiuta a proteggere impianti e elettrodomestici.",
  sections: [
    {
      heading: "Cos'è il pH dell'acqua",
      paragraphs: [
        "Il pH misura la concentrazione di ioni idrogeno (H+) presenti in una soluzione acquosa. La scala è logaritmica: un'acqua con pH 6 contiene dieci volte più ioni idrogeno rispetto a un'acqua con pH 7, e cento volte più rispetto a un'acqua con pH 8. Il valore 7 indica neutralità, valori inferiori indicano acidità, valori superiori indicano basicità o alcalinità.",
        "L'acqua potabile italiana ha tipicamente un pH compreso tra 7,0 e 8,2, leggermente basico per la presenza di bicarbonati e carbonati disciolti che derivano dal contatto con rocce calcaree. Il pH non descrive la presenza di contaminanti specifici, ma influenza fortemente la chimica dell'acqua: governa la solubilità dei metalli, l'efficacia della disinfezione con cloro e la formazione di calcare.",
        "Secondo l'Organizzazione Mondiale della Sanità, il pH non ha un effetto diretto sulla salute umana entro l'intervallo abitualmente riscontrato nelle acque potabili. È invece considerato un parametro operativo cruciale: gestori idrici e laboratori lo monitorano costantemente perché un pH instabile può compromettere l'intera rete di distribuzione.",
      ],
    },
    {
      heading: "Da dove deriva il pH dell'acqua del rubinetto",
      paragraphs: [
        "Il pH di un'acqua è il risultato dell'equilibrio chimico tra anidride carbonica disciolta, bicarbonati, carbonati e idrossidi. Le acque sorgive che attraversano rocce calcaree, dolomitiche o gessose tendono ad avere pH più alto, perché il calcare neutralizza l'acidità naturale dell'acqua piovana. Le acque che scorrono su rocce granitiche, silicee o vulcaniche tendono invece a essere più acide.",
        "Anche i trattamenti applicati dal gestore idrico influenzano il pH finale. La clorazione tende ad abbassarlo leggermente, mentre la rimozione dell'anidride carbonica o l'aggiunta di calce per stabilizzare la rete lo innalzano. In caso di acque particolarmente aggressive verso i metalli, gli acquedotti possono correggere il pH per proteggere le tubature dalla corrosione.",
        "All'interno dell'edificio, il pH può variare ulteriormente. Tubazioni vecchie in acciaio zincato o ferro possono rilasciare ossidi che alterano l'equilibrio, mentre i serbatoi di accumulo non puliti possono favorire fermentazioni microbiche che acidificano l'acqua. Per questo il pH al rubinetto può differire dal valore misurato dall'ente gestore alla fonte.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, recepimento italiano della direttiva UE 2020/2184, fissa per il pH dell'acqua destinata al consumo umano un intervallo compreso tra 6,5 e 9,5 unità pH. Si tratta di un parametro di tipo indicatore, non sanitario: il superamento dei limiti non implica un rischio immediato per la salute, ma segnala una possibile alterazione della rete di distribuzione.",
        "Il range considerato ottimale dal punto di vista tecnico è più stretto, tra 7,0 e 8,0. In questa fascia l'acqua è chimicamente equilibrata, non aggressiva verso i metalli, compatibile con la disinfezione e gradevole al palato. Sotto 7,0 l'acqua diventa progressivamente più corrosiva; sopra 8,0 aumentano calcare e incrostazioni.",
        "L'OMS non fissa un valore guida sanitario per il pH ma lo definisce un parametro fondamentale di qualità operativa. Anche EPA (Stati Uniti) raccomanda un intervallo simile, tra 6,5 e 8,5, per gli stessi motivi: protezione degli impianti e accettabilità del consumatore.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su impianti e qualità',
      paragraphs: [
        "Un pH troppo basso rende l'acqua corrosiva: attacca tubature in rame, ferro e piombo, dissolve metalli nelle saldature e li trasferisce all'acqua che si beve. Negli impianti vecchi questa è una delle principali cause di rilascio di piombo, rame e nichel nei primi millilitri di acqua erogata al mattino, dopo che è rimasta ferma nelle tubazioni per ore.",
        "Un pH troppo alto, al contrario, favorisce la precipitazione del calcio sotto forma di carbonato di calcio, ovvero il classico calcare che incrosta caldaie, scaldabagni, lavatrici, rubinetti e tubazioni. Le incrostazioni riducono la sezione utile delle tubazioni, peggiorano lo scambio termico negli scaldabagni aumentando i consumi energetici e accorciano la vita degli elettrodomestici.",
        "Anche il sapore dipende dal pH: acque leggermente alcaline, intorno a 7,5–8, sono percepite come più piacevoli e morbide, mentre acque con pH molto acido o molto alto possono risultare metalliche, amare o sapere di soda.",
      ],
      bullets: [
        'pH < 6,5: rischio corrosione, rilascio di metalli, sapore metallico',
        'pH 7,0–8,0: range ottimale, acqua equilibrata',
        'pH > 8,5: maggiore formazione di calcare e incrostazioni',
        'pH > 9,5: sapore di soda, acqua non idonea al consumo continuativo',
      ],
    },
    {
      heading: 'Come si rileva il pH',
      paragraphs: [
        "Il pH si può misurare con strumenti di diverso livello di precisione. Le strisce reattive cartacee sono il metodo più economico: cambiano colore in base al pH e si confrontano con una scala cromatica. Sono utili per uno screening orientativo, ma la lettura è soggettiva e ha un'incertezza di almeno mezza unità pH.",
        "I phmetri digitali domestici offrono una precisione migliore, tipicamente intorno a 0,1 unità pH se calibrati correttamente con soluzioni tampone. Richiedono manutenzione regolare dell'elettrodo, che invecchia e deve essere sostituito periodicamente.",
        "L'analisi presso un laboratorio qualificato, con metodi validati conformi alle norme tecniche di settore, garantisce la massima accuratezza: il pH viene misurato a temperatura controllata, con elettrodi calibrati su più punti, e il risultato è certificato in un rapporto di prova. Per chi vuole una valutazione affidabile della propria acqua, è la modalità più solida.",
      ],
    },
    {
      heading: 'Come si corregge il pH',
      paragraphs: [
        "Se l'acqua del rubinetto risulta troppo acida, il rimedio più diffuso è l'installazione di un filtro a calcite o magnesia che neutralizza l'acidità rilasciando ioni calcio e magnesio. È una soluzione passiva, efficace soprattutto per acque sorgive di montagna.",
        "Quando il pH è troppo alto e si associa a durezza elevata, il sistema più comune è l'addolcitore a scambio ionico, che riduce calcio e magnesio. In presenza di acque molto alcaline, alcuni sistemi di osmosi inversa abbattono drasticamente il contenuto di sali e portano il pH verso la neutralità.",
        "Prima di intervenire è importante capire la causa. Se il problema è interno all'impianto domestico, come tubature vecchie che rilasciano sostanze acide o basiche, può essere più sensato risanare l'impianto che installare un sistema di trattamento.",
      ],
      bullets: [
        'Filtri a calcite o magnesia per acque acide',
        'Addolcitori a scambio ionico per acque dure e alcaline',
        'Sistemi a osmosi inversa per riportare il pH vicino alla neutralità',
        'Risanamento delle tubazioni interne quando il pH varia tra contatore e rubinetto',
      ],
    },
  ],
  faqs: [
    {
      q: "Qual è il pH ideale dell'acqua del rubinetto?",
      a: "Il pH ideale dell'acqua potabile si colloca tra 7,0 e 8,0 unità. In questa fascia l'acqua è equilibrata: non corrode le tubature, non forma eccessivo calcare ed è gradevole al palato. La legge italiana ammette valori più ampi, da 6,5 a 9,5, ma all'interno di questo intervallo legale l'acqua può comunque dare problemi a impianti ed elettrodomestici. Misurare il pH è il primo passo per capire se serve un trattamento.",
    },
    {
      q: "Bere acqua con pH alto fa male?",
      a: "Un pH leggermente alto, tra 8 e 9, non comporta rischi sanitari documentati per persone sane. L'OMS non considera il pH un parametro tossicologico nel range tipico delle acque potabili. Tuttavia, valori molto alti possono dare un sapore sgradevole simile alla soda e indicare un'acqua molto mineralizzata. In caso di patologie particolari, soprattutto renali, è prudente confrontarsi con il proprio medico sulla scelta dell'acqua da bere.",
    },
    {
      q: "Come si misura il pH a casa?",
      a: "Esistono tre opzioni. Le strisce reattive costano pochi euro ma hanno bassa precisione. I phmetri digitali domestici, da 20 a 100 euro, sono più accurati ma vanno calibrati periodicamente con soluzioni tampone. L'analisi di laboratorio qualificato resta la scelta più affidabile, perché fornisce un valore certificato e accompagnato da altri parametri complementari come durezza, conducibilità e cloro residuo.",
    },
    {
      q: "Il pH influisce sul calcare?",
      a: "Sì, in modo diretto. Un pH alto, sopra 8, sposta l'equilibrio chimico verso la formazione di carbonato di calcio, ovvero il calcare che si deposita su caldaie, rubinetti e elettrodomestici. La durezza dell'acqua descrive quanto calcio è disciolto; il pH determina quanto facilmente quel calcio precipita come incrostazione. Le due grandezze vanno sempre valutate insieme.",
    },
    {
      q: "Bollire l'acqua cambia il pH?",
      a: "Sì, leggermente. La bollitura fa evaporare parte dell'anidride carbonica disciolta, e questo tende a far salire il pH di qualche decimo di unità. Allo stesso tempo, la precipitazione del calcare durante l'ebollizione riduce la durezza. È un effetto modesto e non sostituisce un vero trattamento dell'acqua.",
    },
  ],
  relatedIds: ['durezza_totale', 'conducibilita', 'cloro_residuo', 'rame', 'piombo'],
  ctaContext: "Per misurare con precisione il pH della tua acqua del rubinetto insieme agli altri parametri chimici, con un laboratorio qualificato e metodi validati:",
});

// ============================================================================
// 2. Durezza totale
// ============================================================================
registerGuide({
  id: 'durezza_totale',
  itName: 'Durezza totale',
  slug: 'durezza-totale',
  category: 'estetica',
  shortTitle: "Durezza dell'acqua del rubinetto: gradi francesi, calcare e soluzioni",
  metaDescription:
    "La durezza dell'acqua misura calcio e magnesio in °F. Scopri i limiti del D.Lgs. 18/2023 (15-50 °F), gli effetti sul calcare e come ridurla.",
  searchKeywords: [
    'durezza acqua',
    'durezza acqua rubinetto',
    'gradi francesi acqua',
    'acqua dura calcare',
    'come ridurre durezza acqua',
    'addolcitore acqua',
    'acqua troppo dura',
  ],
  intro:
    "La durezza totale è una delle caratteristiche più tangibili dell'acqua del rubinetto: si vede sui rubinetti incrostati, si sente sulla pelle, si paga in bolletta quando la caldaia consuma di più. Misura la quantità di calcio e magnesio disciolti e si esprime in gradi francesi (°F). In Italia varia moltissimo da zona a zona: dalle acque dolcissime delle Alpi alle acque molto dure di Lazio, Toscana e Puglia.",
  sections: [
    {
      heading: "Cos'è la durezza dell'acqua",
      paragraphs: [
        "La durezza totale è la somma dei sali di calcio e magnesio presenti nell'acqua. Si misura tradizionalmente in gradi francesi (°F): 1 °F corrisponde a 10 milligrammi di carbonato di calcio per litro. Esistono anche altre scale, come i gradi tedeschi (°dH) e i milligrammi per litro espressi come calcio carbonato (mg/L CaCO3), ma in Italia il riferimento è il grado francese.",
        "Si distinguono tre tipi di durezza. La durezza totale è quella che interessa al consumatore. La durezza temporanea è la parte legata ai bicarbonati, che precipita facilmente con il calore formando il classico calcare. La durezza permanente è la parte legata a solfati e cloruri, che non precipita con l'ebollizione e resta sciolta.",
        "Convenzionalmente si parla di acqua molto dolce sotto 8 °F, dolce tra 8 e 15 °F, mediamente dura tra 15 e 25 °F, dura tra 25 e 40 °F e molto dura oltre 40 °F. Calcio e magnesio sono nutrienti essenziali: bere acqua mediamente dura contribuisce all'apporto giornaliero di questi minerali.",
      ],
    },
    {
      heading: "Da dove deriva la durezza nell'acqua del rubinetto",
      paragraphs: [
        "La durezza è un parametro naturale, non dipende dall'inquinamento. Quando l'acqua piovana attraversa il sottosuolo, scioglie progressivamente i minerali presenti nelle rocce. Le rocce calcaree e dolomitiche, abbondanti in gran parte della Penisola, rilasciano calcio e magnesio in quantità significative; quelle granitiche o silicee, tipiche dell'arco alpino occidentale, sono molto meno solubili.",
        "Questo spiega la grande variabilità geografica della durezza in Italia. Le acque di Milano e di gran parte della Pianura Padana provengono da falde profonde con durezza tipica tra 25 e 35 °F. A Roma, dove l'acqua arriva da sorgenti laziali su rocce vulcaniche e calcaree, i valori superano spesso i 30 °F. In Trentino e nelle valli alpine la durezza scende sotto 10 °F.",
        "Il gestore idrico generalmente non modifica la durezza: la legge non lo impone, e ridurla richiederebbe trattamenti costosi su volumi enormi. La gestione del calcare resta quindi una responsabilità dell'utente, che può intervenire a livello di singola abitazione.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, indica per la durezza totale un valore guida compreso tra 15 e 50 °F. Si tratta di un parametro indicatore, non sanitario, perché la durezza non rappresenta un rischio per la salute: il riferimento normativo serve a tutelare gli impianti e la qualità organolettica dell'acqua.",
        "Il range considerato ottimale è più stretto, tra 15 e 30 °F. In questa fascia l'acqua è gradevole al palato, contribuisce all'apporto di calcio e magnesio e non genera incrostazioni eccessive su caldaie e elettrodomestici. Sotto 15 °F l'acqua può risultare aggressiva per le tubature; sopra 30 °F i problemi di calcare diventano sensibili.",
        "L'OMS riconosce che acque con durezza moderata possono avere un effetto protettivo cardiovascolare, grazie al contributo di magnesio. Per questo non raccomanda di ridurre la durezza al di sotto di certi valori se non per motivi tecnici.",
      ],
    },
    {
      heading: 'Perché monitorarla: effetti su impianti, elettrodomestici e bolletta',
      paragraphs: [
        "Il problema principale dell'acqua dura è il calcare. A temperature elevate, sopra i 60 °C, il bicarbonato di calcio si decompone e precipita come carbonato di calcio sulle superfici di scambio termico: serpentine di lavatrici, resistenze di scaldabagni, scambiatori di caldaie a condensazione. Anche pochi millimetri di incrostazione riducono drasticamente l'efficienza energetica.",
        "Studi tecnici stimano che 1 mm di calcare sulle resistenze elettriche aumenti i consumi del 10–15%, e 3 mm possono portare al raddoppio dei tempi di riscaldamento. Su una caldaia, il calcare riduce anche la durata operativa e aumenta la frequenza di guasti, con costi di manutenzione più alti.",
        "Sul piano estetico, il calcare lascia aloni bianchi su rubinetti, soffioni, piatti doccia e stoviglie lavate in lavastoviglie. Sul piano percettivo, l'acqua molto dura fa schiumare meno saponi e detersivi: serve più prodotto per ottenere lo stesso risultato, con un impatto sui consumi domestici.",
      ],
    },
    {
      heading: 'Come si rileva la durezza',
      paragraphs: [
        "Per uno screening rapido esistono kit a goccia o strisce reattive che cambiano colore in funzione della durezza. Sono economici, danno un'idea della fascia di durezza ma hanno una precisione limitata, tipicamente di 3–5 °F.",
        "Alcune caldaie e addolcitori moderni hanno sensori di durezza integrati che permettono di regolare automaticamente il funzionamento. Sono utili come monitoraggio continuo ma vanno tarati periodicamente.",
        "L'analisi di laboratorio qualificato, con titolazione complessometrica e metodi validati conformi alle norme tecniche, fornisce un valore certificato e affidabile. È la base corretta per dimensionare un eventuale addolcitore o per documentare la composizione dell'acqua a un installatore.",
      ],
    },
    {
      heading: "Come si riduce la durezza dell'acqua",
      paragraphs: [
        "L'addolcitore a scambio ionico è il sistema più diffuso. Funziona facendo passare l'acqua attraverso resine cariche di ioni sodio, che vengono scambiati con gli ioni calcio e magnesio. Il risultato è un'acqua addolcita, priva di durezza ma con un contenuto leggermente più alto di sodio. Va dimensionato in base alla durezza in ingresso e al consumo familiare.",
        "L'osmosi inversa rimuove non solo la durezza ma quasi tutti i sali. È efficace, ma toglie anche calcio e magnesio nutrizionalmente utili: per questo si installa tipicamente come sistema sotto-lavello dedicato all'acqua da bere, non a tutta la casa.",
        "Esistono inoltre sistemi anticalcare fisici (magnetici, elettronici a campo polarizzato, a CO2). Non riducono la durezza ma modificano la forma in cui il calcare precipita, rendendolo meno aderente alle superfici. La loro efficacia dipende molto dalle condizioni di installazione e dalla composizione dell'acqua.",
      ],
      bullets: [
        'Addolcitori a scambio ionico: riducono la durezza, aumentano leggermente il sodio',
        "Osmosi inversa: abbatte tutti i sali, indicata per l'acqua da bere",
        'Sistemi anticalcare fisici: non riducono la durezza, modificano la cristallizzazione',
        "Bollitura: precipita solo la durezza temporanea, non quella permanente",
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua dura fa male alla salute?",
      a: "No, l'acqua dura non è nociva. Calcio e magnesio sono nutrienti essenziali e bere acqua mediamente dura contribuisce al loro apporto giornaliero. Alcuni studi epidemiologici hanno persino associato il consumo di acque dure a una minore incidenza di malattie cardiovascolari, grazie al magnesio. I problemi della durezza sono di tipo tecnico ed estetico, non sanitario.",
    },
    {
      q: "Quanti gradi francesi deve avere l'acqua del rubinetto?",
      a: "La legge italiana ammette durezza tra 15 e 50 °F. Il range ottimale è 15-30 °F, fascia in cui l'acqua è gradevole, non aggredisce le tubature e non genera calcare eccessivo. Sotto 15 °F l'acqua può diventare leggermente corrosiva, sopra 30 °F i problemi di incrostazione su caldaie ed elettrodomestici diventano significativi e conviene valutare un addolcitore.",
    },
    {
      q: "Bollire l'acqua riduce la durezza?",
      a: "La bollitura riduce solo la durezza temporanea, cioè quella dovuta ai bicarbonati. Quando l'acqua arriva all'ebollizione, parte del calcio precipita come carbonato di calcio sul fondo della pentola. La durezza permanente, legata a solfati e cloruri, resta inalterata. È quindi un rimedio parziale, utile in cucina ma non per proteggere caldaie ed elettrodomestici.",
    },
    {
      q: "L'addolcitore rende l'acqua salata?",
      a: "Aumenta il contenuto di sodio, ma in misura generalmente contenuta. Per ogni grado francese rimosso, l'addolcitore rilascia circa 4-5 mg/L di sodio. Partendo da 30 °F e addolcendo a 15 °F, il sodio sale di circa 60-75 mg/L, sotto il limite di legge di 200 mg/L. Per chi segue diete a basso contenuto di sodio è prudente parlarne con il medico e valutare un'acqua non addolcita per il consumo diretto.",
    },
    {
      q: "Posso bere l'acqua addolcita?",
      a: "Tecnicamente sì, ma in genere si sconsiglia di destinare l'acqua addolcita al consumo alimentare diretto. Perde il contributo nutrizionale di calcio e magnesio, ha un sapore meno equilibrato e contiene più sodio. La pratica più comune è installare l'addolcitore sull'impianto generale per proteggere caldaia e elettrodomestici, e tenere un rubinetto separato non addolcito o un sistema a osmosi inversa per l'acqua da bere.",
    },
  ],
  relatedIds: ['ph', 'conducibilita', 'cloruri', 'solfati', 'sodio'],
  ctaContext: "Per conoscere la durezza esatta della tua acqua e dimensionare correttamente un eventuale trattamento, affidati a un'analisi di laboratorio qualificato:",
});

// ============================================================================
// 3. Conducibilità
// ============================================================================
registerGuide({
  id: 'conducibilita',
  itName: 'Conducibilità elettrica',
  slug: 'conducibilita',
  category: 'estetica',
  shortTitle: "Conducibilità dell'acqua del rubinetto: cosa indica e limiti",
  metaDescription:
    "La conducibilità elettrica misura i sali disciolti nell'acqua. Limite di legge 2500 µS/cm, ideale sotto 800 µS/cm. Guida completa con valori e soluzioni.",
  searchKeywords: [
    'conducibilità acqua',
    'conducibilità elettrica acqua',
    'microsiemens acqua rubinetto',
    'valore conducibilità acqua potabile',
    'residuo fisso conducibilità',
    'come abbassare conducibilità acqua',
  ],
  intro:
    "La conducibilità elettrica è uno degli indicatori più sintetici della mineralizzazione dell'acqua del rubinetto: in pochi secondi dà un'idea complessiva di quanti sali siano disciolti. Si misura in microsiemens per centimetro (µS/cm) e si correla strettamente con il residuo fisso. Un valore basso indica acqua leggera, un valore alto un'acqua ricca di minerali. Capirne il significato aiuta a inquadrare correttamente la qualità complessiva dell'acqua.",
  sections: [
    {
      heading: "Cos'è la conducibilità elettrica dell'acqua",
      paragraphs: [
        "La conducibilità è la capacità di un'acqua di condurre la corrente elettrica. L'acqua pura praticamente non conduce; sono i sali disciolti, dissociati in ioni positivi e negativi, a permettere il passaggio della corrente. Più sali contiene un'acqua, più alta è la sua conducibilità.",
        "Si misura in microsiemens per centimetro (µS/cm) o millisiemens (mS/cm). Un'acqua minerale leggera ha conducibilità intorno a 100-300 µS/cm; un'acqua di rubinetto italiana media si colloca tra 300 e 800 µS/cm; un'acqua molto mineralizzata supera i 1500 µS/cm.",
        "La conducibilità si correla bene con il residuo fisso a 180 °C: come regola pratica, dividere la conducibilità per 1,5-2 dà una stima del residuo fisso in mg/L. È un parametro semplice da misurare, economico e molto informativo come screening iniziale.",
      ],
    },
    {
      heading: "Da dove deriva la conducibilità nell'acqua del rubinetto",
      paragraphs: [
        "La conducibilità riflette la natura geologica del territorio attraversato dall'acqua. Sorgenti su rocce silicee o granitiche, come quelle di alta montagna, danno acque a bassa mineralizzazione (sotto 200 µS/cm). Falde in zone calcaree o sedimentarie producono acque a mineralizzazione media (400-800 µS/cm). Acque profonde a contatto con strati salini o di origine vulcanica possono superare 1500 µS/cm.",
        "Anche fattori antropici contribuiscono. L'intrusione salina nelle falde costiere, frequente lungo le coste italiane, alza significativamente la conducibilità a causa del cloruro di sodio. Scarichi industriali, percolato di discarica, contaminazioni agricole con concimi minerali possono incrementarla localmente.",
        "All'interno della rete di distribuzione la conducibilità si modifica poco, salvo in caso di intrusioni di acque diverse o miscelazioni tra fonti. È un parametro relativamente stabile, utile come riferimento per identificare anomalie nella qualità dell'acqua.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, recepimento della direttiva UE 2020/2184, fissa per la conducibilità elettrica dell'acqua destinata al consumo umano un valore massimo di 2500 µS/cm a 20 °C. Si tratta di un parametro indicatore: il superamento non comporta un rischio sanitario immediato ma segnala un'acqua eccessivamente mineralizzata.",
        "Il valore ottimale per un'acqua del rubinetto piacevole e tecnicamente equilibrata è sotto 800 µS/cm. Acque sotto 400 µS/cm sono particolarmente leggere; tra 400 e 800 µS/cm si trova la fascia più comune delle acque italiane. Sopra 1500 µS/cm l'acqua è marcatamente salina al palato e può creare incrostazioni rilevanti.",
        "L'OMS non fissa un valore guida sanitario per la conducibilità, ma la include tra i parametri di accettabilità organolettica e di gestione operativa della rete.",
      ],
    },
    {
      heading: 'Perché monitorarla: effetti su gusto e impianti',
      paragraphs: [
        "Una conducibilità elevata indica un'acqua ricca di sali, che può avere sapore marcato, talvolta sgradevolmente salato o amaro. Il consumatore tipicamente percepisce questo come acqua pesante. Una conducibilità molto bassa, sotto 100 µS/cm, può invece dare sensazione di acqua piatta o priva di carattere.",
        "Sul piano impiantistico, acque a conducibilità alta tendono ad essere più aggressive nei riguardi di alcuni materiali, specialmente in presenza di cloruri elevati che favoriscono la corrosione delle leghe ferrose. Aumentano anche la frequenza di incrostazioni saline su rubinetterie e elettrodomestici.",
        "La conducibilità è anche un utile parametro di controllo per gli impianti di trattamento: misurando la conducibilità prima e dopo un addolcitore o un'osmosi inversa è possibile verificarne immediatamente il corretto funzionamento.",
      ],
    },
    {
      heading: 'Come si rileva la conducibilità',
      paragraphs: [
        "Esistono conduttivimetri tascabili a basso costo, che permettono una misura immediata immergendo un sensore direttamente nell'acqua. Hanno precisione tipica del 5-10% e sono utili per un controllo rapido, ma vanno calibrati periodicamente con soluzioni standard.",
        "Strumenti da laboratorio professionali raggiungono precisioni dell'1% e compensano automaticamente la temperatura, fattore che influenza significativamente la lettura: la conducibilità varia di circa il 2% per ogni grado Celsius.",
        "L'analisi di laboratorio qualificato, con metodi validati conformi alle norme tecniche, fornisce un valore certificato a 20 °C e contestualizzato rispetto agli altri parametri chimici (cloruri, solfati, durezza, sodio) che concorrono a determinarla. È la modalità più solida per inquadrare correttamente la mineralizzazione complessiva dell'acqua.",
      ],
    },
    {
      heading: 'Come si riduce la conducibilità',
      paragraphs: [
        "L'osmosi inversa è il sistema più efficace per ridurre la conducibilità: rimuove il 90-99% dei sali disciolti e abbassa drasticamente il valore in uscita. È indicata quando si vuole un'acqua molto leggera per il consumo diretto, ma comporta scarto di acqua e richiede manutenzione regolare delle membrane.",
        "La distillazione produce un'acqua quasi priva di sali, con conducibilità prossima a zero. È poco usata in ambito domestico per via dei costi energetici e dei tempi di produzione.",
        "Gli addolcitori a scambio ionico riducono solo la durezza, non la conducibilità complessiva: scambiano calcio e magnesio con sodio, quindi la conducibilità resta sostanzialmente invariata o aumenta leggermente. Per ridurre davvero la mineralizzazione totale serve un sistema a membrana.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 99% dei sali, riduce drasticamente la conducibilità',
        'Distillazione: acqua quasi pura, poco usata in ambito domestico',
        'Addolcitori: non riducono la conducibilità totale, scambiano calcio con sodio',
        'Miscelazione con acqua a bassa conducibilità: soluzione possibile in alcuni acquedotti',
      ],
    },
  ],
  faqs: [
    {
      q: 'Una conducibilità alta significa acqua inquinata?',
      a: "Non necessariamente. La conducibilità misura tutti i sali disciolti, sia quelli naturali (calcio, magnesio, bicarbonati) sia quelli che possono indicare contaminazione (nitrati, cloruri da intrusione salina). Un valore alto da solo non distingue tra le due cause: serve un'analisi chimica completa per capire da quali ioni derivi. Acque minerali pregiate possono avere conducibilità elevate senza essere inquinate.",
    },
    {
      q: 'Qual è la conducibilità ideale per bere?',
      a: "Per un consumo quotidiano gradevole è considerata ottimale una conducibilità sotto 800 µS/cm. Sotto 400 µS/cm si parla di acqua oligominerale leggera, particolarmente indicata per neonati e per chi segue regimi a basso contenuto di minerali. Tra 400 e 800 µS/cm si colloca la maggior parte delle acque del rubinetto italiane di buona qualità.",
    },
    {
      q: 'La conducibilità è collegata al residuo fisso?',
      a: "Sì, in modo stretto. Il residuo fisso a 180 °C rappresenta i sali che restano dopo evaporazione completa dell'acqua, espresso in mg/L. Come regola empirica, dividendo la conducibilità in µS/cm per un fattore tra 1,5 e 2 si ottiene una stima del residuo fisso. Un'acqua con conducibilità 600 µS/cm ha tipicamente residuo fisso intorno a 300-400 mg/L.",
    },
    {
      q: 'Posso misurarla a casa?',
      a: "Sì, con un conduttivimetro tascabile da 20-50 euro. Va calibrato con soluzioni standard e usato a temperatura nota, perché la conducibilità varia con la temperatura. È utile come monitoraggio rapido, ad esempio per verificare se un sistema di osmosi sta funzionando correttamente confrontando i valori in ingresso e in uscita.",
    },
    {
      q: "L'acqua a bassa conducibilità è migliore?",
      a: "Dipende dall'uso. Per il consumo diretto continuativo, acque leggere (300-600 µS/cm) sono spesso preferite per gusto e digeribilità. Per la cucina, acque mediamente mineralizzate non danno problemi. Sotto 50 µS/cm l'acqua diventa molto pura ma anche aggressiva verso le tubature in metallo, perché tende a sciogliere i materiali con cui viene a contatto.",
    },
  ],
  relatedIds: ['durezza_totale', 'cloruri', 'solfati', 'sodio', 'ph'],
  ctaContext: "Per misurare la conducibilità della tua acqua del rubinetto insieme alla composizione completa dei sali disciolti, con un laboratorio qualificato:",
});

// ============================================================================
// 4. Cloro residuo
// ============================================================================
registerGuide({
  id: 'cloro_residuo',
  itName: 'Cloro residuo libero',
  slug: 'cloro-residuo',
  category: 'estetica',
  shortTitle: "Cloro residuo nell'acqua del rubinetto: limiti, sapore e come eliminarlo",
  metaDescription:
    "Il cloro residuo serve a disinfettare l'acqua potabile. Limite D.Lgs. 18/2023: 0,2 mg/L. Scopri perché si usa, come eliminarlo e quando è davvero un problema.",
  searchKeywords: [
    'cloro acqua rubinetto',
    'cloro residuo acqua',
    'sapore di cloro acqua',
    'come togliere il cloro acqua',
    'acqua sa di candeggina',
    'cloro acqua potabile limite',
  ],
  intro:
    "Il cloro residuo è la traccia di disinfettante che resta nell'acqua del rubinetto dopo il trattamento dell'acquedotto. Serve a proteggere l'acqua durante il viaggio dalle centrali di potabilizzazione ai rubinetti delle case, impedendo che batteri si moltiplichino nelle tubazioni. È quindi una garanzia sanitaria importante, ma quando se ne sente il sapore o l'odore diventa fastidioso. Conoscere come funziona aiuta a gestire correttamente questo aspetto.",
  sections: [
    {
      heading: "Cos'è il cloro residuo libero",
      paragraphs: [
        "Il cloro residuo libero è la quantità di cloro ancora disponibile come disinfettante nell'acqua, dopo che parte del cloro inizialmente aggiunto ha già reagito con sostanze organiche e ammoniaca. È espresso in milligrammi per litro (mg/L) come cloro libero. Si distingue dal cloro totale, che include anche il cloro combinato (clorammine) meno attivo come disinfettante ma più persistente.",
        "Il cloro è usato come disinfettante dell'acqua potabile dalla fine dell'Ottocento. Ha contribuito in modo decisivo all'eliminazione di malattie idrodiffuse come colera, tifo e dissenteria. Oggi è il sistema di disinfezione più diffuso al mondo grazie a costo basso, efficacia ampia e capacità di mantenere un effetto residuo nella rete.",
        "In Italia il cloro viene applicato in forma di ipoclorito di sodio, biossido di cloro o talvolta come cloro gassoso. Il biossido di cloro è particolarmente utilizzato perché forma meno sottoprodotti rispetto al cloro tradizionale e mantiene efficacia anche a pH alti.",
      ],
    },
    {
      heading: "Da dove arriva il cloro nell'acqua del rubinetto",
      paragraphs: [
        "Il cloro è aggiunto deliberatamente dal gestore idrico al termine del trattamento di potabilizzazione, prima dell'immissione in rete. Lo scopo è duplice: completare la disinfezione iniziata con altri trattamenti (filtrazione, ozonizzazione, UV) e mantenere un residuo attivo lungo l'intera rete di distribuzione.",
        "La quantità di cloro che arriva al rubinetto dipende dalla distanza dalla centrale di potabilizzazione, dalla temperatura dell'acqua, dalla qualità della rete e dalla presenza di serbatoi intermedi. Vicino alle centrali il cloro residuo è massimo; nelle zone periferiche e in estate, quando la temperatura accelera il consumo del cloro, può quasi azzerarsi.",
        "Per questo motivo le concentrazioni al rubinetto variano molto, anche all'interno della stessa città. Un valore di 0,1 mg/L è già sufficiente a garantire protezione, valori sopra 0,3 mg/L iniziano a rendere percepibili sapore e odore.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, recepimento della direttiva UE 2020/2184, fissa per il cloro residuo libero un valore massimo raccomandato di 0,2 mg/L al punto di consumo. Non è un limite sanitario stretto: dosaggi superiori sono tollerati in particolari condizioni di rete, ma sopra 0,2 mg/L sapore e odore diventano percepibili dalla maggior parte dei consumatori.",
        "Il valore considerato ottimale dal punto di vista organolettico è sotto 0,05 mg/L: una concentrazione che garantisce comunque la protezione residua ma non si percepisce al gusto. L'OMS indica un valore guida sanitario di 5 mg/L per la salute, decisamente più alto: il cloro alle dosi tipiche dell'acqua potabile non è tossico per l'uomo.",
        "Il vero problema non è il cloro in sé ma i suoi sottoprodotti di disinfezione, in particolare i trialometani (THM) e gli acidi aloacetici (HAA), che si formano quando il cloro reagisce con la sostanza organica naturale presente nell'acqua. Questi sono regolati separatamente con limiti molto più bassi.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su gusto e qualità',
      paragraphs: [
        "Il problema principale del cloro residuo al rubinetto è organolettico. Sopra 0,2 mg/L l'acqua inizia ad avere il caratteristico odore di piscina, talvolta paragonato a quello della candeggina. Questo scoraggia molti consumatori dal bere acqua del rubinetto e li spinge verso l'acqua in bottiglia, con impatto ambientale ed economico significativo.",
        "Anche in cucina il cloro può alterare il sapore di tè, caffè, brodi e preparazioni delicate. Per gli amanti del tè giapponese o del caffè di specialità è prassi comune declorare l'acqua prima dell'uso.",
        "Dal punto di vista sanitario, alle concentrazioni tipiche dell'acqua di rete il cloro residuo non rappresenta un rischio. La sua presenza è anzi una garanzia di protezione contro la contaminazione batterica durante il trasporto. Vanno invece tenuti d'occhio i sottoprodotti della disinfezione, specialmente in acque ricche di sostanza organica.",
      ],
    },
    {
      heading: 'Come si rileva il cloro residuo',
      paragraphs: [
        "Il metodo più semplice è la lettura DPD (dietil-fenilen-diammina), disponibile in kit colorimetrici a basso costo. Una goccia di reagente sviluppa un colore rosa la cui intensità è proporzionale al cloro libero. La precisione è tipicamente di 0,1 mg/L.",
        "Esistono fotometri portatili che leggono lo stesso reagente in modo strumentale, con precisione di 0,02 mg/L. Sono usati da tecnici e installatori di sistemi di trattamento.",
        "L'analisi di laboratorio qualificato fornisce il valore certificato e distingue tra cloro libero, cloro combinato e cloro totale, parametri tutti utili per inquadrare correttamente la situazione. Importante: il cloro è instabile, evapora rapidamente dall'acqua, e va misurato il prima possibile dopo il prelievo o con kit immediati al rubinetto.",
      ],
    },
    {
      heading: "Come si elimina il cloro dall'acqua",
      paragraphs: [
        "Il sistema più semplice è il filtro a carbone attivo, sotto-lavello o a caraffa. Il carbone trattiene efficacemente il cloro libero, oltre a molti sottoprodotti della disinfezione e composti organici volatili. La durata della cartuccia dipende dalla quantità di acqua filtrata e dalla concentrazione iniziale di cloro: tipicamente 3-6 mesi.",
        "Il decadimento naturale è un'altra opzione: lasciando l'acqua in una caraffa aperta per 30-60 minuti, gran parte del cloro evapora spontaneamente. È un sistema gratuito, utile in cucina ma poco pratico per usi continuativi.",
        "I sistemi a osmosi inversa rimuovono praticamente tutto il cloro residuo, oltre alla maggior parte dei suoi sottoprodotti. Spesso integrano un pre-filtro a carbone attivo proprio per proteggere le membrane dal cloro, che le danneggerebbe.",
      ],
      bullets: [
        'Filtri a carbone attivo: efficaci e a basso costo, da sostituire periodicamente',
        'Caraffa aperta: il cloro evapora spontaneamente in 30-60 minuti',
        'Sistemi a osmosi inversa: rimuovono cloro e sottoprodotti',
        "Bollitura: anch'essa accelera l'evaporazione del cloro",
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua del rubinetto al cloro fa male?",
      a: "Alle concentrazioni utilizzate per la disinfezione dell'acqua potabile (tipicamente sotto 0,5 mg/L) il cloro non rappresenta un rischio per la salute. L'OMS indica un valore guida sanitario di 5 mg/L, molto più alto. Il vero aspetto da considerare sono i sottoprodotti della disinfezione (trialometani, acidi aloacetici), regolati separatamente con limiti precisi. In acque correttamente trattate, i benefici della disinfezione superano largamente i rischi.",
    },
    {
      q: 'Perché la mia acqua sa di cloro solo in alcuni periodi?',
      a: 'Il dosaggio di cloro non è costante. I gestori idrici lo aumentano in estate, quando le temperature alte accelerano la moltiplicazione batterica nelle tubazioni, e dopo lavori in rete che possono aver creato rischi di contaminazione. Anche la posizione dell abitazione conta: chi sta vicino alla centrale di potabilizzazione percepisce più cloro di chi è in zone periferiche.',
    },
    {
      q: 'Come si elimina velocemente il sapore di cloro?',
      a: "I metodi più efficaci sono tre. Una caraffa con filtro a carbone attivo rimuove il cloro in pochi secondi. Lasciare l'acqua in una brocca aperta per 30-60 minuti permette al cloro di evaporare spontaneamente. La bollitura accelera ulteriormente il processo. Per usi continuativi conviene installare un filtro a carbone sotto-lavello.",
    },
    {
      q: "Il cloro nell'acqua rovina i denti o i capelli?",
      a: "Alle concentrazioni dell'acqua potabile (sotto 0,5 mg/L) l'effetto su denti e capelli è trascurabile. Diverso il discorso per le piscine, dove il cloro è 5-10 volte più concentrato. Chi ha capelli particolarmente sensibili o segue trattamenti dermatologici può comunque scegliere di installare un filtro per la doccia, ma non si tratta di una necessità sanitaria.",
    },
    {
      q: "Posso eliminare il cloro bollendo l'acqua?",
      a: "Sì, è un metodo efficace. Portando l'acqua a ebollizione per 5-10 minuti il cloro libero evapora quasi completamente. La bollitura non rimuove invece sali, calcare permanente o eventuali contaminanti chimici non volatili. Per uso quotidiano è più pratico un filtro a carbone, che declorra senza richiedere consumo energetico.",
    },
  ],
  relatedIds: ['ph', 'ammonio', 'e_coli', 'coliformi_totali', 'torbidita'],
  ctaContext: "Per verificare il livello di cloro residuo al tuo rubinetto e valutare la qualità complessiva dell'acqua con un laboratorio qualificato:",
});

// ============================================================================
// 5. Nitrati
// ============================================================================
registerGuide({
  id: 'nitrati',
  itName: 'Nitrati',
  slug: 'nitrati',
  category: 'salute',
  shortTitle: "Nitrati nell'acqua del rubinetto: limiti, rischi e soluzioni",
  metaDescription:
    "Nitrati nell'acqua potabile: limite di legge 50 mg/L, rischi per neonati (metaemoglobinemia), fonti agricole e come ridurli. Guida 2026.",
  searchKeywords: [
    'nitrati acqua',
    'nitrati acqua rubinetto',
    'limite nitrati acqua potabile',
    'nitrati acqua rischi',
    'come ridurre nitrati acqua',
    'nitrati neonati',
    'nitrati metaemoglobinemia',
  ],
  intro:
    "I nitrati sono uno dei contaminanti più diffusi nelle acque del rubinetto italiane, soprattutto in zone ad agricoltura intensiva e allevamento. Da soli non sono tossici per gli adulti, ma si trasformano nel corpo in nitriti, potenzialmente pericolosi per neonati e donne in gravidanza. Per questo il D.Lgs. 18/2023 fissa un limite preciso di 50 mg/L. Conoscere la concentrazione nella propria acqua è il primo passo per gestire correttamente il rischio.",
  sections: [
    {
      heading: "Cosa sono i nitrati",
      paragraphs: [
        "I nitrati sono composti chimici formati da azoto e ossigeno, con formula NO3-. Sono la forma più ossidata e stabile dell'azoto presente in natura e fanno parte del normale ciclo biogeochimico di questo elemento. Sono molto solubili in acqua, non si legano alle particelle del suolo e si spostano facilmente con le acque di percolazione.",
        "In agricoltura sono il nutriente azotato fondamentale per la crescita delle piante. Quando la quantità applicata supera quella assorbita dalle colture, l'eccedenza viene dilavata dalle piogge e raggiunge falde e corsi d'acqua. Questo è il principale meccanismo di contaminazione delle acque potabili italiane.",
        "Nel corpo umano i nitrati ingeriti vengono in parte convertiti in nitriti dalla flora batterica orale e gastrointestinale. I nitriti sono molto più reattivi e possono interferire con il trasporto di ossigeno nel sangue. Per questo i nitrati nelle acque sono regolamentati come parametro sanitario.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è l'agricoltura intensiva. I fertilizzanti azotati di sintesi, applicati in eccesso rispetto al fabbisogno colturale, vengono dilavati nel sottosuolo e raggiungono le falde acquifere. In Pianura Padana, Veneto orientale, Romagna e zone agricole del Centro-Sud, la concentrazione di nitrati nelle falde può superare anche stabilmente i 50 mg/L.",
        "Una seconda sorgente importante sono gli allevamenti intensivi. I reflui zootecnici ricchi di azoto organico vengono spesso sparsi sui campi come concime, ma quando le quantità superano la capacità di assorbimento del terreno, l'azoto si trasforma in nitrati e raggiunge le acque sotterranee. Il problema è particolarmente acuto nelle aree ad alta densità di allevamenti suini e bovini.",
        "Altre fonti minori includono scarichi civili non depurati o malfunzionanti, fosse settiche non a tenuta, ricaduta atmosferica di ossidi di azoto dai processi di combustione, e in misura trascurabile la decomposizione naturale della materia organica nel suolo. Vicino ai centri abitati storici, fosse Imhoff malfunzionanti possono contribuire.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa il limite massimo per i nitrati nell'acqua destinata al consumo umano a 50 mg/L. Si tratta di un parametro sanitario: il superamento comporta non-conformità dell'acqua e obbliga il gestore a interventi correttivi. Lo stesso limite è raccomandato dall'OMS e adottato dall'EPA statunitense (espresso come 10 mg/L di azoto-nitrico, equivalente).",
        "Il valore considerato ottimale per un consumo prolungato è significativamente più basso, sotto 10 mg/L. Sotto questa soglia il rischio sanitario è praticamente nullo anche per le categorie più sensibili. L'OMS suggerisce questo livello come obiettivo di buona qualità per acque destinate a neonati e donne in gravidanza.",
        "Il limite di legge tiene conto della soglia di prevenzione della metaemoglobinemia infantile, una condizione rara ma seria nei lattanti che bevono biberon preparati con acqua ricca di nitrati. Il limite ideale aggiunge un margine di sicurezza tossicologico per esposizioni croniche e tiene conto anche della somma di nitrati e nitriti.",
      ],
    },
    {
      heading: 'Perché monitorarli: effetti su salute',
      paragraphs: [
        "Il rischio più documentato è la metaemoglobinemia neonatale, detta anche sindrome del bambino blu. I nitrati ingeriti vengono convertiti in nitriti, che ossidano l'emoglobina trasformandola in metaemoglobina, una forma incapace di trasportare ossigeno. Nei lattanti sotto i 6 mesi il sistema enzimatico di riduzione della metaemoglobina è ancora immaturo, e l'acidità gastrica più bassa permette la proliferazione di batteri che accelerano la conversione.",
        "Negli adulti i nitrati alle concentrazioni dell'acqua potabile sono generalmente ben tollerati. Esistono però evidenze epidemiologiche che associano esposizioni croniche a nitrati elevati a un possibile aumento del rischio di alcuni tumori, in particolare gastrointestinali, attraverso la formazione di nitrosammine. L'evidenza è ancora oggetto di studio.",
        "Categorie particolarmente attente devono essere donne in gravidanza, anziani con ridotta acidità gastrica, persone con deficit enzimatici specifici. In presenza di acqua con nitrati sopra 25-30 mg/L è prudente per queste categorie usare un'acqua a basso contenuto di nitrati per il consumo diretto. In ogni caso, in presenza di dubbi è consigliabile rivolgersi a un medico.",
      ],
      bullets: [
        'Sotto 10 mg/L: sicurezza ottimale per tutti, inclusi neonati',
        '10-50 mg/L: conforme alla legge, accettabile per adulti',
        'Sopra 50 mg/L: non conforme, da segnalare al gestore idrico',
        'Categorie sensibili: neonati sotto i 6 mesi, donne in gravidanza, anziani',
      ],
    },
    {
      heading: 'Come si rilevano i nitrati',
      paragraphs: [
        "Esistono strisce reattive cartacee che, immerse nell'acqua per pochi secondi, cambiano colore in base alla concentrazione di nitrati. Sono economiche ma poco precise: forniscono solo fasce indicative (0, 10, 25, 50, 100 mg/L) e tendono a sovrastimare in presenza di altri ioni interferenti.",
        "I kit colorimetrici a goccia, come quelli per acquari, danno precisione migliore (5-10 mg/L) ma richiedono una valutazione cromatica soggettiva. Esistono anche fotometri portatili che leggono lo stesso reagente in modo strumentale.",
        "L'analisi di laboratorio qualificato è il riferimento per misurazioni affidabili. Si usano metodi validati come la cromatografia ionica o la spettrofotometria UV, con precisione di 0,5 mg/L. Il laboratorio può misurare contemporaneamente nitrati, nitriti e ammonio, dando un quadro completo del ciclo dell'azoto nell'acqua.",
      ],
    },
    {
      heading: 'Come si riducono i nitrati',
      paragraphs: [
        "I nitrati sono molto difficili da rimuovere con sistemi semplici: la bollitura non li elimina, anzi li concentra, perché evapora l'acqua e i nitrati restano. Anche la filtrazione a carbone attivo è inefficace, perché i nitrati non vengono adsorbiti.",
        "I sistemi efficaci sono due. L'osmosi inversa è il più diffuso in ambito domestico: la membrana semipermeabile rimuove il 90-95% dei nitrati insieme alla maggior parte degli altri sali. È adatta soprattutto per l'acqua da bere, tipicamente con installazione sotto-lavello.",
        "Lo scambio ionico selettivo per nitrati usa resine specifiche che catturano gli ioni nitrato e li sostituiscono con cloruri. È usato in impianti più grandi o quando si vuole trattare tutta l'acqua di casa. Richiede rigenerazione periodica con salamoia. Le resine vanno scelte selettive per nitrati per evitare il rilascio di nitrati accumulati in caso di esaurimento.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 95% dei nitrati, adatta per acqua da bere',
        'Scambio ionico selettivo: efficace su impianti più grandi',
        'Bollitura: NON funziona, anzi concentra i nitrati',
        'Filtri a carbone attivo: NON rimuovono i nitrati',
        "Miscelazione con acqua a basso nitrato: soluzione adottata da alcuni acquedotti",
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "Il problema dei nitrati nelle acque italiane è ben documentato. ISPRA e ARPA regionali pubblicano annualmente rapporti sullo stato delle acque sotterranee che evidenziano superamenti diffusi in numerose aree. In Lombardia e Veneto, regioni con forte vocazione agro-zootecnica, ampie porzioni delle falde superficiali superano stabilmente i 50 mg/L.",
        "In Emilia-Romagna le pianure padane di Modena, Reggio Emilia e Parma mostrano contaminazione storica diffusa. In Veneto orientale e Friuli, le falde di pianura sono interessate da concentrazioni elevate legate ad agricoltura e allevamento. In alcuni comuni i gestori idrici miscelano acque profonde (meno contaminate) con acque superficiali per riportare il valore al rubinetto sotto la soglia di legge.",
        "Le Direttive europee Nitrati (91/676/CEE) e la più recente Direttiva Acque Potabili impongono agli Stati membri di adottare programmi d'azione nelle zone vulnerabili. In Italia ampie aree della Pianura Padana sono designate come zone vulnerabili da nitrati, con limiti sull'applicazione di fertilizzanti azotati e reflui zootecnici.",
      ],
    },
  ],
  faqs: [
    {
      q: "Bere acqua con tanti nitrati fa male?",
      a: "Dipende dalla concentrazione e dalla persona. Per un adulto sano, acque sotto 50 mg/L sono considerate sicure dal D.Lgs. 18/2023 e dall'OMS. Per neonati sotto i 6 mesi, donne in gravidanza e categorie sensibili, è prudente non superare 10-25 mg/L. Esposizioni croniche a valori molto alti sono oggetto di studi epidemiologici sui rischi a lungo termine. In caso di dubbio è consigliabile confrontarsi con un medico e analizzare la propria acqua.",
    },
    {
      q: "I nitrati si eliminano bollendo l'acqua?",
      a: "No, anzi è controproducente. La bollitura fa evaporare l'acqua ma non i nitrati, che restano nel liquido residuo e si concentrano. Un'acqua con 30 mg/L di nitrati, bollita a lungo, può arrivare a concentrazioni superiori. Per ridurre i nitrati servono sistemi specifici come l'osmosi inversa o lo scambio ionico selettivo, non i normali metodi di trattamento casalingo.",
    },
    {
      q: 'Quanto costa analizzare i nitrati?',
      a: "Un'analisi di solo nitrati presso un laboratorio qualificato costa generalmente tra 15 e 30 euro. Conviene però richiedere un pacchetto che includa anche nitriti, ammonio, durezza, conducibilità e pH, per avere un quadro completo della qualità dell'acqua a un costo per parametro decisamente inferiore. Pacchetti completi base partono tipicamente da 80-120 euro.",
    },
    {
      q: "Posso dare l'acqua del rubinetto al neonato per il biberon?",
      a: "Sì, se i nitrati sono sotto 10 mg/L e l'acqua è batteriologicamente conforme. È prudente verificarlo con un'analisi se si abita in zone agricole o si hanno dubbi. In ogni caso, fare bollire l'acqua per qualche minuto prima di preparare il biberon resta una buona pratica per garantire la sicurezza microbiologica, ricordando che la bollitura non riduce i nitrati.",
    },
    {
      q: "I nitrati danno sapore o odore all'acqua?",
      a: 'No. I nitrati sono completamente inodori e insapori, anche a concentrazioni elevate. Non è possibile percepirne la presenza assaggiando o annusando l\'acqua. L\'unico modo per conoscere la concentrazione è un\'analisi chimica. Per questo motivo i nitrati sono considerati uno dei contaminanti più subdoli: possono essere presenti in concentrazioni significative senza che il consumatore se ne accorga.',
    },
    {
      q: "L'acqua in bottiglia ha meno nitrati?",
      a: 'Dipende dalla marca. Alcune acque minerali, soprattutto quelle imbottigliate vicino a zone agricole o di pianura, possono contenere nitrati superiori a 10 mg/L pur restando sotto i limiti. Acque minerali alpine o sorgive profonde hanno spesso valori sotto 5 mg/L. L\'etichetta riporta il valore di nitrati per legge: chi vuole un\'acqua a basso contenuto può controllare direttamente in bottiglia.',
    },
  ],
  relatedIds: ['nitriti', 'ammonio', 'pfas_totali', 'arsenico'],
  ctaContext: "Per analizzare i nitrati della tua acqua del rubinetto insieme agli altri composti azotati con un laboratorio qualificato e metodi validati:",
});

// ============================================================================
// 6. Nitriti
// ============================================================================
registerGuide({
  id: 'nitriti',
  itName: 'Nitriti',
  slug: 'nitriti',
  category: 'salute',
  shortTitle: "Nitriti nell'acqua del rubinetto: limite 0,5 mg/L, rischi e cause",
  metaDescription:
    "I nitriti nell'acqua segnalano contaminazione recente o malfunzionamenti nella rete. Limite D.Lgs. 18/2023: 0,5 mg/L. Rischi per neonati e come intervenire.",
  searchKeywords: [
    'nitriti acqua',
    'nitriti acqua potabile',
    'nitriti acqua rubinetto rischi',
    'limite nitriti acqua',
    'nitriti neonati metaemoglobinemia',
    'differenza nitrati nitriti',
  ],
  intro:
    "I nitriti sono molto meno comuni dei nitrati nelle acque potabili, ma più pericolosi. Rappresentano una forma intermedia e instabile dell'azoto nel suo ciclo biogeochimico. La loro presenza in acqua è spesso un campanello d'allarme: indica contaminazione recente, malfunzionamenti nei filtri o stagnazione nelle tubazioni. Il limite di legge è dieci volte più severo di quello dei nitrati: solo 0,5 mg/L. Capire come si formano e si rimuovono aiuta a tutelare la salute, soprattutto dei bambini più piccoli.",
  sections: [
    {
      heading: 'Cosa sono i nitriti',
      paragraphs: [
        "I nitriti sono ioni con formula NO2-, una forma intermedia di ossidazione dell'azoto nel ciclo naturale che porta da ammoniaca a nitrati. Sono molto più reattivi e instabili dei nitrati, e in condizioni ossigenate tendono a convertirsi rapidamente in nitrati attraverso l'azione di batteri nitrificanti (Nitrobacter).",
        "Proprio per questa instabilità, i nitriti raramente raggiungono concentrazioni elevate in acque potabili ben aerate. La loro presenza è generalmente un segnale: indica che il processo di nitrificazione è incompleto, oppure che è in atto una contaminazione recente da materia organica azotata.",
        "Sul piano sanitario, i nitriti sono il vero agente tossico nella catena nitrati-nitriti. Mentre i nitrati ingeriti devono prima essere convertiti dalla flora batterica per diventare dannosi, i nitriti agiscono direttamente sull'emoglobina del sangue, ossidandola e impedendole di trasportare ossigeno.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "La fonte più tipica è la decomposizione incompleta di materia organica azotata. Quando ammoniaca e composti organici dell'azoto vengono ossidati dai batteri nitrificanti, passano dapprima allo stadio di nitriti e solo successivamente a nitrati. Se il processo si arresta a metà, magari per scarso ossigeno o per inibizione dei batteri, i nitriti si accumulano.",
        "Nelle reti di distribuzione una causa frequente è il ristagno dell'acqua nelle tubazioni. In tratti di rete poco utilizzati, l'acqua può rimanere ferma per ore o giorni; il cloro residuo si consuma, l'ossigeno diminuisce, e batteri nitrificanti possono colonizzare la tubazione producendo nitriti.",
        "Altre cause includono malfunzionamenti di filtri biologici negli impianti di trattamento, scarichi industriali non controllati, contaminazione da reflui zootecnici recenti. Nelle abitazioni, anche addolcitori, filtri sotto-lavello o caraffe non manutenuti correttamente possono diventare sede di sviluppo batterico e produrre nitriti.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, recepimento della direttiva UE 2020/2184, fissa per i nitriti un limite massimo di 0,5 mg/L nell'acqua destinata al consumo umano. È un parametro sanitario stretto: il superamento richiede interventi correttivi immediati da parte del gestore idrico.",
        "Il valore ottimale per un'acqua di qualità è sotto 0,1 mg/L. In rete ben gestite e aerata i nitriti sono tipicamente inferiori a 0,05 mg/L o non rilevabili. Una concentrazione misurabile è già un segnale da indagare.",
        "Esiste anche un vincolo combinato: la somma del rapporto tra nitrati e il loro limite (50 mg/L) e tra nitriti e il loro limite (3 mg/L all'uscita dall'impianto, 0,5 al rubinetto) non deve superare 1. È un modo di tenere conto della tossicità complessiva del ciclo azotato. L'OMS adotta valori guida simili.",
      ],
    },
    {
      heading: 'Perché monitorarli: effetti su salute',
      paragraphs: [
        "Il rischio principale è la metaemoglobinemia, particolarmente grave nei neonati sotto i 6 mesi. I nitriti, ingeriti o formati a partire dai nitrati, ossidano il ferro dell'emoglobina trasformandola in metaemoglobina. Questa proteina alterata non trasporta più ossigeno, e quando supera il 10-15% del totale provoca cianosi, sintomo classico della sindrome del bambino blu.",
        "Negli adulti sani il sistema enzimatico di riduzione della metaemoglobina riconverte rapidamente la metaemoglobina in emoglobina funzionale, e le concentrazioni di nitriti delle acque potabili (anche al limite di legge) raramente causano problemi. Nei lattanti, anziani e persone con deficit enzimatici questo sistema è meno efficiente.",
        "Una seconda preoccupazione riguarda la formazione endogena di nitrosammine, composti potenzialmente cancerogeni che si formano dalla reazione tra nitriti e ammine secondarie presenti nello stomaco e negli alimenti. L'evidenza epidemiologica è ancora oggetto di studio ma rappresenta un motivo aggiuntivo di prudenza. In presenza di dubbi sanitari è consigliabile rivolgersi a un medico.",
      ],
      bullets: [
        'Sotto 0,05 mg/L: acqua ottimale, processo di nitrificazione completo',
        '0,05-0,5 mg/L: ammissibile per legge, da monitorare',
        'Sopra 0,5 mg/L: non conforme, intervento immediato del gestore',
        'Particolarmente critico per: neonati, donne in gravidanza, anziani',
      ],
    },
    {
      heading: 'Come si rilevano i nitriti',
      paragraphs: [
        "Le strisce reattive cartacee permettono uno screening rapido, con sensibilità intorno a 0,1 mg/L. Sono utili per un controllo orientativo, soprattutto se si sospetta un problema (ad esempio dopo lavori in rete o riapertura di un appartamento chiuso a lungo).",
        "I kit colorimetrici a goccia, ad esempio quelli usati negli acquari, danno precisione migliore. La chimica si basa sulla reazione di diazotazione: i nitriti reagiscono con specifici reagenti formando un colore rosa-rosso facilmente leggibile.",
        "L'analisi di laboratorio qualificato è il riferimento. Si usano metodi spettrofotometrici o cromatografia ionica, con limiti di rilevazione di 0,01 mg/L. È fondamentale che il campione venga analizzato entro poche ore dal prelievo, perché i nitriti sono instabili e si ossidano rapidamente a nitrati durante la conservazione, falsando il risultato. I laboratori qualificati lavorano con catene di custodia che proteggono la validità del dato.",
      ],
    },
    {
      heading: 'Come si riducono i nitriti',
      paragraphs: [
        "La prima azione è identificare e risolvere la causa. Se i nitriti sono presenti in modo continuativo nella rete pubblica, è il gestore idrico che deve intervenire ottimizzando trattamento e disinfezione. L'utente può segnalare l'anomalia all'azienda e al Comune.",
        "Se i nitriti compaiono solo al rubinetto e non sono presenti in altri punti della rete, la causa è spesso interna all'edificio: ristagno in tubazioni poco utilizzate, serbatoi non manutenuti, filtri o addolcitori non rigenerati correttamente. Risolvere il problema all'origine è preferibile all'installazione di sistemi di trattamento.",
        "Quando serve un trattamento, i sistemi efficaci sono gli stessi dei nitrati: osmosi inversa e scambio ionico selettivo. Il filtro a carbone attivo non rimuove i nitriti. La clorazione li ossida a nitrati, riducendo il rischio acuto ma trasformando il problema. La bollitura non li elimina.",
      ],
      bullets: [
        "Identificare e risolvere la causa: ristagno, manutenzione filtri",
        'Osmosi inversa: rimuove i nitriti efficacemente',
        'Scambio ionico selettivo: efficace su impianti più grandi',
        "Clorazione: ossida i nitriti a nitrati (riduce il rischio acuto)",
        'Bollitura: NON elimina i nitriti',
      ],
    },
  ],
  faqs: [
    {
      q: "Qual è la differenza tra nitrati e nitriti?",
      a: 'Sono due forme dello stesso elemento, l\'azoto, in stati di ossidazione diversi. I nitrati (NO3-) sono la forma più ossidata e stabile, presenti diffusamente nelle acque agricole. I nitriti (NO2-) sono una forma intermedia, instabile, normalmente rara nelle acque potabili. I nitriti sono più tossici dei nitrati, e il limite di legge è dieci volte più severo: 0,5 mg/L contro 50 mg/L.',
    },
    {
      q: "Trovare nitriti nell'acqua è sempre grave?",
      a: 'Va sempre indagato, ma la gravità dipende dalla concentrazione e dalla causa. Valori sotto 0,1 mg/L, soprattutto se occasionali, possono essere collegati a ristagno momentaneo nella rete e si risolvono lasciando scorrere l\'acqua. Valori sopra 0,5 mg/L indicano un problema serio che richiede intervento del gestore e segnalazione. In presenza di neonati o categorie sensibili, ogni superamento va trattato con cautela.',
    },
    {
      q: "I nitriti si formano nelle tubazioni di casa?",
      a: 'Sì, può succedere. In tubazioni dove l\'acqua ristagna per molte ore (case di vacanza, secondi bagni poco usati, scuole nel weekend), il cloro residuo si consuma e batteri nitrificanti possono colonizzare le pareti. Per questo è buona pratica, dopo periodi di inutilizzo prolungato, lasciare scorrere l\'acqua per qualche minuto prima di berla, e periodicamente disinfettare serbatoi di accumulo.',
    },
    {
      q: "Come si misurano i nitriti nell'acqua?",
      a: "Esistono strisce reattive per uno screening rapido, kit colorimetrici a goccia per maggiore precisione, e analisi di laboratorio qualificato per la massima affidabilità. I nitriti sono instabili: per un risultato attendibile il campione va analizzato entro poche ore dal prelievo o stabilizzato secondo procedure validate. È il motivo per cui un'analisi di laboratorio professionale è più affidabile di un kit casalingo.",
    },
    {
      q: "Posso bere acqua con nitriti in gravidanza?",
      a: "Per le donne in gravidanza è prudente assicurarsi di bere acqua con nitriti sotto 0,1 mg/L. I nitriti possono attraversare la placenta e l'emoglobina fetale è più suscettibile all'ossidazione di quella adulta. Se l'analisi della propria acqua mostra valori vicini o superiori al limite di legge, è opportuno consultare il medico e considerare un sistema di trattamento o un'acqua alternativa per il consumo diretto.",
    },
  ],
  relatedIds: ['nitrati', 'ammonio', 'cloro_residuo', 'e_coli'],
  ctaContext: "Per misurare i nitriti nella tua acqua del rubinetto con un laboratorio qualificato che garantisce la stabilità del campione:",
});

// ============================================================================
// 7. Ammonio
// ============================================================================
registerGuide({
  id: 'ammonio',
  itName: 'Ammonio',
  slug: 'ammonio',
  category: 'estetica',
  shortTitle: "Ammonio nell'acqua del rubinetto: limiti, cause e rimedi",
  metaDescription:
    "L'ammonio nell'acqua segnala contaminazione organica o malfunzionamenti. Limite D.Lgs. 18/2023: 0,5 mg/L. Cause, effetti e come rimuoverlo.",
  searchKeywords: [
    'ammonio acqua',
    'ammonio acqua potabile',
    'ammoniaca acqua rubinetto',
    'limite ammonio acqua',
    'odore ammoniaca acqua',
    'nh4 acqua',
  ],
  intro:
    "L'ammonio è la forma più ridotta dell'azoto presente in acqua, e tipicamente segnala contaminazione organica recente o problemi nei trattamenti di potabilizzazione. Anche se non è direttamente tossico alle concentrazioni delle acque potabili, è considerato un indicatore importante di qualità: la sua presenza significa quasi sempre che qualcosa, nel ciclo dell'acqua, non sta funzionando come dovrebbe. Il D.Lgs. 18/2023 lo regola con un limite di 0,5 mg/L.",
  sections: [
    {
      heading: "Cos'è l'ammonio",
      paragraphs: [
        "L'ammonio è lo ione NH4+, prodotto dalla dissoluzione in acqua dell'ammoniaca (NH3). In acque a pH neutro o leggermente acido la forma predominante è NH4+; a pH alti, sopra 9,5, prevale invece l'ammoniaca libera, più volatile e con odore caratteristico pungente. I due composti coesistono in equilibrio dipendente da pH e temperatura.",
        "L'ammonio è la forma più ridotta dell'azoto inorganico, opposta ai nitrati che sono la forma più ossidata. In condizioni aerobiche e in presenza di batteri nitrificanti, l'ammonio viene progressivamente convertito in nitriti e poi in nitrati. Questo processo è alla base del trattamento biologico delle acque reflue.",
        "Nelle acque potabili italiane l'ammonio è generalmente assente o presente in tracce sotto 0,05 mg/L. Quando si riscontrano concentrazioni misurabili, è quasi sempre un segnale di qualcosa che merita attenzione: contaminazione organica, malfunzionamento di trattamenti, condizioni anaerobiche in serbatoi o tubazioni.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte più comune di ammonio nelle acque potabili è la contaminazione da reflui civili, agricoli o zootecnici. Scarichi non depurati, fosse settiche non a tenuta, percolato di letamai e liquami zootecnici sono ricchi di azoto organico che, decomponendosi, libera ammonio.",
        "Anche le acque profonde possono contenere ammonio di origine naturale, dovuto a decomposizione di sostanza organica intrappolata in falde profonde in condizioni anaerobiche (assenza di ossigeno). Quando queste acque vengono captate e portate in superficie, l'ammonio si ossida progressivamente a nitriti e nitrati. Se il trattamento non è completo, parte arriva al rubinetto.",
        "In rete, l'ammonio può anche essere prodotto in piccole quantità da clorammine (cloro combinato con ammoniaca) usate in alcuni acquedotti come disinfettante residuo. È una pratica meno comune in Italia rispetto agli Stati Uniti, ma esiste in alcune realtà.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per l'ammonio un limite di 0,5 mg/L nell'acqua destinata al consumo umano. È un parametro indicatore, non sanitario in senso stretto: il superamento non è considerato un rischio diretto per la salute dell'adulto, ma indica un'anomalia che va indagata.",
        "Il valore ottimale per un'acqua di buona qualità è sotto 0,05 mg/L. A questa concentrazione l'ammonio è generalmente sotto la soglia di percezione organolettica e indica una rete ben gestita, con disinfezione efficace e assenza di contaminazione organica recente.",
        "L'OMS adotta valori guida simili e considera l'ammonio uno dei parametri operativi più sensibili per valutare la qualità della distribuzione. Anche EPA e EFSA lo classificano come parametro indicatore.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su gusto, odore e disinfezione',
      paragraphs: [
        "Il primo effetto dell'ammonio in acqua è il consumo di disinfettante. Il cloro reagisce con l'ammoniaca formando clorammine, molecole con potere disinfettante ridotto. La conseguenza è che la disinfezione diventa meno efficace, e batteri possono moltiplicarsi più facilmente nella rete. Per questo l'ammonio è considerato un indicatore di rischio microbiologico.",
        "A concentrazioni più elevate, sopra 0,3-0,5 mg/L e specialmente a pH alti, l'ammonio può dare un caratteristico odore pungente di ammoniaca. Il sapore diventa metallico o astringente. Questi effetti percettivi sono il motivo per cui l'ammonio è classificato come parametro estetico.",
        "Sul piano sanitario, alle concentrazioni dell'acqua potabile l'ammonio è considerato non tossico. Non rappresenta un rischio per persone sane. Resta però un segnale importante: la sua presenza significa che potrebbero essere presenti anche altri contaminanti correlati, e la disinfezione potrebbe non essere ottimale.",
      ],
    },
    {
      heading: "Come si rileva l'ammonio",
      paragraphs: [
        "Le strisce reattive per acquari permettono uno screening rapido con sensibilità di 0,1-0,2 mg/L. Sono utili per un controllo orientativo, ma non distinguono tra ammonio e ammoniaca libera e possono dare falsi positivi in presenza di altri composti azotati.",
        "I kit colorimetrici a goccia, basati sul reagente di Nessler o sul metodo blu di indofenolo, forniscono precisione migliore (0,05 mg/L). Sono ampiamente usati nel monitoraggio degli acquari e si trovano facilmente in commercio.",
        "L'analisi di laboratorio qualificato con metodi spettrofotometrici validati è il riferimento. Il limite di rilevazione tipico è 0,01 mg/L. Anche per l'ammonio è importante che il campione sia analizzato rapidamente: i microrganismi presenti possono ossidarlo o consumarlo durante la conservazione, alterando il risultato. Un laboratorio professionale gestisce correttamente questi aspetti.",
      ],
    },
    {
      heading: "Come si riduce l'ammonio",
      paragraphs: [
        "Anche per l'ammonio, la priorità è identificare la causa. Se è presente solo al rubinetto e non in altri punti della rete, vanno controllati serbatoi di accumulo, filtri non manutenuti, condotte interne con tratti morti. La risoluzione del problema alla fonte è preferibile all'installazione di un sistema di trattamento.",
        "L'osmosi inversa rimuove efficacemente l'ammonio insieme alla maggior parte degli altri sali e contaminanti. È la soluzione più comune per acqua da bere quando l'ammonio è persistente.",
        "Lo scambio ionico con resine cationiche scambia gli ioni ammonio con sodio o idrogeno. È usato in trattamenti più grandi. La clorazione spinta, chiamata break-point chlorination, ossida l'ammonio a azoto gassoso ma è una pratica gestita dagli acquedotti, non a livello domestico.",
      ],
      bullets: [
        "Identificare e risolvere la causa: serbatoi, filtri, ristagno",
        'Osmosi inversa: rimuove ammonio e altri contaminanti',
        'Scambio ionico cationico: efficace su impianti',
        'Filtri a carbone: parzialmente efficaci, non risolutivi',
      ],
    },
  ],
  faqs: [
    {
      q: "L'ammonio nell'acqua è pericoloso per la salute?",
      a: "Alle concentrazioni tipiche dell'acqua potabile (sotto 0,5 mg/L) l'ammonio non è considerato tossico per l'uomo. Il motivo per cui è regolato non è il rischio diretto, ma il fatto che la sua presenza segnala problemi: contaminazione organica, disinfezione inefficace, condizioni anaerobiche in rete. Indagare la causa è più importante del valore in sé.",
    },
    {
      q: "L'acqua sa di ammoniaca: cosa fare?",
      a: "L'odore di ammoniaca al rubinetto è un segnale da non ignorare. Può derivare da ammonio elevato, da clorammine usate come disinfettante, o da contaminazione di scarichi. Il primo passo è far scorrere l'acqua per qualche minuto: se l'odore persiste, conviene contattare il gestore idrico per una verifica della rete e far analizzare l'acqua da un laboratorio qualificato che possa distinguere tra le possibili cause.",
    },
    {
      q: 'Differenza tra ammonio e ammoniaca?',
      a: "Sono due forme dello stesso composto, in equilibrio chimico che dipende dal pH. L'ammoniaca (NH3) è la forma neutra, volatile e con odore pungente. L'ammonio (NH4+) è la forma protonata, solubile e inodore. A pH neutro (7) prevale di gran lunga l'ammonio; a pH alti (sopra 9) compare anche ammoniaca libera che dà l'odore caratteristico. Le analisi misurano la somma delle due forme.",
    },
    {
      q: "L'ammonio si elimina bollendo?",
      a: "Parzialmente. La bollitura volatilizza l'ammoniaca libera, soprattutto se il pH è alto, ma non rimuove efficacemente l'ammonio ionico. È un rimedio limitato. Per un'eliminazione efficace serve osmosi inversa, scambio ionico o risoluzione del problema all'origine. Un'acqua con ammonio elevato non andrebbe usata abitualmente, soprattutto perché spesso indica problemi più ampi nella rete.",
    },
    {
      q: "Posso dare l'acqua con ammonio al neonato?",
      a: "Se i valori sono sotto 0,05 mg/L, non ci sono controindicazioni specifiche per neonati. Se sono più alti, anche entro il limite di legge di 0,5 mg/L, è prudente valutare l'origine: spesso l'ammonio si associa a nitriti, batteri o altri contaminanti più rilevanti. Per i lattanti è consigliabile garantire un'acqua di altissima qualità microbiologica e chimica, eventualmente trattata con osmosi inversa o usando acque alternative documentate.",
    },
  ],
  relatedIds: ['nitrati', 'nitriti', 'cloro_residuo', 'e_coli'],
  ctaContext: "Per analizzare la presenza di ammonio nella tua acqua del rubinetto con un laboratorio qualificato che gestisce correttamente la stabilità del campione:",
});

// ============================================================================
// 8. Sodio
// ============================================================================
registerGuide({
  id: 'sodio',
  itName: 'Sodio',
  slug: 'sodio',
  category: 'salute',
  shortTitle: "Sodio nell'acqua del rubinetto: limiti, dieta iposodica e fonti",
  metaDescription:
    "Sodio nell'acqua potabile: limite di legge 200 mg/L, ideale sotto 50 mg/L. Cause, rilevanza per la dieta iposodica e come ridurlo.",
  searchKeywords: [
    'sodio acqua',
    'sodio acqua rubinetto',
    'acqua iposodica',
    'limite sodio acqua potabile',
    'sodio acqua addolcita',
    'na acqua',
    'sodio dieta iposodica',
  ],
  intro:
    "Il sodio nell'acqua del rubinetto è un parametro spesso trascurato, ma rilevante per chi segue una dieta iposodica per pressione alta, problemi renali o cardiovascolari. La quantità di sodio assunta con l'acqua è generalmente piccola rispetto a quella degli alimenti, ma per persone con vincoli stringenti può fare la differenza. Il D.Lgs. 18/2023 fissa il limite a 200 mg/L. Sapere quanto sodio contiene la propria acqua aiuta a fare scelte informate.",
  sections: [
    {
      heading: 'Cos\'è il sodio in acqua',
      paragraphs: [
        "Il sodio è un metallo alcalino che si trova naturalmente in tutte le acque, principalmente come ione sodio (Na+). È uno degli elementi più abbondanti nella crosta terrestre e si dissolve facilmente in acqua a contatto con rocce sedimentarie, depositi salini e suoli marini.",
        "È un elettrolita essenziale per l'organismo umano: regola il volume dei fluidi corporei, la pressione osmotica e la trasmissione degli impulsi nervosi. Tuttavia l'apporto medio della dieta italiana supera ampiamente il fabbisogno, principalmente per il consumo di sale (cloruro di sodio) negli alimenti.",
        "Nelle acque potabili italiane il sodio varia da pochi mg/L (acque alpine) a oltre 100 mg/L (acque costiere o di pianura). Il valore dipende dalla geologia del bacino di alimentazione e dalla presenza di intrusione salina o di acque profonde mineralizzate.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è naturale. Falde a contatto con depositi salini, rocce sedimentarie marine o argille ricche di sodio possono contenere concentrazioni elevate. Lungo le coste italiane, il fenomeno dell'intrusione salina (penetrazione di acqua di mare nelle falde sotterranee) è particolarmente importante e può portare il sodio a valori significativi.",
        "Una fonte antropica rilevante è l'uso del sale antighiaccio sulle strade in inverno. In zone montane e settentrionali, il dilavamento di queste sostanze contribuisce all'incremento di sodio e cloruri nelle acque superficiali e di subalveo.",
        "Anche i trattamenti domestici possono aumentare il sodio. Gli addolcitori a scambio ionico sostituiscono calcio e magnesio (durezza) con sodio: ogni grado francese rimosso aggiunge circa 4-5 mg/L di sodio. Un'acqua a 35 °F addolcita a 15 °F vede aumentare il sodio di circa 80-100 mg/L.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il sodio nell'acqua destinata al consumo umano un limite di 200 mg/L. È un parametro indicatore: il superamento segnala generalmente un'acqua troppo mineralizzata, talvolta con intrusione salina, ma non rappresenta un rischio sanitario acuto.",
        "Il valore ottimale per un'acqua di consumo abituale è sotto 50 mg/L. Acque con sodio sotto 20 mg/L sono classificabili come iposodiche e particolarmente indicate per persone che seguono diete a basso contenuto di sodio. Le acque minerali in bottiglia riportano per legge il contenuto di sodio.",
        "L'OMS non fissa un valore guida sanitario per il sodio nell'acqua potabile, perché il contributo dell'acqua all'apporto totale è generalmente modesto rispetto agli alimenti. Suggerisce però di tenere il valore basso per ragioni di palatabilità (sopra 200 mg/L l'acqua diventa percepibilmente salata).",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute e gusto',
      paragraphs: [
        "Per la popolazione generale, sana, il sodio dell'acqua del rubinetto contribuisce solo per il 5-10% all'apporto giornaliero totale, largamente dominato dagli alimenti. A 200 mg/L (limite di legge), bevendo 2 litri di acqua si assumono 400 mg di sodio, pari a circa 1 grammo di sale: una quantità apprezzabile ma non drammatica considerando che il consumo medio italiano supera i 9-10 grammi di sale al giorno.",
        "La situazione è diversa per chi segue diete iposodiche prescritte per ipertensione arteriosa, scompenso cardiaco, malattie renali croniche, ascite epatica. In questi casi anche l'apporto da acqua diventa rilevante e la scelta di un'acqua a basso contenuto di sodio (sotto 20 mg/L) può facilitare il controllo terapeutico. In caso di dubbio è consigliabile confrontarsi con il proprio medico.",
        "Sul piano organolettico, sopra 150-200 mg/L il sodio inizia a dare un sapore percepibilmente salato. Sopra 400-500 mg/L il sapore diventa marcatamente sgradevole e l'acqua diventa difficilmente bevibile.",
      ],
    },
    {
      heading: 'Come si rileva il sodio',
      paragraphs: [
        "Il sodio non si rileva con strisce reattive o kit colorimetrici domestici, perché non sviluppa colorazioni utili con i reagenti comuni. Per una stima indiretta si può usare la conducibilità: un valore alto suggerisce alta mineralizzazione complessiva, ma non distingue tra sodio e altri sali.",
        "Per misurarlo realmente serve un'analisi di laboratorio qualificato. I metodi standard sono la spettrometria di emissione atomica (ICP-OES o fiamma) o la cromatografia ionica. Il limite di rilevazione tipico è sotto 1 mg/L, con precisione adeguata anche per acque iposodiche.",
        "Le acque minerali in bottiglia riportano per legge il sodio in etichetta, espresso come mg/L. Per chi segue diete iposodiche e vuole bere acqua del rubinetto è quindi importante richiedere un'analisi specifica.",
      ],
    },
    {
      heading: 'Come si riduce il sodio',
      paragraphs: [
        "Il sistema più efficace è l'osmosi inversa, che rimuove il 90-95% del sodio insieme agli altri sali. È adatta per il consumo diretto, con installazione tipicamente sotto-lavello.",
        "La distillazione rimuove praticamente tutto il sodio, ma è poco usata in ambito domestico per costi e tempi.",
        "Gli addolcitori non riducono il sodio: lo aumentano. Per chi segue diete iposodiche è importante non installare un addolcitore sulla linea dell'acqua da bere, oppure prevedere un by-pass dedicato al rubinetto della cucina. Una soluzione comune è installare l'addolcitore solo sui circuiti tecnici (lavatrici, caldaie) e tenere il rubinetto della cucina su acqua non addolcita o trattata con osmosi.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 95% del sodio',
        "Distillazione: efficace ma poco pratica",
        "Addolcitori: NON riducono il sodio, lo aumentano",
        'By-pass dell\'addolcitore sul rubinetto della cucina per dieta iposodica',
      ],
    },
  ],
  faqs: [
    {
      q: "Quanto sodio devo cercare in un'acqua per dieta iposodica?",
      a: "Per una dieta iposodica si considerano idonee acque con sodio sotto 20 mg/L. Per regimi molto restrittivi si scendono a valori sotto 10 mg/L. Il valore di legge di 200 mg/L è troppo alto per queste esigenze. Conviene verificare con un'analisi specifica e, in presenza di vincoli medici, confrontarsi con il proprio medico per la scelta dell'acqua più adatta.",
    },
    {
      q: "L'acqua addolcita ha più sodio?",
      a: "Sì. L'addolcitore a scambio ionico sostituisce calcio e magnesio (responsabili della durezza) con sodio. Per ogni grado francese rimosso, il sodio aumenta di circa 4-5 mg/L. Un'acqua a 35 °F addolcita a 15 °F vede aumentare il sodio di circa 80-100 mg/L. Per persone in dieta iposodica è importante non bere l'acqua addolcita o prevedere un by-pass non addolcito al rubinetto della cucina.",
    },
    {
      q: "L'acqua salata fa male?",
      a: "Dipende da quanto è salata e dalla situazione personale. Alle concentrazioni dell'acqua potabile (sotto 200 mg/L per legge) non comporta rischi per persone sane. Per chi soffre di ipertensione, insufficienza cardiaca o renale, ogni apporto extra di sodio è rilevante e l'acqua va scelta tra le opzioni iposodiche. In caso di dubbio è sempre consigliabile confrontarsi con il proprio medico.",
    },
    {
      q: 'Posso bere acqua con 100 mg/L di sodio?',
      a: "Per una persona sana sì, è ben sotto il limite di legge e contribuisce solo per circa il 4% all'apporto giornaliero di sodio raccomandato. Per chi è in dieta iposodica, 100 mg/L è già un valore alto: bevendo 2 litri di acqua si assumono 200 mg di sodio extra, equivalenti a 0,5 g di sale. In questi casi conviene scegliere acque sotto 20 mg/L.",
    },
    {
      q: "Come si elimina il sodio dall'acqua?",
      a: "Il metodo più efficace e pratico è l'osmosi inversa, che rimuove il 90-95% del sodio. La distillazione è ancora più efficace ma poco diffusa in casa. Gli addolcitori non vanno usati per ridurre il sodio: anzi, lo aumentano. La bollitura non rimuove il sodio, lo concentra. Per esigenze mediche serve un sistema dedicato come l'osmosi inversa sotto-lavello.",
    },
  ],
  relatedIds: ['cloruri', 'durezza_totale', 'conducibilita', 'solfati'],
  ctaContext: "Per misurare il contenuto di sodio della tua acqua del rubinetto, fondamentale per dieta iposodica e ipertensione, con un laboratorio qualificato:",
});

// ============================================================================
// 9. Solfati
// ============================================================================
registerGuide({
  id: 'solfati',
  itName: 'Solfati',
  slug: 'solfati',
  category: 'estetica',
  shortTitle: "Solfati nell'acqua del rubinetto: limiti, sapore e impianti",
  metaDescription:
    "Solfati nell'acqua potabile: limite di legge 250 mg/L, effetti lassativi a concentrazioni elevate, sapore amaro e corrosione del calcestruzzo. Guida completa.",
  searchKeywords: [
    'solfati acqua',
    'solfati acqua rubinetto',
    'limite solfati acqua potabile',
    'so4 acqua',
    'sapore amaro acqua',
    'solfati gesso acqua',
  ],
  intro:
    "I solfati sono naturalmente presenti in molte acque potabili italiane, soprattutto in zone con depositi di gesso o anidrite. A basse concentrazioni passano inosservati; a livelli alti danno sapore amaro all'acqua, possono avere lieve effetto lassativo nei consumatori non abituati e aggrediscono cementi e calcestruzzi. Il D.Lgs. 18/2023 fissa il limite a 250 mg/L. Capire cosa significa il valore della propria acqua aiuta a fare scelte informate su consumo e impianti.",
  sections: [
    {
      heading: "Cosa sono i solfati",
      paragraphs: [
        "I solfati sono ioni con formula SO4 2-, composti dallo zolfo in stato di ossidazione massima legato a quattro atomi di ossigeno. Sono molto solubili in acqua nella maggior parte dei sali (solfato di sodio, magnesio, calcio in misura minore) e diffusamente presenti in natura.",
        "Si formano per ossidazione di minerali contenenti zolfo, come pirite e gesso, attraverso processi chimici naturali. Sono uno dei componenti principali dell'acqua di mare, dove si trovano a concentrazioni intorno a 2700 mg/L. Nelle acque potabili italiane variano tipicamente tra 10 e 200 mg/L, con punte oltre 250 mg/L in zone gessose.",
        "I solfati non sono tossici. Sono comunemente usati in farmacia come lassativi salini (solfato di sodio, solfato di magnesio), proprio perché ad alte dosi richiamano acqua nell'intestino. Sono anche usati nell'industria alimentare e cosmetica.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è geologica. Falde a contatto con depositi gessosi (solfato di calcio idrato) o anidritici (solfato di calcio anidro) hanno tipicamente concentrazioni elevate di solfati, perché questi minerali sono moderatamente solubili. Le regioni italiane più interessate sono Emilia-Romagna, Marche, Basilicata, Sicilia e zone della Toscana, dove affiorano formazioni gessose evaporitiche.",
        "Una seconda sorgente importante è l'ossidazione di minerali sulfurei, soprattutto la pirite (solfuro di ferro). In presenza di aria e acqua, la pirite si ossida producendo acido solforico che si combina con altri ioni formando solfati. È un processo naturale tipico di zone minerarie e di alcuni bacini sedimentari.",
        "Fonti antropiche includono scarichi industriali (concerie, miniere, industrie chimiche), ricaduta atmosferica da emissioni di anidride solforosa, e fertilizzanti contenenti solfati. Nelle zone agricole il contributo antropico può essere significativo.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per i solfati un limite di 250 mg/L nell'acqua destinata al consumo umano. È un parametro indicatore, basato principalmente su considerazioni di sapore e di compatibilità con i materiali delle reti, non su rischio sanitario.",
        "Il valore ottimale è sotto 100 mg/L. In questa fascia l'acqua è gradevole e non comporta problemi tecnici. Tra 100 e 250 mg/L può essere percepibile un retrogusto leggermente amaro, soprattutto in associazione con magnesio.",
        "L'OMS adotta un valore guida simile (250 mg/L), motivato dal fatto che concentrazioni più alte possono dare effetto lassativo nei consumatori non abituati e influenzare negativamente il sapore. L'EPA segue lo stesso riferimento.",
      ],
    },
    {
      heading: 'Perché monitorarli: effetti su gusto, salute e impianti',
      paragraphs: [
        "L'effetto più comune è organolettico. Sopra 200-250 mg/L i solfati danno un sapore amaro o astringente, soprattutto in presenza di magnesio (il solfato di magnesio è il classico sale inglese). Il sapore può essere fastidioso e scoraggiare il consumo.",
        "Sopra 500-1000 mg/L, soprattutto in associazione con magnesio, può manifestarsi un effetto lassativo transitorio nei consumatori non abituati. È un effetto reversibile e di solito si attenua con l'adattamento, ma può essere fastidioso in viaggi o trasferimenti.",
        "Sul piano impiantistico, i solfati a concentrazioni elevate sono aggressivi verso cementi e calcestruzzi (attacco solfatico): possono degradare condotte in cemento-amianto storiche e strutture in calcestruzzo a contatto con l'acqua. Inoltre favoriscono la corrosione di alcune leghe ferrose. Per questo per condotte e strutture esposte ad acque solfatiche si usano cementi specifici resistenti ai solfati.",
      ],
    },
    {
      heading: 'Come si rilevano i solfati',
      paragraphs: [
        "Le strisce reattive permettono uno screening con sensibilità di 50-100 mg/L. Sono utili per fasce indicative ma poco precise.",
        "I kit colorimetrici turbidimetrici precipitano i solfati come solfato di bario, e misurano la torbidità risultante: la precisione è di 10-20 mg/L. Vengono usati in laboratori di campo e da gestori idrici per controlli rapidi.",
        "L'analisi di laboratorio qualificato usa cromatografia ionica o turbidimetria standardizzata, con metodi validati conformi alle norme tecniche. Il limite di rilevazione è di 1-5 mg/L, ampiamente sufficiente per inquadrare correttamente la situazione. È la modalità più affidabile per documentare il valore.",
      ],
    },
    {
      heading: 'Come si riducono i solfati',
      paragraphs: [
        "L'osmosi inversa è il sistema domestico più efficace, con rimozione del 90-99%. È particolarmente adatta per zone con acque gessose dove i solfati sono persistentemente alti.",
        "Lo scambio ionico anionico con resine specifiche scambia gli ioni solfato con cloruri. È usato in impianti più grandi e dove serve trattare tutta l'acqua di casa.",
        "Sistemi a nanofiltrazione hanno costi e prestazioni intermedi tra osmosi inversa e ultrafiltrazione, e rimuovono efficacemente i solfati. Filtri a carbone attivo e addolcitori standard non li rimuovono.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 99% dei solfati',
        'Nanofiltrazione: efficace e meno selettiva',
        "Scambio ionico anionico: per impianti più grandi",
        'Carbone attivo: NON rimuove i solfati',
        'Addolcitori standard: NON rimuovono i solfati',
      ],
    },
  ],
  faqs: [
    {
      q: 'Bere acqua con tanti solfati fa male?',
      a: "Alle concentrazioni dell'acqua potabile italiana (limite 250 mg/L) i solfati non sono tossici. Sopra 500-1000 mg/L possono avere effetto lassativo nei consumatori non abituati, ma si tratta di un effetto reversibile e che tende ad attenuarsi con l'adattamento. Per persone con patologie intestinali croniche è prudente bere acque a basso contenuto di solfati e confrontarsi con il medico in caso di dubbio.",
    },
    {
      q: "L'acqua sa di amaro: dipende dai solfati?",
      a: "Spesso sì. Il sapore amaro o astringente dell'acqua è tipicamente legato alla presenza di solfati, soprattutto se associati a magnesio. Sopra 200 mg/L molti consumatori percepiscono questo retrogusto, sopra 400 mg/L diventa marcato. Per confermare conviene fare un'analisi di laboratorio che misuri solfati, magnesio e calcio insieme.",
    },
    {
      q: 'I solfati sono pericolosi per le caldaie?',
      a: "Sono più aggressivi verso cementi e calcestruzzi che verso metalli. Per le caldaie il problema maggiore è la durezza, non i solfati. Tuttavia in presenza di cementi di scarsa qualità in serbatoi o vasche di accumulo, acque ad alto contenuto di solfati possono provocare degrado lento delle strutture. Per condotte e strutture esposte ad acque solfatiche esistono cementi specifici resistenti.",
    },
    {
      q: 'Come si eliminano i solfati?',
      a: "Il metodo più diffuso in ambito domestico è l'osmosi inversa, che rimuove il 90-99% dei solfati. Per trattamenti più grandi si usa lo scambio ionico anionico con resine specifiche. Filtri a carbone attivo e addolcitori a scambio cationico non rimuovono i solfati. La bollitura li concentra, non li elimina.",
    },
    {
      q: "Qual è la concentrazione tipica di solfati in Italia?",
      a: "Varia molto in base alla geologia. Acque alpine e prealpine hanno tipicamente solfati sotto 30 mg/L. Acque della Pianura Padana si collocano tra 30 e 100 mg/L. In Emilia-Romagna, Marche e zone con depositi gessosi i valori possono superare 200 mg/L. In Sicilia e Basilicata alcune sorgenti raggiungono o superano il limite di legge.",
    },
  ],
  relatedIds: ['cloruri', 'sodio', 'durezza_totale', 'conducibilita'],
  ctaContext: "Per analizzare il contenuto di solfati della tua acqua del rubinetto, soprattutto se vivi in zone gessose, con un laboratorio qualificato:",
});

// ============================================================================
// 10. Cloruri
// ============================================================================
registerGuide({
  id: 'cloruri',
  itName: 'Cloruri',
  slug: 'cloruri',
  category: 'estetica',
  shortTitle: "Cloruri nell'acqua del rubinetto: limiti, sapore e intrusione salina",
  metaDescription:
    "Cloruri nell'acqua potabile: limite di legge 250 mg/L, segnali di intrusione salina, sapore e corrosione delle tubazioni. Guida completa.",
  searchKeywords: [
    'cloruri acqua',
    'cloruri acqua rubinetto',
    'limite cloruri acqua potabile',
    'cl acqua',
    'acqua salata rubinetto',
    'intrusione salina falda',
  ],
  intro:
    "I cloruri sono presenti in tutte le acque del rubinetto, generalmente a basse concentrazioni. Quando i valori si alzano sono spesso un segnale di intrusione salina nelle falde costiere o di contaminazione da sale antighiaccio. Oltre a influenzare il sapore (sopra 200-250 mg/L l'acqua diventa percepibilmente salata), i cloruri sono aggressivi verso molti metalli e accelerano la corrosione delle tubazioni. Il D.Lgs. 18/2023 fissa il limite a 250 mg/L.",
  sections: [
    {
      heading: "Cosa sono i cloruri",
      paragraphs: [
        "I cloruri sono ioni con formula Cl-, presenti naturalmente nell'acqua come prodotto della dissoluzione del cloruro di sodio (sale comune) e di altri sali contenenti cloro. Da non confondere con il cloro residuo usato per la disinfezione: i cloruri sono completamente diversi sia chimicamente sia per ruolo sanitario.",
        "Sono uno degli ioni più diffusi nell'idrosfera. L'acqua di mare ha concentrazioni di cloruri intorno a 19.000 mg/L, mentre le acque dolci di buona qualità ne contengono tipicamente meno di 50 mg/L. Sono molto solubili e non subiscono trasformazioni chimiche significative durante il trasporto in rete.",
        "Per l'organismo umano i cloruri sono un elettrolita essenziale, necessario per l'equilibrio acido-base e per la produzione di acido cloridrico gastrico. Il fabbisogno è coperto largamente dal sale degli alimenti. L'apporto da acqua è generalmente minimo.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è naturale: dissoluzione di depositi salini sedimentari, contatto con rocce evaporitiche, presenza di acqua salata fossile in falde profonde. In Italia ampie zone della Pianura Padana profonda e di vari bacini meridionali contengono acque con cloruri elevati di origine geologica.",
        "L'intrusione salina è la fonte antropica più importante. Lungo tutte le coste italiane l'eccessivo emungimento di acque dolci dalle falde costiere ha provocato negli ultimi decenni la penetrazione di acqua di mare nei pozzi e nei sistemi di approvvigionamento. I cloruri sono il principale indicatore di questo fenomeno: la loro presenza in concentrazioni anomale è il primo segnale di intrusione.",
        "Altre fonti antropiche includono il sale antighiaccio usato sulle strade in inverno (rilevante in zone montane e settentrionali), scarichi industriali (concerie, industria chimica), reflui agricoli, perdite da serbatoi di salamoie per addolcitori non a tenuta. Anche il sale usato per la rigenerazione degli addolcitori, se sversato accidentalmente, può contaminare i punti di prelievo.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per i cloruri un limite di 250 mg/L nell'acqua destinata al consumo umano. È un parametro indicatore: il superamento non rappresenta un rischio sanitario diretto ma segnala un'acqua troppo salata e potenzialmente aggressiva verso le tubature.",
        "Il valore ottimale è sotto 50 mg/L. In questa fascia l'acqua ha sapore neutro, non è aggressiva verso i materiali metallici della rete e non indica contaminazioni significative. Tra 50 e 250 mg/L il sapore può essere leggermente percepibile, sopra 200 mg/L diventa salato.",
        "L'OMS adotta lo stesso valore guida (250 mg/L) basato su considerazioni di palatabilità e di compatibilità con i materiali. L'EPA degli Stati Uniti segue lo stesso riferimento.",
      ],
    },
    {
      heading: 'Perché monitorarli: effetti su sapore, impianti e corrosione',
      paragraphs: [
        "Il primo effetto dei cloruri elevati è organolettico. Tra 100 e 250 mg/L il sapore può essere percepibile come leggermente salato. Sopra 300 mg/L molte persone trovano l'acqua sgradevole, e sopra 500 mg/L diventa difficile da bere abitualmente.",
        "L'effetto più serio è sui materiali. I cloruri sono particolarmente aggressivi verso acciaio inox, acciai al carbonio, leghe di rame e zinco. Possono provocare corrosione per vaiolatura (pitting corrosion) e tensocorrosione (stress corrosion cracking). Negli scaldabagni e nelle caldaie, in particolare in presenza di temperature elevate, i cloruri accelerano il deterioramento.",
        "Sul piano sanitario, alle concentrazioni dell'acqua potabile i cloruri sono considerati sicuri. Per chi segue diete a basso contenuto di sodio è importante ricordare che cloruri elevati sono spesso associati a sodio elevato (cloruro di sodio dissolto): vale la pena verificare entrambi i parametri.",
      ],
    },
    {
      heading: 'Come si rilevano i cloruri',
      paragraphs: [
        "Le strisce reattive permettono uno screening con sensibilità di 50-100 mg/L. I kit colorimetrici a titolazione (metodo Mohr) precipitano i cloruri con argento e danno precisione di 5-10 mg/L. Sono usati nei laboratori scolastici e nei controlli sul campo.",
        "I conduttivimetri possono dare un'indicazione indiretta: la conducibilità è correlata alla mineralizzazione totale, e in acque dominate da cloruri c'è una correlazione abbastanza stretta. Non è però una misura specifica per cloruri.",
        "L'analisi di laboratorio qualificato usa cromatografia ionica o titolazione potenziometrica con metodi validati conformi alle norme tecniche. Il limite di rilevazione è di 1-2 mg/L. È il riferimento per documentare correttamente la qualità dell'acqua e identificare eventuale intrusione salina.",
      ],
    },
    {
      heading: 'Come si riducono i cloruri',
      paragraphs: [
        "L'osmosi inversa è il metodo più efficace: rimuove il 90-99% dei cloruri insieme alla maggior parte degli altri sali. È la soluzione domestica più diffusa per acque ad alta salinità.",
        "Lo scambio ionico anionico con resine specifiche scambia i cloruri con altri anioni come idrossili. Richiede rigenerazione con soda caustica ed è usato in impianti industriali più che domestici.",
        "La nanofiltrazione e l'elettrodialisi sono altre opzioni per trattamenti più grandi. La bollitura concentra i cloruri, non li elimina. I filtri a carbone attivo e gli addolcitori standard non li rimuovono. Per acque costiere con intrusione salina grave, l'osmosi inversa è di fatto l'unica soluzione domestica praticabile.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 99% dei cloruri',
        "Nanofiltrazione: alternativa efficace",
        "Scambio ionico anionico: per impianti industriali",
        'Addolcitori standard: NON rimuovono i cloruri',
        'Bollitura: NON elimina, concentra i cloruri',
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "L'intrusione salina è uno dei problemi ambientali più documentati delle coste italiane. ISPRA e ARPA hanno mappato esteso interessamento delle falde costiere di Adriatico, Tirreno e isole maggiori. Aree particolarmente colpite includono la pianura emiliano-romagnola tra Ravenna e Rimini, vaste zone della costa pugliese, la piana di Catania, alcune zone della Sardegna meridionale.",
        "Il fenomeno è accelerato da prelievi eccessivi per uso agricolo (irrigazione di colture intensive), turistico (alta stagione) e industriale. Il cambiamento climatico, con riduzione delle precipitazioni e siccità prolungate, aggrava ulteriormente il problema. Alcuni acquedotti costieri hanno dovuto cessare l'uso di pozzi storici per cloruri eccessivi e passare ad approvvigionamenti alternativi.",
      ],
    },
  ],
  faqs: [
    {
      q: 'Cloruri nell\'acqua: cosa significano?',
      a: "I cloruri indicano la presenza di sale (cloruro di sodio e altri composti del cloro) disciolto nell'acqua. A basse concentrazioni (sotto 50 mg/L) sono normali e di origine naturale. Concentrazioni elevate (oltre 100-200 mg/L) possono segnalare intrusione salina nelle falde costiere, contaminazione da sale antighiaccio o scarichi industriali. Da non confondere con il cloro residuo, che è il disinfettante aggiunto dagli acquedotti.",
    },
    {
      q: "L'acqua del mio rubinetto sa di salato: è normale?",
      a: "Dipende dalla zona. In aree costiere e in alcune zone con falde profonde mineralizzate, un leggero sapore salato sotto 250 mg/L è possibile e conforme alla legge. Se l'effetto è marcato o è comparso recentemente, conviene segnalarlo al gestore idrico e far analizzare l'acqua: potrebbe essere in atto un'intrusione salina o un cambio nella miscelazione delle fonti.",
    },
    {
      q: 'I cloruri rovinano la caldaia?',
      a: "I cloruri sono particolarmente aggressivi verso acciai inox e leghe ferrose, soprattutto a temperature elevate. Negli scaldabagni e nelle caldaie, in presenza di cloruri sopra 100-150 mg/L, possono accelerare la corrosione per vaiolatura. Per questo molti produttori indicano limiti specifici di cloruri per la garanzia degli scambiatori. In zone con cloruri elevati è importante verificare le specifiche dell'impianto.",
    },
    {
      q: 'Differenza tra cloruri e cloro?',
      a: "Sono cose completamente diverse, anche se i nomi si somigliano. I cloruri (Cl-) sono ioni del sale, presenti naturalmente nell'acqua. Il cloro libero o residuo è il disinfettante aggiunto dagli acquedotti per garantire la sicurezza microbiologica. I cloruri non danno odore o sapore di candeggina; il cloro residuo sì. Si misurano con metodi e strumenti diversi e hanno limiti di legge molto diversi: 250 mg/L per i cloruri, 0,2 mg/L per il cloro residuo.",
    },
    {
      q: 'Come si eliminano i cloruri?',
      a: "Il metodo efficace e pratico per uso domestico è l'osmosi inversa, che ne rimuove il 90-99%. Lo scambio ionico anionico è un'alternativa per impianti più grandi. La bollitura non li elimina e gli addolcitori standard nemmeno. In zone con intrusione salina cronica, dove i cloruri possono superare stabilmente i limiti, l'osmosi inversa è la soluzione domestica di riferimento per l'acqua da bere.",
    },
  ],
  relatedIds: ['sodio', 'conducibilita', 'solfati', 'durezza_totale'],
  ctaContext: "Per misurare i cloruri della tua acqua del rubinetto, indicatore chiave di intrusione salina e qualità complessiva, con un laboratorio qualificato:",
});

// ============================================================================
// 11. Fluoruri
// ============================================================================
registerGuide({
  id: 'fluoruri',
  itName: 'Fluoruri',
  slug: 'fluoruri',
  category: 'salute',
  shortTitle: "Fluoruri nell'acqua del rubinetto: limiti, denti e fluorosi",
  metaDescription:
    "Fluoruri nell'acqua potabile: limite di legge 1,5 mg/L. Effetti su denti e ossa, fluorosi dentale e zone italiane interessate. Guida 2026.",
  searchKeywords: [
    'fluoruri acqua',
    'fluoro acqua rubinetto',
    'limite fluoruri acqua potabile',
    'fluorosi dentale',
    'fluoruri carie',
    'fluoruri neonati',
    'fluoruri vulcani lazio',
  ],
  intro:
    "I fluoruri sono presenti in piccole quantità in molte acque italiane, e in alcune zone di origine vulcanica raggiungono concentrazioni naturali significative. A basse dosi proteggono i denti dalla carie, ma sopra il limite di legge di 1,5 mg/L possono provocare fluorosi dentale e, a esposizioni croniche elevate, problemi ossei. Conoscere il contenuto di fluoruri nella propria acqua è importante soprattutto per le famiglie con bambini piccoli.",
  sections: [
    {
      heading: "Cosa sono i fluoruri",
      paragraphs: [
        "I fluoruri sono composti che contengono lo ione fluoro (F-), elemento del gruppo degli alogeni. In acqua sono presenti come ioni liberi, derivanti dalla dissoluzione di minerali contenenti fluoro come fluorite (CaF2), apatite e alcune miche.",
        "Il fluoro ha un ruolo ambivalente per la salute umana. A basse concentrazioni (sotto 1 mg/L nell'acqua potabile) ha effetto protettivo contro la carie dentale: si incorpora nello smalto formando fluorapatite, più resistente all'attacco degli acidi prodotti dai batteri della placca. Per questo motivo molti paesi (Stati Uniti, Regno Unito) fluorano artificialmente l'acqua potabile.",
        "Sopra 1,5 mg/L l'effetto diventa negativo. Il fluoro in eccesso si deposita nello smalto in formazione provocando fluorosi dentale, una condizione che si manifesta come macchie o striature bianche, gialle o brune sui denti. A esposizioni croniche molto elevate (sopra 5-10 mg/L per anni) può provocare fluorosi scheletrica, con dolore alle ossa e rigidità articolare.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è naturale. Acque a contatto con rocce vulcaniche, granitiche o particolari formazioni sedimentarie possono contenere fluoruri elevati. In Italia le zone più interessate sono quelle vulcaniche del Lazio (zone dei Colli Albani, Vico, Bolsena), della Campania (Roccamonfina, Vesuvio, Campi Flegrei) e di alcune aree della Sicilia (Etna).",
        "In queste aree le acque possono contenere naturalmente fluoruri tra 1 e 3 mg/L, in alcune sorgenti termali anche oltre. Storicamente alcuni comuni del Lazio e della Campania hanno avuto deroghe per gestire valori di fluoruri elevati di origine naturale, gradualmente rientrati con miscelazioni di fonti alternative.",
        "L'Italia non pratica la fluorazione artificiale dell'acqua potabile, a differenza di altri paesi. La maggior parte delle acque italiane ha quindi fluoruri di origine esclusivamente naturale, tipicamente sotto 0,5 mg/L. Eventuali superamenti sono dovuti alla geologia locale.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per i fluoruri un limite massimo di 1,5 mg/L nell'acqua destinata al consumo umano. È un parametro sanitario stretto: il superamento è motivo di non-conformità e richiede interventi correttivi del gestore.",
        "Il valore considerato ottimale è sotto 0,7 mg/L. In questa fascia c'è ancora l'effetto protettivo sulla carie senza rischio significativo di fluorosi dentale. L'OMS indica come valore di riferimento sanitario lo stesso 1,5 mg/L e raccomanda di mantenere i valori sotto questa soglia, specialmente per le aree con clima caldo dove il consumo di acqua è maggiore.",
        "L'EPA degli Stati Uniti ha un limite massimo di 4 mg/L (limite sanitario) e un limite raccomandato di 2 mg/L (per prevenire la fluorosi dentale moderata), più permissivo del riferimento europeo. La Comunità Europea ha scelto un approccio più cautelativo.",
      ],
    },
    {
      heading: 'Perché monitorarli: effetti su denti, ossa e salute',
      paragraphs: [
        "L'effetto più documentato dei fluoruri elevati è la fluorosi dentale. Si manifesta solo nei denti permanenti durante la loro formazione (dai 6 mesi agli 8 anni circa), per esposizione cronica a fluoruri sopra 1,5-2 mg/L. Le forme lievi sono solo estetiche (macchie bianche opache); le forme moderate e severe provocano macchie marroni e fragilità dello smalto.",
        "A esposizioni molto elevate (sopra 4-10 mg/L per molti anni), particolarmente in zone endemiche dell'Asia e dell'Africa, può manifestarsi la fluorosi scheletrica: deposizione anomala di fluoro nelle ossa con dolore articolare, rigidità, e nei casi gravi deformità scheletriche. Nelle condizioni italiane questo rischio è praticamente assente.",
        "L'effetto protettivo sulla carie esiste invece a concentrazioni intorno a 0,5-1 mg/L. Per questo l'OMS suggerisce che, dove possibile, le acque non scendano sotto 0,5 mg/L per mantenere il beneficio dentale. In zone con acque povere di fluoro è prudente, per i bambini, valutare con il pediatra eventuali integrazioni di fluoro tramite dentifrici fluorati o supplementi specifici.",
      ],
      bullets: [
        '0,5-1 mg/L: beneficio protettivo sulla carie',
        '1-1,5 mg/L: limite raccomandato OMS, possibile fluorosi lieve',
        'Sopra 1,5 mg/L: non conforme legge, rischio fluorosi dentale',
        'Categorie sensibili: bambini in fase di formazione dei denti permanenti (0-8 anni)',
      ],
    },
    {
      heading: 'Come si rilevano i fluoruri',
      paragraphs: [
        "I fluoruri non si misurano con strisce reattive comuni: richiedono metodi analitici specifici. I kit colorimetrici basati sul reagente SPADNS forniscono precisione di 0,1-0,2 mg/L e sono usati in laboratori di campo.",
        "Per misurazioni precise si usano elettrodi ione-selettivi e cromatografia ionica. L'elettrodo ione-selettivo è uno strumento affidabile e relativamente economico, usato dai gestori idrici per monitoraggi di routine.",
        "L'analisi di laboratorio qualificato fornisce il valore certificato con metodi validati, conformi alle norme tecniche. Per chi vive in zone vulcaniche del Lazio o della Campania, o per famiglie con bambini piccoli, è particolarmente utile conoscere il valore esatto della propria acqua.",
      ],
    },
    {
      heading: 'Come si riducono i fluoruri',
      paragraphs: [
        "I fluoruri sono tra i contaminanti più difficili da rimuovere con sistemi semplici. La bollitura non li elimina, anzi li concentra. I normali filtri a carbone attivo hanno efficacia limitata e variabile.",
        "I sistemi efficaci sono due. L'osmosi inversa rimuove il 90-95% dei fluoruri ed è la soluzione domestica più comune. I filtri ad allumina attivata sono specifici per fluoruri e arsenico: usano ossido di alluminio che adsorbe selettivamente questi ioni. Vanno rigenerati o sostituiti periodicamente.",
        "In ambito acquedottistico si usano anche metodi di precipitazione con sali di calcio e magnesio, e processi elettrochimici per impianti più grandi. Per uso domestico, in zone con fluoruri elevati persistenti, l'osmosi inversa sotto-lavello dedicata all'acqua da bere è la scelta più pratica.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 95% dei fluoruri',
        'Filtri ad allumina attivata: specifici per fluoruri',
        'Carbone attivo: efficacia limitata e variabile',
        'Bollitura: NON elimina, concentra i fluoruri',
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "Le zone vulcaniche del Lazio, in particolare i comuni dei Colli Albani e dell'area del Lago di Bolsena, hanno storicamente registrato valori di fluoruri elevati di origine naturale. Negli anni passati alcuni di questi comuni hanno operato con deroghe ministeriali, gestendo la situazione tramite miscelazione con acque a basso contenuto di fluoruri o sistemi di trattamento dedicati.",
        "Anche in Campania, soprattutto nelle zone del Vesuvio, dei Campi Flegrei e di Roccamonfina, le acque di alcune sorgenti contengono fluoruri elevati. Anche qui si è proceduto storicamente con interventi di miscelazione e trattamento. Le situazioni sono progressivamente rientrate nei limiti grazie agli interventi degli acquedotti, ma in alcune aree marginali possono persistere valori vicini ai limiti.",
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua con fluoro fa bene o fa male ai denti?",
      a: "Dipende dalla concentrazione. Tra 0,5 e 1 mg/L i fluoruri proteggono lo smalto dalla carie ed è un effetto largamente documentato. Sopra 1,5 mg/L durante la formazione dei denti permanenti (0-8 anni) può comparire fluorosi dentale, condizione prevalentemente estetica nelle forme lievi. Per gli adulti il rischio principale a queste concentrazioni è dell'ordine estetico e di lungo termine. In caso di dubbio è opportuno confrontarsi con il proprio dentista.",
    },
    {
      q: "Posso dare l'acqua con fluoruri al neonato?",
      a: "Se i fluoruri sono sotto 0,7 mg/L non ci sono particolari controindicazioni, e c'è anzi un beneficio per la futura dentizione. Sopra 1 mg/L, e soprattutto vicino al limite di legge di 1,5 mg/L, è prudente diluire con acqua a basso contenuto di fluoruri per ridurre l'esposizione cumulativa. Sopra 2 mg/L per uso continuativo è meglio scegliere un'altra acqua per il biberon. In caso di dubbio è consigliabile confrontarsi con il pediatra.",
    },
    {
      q: "Quali zone italiane hanno fluoruri alti?",
      a: "Le aree vulcaniche del Lazio (Colli Albani, Vico, Bolsena), della Campania (Vesuvio, Campi Flegrei, Roccamonfina) e zone limitate della Sicilia (Etna). In queste zone le acque possono contenere naturalmente fluoruri tra 1 e 3 mg/L. Per famiglie con bambini piccoli residenti in queste aree è importante verificare la concentrazione esatta della propria acqua con un'analisi di laboratorio qualificato.",
    },
    {
      q: "Come si eliminano i fluoruri dall'acqua?",
      a: "L'osmosi inversa rimuove il 90-95% dei fluoruri ed è la soluzione domestica più efficace. I filtri ad allumina attivata sono specifici per fluoruri e arsenico, ma richiedono manutenzione regolare. Filtri a carbone attivo e bollitura non funzionano. Per chi vive in zone con fluoruri elevati persistenti, un sistema sotto-lavello a osmosi inversa dedicato all'acqua da bere è la scelta più pratica.",
    },
    {
      q: "L'Italia mette il fluoro nell'acqua come gli Stati Uniti?",
      a: "No, in Italia non si pratica la fluorazione artificiale dell'acqua potabile. I fluoruri presenti nelle acque italiane sono di origine esclusivamente naturale, dovuti alla geologia del territorio. In Italia la prevenzione della carie passa attraverso dentifrici fluorati e, per i bambini, supplementi prescritti dal pediatra quando indicato.",
    },
  ],
  relatedIds: ['arsenico', 'sodio', 'cloruri', 'durezza_totale'],
  ctaContext: "Per misurare il contenuto di fluoruri della tua acqua del rubinetto, fondamentale se vivi in zone vulcaniche o hai bambini piccoli, con un laboratorio qualificato:",
});

// ============================================================================
// 12. Ferro
// ============================================================================
registerGuide({
  id: 'ferro',
  itName: 'Ferro',
  slug: 'ferro',
  category: 'estetica',
  shortTitle: "Ferro nell'acqua del rubinetto: macchie rugginose, sapore e soluzioni",
  metaDescription:
    "Ferro nell'acqua potabile: limite di legge 200 µg/L. Cause delle macchie di ruggine, sapore metallico, effetti su biancheria e come rimuoverlo.",
  searchKeywords: [
    'ferro acqua',
    'ferro acqua rubinetto',
    'acqua ruggine',
    'limite ferro acqua potabile',
    'macchie ruggine biancheria',
    'come togliere ferro acqua',
  ],
  intro:
    "Il ferro è uno dei contaminanti più visibili dell'acqua del rubinetto: si vede sui sanitari come macchie rugginose, si sente come sapore metallico, lascia segni gialli sul bucato. Non è pericoloso per la salute alle concentrazioni delle acque potabili, ma è uno dei motivi più frequenti di lamentela degli utenti. Il D.Lgs. 18/2023 fissa il limite a 200 µg/L (microgrammi per litro). Conoscere la causa è il primo passo per eliminare il problema.",
  sections: [
    {
      heading: "Cos'è il ferro in acqua",
      paragraphs: [
        "Il ferro è uno degli elementi più abbondanti della crosta terrestre. In acqua si trova in due forme principali: ferro ferroso (Fe2+), solubile in acque povere di ossigeno; e ferro ferrico (Fe3+), che in presenza di ossigeno precipita rapidamente come idrossido di ferro (la classica ruggine).",
        "Quando l'acqua esce da una falda profonda anaerobica, il ferro è prevalentemente in forma ferrosa e l'acqua appare limpida. Al contatto con l'aria, il ferro si ossida e l'acqua diventa giallastra o rossastra, formando depositi sui sanitari e sul bucato.",
        "Nell'organismo umano il ferro è un nutriente essenziale, necessario per il trasporto dell'ossigeno nel sangue (emoglobina). Il fabbisogno è coperto largamente dagli alimenti. L'apporto da acqua è praticamente trascurabile: anche al limite di legge di 200 µg/L, bevendo 2 litri di acqua si assumono 0,4 mg di ferro, pari a circa il 3-4% del fabbisogno giornaliero di un adulto.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte naturale è il contatto dell'acqua con suoli e rocce contenenti minerali ferrosi (limonite, pirite, ematite). Falde profonde anaerobiche disciolgono facilmente il ferro, che resta in soluzione finché l'acqua non incontra ossigeno. Molte falde della Pianura Padana e di altre zone alluvionali hanno naturalmente ferro elevato.",
        "Una fonte molto frequente è interna all'impianto di distribuzione. Tubature in acciaio zincato o ferro, soprattutto se vecchie, si corrodono progressivamente rilasciando ferro nell'acqua. Questo è il problema tipico degli edifici degli anni '50-'70 con impianti idrici originali non risanati. Il ferro al rubinetto può essere molto superiore a quello che esce dall'acquedotto.",
        "Anche i serbatoi di accumulo possono contribuire, soprattutto se in acciaio non protetto o se accumulano sedimenti rugginosi sul fondo. La cosiddetta 'acqua del primo getto' al mattino, dopo che l'acqua è rimasta ferma per ore, può contenere concentrazioni molto più alte di ferro rispetto all'acqua corrente.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il ferro un limite di 200 µg/L (microgrammi per litro, cioè 0,2 mg/L) nell'acqua destinata al consumo umano. È un parametro indicatore: il superamento non rappresenta un rischio sanitario diretto, ma indica un'acqua di qualità organolettica insufficiente.",
        "Il valore ottimale è sotto 50 µg/L. A questa concentrazione il ferro è invisibile a occhio nudo, non si sente al sapore, non lascia macchie. Tra 50 e 200 µg/L può essere percepibile e provocare lievi problemi estetici. Sopra 200 µg/L i problemi diventano evidenti.",
        "L'OMS non fissa un valore guida sanitario per il ferro, perché la tossicità per via orale è estremamente bassa. Il riferimento è basato sulla palatabilità (sapore metallico sopra 300 µg/L) e sulla compatibilità con la biancheria (macchie sopra 300 µg/L).",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su sanitari, bucato e gusto',
      paragraphs: [
        "Il problema più visibile è la macchiatura. Il ferro ossidato precipita come ossido rosso-bruno su sanitari, rubinetti, piatti doccia. Sulla biancheria, soprattutto bianca, lascia macchie gialle difficili da rimuovere con i normali detergenti. Su tessuti delicati le macchie possono essere permanenti.",
        "Sul sapore, il ferro è percepibile sopra 100-200 µg/L come metallico, astringente. Anche tè, caffè e brodi preparati con acqua ferruginosa hanno un sapore alterato. Il ferro favorisce inoltre la crescita di alcuni batteri filamentosi (ferrobatteri) che possono colonizzare le tubature formando depositi gelatinosi.",
        "Sul piano sanitario, alle concentrazioni dell'acqua potabile il ferro è considerato non tossico. Anzi, è un nutriente essenziale. Il limite di legge è basato su considerazioni estetiche e organolettiche, non sanitarie. Per persone con emocromatosi (rara patologia da accumulo di ferro) è prudente confrontarsi con il proprio medico sulla scelta dell'acqua.",
      ],
    },
    {
      heading: 'Come si rileva il ferro',
      paragraphs: [
        "Le strisce reattive permettono uno screening rapido con sensibilità di 100-200 µg/L. Sono adeguate per identificare problemi macroscopici ma non per la conferma di valori vicini al limite.",
        "I kit colorimetrici a goccia con reagenti specifici (fenantrolina) danno precisione di 20-50 µg/L. L'analisi è semplice e rapida.",
        "L'analisi di laboratorio qualificato con spettrometria di emissione atomica (ICP-OES) o assorbimento atomico fornisce limiti di rilevazione di 1-5 µg/L. È il riferimento per documentare correttamente la qualità dell'acqua. Un laboratorio professionale distingue anche tra ferro disciolto e ferro totale (incluso quello particolato), informazione utile per scegliere il sistema di trattamento più adatto.",
      ],
    },
    {
      heading: 'Come si riduce il ferro',
      paragraphs: [
        "Il primo passo è capire la causa. Se il ferro arriva dall'acquedotto, vanno informati gestore e Comune. Se il problema è interno all'impianto, il rimedio definitivo è il risanamento delle tubazioni. Lasciare scorrere l'acqua al mattino per 1-2 minuti elimina i depositi accumulati durante la notte e migliora subito la situazione.",
        "Per il trattamento, il sistema più diffuso è l'ossidazione seguita da filtrazione. L'ossigeno (per aerazione) o l'ipoclorito ossidano il ferro ferroso a ferrico, che precipita come idrossido e viene trattenuto da un filtro a sabbia o a zeoliti speciali (greensand). È un sistema efficace per concentrazioni fino a diversi mg/L.",
        "L'osmosi inversa rimuove il ferro insieme agli altri sali, ma è sensibile alle particelle: in presenza di ferro alto serve un pre-trattamento. Lo scambio ionico cationico può rimuovere il ferro ferroso, ma viene saturato rapidamente in presenza di acque dure. Filtri a carbone attivo hanno effetto limitato sul ferro disciolto ma trattengono il particolato.",
      ],
      bullets: [
        'Ossidazione + filtrazione: sistema più efficace per ferro elevato',
        'Risanamento dell\'impianto idrico se la causa è interna',
        'Far scorrere l\'acqua al mattino per ridurre depositi notturni',
        "Osmosi inversa: efficace ma richiede pre-trattamento",
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua con ferro fa male?",
      a: "No, alle concentrazioni dell'acqua potabile il ferro non rappresenta un rischio sanitario. Anzi, è un nutriente essenziale. Il limite di legge di 200 µg/L è basato su considerazioni estetiche (macchie sui sanitari e sul bucato) e organolettiche (sapore metallico), non sanitarie. Per persone con emocromatosi è prudente confrontarsi con il proprio medico sulla scelta dell'acqua.",
    },
    {
      q: "L'acqua del rubinetto fa macchie gialle sulla biancheria: cosa fare?",
      a: "Quasi sempre è dovuto al ferro disciolto che si ossida durante il lavaggio. Sopra 300 µg/L le macchie sono frequenti. Il rimedio definitivo è installare un sistema di rimozione del ferro (ossidazione + filtrazione) o un addolcitore con resine specifiche per ferro. Per macchie già presenti su tessuti, esistono prodotti specifici a base di acido ossalico, ma sui tessuti delicati possono essere irreversibili.",
    },
    {
      q: "Perché l'acqua del mio rubinetto è marrone al mattino?",
      a: "Quasi sempre è ferro accumulato durante la notte nelle tubazioni. Quando l'acqua resta ferma per ore, il ferro disciolto si ossida e precipita come ruggine sulle pareti delle condotte interne. Aprendo il rubinetto, l'acqua mobilizza questi depositi. Far scorrere l'acqua per 1-2 minuti elimina il problema temporaneamente; per la soluzione definitiva serve risanare l'impianto o installare un sistema di trattamento.",
    },
    {
      q: "Posso bere l'acqua con ferro?",
      a: "Tecnicamente sì, non è tossico. È sgradevole al sapore (metallico sopra 200 µg/L) e può macchiare i denti se l'esposizione è cronica e molto elevata. Per chi ha tubature in ferro vecchie è prassi consigliata far scorrere l'acqua al mattino prima di berla, eliminando i primi millilitri che hanno ristagnato nelle tubazioni. Per uso quotidiano gradevole, conviene trattare l'acqua o risanare l'impianto.",
    },
    {
      q: 'Come si elimina il ferro?',
      a: "Il sistema più efficace è l'ossidazione seguita da filtrazione: si ossida il ferro disciolto con aria o ipoclorito, lo si fa precipitare come ruggine, lo si filtra. È un sistema usato dagli acquedotti e in versione domestica più piccola anche dall'utenza. L'osmosi inversa rimuove il ferro ma richiede pre-trattamento se il valore è alto. Filtri a carbone, addolcitori standard e bollitura sono parzialmente o per nulla efficaci.",
    },
  ],
  relatedIds: ['manganese', 'torbidita', 'ph', 'rame'],
  ctaContext: "Per analizzare il contenuto di ferro della tua acqua del rubinetto, identificare la causa delle macchie e scegliere il trattamento giusto, con un laboratorio qualificato:",
});

// ============================================================================
// 13. Manganese
// ============================================================================
registerGuide({
  id: 'manganese',
  itName: 'Manganese',
  slug: 'manganese',
  category: 'estetica',
  shortTitle: "Manganese nell'acqua del rubinetto: macchie nere, limiti e rimozione",
  metaDescription:
    "Manganese nell'acqua potabile: limite di legge 50 µg/L. Cause delle macchie nere su sanitari, effetti neurologici a dosi elevate e come trattarlo.",
  searchKeywords: [
    'manganese acqua',
    'manganese acqua rubinetto',
    'macchie nere sanitari',
    'limite manganese acqua potabile',
    'acqua nera rubinetto',
    'mn acqua',
  ],
  intro:
    "Il manganese è chimicamente simile al ferro e spesso li si trova insieme nelle acque del rubinetto. A differenza del ferro che colora di rosso-bruno, il manganese ossidato lascia macchie nere o marroni molto scure su sanitari e biancheria. Il limite di legge è severo, 50 µg/L, perché a esposizioni croniche elevate il manganese ha potenziali effetti neurologici. Capire come gestirlo è importante soprattutto per chi attinge da falde profonde.",
  sections: [
    {
      heading: "Cos'è il manganese in acqua",
      paragraphs: [
        "Il manganese è un metallo di transizione che si comporta in acqua in modo simile al ferro. Si trova prevalentemente come ione manganoso (Mn2+) in acque povere di ossigeno, e come ossidi insolubili (MnO2) in presenza di ossigeno o disinfettante. L'ossidazione è però più lenta del ferro e richiede pH alti o ossidanti più potenti.",
        "Nell'organismo umano il manganese è un nutriente essenziale a basse dosi, necessario per il funzionamento di alcuni enzimi. Il fabbisogno è coperto largamente dagli alimenti. Esposizioni croniche elevate, soprattutto per via inalatoria (lavoratori metallurgici), sono però associate a effetti neurologici simili al Parkinson (manganismo).",
        "Per via orale dall'acqua potabile, gli effetti tossici si manifestano solo a esposizioni elevate e prolungate. L'OMS ha rivisto nel tempo il valore guida sanitario, riducendolo progressivamente con la crescente evidenza sui potenziali effetti neurologici nei bambini.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte è quasi esclusivamente naturale. Falde profonde anaerobiche, soprattutto in zone con rocce ricche di manganese o con sedimenti fini di pianura, sono spesso interessate dal problema. In Italia diverse zone della Pianura Padana, della pianura toscana e di alcune aree del Sud hanno falde con manganese naturale superiore al limite di legge.",
        "Spesso ferro e manganese coesistono nelle stesse falde, con il manganese in concentrazioni inferiori ma più difficile da rimuovere. Il problema è particolarmente diffuso in zone alluvionali profonde.",
        "Le fonti antropiche sono meno significative, ma includono scarichi industriali (metallurgia, batterie, vernici) e percolato da discariche. Il manganese delle batterie è uno dei contaminanti emergenti in alcuni siti contaminati.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il manganese un limite di 50 µg/L nell'acqua destinata al consumo umano. È classificato come parametro indicatore (estetico) ma con considerazioni sanitarie crescenti, soprattutto per i bambini.",
        "Il valore ottimale è sotto 20 µg/L. A questa concentrazione non si formano macchie e non c'è preoccupazione sanitaria. Sopra 50 µg/L le macchie nere sono frequenti, sopra 100 µg/L diventano evidenti.",
        "L'OMS ha ritirato il vecchio valore guida sanitario (400 µg/L), proponendo nuovi riferimenti più cautelativi alla luce degli studi sui potenziali effetti neurologici nei bambini esposti per via orale. L'EPA degli Stati Uniti raccomanda 50 µg/L come limite estetico e 300 µg/L come limite sanitario, ma diversi stati hanno adottato valori più stringenti.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su sanitari, gusto e potenzialmente salute',
      paragraphs: [
        "L'effetto più evidente è la macchiatura. Il manganese ossidato precipita come ossido nero-bruno scuro su sanitari, biancheria, stoviglie in lavastoviglie. Le macchie sono più scure di quelle da ferro e più difficili da rimuovere. In lavatrice, anche a basse concentrazioni, può colorare il bucato bianco di grigio.",
        "Sul sapore, il manganese è percepibile sopra 100-200 µg/L come metallico-amaro. Anche caffè e tè preparati con acqua manganifera possono assumere un colore innaturalmente scuro.",
        "Sul piano sanitario, le evidenze epidemiologiche più recenti, soprattutto da studi su popolazioni esposte attraverso l'acqua potabile in Bangladesh e Quebec, suggeriscono possibili effetti sullo sviluppo cognitivo nei bambini esposti a manganese cronicamente alto. Per questo molti paesi hanno reso più stringenti i limiti. Per famiglie con neonati e bambini piccoli in zone con manganese vicino o superiore al limite, è prudente valutare un trattamento e in caso di dubbi sanitari rivolgersi al pediatra.",
      ],
    },
    {
      heading: 'Come si rileva il manganese',
      paragraphs: [
        "Le strisce reattive specifiche per manganese hanno sensibilità di 50-100 µg/L. I kit colorimetrici a goccia con persolfato e formaldossima danno precisione di 10-20 µg/L.",
        "L'analisi di laboratorio qualificato con spettrometria di emissione atomica o assorbimento atomico fornisce limiti di rilevazione di 1-2 µg/L. È il riferimento per misure precise, particolarmente importante quando si vuole verificare la conformità al limite di 50 µg/L. È utile far misurare manganese e ferro insieme, perché spesso coesistono e richiedono trattamenti integrati.",
      ],
    },
    {
      heading: 'Come si riduce il manganese',
      paragraphs: [
        "Il manganese è più difficile da rimuovere del ferro. L'ossidazione richiede pH alti (sopra 8,5) o ossidanti forti come permanganato di potassio, biossido di cloro o ozono. Una volta ossidato, il manganese precipita come ossido nero e viene trattenuto da filtri a sabbia o a zeoliti speciali (greensand impregnato di manganese, pyrolusite).",
        "Lo scambio ionico cationico può rimuovere il manganese ferroso disciolto, ma si esaurisce rapidamente in acque dure. L'osmosi inversa è efficace su tutte le forme di manganese ma sensibile alle particelle.",
        "Filtri a carbone attivo non rimuovono il manganese disciolto. Il sistema più adatto per zone con manganese persistente è ossidazione catalitica + filtrazione, soluzione comune nei trattamenti acquedottistici e nelle versioni domestiche più piccole.",
      ],
      bullets: [
        "Ossidazione (KMnO4, ozono) + filtrazione su greensand: standard per manganese elevato",
        "Osmosi inversa: efficace, richiede pre-trattamento",
        "Scambio ionico cationico: efficace su manganese ferroso",
        'Carbone attivo: NON rimuove manganese disciolto',
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua del rubinetto fa macchie nere sui sanitari: è manganese?",
      a: "Quasi sempre sì. Mentre il ferro lascia macchie rosso-brune, il manganese ossidato lascia macchie nere o marroni molto scure, spesso lucide. Si depositano su sanitari, scarichi, lavastoviglie. Una conferma definitiva richiede un'analisi di laboratorio qualificato che misuri sia ferro sia manganese.",
    },
    {
      q: "Il manganese nell'acqua è pericoloso per i bambini?",
      a: "Studi epidemiologici recenti suggeriscono possibili effetti sullo sviluppo cognitivo nei bambini esposti a manganese cronicamente elevato. Per neonati e bambini piccoli è prudente assicurarsi che l'acqua di consumo abituale resti sotto il limite di legge di 50 µg/L. In caso di valori superiori, si può scegliere un'altra acqua per il consumo diretto o installare un sistema di trattamento dedicato. In caso di dubbio è consigliabile rivolgersi al pediatra.",
    },
    {
      q: "Come si elimina il manganese dall'acqua?",
      a: "Il sistema più efficace è ossidazione (con permanganato di potassio, ozono o biossido di cloro) seguita da filtrazione su zeoliti speciali come il greensand. L'osmosi inversa rimuove il manganese ma è sensibile alle particelle e richiede pre-trattamento. Filtri a carbone attivo e bollitura non funzionano. Il sistema va scelto in base alla concentrazione di manganese e all'eventuale presenza concomitante di ferro.",
    },
    {
      q: "Perché spesso ferro e manganese sono insieme?",
      a: "Perché provengono dalle stesse fonti: falde profonde anaerobiche con sedimenti ricchi di minerali ferrosi e manganiferi. La chimica dei due elementi è simile (entrambi solubili in forma ridotta, insolubili in forma ossidata) ma il manganese richiede condizioni di ossidazione più severe. I trattamenti progettati per il ferro non sempre rimuovono completamente il manganese, che richiede sistemi più specifici.",
    },
    {
      q: "L'acqua con manganese cambia colore al sapone?",
      a: "Sì, è un fenomeno tipico. Quando l'acqua con manganese disciolto viene a contatto con saponi e detergenti alcalini, il pH alza e il manganese si ossida rapidamente. Il bucato bianco può diventare grigio o macchiarsi di nero. È uno dei segnali domestici di alta concentrazione di manganese, anche prima che compaiano macchie sui sanitari.",
    },
  ],
  relatedIds: ['ferro', 'torbidita', 'ph', 'arsenico'],
  ctaContext: "Per misurare il contenuto di manganese della tua acqua del rubinetto, identificare la causa delle macchie scure e proteggere lo sviluppo dei bambini, con un laboratorio qualificato:",
});

// ============================================================================
// 14. Piombo
// ============================================================================
registerGuide({
  id: 'piombo',
  itName: 'Piombo',
  slug: 'piombo',
  category: 'salute',
  shortTitle: "Piombo nell'acqua del rubinetto: rischi, edifici storici e soluzioni",
  metaDescription:
    "Piombo nell'acqua potabile: limite di legge 10 µg/L. Rischi per bambini e gravidanza, tubature pre-1970 e come ridurre l'esposizione. Guida 2026.",
  searchKeywords: [
    'piombo acqua',
    'piombo acqua rubinetto',
    'limite piombo acqua potabile',
    'piombo acqua rischi',
    'tubature piombo edifici storici',
    'piombo bambini neurotossicità',
    'come ridurre piombo acqua',
  ],
  intro:
    "Il piombo è uno dei contaminanti più temuti nell'acqua del rubinetto. È un metallo pesante neurotossico, particolarmente pericoloso per bambini e donne in gravidanza, per il quale non esiste una soglia di sicurezza sotto la quale sia 'innocuo'. Il D.Lgs. 18/2023 ha rafforzato il limite a 10 µg/L, con un ulteriore obiettivo di 5 µg/L entro il 2036. La presenza di piombo è quasi sempre legata alle tubature di vecchi edifici. Conoscere il rischio è il primo passo per ridurlo.",
  sections: [
    {
      heading: "Cos'è il piombo in acqua",
      paragraphs: [
        "Il piombo è un metallo pesante tossico per l'uomo a qualsiasi concentrazione. Nelle acque potabili si trova come ione Pb2+ disciolto o legato a particelle e sedimenti rilasciati dalle tubature. La sua tossicità è cumulativa: si accumula nelle ossa e nei tessuti molli, e viene rilasciato lentamente per decenni dopo l'esposizione iniziale.",
        "A differenza di molti altri contaminanti, il piombo non ha un valore di sicurezza chiaramente definito. Le evidenze epidemiologiche degli ultimi vent'anni mostrano effetti negativi anche a livelli prima considerati sicuri, in particolare sullo sviluppo neurologico dei bambini. Per questo OMS, EPA e ora anche la direttiva UE 2020/2184 hanno progressivamente abbassato i limiti.",
        "Il piombo nell'acqua è un problema tipicamente domestico, non degli acquedotti. Le centrali di potabilizzazione moderne non rilasciano piombo. Il piombo entra nell'acqua all'interno dell'edificio, dalle tubature, dalle saldature e dagli accessori in ottone.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è impiantistica. Nei sistemi di distribuzione interna degli edifici costruiti prima degli anni '70 si usavano comunemente tubazioni in piombo per le derivazioni interne, e saldature al piombo-stagno per i raccordi in rame. In Italia il piombo è stato gradualmente eliminato a partire dagli anni '70-'80, ma molti edifici storici di Roma, Milano, Torino, Napoli e altre città conservano ancora tratti di tubazione originale.",
        "Anche tubature in rame con saldature al piombo, fittings in ottone (lega di rame, zinco e talvolta piombo), valvole vecchie, miscelatori economici possono rilasciare piombo, soprattutto in acque corrosive (pH basso, conducibilità bassa, alta CO2). La normativa europea ha progressivamente ridotto il contenuto massimo di piombo nelle leghe a contatto con acqua potabile.",
        "Il rilascio dipende molto dal tempo di contatto. Il piombo si accumula nell'acqua quando questa rimane ferma per ore nelle tubazioni. La cosiddetta 'acqua del primo getto' al mattino, dopo una notte di stagnazione, può contenere piombo molto superiore a quello dell'acqua corrente. Per questo molti protocolli di analisi prevedono campionamento sia 'flushed' (dopo flussaggio) sia 'stagnant' (acqua del primo getto).",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il piombo un limite di 10 µg/L nell'acqua destinata al consumo umano. Prevede inoltre una riduzione del limite a 5 µg/L a partire dal 2036, riconoscendo che le evidenze sanitarie giustificano una soglia ancora più bassa. È un parametro sanitario stretto.",
        "Il valore ottimale è sotto 1 µg/L. L'OMS riconosce che non esiste un livello sicuro di piombo: ogni esposizione comporta un rischio incrementale, e l'obiettivo è ridurre al minimo possibile. L'EPA degli Stati Uniti ha definito un 'maximum contaminant level goal' di zero per il piombo nell'acqua potabile.",
        "Negli Stati Uniti il limite di azione (action level) è 15 µg/L: sopra questa soglia gli acquedotti devono intervenire sulla rete e informare gli utenti. La normativa europea è più stringente. Per famiglie con bambini piccoli o donne in gravidanza è prudente puntare a valori il più bassi possibile, ben sotto il limite di legge.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute, soprattutto bambini',
      paragraphs: [
        "Il piombo è particolarmente tossico per il sistema nervoso in sviluppo. L'esposizione cronica nei bambini, anche a livelli relativamente bassi, è associata a riduzione del quoziente intellettivo, difficoltà di apprendimento, problemi comportamentali e di attenzione. I bambini assorbono il piombo in quantità maggiore degli adulti e il loro cervello in sviluppo è più vulnerabile.",
        "Nelle donne in gravidanza il piombo attraversa la placenta e può accumularsi nel feto, con potenziali effetti sullo sviluppo neurologico. Negli adulti l'esposizione cronica è associata a ipertensione, problemi renali, anemia, e in epidemiologia a un possibile aumento del rischio cardiovascolare.",
        "L'esposizione acuta a dosi molto elevate provoca saturnismo (intossicazione da piombo) con sintomi gastrointestinali, neurologici ed ematologici. Alle concentrazioni delle acque potabili italiane il rischio di intossicazione acuta è molto basso, ma il rischio cumulativo da esposizione cronica è la principale preoccupazione. In caso di sospetta esposizione è opportuno rivolgersi al medico.",
      ],
      bullets: [
        'Bambini sotto 6 anni: più vulnerabili, effetti sullo sviluppo neurologico',
        'Donne in gravidanza: rischio per il feto attraverso la placenta',
        'Adulti: ipertensione, problemi renali, rischio cardiovascolare',
        "Nessuna soglia 'sicura': obiettivo minimizzare l'esposizione",
      ],
    },
    {
      heading: 'Come si rileva il piombo',
      paragraphs: [
        "Il piombo richiede sempre analisi di laboratorio qualificato. Le strisce reattive e i kit casalinghi non hanno la sensibilità necessaria per misurare valori sotto i 10 µg/L. La spettrometria di massa al plasma (ICP-MS) è il metodo di riferimento, con limiti di rilevazione di 0,1-0,5 µg/L.",
        "Per un quadro affidabile, è importante campionare correttamente. Un protocollo solido prevede due campioni: uno dopo flussaggio (3-5 minuti di scorrimento), che riflette il piombo nell'acqua della rete, e uno di primo getto al mattino (dopo almeno 6 ore di stagnazione), che riflette il piombo accumulato nelle tubazioni interne. Il confronto identifica l'origine del problema.",
        "L'analisi va richiesta a un laboratorio qualificato con metodi validati conformi alle norme tecniche. Per le famiglie con bambini piccoli residenti in edifici storici è particolarmente indicato eseguire un controllo, anche se non si percepiscono problemi: il piombo è invisibile, inodore e insapore.",
      ],
    },
    {
      heading: 'Come si riduce il piombo',
      paragraphs: [
        "Il rimedio definitivo è la sostituzione delle tubazioni in piombo. È un intervento costoso ma risolutivo. Anche la sostituzione di accessori vecchi (rubinetti, miscelatori, valvole) con prodotti certificati a contatto con acqua potabile riduce significativamente le fonti di piombo. La normativa europea limita il contenuto massimo di piombo nelle leghe degli accessori a contatto con acqua.",
        "Come misura immediata, lasciare scorrere l'acqua per 1-2 minuti al mattino prima di prelevare quella per bere riduce drasticamente l'esposizione: si elimina l'acqua che ha stagnato nelle tubazioni. Mai usare l'acqua calda del rubinetto per bere o cucinare, perché favorisce il rilascio di metalli dalle tubature.",
        "Per il trattamento, i sistemi efficaci sono filtri specifici certificati per la rimozione del piombo (filtri sotto-lavello con resine chelanti, sistemi a osmosi inversa). Non tutti i filtri a carbone sono efficaci: vanno scelti quelli con certificazione specifica (es. NSF/ANSI 53 negli Stati Uniti). L'osmosi inversa rimuove il 95-99% del piombo ed è la soluzione più completa.",
      ],
      bullets: [
        'Sostituzione tubazioni in piombo: rimedio definitivo',
        "Far scorrere l'acqua 1-2 minuti al mattino prima di bere",
        "Non usare acqua calda del rubinetto per cucinare o bere",
        'Filtri certificati per piombo o osmosi inversa per acqua da bere',
        "Sostituire accessori vecchi con prodotti certificati per acqua potabile",
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "Il problema del piombo nelle tubature di edifici storici italiani è ben documentato. A Roma, dove molti edifici del centro storico hanno impianti idrici originali dell'inizio Novecento o anteguerra, sono stati riscontrati casi di concentrazioni significative di piombo al rubinetto, soprattutto nei primi getti al mattino. Indagini condotte da ARPA Lazio e dall'Istituto Superiore di Sanità hanno evidenziato il problema in diversi quartieri.",
        "Anche a Milano, Torino e Napoli sono state documentate situazioni analoghe in edifici prebellici non ristrutturati. La direttiva UE 2020/2184, recepita dal D.Lgs. 18/2023, ha rafforzato proprio per questi motivi gli obblighi di monitoraggio del piombo al rubinetto e prevede una progressiva riduzione del limite. I gestori idrici sono tenuti a valutare il rischio nei tratti finali delle distribuzioni e a fornire informazioni agli utenti.",
      ],
    },
  ],
  faqs: [
    {
      q: "Posso bere l'acqua del rubinetto se vivo in un edificio storico?",
      a: "Dipende dallo stato dell'impianto. Se sono presenti ancora tubazioni in piombo o saldature al piombo, c'è un rischio reale di esposizione. La buona pratica è far scorrere l'acqua 1-2 minuti al mattino, non usare mai acqua calda per bere o cucinare, e per famiglie con bambini piccoli far eseguire un'analisi del piombo. Se i valori sono sopra 5-10 µg/L, conviene installare un sistema di trattamento certificato o pianificare il risanamento dell'impianto.",
    },
    {
      q: "Il piombo si elimina bollendo l'acqua?",
      a: "No, anzi è controproducente. La bollitura concentra il piombo perché evapora l'acqua ma il metallo resta nel liquido residuo. Per ridurre il piombo servono filtri certificati specifici, sistemi a osmosi inversa, o la sostituzione delle tubazioni. Le strategie immediate sono far scorrere l'acqua prima del prelievo e usare solo acqua fredda per il consumo alimentare.",
    },
    {
      q: "Come capire se ho tubature in piombo?",
      a: "Le tubazioni in piombo sono di colore grigio scuro opaco, morbide al taglio, con saldature visibili. Si riconoscono dal colore (più scuro del ferro zincato), dal peso (sono molto pesanti) e dal suono sordo se percosse. Se l'edificio è anteriore al 1970 e non è stato ristrutturato l'impianto, è possibile che siano presenti. Un idraulico esperto può identificarle con un'ispezione, ma la conferma definitiva sul rischio espositivo è un'analisi dell'acqua.",
    },
    {
      q: "Il piombo è pericoloso anche a basse concentrazioni?",
      a: "Sì. Le evidenze scientifiche degli ultimi vent'anni mostrano effetti sullo sviluppo neurologico dei bambini anche a livelli prima considerati sicuri. Per questo OMS, EPA e direttiva UE hanno progressivamente abbassato i limiti. L'obiettivo dei sistemi sanitari moderni è ridurre l'esposizione il più possibile, non solo restare sotto un limite formale. Per bambini e donne in gravidanza il target è il più basso possibile.",
    },
    {
      q: "Quanto costa un'analisi del piombo nell'acqua?",
      a: "Un'analisi singola del piombo presso un laboratorio qualificato costa generalmente tra 25 e 50 euro. Se si vuole valutare correttamente il rischio espositivo, conviene fare due campioni (primo getto e dopo flussaggio) ed eventualmente includere altri metalli pesanti (rame, nichel, cadmio) che spesso si associano. Pacchetti per metalli pesanti completi partono tipicamente da 80-150 euro.",
    },
    {
      q: "Le caraffe filtranti rimuovono il piombo?",
      a: "Alcune sì, altre no. Solo i modelli con cartucce specificamente certificate per il piombo (con menzione esplicita sulla confezione) sono efficaci, e con efficacia limitata nel tempo. Per famiglie con bambini in edifici a rischio, sistemi sotto-lavello a osmosi inversa o filtri certificati per piombo offrono protezione molto più affidabile rispetto alle caraffe generiche.",
    },
  ],
  relatedIds: ['rame', 'cadmio', 'nichel', 'cromo'],
  ctaContext: "Per analizzare la presenza di piombo nella tua acqua del rubinetto, fondamentale se vivi in edifici storici o hai bambini piccoli, con un laboratorio qualificato e metodi validati:",
});

// ============================================================================
// 15. Arsenico
// ============================================================================
registerGuide({
  id: 'arsenico',
  itName: 'Arsenico',
  slug: 'arsenico',
  category: 'salute',
  shortTitle: "Arsenico nell'acqua del rubinetto: rischi cronici e zone italiane",
  metaDescription:
    "Arsenico nell'acqua potabile: limite di legge 10 µg/L. Rischi tumorali a lungo termine, zone vulcaniche italiane e come ridurlo. Guida 2026.",
  searchKeywords: [
    'arsenico acqua',
    'arsenico acqua rubinetto',
    'limite arsenico acqua potabile',
    'arsenico viterbo lazio',
    'arsenico tumori',
    'come ridurre arsenico acqua',
    'arsenico campania',
  ],
  intro:
    "L'arsenico è un contaminante naturale dell'acqua del rubinetto, particolarmente presente in zone vulcaniche italiane come il Lazio settentrionale, parte della Toscana e della Campania. Anche a basse concentrazioni l'esposizione cronica è associata a un aumento del rischio di tumori e altre patologie. Per questo il D.Lgs. 18/2023 lo regola con un limite stretto di 10 µg/L. Per chi vive nelle aree interessate, conoscere e monitorare l'arsenico è fondamentale.",
  sections: [
    {
      heading: "Cos'è l'arsenico in acqua",
      paragraphs: [
        "L'arsenico è un semimetallo presente naturalmente nella crosta terrestre. In acqua si trova principalmente come arsenico inorganico, nelle forme arsenito (As III) e arseniato (As V). La forma trivalente è più tossica e più mobile, ma anche più difficile da rimuovere. L'arsenico organico (presente in alcuni alimenti come pesce e crostacei) è meno tossico.",
        "L'IARC classifica l'arsenico inorganico come cancerogeno certo per l'uomo (gruppo 1). L'esposizione cronica attraverso l'acqua potabile è associata a un aumento documentato del rischio di tumori della pelle, della vescica, dei polmoni e del fegato. Sono ben note epidemie di intossicazione cronica da arsenico in Bangladesh, India, Cile, Argentina, dove milioni di persone bevono acqua con arsenico molto superiore al limite.",
        "In Italia il problema è limitato ad alcune aree vulcaniche, dove l'arsenico è di origine geologica naturale. Le concentrazioni sono generalmente più basse di quelle delle zone endemiche, ma diverse aree hanno richiesto interventi specifici degli acquedotti per rientrare nei limiti europei.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è naturale-geologica. Le rocce vulcaniche, in particolare quelle del vulcanismo recente (Lazio settentrionale, Campania, parti della Toscana), contengono arsenico che si dissolve nelle acque sotterranee. Anche acque termali e idrotermali sono spesso ricche di arsenico.",
        "In Italia le aree storicamente interessate sono i bacini del Lazio settentrionale (provincia di Viterbo, alcuni comuni del Lazio centrale), zone della Toscana meridionale (Amiata, Maremma), parti della Campania (in particolare il vulcanico flegreo e vesuviano), zone della Sardegna (in alcune ex aree minerarie).",
        "Fonti antropiche sono storicamente legate ad attività minerarie, industria metallurgica, vecchi pesticidi a base di arsenico (oggi vietati), conservanti del legno (CCA, oggi banditi per uso residenziale). In Italia la principale fonte resta geologica, salvo in singoli siti contaminati specifici.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per l'arsenico un limite di 10 µg/L nell'acqua destinata al consumo umano. È un parametro sanitario stretto, basato sulla cancerogenicità del composto. Il limite è in linea con il valore guida OMS e con quello dell'EPA statunitense.",
        "Il valore ottimale è sotto 1 µg/L, soglia tecnologicamente raggiungibile e che minimizza il rischio cumulativo. L'OMS riconosce che il valore guida di 10 µg/L rappresenta un compromesso tecnico-economico, non una soglia di assenza di rischio: a 10 µg/L per esposizione lifetime ci si stima un rischio incrementale di tumore dell'ordine di 1 su 10.000 a 1 su 1.000.",
        "Storicamente il limite europeo era 50 µg/L, abbassato a 10 µg/L nel 2003. Negli anni successivi diverse aree italiane ottennero deroghe ministeriali per gestire la transizione, con valori intermedi. La situazione è progressivamente rientrata grazie a interventi degli acquedotti.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute, soprattutto a lungo termine',
      paragraphs: [
        "L'arsenico è un cancerogeno certo per l'uomo. L'esposizione cronica attraverso l'acqua potabile, anche a concentrazioni modeste ma protratte per decenni, è associata a un aumento documentato del rischio di tumori della pelle, della vescica, dei polmoni e del fegato.",
        "Oltre alla cancerogenicità, l'arsenico cronico è associato a malattie cardiovascolari (ipertensione, aterosclerosi), diabete di tipo 2, neuropatie periferiche, problemi dermatologici (ipercheratosi palmo-plantare, iperpigmentazione), effetti sullo sviluppo nei bambini, e in alcune popolazioni effetti sulla funzione cognitiva.",
        "Gli effetti tossici acuti si manifestano solo a dosi molto elevate (sopra 1000 µg/L), praticamente assenti nelle acque potabili italiane. La preoccupazione è quindi quasi esclusivamente per gli effetti cronici da esposizione protratta. In caso di esposizione documentata o dubbi sanitari è opportuno rivolgersi al medico.",
      ],
    },
    {
      heading: "Come si rileva l'arsenico",
      paragraphs: [
        "L'arsenico a basse concentrazioni (sotto 10 µg/L) richiede analisi di laboratorio qualificato. Le strisce reattive disponibili in commercio hanno sensibilità limitata e tendono a sottostimare. I kit di campo basati sulla generazione di arsina gassosa hanno precisione di 10-50 µg/L: utili per screening in zone endemiche ma non per verificare la conformità al limite europeo.",
        "Il metodo di riferimento è la spettrometria di massa al plasma (ICP-MS), con limiti di rilevazione di 0,1 µg/L. Alcuni laboratori usano anche assorbimento atomico con generazione di idruri. Un'analisi completa può anche speciare l'arsenico in As III e As V, informazione utile per scegliere il trattamento più adatto.",
        "Per chi vive in zone a rischio (Viterbo, Lazio settentrionale, Amiata, alcune zone della Campania) è particolarmente raccomandato verificare periodicamente la concentrazione di arsenico nella propria acqua, anche se il gestore certifica la conformità. La concentrazione può variare nel tempo in base alla provenienza dell'acqua e alle miscelazioni.",
      ],
    },
    {
      heading: "Come si riduce l'arsenico",
      paragraphs: [
        "L'arsenico è difficile da rimuovere con sistemi semplici. La bollitura lo concentra. La filtrazione con carbone attivo non è efficace sulla forma disciolta. Anche la disinfezione standard non lo elimina.",
        "I sistemi domestici efficaci sono filtri ad allumina attivata, specifici per arsenico e fluoruri; sistemi a ossidi di ferro granulari (GFH, GFO), che adsorbono selettivamente l'arsenico V; osmosi inversa, che rimuove il 90-95% dell'arsenico. Lo scambio ionico anionico è efficace per arsenico V ma meno per arsenico III.",
        "Per ottimizzare l'efficacia, l'arsenico III andrebbe preossidato a arsenico V con cloro o permanganato. Negli impianti acquedottistici delle zone interessate si usano sistemi industriali a base di adsorbenti specifici, coagulazione con sali di ferro, processi di scambio ionico in colonna. L'utente in zone a rischio dovrebbe valutare un'installazione sotto-lavello specifica per acqua da bere.",
      ],
      bullets: [
        "Filtri ad allumina attivata: specifici per arsenico",
        "Adsorbenti a ossidi di ferro (GFH, GFO): alta efficacia",
        'Osmosi inversa: rimuove fino al 95%',
        'Scambio ionico anionico: efficace soprattutto per As V',
        'Bollitura e carbone attivo standard: NON funzionano',
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "Il Lazio settentrionale è il caso italiano più documentato. Numerosi comuni delle province di Viterbo, Latina e parte della provincia di Roma hanno avuto storicamente acque con arsenico superiore al limite europeo di 10 µg/L. A partire dal 2003, l'Italia ha richiesto deroghe alla Commissione Europea per gestire la transizione. I comuni interessati hanno realizzato impianti di trattamento dedicati o cambiato fonti di approvvigionamento.",
        "Anche zone della Toscana meridionale, in particolare il bacino dell'Amiata (province di Siena e Grosseto), sono state interessate da problematiche analoghe per origine geologica. In Campania, alcune aree del vulcanico flegreo hanno richiesto interventi specifici. In Sardegna, alcune zone connesse a ex attività minerarie hanno avuto problemi di contaminazione.",
        "Anche oggi, in alcune piccole frazioni o comuni minori delle zone vulcaniche, possono persistere valori vicini al limite. La direttiva europea 2020/2184, recepita dal D.Lgs. 18/2023, mantiene il limite di 10 µg/L con obbligo di monitoraggio rafforzato nelle aree a rischio.",
      ],
    },
  ],
  faqs: [
    {
      q: "L'arsenico nell'acqua del rubinetto è pericoloso?",
      a: "Sì, l'arsenico è classificato come cancerogeno certo dall'IARC. L'esposizione cronica anche a basse concentrazioni, protratta per decenni, è associata a un aumento del rischio di tumori della pelle, vescica, polmoni e fegato. Il limite di legge di 10 µg/L riflette un compromesso tecnico-sanitario, non una soglia di assenza di rischio. Per minimizzare l'esposizione l'obiettivo è restare il più possibile sotto questo limite.",
    },
    {
      q: "Quali zone italiane hanno problemi di arsenico?",
      a: "Le aree storicamente più interessate sono il Lazio settentrionale (Viterbo e dintorni), zone della Toscana meridionale (bacino dell'Amiata, Maremma), parti della Campania vulcanica, alcune aree della Sardegna. In queste zone l'arsenico è di origine geologica naturale, legato al vulcanismo. La situazione è progressivamente rientrata grazie a interventi degli acquedotti, ma in alcuni piccoli comuni possono persistere valori vicini al limite.",
    },
    {
      q: "Come si elimina l'arsenico dall'acqua?",
      a: "I sistemi efficaci per uso domestico sono filtri ad allumina attivata (specifici per arsenico e fluoruri), adsorbenti a ossidi di ferro (GFH, GFO), osmosi inversa (rimuove il 90-95%). La bollitura e i normali filtri a carbone attivo NON funzionano. Per chi vive in zone a rischio, un sistema sotto-lavello specifico per acqua da bere è la soluzione più pratica e affidabile.",
    },
    {
      q: "Posso dare l'acqua con arsenico al neonato?",
      a: "Per neonati e bambini piccoli è prudente assicurarsi che l'acqua di consumo abituale sia ben sotto il limite di legge di 10 µg/L, idealmente sotto 1 µg/L. In zone a rischio, è opportuno verificare con un'analisi periodica e, in caso di valori prossimi al limite, scegliere un'acqua alternativa documentata o un sistema di trattamento specifico. In caso di dubbi è consigliabile confrontarsi con il pediatra.",
    },
    {
      q: "L'arsenico si percepisce al sapore?",
      a: "No, l'arsenico è completamente inodore, incolore e insapore anche a concentrazioni superiori al limite di legge. Non è possibile rilevarlo dai sensi. È uno dei contaminanti più insidiosi proprio per questa caratteristica: solo un'analisi chimica può confermare la sua presenza e la sua concentrazione. Per zone a rischio l'analisi periodica è l'unica forma di monitoraggio possibile.",
    },
  ],
  relatedIds: ['piombo', 'cadmio', 'fluoruri', 'pfas_totali'],
  ctaContext: "Per misurare l'arsenico nella tua acqua del rubinetto, indispensabile se vivi in zone vulcaniche o ad alta sospetta geologica, con un laboratorio qualificato:",
});

// ============================================================================
// 16. Rame
// ============================================================================
registerGuide({
  id: 'rame',
  itName: 'Rame',
  slug: 'rame',
  category: 'impianti',
  shortTitle: "Rame nell'acqua del rubinetto: macchie blu-verdi, corrosione e limiti",
  metaDescription:
    "Rame nell'acqua potabile: limite di legge 2 mg/L. Cause delle macchie blu-verdi su sanitari, corrosione delle tubature e come gestirlo.",
  searchKeywords: [
    'rame acqua',
    'rame acqua rubinetto',
    'macchie blu sanitari',
    'limite rame acqua potabile',
    'corrosione tubazioni rame',
    'sapore metallico acqua rame',
  ],
  intro:
    "Il rame nell'acqua del rubinetto è quasi sempre legato alle tubature in rame dell'impianto interno, che si corrodono lentamente rilasciando il metallo. A basse concentrazioni non è pericoloso, anzi è un nutriente essenziale, ma a livelli elevati può provocare disturbi gastrointestinali e lasciare caratteristiche macchie blu-verdi su sanitari e biancheria. Il D.Lgs. 18/2023 fissa il limite a 2 mg/L. Capire le cause aiuta a proteggere salute e impianti.",
  sections: [
    {
      heading: "Cos'è il rame in acqua",
      paragraphs: [
        "Il rame è un metallo di transizione largamente usato nelle tubature degli impianti idrici domestici. Nelle acque potabili si trova come ione Cu2+ disciolto o legato a particelle e sedimenti rilasciati dalle tubature. È un nutriente essenziale per l'uomo a basse dosi, necessario per il funzionamento di molti enzimi.",
        "A differenza di molti altri metalli pesanti, il rame ha un sapore caratteristico (metallico-amaro) percepibile sopra 1-2 mg/L. Questo lo rende meno insidioso del piombo o dell'arsenico, perché il consumatore se ne accorge prima di raggiungere dosi tossiche.",
        "Le acque acquedottistiche escono dalle centrali tipicamente con rame inferiore a 100 µg/L. Il rame nell'acqua al rubinetto è quasi sempre prodotto dal contatto con le tubazioni dell'impianto interno, soprattutto in acque corrosive (pH basso, alta CO2 libera, bassa conducibilità).",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è impiantistica. Le tubature in rame, ampiamente usate negli impianti idrici degli edifici degli ultimi cinquant'anni, si corrodono lentamente in presenza di acque aggressive. Il rame si dissolve e raggiunge il rubinetto. Il fenomeno è particolarmente marcato in acque con pH inferiore a 7, ricche di anidride carbonica o povere di sali (acque alpine non equilibrate).",
        "Il rilascio è massimo nei primi millilitri di acqua dopo periodi di stagnazione: la cosiddetta acqua del primo getto al mattino può contenere rame molto superiore a quello dell'acqua corrente. Si parla di 'corrosione uniforme' quando il rame si rilascia gradualmente, e di 'corrosione localizzata' quando si formano vaiolature che provocano forature.",
        "Anche raccordi e accessori in ottone (lega di rame e zinco) rilasciano rame. Negli impianti nuovi i primi sei-dodici mesi di esercizio sono caratterizzati da rilascio maggiore di rame: con il tempo si forma un film passivante sulle pareti interne che riduce la corrosione. Per questo, in case appena consegnate, è prudente far scorrere l'acqua più a lungo.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il rame nell'acqua destinata al consumo umano un limite di 2,0 mg/L. È un parametro sanitario, basato su effetti gastrointestinali acuti documentati a concentrazioni elevate.",
        "Il valore ottimale è sotto 0,5 mg/L. In questa fascia il rame non è percepibile al sapore, non lascia macchie e non comporta rischio sanitario. Tra 0,5 e 2 mg/L può essere percepibile al gusto e iniziare a dare segni estetici. Sopra 2 mg/L diventa non conforme.",
        "L'OMS adotta lo stesso valore guida di 2 mg/L per gli stessi motivi. Esiste anche una soglia di 1 mg/L raccomandata da alcuni paesi come limite estetico (sapore e macchie). EPA degli Stati Uniti ha un action level di 1,3 mg/L per la corrosione, simile come obiettivo.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute, sanitari e impianti',
      paragraphs: [
        "Sul piano sanitario, alle concentrazioni dell'acqua potabile (sotto 2 mg/L) il rame è ben tollerato dalla popolazione generale. Sopra 3 mg/L può provocare nausea, vomito e dolori addominali nei consumatori non abituati. Esposizioni croniche molto elevate possono causare epatotossicità. Persone con malattia di Wilson (rara patologia genetica del metabolismo del rame) sono particolarmente sensibili e devono evitare anche basse concentrazioni: in caso di dubbio è opportuno confrontarsi con il proprio medico.",
        "Il problema più visibile è estetico. Il rame ossidato precipita come ossido o idrossido blu-verde caratteristico (la patina che si vede sulle statue di rame all'aperto). Su sanitari di porcellana, piatti doccia, lavandini lascia macchie blu-verdi difficili da rimuovere. Sulla biancheria può lasciare macchie verdi, soprattutto sui tessuti chiari.",
        "Sul piano impiantistico, l'eccessivo rilascio di rame indica corrosione delle tubazioni: nel tempo le tubature si assottigliano e possono manifestarsi perdite, soprattutto nei punti di maggior turbolenza. La gestione del rilascio di rame protegge sia la salute sia la durata dell'impianto.",
      ],
    },
    {
      heading: 'Come si rileva il rame',
      paragraphs: [
        "Strisce reattive e kit colorimetrici a goccia rilevano il rame con sensibilità di 100-500 µg/L. Sono adeguati per identificare problemi macroscopici. Per misure più precise serve un'analisi di laboratorio qualificato con spettrometria di emissione atomica o di massa, con limiti di rilevazione sotto 10 µg/L.",
        "Come per il piombo, è importante distinguere tra acqua di primo getto e acqua di flussaggio. Il primo getto riflette il rilascio dalle tubature interne durante la stagnazione; il flussaggio riflette l'acqua di rete. La differenza dei due valori indica il contributo dell'impianto domestico al problema.",
        "Per chi vive in edifici nuovi (primi anni di funzionamento) o in edifici con impianti in rame in acque corrosive, una verifica periodica del rame è una buona pratica. Il laboratorio qualificato può anche misurare contemporaneamente piombo e nichel, spesso associati al rame nelle saldature.",
      ],
    },
    {
      heading: 'Come si riduce il rame',
      paragraphs: [
        "Il primo intervento è correggere l'aggressività dell'acqua, se possibile. In acque con pH basso, l'installazione di un filtro a calcite o a magnesia alza il pH e riduce la corrosione del rame. In acque povere di sali, una rimineralizzazione corregge l'aggressività. Queste soluzioni proteggono tutto l'impianto.",
        "Come misura immediata, far scorrere l'acqua 30-60 secondi al mattino prima del prelievo riduce drasticamente il rame del primo getto. Usare solo acqua fredda per bere e cucinare: l'acqua calda accelera il rilascio di rame.",
        "Per il trattamento dell'acqua da bere, l'osmosi inversa rimuove oltre il 95% del rame insieme agli altri metalli. È una soluzione comune in edifici con problemi cronici di corrosione. Filtri a scambio cationico riducono il rame disciolto, ma vanno scelti specifici. Filtri a carbone attivo standard non rimuovono il rame disciolto, solo il particolato.",
      ],
      bullets: [
        "Correggere il pH e l'aggressività dell'acqua",
        "Far scorrere l'acqua 30-60 secondi al mattino",
        "Usare solo acqua fredda per bere e cucinare",
        'Osmosi inversa per acqua da bere',
        "Filtri a scambio cationico per il rame disciolto",
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua del rubinetto fa macchie blu-verdi sui sanitari: cosa significa?",
      a: "Quasi sempre indica corrosione delle tubature in rame dell'impianto interno. Il rame ossidato precipita come patina blu-verde caratteristica. Il fenomeno è più marcato in acque acide o povere di sali e in case appena consegnate, quando l'impianto non si è ancora passivato. Lasciare scorrere l'acqua al mattino prima del prelievo riduce il problema; per soluzioni più stabili va corretta l'aggressività dell'acqua o installato un filtro dedicato.",
    },
    {
      q: "Bere acqua con rame fa male?",
      a: "Alle concentrazioni dell'acqua potabile (sotto 2 mg/L) il rame è ben tollerato ed è anzi un nutriente essenziale. Sopra 3 mg/L può provocare nausea e disturbi gastrointestinali. Esposizioni croniche molto elevate possono affaticare il fegato. Persone con malattia di Wilson sono particolarmente sensibili. In caso di dubbio è opportuno confrontarsi con il medico.",
    },
    {
      q: "Come ridurre il rame nell'acqua?",
      a: "Tre strategie principali. Comportamentale: far scorrere l'acqua al mattino e usare solo acqua fredda per cucinare. Sull'impianto: correggere il pH se l'acqua è acida (filtri a calcite o magnesia), eventualmente sostituire tratti molto vecchi. Sul punto di consumo: installare un sistema a osmosi inversa o filtri specifici per metalli sotto il lavello.",
    },
    {
      q: "Le tubature in rame sono sicure?",
      a: "Sì, sono sicure e largamente usate negli impianti idrici. Il rame stesso è atossico alle concentrazioni di rilascio tipiche. Il problema è solo gestionale: in acque aggressive il rilascio può essere eccessivo, ed è prudente correggere la qualità dell'acqua o trattare il punto di consumo per bere. In acque equilibrate (pH 7-8, mineralizzazione media) le tubature in rame durano decenni con rilascio minimo.",
    },
    {
      q: 'Perché il rame è più alto al mattino?',
      a: "Perché durante la notte l'acqua resta ferma nelle tubazioni e il rame si accumula nei primi millilitri a contatto con il rame delle pareti. Aprendo il rubinetto al mattino, l'acqua di primo getto contiene concentrazioni molto più alte di quella che scorre dopo qualche minuto. Per questo, sia per il rame sia per altri metalli, è buona pratica far scorrere l'acqua al mattino prima di prelevare quella per bere o cucinare.",
    },
  ],
  relatedIds: ['piombo', 'nichel', 'ph', 'ferro'],
  ctaContext: "Per analizzare il contenuto di rame e degli altri metalli rilasciati dalle tubature, fondamentale in edifici nuovi o con acque corrosive, con un laboratorio qualificato:",
});

// ============================================================================
// 17. Cadmio
// ============================================================================
registerGuide({
  id: 'cadmio',
  itName: 'Cadmio',
  slug: 'cadmio',
  category: 'salute',
  shortTitle: "Cadmio nell'acqua del rubinetto: limiti, fonti industriali e rischi",
  metaDescription:
    "Cadmio nell'acqua potabile: limite di legge 5 µg/L. Cancerogeno, nefrotossico, fonti industriali e tubature zincate. Come ridurlo.",
  searchKeywords: [
    'cadmio acqua',
    'cadmio acqua rubinetto',
    'limite cadmio acqua potabile',
    'cadmio tossicità',
    'cd acqua',
    'cadmio reni',
  ],
  intro:
    "Il cadmio è un metallo pesante tossico, classificato come cancerogeno certo e particolarmente nocivo per i reni. Nell'acqua del rubinetto è raro a livelli problematici, ma può comparire in zone con fonti industriali storiche o tubature zincate vecchie. Il D.Lgs. 18/2023 fissa un limite stretto di 5 µg/L. Conoscere il valore della propria acqua, soprattutto in aree con passato industriale, è importante per minimizzare l'esposizione cumulativa.",
  sections: [
    {
      heading: "Cos'è il cadmio in acqua",
      paragraphs: [
        "Il cadmio è un metallo pesante di colore bianco-argenteo, presente naturalmente in tracce nella crosta terrestre. In acqua si trova come ione Cd2+ disciolto. Ha proprietà chimiche simili allo zinco e spesso lo accompagna nei minerali e nelle leghe industriali.",
        "È classificato dall'IARC come cancerogeno certo per l'uomo (gruppo 1) per esposizione inalatoria, e probabilmente cancerogeno per via orale. Si accumula nei reni con emivita biologica molto lunga (10-30 anni), e l'esposizione cronica anche a basse dosi può provocare danno renale irreversibile.",
        "Nelle acque potabili italiane il cadmio è generalmente assente o presente in tracce sotto 1 µg/L. Concentrazioni più elevate sono rare e quasi sempre legate a contaminazione antropica o a rilascio da impianti specifici.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "Le fonti naturali sono limitate. Il cadmio si trova in alcuni minerali (greenockite, otavite) associati a depositi di zinco. In zone con mineralizzazioni naturali di zinco si possono avere acque con tracce di cadmio.",
        "Le fonti antropiche sono più rilevanti. Storiche attività di galvanica, produzione di batterie nichel-cadmio, industria delle vernici e dei pigmenti, fertilizzanti fosfatici contenenti cadmio come impurità, percolato da discariche di rifiuti elettronici. Anche le emissioni della metallurgia dello zinco possono contaminare le falde locali.",
        "Una fonte impiantistica importante sono le tubazioni zincate (acciaio zincato), in cui il rivestimento di zinco contiene tracce di cadmio. In acque corrosive il cadmio può rilasciarsi insieme allo zinco. Anche alcuni componenti in ottone di vecchia produzione contenevano cadmio. La normativa europea ha progressivamente vietato il cadmio nei materiali a contatto con acqua potabile.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il cadmio un limite di 5 µg/L nell'acqua destinata al consumo umano. È un parametro sanitario stretto, basato sulla tossicità renale e sulla classificazione cancerogena.",
        "Il valore ottimale è sotto 1 µg/L. A questa concentrazione l'esposizione cumulativa lifetime resta trascurabile. L'OMS adotta un valore guida di 3 µg/L, più stringente del limite europeo, riconoscendo che il cadmio è uno dei metalli a maggiore preoccupazione cronica.",
        "L'EPA degli Stati Uniti ha un limite di 5 µg/L per l'acqua potabile. La normativa è coerente a livello internazionale sulla pericolosità del cadmio e sulla necessità di minimizzare l'esposizione anche a basse dosi.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute, soprattutto reni',
      paragraphs: [
        "Il cadmio è particolarmente nefrotossico. Si accumula nelle cellule tubulari renali e a esposizione cronica provoca disfunzione tubulare, proteinuria, riduzione del filtrato glomerulare. Il danno renale è irreversibile e progressivo. L'epidemia di malattia 'itai-itai' in Giappone negli anni '50-'60, causata da inquinamento da cadmio nelle acque irrigue di colture di riso, è il caso più drammatico documentato.",
        "Oltre al rene, il cadmio cronico è associato a osteoporosi e fragilità ossea (sostituisce il calcio nelle ossa), ipertensione, malattie cardiovascolari, possibili effetti sulla funzione riproduttiva e, secondo alcune evidenze, aumentato rischio di alcuni tumori (rene, polmone, prostata, mammella).",
        "L'esposizione attraverso l'acqua potabile rappresenta tipicamente una quota minore dell'esposizione totale al cadmio nella popolazione italiana, dominata dagli alimenti e dal fumo di sigaretta. Tuttavia, in zone con contaminazione idrica documentata, può diventare significativa. In caso di sospetta esposizione è opportuno rivolgersi al medico.",
      ],
    },
    {
      heading: 'Come si rileva il cadmio',
      paragraphs: [
        "Il cadmio a basse concentrazioni (5 µg/L) richiede analisi di laboratorio qualificato. Strisce reattive e kit colorimetrici non hanno la sensibilità necessaria. Il metodo di riferimento è la spettrometria di massa al plasma (ICP-MS), con limiti di rilevazione di 0,01-0,1 µg/L.",
        "Per chi vive in zone con storia industriale (galvaniche, batterie, metallurgia dello zinco) o vicino a siti contaminati noti, è prudente includere il cadmio in un'analisi periodica dei metalli pesanti. È anche utile in edifici con tubazioni zincate molto vecchie.",
        "Come per altri metalli, il campionamento di primo getto rispetto a quello dopo flussaggio permette di distinguere il contributo dell'impianto interno da quello della rete pubblica. Pacchetti di analisi dei metalli pesanti includono tipicamente piombo, cadmio, rame, nichel, cromo, arsenico per un quadro completo.",
      ],
    },
    {
      heading: 'Come si riduce il cadmio',
      paragraphs: [
        "Il cadmio è efficacemente rimosso da sistemi a osmosi inversa, che ne tolgono il 95-99%. È la soluzione domestica più completa per metalli pesanti in genere. Filtri a scambio cationico con resine chelanti specifiche per metalli pesanti sono un'alternativa per impianti più grandi.",
        "Filtri a carbone attivo standard non rimuovono il cadmio disciolto, solo eventualmente il particolato. La bollitura concentra il cadmio. La distillazione lo rimuove ma è poco pratica per uso quotidiano.",
        "Se il cadmio deriva da tubature zincate molto vecchie, la sostituzione delle tubazioni risolve definitivamente il problema. Nel breve termine, far scorrere l'acqua al mattino prima del prelievo riduce l'esposizione del primo getto. In ogni caso, in presenza di cadmio sopra il limite, è importante segnalare al gestore idrico e indagare la fonte.",
      ],
      bullets: [
        'Osmosi inversa: rimuove il 95-99% del cadmio',
        'Filtri a scambio cationico con resine chelanti',
        'Sostituzione delle tubazioni zincate molto vecchie',
        "Carbone attivo standard: NON rimuove il cadmio disciolto",
        'Bollitura: NON elimina, concentra il cadmio',
      ],
    },
  ],
  faqs: [
    {
      q: "Il cadmio nell'acqua è davvero pericoloso?",
      a: "Sì, il cadmio è uno dei metalli più tossici per esposizione cronica. Si accumula nei reni con emivita biologica di decenni e provoca danno renale progressivo e irreversibile. È anche classificato come cancerogeno certo. Per questo il limite di legge è stretto (5 µg/L) e l'obiettivo è restare ben sotto questo valore. In caso di dubbio è opportuno consultare il medico.",
    },
    {
      q: "Come arriva il cadmio nell'acqua del rubinetto?",
      a: "Le fonti più comuni sono industriali storiche (galvaniche, batterie, metallurgia dello zinco), siti contaminati, e in alcuni casi tubature zincate molto vecchie con tracce di cadmio nello zinco di rivestimento. Le acque potabili italiane sono generalmente sicure, ma in zone con passato industriale specifico è prudente verificare con un'analisi mirata.",
    },
    {
      q: 'Come si elimina il cadmio?',
      a: "Il metodo domestico più efficace è l'osmosi inversa, che ne rimuove il 95-99%. Filtri a scambio cationico con resine chelanti specifiche per metalli pesanti sono un'alternativa. Filtri a carbone standard, addolcitori e bollitura non sono efficaci. Per acqua da bere in zone a rischio, un sistema sotto-lavello a osmosi inversa è la soluzione più affidabile.",
    },
    {
      q: "Il cadmio si percepisce al gusto?",
      a: "No, alle concentrazioni problematiche il cadmio è completamente inodore e insapore. Non è possibile rilevarlo dai sensi. Come per piombo e arsenico, l'unico modo per conoscere la sua concentrazione è un'analisi di laboratorio qualificato. Per questo motivo è un contaminante particolarmente subdolo, soprattutto in zone a rischio.",
    },
    {
      q: 'Quanto cadmio è troppo nelle acque potabili?',
      a: "Il limite di legge è 5 µg/L, ma l'obiettivo è restare il più possibile sotto questo valore, idealmente sotto 1 µg/L. Il cadmio si accumula nel corpo per decenni, quindi anche piccole quantità ripetute giornalmente sommano nel tempo. Per famiglie con bambini piccoli, donne in gravidanza e persone con patologie renali è prudenziale puntare a valori bassissimi e in caso di dubbio confrontarsi con il medico.",
    },
  ],
  relatedIds: ['piombo', 'nichel', 'arsenico', 'cromo'],
  ctaContext: "Per misurare il cadmio nella tua acqua del rubinetto, soprattutto se vivi vicino a siti industriali storici, con un laboratorio qualificato:",
});

// ============================================================================
// 18. Nichel
// ============================================================================
registerGuide({
  id: 'nichel',
  itName: 'Nichel',
  slug: 'nichel',
  category: 'salute',
  shortTitle: "Nichel nell'acqua del rubinetto: limiti, allergie e dermatiti",
  metaDescription:
    "Nichel nell'acqua potabile: limite di legge 20 µg/L. Cause da rubinetterie cromate, allergia e dermatite da contatto. Come ridurlo.",
  searchKeywords: [
    'nichel acqua',
    'nichel acqua rubinetto',
    'limite nichel acqua potabile',
    'allergia nichel acqua',
    'dermatite nichel',
    'nichel rubinetteria',
  ],
  intro:
    "Il nichel nell'acqua del rubinetto deriva quasi sempre dai rubinetti, dalle valvole e dagli accessori cromati dell'impianto interno. Per la popolazione generale alle concentrazioni di legge è ben tollerato, ma per chi soffre di allergia al nichel (una delle più diffuse in Italia, soprattutto tra le donne) anche tracce possono causare problemi. Il D.Lgs. 18/2023 fissa il limite a 20 µg/L. Capire le fonti aiuta a gestire il problema senza allarmismi.",
  sections: [
    {
      heading: "Cos'è il nichel in acqua",
      paragraphs: [
        "Il nichel è un metallo di transizione largamente usato in metallurgia, in particolare nelle leghe di acciaio inox e nelle cromature. Nelle acque potabili si trova come ione Ni2+ disciolto. Le concentrazioni tipiche nelle acque italiane sono sotto 5 µg/L; valori più alti sono quasi sempre legati al rilascio da impianti domestici.",
        "Il nichel è uno degli allergeni da contatto più diffusi nel mondo. Si stima che il 10-15% della popolazione europea, con prevalenza femminile, soffra di allergia al nichel. L'esposizione cronica anche a basse dosi può scatenare dermatite da contatto sistemica nei soggetti sensibilizzati.",
        "Per la popolazione generale non allergica, il nichel alle concentrazioni dell'acqua potabile è ben tollerato. L'IARC classifica i composti del nichel come cancerogeni certi per esposizione inalatoria (industriale), ma per via orale il rischio è considerato basso.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "La fonte principale è impiantistica. Rubinetti, miscelatori, valvole in ottone cromato rilasciano nichel dalle loro superfici interne, soprattutto nei primi mesi di uso. Anche accessori in acciaio inox (tubi flessibili, raccordi) contribuiscono. Il rilascio è massimo nei primi millilitri di acqua dopo periodi di stagnazione e diminuisce con il tempo, man mano che la superficie interna si passiva.",
        "In edifici di nuova costruzione, nei primi 6-12 mesi di uso, il nichel del primo getto al mattino può facilmente superare il limite di legge, anche se nell'acqua di rete è praticamente assente. È un fenomeno tipico, gestibile con buone pratiche.",
        "Fonti naturali (mineralizzazioni di rocce ultramafiche) sono presenti in alcune zone delle Alpi e dell'Appennino, ma raramente arrivano a concentrazioni rilevanti nelle acque potabili. Le fonti antropiche industriali (industria galvanica, produzione di batterie nichel-cadmio o nichel-idruro, metallurgia) sono importanti localmente ma non diffuse.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il nichel un limite di 20 µg/L nell'acqua destinata al consumo umano. È un parametro sanitario, basato sulla protezione dei soggetti allergici e su considerazioni di tossicità cronica generale.",
        "Il valore ottimale per la popolazione generale è sotto 5 µg/L. Per i soggetti allergici al nichel l'obiettivo ideale è il più basso possibile, idealmente sotto 2 µg/L. L'OMS indica un valore guida sanitario di 70 µg/L, ma la normativa europea ha scelto un valore più protettivo per tenere conto della elevata prevalenza dell'allergia al nichel.",
        "Una particolarità della normativa: il campionamento per il nichel al rubinetto deve includere l'acqua di primo getto dopo stagnazione, proprio per intercettare il contributo degli accessori interni. Questo lo distingue da molti altri parametri.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute, allergie e dermatiti',
      paragraphs: [
        "Per chi soffre di allergia al nichel, l'esposizione orale cronica può scatenare dermatite da contatto sistemica, con manifestazioni che vanno da eczemi diffusi a disturbi gastrointestinali. La condizione è nota come 'sindrome sistemica da nichel' o SNAS. Per questi soggetti, anche piccole quantità di nichel nell'acqua possono fare la differenza.",
        "Per la popolazione generale non allergica, il nichel alle concentrazioni dell'acqua potabile è ben tollerato. Esposizioni croniche molto elevate, in ambito occupazionale, sono associate a problemi respiratori e a aumentato rischio tumorale (per via inalatoria principalmente).",
        "I bambini piccoli sono più suscettibili. La sensibilizzazione al nichel può svilupparsi in età pediatrica con esposizioni ripetute. Per famiglie con bambini in edifici di nuova costruzione, è prudente far scorrere l'acqua al mattino prima del consumo. In caso di sintomi compatibili con allergia è opportuno rivolgersi a un medico.",
      ],
    },
    {
      heading: 'Come si rileva il nichel',
      paragraphs: [
        "Il nichel a basse concentrazioni richiede analisi di laboratorio qualificato. La spettrometria di massa al plasma (ICP-MS) o l'assorbimento atomico danno limiti di rilevazione di 1 µg/L o inferiori, adeguati per verificare la conformità al limite di 20 µg/L.",
        "Come per piombo e rame, è essenziale il campionamento di primo getto. L'analisi su acqua di flussaggio sottostima il rilascio reale al rubinetto. Un protocollo solido prevede primo campione dopo almeno 6 ore di stagnazione, secondo campione dopo flussaggio: la differenza identifica il contributo degli accessori.",
        "Per famiglie con membri allergici al nichel, soprattutto in case nuove, una verifica analitica è utile. Pacchetti di analisi dei metalli pesanti includono tipicamente nichel insieme a piombo, rame, cadmio, cromo per un quadro completo dell'esposizione.",
      ],
    },
    {
      heading: 'Come si riduce il nichel',
      paragraphs: [
        "La prima misura è comportamentale: far scorrere l'acqua 30 secondi al mattino e dopo ogni periodo di non utilizzo prolungato. Questo riduce drasticamente il nichel del primo getto, principale fonte di esposizione. Anche evitare l'acqua del miscelatore per il consumo diretto (preferendo un rubinetto dedicato dell'acqua fredda) limita il contatto con accessori cromati.",
        "Per il trattamento, l'osmosi inversa rimuove il 95-99% del nichel ed è la soluzione più affidabile per soggetti allergici. Filtri a scambio cationico con resine chelanti sono efficaci anche per impianti più grandi.",
        "Sostituire vecchi accessori con prodotti certificati per acqua potabile, conformi alla normativa europea sui materiali a contatto, riduce il rilascio nel tempo. La normativa ha progressivamente abbassato il contenuto massimo di nichel nelle leghe per accessori idrici.",
      ],
      bullets: [
        "Far scorrere l'acqua 30 secondi al mattino e dopo non-uso prolungato",
        'Osmosi inversa per acqua da bere: efficace al 95-99%',
        'Filtri a scambio cationico con resine chelanti',
        "Sostituire vecchi accessori con prodotti certificati",
      ],
    },
  ],
  faqs: [
    {
      q: 'Soffro di allergia al nichel: posso bere acqua del rubinetto?',
      a: "Dipende dal valore al tuo rubinetto. Per soggetti allergici è prudente verificare con un'analisi che includa anche il primo getto al mattino. Se il valore è basso (sotto 5 µg/L) e si fa scorrere l'acqua prima del prelievo, il rubinetto è generalmente compatibile. Se il valore è alto, soprattutto in case nuove, conviene installare un sistema a osmosi inversa per il consumo diretto. In caso di sintomi è consigliabile rivolgersi al medico.",
    },
    {
      q: "Perché il nichel è alto nelle case nuove?",
      a: "I rubinetti, le valvole e gli accessori in ottone cromato rilasciano nichel dalle loro superfici interne, soprattutto nei primi 6-12 mesi di uso. Con il tempo si forma un film passivante che riduce il rilascio. Nei primi mesi, soprattutto nell'acqua del primo getto al mattino, le concentrazioni possono superare il limite di 20 µg/L. La buona pratica è far scorrere l'acqua per qualche secondo prima del prelievo.",
    },
    {
      q: 'Come elimino il nichel dall\'acqua?',
      a: "Il metodo più efficace è l'osmosi inversa, che rimuove il 95-99% del nichel. Filtri a scambio cationico con resine chelanti sono un'alternativa. Filtri a carbone standard, addolcitori e bollitura non sono efficaci sul nichel disciolto. Per soggetti allergici, un sistema sotto-lavello a osmosi inversa è la soluzione più affidabile per garantire acqua da bere sicura.",
    },
    {
      q: "Quanto nichel c'è nell'acqua minerale?",
      a: "Le acque minerali in bottiglia hanno generalmente nichel sotto 5 µg/L, perché non hanno il problema del rilascio dagli accessori dell'impianto domestico. Per soggetti allergici al nichel, l'acqua in bottiglia (anche se non ideale dal punto di vista ambientale) può essere una alternativa pratica al rubinetto, soprattutto in case nuove.",
    },
    {
      q: "Il nichel nell'acqua può causare allergia?",
      a: "Nei soggetti già sensibilizzati al nichel, l'esposizione orale cronica può scatenare o aggravare manifestazioni allergiche sistemiche (eczemi, disturbi gastrointestinali). Non c'è evidenza forte che l'acqua del rubinetto a sé sia sufficiente a sensibilizzare un soggetto non allergico, ma in famiglie con storia di allergia è prudente limitare l'esposizione, soprattutto nei bambini. In caso di dubbio è opportuno rivolgersi a un medico allergologo.",
    },
  ],
  relatedIds: ['piombo', 'rame', 'cadmio', 'cromo'],
  ctaContext: "Per analizzare il nichel della tua acqua del rubinetto, fondamentale per soggetti allergici e case di nuova costruzione, con un laboratorio qualificato:",
});

// ============================================================================
// 19. Cromo
// ============================================================================
registerGuide({
  id: 'cromo',
  itName: 'Cromo totale',
  slug: 'cromo',
  category: 'salute',
  shortTitle: "Cromo nell'acqua del rubinetto: limiti, cromo esavalente e rischi",
  metaDescription:
    "Cromo totale nell'acqua potabile: limite di legge 25 µg/L. Differenza Cr(III) e Cr(VI) cancerogeno, fonti industriali e come trattarlo.",
  searchKeywords: [
    'cromo acqua',
    'cromo acqua rubinetto',
    'cromo esavalente acqua',
    'limite cromo acqua potabile',
    'cromo brescia',
    'cromo 6 cancerogeno',
  ],
  intro:
    "Il cromo nell'acqua del rubinetto è un parametro che ha guadagnato attenzione mediatica per le contaminazioni industriali storiche italiane, in particolare il caso Brescia. Esistono due forme: il cromo trivalente, presente naturalmente e non cancerogeno per via orale, e il cromo esavalente, prodotto da attività industriali e classificato come cancerogeno certo. Il D.Lgs. 18/2023 fissa il limite del cromo totale a 25 µg/L. Capire la differenza è fondamentale per valutare il rischio.",
  sections: [
    {
      heading: "Cos'è il cromo in acqua",
      paragraphs: [
        "Il cromo è un metallo di transizione che in natura si trova prevalentemente nella forma trivalente Cr(III), nutriente essenziale per il metabolismo del glucosio e dei lipidi. La forma esavalente Cr(VI), o cromo VI, è invece quasi esclusivamente di origine antropica, prodotta da attività industriali come galvaniche, concerie, produzione di pigmenti, lavorazione di acciai inox.",
        "Le due forme hanno tossicità molto diverse. Il Cr(III) per via orale è praticamente atossico alle concentrazioni delle acque potabili. Il Cr(VI) è classificato dall'IARC come cancerogeno certo per inalazione e ci sono evidenze crescenti di rischio anche per via orale, in particolare per tumori gastrici.",
        "Le normative attuali (D.Lgs. 18/2023, OMS) fissano un limite sul cromo totale, ovvero la somma di Cr(III) e Cr(VI). Per una valutazione completa del rischio sarebbe utile la speciazione, che alcuni laboratori qualificati offrono come analisi separata.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "Il Cr(III) ha quasi sempre origine naturale, dalla dissoluzione di rocce contenenti cromo (serpentiniti, alcune rocce ultramafiche). Le concentrazioni naturali sono tipicamente sotto 5 µg/L.",
        "Il Cr(VI) è invece quasi sempre di origine antropica. Le fonti principali sono attività industriali storiche: galvaniche per cromatura di metalli, concerie (uso di sali di cromo per la concia delle pelli), produzione di pigmenti, lavorazione di acciai inox, settori dell'automotive e dell'aerospazio. Discariche di rifiuti industriali contenenti cromo sono un'altra fonte importante.",
        "In Italia il caso più documentato di contaminazione da Cr(VI) è quello di Brescia, dove decenni di attività della Caffaro hanno contaminato pesantemente falde e suoli con cromo esavalente e altri inquinanti. Altri casi noti includono zone con concerie storiche (Solofra, distretto del Valdarno), aree industriali della Lombardia e del Piemonte, alcuni siti di vecchie cromature dismesse.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per il cromo totale un limite di 25 µg/L nell'acqua destinata al consumo umano. Il limite è stato abbassato rispetto al precedente di 50 µg/L proprio per riflettere le nuove evidenze sulla cancerogenicità del Cr(VI) per via orale.",
        "Il valore ottimale è sotto 5 µg/L, tipico delle acque non contaminate. L'OMS sta rivedendo i valori guida e diversi paesi hanno introdotto limiti specifici per il Cr(VI). Lo Stato della California ha fissato un limite di 10 µg/L per il Cr(VI), considerandolo cancerogeno certo per via orale.",
        "In Italia, dopo il caso Brescia, è stato adottato in alcune zone un limite locale specifico per Cr(VI) di 10 µg/L, pur in assenza di un limite nazionale specifico per la forma esavalente. La direttiva europea attuale lascia ai singoli Stati la facoltà di adottare limiti più stringenti.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute',
      paragraphs: [
        "Il Cr(VI) è il vero motivo di preoccupazione sanitaria. Per inalazione è cancerogeno certo (tumori del polmone), ben documentato in ambito industriale. Per via orale, evidenze epidemiologiche e tossicologiche supportano un rischio cancerogeno (tumori gastrici) e effetti su fegato, reni, sistema riproduttivo. L'EPA degli Stati Uniti ha proposto di riconoscerlo come cancerogeno certo anche per via orale.",
        "Il Cr(III) è invece considerato sicuro alle concentrazioni delle acque potabili. È addirittura un nutriente essenziale necessario per il metabolismo del glucosio. La normativa, regolando il cromo totale, è cautelativa: assume che tutto sia potenzialmente Cr(VI) per garantire la protezione.",
        "Per famiglie residenti vicino a siti industriali storici contaminati o ex galvaniche/concerie, è particolarmente importante verificare la concentrazione di cromo nell'acqua e, se possibile, eseguire la speciazione tra Cr(III) e Cr(VI). In caso di sospetta esposizione è opportuno rivolgersi al medico.",
      ],
    },
    {
      heading: 'Come si rileva il cromo',
      paragraphs: [
        "Per il cromo totale, il metodo di riferimento è la spettrometria di massa al plasma (ICP-MS) o l'assorbimento atomico, con limiti di rilevazione sotto 1 µg/L. Adeguati per verificare la conformità al limite europeo di 25 µg/L.",
        "Per la speciazione tra Cr(III) e Cr(VI) serve una metodica più complessa: cromatografia ionica accoppiata a spettrometria, oppure metodo colorimetrico con difenilcarbazide specifico per il Cr(VI). Non tutti i laboratori offrono la speciazione: per casi in cui sia necessaria conviene verificare in anticipo la disponibilità del servizio.",
        "Per chi vive in zone industriali storiche o vicino a siti contaminati noti, l'analisi del cromo totale (e idealmente la speciazione) dovrebbe essere parte del monitoraggio periodico della qualità dell'acqua, insieme agli altri metalli pesanti.",
      ],
    },
    {
      heading: 'Come si riduce il cromo',
      paragraphs: [
        "L'osmosi inversa rimuove il 95-99% del cromo, sia trivalente sia esavalente. È la soluzione domestica più efficace e versatile.",
        "Lo scambio ionico anionico è particolarmente efficace per il Cr(VI), che esiste in soluzione come ione cromato (CrO4 2-) o bicromato. Per il Cr(III) lo scambio cationico è efficace ma meno specifico. Per impianti più grandi si usano sistemi di riduzione del Cr(VI) a Cr(III) seguiti da precipitazione.",
        "Filtri a carbone attivo, addolcitori standard e bollitura non rimuovono efficacemente il cromo disciolto. Per acqua da bere in zone a rischio, l'osmosi inversa sotto-lavello è la scelta più pratica e affidabile.",
      ],
      bullets: [
        'Osmosi inversa: rimuove fino al 99% di cromo totale',
        'Scambio ionico anionico: molto efficace per Cr(VI)',
        'Riduzione Cr(VI) a Cr(III) + precipitazione: per impianti industriali',
        'Carbone attivo, addolcitori, bollitura: NON funzionano',
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "Il caso più noto in Italia è quello di Brescia, dove l'attività della Caffaro (chimica) ha provocato decenni di contaminazione del suolo e delle falde con cromo esavalente, PCB e altri inquinanti. Il Sito di Interesse Nazionale 'Brescia-Caffaro' è oggetto di interventi di bonifica e monitoraggio costante. Le acque potabili della città sono state messe in sicurezza con miscelazione di fonti e trattamenti specifici.",
        "Altri casi italiani documentati riguardano zone di concerie storiche (Solofra in Campania, distretto conciario toscano e veneto), aree industriali della Lombardia con galvaniche dismesse, alcune zone del Piemonte con storia metallurgica. ISPRA e ARPA regionali monitorano regolarmente i siti contaminati noti.",
      ],
    },
  ],
  faqs: [
    {
      q: 'Differenza tra cromo trivalente e cromo esavalente?',
      a: 'Sono due forme dello stesso elemento con tossicità completamente diverse. Il cromo trivalente (Cr III) è presente naturalmente, è un nutriente essenziale per il metabolismo del glucosio e non è tossico alle concentrazioni delle acque potabili. Il cromo esavalente (Cr VI) è quasi esclusivamente di origine industriale e classificato come cancerogeno certo per inalazione, con evidenze crescenti anche per via orale.',
    },
    {
      q: "Il cromo nell'acqua è cancerogeno?",
      a: "Dipende dalla forma. Il Cr(VI) è classificato come cancerogeno certo dall'IARC per inalazione, e diverse evidenze supportano un rischio anche per via orale (tumori gastrici). Il Cr(III) non è considerato cancerogeno. La normativa europea regola il cromo totale come misura cautelativa. Per famiglie in zone industriali contaminate, è particolarmente importante verificare e idealmente eseguire la speciazione delle due forme.",
    },
    {
      q: "Come si elimina il cromo dall'acqua?",
      a: "Il metodo più efficace per uso domestico è l'osmosi inversa, che rimuove il 95-99% di tutte le forme di cromo. Lo scambio ionico anionico è particolarmente efficace per il Cr(VI). Filtri a carbone, addolcitori e bollitura non funzionano. Per zone a rischio, un sistema sotto-lavello a osmosi inversa è la scelta più pratica per acqua da bere sicura.",
    },
    {
      q: "Esiste un limite specifico per il cromo esavalente in Italia?",
      a: "A livello nazionale il D.Lgs. 18/2023 fissa solo il limite del cromo totale (25 µg/L), comprensivo di entrambe le forme. Alcuni territori, in particolare l'area bresciana, hanno adottato limiti operativi più stringenti specifici per il Cr(VI) (intorno a 10 µg/L). La direttiva europea sta valutando l'introduzione di un limite specifico per il Cr(VI) nelle prossime revisioni.",
    },
    {
      q: "Vivo vicino a una vecchia galvanica: devo preoccuparmi?",
      a: "È prudente verificare. Le galvaniche storiche, soprattutto se non bonificate, hanno spesso contaminato suolo e falda locale con Cr(VI). Un'analisi della tua acqua presso un laboratorio qualificato, idealmente con speciazione cromo trivalente/esavalente, è il modo per avere certezza. Se l'acqua è conforme, puoi continuare a usarla; se non lo è, va segnalato al Comune e al gestore idrico e valutato un trattamento.",
    },
  ],
  relatedIds: ['piombo', 'cadmio', 'nichel', 'arsenico'],
  ctaContext: "Per analizzare il cromo della tua acqua del rubinetto, fondamentale in zone industriali storiche, con un laboratorio qualificato che può eseguire anche la speciazione:",
});

// ============================================================================
// 20. Torbidità
// ============================================================================
registerGuide({
  id: 'torbidita',
  itName: 'Torbidità',
  slug: 'torbidita',
  category: 'estetica',
  shortTitle: "Torbidità dell'acqua del rubinetto: cosa è, limiti e cause",
  metaDescription:
    "Torbidità dell'acqua potabile: limite di legge 4 NTU, ideale sotto 0,5 NTU. Cause dell'acqua torbida, rischi e come risolvere.",
  searchKeywords: [
    'torbidità acqua',
    'acqua torbida rubinetto',
    'limite torbidità acqua potabile',
    'ntu acqua',
    'acqua bianca rubinetto',
    'perché acqua torbida',
  ],
  intro:
    "La torbidità è la misura di quanto un'acqua appare limpida o appannata: dipende dalle particelle sospese che disperdono la luce. Un'acqua del rubinetto torbida non è sempre pericolosa (spesso sono semplici bollicine di aria), ma quando la torbidità persiste può indicare problemi nella rete, sedimenti rimobilizzati, depositi di ferro o manganese. Il D.Lgs. 18/2023 fissa il limite a 4 NTU, ma il valore ottimale è ben più basso.",
  sections: [
    {
      heading: "Cos'è la torbidità",
      paragraphs: [
        "La torbidità è una grandezza fisica che misura la riduzione della trasparenza dell'acqua dovuta a particelle sospese: argille, silt, sostanza organica, microrganismi, ossidi metallici, sedimenti rimobilizzati. Si misura in NTU (Nephelometric Turbidity Units) con strumenti chiamati torbidimetri o nefelometri, che misurano la luce dispersa a 90° da un fascio incidente.",
        "Un'acqua perfettamente trasparente ha torbidità prossima a zero. Acque del rubinetto di buona qualità sono tipicamente sotto 0,5 NTU. Sopra 1 NTU la torbidità inizia a essere visibile ad occhio nudo come opalescenza; sopra 5 NTU l'acqua appare evidentemente torbida.",
        "La torbidità non è di per sé un parametro sanitario, ma è un indicatore importante per due motivi. Primo: le particelle sospese possono proteggere microrganismi patogeni dall'azione disinfettante del cloro. Secondo: un aumento della torbidità è spesso il primo segnale di un problema in rete (rotture, sedimenti rimobilizzati, intrusione di acqua non trattata).",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "Le acque grezze captate da sorgenti, fiumi o falde possono contenere torbidità naturale dovuta a particelle minerali e organiche. Negli acquedotti la torbidità viene rimossa in fase di trattamento attraverso coagulazione, flocculazione, sedimentazione e filtrazione su sabbia. Le acque potabilizzate in uscita dalle centrali sono tipicamente sotto 0,3 NTU.",
        "Le cause più comuni di torbidità al rubinetto sono interne alla rete: rotture o lavori sulle condotte rimobilizzano sedimenti depositati nel tempo; cambi di flusso (apertura di idranti, manovre di rete) sollevano depositi; deposizioni di ferro e manganese (tubercoli rugginosi nelle tubazioni in acciaio) possono rilasciare particolato quando vengono disturbate.",
        "Una causa molto frequente e innocua è l'aria disciolta. Quando l'acqua passa rapidamente attraverso valvole e cambi di pressione, si formano microbollicine che danno all'acqua un aspetto biancastro temporaneo. È sufficiente lasciare l'acqua in un bicchiere per un minuto: se diventa limpida dal basso verso l'alto, è solo aria.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per la torbidità un limite di 4 NTU al rubinetto e di 1 NTU all'uscita degli impianti di trattamento delle acque superficiali. È un parametro indicatore: il superamento segnala problemi operativi piuttosto che rischi sanitari diretti.",
        "Il valore ottimale per un'acqua del rubinetto è sotto 0,5 NTU. A questo livello l'acqua appare cristallina e i trattamenti di disinfezione funzionano in modo ottimale. Tra 0,5 e 4 NTU l'acqua è ancora conforme ma può mostrare segni visivi di particolato.",
        "L'OMS raccomanda un valore guida di torbidità sotto 1 NTU per garantire l'efficacia della disinfezione, e idealmente sotto 0,2 NTU per gli impianti di trattamento più moderni. L'EPA degli Stati Uniti impone valori molto stringenti per acque da fonti superficiali.",
      ],
    },
    {
      heading: 'Perché monitorarla: effetti su qualità e sicurezza microbiologica',
      paragraphs: [
        "Il primo effetto della torbidità è estetico: un'acqua torbida è poco invitante e scoraggia il consumo, anche se è perfettamente sicura. Per questo è considerata un parametro indicatore di accettabilità organolettica.",
        "L'aspetto più importante è però la sicurezza microbiologica. Le particelle sospese proteggono i microrganismi dalla disinfezione, rendendo meno efficace l'azione di cloro o UV. Un'acqua torbida con disinfezione apparentemente adeguata può veicolare patogeni che hanno trovato rifugio nelle particelle. Per questo i protocolli sanitari moderni puntano a torbidità molto basse all'uscita dei trattamenti.",
        "Sul piano impiantistico, acque torbide accelerano l'usura di rubinetterie, valvole, elettrodomestici. Possono intasare filtri, danneggiare guarnizioni, accumulare sedimenti in scaldabagni e caldaie. Una torbidità persistente è un motivo per indagare la causa.",
      ],
    },
    {
      heading: 'Come si rileva la torbidità',
      paragraphs: [
        "L'osservazione visiva è la forma più semplice: un'acqua torbida si riconosce confrontando un bicchiere riempito con una scala graduata. Esistono dischi di Secchi semplificati e tubi torbidimetrici visivi per misure di campo, con sensibilità di 2-5 NTU.",
        "I torbidimetri portatili offrono precisione molto migliore (0,01-0,1 NTU) usando una sorgente luminosa standard e un sensore che misura la luce dispersa a 90°. Sono usati da gestori idrici per monitoraggi di routine e da utenti tecnici.",
        "L'analisi di laboratorio qualificato con torbidimetri da banco calibrati su standard primari (formazina) fornisce il valore certificato con limiti di rilevazione di 0,01 NTU. Importante: il campione va analizzato il prima possibile, perché la torbidità può variare durante la conservazione per sedimentazione, agglomerazione o sviluppo di microrganismi.",
      ],
    },
    {
      heading: "Come si riduce la torbidità",
      paragraphs: [
        "Per torbidità causata da bollicine d'aria non serve fare nulla: scompare da sola in pochi secondi. Se la torbidità persiste, conviene prima identificare la causa contattando il gestore idrico: spesso è un problema transitorio dopo lavori in rete che si risolve da sé in poche ore.",
        "Se la torbidità è cronica, i sistemi di trattamento efficaci sono filtri meccanici a sedimenti (5-50 micron) installati subito dopo il contatore, che trattengono particolato grossolano. Per particelle più fini si usano filtri a cartuccia da 1-5 micron o sistemi di ultrafiltrazione (membrane da 0,01-0,1 micron).",
        "Per il consumo diretto, sistemi sotto-lavello con pre-filtri a sedimenti e osmosi inversa garantiscono acqua cristallina. La bollitura non rimuove la torbidità, anzi può concentrarla. Se la causa è il ferro o il manganese precipitato nelle tubazioni, è necessario un trattamento specifico per quei contaminanti.",
      ],
      bullets: [
        "Filtri meccanici a sedimenti dopo il contatore",
        'Filtri a cartuccia da 1-5 micron per particolato fine',
        'Ultrafiltrazione per acque con torbidità persistente',
        'Osmosi inversa sotto-lavello per acqua da bere cristallina',
        "Trattamento specifico se la causa è ferro o manganese",
      ],
    },
  ],
  faqs: [
    {
      q: "L'acqua del rubinetto è bianca quando esce: è pericolosa?",
      a: "Quasi sempre no, è solo aria disciolta. Le microbollicine si formano per i cambi di pressione lungo la rete. Per verificare: riempi un bicchiere e osservalo: se l'acqua diventa limpida dal basso verso l'alto in 30-60 secondi, era solo aria, completamente sicura. Se la torbidità persiste, conviene segnalarlo al gestore idrico.",
    },
    {
      q: "Cosa significa un'acqua torbida?",
      a: "Significa che ci sono particelle sospese che disperdono la luce. Le cause possono essere semplici (bollicine d'aria), legate alla rete (sedimenti rimobilizzati dopo lavori, rotture), o impiantistiche (ferro e manganese precipitati nelle tubazioni vecchie). Non sempre la torbidità indica un rischio sanitario, ma quando persiste merita di essere indagata perché può ridurre l'efficacia della disinfezione.",
    },
    {
      q: "Posso bere acqua torbida?",
      a: "Dipende dalla causa. Se è solo aria, è sicura. Se è dovuta a lavori in rete recenti, conviene aspettare che si normalizzi (poche ore) e nel frattempo segnalare al gestore. Se la torbidità è cronica o accompagnata da odori o colorazione, è prudente non bere finché non si è identificata la causa e fare un'analisi di laboratorio qualificato per i parametri principali.",
    },
    {
      q: 'Quanti NTU deve avere l\'acqua potabile?',
      a: "Il limite di legge è 4 NTU al rubinetto, ma il valore ottimale è sotto 0,5 NTU. Acque acquedottistiche moderne, all'uscita dei trattamenti, hanno tipicamente torbidità sotto 0,3 NTU. Al rubinetto, in condizioni normali, i valori dovrebbero essere sotto 1 NTU. Sopra 2 NTU conviene fare una verifica analitica.",
    },
    {
      q: "Come si elimina la torbidità dell'acqua?",
      a: "Per particolato grossolano, filtri a sedimenti installati dopo il contatore (5-50 micron) sono efficaci e a basso costo. Per particelle fini, filtri a cartuccia da 1-5 micron o ultrafiltrazione. Per il consumo diretto, sistemi a osmosi inversa eliminano qualsiasi torbidità. Importante: trattare la torbidità senza identificare la causa è solo un palliativo, conviene capire perché l'acqua è torbida.",
    },
  ],
  relatedIds: ['ferro', 'manganese', 'cloro_residuo', 'e_coli'],
  ctaContext: "Per verificare la torbidità della tua acqua del rubinetto e capire l'origine del problema con un'analisi di laboratorio qualificato:",
});

// ============================================================================
// 21. E. coli
// ============================================================================
registerGuide({
  id: 'e_coli',
  itName: 'Escherichia coli',
  slug: 'e-coli',
  category: 'microbiologia',
  shortTitle: "Escherichia coli nell'acqua del rubinetto: contaminazione fecale e rischi",
  metaDescription:
    "Escherichia coli nell'acqua potabile: limite di legge 0 UFC/100mL. Indicatore di contaminazione fecale, rischi infettivi e come intervenire.",
  searchKeywords: [
    'escherichia coli acqua',
    'e.coli acqua rubinetto',
    'contaminazione fecale acqua',
    'batteri acqua potabile',
    'analisi microbiologica acqua',
    'e coli sintomi acqua',
  ],
  intro:
    "Escherichia coli (E. coli) è il principale indicatore di contaminazione fecale nelle acque potabili. La sua presenza, anche minima, indica un rischio sanitario reale e attuale, perché significa che l'acqua è entrata in contatto con materiale fecale di origine umana o animale. Il D.Lgs. 18/2023 è categorico: zero UFC/100 mL. Un valore positivo richiede azione immediata.",
  sections: [
    {
      heading: "Cos'è Escherichia coli",
      paragraphs: [
        "Escherichia coli è un batterio Gram-negativo che vive normalmente nell'intestino di esseri umani e animali a sangue caldo. Fa parte della normale flora intestinale e nella maggior parte dei casi è innocuo per l'organismo che lo ospita. Alcuni ceppi specifici (come E. coli O157:H7) sono però patogeni e possono causare gravi malattie.",
        "Nell'analisi delle acque, E. coli viene usato come 'indicatore' di contaminazione fecale. Il suo riscontro non implica necessariamente la presenza di patogeni specifici, ma è la prova diretta che l'acqua è entrata in contatto con materiale fecale. Dove ci sono feci, possono esserci anche virus, parassiti e batteri patogeni come Salmonella, Campylobacter, Vibrio cholerae.",
        "È preferito ad altri indicatori per la sua specificità: vive quasi esclusivamente nel tratto intestinale dei mammiferi a sangue caldo, è facile da rilevare con metodi di laboratorio standard, e sopravvive in acqua per un tempo simile a molti patogeni intestinali.",
      ],
    },
    {
      heading: "Da dove arriva nell'acqua del rubinetto",
      paragraphs: [
        "Le acque potabili acquedottistiche correttamente trattate non contengono E. coli. La disinfezione con cloro o altri sistemi elimina rapidamente i batteri vegetativi. Il riscontro di E. coli al rubinetto indica quindi sempre un problema specifico, non un fenomeno fisiologico.",
        "Le cause più frequenti sono: rotture di rete con intrusione di acque superficiali o reflue; serbatoi di accumulo non manutenuti correttamente, con accesso di insetti, roditori o uccelli; intrusione fognaria nelle condotte di acqua potabile (in caso di pressione negativa); contaminazione di pozzi privati da fosse settiche, allevamenti o reflui agricoli; manomissioni non autorizzate dell'impianto idrico.",
        "Nei pozzi privati e nelle piccole reti rurali il rischio è significativamente più alto. Spesso fosse settiche non a tenuta, sversamenti agricoli, animali al pascolo vicino ai punti di captazione possono contaminare l'acqua. La direttiva europea 2020/2184 ha rafforzato gli obblighi di sorveglianza anche per le piccole forniture e per le case private.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per Escherichia coli un limite di 0 UFC (Unità Formanti Colonia) per 100 mL di acqua. È un parametro sanitario assoluto: anche un singolo riscontro positivo significa non-conformità e richiede interventi immediati.",
        "Non esiste un 'valore ideale' diverso da zero. L'acqua potabile sicura non deve contenere E. coli in nessuna concentrazione. La normativa è coerente a livello internazionale: OMS, EPA, e tutte le principali autorità sanitarie adottano lo stesso criterio di assenza assoluta.",
        "In caso di riscontro positivo, il gestore idrico è tenuto a investigare immediatamente la causa, informare l'autorità sanitaria locale, emettere se necessario ordinanze di non potabilità, eseguire interventi di shock chlorination della rete e ripetere le analisi fino al ritorno alla conformità.",
      ],
    },
    {
      heading: 'Perché monitorarlo: effetti su salute',
      paragraphs: [
        "La presenza di E. coli indica rischio di malattie idrodiffuse. I ceppi patogeni di E. coli stesso (come O157:H7) possono causare diarrea grave, colite emorragica, sindrome emolitico-uremica con possibile danno renale. Più frequentemente, la presenza di E. coli generico segnala il rischio di altri patogeni: Salmonella (febbre tifoide e gastroenteriti), Vibrio cholerae (colera, oggi raro in Italia), Campylobacter (gastroenteriti), virus enterici (epatite A, norovirus), parassiti (Giardia, Cryptosporidium).",
        "I sintomi tipici di un'infezione idrodiffusa sono gastroenterite acuta con diarrea, vomito, dolori addominali, febbre. La gravità dipende dal patogeno, dalla dose infettiva, dalle condizioni del soggetto. Categorie particolarmente vulnerabili sono bambini, anziani, donne in gravidanza, persone immunodepresse: in questi gruppi anche infezioni 'lievi' possono avere conseguenze serie.",
        "In caso di sospetta esposizione a un'acqua contaminata, è importante non sottovalutare eventuali sintomi gastrointestinali nelle 24-72 ore successive e rivolgersi al medico. Per le categorie vulnerabili la prudenza è massima.",
      ],
    },
    {
      heading: 'Come si rileva',
      paragraphs: [
        "L'analisi di E. coli richiede sempre laboratorio qualificato. I metodi standard sono di filtrazione su membrana con coltura su terreno selettivo (membrane filtration) o conte presuntive con tubi multipli (MPN). I terreni selettivi sono studiati per fare crescere solo E. coli o coliformi specifici, escludendo gli altri batteri.",
        "Il risultato si esprime come UFC (Unità Formanti Colonia) per 100 mL di acqua, dopo incubazione a 36-44 °C per 24-48 ore. La conformità è binaria: 0 UFC = conforme, ≥ 1 UFC = non conforme.",
        "Esistono kit semplificati 'fai da te' per pozzi privati che danno una risposta presuntiva in 24-48 ore con cambio colore del terreno. Sono utili come screening, ma per documentare la qualità microbiologica dell'acqua, soprattutto in caso di analisi periodiche obbligatorie o di valutazione del rischio, serve un laboratorio qualificato con metodi validati conformi alle norme tecniche. Il campionamento microbiologico richiede attrezzatura sterile e tempi di trasporto controllati: anche pochi ritardi possono falsare il risultato.",
      ],
    },
    {
      heading: 'Cosa fare in caso di positività',
      paragraphs: [
        "Se l'analisi rivela presenza di E. coli, è essenziale non bere l'acqua e non usarla per cucinare, lavarsi i denti, preparare biberon o ghiaccio. L'acqua può essere usata per docce e lavaggi superficiali se il rischio è limitato (nessun ceppo particolarmente patogeno noto), ma è prudente evitare di ingerirla.",
        "Va contattato immediatamente il gestore idrico e l'ASL locale. Sui pozzi privati la responsabilità è del proprietario, che deve fare eseguire bonifica (shock chlorination del pozzo e della rete interna), verificare l'integrità di filtri e accessori, indagare la fonte di contaminazione (fosse settiche, sversamenti, ingresso animali), e ripetere l'analisi prima di tornare a usare l'acqua.",
        "Come misura temporanea, la bollitura per almeno 1 minuto a 100 °C uccide E. coli e la maggior parte dei patogeni batterici e virali. È la prima difesa nelle emergenze, ad esempio durante ordinanze di non potabilità da rete acquedottistica. Per soluzioni stabili servono trattamenti di disinfezione permanenti (raggi UV, clorazione, ozono) o sostituzione della fonte di approvvigionamento.",
      ],
      bullets: [
        'NON bere, NON cucinare, NON lavare i denti',
        'Contattare gestore idrico e ASL',
        "Bollire l'acqua per almeno 1 minuto come misura temporanea",
        'Shock chlorination per i pozzi privati',
        'Sistemi UV o clorazione permanente per protezione stabile',
      ],
    },
  ],
  faqs: [
    {
      q: "Trovare E. coli nell'acqua del rubinetto cosa significa?",
      a: "Significa che l'acqua è entrata in contatto con materiale fecale di origine umana o animale, ed è quindi a rischio di contenere anche patogeni più pericolosi (Salmonella, virus, parassiti). Anche un singolo UFC per 100 mL è non-conformità e richiede azione immediata: non bere l'acqua, contattare gestore idrico e ASL, eseguire bonifica della rete interna.",
    },
    {
      q: "L'acqua con E. coli si può usare per la doccia?",
      a: "Per la doccia il rischio è ridotto rispetto al consumo orale, perché l'ingestione è limitata. Tuttavia è prudente evitare di ingerire acqua durante la doccia e non usarla per lavare i denti o sciacquare la bocca. Per bambini molto piccoli e persone immunodepresse, è meglio rinunciare anche alla doccia finché non è stata ripristinata la conformità.",
    },
    {
      q: "La bollitura uccide E. coli?",
      a: "Sì. Portare l'acqua a ebollizione per almeno 1 minuto uccide E. coli e praticamente tutti i patogeni batterici e virali. È la prima difesa nelle emergenze. Importante: la bollitura non rimuove contaminanti chimici (metalli pesanti, pesticidi, PFAS) che potrebbero essere associati alla contaminazione. È una misura temporanea, non sostituisce la bonifica della causa.",
    },
    {
      q: "Quanto costa un'analisi microbiologica dell'acqua?",
      a: "Un'analisi microbiologica base (E. coli, coliformi totali, enterococchi) presso un laboratorio qualificato costa generalmente tra 50 e 100 euro. Pacchetti più completi che includono anche carica batterica totale, Pseudomonas e altri indicatori, partono da 100-150 euro. È raccomandata almeno una volta all'anno per i pozzi privati e in qualsiasi caso di sospetta contaminazione.",
    },
    {
      q: 'Quali sono le cause più comuni di E. coli al rubinetto?',
      a: "Per acquedotti pubblici: rotture di rete con intrusione di acque superficiali o reflue, serbatoi di accumulo non manutenuti, intrusioni fognarie occasionali. Per pozzi privati: fosse settiche non a tenuta vicine al pozzo, sversamenti agricoli, animali al pascolo, ingresso di insetti o roditori dalle teste pozzo non sigillate, contaminazione del serbatoio domestico. Identificare la causa è essenziale per evitare ricontaminazioni.",
    },
  ],
  relatedIds: ['coliformi_totali', 'enterococchi', 'cloro_residuo', 'torbidita'],
  ctaContext: "Per un'analisi microbiologica completa della tua acqua del rubinetto o del tuo pozzo privato, con un laboratorio qualificato e metodi validati:",
});

// ============================================================================
// 22. Coliformi totali
// ============================================================================
registerGuide({
  id: 'coliformi_totali',
  itName: 'Coliformi totali',
  slug: 'coliformi-totali',
  category: 'microbiologia',
  shortTitle: "Coliformi totali nell'acqua del rubinetto: indicatori e significato",
  metaDescription:
    "Coliformi totali nell'acqua potabile: limite di legge 0 UFC/100mL. Indicatori della qualità della rete e differenza con E. coli.",
  searchKeywords: [
    'coliformi totali acqua',
    'coliformi acqua rubinetto',
    'limite coliformi acqua potabile',
    'analisi microbiologica coliformi',
    'differenza coliformi e coli',
    'coliformi acqua pozzo',
  ],
  intro:
    "I coliformi totali sono un gruppo eterogeneo di batteri usati come indicatori della qualità microbiologica dell'acqua. A differenza di E. coli, non indicano necessariamente contaminazione fecale recente: possono provenire anche dall'ambiente (suolo, vegetazione, biofilm nelle tubazioni). La loro presenza è però sempre un segnale che la rete non è in condizioni ottimali. Il D.Lgs. 18/2023 richiede zero UFC/100 mL.",
  sections: [
    {
      heading: "Cosa sono i coliformi totali",
      paragraphs: [
        "I coliformi totali sono un gruppo di batteri Gram-negativi che condividono alcune caratteristiche metaboliche: capacità di fermentare il lattosio producendo gas a 35-37 °C. Includono diversi generi (Escherichia, Klebsiella, Enterobacter, Citrobacter, Serratia) con origini ambientali diverse.",
        "Una parte dei coliformi totali è di origine fecale (in particolare E. coli ed Enterobacter); un'altra parte è ambientale, vive normalmente nel suolo, sui vegetali, nei biofilm delle tubazioni. Per questo i coliformi totali sono considerati indicatori 'meno specifici' di E. coli per la contaminazione fecale, ma più sensibili per la qualità complessiva della rete idrica.",
        "Nelle acque potabili acquedottistiche correttamente disinfettate, i coliformi totali devono essere assenti. La loro presenza segnala un'anomalia: contaminazione recente, ricrescita microbica in rete, biofilm consolidati nelle tubazioni, problemi nella disinfezione.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "Le cause sono in parte sovrapposte a quelle di E. coli, in parte specifiche. Contaminazione esterna recente (rotture, intrusioni) porta sia E. coli sia coliformi totali. Ricrescita microbica in rete (in serbatoi vecchi, tubazioni con biofilm) porta tipicamente solo coliformi ambientali, senza E. coli.",
        "I biofilm sono uno dei principali serbatoi di coliformi in rete: pellicole batteriche aderenti alle pareti interne delle tubazioni, dei serbatoi, degli accessori, che proteggono i microrganismi dalla disinfezione e li rilasciano nell'acqua in modo intermittente. In edifici con impianti vecchi non sanificati, i biofilm sono molto frequenti.",
        "Anche serbatoi di accumulo non manutenuti, addolcitori non rigenerati correttamente, filtri sotto-lavello vecchi possono diventare sede di sviluppo batterico. La regola è: dove c'è acqua ferma e materia organica, possono crescere coliformi.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per i coliformi totali un limite di 0 UFC per 100 mL nell'acqua destinata al consumo umano. È un parametro indicatore stretto: il superamento richiede investigazione e interventi.",
        "Non esiste un valore ideale diverso da zero. La presenza, anche minima, segnala un problema. La normativa è meno severa nelle conseguenze rispetto a E. coli (che è parametro sanitario assoluto), perché spesso la causa è ambientale e non fecale, ma resta una non-conformità da sanare.",
        "Per i pozzi privati e le piccole forniture, la normativa è la stessa: assenza richiesta. La direttiva 2020/2184 ha rafforzato gli obblighi anche per queste realtà, riconoscendo il rischio sanitario sottovalutato delle acque non gestite da enti pubblici.",
      ],
    },
    {
      heading: 'Perché monitorarli',
      paragraphs: [
        "Anche se molti coliformi totali sono ambientali e non patogeni, la loro presenza segnala condizioni di rete favorevoli alla sopravvivenza di patogeni veri. Una rete con biofilm consolidati può veicolare anche patogeni specifici come Legionella, Pseudomonas aeruginosa, micobatteri non tubercolari.",
        "Sul piano operativo, i coliformi totali sono un indicatore precoce di problemi: spesso compaiono prima di E. coli, segnalando che la rete sta degradando o che la disinfezione sta perdendo efficacia. Un buon programma di monitoraggio acquedottistico mantiene sotto controllo i coliformi totali per intervenire prima che si manifestino contaminazioni più gravi.",
        "Per famiglie con pozzi privati o autonomi, l'analisi dei coliformi totali andrebbe eseguita almeno una volta all'anno (idealmente in periodo estivo, quando il rischio è massimo per temperatura e abbassamento delle falde) per verificare lo stato della propria fornitura.",
      ],
    },
    {
      heading: 'Come si rilevano',
      paragraphs: [
        "Il metodo standard è la filtrazione su membrana con coltura su terreno selettivo (Endo agar, ColilertÒ, o equivalenti). 100 mL di acqua vengono filtrati attraverso una membrana sterile, che viene poi incubata a 35-37 °C per 24-48 ore. Le colonie di coliformi sviluppano una colorazione caratteristica.",
        "Esistono anche metodi MPN (Most Probable Number) con tubi multipli, e kit rapidi a substrato definito (es. Colilert) che forniscono risposta in 24 ore e distinguono contemporaneamente coliformi totali ed E. coli con doppio segnale.",
        "L'analisi richiede laboratorio qualificato con metodi validati. Il campionamento richiede contenitori sterili, raccolta con tecnica asettica (sterilizzazione del rubinetto, flussaggio iniziale, prelievo evitando contatto), trasporto refrigerato in tempi brevi (idealmente entro 6 ore, massimo 24). Errori in campionamento o conservazione possono dare falsi positivi o falsi negativi.",
      ],
    },
    {
      heading: 'Cosa fare in caso di positività',
      paragraphs: [
        "In presenza di coliformi totali senza E. coli, il rischio è inferiore rispetto a una contaminazione fecale conclamata, ma comunque va indagato. Il primo passo è ripetere l'analisi su un nuovo campione per escludere errori di campionamento. Se la positività si conferma, va contattato il gestore idrico (per rete pubblica) o si deve procedere con bonifica autonoma (per pozzi privati).",
        "Le azioni di bonifica includono: shock chlorination della rete interna (con dosi elevate temporanee di cloro, seguite da risciacquo); sanificazione di serbatoi di accumulo; sostituzione di filtri sotto-lavello e addolcitori vecchi; verifica di accessori non sanificabili (vecchi rompigetto, riduttori di flusso) che possono essere serbatoi di biofilm.",
        "Come misura temporanea, bollire l'acqua è efficace contro tutti i coliformi. Per protezioni stabili in pozzi privati o piccole reti rurali, sistemi di disinfezione UV all'ingresso dell'abitazione sono molto efficaci e non lasciano residui chimici. Vanno installati con prefiltrazione adeguata per garantire la trasparenza necessaria all'azione dei raggi UV.",
      ],
      bullets: [
        "Ripetere l'analisi per escludere errori di campionamento",
        'Shock chlorination della rete interna',
        'Sanificazione di serbatoi e sostituzione di filtri vecchi',
        'Sistemi UV per protezione continua di pozzi privati',
        "Bollitura come misura temporanea",
      ],
    },
  ],
  faqs: [
    {
      q: "Qual è la differenza tra coliformi totali e Escherichia coli?",
      a: "I coliformi totali sono un gruppo ampio di batteri con origini varie: fecali, ambientali, da biofilm. Escherichia coli è una specie specifica all'interno dei coliformi, di origine quasi esclusivamente fecale. La presenza di E. coli indica contaminazione fecale certa e attuale. La presenza di soli coliformi totali (senza E. coli) può indicare contaminazione ambientale, biofilm in rete, problemi di disinfezione, ma non necessariamente contaminazione fecale.",
    },
    {
      q: "Trovare coliformi totali nell'acqua è grave?",
      a: "Va sempre indagato, ma è meno grave del riscontro di E. coli. La presenza di coliformi totali senza E. coli indica spesso problemi di rete (biofilm, scarsa disinfezione) senza contaminazione fecale acuta. Va comunque eseguita una bonifica della rete interna e identificate le cause, perché condizioni favorevoli ai coliformi sono anche favorevoli a patogeni veri.",
    },
    {
      q: 'I coliformi totali sono pericolosi?',
      a: "Singolarmente molti coliformi totali sono innocui o di patogenicità limitata. La loro importanza è come indicatori: dove sopravvivono coliformi possono sopravvivere anche patogeni veri. Per categorie sensibili (bambini, anziani, immunodepressi) anche basse concentrazioni di coliformi totali rappresentano un rischio incrementale che giustifica cautela. In caso di dubbio è opportuno rivolgersi al medico.",
    },
    {
      q: 'Quanto spesso analizzare i coliformi nei pozzi privati?',
      a: "Per pozzi privati a uso domestico è raccomandata almeno una volta all'anno, idealmente in estate quando il rischio è massimo. Dopo lavori al pozzo, alluvioni, sostituzione di pompe, o se compaiono variazioni di sapore, odore o aspetto dell'acqua, l'analisi va ripetuta. Famiglie con bambini piccoli o categorie sensibili dovrebbero analizzare almeno due volte all'anno.",
    },
    {
      q: "Come si eliminano i coliformi dall'acqua?",
      a: "La bollitura è efficace contro tutti i coliformi come misura immediata. Per protezione continua, i sistemi più efficaci sono: clorazione (dosaggio controllato), disinfezione UV (senza residui chimici), ozono. Per pozzi privati, lampade UV con prefiltrazione sono la soluzione più diffusa. Filtri a carbone, addolcitori e bollitura proteggono dai coliformi solo se gestiti correttamente; in caso di malfunzionamento possono diventare sede di crescita microbica.",
    },
  ],
  relatedIds: ['e_coli', 'enterococchi', 'cloro_residuo', 'torbidita'],
  ctaContext: "Per un'analisi completa dei coliformi e degli altri indicatori microbiologici della tua acqua del rubinetto o del tuo pozzo privato, con un laboratorio qualificato:",
});

// ============================================================================
// 23. Enterococchi
// ============================================================================
registerGuide({
  id: 'enterococchi',
  itName: 'Enterococchi intestinali',
  slug: 'enterococchi',
  category: 'microbiologia',
  shortTitle: "Enterococchi nell'acqua del rubinetto: contaminazione e resistenza",
  metaDescription:
    "Enterococchi nell'acqua potabile: limite di legge 0 UFC/100mL. Indicatori di contaminazione fecale resistente, importanza e gestione.",
  searchKeywords: [
    'enterococchi acqua',
    'enterococchi intestinali acqua',
    'limite enterococchi acqua potabile',
    'analisi enterococchi pozzo',
    'enterococchi differenza coliformi',
    'contaminazione fecale acqua',
  ],
  intro:
    "Gli enterococchi intestinali sono il terzo indicatore microbiologico fondamentale per la qualità dell'acqua potabile, accanto a Escherichia coli e ai coliformi totali. Sono batteri intestinali particolarmente resistenti, capaci di sopravvivere in acqua più a lungo di E. coli. La loro presenza è quindi un segnale di contaminazione fecale spesso non recente ma persistente, e indica che la rete necessita interventi mirati. Il D.Lgs. 18/2023 fissa il limite a zero UFC/100 mL.",
  sections: [
    {
      heading: "Cosa sono gli enterococchi intestinali",
      paragraphs: [
        "Gli enterococchi sono batteri Gram-positivi del genere Enterococcus, vivono normalmente nell'intestino di esseri umani e animali. Le specie principali sono Enterococcus faecalis ed Enterococcus faecium. Sono molto resistenti a condizioni ambientali avverse: tollerano temperature elevate, sale, pH estremi, disinfettanti.",
        "Proprio per la loro resistenza, gli enterococchi sopravvivono in acqua più a lungo di E. coli e di molti coliformi. Per questo sono indicatori particolarmente sensibili di contaminazione fecale anche non recente: dove E. coli può essere già morto, gli enterococchi possono essere ancora rilevabili.",
        "Sul piano patogenetico, alcuni ceppi di enterococchi sono opportunisti e causano infezioni urinarie, endocarditi, batteriemie, soprattutto in pazienti ospedalizzati e immunodepressi. Alcuni ceppi (enterococchi vancomicina-resistenti, VRE) sono particolarmente preoccupanti per la resistenza agli antibiotici. Per la popolazione generale sana, gli enterococchi sono però raramente causa di malattia diretta.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "Come E. coli, anche gli enterococchi indicano contaminazione fecale, ma a differenza di E. coli sopravvivono meglio nell'ambiente. La loro presenza può segnalare contaminazione recente (in concomitanza con E. coli) o contaminazione passata persistente (presenza di soli enterococchi, con E. coli ormai eliminato).",
        "Le cause sono le stesse: intrusioni di acque reflue o superficiali, fosse settiche non a tenuta, contaminazione di pozzi privati, serbatoi non manutenuti, manomissioni dell'impianto. Per i pozzi privati gli enterococchi sono particolarmente indicativi di contaminazione fecale animale, perché alcune specie sono caratteristiche di mammiferi non umani (bovini, suini).",
        "Negli acquedotti pubblici correttamente trattati, gli enterococchi devono essere assenti. La disinfezione standard li elimina, anche se richiede dosaggi leggermente più alti rispetto a E. coli per la loro maggiore resistenza. La loro presenza al rubinetto indica sempre un problema specifico.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, fissa per gli enterococchi intestinali un limite di 0 UFC per 100 mL nell'acqua destinata al consumo umano. È un parametro sanitario assoluto, allo stesso livello di E. coli.",
        "Non esiste un valore ideale diverso da zero. L'acqua potabile sicura non deve contenere enterococchi in nessuna concentrazione. Un singolo riscontro positivo implica non-conformità e richiede interventi immediati.",
        "L'OMS adotta criteri analoghi. Gli enterococchi sono spesso usati insieme a E. coli proprio per fornire un quadro più completo: presenza di entrambi indica contaminazione recente importante; presenza dei soli enterococchi indica contaminazione passata o resistenza al trattamento; presenza di solo E. coli indica contaminazione molto recente.",
      ],
    },
    {
      heading: 'Perché monitorarli',
      paragraphs: [
        "La loro maggiore resistenza ambientale li rende indicatori più sensibili di rischio sanitario residuo. Una rete in cui gli enterococchi sono saltuariamente presenti, anche senza E. coli, può veicolare patogeni resistenti come Cryptosporidium, Giardia, alcuni virus enterici, che condividono con gli enterococchi la capacità di sopravvivere a disinfezioni meno efficaci.",
        "Per i pozzi privati gli enterococchi sono particolarmente importanti come indicatori della qualità della falda. Una contaminazione cronica della falda da reflui agricoli o zootecnici può manifestarsi con enterococchi persistenti anche quando E. coli non è più rilevabile.",
        "Per famiglie con bambini piccoli, donne in gravidanza e persone immunodepresse, monitorare gli enterococchi è particolarmente importante perché alcuni ceppi sono opportunisti e possono causare infezioni in soggetti vulnerabili. In presenza di sintomi compatibili è opportuno rivolgersi al medico.",
      ],
    },
    {
      heading: 'Come si rilevano',
      paragraphs: [
        "Il metodo standard è la filtrazione su membrana con coltura su terreni selettivi (Slanetz e Bartley, mEnterococcus, o equivalenti). 100 mL di acqua vengono filtrati, la membrana incubata a 36-44 °C per 24-48 ore. Le colonie sviluppano colorazioni caratteristiche (rosso-marroni tipiche).",
        "Esistono anche kit a substrato definito (es. Enterolert) che danno risposta in 24-48 ore con buona sensibilità. Per analisi affidabili e certificate serve sempre laboratorio qualificato con metodi validati conformi alle norme tecniche.",
        "Il campionamento ha le stesse cautele degli altri parametri microbiologici: contenitori sterili, prelievo asettico, trasporto refrigerato in tempi brevi. Un buon protocollo per pozzi privati e piccole reti include sempre la triade E. coli, coliformi totali, enterococchi: i tre indicatori insieme danno un quadro completo della qualità microbiologica e dell'origine di eventuali problemi.",
      ],
    },
    {
      heading: 'Cosa fare in caso di positività',
      paragraphs: [
        "In presenza di enterococchi positivi, l'acqua va considerata non potabile fino a chiarimento e bonifica. Non bere, non cucinare, non usare per igiene orale. Contattare immediatamente il gestore idrico (per rete pubblica) o procedere autonomamente alla bonifica (per pozzi privati).",
        "La bonifica include shock chlorination del pozzo o del serbatoio, sanificazione della rete interna, sostituzione di filtri e accessori potenzialmente contaminati, indagine delle cause (verifica integrità del pozzo, vicinanza di fosse settiche, drenaggio di acque superficiali). Per pozzi privati può essere necessario un intervento idrogeologico per proteggere meglio la fonte.",
        "Come misura immediata, la bollitura per almeno 1 minuto è efficace anche contro gli enterococchi più resistenti. Per protezione continua, sistemi di disinfezione UV o clorazione automatica all'ingresso dell'abitazione sono la soluzione standard per pozzi privati con problemi microbiologici ricorrenti.",
      ],
      bullets: [
        'Considerare l\'acqua non potabile fino a bonifica completa',
        'Shock chlorination del pozzo e della rete interna',
        'Identificare e risolvere la fonte di contaminazione',
        'Sistemi UV o clorazione continua per protezione stabile',
        "Bollitura come misura temporanea efficace",
      ],
    },
  ],
  faqs: [
    {
      q: 'Differenza tra enterococchi ed Escherichia coli?',
      a: "Entrambi sono indicatori di contaminazione fecale, ma con caratteristiche diverse. E. coli è un coliforme Gram-negativo, sopravvive in acqua per giorni-settimane. Gli enterococchi sono Gram-positivi, sopravvivono per settimane-mesi e tollerano meglio le disinfezioni. Per questo gli enterococchi indicano spesso contaminazione meno recente ma più persistente, mentre E. coli indica tipicamente contaminazione attuale e ben definita.",
    },
    {
      q: 'Gli enterococchi nell\'acqua sono pericolosi?',
      a: "Sono indicatori di rischio più che patogeni diretti. Per la popolazione generale sana, gli enterococchi alle concentrazioni delle acque contaminate raramente causano malattia diretta. Per soggetti immunodepressi, anziani, neonati, possono però essere causa di infezioni opportunistiche. La preoccupazione principale è cosa altro può essere presente insieme agli enterococchi: virus enterici, parassiti, batteri patogeni resistenti.",
    },
    {
      q: 'Pozzo privato: devo analizzare gli enterococchi?',
      a: "Sì, fanno parte dell'analisi microbiologica completa raccomandata almeno annualmente per i pozzi privati. La triade E. coli, coliformi totali, enterococchi dà un quadro completo della qualità microbiologica. Se solo gli enterococchi sono positivi, indica contaminazione fecale non recente ma persistente; se anche E. coli è positivo, indica contaminazione attuale. Le strategie di bonifica possono differire.",
    },
    {
      q: "Come si eliminano gli enterococchi dall'acqua?",
      a: "Sono più resistenti dei coliformi alla disinfezione, ma sensibili agli stessi sistemi a dosaggi più elevati. La bollitura per almeno 1 minuto li elimina efficacemente. La clorazione richiede dosi e tempi leggermente superiori rispetto a quelli per E. coli. I raggi UV sono efficaci se l'acqua è chiara (torbidità sotto 1 NTU). Per pozzi privati con problemi ricorrenti, sistemi di disinfezione continua sono indispensabili.",
    },
    {
      q: "Posso avere enterococchi senza avere E. coli?",
      a: "Sì, è una situazione tipica e clinicamente importante. Significa che c'è stata contaminazione fecale, ma E. coli (più delicato) è già morto mentre gli enterococchi (più resistenti) sono ancora presenti. Indica contaminazione passata o persistente, eventualmente con problemi di disinfezione. Va indagato esattamente come la presenza di E. coli, anche se l'evento contaminante può essere meno recente.",
    },
  ],
  relatedIds: ['e_coli', 'coliformi_totali', 'cloro_residuo', 'torbidita'],
  ctaContext: "Per un'analisi microbiologica completa che includa enterococchi, E. coli e coliformi della tua acqua o del tuo pozzo privato, con un laboratorio qualificato:",
});

// ============================================================================
// 24. PFAS totali
// ============================================================================
registerGuide({
  id: 'pfas_totali',
  itName: 'PFAS totali',
  slug: 'pfas-totali',
  category: 'salute',
  shortTitle: "PFAS nell'acqua del rubinetto: contaminanti emergenti e nuovi limiti",
  metaDescription:
    "PFAS nell'acqua potabile: nuovo limite D.Lgs. 18/2023 di 0,1 µg/L per la somma di 20. Contaminazione del Veneto, rischi sanitari e come rimuoverli.",
  searchKeywords: [
    'pfas acqua',
    'pfas acqua rubinetto',
    'limite pfas acqua potabile',
    'pfas veneto miteni',
    'pfas tumori',
    'come rimuovere pfas acqua',
    'sostanze perfluoroalchiliche',
    'pfas analisi',
  ],
  intro:
    "I PFAS, sostanze per- e polifluoroalchiliche, sono i contaminanti emergenti più discussi degli ultimi anni. Composti chimici di sintesi quasi indistruttibili, sono stati usati per decenni in tessuti impermeabili, schiume antincendio, padelle antiaderenti, imballaggi. La contaminazione del Veneto da parte dell'industria Miteni ha portato il problema all'attenzione nazionale. Il D.Lgs. 18/2023 introduce per la prima volta un limite specifico: 0,1 µg/L per la somma dei 20 PFAS più rilevanti.",
  sections: [
    {
      heading: "Cosa sono i PFAS",
      paragraphs: [
        "I PFAS (Per- and Polyfluoroalkyl Substances) sono una famiglia di oltre 10.000 composti chimici di sintesi, caratterizzati dalla presenza di legami carbonio-fluoro estremamente stabili. Questa stabilità chimica è la loro virtù tecnologica (resistenza al calore, agli oli, all'acqua) e il loro principale problema ambientale: praticamente non si degradano in natura. Sono noti come 'forever chemicals'.",
        "I PFAS più studiati sono PFOA (acido perfluorottanoico) e PFOS (acido perfluorottansolfonico). Sono stati banditi o severamente limitati negli ultimi 15 anni, ma persistono nell'ambiente e nel sangue umano. Recentemente le aziende hanno introdotto PFAS a catena più corta (es. GenX), inizialmente presentati come più sicuri, ma con evidenze crescenti di tossicità simile.",
        "I PFAS sono diffusi globalmente: si trovano nel sangue di praticamente tutta la popolazione mondiale, nelle acque di mare, nei ghiacci dell'Artico. La concentrazione nell'acqua potabile dipende dalla vicinanza a fonti industriali specifiche e dalle caratteristiche idrogeologiche del territorio.",
      ],
    },
    {
      heading: "Da dove arrivano nell'acqua del rubinetto",
      paragraphs: [
        "Le fonti principali sono industriali. Stabilimenti che producono o usano PFAS (fluoropolimeri, fluoro-tensioattivi, schiume antincendio AFFF, trattamenti tessili e per imballaggi) hanno rilasciato per decenni grandi quantità di queste sostanze nelle acque di scarico. Anche aree militari e aeroporti, dove sono usate schiume antincendio per esercitazioni, sono fonti note.",
        "La contaminazione si propaga attraverso le falde acquifere a grande distanza. In Veneto, la contaminazione partita dallo stabilimento Miteni di Trissino (Vicenza) ha interessato un'area di oltre 200 km² nelle province di Vicenza, Verona e Padova, coinvolgendo centinaia di migliaia di persone.",
        "Anche fonti diffuse contribuiscono: discariche storiche, scarichi urbani (i PFAS arrivano in città attraverso prodotti di consumo e poi escono dai depuratori senza essere trattati), ricaduta atmosferica. Per questo i PFAS sono rilevabili in tracce praticamente ovunque, anche lontano da fonti industriali specifiche.",
      ],
    },
    {
      heading: 'Limiti di legge e range ideali',
      paragraphs: [
        "Il D.Lgs. 18/2023, in recepimento della direttiva UE 2020/2184, ha introdotto per la prima volta in Italia un limite specifico per i PFAS nell'acqua potabile: 0,1 µg/L per la somma di 20 PFAS specifici (definiti come 'PFAS totali' nella normativa). Esiste anche un limite generale per la 'somma di tutti i PFAS' (Total PFAS) pari a 0,5 µg/L.",
        "Il valore ottimale è il più basso possibile, idealmente sotto 0,01 µg/L. L'OMS sta finalizzando i suoi valori guida e diversi paesi hanno adottato limiti più stringenti. Negli Stati Uniti l'EPA ha proposto limiti molto bassi per singoli PFOA e PFOS (4 ng/L = 0,004 µg/L), riflettendo evidenze crescenti di tossicità a dosi prima considerate sicure.",
        "In Veneto, dopo l'emergenza Miteni, la Regione ha adottato 'livelli di performance' molto stringenti per gli acquedotti pubblici: somma PFOA + PFOS + PFBS sotto 30 ng/L (0,03 µg/L). Sono di fatto tra i più severi al mondo per l'acqua potabile e impongono trattamenti specifici con carboni attivi sostituiti regolarmente.",
      ],
    },
    {
      heading: 'Perché monitorarli: effetti sulla salute',
      paragraphs: [
        "I PFAS sono associati a numerosi effetti sanitari ben documentati. L'IARC ha classificato il PFOA come cancerogeno certo (gruppo 1) per l'uomo e il PFOS come probabile cancerogeno (gruppo 2A) nel 2023. Sono associati ad aumentato rischio di tumore renale, testicolare, e ad altri effetti tumorali.",
        "Oltre alla cancerogenicità, l'esposizione cronica è associata a: aumento del colesterolo, problemi al fegato (steatosi, elevazione enzimi epatici), riduzione della risposta immunitaria ai vaccini nei bambini, problemi tiroidei, ipertensione e preeclampsia in gravidanza, basso peso alla nascita, possibile interferenza endocrina e effetti sulla fertilità.",
        "I PFAS si accumulano nel corpo umano con emivite lunghissime (2-8 anni per molti PFAS, fino a decenni per altri). Anche basse esposizioni protratte portano a concentrazioni significative nel sangue. Per categorie vulnerabili (donne in gravidanza e allattamento, bambini in crescita) l'obiettivo è minimizzare l'esposizione. In caso di esposizione documentata o dubbi sanitari è opportuno rivolgersi al medico.",
      ],
    },
    {
      heading: 'Come si rilevano i PFAS',
      paragraphs: [
        "L'analisi dei PFAS richiede tecniche analitiche di alto livello, generalmente cromatografia liquida accoppiata a spettrometria di massa tandem (LC-MS/MS). I limiti di rilevazione sono dell'ordine di pochi ng/L (0,001 µg/L), necessari per verificare la conformità ai limiti stringenti.",
        "Le strisce reattive e i kit casalinghi non esistono per i PFAS: la chimica è troppo complessa. Solo laboratori qualificati e specificamente attrezzati possono eseguire queste analisi. Il costo è significativamente superiore a quello degli altri parametri (tipicamente 80-200 euro per profilo PFAS).",
        "Per chi vive in zone a rischio note (Veneto, aree vicine a stabilimenti ex chimici, basi militari, aeroporti) un'analisi PFAS è raccomandata. La normativa europea sta ampliando gli obblighi di monitoraggio anche per gli acquedotti pubblici, ma per i pozzi privati e per chi vuole una verifica indipendente l'analisi va commissionata autonomamente.",
      ],
    },
    {
      heading: 'Come si riducono i PFAS',
      paragraphs: [
        "I PFAS sono molto difficili da rimuovere. La bollitura non li elimina, anzi li concentra. La disinfezione standard non funziona. I trattamenti efficaci sono limitati ma esistono.",
        "Il sistema più diffuso in ambito acquedottistico e domestico sono i carboni attivi granulari (GAC) ad alta superficie specifica. Sono efficaci ma vanno sostituiti regolarmente perché si saturano. L'efficienza dipende dal tipo di PFAS (i PFAS a catena lunga sono trattenuti meglio dei PFAS a catena corta come GenX).",
        "L'osmosi inversa rimuove il 90-99% di tutti i PFAS, inclusi quelli a catena corta. È la soluzione domestica più affidabile per acqua da bere, soprattutto in zone con contaminazione documentata. Sistemi a scambio ionico con resine specifiche per PFAS sono utilizzati in alcuni acquedotti pubblici. Per chi vive in zone a rischio, un sistema sotto-lavello a osmosi inversa con prefiltrazione a carbone attivo è la soluzione standard.",
      ],
      bullets: [
        'Carbone attivo granulare (GAC): efficace, va sostituito regolarmente',
        'Osmosi inversa: rimuove il 90-99% di tutti i PFAS',
        'Scambio ionico con resine specifiche: usato in acquedotti',
        'Bollitura, addolcitori, clorazione: NON funzionano',
        'Sistema sotto-lavello combinato carbone + osmosi: standard domestico',
      ],
    },
    {
      heading: 'Casi italiani noti',
      paragraphs: [
        "Il caso PFAS Veneto è il più grave in Europa per dimensioni della popolazione coinvolta. La contaminazione, partita dallo stabilimento Miteni di Trissino (Vicenza), ha interessato decenni di scarichi nel reticolo idrografico locale. Quando l'emergenza è stata riconosciuta nel 2013, dopo studi del CNR e segnalazioni di Greenpeace, oltre 350.000 persone in 30 comuni delle province di Vicenza, Verona e Padova erano esposte a PFAS nell'acqua potabile.",
        "Da allora la Regione Veneto ha installato filtri a carbone attivo su tutti gli acquedotti dell'area rossa, riducendo drasticamente le concentrazioni al rubinetto. Il monitoraggio biologico della popolazione coinvolta ha però documentato livelli di PFAS nel sangue significativamente più alti della media nazionale, con effetti sanitari attesi a lungo termine. Sono stati avviati programmi di sorveglianza sanitaria pluriennali e azioni legali contro Miteni.",
        "Altri casi italiani sono emersi successivamente: contaminazioni puntuali in basi militari (NAS), in alcune aree industriali del Piemonte (Spinetta Marengo) e della Lombardia. ISS e ARPA stanno conducendo un monitoraggio sistematico delle acque potabili italiane per i PFAS, in linea con i nuovi obblighi della direttiva 2020/2184.",
      ],
    },
  ],
  faqs: [
    {
      q: "I PFAS nell'acqua sono pericolosi?",
      a: "Sì, sono uno dei contaminanti emergenti più studiati per i loro effetti sanitari. PFOA è classificato cancerogeno certo dall'IARC, PFOS probabilmente cancerogeno. Sono associati ad aumento del colesterolo, problemi epatici, riduzione della risposta immunitaria, problemi tiroidei, complicazioni in gravidanza. Si accumulano nel sangue con emivite molto lunghe (anni-decenni). Per minimizzare l'esposizione, l'obiettivo è restare il più possibile sotto il limite di 0,1 µg/L.",
    },
    {
      q: "Vivo in Veneto: la mia acqua del rubinetto contiene PFAS?",
      a: "Dipende dal comune. Nelle aree rossa, arancio e gialla dei 30 comuni coinvolti nella contaminazione Miteni, gli acquedotti sono stati dotati di filtri a carbone attivo che riducono drasticamente i PFAS. I valori al rubinetto oggi rispettano i livelli di performance regionali (sotto 30 ng/L per PFOA+PFOS+PFBS). Per verifica indipendente, è possibile far eseguire un'analisi specifica presso un laboratorio qualificato attrezzato per i PFAS.",
    },
    {
      q: "Come si eliminano i PFAS dall'acqua?",
      a: "I metodi efficaci sono limitati. La bollitura non funziona. Filtri a carbone attivo granulare (GAC) sono efficaci ma vanno sostituiti regolarmente. L'osmosi inversa rimuove il 90-99% di tutti i PFAS, inclusi quelli a catena corta più difficili. Per zone a rischio noto, un sistema sotto-lavello combinato carbone + osmosi è la soluzione standard. I normali filtri a brocca non sono affidabili per i PFAS, salvo quelli specificamente certificati.",
    },
    {
      q: "I PFAS si possono eliminare dal corpo?",
      a: "Lentamente. Una volta accumulati, i PFAS vengono eliminati molto lentamente dal corpo, con emivite di anni-decenni a seconda del composto specifico. La donazione di sangue regolare è uno dei pochi metodi che accelera leggermente l'eliminazione (perché alcuni PFAS si legano alle proteine del sangue). La strategia principale resta la prevenzione: ridurre l'esposizione futura. In caso di esposizione documentata è opportuno consultare il medico.",
    },
    {
      q: "Quanto costa un'analisi PFAS?",
      a: "Un'analisi completa del profilo PFAS (i 20 composti rilevanti più altri) presso un laboratorio qualificato attrezzato costa tipicamente tra 100 e 250 euro. Il costo è significativamente superiore agli altri parametri chimici per la complessità della tecnica analitica (LC-MS/MS). Non tutti i laboratori sono attrezzati: per acquedotti più piccoli e per analisi private è importante verificare in anticipo che il laboratorio scelto possa eseguire i metodi richiesti.",
    },
    {
      q: 'Posso bere acqua con tracce di PFAS?',
      a: "Per concentrazioni sotto il limite di legge (0,1 µg/L per la somma dei 20 PFAS regolati) l'acqua è considerata conforme. Tuttavia l'obiettivo, soprattutto per categorie sensibili (donne in gravidanza, neonati, bambini), è minimizzare l'esposizione. Se in zona vivi una contaminazione documentata o vuoi azzerare il rischio, un sistema a osmosi inversa per acqua da bere è la soluzione più conservativa.",
    },
  ],
  relatedIds: ['arsenico', 'piombo', 'nitrati', 'cromo'],
  ctaContext: "Per analizzare i PFAS nella tua acqua del rubinetto, fondamentale se vivi in Veneto o in altre zone industriali a rischio, con un laboratorio qualificato e metodi validati LC-MS/MS:",
});

// End of 24 parameter guides.

