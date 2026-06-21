import Anthropic from '@anthropic-ai/sdk';
import { z } from 'zod';
import { PARAMETER_CONFIGS } from '@aquascore/index';
import { createServiceClient } from '@/lib/supabase/server';
import { hashIp, getClientIp } from '@/lib/hash';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED_MIME = new Set(['application/pdf', 'image/jpeg', 'image/png', 'image/webp']);
const MODEL = 'claude-sonnet-4-6';

const ParsedSchema = z.object({
  parameters: z.array(
    z.object({
      parameter_id: z.string(),
      numeric_value: z.number().nullable(),
      unit: z.string().optional(),
      compliant: z.boolean().nullable().optional(),
    }),
  ),
  laboratory_name: z.string().nullable().optional(),
  sample_date: z.string().nullable().optional(),
  cap: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
});

function buildPrompt(): string {
  const cfg = PARAMETER_CONFIGS.map((c) => ({
    id: c.id,
    aliases: c.aliases,
    unit: c.unit,
    microbiological: !!c.microbiological,
  }));
  return `Stai leggendo un referto italiano di analisi dell'acqua del rubinetto. Estrai i valori dei parametri analitici trovati nel documento.

Per ogni parametro estratto, restituisci un oggetto con:
- parameter_id: scegli l'id corretto dalla lista qui sotto
- numeric_value: il valore numerico riscontrato (numero, decimali con punto). Per parametri MICROBIOLOGICI metti numeric_value=0 se "assente" o "0 UFC/100mL" o "non rilevato/n.r.", oppure 1 se "presente" / "> 0".
- unit: l'unità trovata nel referto (se diversa da quella standard, riportala fedelmente)
- compliant: true se il valore è esplicitamente segnato come conforme/entro i limiti, false se non conforme, null se non specificato.

Per parametri MICROBIOLOGICI (e_coli, coliformi_totali, enterococchi) usa anche il campo compliant: true se assente/conforme, false se presente/non conforme.

Inoltre estrai (se presenti):
- laboratory_name: il nome del laboratorio che ha emesso il referto
- sample_date: la data del prelievo o dell'analisi in formato YYYY-MM-DD
- cap: il CAP del punto di prelievo se presente (5 cifre)
- notes: eventuali note importanti del referto

LISTA PARAMETRI VALIDI (id + alias italiani + unità standard):
${JSON.stringify(cfg, null, 2)}

REGOLE:
- Usa SOLO gli id elencati sopra (sono gli unici riconosciuti dal motore).
- Se trovi un parametro non in lista (es. ossigeno disciolto, alcalinità), IGNORALO.
- Se un valore è "<X" (sotto soglia di rilevazione), usa il valore X come numeric_value. Se è "n.r." o "non rilevato" per microbiologia, usa 0 con compliant=true.
- I numeri decimali italiani con la virgola (es. "7,5") vanno convertiti in punto (7.5).
- Se la stessa parametro compare più volte, prendi il valore della voce più completa (con metodo analitico citato).

Rispondi SOLO con JSON valido, senza markdown, senza testo introduttivo. Schema:
{
  "parameters": [
    { "parameter_id": "ph", "numeric_value": 7.5, "unit": "unità pH", "compliant": true },
    ...
  ],
  "laboratory_name": "...",
  "sample_date": "...",
  "cap": "...",
  "notes": "..."
}`;
}

interface ParseResult {
  parameters: { parameter_id: string; numeric_value: number | null; unit?: string; compliant?: boolean | null }[];
  laboratory_name?: string | null;
  sample_date?: string | null;
  cap?: string | null;
  notes?: string | null;
}

async function callAnthropic(buffer: Buffer, mime: string): Promise<ParseResult> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('missing_api_key');
  const client = new Anthropic({ apiKey });
  const base64 = buffer.toString('base64');
  type DocSource =
    | { type: 'base64'; media_type: 'application/pdf'; data: string }
    | { type: 'base64'; media_type: 'image/jpeg' | 'image/png' | 'image/webp'; data: string };
  type Block =
    | { type: 'document'; source: Extract<DocSource, { media_type: 'application/pdf' }> }
    | { type: 'image'; source: Extract<DocSource, { media_type: 'image/jpeg' | 'image/png' | 'image/webp' }> }
    | { type: 'text'; text: string };
  const content: Block[] = [];
  if (mime === 'application/pdf') {
    content.push({
      type: 'document',
      source: { type: 'base64', media_type: 'application/pdf', data: base64 },
    });
  } else {
    content.push({
      type: 'image',
      source: { type: 'base64', media_type: mime as 'image/jpeg' | 'image/png' | 'image/webp', data: base64 },
    });
  }
  content.push({ type: 'text', text: buildPrompt() });

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    messages: [{ role: 'user', content: content as unknown as Anthropic.Messages.ContentBlockParam[] }],
  });

  const text = response.content
    .map((b) => ('text' in b && typeof b.text === 'string' ? b.text : ''))
    .join('')
    .trim();

  let parsed: unknown;
  try {
    // Strip code fences if any
    const cleaned = text.replace(/^```(?:json)?\n?/i, '').replace(/\n?```\s*$/i, '');
    parsed = JSON.parse(cleaned);
  } catch {
    throw new Error('invalid_json_from_model');
  }

  const ok = ParsedSchema.safeParse(parsed);
  if (!ok.success) throw new Error('invalid_schema_from_model');
  return ok.data as ParseResult;
}

async function checkRateLimit(ipHash: string): Promise<boolean> {
  try {
    const supabase = createServiceClient();
    const since = new Date(Date.now() - 3600 * 1000).toISOString();
    const { count } = await supabase
      .from('goccia_submissions')
      .select('id', { count: 'exact', head: true })
      .eq('ip_hash', ipHash)
      .gte('created_at', since);
    return (count ?? 0) < 5; // 5 OCR / hour
  } catch {
    return true;
  }
}

export async function POST(req: Request): Promise<Response> {
  try {
    const ipHash = hashIp(getClientIp(req.headers));
    const ok = await checkRateLimit(ipHash);
    if (!ok) {
      return Response.json({ error: 'rate_limited', detail: 'Massimo 5 caricamenti all\'ora.' }, { status: 429 });
    }

    const ctype = req.headers.get('content-type') ?? '';
    if (!ctype.includes('multipart/form-data')) {
      return Response.json({ error: 'invalid_content_type' }, { status: 400 });
    }
    const formData = await req.formData();
    const file = formData.get('file');
    if (!(file instanceof File)) {
      return Response.json({ error: 'missing_file' }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return Response.json({ error: 'file_too_large', detail: 'Massimo 8 MB.' }, { status: 413 });
    }
    if (!ALLOWED_MIME.has(file.type)) {
      return Response.json({ error: 'invalid_mime', detail: 'Solo PDF, JPG, PNG o WebP.' }, { status: 415 });
    }

    const buf = Buffer.from(await file.arrayBuffer());
    const result = await callAnthropic(buf, file.type);

    // GDPR: il file NON viene mai salvato. Resta solo nella RAM della funzione, che termina qui.
    return Response.json({ ok: true, ...result });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'unknown';
    console.error('[api/parse-report]', msg);
    if (msg === 'missing_api_key') {
      return Response.json({ error: 'service_unavailable', detail: 'OCR temporaneamente non attivo.' }, { status: 503 });
    }
    if (msg === 'invalid_json_from_model' || msg === 'invalid_schema_from_model') {
      return Response.json({ error: 'parse_failed', detail: 'Non sono riuscito a leggere il referto. Prova a inserire i valori manualmente.' }, { status: 422 });
    }
    return Response.json({ error: 'internal' }, { status: 500 });
  }
}
