import { createServiceClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

interface ResendWebhookEvent {
  type:
    | 'email.bounced'
    | 'email.complained'
    | 'email.delivered'
    | 'email.opened'
    | 'email.clicked'
    | string;
  data: {
    email_id?: string;
    to?: string[];
    from?: string;
    subject?: string;
    created_at?: string;
    bounce?: { type?: string; subType?: string };
    complaint?: { type?: string };
  };
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json()) as ResendWebhookEvent;
    if (!body || typeof body.type !== 'string') {
      return Response.json({ error: 'invalid_payload' }, { status: 400 });
    }

    const supabase = createServiceClient();
    const emails = body.data?.to ?? [];

    if (body.type === 'email.bounced' || body.type === 'email.complained') {
      for (const e of emails) {
        if (!e) continue;
        try {
          await supabase
            .from('goccia_newsletter')
            .update({ status: 'unsubscribed' })
            .eq('email', e.toLowerCase());
        } catch (err) {
          console.error('[resend webhook] db error', err instanceof Error ? err.message : 'unknown');
        }
      }
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error('[resend webhook]', err instanceof Error ? err.message : 'unknown');
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
