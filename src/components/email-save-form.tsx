'use client';

import { useState } from 'react';

interface EmailSaveFormProps {
  submissionId: string;
}

export function EmailSaveForm({ submissionId }: EmailSaveFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>(
    'idle',
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg('Inserisci un indirizzo email valido.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/score/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: submissionId, email }),
      });
      if (res.status === 204 || res.ok) {
        setStatus('ok');
        return;
      }
      setStatus('error');
      setErrorMsg('Non è stato possibile salvare. Riprova fra qualche istante.');
    } catch {
      setStatus('error');
      setErrorMsg('Errore di rete. Riprova.');
    }
  }

  if (status === 'ok') {
    return (
      <div className="glass p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            <CheckIcon />
          </div>
          <div>
            <p className="text-sm font-medium text-white">
              Risultato salvato
            </p>
            <p className="text-xs text-slate-400">
              Abbiamo associato il risultato a {email}.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-5">
      <label
        htmlFor="save-email"
        className="font-display text-base font-semibold text-white"
      >
        Salva il risultato via email
      </label>
      <p className="mt-1 text-xs text-slate-400">
        Solo se vuoi conservare il risultato. Non lo useremo per altro.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input
          id="save-email"
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
          {status === 'loading' ? 'Invio…' : 'Salva risultato'}
        </button>
      </div>
      {errorMsg ? (
        <p className="mt-3 text-xs text-rose-200" role="alert">
          {errorMsg}
        </p>
      ) : null}
    </form>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m5 12 5 5L20 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
