import type { Metadata } from 'next';

/**
 * Immagine Open Graph di default (generata da src/app/opengraph-image.tsx).
 * Va ripetuta esplicitamente nelle pagine che definiscono un proprio
 * `openGraph`, perché in Next quell'oggetto sostituisce quello ereditato
 * e l'immagine del layout andrebbe persa.
 */
export const DEFAULT_OG_IMAGES = [
  {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'GoccIA — Il punteggio della tua acqua del rubinetto',
  },
];

const BRAND_SUFFIX = ' | GoccIA';
const MAX_TITLE_LENGTH = 60;

/**
 * Titolo di pagina con il suffisso "| GoccIA" del template solo se il
 * risultato resta entro 60 caratteri e il titolo non contiene già il brand;
 * altrimenti il titolo è usato così com'è.
 */
export function pageTitle(title: string): Metadata['title'] {
  const fits = title.length + BRAND_SUFFIX.length <= MAX_TITLE_LENGTH;
  return fits && !title.includes('GoccIA') ? title : { absolute: title };
}
