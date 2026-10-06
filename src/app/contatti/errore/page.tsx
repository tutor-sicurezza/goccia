import type { Metadata } from 'next';
import Link from 'next/link';
import { pageTitle } from '@/lib/seo';

// Esito negativo del modulo contatti: noindex, fuori dalla sitemap.
export const metadata: Metadata = {
  title: pageTitle('Messaggio non inviato'),
  robots: { index: false, follow: false },
};

export default function ContattiErrorePage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold leading-tight">
        <span className="text-gradient">Messaggio non inviato</span>
      </h1>
      <p className="mt-6 text-lg text-slate-300">
        Il messaggio <strong>non</strong> è stato recapitato. Le cause possibili sono un campo
        obbligatorio mancante o non valido (nome, email, messaggio, consenso privacy), un invio
        troppo rapido bloccato dal filtro anti-spam oppure un problema temporaneo del servizio di
        invio. Riprova tra qualche minuto.
      </p>
      <p className="mt-4 text-slate-300">
        In alternativa scrivi a{' '}
        <a href="mailto:privacy@goccia.org" className="underline decoration-sky-400 underline-offset-4 hover:text-sky-300">
          privacy@goccia.org
        </a>
        .
      </p>
      <p className="mt-8">
        <Link href="/contatti" className="text-sky-300 underline-offset-4 hover:underline">
          Torna al modulo
        </Link>
      </p>
    </main>
  );
}
