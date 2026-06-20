import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd, {
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from '@/components/json-ld';
import { LeadCTA } from '@/components/lead-cta';

export const metadata: Metadata = {
  title: "Come leggere il referto di un'analisi dell'acqua | GoccIA",
  description:
    "Guida passo-passo per interpretare un'analisi dell'acqua: unità di misura, parametri chiave, conformità al D.Lgs. 18/2023 e cosa fare in caso di valori fuori soglia.",
  alternates: {
    canonical: 'https://goccia.org/come-leggere-referto-acqua',
  },
};

const FAQ = [
  {
    q: "Cosa significa 'valore di parametro' su un referto?",
    a: "Il valore di parametro è il limite fissato dalla normativa (in Italia D.Lgs. 18/2023, in Europa Direttiva 2020/2184) entro cui un parametro è considerato conforme. Superarlo significa che l'acqua non rispetta uno specifico requisito di qualità e deve essere segnalato all'autorità competente.",
  },
  {
    q: "Cosa vuol dire 'non rilevabile' (n.r.) o '< LOQ'?",
    a: "Indicano che il parametro è presente in concentrazioni inferiori al limite di quantificazione del metodo strumentale usato (LOQ). Non significa zero assoluto: significa che lo strumento non riesce a misurare in modo affidabile sotto quella soglia. Per i contaminanti tossici è di norma una condizione favorevole.",
  },
  {
    q: 'Perché i valori cambiano tra prelievi diversi?',
    a: "L'acqua è una matrice viva: la composizione cambia per fattori stagionali (piogge, temperatura), tecnici (cambio fonte, manutenzioni, ristagno nelle tubazioni), e di campionamento (rubinetto fatto scorrere o no, contenitore, tempo trascorso prima dell'analisi). Differenze del 10–20% tra prelievi a distanza di mesi sono normali.",
  },
  {
    q: 'Un referto vale anche per le altre case del condominio?',
    a: "Un referto si riferisce al punto di prelievo indicato sul verbale di campionamento. Nelle parti comuni a monte del contatore i risultati sono ragionevolmente estendibili. Sulle colonne private interne ogni appartamento può avere valori diversi, soprattutto per metalli rilasciati da tubazioni, raccordi e rubinetti.",
  },
  {
    q: 'I kit fai-da-te sono validi a fini legali?',
    a: "No. Per usi ufficiali (compravendita, controversia con il gestore, certificazione condominiale) serve un rapporto di prova emesso da un laboratorio con metodi validati e firmato dal responsabile tecnico. I kit domestici e le strisce reattive sono utili come screening orientativo ma non come prova analitica.",
  },
];

export default function ComeLeggereRefertoAcquaPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline:
            "Come leggere il referto di un'analisi dell'acqua: guida completa",
          description:
            "Guida pratica per interpretare un rapporto di prova dell'acqua: parti del documento, unità di misura, conformità ai valori di parametro e azioni in caso di superamento.",
          url: 'https://goccia.org/come-leggere-referto-acqua',
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          {
            name: 'Come leggere il referto',
            url: 'https://goccia.org/come-leggere-referto-acqua',
          },
        ])}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Guida pratica
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">
            Come leggere il referto di un'analisi dell'acqua: guida completa
          </span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Hai in mano un rapporto di prova dell'acqua e una pagina piena di
          sigle, unità di misura e valori? Questa guida ti accompagna voce per
          voce: cosa significano le sezioni del documento, come confrontare i
          numeri col limite di legge e cosa fare se trovi qualcosa fuori
          soglia. Tutto in italiano, senza gergo inutile.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Le parti di un referto di analisi
        </h2>
        <p className="mt-3 text-slate-300">
          Un rapporto di prova ben fatto contiene sempre questi elementi:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Dati identificativi del committente</strong>: nome,
            indirizzo, eventuale codice cliente.
          </li>
          <li>
            <strong>Punto di prelievo</strong>: indirizzo preciso e, idealmente,
            descrizione del rubinetto (es. cucina, prima dell'ammorbidimento).
          </li>
          <li>
            <strong>Data e ora di campionamento</strong>: dato cruciale per
            l'interpretazione microbiologica.
          </li>
          <li>
            <strong>Codice univoco del campione</strong>: serve a tracciare il
            campione lungo tutta la catena analitica.
          </li>
          <li>
            <strong>Laboratorio che ha effettuato l'analisi</strong>: ragione
            sociale, sede, eventuali abilitazioni tecniche.
          </li>
          <li>
            <strong>Lista dei parametri analizzati</strong> con valore
            riscontrato e unità di misura.
          </li>
          <li>
            <strong>Metodo analitico utilizzato</strong> per ogni parametro
            (metodi validati conformi a norme tecniche di riferimento).
          </li>
          <li>
            <strong>Limite di legge di confronto</strong> tipicamente dal
            D.Lgs. 18/2023.
          </li>
          <li>
            <strong>Giudizio di conformità</strong> per parametro o complessivo.
          </li>
          <li>
            <strong>Firma del responsabile tecnico</strong> del laboratorio.
          </li>
        </ul>
      </section>

      <section className="glass mb-10 overflow-x-auto rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">
          Cosa significano le unità di misura più comuni
        </h2>
        <table className="mt-5 w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-white/10 text-slate-300">
            <tr>
              <th scope="col" className="px-3 py-3 font-semibold">
                Unità
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Cosa misura
              </th>
              <th scope="col" className="px-3 py-3 font-semibold">
                Note
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-slate-200">
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                mg/L
              </th>
              <td className="px-3 py-3">Milligrammi per litro</td>
              <td className="px-3 py-3">
                Usata per nitrati, sodio, cloruri, durezza
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                µg/L
              </th>
              <td className="px-3 py-3">Microgrammi per litro</td>
              <td className="px-3 py-3">
                Usata per metalli in tracce; 1 mg/L = 1000 µg/L
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                ng/L
              </th>
              <td className="px-3 py-3">Nanogrammi per litro</td>
              <td className="px-3 py-3">
                Tipica per PFAS; 1 µg/L = 1000 ng/L
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                NTU
              </th>
              <td className="px-3 py-3">Unità nefelometriche di torbidità</td>
              <td className="px-3 py-3">
                Al rubinetto dovrebbe essere &lt; 1 NTU
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                UFC/100 mL
              </th>
              <td className="px-3 py-3">Unità formanti colonia</td>
              <td className="px-3 py-3">
                Microbiologia: E. coli, coliformi, enterococchi
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                °F
              </th>
              <td className="px-3 py-3">Gradi francesi</td>
              <td className="px-3 py-3">
                Durezza totale; 1 °F = 10 mg/L CaCO₃
              </td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                µS/cm
              </th>
              <td className="px-3 py-3">Microsiemens per centimetro</td>
              <td className="px-3 py-3">Conducibilità elettrica</td>
            </tr>
            <tr>
              <th scope="row" className="px-3 py-3 font-medium text-slate-100">
                unità pH
              </th>
              <td className="px-3 py-3">Scala logaritmica 0–14</td>
              <td className="px-3 py-3">
                7 è neutro; range potabile 6,5–9,5
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Come interpretare un singolo valore
        </h2>
        <p className="mt-3 text-slate-300">
          Per ogni parametro confronta il valore riscontrato col limite di
          legge:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Conforme</strong>: il valore è uguale o inferiore al
            limite. È il caso atteso per la stragrande maggioranza dei
            parametri sull'acqua del rubinetto italiana.
          </li>
          <li>
            <strong>Non conforme</strong>: il valore supera il limite. Va
            segnalato al gestore idrico e, se persistente, all'ATS.
          </li>
          <li>
            <strong>In deroga</strong>: per alcune sostanze (storicamente
            arsenico, fluoro, nitrati in certe aree) può essere autorizzata
            una deroga temporanea con concentrazioni superiori al limite, a
            condizioni rigorose stabilite dalle autorità. Sul referto è di
            norma indicato.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          I parametri più importanti da controllare
        </h2>
        <p className="mt-3 text-slate-300">
          Se hai poco tempo, guarda prima questi:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Microbiologia</strong>: Escherichia coli e coliformi
            totali devono essere <em>assenti in 100 mL</em>. Sono il primo
            indicatore di sicurezza sanitaria.
          </li>
          <li>
            <strong>Salute</strong>: piombo, arsenico e nitrati sono i
            contaminanti chimici prioritari nelle acque italiane.
          </li>
          <li>
            <strong>PFAS</strong>: rilevanti in alcune aree (Veneto,
            Lombardia, Piemonte). Espressi tipicamente in ng/L.
          </li>
          <li>
            <strong>Estetica</strong>: cloro residuo e ferro spiegano gusti e
            colori percepiti al rubinetto.
          </li>
          <li>
            <strong>Impianti</strong>: durezza e pH non incidono
            direttamente sulla salute ma sull'usura di caldaie e
            elettrodomestici.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Cosa fare se trovo un parametro fuori soglia
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Non andare nel panico</strong>: una singola non
            conformità su un parametro estetico (es. ferro) non è un'emergenza
            sanitaria.
          </li>
          <li>
            <strong>Contatta il gestore idrico</strong>: ha l'obbligo di
            verificare e intervenire. Se la non conformità è a valle del
            contatore (impianto privato) l'azione spetta al proprietario.
          </li>
          <li>
            <strong>Ripeti il prelievo</strong> a distanza di alcuni giorni,
            preferibilmente in condizioni standard: rubinetto fatto scorrere
            qualche minuto, contenitore neutro.
          </li>
          <li>
            <strong>Conferma con un laboratorio qualificato</strong> se il
            primo dato proviene da un kit casalingo: la differenza tra una
            stima e un rapporto di prova è enorme.
          </li>
          <li>
            <strong>Valuta sistemi di trattamento</strong> solo dopo la
            conferma: la soluzione dipende dal contaminante (carbone attivo,
            osmosi inversa, scambio ionico hanno usi diversi).
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold">
          Differenza tra kit casalingo, strisce reattive e laboratorio
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
          <li>
            <strong>Strisce reattive</strong>: risposta qualitativa o
            semiquantitativa per pH, durezza, cloro, talvolta nitrati. Utili
            per uno screening rapido; non sostituiscono un'analisi.
          </li>
          <li>
            <strong>Kit casalinghi</strong>: includono spesso reagenti per
            pochi parametri chimico-fisici. Migliori delle strisce ma
            comunque non riportabili a un rapporto di prova ufficiale.
          </li>
          <li>
            <strong>Laboratorio qualificato</strong>: utilizza strumenti come
            ICP-MS, cromatografia ionica e GC-MS con metodi validati. È
            l'unico modo per ottenere valori difendibili per metalli in
            tracce, PFAS e parametri microbiologici certificati.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <p className="text-slate-300">
          Se vuoi una stima rapida basata sui valori del referto, puoi{' '}
          <Link
            href="/"
            className="text-sky-300 underline decoration-sky-500/40 underline-offset-4 hover:text-sky-200"
          >
            calcolare il punteggio della tua acqua con GoccIA
          </Link>{' '}
          in trenta secondi: ti basta inserire i parametri che hai a
          disposizione e ottieni un numero da 1 a 99 con verdetto su salute,
          estetica e impianti.
        </p>
        <LeadCTA
          variant="rapporto-prova"
          tone="prominent"
          context="Per ottenere un rapporto di prova ufficiale, con metodi validati conformi alle norme tecniche e supporto interpretativo dedicato al tuo specifico referto:"
        />
      </section>

      <section className="glass rounded-2xl p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold">Domande frequenti</h2>
        <dl className="mt-5 space-y-5">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-semibold text-slate-100">{item.q}</dt>
              <dd className="mt-1 text-slate-300">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
