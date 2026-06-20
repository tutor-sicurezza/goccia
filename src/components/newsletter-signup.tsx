'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  source?: string;
  variant?: 'inline' | 'box';
}

export function NewsletterSignup({ source = 'unknown', variant = 'box' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Inserisci un indirizzo email valido.');
      return;
    }
    if (!consent) {
      setErrorMsg('Devi acconsentire al trattamento dell\'email per iscriverti.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, source }),
      });
      if (res.ok) {
        setStatus('ok');
        return;
      }
      const data = await res.json().catch(() => ({}));
      setStatus('error');
      setErrorMsg(data?.error === 'consent_required' ? 'Consenso obbligatorio.' : 'Iscrizione non riuscita. Riprova fra qualche istante.');
    } catch {
      setStatus('error');
      setErrorMsg('Errore di rete. Riprova.');
    }
  }

  if (status === 'ok') {
    return (
      <div className={variant === 'box' ? 'glass rounded-2xl p-5' : 'rounded-xl border border-emerald-400/30 bg-emerald-400/[0.06] p-4'}>
        <p className="font-display text-base font-semibold text-emerald-200">
          Iscrizione confermata
        </p>
        <p className="mt-1 text-sm text-emerald-100">
          Controlla la posta: ti abbiamo mandato l'email di benvenuto. Se non la vedi,
          controlla in promozioni o spam.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={variant === 'box' ? 'glass rounded-2xl p-5 sm:p-6' : ''}
      aria-labelledby="newsletter-title"
    >
      <p id="newsletter-title" className="font-display text-base font-semibold text-slate-100 sm:text-lg">
        Newsletter GoccIA — 5 settimane per capire la tua acqua
      </p>
      <p className="mt-1 text-sm text-slate-400">
        1 email di benvenuto + 5 email a cadenza settimanale. Niente spam, disiscrizione in 1 click.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@esempio.it"
          className="flex-1 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-violet-400/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {status === 'loading' ? 'Invio…' : 'Iscriviti'}
        </button>
      </div>
      <label className="mt-3 flex items-start gap-2 text-xs text-slate-300">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-black/40 text-violet-500 focus:ring-violet-400"
        />
        <span>
          Acconsento al trattamento della mia email per ricevere la newsletter (base giuridica art. 6(1)(a) GDPR).
          Posso disiscrivermi in qualsiasi momento dal link in fondo a ogni email. Vedi{' '}
          <a href="/privacy" className="font-semibold text-sky-300 underline-offset-2 hover:underline">informativa</a>.
        </span>
      </label>
      {errorMsg ? (
        <p className="mt-3 text-xs text-rose-200" role="alert">
          {errorMsg}
        </p>
      ) : null}
    </form>
  );
}
