interface SendArgs {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}

const FROM = 'GoccIA <noreply@goccia.org>';

export async function sendEmail(args: SendArgs): Promise<{ id: string } | null> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn('[email] RESEND_API_KEY missing — skip send');
    return null;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM,
      to: Array.isArray(args.to) ? args.to : [args.to],
      subject: args.subject,
      html: args.html,
      reply_to: args.replyTo ?? 'privacy@goccia.org',
    }),
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    console.error('[email] send failed', res.status, txt);
    return null;
  }
  const data = (await res.json()) as { id: string };
  return data;
}

export function resultEmailHtml(opts: {
  score: number;
  verdict: string;
  resultUrl: string;
}): string {
  const tone =
    opts.score >= 70
      ? '#10b981'
      : opts.score >= 50
        ? '#f59e0b'
        : '#ef4444';
  return `<!doctype html>
<html lang="it">
<head>
<meta charset="utf-8">
<title>Il tuo risultato GoccIA</title>
</head>
<body style="margin:0;padding:0;background:#020617;color:#e2e8f0;font-family:-apple-system,Segoe UI,Inter,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020617;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:24px;padding:32px;border:1px solid rgba(255,255,255,0.08)">
        <tr><td style="padding-bottom:24px">
          <div style="font-size:14px;letter-spacing:.2em;text-transform:uppercase;color:#94a3b8">GoccIA</div>
          <h1 style="margin:8px 0 0;font-size:28px;line-height:1.2;color:#f1f5f9">Il tuo risultato è pronto</h1>
        </td></tr>
        <tr><td align="center" style="padding:24px 0">
          <div style="display:inline-block;border:8px solid ${tone}33;border-radius:50%;padding:28px 36px">
            <div style="font-size:56px;font-weight:800;color:${tone};line-height:1">${opts.score}</div>
            <div style="font-size:12px;color:#94a3b8;text-align:center;margin-top:4px">/ 99</div>
          </div>
          <div style="margin-top:16px;font-size:20px;font-weight:600;color:${tone}">${opts.verdict}</div>
        </td></tr>
        <tr><td style="padding-top:8px">
          <p style="margin:0;font-size:15px;line-height:1.6;color:#cbd5e1">
            Ti abbiamo associato il punteggio della tua acqua del rubinetto secondo i limiti del
            D.Lgs. 18/2023 e le linee guida WHO/EFSA. Il calcolo è deterministico:
            stessi valori → stesso punteggio.
          </p>
        </td></tr>
        <tr><td style="padding:24px 0" align="center">
          <a href="${opts.resultUrl}" style="display:inline-block;background:linear-gradient(90deg,#8b5cf6,#0ea5e9);color:#fff;padding:14px 28px;border-radius:14px;font-weight:600;text-decoration:none;font-size:15px">Rivedi il risultato</a>
        </td></tr>
        <tr><td style="padding-top:16px;border-top:1px solid rgba(255,255,255,.08)">
          <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6">
            Strumento informativo: non sostituisce il rapporto di prova di laboratorio
            né costituisce parere medico o legale.<br>
            GoccIA è un marchio commerciale di <strong>Labservice S.r.l.</strong> (P.IVA IT09433191005,
            Via di Santo Stefano 6/B, 00061 Anguillara Sabazia RM).<br>
            Hai ricevuto questa email perché l'hai richiesta esplicitamente.
            Per cancellare i tuoi dati: <a href="mailto:privacy@goccia.org" style="color:#7dd3fc">privacy@goccia.org</a>.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
