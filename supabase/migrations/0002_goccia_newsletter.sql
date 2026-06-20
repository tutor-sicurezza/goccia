create table public.goccia_newsletter (
  email text primary key,
  subscribed_at timestamptz not null default now(),
  status text not null default 'active', -- 'active' | 'unsubscribed' | 'pending'
  consent boolean not null default false,
  unsubscribe_token text not null unique default encode(gen_random_bytes(24), 'hex'),
  source text -- 'home' | 'blog' | 'quiz' | ...
);

alter table public.goccia_newsletter enable row level security;
revoke all on public.goccia_newsletter from anon, authenticated;

create index if not exists goccia_newsletter_status_idx
  on public.goccia_newsletter (status, subscribed_at);
