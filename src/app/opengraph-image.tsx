import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GoccIA — Il punteggio della tua acqua del rubinetto';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(at 20% 20%, #4C1D95 0%, transparent 50%), radial-gradient(at 80% 80%, #0C4A6E 0%, transparent 50%), #020617',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background:
                'linear-gradient(135deg, #8B5CF6 0%, #0EA5E9 50%, #10B981 100%)',
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 700 }}>GoccIA</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              background:
                'linear-gradient(90deg, #c4b5fd 0%, #7dd3fc 50%, #6ee7b7 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'flex',
            }}
          >
            Quanto è buona la tua acqua?
          </div>
          <div style={{ fontSize: 36, color: '#cbd5e1', display: 'flex' }}>
            Punteggio 1–99 dal tuo referto. Gratis, anonimo, in italiano.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 24,
            color: '#94a3b8',
          }}
        >
          <div style={{ display: 'flex' }}>goccia.org</div>
          <div style={{ display: 'flex' }}>D.Lgs. 18/2023 · WHO · EFSA</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
