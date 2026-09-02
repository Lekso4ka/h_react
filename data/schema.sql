-- PostgreSQL schema derived from data/*.json
-- hotels hub: rooms, restaurant (1:1), amenities, stocks (N:M)
-- independent: venues, vacancies, activities, doings, affiche

BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ─── shared ───────────────────────────────────────────────────────────────────

CREATE TABLE media_assets (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path        text NOT NULL UNIQUE,          -- filename / relative path as in JSON
  kind        text NOT NULL DEFAULT 'image'
                CHECK (kind IN ('image', 'video', 'svg', 'other')),
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE event_categories (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text NOT NULL UNIQUE,
  name        text NOT NULL,                -- Концерты, Спорт, Гастрономия…
  sort_order  int NOT NULL DEFAULT 0
);

-- ─── hotels ───────────────────────────────────────────────────────────────────

CREATE TABLE hotels (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          text NOT NULL UNIQUE,       -- golden-tulip, tulip-inn
  name          text NOT NULL,
  name_tooltip  text,
  stars         smallint NOT NULL CHECK (stars BETWEEN 1 AND 5),
  address       text NOT NULL,
  text_1        text,
  text_2        text,
  room_link     text,
  banner_id     uuid REFERENCES media_assets (id),
  -- CMS blocks (section_1…4,6 teaser parts) — presentation payload
  content       jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

-- restaurant ↔ hotel : 1:1 (section_5)
CREATE TABLE restaurants (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id         uuid NOT NULL UNIQUE REFERENCES hotels (id) ON DELETE CASCADE,
  name             text NOT NULL,           -- from caption_1
  name_tooltip     text,                    -- caption_tooltip
  guests           int,
  guests_tooltip   text,
  text_1           text,
  text_2           text,
  caption_2        text,
  menu_link        text,
  image_id         uuid REFERENCES media_assets (id),
  -- [{ "text": "…", "time": "…" }]
  schedule         jsonb NOT NULL DEFAULT '[]'::jsonb,
  -- [{ "img": "…", "pos": "…" }]
  carousel         jsonb NOT NULL DEFAULT '[]'::jsonb
);

CREATE TABLE hotel_amenities (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id    uuid NOT NULL REFERENCES hotels (id) ON DELETE CASCADE,
  kind        text NOT NULL CHECK (kind IN ('include', 'additional')),
  name        text NOT NULL,
  text        text,
  image_id    uuid REFERENCES media_assets (id),
  -- [{ "title": "…", "link": "…" }]
  links       jsonb NOT NULL DEFAULT '[]'::jsonb,
  sort_order  int NOT NULL DEFAULT 0
);

CREATE INDEX hotel_amenities_hotel_idx ON hotel_amenities (hotel_id, kind, sort_order);

-- ─── rooms ────────────────────────────────────────────────────────────────────

CREATE TABLE room_categories (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hotel_id    uuid NOT NULL REFERENCES hotels (id) ON DELETE CASCADE,
  slug        text NOT NULL,                -- standard, suite, premier_plus…
  name        text NOT NULL,
  sort_order  int NOT NULL DEFAULT 0,
  UNIQUE (hotel_id, slug)
);

CREATE TABLE room_variants (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id   uuid NOT NULL REFERENCES room_categories (id) ON DELETE CASCADE,
  slug          text NOT NULL,              -- bazovyy / vid-na-goru / default
  name          text NOT NULL,              -- Базовый, Вид на гору…
  tour_link     text,
  rooms         int,
  size_m2       numeric(6, 1),
  guests        int,
  beds          text,
  view          text,
  tooltip       text,
  -- paragraphs
  text          text[] NOT NULL DEFAULT '{}',
  -- short chips
  options       text[] NOT NULL DEFAULT '{}',
  services      text[] NOT NULL DEFAULT '{}',
  sort_order    int NOT NULL DEFAULT 0,
  UNIQUE (category_id, slug)
);

CREATE TABLE room_variant_images (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id  uuid NOT NULL REFERENCES room_variants (id) ON DELETE CASCADE,
  media_id    uuid NOT NULL REFERENCES media_assets (id),
  sort_order  int NOT NULL DEFAULT 0
);

-- all_options: groups Comfort / Tech / …
CREATE TABLE room_amenity_groups (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id  uuid NOT NULL REFERENCES room_variants (id) ON DELETE CASCADE,
  title       text NOT NULL,
  items       text[] NOT NULL DEFAULT '{}',
  sort_order  int NOT NULL DEFAULT 0
);

-- ─── stocks (акции) N:M hotels ────────────────────────────────────────────────

CREATE TABLE stocks (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name               text NOT NULL,
  tooltip            text,
  tooltip_main       text,
  text               text,
  type               text,                  -- offer | …
  link               text,
  img_id             uuid REFERENCES media_assets (id),
  reservation_start  date,
  reservation_end    date,
  stay_start         date,
  stay_end           date,
  sort_order         int NOT NULL DEFAULT 0,
  is_published       boolean NOT NULL DEFAULT true,
  created_at         timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE stock_hotels (
  stock_id  uuid NOT NULL REFERENCES stocks (id) ON DELETE CASCADE,
  hotel_id  uuid NOT NULL REFERENCES hotels (id) ON DELETE CASCADE,
  PRIMARY KEY (stock_id, hotel_id)
);

CREATE TABLE stock_bullets (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stock_id    uuid NOT NULL REFERENCES stocks (id) ON DELETE CASCADE,
  kind        text NOT NULL CHECK (kind IN ('advantage', 'condition')),
  body        text NOT NULL,
  sort_order  int NOT NULL DEFAULT 0
);

-- ─── venues (не связаны с отелем) ─────────────────────────────────────────────

CREATE TABLE venues (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          text NOT NULL UNIQUE,       -- ballroom, viewpoint…
  name          text NOT NULL,
  size_m2       numeric(8, 1),
  guests        int,
  plan_svg      text,                       -- inline SVG from JSON
  plan_rotate   smallint NOT NULL DEFAULT 0,
  cover_id      uuid REFERENCES media_assets (id),
  tour_link     text,
  text          text[] NOT NULL DEFAULT '{}',
  options       text[] NOT NULL DEFAULT '{}',
  formats       text[] NOT NULL DEFAULT '{}',
  show_formats  boolean NOT NULL DEFAULT false,
  sort_order    int NOT NULL DEFAULT 0
);

CREATE TABLE venue_images (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  venue_id    uuid NOT NULL REFERENCES venues (id) ON DELETE CASCADE,
  media_id    uuid NOT NULL REFERENCES media_assets (id),
  sort_order  int NOT NULL DEFAULT 0
);

CREATE TABLE venue_layouts (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  venue_id    uuid NOT NULL REFERENCES venues (id) ON DELETE CASCADE,
  name        text NOT NULL,                -- Театр, Банкет…
  guests      int,
  pic_key     text,                         -- p1…
  sort_order  int NOT NULL DEFAULT 0
);

-- ─── vacancies (не связаны с отелем) ──────────────────────────────────────────

CREATE TABLE vacancies (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name             text NOT NULL,
  conditions       text[] NOT NULL DEFAULT '{}',
  responsibilities text[] NOT NULL DEFAULT '{}',
  requirements     text[] NOT NULL DEFAULT '{}',
  -- { "tooltip": "…", "text": "…" }
  payments         jsonb,
  registration     jsonb,
  -- [{ "title": "Телеграм", "link": "…" }]
  links            jsonb NOT NULL DEFAULT '[]'::jsonb,
  sort_order       int NOT NULL DEFAULT 0,
  is_published     boolean NOT NULL DEFAULT true
);

CREATE TABLE vacancy_images (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vacancy_id  uuid NOT NULL REFERENCES vacancies (id) ON DELETE CASCADE,
  media_id    uuid NOT NULL REFERENCES media_assets (id),
  sort_order  int NOT NULL DEFAULT 0
);

-- ─── activities: winter | summer (не связаны с отелем) ────────────────────────

CREATE TABLE activity_seasons (
  slug         text PRIMARY KEY CHECK (slug IN ('winter', 'summer')),
  name         text NOT NULL,
  image_id     uuid REFERENCES media_assets (id),
  text_top     text,
  text_bottom  text,
  sub_title    text,
  sub_text     text,
  sub_link     text,
  sub_image_id uuid REFERENCES media_assets (id)
);

CREATE TABLE activity_groups (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  season_slug text NOT NULL REFERENCES activity_seasons (slug) ON DELETE CASCADE,
  name        text NOT NULL,
  image_id    uuid REFERENCES media_assets (id),
  sort_order  int NOT NULL DEFAULT 0
);

CREATE TABLE activity_items (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id    uuid NOT NULL REFERENCES activity_groups (id) ON DELETE CASCADE,
  title       text NOT NULL,
  tooltip     text,
  text        text,
  image_id    uuid REFERENCES media_assets (id),
  sort_order  int NOT NULL DEFAULT 0
);

-- ─── doings (отдельно от афиши) ───────────────────────────────────────────────

CREATE TABLE doings (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug           text UNIQUE,               -- article_1… (nullable for text/video cards)
  type           text NOT NULL CHECK (type IN ('article', 'video', 'text')),
  category_id    uuid REFERENCES event_categories (id),  -- optional shared taxonomy
  tooltip        text,
  title          text NOT NULL,
  text           text,
  cover_id       uuid REFERENCES media_assets (id),
  video_src      text,
  video_preview  text,
  -- article body: title, section_1…N, carousel… (as in JSON)
  content        jsonb,
  sort_order     int NOT NULL DEFAULT 0,
  is_published   boolean NOT NULL DEFAULT true,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX doings_type_order_idx ON doings (type, sort_order);

-- ─── affiche (свой content; date + time; без FK на doings) ────────────────────

CREATE TABLE affiche_events (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id   uuid NOT NULL REFERENCES event_categories (id),
  title         text NOT NULL,
  event_date    date NOT NULL,
  event_time    time NOT NULL,
  cover_id      uuid REFERENCES media_assets (id),
  -- расширенный контент той же формы, что doings.article.content
  content       jsonb,
  sort_order    int NOT NULL DEFAULT 0,
  is_published  boolean NOT NULL DEFAULT true,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX affiche_events_datetime_idx ON affiche_events (event_date, event_time);
CREATE INDEX affiche_events_category_idx ON affiche_events (category_id);

-- ─── legal (org-level) ────────────────────────────────────────────────────────

CREATE TABLE legal_pages (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key         text NOT NULL UNIQUE,         -- info | policy | rules
  page_title  text NOT NULL,
  label       text,
  doc_title   text
);

CREATE TABLE legal_sections (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id         uuid NOT NULL REFERENCES legal_pages (id) ON DELETE CASCADE,
  slug            text NOT NULL,            -- requisites, services…
  title           text NOT NULL,
  layout          text NOT NULL,            -- text | services | …
  text            text[] NOT NULL DEFAULT '{}',
  text_after      text[] NOT NULL DEFAULT '{}',
  links           jsonb NOT NULL DEFAULT '[]'::jsonb,
  list_intro      text,
  list_items      text[] NOT NULL DEFAULT '{}',
  free_title      text,
  free_items      text[] NOT NULL DEFAULT '{}',
  paid_title      text,
  paid_items      text[] NOT NULL DEFAULT '{}',
  tariff_rows     jsonb NOT NULL DEFAULT '[]'::jsonb,
  download_label  text,
  sort_order      int NOT NULL DEFAULT 0,
  UNIQUE (page_id, slug)
);

-- ─── users (admin) ────────────────────────────────────────────────────────────

CREATE TABLE users (
  id                   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  login                text NOT NULL UNIQUE,
  email                text NOT NULL UNIQUE,
  password_hash        text NOT NULL,
  reset_token          text,
  reset_token_expires  timestamptz,
  created_at           timestamptz NOT NULL DEFAULT now()
);

-- ─── subscribers (newsletter) ─────────────────────────────────────────────────

CREATE TABLE subscribers (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  email       text NOT NULL UNIQUE,
  created_at  timestamptz NOT NULL DEFAULT now()
);

COMMIT;
