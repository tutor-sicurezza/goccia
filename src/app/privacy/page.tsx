import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy — GoccIA',
  description:
    "Cosa salva GoccIA, cosa non salva, e come trattiamo i dati delle submission. Servizio anonimo, conforme al GDPR, hosting in UE.",
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
          <span className="text-gradient">Privacy di GoccIA</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          GoccIA è uno strumento gratuito e anonimo. Questa pagina spiega in
          chiaro cosa salviamo, cosa non salviamo e come puoi esercitare i tuoi
          diritti.
        </p>
      </header>

      <article className="glass space-y-8 rounded-2xl p-6 sm:p-8">
        <section>
          <h2 className="font-display text-2xl font-semibold">
            Cosa salviamo
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>
              I <strong>valori dei parametri</strong> che inserisci, in forma
              anonima.
            </li>
            <li>
              Il <strong>verdetto</strong> calcolato dal motore (fascia e
              punteggio).
            </li>
            <li>
              Opzionalmente: il <strong>CAP</strong> e il{' '}
              <strong>laboratorio</strong> di provenienza del referto, se ce li
              indichi.
            </li>
            <li>
              Un <strong>hash salato del tuo indirizzo IP</strong>, usato solo
              per prevenire abusi e spam. Non risale all'IP in chiaro.
            </li>
          </ul>
          <p className="mt-3 text-slate-300">
            Non salviamo <strong>nome</strong>, <strong>cognome</strong>,
            documento d'identità o cookie di profilazione.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Email — solo se la lasci tu
          </h2>
          <p className="mt-3 text-slate-300">
            Puoi lasciare la tua email <strong>dopo</strong> aver visto il
            risultato, e solo se vuoi riceverlo o conservarlo. Non viene mai
            usata per marketing senza il tuo consenso esplicito e separato.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Nessun training di terze parti
          </h2>
          <p className="mt-3 text-slate-300">
            I tuoi dati non vengono ceduti a terzi per addestrare modelli di
            intelligenza artificiale. Il motore di GoccIA non è un modello AI:
            è una funzione deterministica.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Diritti GDPR
          </h2>
          <p className="mt-3 text-slate-300">
            Puoi richiedere in qualsiasi momento la cancellazione dei dati
            associati alla tua submission scrivendo a{' '}
            <a
              href="mailto:privacy@goccia.org"
              className="text-gradient font-semibold underline-offset-2 hover:underline"
            >
              privacy@goccia.org
            </a>
            . Hai inoltre diritto di accesso, rettifica, limitazione e
            portabilità ai sensi del Regolamento UE 2016/679.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold">
            Hosting e infrastruttura
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
            <li>
              <strong>Hosting applicativo</strong>: Vercel, regione UE
              (Francoforte, <code>fra1</code>).
            </li>
            <li>
              <strong>Database</strong>: Supabase, istanza nell'Unione Europea.
            </li>
            <li>
              Nessun trasferimento dei dati al di fuori dell'UE.
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
