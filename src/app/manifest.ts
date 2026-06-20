import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GoccIA — Punteggio acqua del rubinetto',
    short_name: 'GoccIA',
    description:
      "Punteggio 1–99 della tua acqua del rubinetto, calcolato dai valori del referto. Gratuito, anonimo, in italiano.",
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#8B5CF6',
    lang: 'it',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icon-maskable.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'maskable' },
    ],
    categories: ['utilities', 'health'],
  };
}
