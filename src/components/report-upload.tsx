'use client';

import { useRef, useState } from 'react';

export interface ParsedParameter {
  parameter_id: string;
  numeric_value: number | null;
  unit?: string;
  compliant?: boolean | null;
}

export interface ParsedReport {
  parameters: ParsedParameter[];
  laboratory_name?: string | null;
  sample_date?: string | null;
  cap?: string | null;
  notes?: string | null;
}

interface ReportUploadProps {
  onParsed: (report: ParsedReport) => void;
  disabled?: boolean;
}

type Status = 'idle' | 'parsing' | 'ok' | 'error';

export function ReportUpload({ onParsed, disabled }: ReportUploadProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    setErrorMsg(null);
    setFileName(file.name);
    setStatus('parsing');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/parse-report', {
        method: 'POST',
        body: fd,
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const detail =
          data?.detail ??
          (res.status === 429
            ? 'Troppi caricamenti. Riprova tra un\'ora.'
            : res.status === 413
              ? 'File troppo grande (max 8 MB).'
              : res.status === 415
                ? 'Formato non supportato (solo PDF/JPG/PNG/WebP).'
                : res.status === 503
                  ? 'Servizio OCR temporaneamente non disponibile.'
                  : 'Non sono riuscito a leggere il referto. Prova a inserire i valori manualmente.');
        setErrorMsg(detail);
        setStatus('error');
        return;
      }
      const data = (await res.json()) as ParsedReport;
      onParsed(data);
      setStatus('ok');
    } catch {
      setErrorMsg('Errore di rete durante il caricamento.');
      setStatus('error');
    }
  }

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      className={
        'glass relative rounded-2xl border-2 border-dashed p-5 transition ' +
        (dragOver ? 'border-violet-400/60 bg-violet-400/[0.06]' : 'border-white/15')
      }
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf,image/jpeg,image/png,image/webp"
        className="sr-only"
        onChange={onPick}
        disabled={disabled || status === 'parsing'}
      />
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-sky-500/30 sm:flex">
            <svg className="h-5 w-5 text-sky-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 16V4m0 0-4 4m4-4 4 4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-slate-100 sm:text-base">
              Carica il referto: lo leggiamo per te
            </p>
            <p className="mt-0.5 text-xs text-slate-400">
              PDF o foto (JPG/PNG/WebP) · max 8 MB · il file non viene salvato.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled || status === 'parsing'}
          className="rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-50"
        >
          {status === 'parsing' ? 'Lettura in corso…' : 'Carica referto'}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 min-h-[1.2rem] text-xs">
        {status === 'parsing' && fileName ? (
          <p className="text-slate-300">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-sky-400" />{' '}
            Sto leggendo <strong>{fileName}</strong>… Questo richiede in media 10-30 secondi.
          </p>
        ) : null}
        {status === 'ok' && fileName ? (
          <p className="text-emerald-200">
            Referto letto: i valori sono stati pre-compilati qui sotto. Verificali e modificali se necessario.
          </p>
        ) : null}
        {status === 'error' && errorMsg ? (
          <p className="text-rose-200" role="alert">
            {errorMsg}
          </p>
        ) : null}
      </div>
    </div>
  );
}
