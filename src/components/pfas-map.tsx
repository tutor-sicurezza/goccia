import { PFAS_HOTSPOTS, type PFASSeverity } from '@/lib/pfas-hotspots';

const TONE: Record<PFASSeverity, { stroke: string; fill: string; label: string }> = {
  critica: { stroke: '#fb7185', fill: 'rgba(244,63,94,0.55)', label: 'Critica' },
  alta: { stroke: '#fb923c', fill: 'rgba(251,146,60,0.55)', label: 'Alta' },
  media: { stroke: '#facc15', fill: 'rgba(250,204,21,0.55)', label: 'Media' },
  monitorata: { stroke: '#7dd3fc', fill: 'rgba(125,211,252,0.5)', label: 'Monitorata' },
};

// Simple Mercator-ish projection for Italy bounding box.
// Italy roughly: lat 36-47, lon 6-19. SVG viewport 0-500 x 0-600.
function project(lat: number, lon: number): { x: number; y: number } {
  const x = ((lon - 6) / (19 - 6)) * 500;
  const y = ((47 - lat) / (47 - 36)) * 600;
  return { x, y };
}

export function PFASMap() {
  return (
    <figure className="glass relative rounded-3xl p-4 sm:p-6">
      <figcaption className="mb-4 text-xs uppercase tracking-wide text-slate-400">
        Hotspot PFAS documentati pubblicamente in Italia
      </figcaption>

      <div className="relative mx-auto max-w-[500px]">
        <svg
          viewBox="0 0 500 600"
          className="h-auto w-full"
          role="img"
          aria-label="Mappa schematica degli hotspot PFAS in Italia"
        >
          {/* Simplified Italy boundary (stylized — not cartographically precise) */}
          <defs>
            <linearGradient id="italy-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#0f172a" />
              <stop offset="1" stopColor="#1e293b" />
            </linearGradient>
          </defs>
          <path
            d="M180 50 L 220 60 L 260 80 L 290 100 L 310 130 L 320 170 L 310 210 L 280 235 L 260 265 L 280 290 L 320 320 L 340 360 L 350 410 L 330 445 L 310 470 L 300 505 L 280 525 L 240 530 L 200 510 L 175 475 L 165 430 L 175 390 L 195 360 L 200 330 L 190 295 L 170 270 L 145 245 L 130 210 L 135 170 L 150 135 L 160 100 L 175 70 Z"
            fill="url(#italy-grad)"
            stroke="rgba(148,163,184,0.35)"
            strokeWidth="1.5"
          />
          {/* Sardinia */}
          <ellipse cx="90" cy="370" rx="22" ry="38" fill="url(#italy-grad)" stroke="rgba(148,163,184,0.35)" strokeWidth="1.5" />
          {/* Sicily */}
          <ellipse cx="240" cy="555" rx="48" ry="22" fill="url(#italy-grad)" stroke="rgba(148,163,184,0.35)" strokeWidth="1.5" />

          {PFAS_HOTSPOTS.map((h) => {
            const { x, y } = project(h.approxLatitude, h.approxLongitude);
            const tone = TONE[h.severity];
            return (
              <g key={h.id}>
                <circle cx={x} cy={y} r="18" fill={tone.fill} stroke={tone.stroke} strokeWidth="1.5" opacity="0.6">
                  <animate attributeName="r" values="14;22;14" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx={x} cy={y} r="6" fill={tone.stroke} stroke="#020617" strokeWidth="1.5" />
                <title>{h.name} ({tone.label})</title>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        {(Object.keys(TONE) as PFASSeverity[]).map((k) => (
          <div key={k} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full border"
              style={{ background: TONE[k].fill, borderColor: TONE[k].stroke }}
              aria-hidden
            />
            <span className="text-slate-300">{TONE[k].label}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Mappa schematica a scopo divulgativo: i punti sono posizionati in coordinate approssimative.
        Le severità sono indicative e basate su documentazione pubblica (fonti ARPA regionali, ISS,
        Ministero Salute, sentenze pubbliche). I valori puntuali variano nel tempo e per impianto.
      </p>
    </figure>
  );
}
