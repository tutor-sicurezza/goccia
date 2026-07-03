// @vitest-environment node
import { beforeEach, describe, expect, it } from 'vitest';
import {
  HISTORY_STORAGE_KEY,
  clearHistory,
  loadHistory,
  removeAnalysis,
  saveAnalysis,
  updateLabel,
  type StoredAnalysis,
} from './water-history';

// Simula localStorage in ambiente node.
class MemoryStorage {
  private store = new Map<string, string>();
  getItem(k: string) {
    return this.store.get(k) ?? null;
  }
  setItem(k: string, v: string) {
    this.store.set(k, v);
  }
  removeItem(k: string) {
    this.store.delete(k);
  }
}

function entry(id: string, analyzedAt: string, overall = 80): StoredAnalysis {
  return {
    submissionId: id,
    savedAt: analyzedAt,
    analyzedAt,
    overall,
    health: 85,
    aesthetic: 75,
    pipe: 70,
    verdictLabel: 'Buona',
    verdictTone: 'emerald',
    parameters: [
      { id: 'ph', value: 7.5, status: 'ideal' },
      { id: 'nitrati', value: 12, status: 'acceptable' },
    ],
  };
}

describe('water-history — storage locale', () => {
  beforeEach(() => {
    (globalThis as Record<string, unknown>).window = {
      localStorage: new MemoryStorage() as unknown as Storage,
    };
  });

  it('parte vuoto e salva una voce', () => {
    expect(loadHistory()).toEqual([]);
    const isNew = saveAnalysis(entry('a', '2026-01-10T10:00:00Z'));
    expect(isNew).toBe(true);
    expect(loadHistory()).toHaveLength(1);
  });

  it('deduplica per submissionId preservando l\'etichetta utente', () => {
    saveAnalysis(entry('a', '2026-01-10T10:00:00Z', 70));
    updateLabel('a', 'Casa — cucina');
    const isNew = saveAnalysis(entry('a', '2026-01-10T10:00:00Z', 75));
    expect(isNew).toBe(false);
    const [only] = loadHistory();
    expect(only.overall).toBe(75);
    expect(only.label).toBe('Casa — cucina');
  });

  it('ordina per data di analisi crescente', () => {
    saveAnalysis(entry('b', '2026-03-01T10:00:00Z'));
    saveAnalysis(entry('a', '2026-01-01T10:00:00Z'));
    saveAnalysis(entry('c', '2026-02-01T10:00:00Z'));
    expect(loadHistory().map((e) => e.submissionId)).toEqual(['a', 'c', 'b']);
  });

  it('rimuove singole voci e svuota tutto', () => {
    saveAnalysis(entry('a', '2026-01-01T10:00:00Z'));
    saveAnalysis(entry('b', '2026-02-01T10:00:00Z'));
    removeAnalysis('a');
    expect(loadHistory().map((e) => e.submissionId)).toEqual(['b']);
    clearHistory();
    expect(loadHistory()).toEqual([]);
  });

  it('ignora dati corrotti nello storage', () => {
    const w = (globalThis as unknown as { window: { localStorage: MemoryStorage } }).window;
    w.localStorage.setItem(HISTORY_STORAGE_KEY, '{non-json');
    expect(loadHistory()).toEqual([]);
    w.localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify([{ foo: 1 }, entry('ok', '2026-01-01T10:00:00Z')]));
    expect(loadHistory().map((e) => e.submissionId)).toEqual(['ok']);
  });
});
