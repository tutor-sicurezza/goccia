'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { QUIZ_PROFILES, QUIZ_QUESTIONS } from '@/lib/quiz-questions';

const CATEGORY_LABEL: Record<string, string> = {
  normativa: 'Normativa',
  salute: 'Salute',
  chimica: 'Chimica',
  pratica: 'Pratica',
  ambiente: 'Ambiente',
};

export function Quiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const question = QUIZ_QUESTIONS[stepIndex];
  const totalQs = QUIZ_QUESTIONS.length;
  const isLast = stepIndex === totalQs - 1;
  const isFinished = stepIndex >= totalQs;

  const correctCount = useMemo(() => {
    let n = 0;
    for (const q of QUIZ_QUESTIONS) {
      const a = answers[q.id];
      if (!a) continue;
      const opt = q.options.find((o) => o.id === a);
      if (opt?.correct) n++;
    }
    return n;
  }, [answers]);

  const percent = Math.round((correctCount / totalQs) * 100);

  const profile = useMemo(() => {
    return (
      QUIZ_PROFILES.find((p) => percent >= p.minScore && percent <= p.maxScore) ??
      QUIZ_PROFILES[QUIZ_PROFILES.length - 1]
    );
  }, [percent]);

  function selectAnswer(optionId: string) {
    if (answers[question.id]) return;
    setAnswers({ ...answers, [question.id]: optionId });
    setShowFeedback(true);
  }

  function next() {
    setShowFeedback(false);
    setStepIndex(stepIndex + 1);
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
    setShowFeedback(false);
  }

  if (isFinished) {
    return (
      <div className="glass rounded-3xl p-6 text-center sm:p-10">
        <p className="text-xs uppercase tracking-wide text-slate-400">Risultato</p>
        <p className="mt-2 font-display text-6xl">{profile.emoji}</p>
        <p className="mt-4 font-display text-3xl font-semibold">
          <span className="text-gradient">{profile.title}</span>
        </p>
        <p className="mt-2 text-slate-300">
          {correctCount} risposte corrette su {totalQs} · {percent}%
        </p>
        <p className="mt-6 mx-auto max-w-2xl text-slate-300">{profile.description}</p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {profile.cta === 'tool' ? (
            <Link
              href="/"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Calcola il punteggio della tua acqua
            </Link>
          ) : profile.cta === 'lab' ? (
            <a
              href="https://123acqua.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Analisi laboratorio acqua — su 123acqua.com
            </a>
          ) : (
            <Link
              href="/parametri"
              className="rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Leggi le guide sui parametri
            </Link>
          )}
          <button
            type="button"
            onClick={restart}
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-violet-400/40"
          >
            Rifai il quiz
          </button>
        </div>
      </div>
    );
  }

  const selectedId = answers[question.id];
  const selected = question.options.find((o) => o.id === selectedId);

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
        <span>
          Domanda {stepIndex + 1} di {totalQs} · {CATEGORY_LABEL[question.category] ?? question.category}
        </span>
        <span>{question.difficulty}</span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-500 transition-all"
          style={{ width: `${((stepIndex + (showFeedback ? 1 : 0)) / totalQs) * 100}%` }}
        />
      </div>

      <h2 className="mt-6 font-display text-xl font-semibold text-slate-100 sm:text-2xl">
        {question.question}
      </h2>

      <div className="mt-5 space-y-2.5">
        {question.options.map((o) => {
          const isSelected = selectedId === o.id;
          const showResult = showFeedback;
          let cls = 'glass w-full rounded-2xl p-4 text-left transition hover:border-violet-400/40';
          if (showResult && isSelected) {
            cls = o.correct
              ? 'w-full rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-left'
              : 'w-full rounded-2xl border border-rose-400/40 bg-rose-400/10 p-4 text-left';
          } else if (showResult && o.correct) {
            cls = 'w-full rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.06] p-4 text-left';
          }
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => selectAnswer(o.id)}
              disabled={showResult}
              className={cls}
            >
              <p className="text-sm font-semibold text-slate-100">
                <span className="mr-2 text-slate-500">{o.id.toUpperCase()})</span>
                {o.text}
              </p>
              {showResult ? (
                <p className="mt-1.5 text-xs text-slate-300">{o.explanation}</p>
              ) : null}
            </button>
          );
        })}
      </div>

      {showFeedback ? (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm">
            {selected?.correct ? (
              <span className="font-semibold text-emerald-300">Risposta corretta!</span>
            ) : (
              <span className="font-semibold text-rose-300">Risposta non corretta.</span>
            )}
            {question.source ? (
              <span className="ml-2 text-xs text-slate-400">Fonte: {question.source}</span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={next}
            className="rounded-xl bg-gradient-to-r from-violet-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white"
          >
            {isLast ? 'Vedi il risultato' : 'Prossima'}
          </button>
        </div>
      ) : null}
    </div>
  );
}
