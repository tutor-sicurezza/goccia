import { z } from 'zod';
import { createServiceClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

const EmailRequestSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
});

export async function POST(req: Request): Promise<Response> {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: 'invalid_input', details: 'invalid JSON' }, { status: 400 });
    }

    const parsed = EmailRequestSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        { error: 'invalid_input', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const supabase = createServiceClient();

    const { data: existing, error: selErr } = await supabase
      .from('goccia_submissions')
      .select('id, email')
      .eq('id', parsed.data.id)
      .maybeSingle();

    if (selErr) {
      console.error('[api/score/email] select failed', selErr.message);
      return Response.json({ error: 'internal' }, { status: 500 });
    }
    if (!existing) {
      return Response.json({ error: 'not_found' }, { status: 404 });
    }
    if (existing.email) {
      return new Response(null, { status: 204 });
    }

    const { error: updErr } = await supabase
      .from('goccia_submissions')
      .update({ email: parsed.data.email })
      .eq('id', parsed.data.id)
      .is('email', null);

    if (updErr) {
      console.error('[api/score/email] update failed', updErr.message);
      return Response.json({ error: 'internal' }, { status: 500 });
    }

    return new Response(null, { status: 204 });
  } catch (err) {
    console.error('[api/score/email] unhandled', err instanceof Error ? err.message : 'unknown');
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
