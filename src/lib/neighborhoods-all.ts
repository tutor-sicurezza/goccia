import { NEIGHBORHOOD_GUIDES, type NeighborhoodGuide } from './neighborhood-guides';
import { NEIGHBORHOODS_BARI } from './neighborhoods-bari';
import { NEIGHBORHOODS_BOLOGNA } from './neighborhoods-bologna';
import { NEIGHBORHOODS_FIRENZE } from './neighborhoods-firenze';
import { NEIGHBORHOODS_GENOVA } from './neighborhoods-genova';

export const ALL_NEIGHBORHOODS: NeighborhoodGuide[] = [
  ...NEIGHBORHOOD_GUIDES,
  ...NEIGHBORHOODS_BARI,
  ...NEIGHBORHOODS_BOLOGNA,
  ...NEIGHBORHOODS_FIRENZE,
  ...NEIGHBORHOODS_GENOVA,
];

const INDEX = new Map(ALL_NEIGHBORHOODS.map((g) => [g.slug, g]));

export function findNeighborhood(slug: string): NeighborhoodGuide | undefined {
  return INDEX.get(slug);
}

export function neighborhoodsByCity(citySlug: string): NeighborhoodGuide[] {
  return ALL_NEIGHBORHOODS.filter((g) => g.citySlug === citySlug);
}
