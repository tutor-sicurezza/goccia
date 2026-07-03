'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  saveAnalysis,
  type HistoryStatus,
  type HistoryTone,
  type StoredAnalysis,
} from '@/lib/water-history';

interface SaveToHistoryProps {
  submissionId: string;
  analyzedAt: string;
  overall: number;
  health: number | null;
  aesthetic: number | null;
  pipe: number | null;
  verdictLabel: string;
  verdictTone: HistoryTone;
  parameters: { id: string; value: number | null; status: HistoryStatus }[];
}

export function SaveToHistory(props: SaveToHistoryProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const entry: StoredAnalysis = {
      submissionId: props.submissionId,
      savedAt: new Date().toISOString(),
      analyzedAt: props.analyzedAt,
      overall: props.overall,
      health: props.health,
      aesthetic: props.aesthetic,
      pipe: props.pipe,
      verdictLabel: props.verdictLabel,
      verdictTone: props.verdictTone,
      parameters: props.parameters,
    };
    saveAnalysis(entry);
    setSaved(true);
    // Le props sono immutabili per la pagina risultato: salviamo una volta al mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.submissionId]);

  return (
    <div className="glass p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-base font-semibold text-white">
            Nel tuo storico personale
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-slate-400">
            {saved
              ? 'Questa analisi è stata salvata nello storico di questo browser: potrai confrontarla con le prossime e vedere il trend nel tempo.'
              : 'Questa analisi viene salvata nello storico di questo browser.'}{' '}
            Resta solo sul tuo dispositivo: niente account, nessun invio a server.
          </p>
        </div>
        <span aria-hidden="true" className="mt-1 text-lg">
          {saved ? '✓' : ''}
        </span>
      </div>
      <Link
        href="/storico"
        className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
      >
        Apri il tuo storico
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
