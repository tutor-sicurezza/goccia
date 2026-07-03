import { describe, expect, it } from 'vitest';
import { CITY_GUIDES } from './city-guides';
import { OFFICIAL_SOURCES, getOfficialSource } from './official-sources';

describe('OFFICIAL_SOURCES — integrità dei dati', () => {
  it('non contiene citySlug duplicati', () => {
    const slugs = OFFICIAL_SOURCES.map((s) => s.citySlug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('ogni citySlug corrisponde a una città esistente in CITY_GUIDES', () => {
    const known = new Set(CITY_GUIDES.map((g) => g.slug));
    for (const s of OFFICIAL_SOURCES) {
      expect(known.has(s.citySlug), `slug sconosciuto: ${s.citySlug}`).toBe(true);
    }
  });

  it('ogni fonte ha URL https e campi essenziali non vuoti', () => {
    for (const s of OFFICIAL_SOURCES) {
      expect(s.officialUrl, s.citySlug).toMatch(/^https:\/\//);
      expect(s.utility.trim().length, s.citySlug).toBeGreaterThan(3);
      expect(s.note.trim().length, s.citySlug).toBeGreaterThan(20);
      expect(['alta', 'media', 'bassa']).toContain(s.confidence);
      if (s.regionalPortal) {
        expect(s.regionalPortal.url, s.citySlug).toMatch(/^https:\/\//);
        expect(s.regionalPortal.name.trim().length, s.citySlug).toBeGreaterThan(3);
      }
    }
  });

  it('gli URL non contengono spazi né entità HTML', () => {
    for (const s of OFFICIAL_SOURCES) {
      expect(s.officialUrl, s.citySlug).not.toMatch(/[\s]|&amp;/);
    }
  });

  it('getOfficialSource trova le città e ritorna undefined per slug ignoti', () => {
    expect(getOfficialSource('milano')?.utility).toContain('MM');
    expect(getOfficialSource('citta-inesistente')).toBeUndefined();
  });

  it('copre tutte le città con guida', () => {
    expect(OFFICIAL_SOURCES.length).toBe(CITY_GUIDES.length);
  });
});
