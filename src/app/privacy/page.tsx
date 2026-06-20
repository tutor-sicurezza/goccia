import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy — GoccIA',
  description:
    "Informativa privacy ai sensi dell'art. 13 del Regolamento (UE) 2016/679. Cosa salviamo, base giuridica, periodo di conservazione e diritti.",
};

const TITOLARE = {
  ragioneSociale: 'Labservice Analytica S.r.l.',
  sede: '— da confermare —',
  pIva: '— da confermare —',
  email: 'privacy@goccia.org',
};

export default function PrivacyPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">
          Privacy
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
          <span className="text-gradient">Informativa privacy</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) e del
          D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Ultimo aggiornamento: 20 giugno 2026
        </p>
      </header>

      <article className="glass space-y-8 rounded-2xl p-6 sm:p-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">
            1. Titolare del trattamento
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
            <li>Ragione sociale: <strong>{TITOLARE.ragioneSociale}</strong></li>
            <li>Sede legale: {TITOLARE.sede}</li>
            <li>P.IVA: {TITOLARE.pIva}</li>
            <li>
              Contatto privacy:{' '}
              <a href={`mailto:${TITOLARE.email}`} className="text-gradient font-semibold hover:underline">
                {TITOLARE.email}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            2. Dati trattati, finalità e base giuridica
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="border-b border-white/10 text-left text-slate-200">
                <tr>
                  <th className="py-2 pr-4">Dato</th>
                  <th className="py-2 pr-4">Finalità</th>
                  <th className="py-2">Base giuridica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-2 pr-4">Valori dei parametri inseriti</td>
                  <td className="py-2 pr-4">Calcolo del punteggio (servizio richiesto)</td>
                  <td className="py-2">Art. 6(1)(b) — esecuzione del servizio richiesto dall'utente</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">CAP, laboratorio di origine</td>
                  <td className="py-2 pr-4">Benchmark aggregato anonimo</td>
                  <td className="py-2">Art. 6(1)(f) — legittimo interesse (statistiche anonime)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Hash salato dell'indirizzo IP</td>
                  <td className="py-2 pr-4">Anti-abuso e rate limiting</td>
                  <td className="py-2">Art. 6(1)(f) — legittimo interesse (sicurezza del servizio)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">User-Agent</td>
                  <td className="py-2 pr-4">Debug tecnico, prevenzione abusi</td>
                  <td className="py-2">Art. 6(1)(f) — legittimo interesse</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Indirizzo email (facoltativo)</td>
                  <td className="py-2 pr-4">Invio/conservazione del risultato richiesto</td>
                  <td className="py-2">Art. 6(1)(a) — consenso esplicito e separato</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            <strong>Nota</strong>: l'hash dell'IP usa salting con chiave segreta lato server. Non è
            tecnicamente reversibile in IP in chiaro. Resta tuttavia trattato come dato personale
            in via prudenziale (cfr. Considerando 26 GDPR).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            3. Periodo di conservazione
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>
              <strong>Valori dei parametri + verdetto</strong>: conservati a tempo
              indeterminato in forma anonima per alimentare il benchmark pubblico
              aggregato. Cancellazione su richiesta del singolo (vedi punto 6).
            </li>
            <li>
              <strong>Hash IP + User-Agent</strong>: 30 giorni, poi cancellati
              automaticamente.
            </li>
            <li>
              <strong>Email facoltativa</strong>: conservata finché l'utente non
              richiede cancellazione o per il tempo necessario all'invio del
              risultato (max 12 mesi).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            4. Destinatari e subprocessor
          </h2>
          <p className="mt-3 text-slate-300">
            I dati sono trattati esclusivamente all'interno dell'Unione Europea
            dai seguenti responsabili del trattamento:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>
              <strong>Vercel Inc.</strong> (hosting applicativo, regione Francoforte){' '}
              — DPA:{' '}
              <a
                href="https://vercel.com/legal/dpa"
                target="_blank"
                rel="noreferrer"
                className="text-gradient font-semibold hover:underline"
              >
                vercel.com/legal/dpa
              </a>
            </li>
            <li>
              <strong>Supabase Inc.</strong> (database PostgreSQL, regione Francoforte){' '}
              — DPA:{' '}
              <a
                href="https://supabase.com/legal/dpa"
                target="_blank"
                rel="noreferrer"
                className="text-gradient font-semibold hover:underline"
              >
                supabase.com/legal/dpa
              </a>
            </li>
          </ul>
          <p className="mt-3 text-slate-300">
            Nessun trasferimento dati al di fuori dello Spazio Economico Europeo.
            Nessuna cessione a terzi per finalità di marketing o profilazione.
            Nessun dato viene utilizzato per addestrare modelli di intelligenza
            artificiale di terze parti.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            5. Cookie e tecnologie simili
          </h2>
          <p className="mt-3 text-slate-300">
            Questo sito <strong>non utilizza cookie</strong> di alcun tipo, né
            tecnologie equivalenti di tracciamento (pixel, fingerprinting, web
            beacon). Non è presente alcun cookie di profilazione, analytics
            di terze parti o pubblicitario. Dettagli nella{' '}
            <Link href="/cookie-policy" className="text-gradient font-semibold hover:underline">
              cookie policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            6. Diritti dell'interessato
          </h2>
          <p className="mt-3 text-slate-300">
            Ai sensi degli artt. 15–22 GDPR puoi esercitare in qualsiasi momento
            i seguenti diritti scrivendo a{' '}
            <a
              href={`mailto:${TITOLARE.email}`}
              className="text-gradient font-semibold hover:underline"
            >
              {TITOLARE.email}
            </a>
            :
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-300">
            <li>Accesso ai dati (art. 15)</li>
            <li>Rettifica (art. 16)</li>
            <li>Cancellazione / oblio (art. 17)</li>
            <li>Limitazione del trattamento (art. 18)</li>
            <li>Portabilità (art. 20)</li>
            <li>Opposizione al trattamento basato su legittimo interesse (art. 21)</li>
            <li>Revoca del consenso, se prestato (art. 7)</li>
          </ul>
          <p className="mt-3 text-slate-300">
            Hai inoltre diritto di proporre reclamo al{' '}
            <a
              href="https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/4535524"
              target="_blank"
              rel="noreferrer"
              className="text-gradient font-semibold hover:underline"
            >
              Garante per la protezione dei dati personali
            </a>{' '}
            (artt. 77 GDPR e 141 D.Lgs. 196/2003).
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            7. Modifiche all'informativa
          </h2>
          <p className="mt-3 text-slate-300">
            Aggiornamenti significativi vengono riportati in questa pagina
            indicando la data di ultimo aggiornamento. È buona norma rivisitare
            periodicamente questa sezione.
          </p>
        </section>
      </article>
    </main>
  );
}
