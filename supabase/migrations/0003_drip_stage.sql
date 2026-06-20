alter table public.goccia_newsletter
  add column if not exists drip_stage smallint not null default 0;

create index if not exists goccia_newsletter_drip_idx
  on public.goccia_newsletter (status, drip_stage, subscribed_at);
