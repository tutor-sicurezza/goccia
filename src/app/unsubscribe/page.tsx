import type { Metadata } from 'next';
import { createServiceClient } from '@/lib/supabase/server';

export const metadata: Metadata = {
  title: 'Disiscrizione newsletter — GoccIA',
  description: 'Cancella la tua iscrizione dalla newsletter di GoccIA.',
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function UnsubscribePage({ searchParams }: PageProps) {
  const { token } = await searchParams;

  let outcome: 'success' | 'invalid' | 'missing' = 'missing';
  if (token && typeof token === 'string' && token.length >= 16) {
    try {
      const supabase = createServiceClient();
      const { data, error } = await supabase
        .from('goccia_newsletter')
        .update({ status: 'unsubscribed' })
        .eq('unsubscribe_token', token)
        .select('email')
        .maybeSingle();
      if (error || !data) outcome = 'invalid';
      else outcome = 'success';
    } catch {
      outcome = 'invalid';
    }
  }

  return (
    <main className="relative mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="glass rounded-3xl p-8 text-center sm:p-12">
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">
            {outcome === 'success'
              ? 'Disiscrizione completata'
              : outcome === 'invalid'
                ? 'Link non valido o già usato'
                : 'Manca il token'}
          </span>
        </h1>
        <p className="mt-4 text-slate-300">
          {outcome === 'success'
            ? 'Non riceverai più email dalla newsletter di GoccIA. I tuoi dati personali (la sola email) verranno mantenuti come "disiscritto" per evitare di reiscriverti per errore. Puoi richiedere la cancellazione completa scrivendo a privacy@goccia.org.'
            : outcome === 'invalid'
              ? 'Il link di disiscrizione che hai usato non è valido o è stato già usato. Se ricevi ancora email dalla newsletter scrivici a privacy@goccia.org.'
              : 'Apri il link di disiscrizione che trovi in fondo a qualsiasi email della newsletter GoccIA.'}
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-100 hover:border-violet-400/40"
        >
          Torna su GoccIA
        </a>
      </div>
    </main>
  );
}
