import { PARAMETER_CONFIGS } from '@aquascore/index';
import { PARAMETER_GUIDES } from '@/lib/parameter-guides';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

interface ParameterExport {
  id: string;
  name_it: string;
  aliases: string[];
  unit: string;
  legal_limit: { min?: number; max?: number };
  ideal_range: { min?: number; max?: number };
  weights: { health: number; aesthetic: number; pipe: number };
  microbiological: boolean;
  guide_url: string;
  source: {
    legal: string;
    ideal: string;
  };
}

function build(): ParameterExport[] {
  return PARAMETER_CONFIGS.map((cfg) => {
    const guide = PARAMETER_GUIDES.find((g) => g.id === cfg.id);
    return {
      id: cfg.id,
      name_it: guide?.itName ?? cfg.id,
      aliases: cfg.aliases,
      unit: cfg.unit,
      legal_limit: cfg.legal,
      ideal_range: cfg.ideal,
      weights: cfg.weights,
      microbiological: cfg.microbiological ?? false,
      guide_url: guide ? `https://goccia.org/parametri/${guide.slug}` : `https://goccia.org/parametri`,
      source: {
        legal: 'D.Lgs. 18/2023 (recepimento Direttiva UE 2020/2184)',
        ideal: 'WHO Guidelines for Drinking-water Quality (4th ed.) — EFSA Scientific Opinions',
      },
    };
  });
}

export function GET() {
  const data = {
    api: 'GoccIA Open Data',
    version: 'v1',
    license: 'CC-BY 4.0',
    citation: 'GoccIA — goccia.org — Labservice S.r.l.',
    documentation: 'https://goccia.org/api-docs',
    last_updated: '2026-06-23',
    parameters: build(),
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    },
  });
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400',
    },
  });
}
