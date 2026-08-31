create table if not exists public.quiz_sessions (
  id text primary key,
  payload jsonb not null,
  expires_at timestamptz not null,
  updated_at timestamptz not null default now()
);

alter table public.quiz_sessions enable row level security;
revoke all on public.quiz_sessions from anon, authenticated;
create index if not exists quiz_sessions_expires_at_idx on public.quiz_sessions (expires_at);
