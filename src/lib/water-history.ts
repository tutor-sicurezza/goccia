// Storico personale delle analisi: salvataggio SOLO in localStorage del
// browser dell'utente. Nessun dato lascia il dispositivo: niente account,
// niente cookie, niente invio al server. L'utente può cancellare tutto
// in qualsiasi momento da /storico.

export type HistoryStatus = 'ideal' | 'acceptable' | 'over_limit' | 'unknown';
export type HistoryTone = 'green' | 'emerald' | 'amber' | 'orange' | 'red';

export interface StoredParameter {
  id: string;
  value: number | null;
  status: HistoryStatus;
}

export interface StoredAnalysis {
  submissionId: string;
  /** Quando l'utente ha salvato la voce nello storico (ISO). */
  savedAt: string;
  /** Quando è stato calcolato il punteggio (created_at della submission, ISO). */
  analyzedAt: string;
  overall: number;
  health: number | null;
  aesthetic: number | null;
  pipe: number | null;
  verdictLabel: string;
  verdictTone: HistoryTone;
  parameters: StoredParameter[];
  /** Etichetta libera dell'utente, es. "Casa — cucina" o "Ufficio". */
  label?: string;
}

export const HISTORY_STORAGE_KEY = 'goccia:storico:v1';
export const HISTORY_MAX_ENTRIES = 100;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function sortByAnalyzedAt(entries: StoredAnalysis[]): StoredAnalysis[] {
  return [...entries].sort(
    (a, b) => new Date(a.analyzedAt).getTime() - new Date(b.analyzedAt).getTime(),
  );
}

export function loadHistory(): StoredAnalysis[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    const valid = parsed.filter(
      (e): e is StoredAnalysis =>
        typeof e === 'object' &&
        e !== null &&
        typeof (e as StoredAnalysis).submissionId === 'string' &&
        typeof (e as StoredAnalysis).overall === 'number' &&
        typeof (e as StoredAnalysis).analyzedAt === 'string' &&
        Array.isArray((e as StoredAnalysis).parameters),
    );
    return sortByAnalyzedAt(valid);
  } catch {
    return [];
  }
}

function persist(entries: StoredAnalysis[]): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(
      HISTORY_STORAGE_KEY,
      JSON.stringify(sortByAnalyzedAt(entries).slice(-HISTORY_MAX_ENTRIES)),
    );
  } catch {
    // Quota piena o storage disabilitato: lo storico è best-effort.
  }
}

/** Salva (o aggiorna) una voce; dedupe per submissionId. Ritorna true se era nuova. */
export function saveAnalysis(entry: StoredAnalysis): boolean {
  const current = loadHistory();
  const existingIdx = current.findIndex((e) => e.submissionId === entry.submissionId);
  if (existingIdx >= 0) {
    // Non sovrascrivere l'etichetta scelta dall'utente.
    const label = current[existingIdx].label;
    current[existingIdx] = { ...entry, label: label ?? entry.label };
    persist(current);
    return false;
  }
  persist([...current, entry]);
  return true;
}

export function removeAnalysis(submissionId: string): void {
  persist(loadHistory().filter((e) => e.submissionId !== submissionId));
}

export function updateLabel(submissionId: string, label: string): void {
  const current = loadHistory();
  const idx = current.findIndex((e) => e.submissionId === submissionId);
  if (idx < 0) return;
  current[idx] = { ...current[idx], label: label.trim() || undefined };
  persist(current);
}

export function clearHistory(): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(HISTORY_STORAGE_KEY);
  } catch {
    // ignore
  }
}
