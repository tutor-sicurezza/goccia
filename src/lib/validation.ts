import { z } from 'zod';

const ParameterSchema = z.object({
  parameter_id: z.string().min(1),
  numeric_value: z
    .number()
    .nullable()
    .refine((v) => v === null || v >= 0, { message: 'numeric_value must be >= 0' }),
  compliant: z.boolean().nullable().optional(),
});

const emptyToNull = (v: unknown): unknown =>
  typeof v === 'string' && v.trim() === '' ? null : v;

export const ScoreRequestSchema = z.object({
  parameters: z.array(ParameterSchema).min(1).max(30),
  cap: z
    .preprocess(emptyToNull, z.string().regex(/^\d{5}$/).nullable().optional())
    .optional(),
  source_lab: z.enum(['123acqua', 'altro', 'gestore']).nullable().optional(),
  email: z
    .preprocess(emptyToNull, z.string().email().nullable().optional())
    .optional(),
});

export type ScoreRequest = z.infer<typeof ScoreRequestSchema>;
