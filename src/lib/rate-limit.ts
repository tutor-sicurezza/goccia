import type { SupabaseClient } from '@supabase/supabase-js';

const HOURLY_LIMIT = 20;

export async function checkRateLimit(
  ipHash: string,
  supabase: SupabaseClient,
): Promise<{ ok: boolean; remaining: number }> {
  const sinceIso = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from('goccia_submissions')
    .select('id', { count: 'exact', head: true })
    .eq('ip_hash', ipHash)
    .gt('created_at', sinceIso);

  if (error) {
    // Fail-open with no remaining info we can compute; treat as ok to avoid blocking on transient errors.
    return { ok: true, remaining: HOURLY_LIMIT };
  }

  const used = count ?? 0;
  return { ok: used < HOURLY_LIMIT, remaining: Math.max(0, HOURLY_LIMIT - used) };
}
