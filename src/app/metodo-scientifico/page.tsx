import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  organizationJsonLd,
} from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Metodo scientifico GoccIA — algoritmo, fonti e limiti',
  description:
    "Come funziona davvero il punteggio GoccIA: motore deterministico open source, fonti normative (D.Lgs. 18/2023, WHO, EFSA, ISS), limiti dichiarati e conflitto di interessi.",
  alternates: { canonical: 'https://goccia.org/metodo-scientifico' },
};

const PAGE_URL = 'https://goccia.org/metodo-scientifico';

export default function MetodoScientificoPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: 'Il metodo dietro al punteggio GoccIA',
          description:
            "Metodologia, fonti normative e limiti del motore di scoring GoccIA: open source, deterministico, basato su D.Lgs. 18/2023 e linee guida WHO/EFSA.",
          url: PAGE_URL,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Metodo scientifico', url: PAGE_URL },
        ])}
      />
      <JsonLd data={organizationJsonLd()} />

      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <article>
        <header className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
            Trasparenza scientifica
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            <span className="text-gradient">Il metodo dietro al punteggio GoccIA</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            GoccIA è uno strumento gratuito che assegna un punteggio da{' '}
            <strong>1 a 99</strong> all'acqua del rubinetto. Crediamo che, se un
            numero entra nella conversazione pubblica sulla qualità dell'acqua,
            il modo in cui quel numero viene calcolato debba essere{' '}
            <strong>ispezionabile riga per riga</strong>. Nessuna intelligenza
            artificiale interviene nel calcolo: il motore è deterministico, il
            codice è pubblico, le fonti normative sono dichiarate. Questa pagina
            esiste per renderlo verificabile a chiunque, anche fuori dalla
            community tecnica.
          </p>
        </header>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Open source per definizione
          </h2>
          <p className="mt-4 text-slate-300">
            Il motore di scoring di GoccIA è rilasciato come{' '}
            <a
              href="https://github.com/tutor-sicurezza/goccia"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
            >
              codice e algoritmo open source su GitHub (MIT)
            </a>
            . Chiunque, dal ricercatore al giornalista al cittadino curioso, può
            scaricarlo, leggerlo, riprodurre i calcoli sui propri dati,
            confrontarli con quelli del sito e — se trova un errore o una
            scelta metodologica discutibile — contestarlo pubblicamente
            attraverso una issue o una pull request. Non esiste un «modello
            segreto» dietro al numero: il modello <em>è</em> il repository.
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Determinismo del calcolo
          </h2>
          <p className="mt-4 text-slate-300">
            Il punteggio GoccIA è prodotto da una funzione matematica chiusa, in
            quattro passi successivi. Lo stesso input restituisce sempre lo
            stesso output: non c'è stima probabilistica, non c'è machine
            learning, non c'è elemento casuale.
          </p>
          <ol className="mt-6 space-y-5 text-slate-200">
            <li>
              <h3 className="font-semibold text-slate-100">
                1. Riconoscimento dei parametri
              </h3>
              <p className="mt-1 text-slate-300">
                Le voci del referto vengono normalizzate (minuscole, accenti
                rimossi, alias risolti) e mappate sui parametri canonici. Voci
                non riconosciute vengono escluse dal calcolo, mai indovinate.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-slate-100">
                2. Confronto con limiti di legge e range ideali
              </h3>
              <p className="mt-1 text-slate-300">
                Ogni valore viene confrontato con il limite del{' '}
                <strong>D.Lgs. 18/2023</strong> e con il range ideale derivato
                dalle linee guida <strong>WHO</strong> e dai pareri{' '}
                <strong>EFSA</strong>. Da questo confronto nasce, per ciascun
                parametro, un contributo numerico.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-slate-100">
                3. Aggregazione nei tre subscore
              </h3>
              <p className="mt-1 text-slate-300">
                I contributi vengono aggregati in tre sotto-punteggi:{' '}
                <strong>Salute (50%)</strong>, <strong>Estetica (25%)</strong> e{' '}
                <strong>Impianti (25%)</strong>. La salute pesa di più perché è
                la dimensione meno negoziabile dal punto di vista normativo.
              </p>
            </li>
            <li>
              <h3 className="font-semibold text-slate-100">
                4. Punteggio finale 1–99
              </h3>
              <p className="mt-1 text-slate-300">
                I tre subscore vengono combinati nella media pesata e mappati
                sull'intervallo <strong>1–99</strong>. Il verdetto a fasce
                (Eccellente / Buona / Discreta / Da migliorare / Critica) è
                un'etichetta derivata dal numero, non un giudizio aggiuntivo.
              </p>
            </li>
          </ol>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Le fonti normative</h2>
          <p className="mt-4 text-slate-300">
            I limiti e i range usati dal motore non sono opinione di Labservice.
            Provengono da fonti istituzionali e scientifiche di riferimento, che
            chiunque può consultare:
          </p>
          <ul className="mt-6 space-y-4 text-slate-200">
            <li>
              <a
                href="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-02-23;18"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                D.Lgs. 18/2023
              </a>{' '}
              — recepimento italiano della direttiva UE 2020/2184 sulla qualità
              delle acque destinate al consumo umano. Definisce i valori di
              parametro vincolanti in Italia. Fonte: Normattiva.
            </li>
            <li>
              <a
                href="https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32020L2184"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                Direttiva UE 2020/2184
              </a>{' '}
              — testo europeo originario su cui poggia il decreto italiano,
              consultabile in italiano su EUR-Lex.
            </li>
            <li>
              <a
                href="https://www.who.int/publications/i/item/9789241549950"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                WHO — Guidelines for Drinking-water Quality (4ª edizione e
                addendum)
              </a>{' '}
              — riferimento internazionale per i valori-guida sanitari su
              decine di contaminanti delle acque potabili.
            </li>
            <li>
              <a
                href="https://www.efsa.europa.eu/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                EFSA — Scientific opinions on water contaminants
              </a>{' '}
              — autorità europea per la sicurezza alimentare, fonte degli
              orientamenti su nitrati, metalli, sottoprodotti di disinfezione.
            </li>
            <li>
              <a
                href="https://www.iss.it/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
              >
                Istituto Superiore di Sanità (ISS)
              </a>{' '}
              — riferimento istituzionale italiano per i pareri tecnico-sanitari
              sulle acque destinate al consumo umano.
            </li>
          </ul>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Limiti del metodo (e cosa GoccIA NON è)
          </h2>
          <p className="mt-4 text-slate-300">
            Un metodo onesto dichiara cosa non sa fare. GoccIA è uno strumento
            di orientamento, non un sostituto di una valutazione professionale.
            In particolare:
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-200 marker:text-sky-400">
            <li>
              <strong>Non sostituisce un rapporto di prova</strong> firmato da un
              laboratorio. Il punteggio è un'elaborazione sui valori che gli
              fornisci, non un'analisi indipendente.
            </li>
            <li>
              <strong>Non è uno strumento diagnostico medico.</strong> Non dice
              se quell'acqua «fa male» a una persona specifica, non sostituisce
              il parere del medico curante o dell'autorità sanitaria locale.
            </li>
            <li>
              <strong>Lavora con l'informazione disponibile.</strong> Se inserisci
              tre parametri su trenta, l'algoritmo calcola comunque un
              punteggio, ma con base parziale: lo segnaliamo esplicitamente nel
              risultato.
            </li>
            <li>
              <strong>I range ideali sono consigliati, non obbligatori.</strong>{' '}
              Un'acqua entro i limiti del D.Lgs. 18/2023 è legalmente potabile
              anche se non rientra nei range «ideali» derivati da WHO/EFSA: in
              quel caso il subscore Estetica o Impianti scende, ma l'acqua
              resta conforme.
            </li>
            <li>
              <strong>Non considera la variabilità temporale.</strong> pH e
              durezza oscillano stagionalmente, episodi puntuali (lavori in
              rete, eventi meteorologici) possono alterare il quadro: un
              singolo referto è una fotografia, non un film.
            </li>
          </ul>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Il laboratorio dietro al progetto
          </h2>
          <p className="mt-4 text-slate-300">
            GoccIA è sviluppato e mantenuto da <strong>Labservice S.r.l.</strong>,
            laboratorio italiano qualificato con metodi validati conformi a
            norme tecniche e processi tecnici documentati. Sede legale ad
            Anguillara Sabazia (RM). Verso il pubblico Labservice opera con il
            marchio{' '}
            <a
              href="https://123acqua.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
            >
              123Acqua — analisi acqua del rubinetto
            </a>
            . La qualifica del laboratorio non viene ereditata dal punteggio
            GoccIA: il punteggio resta un'elaborazione sui valori che inserisci,
            non un rapporto di prova firmato.
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Conflitto di interessi dichiarato
          </h2>
          <p className="mt-4 text-slate-300">
            Labservice è l'organizzazione che ha sviluppato GoccIA e, in
            parallelo, gestisce con il marchio 123Acqua un servizio commerciale
            di analisi dell'acqua. Dichiararlo è un dovere di trasparenza. Per
            limitare il rischio di parzialità abbiamo scelto tre vincoli
            espliciti:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-200 marker:text-sky-400">
            <li>
              il tool è e resta <strong>gratuito</strong>, senza login, senza
              cookie di profilazione, senza pubblicità;
            </li>
            <li>
              il motore di scoring è <strong>pubblico e ispezionabile</strong>:
              chiunque può verificare che non favorisca o penalizzi
              artificialmente certi tipi di acqua;
            </li>
            <li>
              la sostenibilità economica del progetto deriva{' '}
              <strong>indirettamente</strong> dal fatto che 123Acqua è un
              laboratorio commerciale, non dal punteggio assegnato alla tua
              acqua.
            </li>
          </ul>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">
            Come contestare un calcolo
          </h2>
          <p className="mt-4 text-slate-300">
            Se ritieni che il punteggio assegnato alla tua acqua sia errato, o
            che la metodologia descritta sopra abbia un difetto, il canale
            corretto è pubblico: apri una issue sul repository ufficiale
            indicando i parametri inseriti, l'output ottenuto e il
            comportamento atteso.
          </p>
          <p className="mt-4">
            <a
              href="https://github.com/tutor-sicurezza/goccia/issues"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
            >
              github.com/tutor-sicurezza/goccia/issues
            </a>
          </p>
          <p className="mt-4 text-slate-300">
            Le segnalazioni vengono triagiate pubblicamente: ogni modifica
            all'algoritmo lascia una traccia versionata nel repository.
          </p>
        </section>

        <section className="glass mb-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold">Citaci correttamente</h2>
          <p className="mt-4 text-slate-300">
            Se sei un giornalista, un ricercatore o un blogger e vuoi citare
            GoccIA, ti chiediamo di farlo in modo verificabile, così che chi
            legge possa risalire alla fonte e al metodo.
          </p>
          <h3 className="mt-6 font-semibold text-slate-100">Citazione testuale</h3>
          <p className="mt-2 text-slate-300">
            «GoccIA — Punteggio 1–99 dell'acqua del rubinetto, di Labservice
            S.r.l., disponibile su https://goccia.org, MIT License.»
          </p>
          <h3 className="mt-6 font-semibold text-slate-100">BibTeX</h3>
          <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-950/70 p-4 text-sm text-slate-200">
{`@misc{goccia2026,
  title        = {GoccIA — Punteggio 1–99 dell'acqua del rubinetto},
  author       = {{Labservice S.r.l.}},
  year         = {2026},
  howpublished = {\\url{https://goccia.org}},
  note         = {Motore di scoring open source, MIT License}
}`}
          </pre>
        </section>

        <nav className="mt-12 flex flex-wrap gap-4 text-sm text-slate-300">
          <Link
            href="/come-funziona"
            className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
          >
            Vedi anche: come funziona l'algoritmo passo-passo
          </Link>
          <Link
            href="/chi-siamo"
            className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300"
          >
            Chi siamo
          </Link>
        </nav>
      </article>
    </main>
  );
}
