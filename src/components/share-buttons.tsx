'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  text: string;
}

export function ShareButtons({ url, title, text }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState(false);

  async function handleShare() {
    setShareError(false);
    if (typeof navigator !== 'undefined' && 'share' in navigator) {
      try {
        await (navigator as Navigator).share({ url, title, text });
        return;
      } catch {
        // user cancelled or unsupported — fall through to copy
      }
    }
    await handleCopy();
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setShareError(true);
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <button
        type="button"
        onClick={handleShare}
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
      >
        <ShareIcon />
        Condividi risultato
      </button>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
        aria-live="polite"
      >
        <LinkIcon />
        {copied ? 'Link copiato' : 'Copia link'}
      </button>
      {shareError ? (
        <p className="text-xs text-rose-200">
          Impossibile copiare il link automaticamente.
        </p>
      ) : null}
    </div>
  );
}

function ShareIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M16 6l-4-4-4 4M12 2v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 14a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1M14 10a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
