import type { Metadata } from 'next';
import Link from 'next/link';
import { HydrationCalculator } from '@/components/hydration-calculator';
import { LeadCTA } from '@/components/lead-cta';
import JsonLd, {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from '@/components/json-ld';

const URL = 'https://goccia.org/idratazione-quanto-bere';

export const metadata: Metadata = {
  title: "Quanta acqua bere al giorno? Calcolatore in base a peso e attività",
  description:
    "Calcolatore del fabbisogno idrico quotidiano in litri, secondo le linee guida EFSA/SINU. Comprende attività fisica, clima e gravidanza. Stima costo annuo.",
  alternates: { canonical: URL },
};

const FAQS = [
  {
    q: "I famosi '2 litri al giorno' sono un dato valido?",
    a: "È una semplificazione utile ma imprecisa. Le linee guida EFSA indicano circa 2,0 L/giorno per le donne adulte e 2,5 L/giorno per gli uomini come adeguata assunzione totale (acqua + alimenti). Il fabbisogno reale varia con peso, attività, temperatura, dieta, condizioni cliniche.",
  },
  {
    q: 'Posso considerare anche tè, caffè e zuppe?',
    a: "Sì, contribuiscono al bilancio idrico, anche se acqua semplice resta la migliore fonte. Per il calcolatore considera il valore come 'acqua netta' da assumere come bevanda principale.",
  },
  {
    q: "L'acqua del rubinetto è valida quanto la minerale per idratarsi?",
    a: "Per la pura funzione di idratazione, sì. L'acqua del rubinetto in Italia è controllata e potabile. La scelta tra rubinetto e minerale dipende da gusto, costi, sostenibilità, eventuali parametri di interesse (sodio per dieta iposodica, etc.).",
  },
  {
    q: 'Esiste un limite massimo oltre il quale bere troppa acqua fa male?',
    a: "Sì. Berne eccessivamente e in tempi brevi può portare a iponatremia (diluizione del sodio nel sangue), pericolosa. Per una persona sana in condizioni normali, mantenersi su 2-4 L/giorno ben distribuiti è sicuro. In caso di dubbi rivolgiti a un medico.",
  },
  {
    q: 'Posso fidarmi della stima del calcolatore?',
    a: "È una stima educativa basata su parametri standard EFSA/SINU. Non sostituisce una valutazione individuale di medico o nutrizionista, soprattutto in caso di patologie renali, cardiache o gravidanza.",
  },
];

export default function HydrationPage() {
  return (
    <main className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: "Quanta acqua bere al giorno? Calcolatore",
          description:
            "Calcolatore del fabbisogno idrico quotidiano in base a peso, attività fisica e clima.",
          url: URL,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Quanta acqua bere', url: URL },
        ])}
      />
      <JsonLd data={faqJsonLd(FAQS)} />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Calcolatore</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Quanta acqua bere al giorno?</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Inserisci peso, attività fisica e clima per ottenere una stima del
          tuo fabbisogno idrico quotidiano e il costo annuale dell'acqua —
          rubinetto vs minerale. Stima basata sulle linee guida EFSA/SINU per
          adulti sani.
        </p>
      </header>

      <HydrationCalculator />

      <article className="prose-invert mt-12 space-y-8">
        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Da dove vengono questi numeri
          </h2>
          <p className="mt-3 text-slate-300">
            Il calcolo utilizza il fattore di 30-45 ml di acqua per chilo di peso
            corporeo a seconda dell'intensità di attività fisica, in linea con i
            valori di riferimento di <strong>EFSA</strong> (European Food Safety
            Authority) e <strong>SINU</strong> (Società Italiana di Nutrizione
            Umana). Gli aggiustamenti per clima caldo (+500 ml) e gravidanza/allattamento
            (+300 ml) seguono le stesse fonti.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            Acqua del rubinetto, minerale o filtrata?
          </h2>
          <p className="mt-3 text-slate-300">
            Per la pura funzione di idratazione, qualsiasi acqua potabile è
            equivalente. La differenza la fanno gusto, costi, impatto
            ambientale e — in alcuni casi — parametri specifici come sodio,
            durezza o nitrati. Se vuoi capire quanto è buona la tua acqua del
            rubinetto,{' '}
            <Link
              href="/"
              className="font-semibold text-sky-300 underline-offset-2 hover:underline"
            >
              calcola il punteggio della tua acqua con GoccIA
            </Link>{' '}
            in 30 secondi.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-slate-100">
            FAQ — Idratazione e qualità dell'acqua
          </h2>
          <dl className="mt-5 space-y-5">
            {FAQS.map((f, i) => (
              <div key={i} className="glass rounded-2xl p-5">
                <dt className="font-display text-base font-semibold text-slate-100">{f.q}</dt>
                <dd className="mt-2 text-sm text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </article>

      <LeadCTA
        variant="completa"
        context="Per scoprire la composizione esatta dell'acqua che bevi ogni giorno — sodio, nitrati, microbiologia, metalli — con un'analisi in un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
