import { SECTOR_GUIDES, type SectorGuide } from './sector-guides';
import { EXTRA_SECTORS } from './sectors-extra';

export const ALL_SECTORS: SectorGuide[] = [...SECTOR_GUIDES, ...EXTRA_SECTORS];

const INDEX = new Map(ALL_SECTORS.map((g) => [g.slug, g]));

export function findSector(slug: string): SectorGuide | undefined {
  return INDEX.get(slug);
}
