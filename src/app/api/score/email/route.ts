import { z } from 'zod';
import { createServiceClient } from '@/lib/supabase/server';
import { resultEmailHtml, sendEmail } from '@/lib/email';

export const runtime = 'nodejs';

const EmailRequestSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(/\/$/, '');

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
      .select('id, email, overall_score, verdict')
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

    const score = Number(existing.overall_score) || 0;
    const verdict = String(existing.verdict || '');
    const resultUrl = `${SITE_URL}/risultato/${parsed.data.id}`;

    await sendEmail({
      to: parsed.data.email,
      subject: `Il tuo punteggio acqua GoccIA: ${score}/99 — ${verdict}`,
      html: resultEmailHtml({ score, verdict, resultUrl }),
    });

    return new Response(null, { status: 204 });
  } catch (err) {
    console.error('[api/score/email] unhandled', err instanceof Error ? err.message : 'unknown');
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
