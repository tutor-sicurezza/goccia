#!/usr/bin/env python3
"""Convert plain-text mentions of 123acqua.com into markdown-style backlinks
[anchor text](https://123acqua.com) inside the 6 new blog posts.

Run after the content agent has added the 6 entries; idempotent (skips already-linked text).
"""
import re

PATH = 'src/lib/blog-posts.ts'

# Pattern → replacement (markdown-style)
# Each pattern targets the keyword-rich anchor text the agent used and turns it
# into a proper backlink. We avoid bare URL mentions which provide weak SEO.

REPLACEMENTS = [
    # rapporto-di-prova-acqua-cosa-contiene
    (
        r'Affidarsi a Labservice — un laboratorio qualificato per l\\\'analisi delle acque potabili \(123acqua\.com\)',
        r'Affidarsi a Labservice — [un laboratorio qualificato per l\\\'analisi delle acque potabili](https://123acqua.com)',
    ),
    (
        r'kit di prelievo a domicilio con refertazione di laboratorio \(disponibile su 123acqua\.com\)',
        r'[kit di prelievo a domicilio con refertazione di laboratorio](https://123acqua.com)',
    ),
    # kit-prelievo-acqua-come-funziona
    (
        r'kit di prelievo professionale per l\\\'acqua del rubinetto, come quello fornito da Labservice su 123acqua\.com,',
        r'[kit di prelievo professionale per l\\\'acqua del rubinetto](https://123acqua.com), come quello fornito da Labservice,',
    ),
    (
        r'analisi acqua con campionamento guidato \(informazioni su 123acqua\.com\)',
        r'[analisi acqua con campionamento guidato](https://123acqua.com)',
    ),
    # scegliere-laboratorio-analisi-acqua
    (
        r'Labservice — laboratorio qualificato per l\\\'analisi delle acque potabili \(123acqua\.com\) — pubblica',
        r'Labservice — [laboratorio qualificato per l\\\'analisi delle acque potabili](https://123acqua.com) — pubblica',
    ),
    (
        r'richiedere un\\\'analisi di laboratorio per la propria acqua di casa \(123acqua\.com\)',
        r'[richiedere un\\\'analisi di laboratorio per la propria acqua di casa](https://123acqua.com)',
    ),
    (
        r'Per un\\\'analisi acqua del rubinetto con metodi strumentali validati e pannelli configurabili, 123acqua\.com offre',
        r'Per [un\\\'analisi acqua del rubinetto con metodi strumentali validati](https://123acqua.com) e pannelli configurabili, 123acqua.com offre',
    ),
    # analisi-acqua-condominio-amministratore-come-fare
    (
        r"richiedere un'analisi acqua per condominio con kit di prelievo a domicilio \(123acqua\.com\)",
        r"richiedere [un'analisi acqua per condominio con kit di prelievo a domicilio](https://123acqua.com)",
    ),
    (
        r'rapporto di prova per il controllo dell\\\'acqua del condominio \(123acqua\.com\)',
        r'[rapporto di prova per il controllo dell\\\'acqua del condominio](https://123acqua.com)',
    ),
    # analisi-pfas-acqua-come-si-fa
    (
        r'Per chi cerca un\\\'analisi PFAS nell\\\'acqua con strumentazione LC-MS/MS, 123acqua\.com offre',
        r'Per chi cerca [un\\\'analisi PFAS nell\\\'acqua con strumentazione LC-MS/MS](https://123acqua.com), 123acqua.com offre',
    ),
    # analisi-acqua-ats-asl-come-prepararsi (look for these patterns)
    (
        r"richiedere un rapporto di prova firmato per la pratica ATS/ASL \(123acqua\.com\)",
        r"richiedere [un rapporto di prova firmato per la pratica ATS/ASL](https://123acqua.com)",
    ),
    (
        r"analisi acqua del rubinetto per apertura attività con refertazione formale \(123acqua\.com\)",
        r"[analisi acqua del rubinetto per apertura attività con refertazione formale](https://123acqua.com)",
    ),
    # Fallback for any remaining bare "(123acqua.com)" mention: leave plain
]


def main():
    with open(PATH, 'r', encoding='utf-8') as f:
        text = f.read()

    original = text
    changes = 0
    for pat, repl in REPLACEMENTS:
        new = re.sub(pat, repl, text)
        if new != text:
            changes += 1
        text = new

    if text == original:
        print("No changes. Maybe already processed or patterns didn't match.")
        return

    with open(PATH, 'w', encoding='utf-8', newline='\n') as f:
        f.write(text)

    print(f"Linkified {changes} pattern(s).")
    # Count residual bare mentions
    residual = len(re.findall(r'\(123acqua\.com\)', text))
    md_links = len(re.findall(r'https://123acqua\.com', text))
    print(f"Residual bare '(123acqua.com)' mentions: {residual}")
    print(f"Markdown backlinks to 123acqua.com: {md_links}")


if __name__ == "__main__":
    main()
