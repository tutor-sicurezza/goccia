import { createServiceClient } from '@/lib/supabase/server';
import { sendEmail } from '@/lib/email';
import { EMAIL_TEMPLATES } from '@/lib/email-templates';

export const runtime = 'nodejs';
export const maxDuration = 60;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://goccia.org').replace(/\/$/, '');

const DRIP_SEQUENCE = [
  { id: 'drip-1-parametri', delayDays: 4 },
  { id: 'drip-2-rubinetto-vs-minerale', delayDays: 8 },
  { id: 'drip-3-casi-italia', delayDays: 14 },
  { id: 'drip-4-trattamenti', delayDays: 21 },
  { id: 'drip-5-analisi-laboratorio', delayDays: 30 },
];

interface Subscriber {
  email: string;
  subscribed_at: string;
  unsubscribe_token: string;
  drip_stage: number;
}

async function ensureColumn(supabase: ReturnType<typeof createServiceClient>) {
  // best-effort: ignore failure if column already exists
  try {
    await supabase.rpc('execute_sql' as never, {
      query: 'alter table public.goccia_newsletter add column if not exists drip_stage smallint not null default 0',
    });
  } catch {
    /* ignore */
  }
}

export async function GET(req: Request): Promise<Response> {
  // Cron auth: Vercel cron sends a special header; also allow CRON_SECRET
  const auth = req.headers.get('authorization') ?? '';
  const expected = `Bearer ${process.env.CRON_SECRET ?? ''}`;
  const isVercelCron = req.headers.get('x-vercel-cron') === '1';
  if (!isVercelCron && (!process.env.CRON_SECRET || auth !== expected)) {
    return new Response('forbidden', { status: 403 });
  }

  const supabase = createServiceClient();
  await ensureColumn(supabase);

  let sent = 0;
  let errors = 0;

  for (let stage = 0; stage < DRIP_SEQUENCE.length; stage++) {
    const drip = DRIP_SEQUENCE[stage];
    const target = drip.delayDays;
    const cutoffStart = new Date(Date.now() - target * 86400000).toISOString();
    const cutoffEnd = new Date(Date.now() - (target - 1) * 86400000).toISOString();

    const { data: subs, error } = await supabase
      .from('goccia_newsletter')
      .select('email, subscribed_at, unsubscribe_token, drip_stage')
      .eq('status', 'active')
      .eq('drip_stage', stage)
      .gte('subscribed_at', cutoffStart)
      .lt('subscribed_at', cutoffEnd)
      .limit(200);

    if (error) {
      console.error('[cron drip] select failed', error.message);
      errors++;
      continue;
    }
    if (!subs || subs.length === 0) continue;

    const tpl = EMAIL_TEMPLATES.find((t) => t.id === drip.id);
    if (!tpl) continue;

    for (const s of subs as Subscriber[]) {
      try {
        const unsubscribeUrl = `${SITE_URL}/unsubscribe?token=${s.unsubscribe_token}`;
        const html = tpl.htmlBody
          .replace(/\{EMAIL\}/g, encodeURIComponent(s.email))
          .replace(/https:\/\/goccia\.org\/unsubscribe\?email=[^\s"'<]+/g, unsubscribeUrl);
        const result = await sendEmail({ to: s.email, subject: tpl.subject, html });
        if (result) sent++;
        await supabase
          .from('goccia_newsletter')
          .update({ drip_stage: stage + 1 })
          .eq('email', s.email);
      } catch (e) {
        console.error('[cron drip] send fail', e instanceof Error ? e.message : 'unknown');
        errors++;
      }
    }
  }

  return Response.json({ ok: true, sent, errors });
}
