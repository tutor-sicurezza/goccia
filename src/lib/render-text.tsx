import * as React from 'react';

/**
 * Render plain Italian editorial text with light markdown:
 *  - [anchor](url)      → <a> with rel="noreferrer" target="_blank" for absolute, none for relative
 *  - **bold**           → <strong>
 *  - bare URL https://… → autolink
 *
 * No HTML is injected. Tokenizer + React elements.
 */
export function renderText(input: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  let i = 0;
  let buf = '';
  let key = 0;

  function flushBuf() {
    if (buf.length > 0) {
      out.push(buf);
      buf = '';
    }
  }

  while (i < input.length) {
    // [anchor](url)
    if (input[i] === '[') {
      const close = input.indexOf(']', i + 1);
      if (close !== -1 && input[close + 1] === '(') {
        const parenClose = input.indexOf(')', close + 2);
        if (parenClose !== -1) {
          const anchor = input.slice(i + 1, close);
          const url = input.slice(close + 2, parenClose);
          flushBuf();
          const external = /^https?:\/\//.test(url);
          out.push(
            <a
              key={`a-${key++}`}
              href={url}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="font-semibold text-sky-300 underline-offset-2 hover:underline"
            >
              {anchor}
            </a>,
          );
          i = parenClose + 1;
          continue;
        }
      }
    }
    // **bold**
    if (input[i] === '*' && input[i + 1] === '*') {
      const close = input.indexOf('**', i + 2);
      if (close !== -1) {
        flushBuf();
        out.push(
          <strong key={`b-${key++}`} className="text-slate-100">
            {input.slice(i + 2, close)}
          </strong>,
        );
        i = close + 2;
        continue;
      }
    }
    // bare https://… up to whitespace or punctuation that ends a URL
    if (input.startsWith('https://', i) || input.startsWith('http://', i)) {
      let j = i;
      while (j < input.length && !/[\s)<>" ]/.test(input[j])) j++;
      while (j > i && /[.,;:!?]/.test(input[j - 1])) j--;
      const url = input.slice(i, j);
      if (url.length > 10) {
        flushBuf();
        out.push(
          <a
            key={`u-${key++}`}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-sky-300 underline-offset-2 hover:underline"
          >
            {url.replace(/^https?:\/\//, '')}
          </a>,
        );
        i = j;
        continue;
      }
    }
    buf += input[i];
    i++;
  }
  flushBuf();
  return out;
}
