import { REGIONAL_COMPARISONS, type RegionalComparison } from './regional-comparisons';
import { EXTRA_COMPARISONS } from './comparisons-extra';

export const ALL_COMPARISONS: RegionalComparison[] = [
  ...REGIONAL_COMPARISONS,
  ...EXTRA_COMPARISONS,
];

const INDEX = new Map(ALL_COMPARISONS.map((c) => [c.slug, c]));

export function findComparison(slug: string): RegionalComparison | undefined {
  return INDEX.get(slug);
}
