create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  discord_user_id text not null unique,
  discord_username text not null,
  discord_avatar_url text,
  discord_banner_url text,
  riot_connection_type text,
  riot_connection_id text,
  riot_account_name text,
  riot_game_name text,
  riot_tag_line text,
  riot_id_normalized text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint profiles_riot_identity_check check (
    (
      riot_game_name is null
      and riot_tag_line is null
      and riot_id_normalized is null
    )
    or (
      riot_game_name is not null
      and riot_tag_line is not null
      and riot_id_normalized is not null
    )
  )
);

create table if not exists public.games (
  riot_game_id bigint primary key,
  queue_label text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.game_players (
  riot_game_id bigint not null references public.games (riot_game_id) on delete cascade,
  riot_id_normalized text not null,
  game_name text not null,
  tag_line text not null,
  champion_name text not null,
  champion_icon text not null,
  arena_rank integer not null,
  is_searched_player boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  primary key (riot_game_id, riot_id_normalized)
);

create table if not exists public.votes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  voter_riot_id_normalized text not null,
  riot_game_id bigint not null references public.games (riot_game_id) on delete cascade,
  player_riot_id_normalized text not null,
  direction text not null check (direction in ('up', 'down')),
  reason text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (user_id, riot_game_id, player_riot_id_normalized)
);

create index if not exists votes_user_game_idx on public.votes (user_id, riot_game_id);
create index if not exists votes_player_idx on public.votes (player_riot_id_normalized);

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_updated_at();

drop trigger if exists set_games_updated_at on public.games;
create trigger set_games_updated_at
before update on public.games
for each row
execute function public.set_updated_at();

drop trigger if exists set_game_players_updated_at on public.game_players;
create trigger set_game_players_updated_at
before update on public.game_players
for each row
execute function public.set_updated_at();

drop trigger if exists set_votes_updated_at on public.votes;
create trigger set_votes_updated_at
before update on public.votes
for each row
execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.games enable row level security;
alter table public.game_players enable row level security;
alter table public.votes enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
using (auth.uid() = user_id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
with check (auth.uid() = user_id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "games_read_authenticated" on public.games;
create policy "games_read_authenticated"
on public.games
for select
using (auth.role() = 'authenticated');

drop policy if exists "games_write_authenticated" on public.games;
create policy "games_write_authenticated"
on public.games
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "game_players_read_authenticated" on public.game_players;
create policy "game_players_read_authenticated"
on public.game_players
for select
using (auth.role() = 'authenticated');

drop policy if exists "game_players_write_authenticated" on public.game_players;
create policy "game_players_write_authenticated"
on public.game_players
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

drop policy if exists "votes_select_own" on public.votes;
create policy "votes_select_own"
on public.votes
for select
using (auth.uid() = user_id);

drop policy if exists "votes_insert_own" on public.votes;
create policy "votes_insert_own"
on public.votes
for insert
with check (auth.uid() = user_id);

drop policy if exists "votes_update_own" on public.votes;
create policy "votes_update_own"
on public.votes
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "votes_delete_own" on public.votes;
create policy "votes_delete_own"
on public.votes
for delete
using (auth.uid() = user_id);
