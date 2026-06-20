import { z } from 'zod';
import { createServiceClient } from '@/lib/supabase/server';
import { sendEmail } from '@/lib/email';
import { EMAIL_TEMPLATES } from '@/lib/email-templates';
import { hashIp, getClientIp } from '@/lib/hash';

export const runtime = 'nodejs';

const SubscribeSchema = z.object({
  email: z.string().email(),
  consent: z.boolean(),
  source: z.string().max(40).optional(),
});

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(/\/$/, '');

export async function POST(req: Request): Promise<Response> {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: 'invalid_input' }, { status: 400 });
    }

    const parsed = SubscribeSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: 'invalid_input', details: parsed.error.flatten() }, { status: 400 });
    }
    if (!parsed.data.consent) {
      return Response.json({ error: 'consent_required' }, { status: 400 });
    }

    // basic rate limit per IP
    const ipHash = hashIp(getClientIp(req.headers));
    const supabase = createServiceClient();

    // upsert (re-subscribe if previously unsubscribed)
    const { data: existing } = await supabase
      .from('goccia_newsletter')
      .select('email, unsubscribe_token, status')
      .eq('email', parsed.data.email)
      .maybeSingle();

    let token: string;
    if (existing) {
      token = existing.unsubscribe_token as string;
      if (existing.status !== 'active') {
        await supabase
          .from('goccia_newsletter')
          .update({ status: 'active', consent: true, subscribed_at: new Date().toISOString() })
          .eq('email', parsed.data.email);
      }
    } else {
      const { data: inserted, error: insErr } = await supabase
        .from('goccia_newsletter')
        .insert({
          email: parsed.data.email,
          consent: true,
          status: 'active',
          source: parsed.data.source ?? 'unknown',
        })
        .select('unsubscribe_token')
        .single();
      if (insErr || !inserted) {
        console.error('[newsletter] insert failed', insErr?.message, ipHash);
        return Response.json({ error: 'internal' }, { status: 500 });
      }
      token = inserted.unsubscribe_token as string;
    }

    const welcome = EMAIL_TEMPLATES.find((t) => t.id === 'welcome');
    if (welcome) {
      const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${token}`;
      const html = welcome.htmlBody.replace(/\{EMAIL\}/g, encodeURIComponent(parsed.data.email)).replace(/https:\/\/goccia\.org\/unsubscribe\?email=[^\s"'<]+/g, unsubscribeUrl);
      await sendEmail({
        to: parsed.data.email,
        subject: welcome.subject,
        html,
      });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] unhandled', err instanceof Error ? err.message : 'unknown');
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
