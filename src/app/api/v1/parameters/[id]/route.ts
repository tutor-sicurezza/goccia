import { PARAMETER_CONFIGS } from '@aquascore/index';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';

export const runtime = 'nodejs';

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cfg = PARAMETER_CONFIGS.find((c) => c.id === id);
  if (!cfg) {
    return Response.json(
      {
        error: 'not_found',
        message: `Parameter "${id}" not found. List: https://goccia.org/api/v1/parameters`,
      },
      { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } },
    );
  }
  const guide = PARAMETER_GUIDES.find((g) => g.id === cfg.id);
  return new Response(
    JSON.stringify(
      {
        id: cfg.id,
        name_it: guide?.itName ?? cfg.id,
        aliases: cfg.aliases,
        unit: cfg.unit,
        legal_limit: cfg.legal,
        ideal_range: cfg.ideal,
        weights: cfg.weights,
        microbiological: cfg.microbiological ?? false,
        guide_url: guide
          ? `https://goccia.org/parametri/${guide.slug}`
          : `https://goccia.org/parametri`,
        meta_description: guide?.metaDescription ?? null,
        source: {
          legal: 'D.Lgs. 18/2023 (recepimento Direttiva UE 2020/2184)',
          ideal: 'WHO Guidelines for Drinking-water Quality (4th ed.) — EFSA Scientific Opinions',
        },
        license: 'CC-BY 4.0',
        citation: 'GoccIA — goccia.org — Labservice S.r.l.',
      },
      null,
      2,
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Access-Control-Allow-Origin': '*',
      },
    },
  );
}
