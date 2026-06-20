import type { ParameterConfig } from './types';

export const PARAMETER_CONFIGS: ParameterConfig[] = [
  { id: 'ph', aliases: ['ph', 'p.h.', 'concentrazione ioni idrogeno'], unit: 'unità pH', legal: { min: 6.5, max: 9.5 }, ideal: { min: 7.0, max: 8.0 }, weights: { health: 0, aesthetic: 0.3, pipe: 0.7 } },
  { id: 'durezza_totale', aliases: ['durezza totale', 'durezza', 'hardness'], unit: '°F', legal: { min: 15, max: 50 }, ideal: { min: 15, max: 30 }, weights: { health: 0, aesthetic: 0.4, pipe: 0.6 } },
  { id: 'conducibilita', aliases: ['conducibilita', 'conducibilità', 'conducibilita elettrica', 'conduttivita'], unit: 'µS/cm', legal: { max: 2500 }, ideal: { max: 800 }, weights: { health: 0, aesthetic: 0.4, pipe: 0.6 } },
  { id: 'cloro_residuo', aliases: ['cloro residuo', 'cloro residuo libero', 'cloro libero'], unit: 'mg/L', legal: { max: 0.2 }, ideal: { max: 0.05 }, weights: { health: 0, aesthetic: 1.0, pipe: 0 } },
  { id: 'nitrati', aliases: ['nitrati', 'no3'], unit: 'mg/L', legal: { max: 50 }, ideal: { max: 10 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'nitriti', aliases: ['nitriti', 'no2'], unit: 'mg/L', legal: { max: 0.5 }, ideal: { max: 0.1 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'ammonio', aliases: ['ammonio', 'ammoniaca', 'nh4'], unit: 'mg/L', legal: { max: 0.5 }, ideal: { max: 0.05 }, weights: { health: 0.5, aesthetic: 0.5, pipe: 0 } },
  { id: 'sodio', aliases: ['sodio', 'na'], unit: 'mg/L', legal: { max: 200 }, ideal: { max: 50 }, weights: { health: 0.7, aesthetic: 0.3, pipe: 0 } },
  { id: 'solfati', aliases: ['solfati', 'so4'], unit: 'mg/L', legal: { max: 250 }, ideal: { max: 100 }, weights: { health: 0, aesthetic: 0.7, pipe: 0.3 } },
  { id: 'cloruri', aliases: ['cloruri', 'cl'], unit: 'mg/L', legal: { max: 250 }, ideal: { max: 50 }, weights: { health: 0, aesthetic: 0.5, pipe: 0.5 } },
  { id: 'fluoruri', aliases: ['fluoruri', 'fluoro', 'f'], unit: 'mg/L', legal: { max: 1.5 }, ideal: { max: 0.7 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'ferro', aliases: ['ferro', 'fe'], unit: 'µg/L', legal: { max: 200 }, ideal: { max: 50 }, weights: { health: 0, aesthetic: 0.7, pipe: 0.3 } },
  { id: 'manganese', aliases: ['manganese', 'mn'], unit: 'µg/L', legal: { max: 50 }, ideal: { max: 20 }, weights: { health: 0, aesthetic: 0.8, pipe: 0.2 } },
  { id: 'piombo', aliases: ['piombo', 'pb', 'lead'], unit: 'µg/L', legal: { max: 10 }, ideal: { max: 1 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'arsenico', aliases: ['arsenico', 'as', 'arsenic'], unit: 'µg/L', legal: { max: 10 }, ideal: { max: 1 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'rame', aliases: ['rame', 'cu', 'copper'], unit: 'mg/L', legal: { max: 2.0 }, ideal: { max: 0.5 }, weights: { health: 0.5, aesthetic: 0, pipe: 0.5 } },
  { id: 'cadmio', aliases: ['cadmio', 'cd'], unit: 'µg/L', legal: { max: 5 }, ideal: { max: 1 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'nichel', aliases: ['nichel', 'nickel', 'ni'], unit: 'µg/L', legal: { max: 20 }, ideal: { max: 5 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'cromo', aliases: ['cromo', 'cromo totale', 'cr'], unit: 'µg/L', legal: { max: 25 }, ideal: { max: 5 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
  { id: 'torbidita', aliases: ['torbidita', 'torbidità', 'turbidity'], unit: 'NTU', legal: { max: 4 }, ideal: { max: 0.5 }, weights: { health: 0.2, aesthetic: 0.8, pipe: 0 } },
  { id: 'e_coli', aliases: ['e.coli', 'e coli', 'escherichia coli', 'ecoli'], unit: 'UFC/100mL', legal: { max: 0 }, ideal: { max: 0 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 }, microbiological: true },
  { id: 'coliformi_totali', aliases: ['coliformi totali', 'coliformi'], unit: 'UFC/100mL', legal: { max: 0 }, ideal: { max: 0 }, weights: { health: 0.7, aesthetic: 0.3, pipe: 0 }, microbiological: true },
  { id: 'enterococchi', aliases: ['enterococchi', 'enterococchi intestinali'], unit: 'UFC/100mL', legal: { max: 0 }, ideal: { max: 0 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 }, microbiological: true },
  { id: 'pfas_totali', aliases: ['pfas totali', 'pfas', 'somma pfas', 'pfas sigma 20'], unit: 'µg/L', legal: { max: 0.1 }, ideal: { max: 0.01 }, weights: { health: 1.0, aesthetic: 0, pipe: 0 } },
];

function normalize(input: string): string {
  return input.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}

const LOOKUP = new Map<string, ParameterConfig>();
for (const cfg of PARAMETER_CONFIGS) {
  LOOKUP.set(normalize(cfg.id), cfg);
  for (const alias of cfg.aliases) LOOKUP.set(normalize(alias), cfg);
}

export function findParameterConfig(parameterId: string, parameterName?: string): ParameterConfig | null {
  if (parameterId) { const byId = LOOKUP.get(normalize(parameterId)); if (byId) return byId; }
  if (parameterName) { const byName = LOOKUP.get(normalize(parameterName)); if (byName) return byName; }
  return null;
}
