/**
 * Riceve il POST classico del modulo /contatti, valida i dati e li inoltra al
 * relay lead v2 di faqsicurezzalavoro.com, che invia la notifica email con un
 * mittente verificato.
 * 303 verso /contatti/inviato SOLO se il relay conferma l'invio; in ogni altro
 * caso 303 verso /contatti/errore. Mai un finto successo.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SITE = 'goccia.org';
const RELAY_URL = process.env.LEAD_RELAY_URL || 'https://faqsicurezzalavoro.com/api/relay-lead';
const OK_PATH = '/contatti/inviato';
const ERR_PATH = '/contatti/errore';
const MIN_MS = 3000; // tempo minimo di compilazione (anti-bot)
const MAX_BODY = 20_000;
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/;

const clean = (value: unknown, max: number) =>
  String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, ' ')
    .trim()
    .slice(0, max);

function go(path: string, reason?: string) {
  return new Response(null, {
    status: 303,
    headers: {
      Location: reason ? `${path}?motivo=${encodeURIComponent(reason)}` : path,
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

function sameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
  if (!origin || origin === 'null' || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return go(ERR_PATH, 'origine');
  let raw = '';
  try {
    raw = await req.text();
  } catch {
    return go(ERR_PATH, 'dati');
  }
  if (raw.length > MAX_BODY) return go(ERR_PATH, 'dati');
  const form = new URLSearchParams(raw);

  // Honeypot compilato o invio troppo rapido: richiesta automatica, non inoltrata.
  if (clean(form.get('website'), 200)) return go(ERR_PATH, 'bot');
  const tRaw = form.get('t');
  const t = Number(tRaw);
  if (tRaw && (!Number.isFinite(t) || Date.now() - t < MIN_MS)) return go(ERR_PATH, 'bot');

  const data = {
    name: clean(form.get('nome'), 120),
    email: clean(form.get('email'), 200).toLowerCase(),
    phone: clean(form.get('telefono'), 40),
    company: clean(form.get('azienda'), 160),
    message: clean(form.get('messaggio'), 4000),
  };
  const privacy = form.get('privacy') === 'on' || form.get('privacy') === 'true';
  if (data.name.length < 2 || !EMAIL_RE.test(data.email) || data.message.length < 5 || !privacy) {
    return go(ERR_PATH, 'dati');
  }

  let res: Response;
  let text = '';
  try {
    res = await fetch(RELAY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        site: SITE,
        kind: 'contact',
        ...data,
        fields: { Pagina: '/contatti', 'Consenso privacy': 'sì' },
      }),
      signal: AbortSignal.timeout(15_000),
    });
    text = await res.text().catch(() => '');
  } catch (err) {
    console.error('[api/contatti] relay non raggiungibile', { site: SITE, err: String(err) });
    return go(ERR_PATH, 'invio');
  }
  let ok = false;
  try {
    ok = res.ok && (JSON.parse(text) as { ok?: boolean }).ok === true;
  } catch {
    ok = false;
  }
  if (!ok) {
    console.error("[api/contatti] relay ha rifiutato l'invio", { site: SITE, status: res.status, body: text.slice(0, 300) });
    return go(ERR_PATH, 'invio');
  }
  console.log('[api/contatti] messaggio inoltrato', { site: SITE, relay: text.slice(0, 120) });
  return go(OK_PATH);
}
