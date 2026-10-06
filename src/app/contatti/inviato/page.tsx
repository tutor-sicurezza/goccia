import type { Metadata } from 'next';
import Link from 'next/link';
import { pageTitle } from '@/lib/seo';

// Esito positivo del modulo contatti: noindex, fuori dalla sitemap.
export const metadata: Metadata = {
  title: pageTitle('Messaggio inviato'),
  robots: { index: false, follow: false },
};

export default function ContattiInviatoPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold leading-tight">
        <span className="text-gradient">Messaggio inviato</span>
      </h1>
      <p className="mt-6 text-lg text-slate-300">
        Grazie: abbiamo ricevuto la tua richiesta e ti risponderemo all&apos;indirizzo email che hai indicato.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-sky-300 underline-offset-4 hover:underline">
          Torna alla home
        </Link>
      </p>
    </main>
  );
}
