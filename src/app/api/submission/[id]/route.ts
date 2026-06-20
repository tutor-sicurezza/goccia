import { createServiceClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
): Promise<Response> {
  try {
    const { id } = await params;
    if (!id) {
      return Response.json({ error: 'invalid_input' }, { status: 400 });
    }

    const supabase = createServiceClient();
    const { data, error } = await supabase
      .from('goccia_submissions')
      .select(
        'id, created_at, overall_score, health_score, aesthetic_score, pipe_score, matched_count, parameters, verdict',
      )
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('[api/submission] select failed', error.message);
      return Response.json({ error: 'internal' }, { status: 500 });
    }
    if (!data) {
      return Response.json({ error: 'not_found' }, { status: 404 });
    }

    return Response.json(data);
  } catch (err) {
    console.error('[api/submission] unhandled', err instanceof Error ? err.message : 'unknown');
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
