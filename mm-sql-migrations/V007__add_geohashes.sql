alter table app_public.mechanic add column geohashes varchar(15)[] not null default '{}';