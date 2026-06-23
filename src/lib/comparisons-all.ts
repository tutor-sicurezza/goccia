import { REGIONAL_COMPARISONS, type RegionalComparison } from './regional-comparisons';
import { EXTRA_COMPARISONS } from './comparisons-extra';
import { COMP_PROVINCE } from './comparisons-provincia';

export const ALL_COMPARISONS: RegionalComparison[] = [
  ...REGIONAL_COMPARISONS,
  ...EXTRA_COMPARISONS,
  ...COMP_PROVINCE,
];

const INDEX = new Map(ALL_COMPARISONS.map((c) => [c.slug, c]));

export function findComparison(slug: string): RegionalComparison | undefined {
  return INDEX.get(slug);
}
