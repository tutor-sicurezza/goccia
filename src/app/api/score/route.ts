import { computeAquaScore, scoreVerdict } from '@aquascore/index';
import type { ParameterInput } from '@aquascore/index';
import { createServiceClient } from '@/lib/supabase/server';
import { getClientIp, hashIp } from '@/lib/hash';
import { checkRateLimit } from '@/lib/rate-limit';
import { ScoreRequestSchema } from '@/lib/validation';

export const runtime = 'nodejs';

export async function POST(req: Request): Promise<Response> {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: 'invalid_input', details: 'invalid JSON' }, { status: 400 });
    }

    const parsed = ScoreRequestSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { error: 'invalid_input', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const ip = getClientIp(req.headers);
    const ip_hash = hashIp(ip);

    const supabase = createServiceClient();

    const rl = await checkRateLimit(ip_hash, supabase);
    if (!rl.ok) {
      return Response.json({ error: 'rate_limited' }, { status: 429 });
    }

    const inputs: ParameterInput[] = parsed.data.parameters.map((p) => ({
      parameter_id: p.parameter_id,
      numeric_value: p.numeric_value,
      compliant: p.compliant ?? null,
    }));

    const result = computeAquaScore(inputs);
    const verdict = scoreVerdict(result.overall).label;

    const userAgent = req.headers.get('user-agent') ?? null;

    const insertRow: Record<string, unknown> = {
      overall_score: result.overall,
      health_score: result.health,
      aesthetic_score: result.aesthetic,
      pipe_score: result.pipe,
      matched_count: result.matchedCount,
      parameters: result.parameterScores,
      verdict,
      cap: parsed.data.cap ?? null,
      source_lab: parsed.data.source_lab ?? null,
      user_agent: userAgent,
      ip_hash,
    };
    if (parsed.data.email) {
      insertRow.email = parsed.data.email;
    }

    const { data: row, error } = await supabase
      .from('goccia_submissions')
      .insert(insertRow)
      .select('id')
      .single();

    if (error || !row) {
      console.error('[api/score] insert failed', error?.message);
      return Response.json({ error: 'internal' }, { status: 500 });
    }

    return Response.json({ id: row.id, result, verdict });
  } catch (err) {
    console.error('[api/score] unhandled', err instanceof Error ? err.message : 'unknown');
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
