create table public.goccia_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  overall_score smallint not null,
  health_score smallint,
  aesthetic_score smallint,
  pipe_score smallint,
  matched_count smallint not null,
  parameters jsonb not null,
  verdict text not null,
  cap text,
  source_lab text,
  email text,
  user_agent text,
  ip_hash text
);

alter table public.goccia_submissions enable row level security;

revoke all on public.goccia_submissions from anon, authenticated;

create or replace view public.goccia_benchmark as
select date_trunc('day', created_at) as day, verdict, count(*) as n,
       round(avg(overall_score)) as avg_score
from public.goccia_submissions
group by 1, 2;
grant select on public.goccia_benchmark to anon;

create index if not exists goccia_submissions_iphash_created_idx
  on public.goccia_submissions (ip_hash, created_at desc);
