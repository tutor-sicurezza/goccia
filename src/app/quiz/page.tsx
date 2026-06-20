import type { Metadata } from 'next';
import { Quiz } from '@/components/quiz';
import { LeadCTA } from '@/components/lead-cta';
import { NewsletterSignup } from '@/components/newsletter-signup';
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from '@/components/json-ld';
import { QUIZ_QUESTIONS } from '@/lib/quiz-questions';

const URL = 'https://goccia.org/quiz';

export const metadata: Metadata = {
  title: 'Quiz acqua del rubinetto: quanto ne sai? Test in 5 minuti',
  description:
    "20 domande sull'acqua del rubinetto in Italia: normativa, salute, chimica, pratica e ambiente. Scopri il tuo profilo e cosa approfondire.",
  alternates: { canonical: URL },
};

export default function QuizPage() {
  return (
    <main className="relative mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <JsonLd
        data={articleJsonLd({
          headline: "Quiz acqua del rubinetto: quanto ne sai?",
          description: metadata.description as string,
          url: URL,
          datePublished: '2026-06-20',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: 'https://goccia.org/' },
          { name: 'Quiz', url: URL },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Quiz',
          name: "Quiz acqua del rubinetto: quanto ne sai?",
          inLanguage: 'it-IT',
          about: { '@type': 'Thing', name: "Qualità dell'acqua potabile in Italia" },
          educationalAlignment: { '@type': 'AlignmentObject', alignmentType: 'educationalSubject', targetName: 'Salute e ambiente' },
          numberOfQuestions: QUIZ_QUESTIONS.length,
          provider: { '@id': 'https://123acqua.com#organization' },
          url: URL,
          hasPart: QUIZ_QUESTIONS.slice(0, 5).map((q) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.options.find((o) => o.correct)?.explanation ?? q.options.find((o) => o.correct)?.text ?? '',
            },
          })),
        }}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-400">Quiz interattivo</p>
        <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
          <span className="text-gradient">Quanto ne sai sulla tua acqua?</span>
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          20 domande tra normativa, salute, chimica, pratica e ambiente. Ogni
          risposta è spiegata con la fonte. Al termine vedi il tuo profilo e
          cosa approfondire.
        </p>
      </header>

      <Quiz />

      <div className="mt-12">
        <NewsletterSignup source="quiz" />
      </div>

      <LeadCTA
        variant="completa"
        context="Hai capito quali parametri controllare? Per analizzarli davvero con un laboratorio qualificato:"
        tone="prominent"
      />
    </main>
  );
}
