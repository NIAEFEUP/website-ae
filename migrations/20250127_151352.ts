import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_users_role" AS ENUM('admin', 'merchant', 'staff');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_person_socials_type" AS ENUM('linkedin', 'facebook', 'website', 'instagram');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_sports_team_workouts_week_day" AS ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_sports_team_emoji" AS ENUM('⚽️', '🏀', '🏈', '🎾', '🏐', '🏉', '🥏', '🏓', '🏸', '🏒', '🏑', '🏏', '🥍', '🥅', '🎱', '🏹', '🎿', '🛷', '🚴‍♂️', '🏄‍♂️', '🏇', '🏊‍♂️', '🏋️‍♂️', '🤼‍♂️', '🤸‍♂️', '🤺', '🤾‍♂️', '🏌️‍♂️', '🧗‍♂️', '🚣‍♂️', '🚵‍♂️', '🏎️', '🏍️');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_association_socials_type" AS ENUM('website', 'linkedin', 'facebook', 'instagram');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_student_guide_language" AS ENUM('Português', 'Inglês');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_board_section_type" AS ENUM('presidencia', 'departament', 'mesa_da_assembleia_geral', 'conselho_fiscal');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_document_folder_section_name" AS ENUM('Direção', 'Assembleia Geral');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_docfile_type" AS ENUM('regulation', 'other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_place_category" AS ENUM('Espaços de Estudo', 'Alimentação', 'Alojamento', 'Mobilidade');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" "enum_users_role" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"email" varchar NOT NULL,
	"reset_password_token" varchar,
	"reset_password_expiration" timestamp(3) with time zone,
	"salt" varchar,
	"hash" varchar,
	"login_attempts" numeric,
	"lock_until" timestamp(3) with time zone
);

CREATE TABLE IF NOT EXISTS "media" (
	"id" serial PRIMARY KEY NOT NULL,
	"alt" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "person_socials" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"type" "enum_person_socials_type" NOT NULL,
	"link" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "person" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"position_id" integer,
	"photo_id" integer,
	"description" varchar,
	"birthday" timestamp(3) with time zone,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "material" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"quantity" numeric NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "space" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "sports_team_workouts" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"weekDay" "enum_sports_team_workouts_week_day" NOT NULL,
	"hour" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "sports_team_lineup" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL
);

CREATE TABLE IF NOT EXISTS "sports_team" (
	"id" serial PRIMARY KEY NOT NULL,
	"sport_name" varchar NOT NULL,
	"fap_id" numeric,
	"coach_id" integer,
	"emoji" "enum_sports_team_emoji",
	"background_image_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "sports_team_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"person_id" integer
);

CREATE TABLE IF NOT EXISTS "sponsor" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"url" varchar NOT NULL,
	"logo_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "association_socials" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"type" "enum_association_socials_type" NOT NULL,
	"link" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "association" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"in_aefeup" boolean NOT NULL,
	"description" varchar,
	"logo_id" integer NOT NULL,
	"address" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "student_guide" (
	"id" serial PRIMARY KEY NOT NULL,
	"language" "enum_student_guide_language" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "link" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"url" varchar NOT NULL,
	"description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "position" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "board_section_members" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"person_id" integer NOT NULL
);

CREATE TABLE IF NOT EXISTS "board_section_subgroups" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"title" varchar,
	"description" varchar
);

CREATE TABLE IF NOT EXISTS "board_section" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"type" "enum_board_section_type" NOT NULL,
	"description" varchar,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "president" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"photo_id" integer,
	"start_year" numeric NOT NULL,
	"end_year" numeric NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "event_link" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"description" varchar,
	"url" varchar
);

CREATE TABLE IF NOT EXISTS "event" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar NOT NULL,
	"type" varchar NOT NULL,
	"description" varchar NOT NULL,
	"image_id" integer NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "document_folder" (
	"id" serial PRIMARY KEY NOT NULL,
	"folder_name" varchar NOT NULL,
	"section_name" "enum_document_folder_section_name",
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "document_folder_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"docfile_id" integer
);

CREATE TABLE IF NOT EXISTS "docfile" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"type" "enum_docfile_type" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "video" (
	"id" serial PRIMARY KEY NOT NULL,
	"t_tulo" varchar NOT NULL,
	"thumbnail_id" integer,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"url" varchar,
	"thumbnail_u_r_l" varchar,
	"filename" varchar,
	"mime_type" varchar,
	"filesize" numeric,
	"width" numeric,
	"height" numeric,
	"focal_x" numeric,
	"focal_y" numeric
);

CREATE TABLE IF NOT EXISTS "faq" (
	"id" serial PRIMARY KEY NOT NULL,
	"quest" varchar NOT NULL,
	"ans" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "place_schedule" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"day" varchar NOT NULL,
	"hours" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "place" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" varchar,
	"position_lat" numeric NOT NULL,
	"position_lng" numeric NOT NULL,
	"category" "enum_place_category" NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "testimonial" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"photo_id" integer,
	"position" varchar NOT NULL,
	"content" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"key" varchar,
	"value" jsonb,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"users_id" integer
);

CREATE TABLE IF NOT EXISTS "payload_migrations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"batch" numeric,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" ("filename");
CREATE INDEX IF NOT EXISTS "person_socials_order_idx" ON "person_socials" ("_order");
CREATE INDEX IF NOT EXISTS "person_socials_parent_id_idx" ON "person_socials" ("_parent_id");
CREATE INDEX IF NOT EXISTS "person_created_at_idx" ON "person" ("created_at");
CREATE INDEX IF NOT EXISTS "material_created_at_idx" ON "material" ("created_at");
CREATE INDEX IF NOT EXISTS "space_created_at_idx" ON "space" ("created_at");
CREATE INDEX IF NOT EXISTS "sports_team_workouts_order_idx" ON "sports_team_workouts" ("_order");
CREATE INDEX IF NOT EXISTS "sports_team_workouts_parent_id_idx" ON "sports_team_workouts" ("_parent_id");
CREATE INDEX IF NOT EXISTS "sports_team_lineup_order_idx" ON "sports_team_lineup" ("_order");
CREATE INDEX IF NOT EXISTS "sports_team_lineup_parent_id_idx" ON "sports_team_lineup" ("_parent_id");
CREATE INDEX IF NOT EXISTS "sports_team_created_at_idx" ON "sports_team" ("created_at");
CREATE INDEX IF NOT EXISTS "sports_team_rels_order_idx" ON "sports_team_rels" ("order");
CREATE INDEX IF NOT EXISTS "sports_team_rels_parent_idx" ON "sports_team_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "sports_team_rels_path_idx" ON "sports_team_rels" ("path");
CREATE INDEX IF NOT EXISTS "sponsor_created_at_idx" ON "sponsor" ("created_at");
CREATE INDEX IF NOT EXISTS "association_socials_order_idx" ON "association_socials" ("_order");
CREATE INDEX IF NOT EXISTS "association_socials_parent_id_idx" ON "association_socials" ("_parent_id");
CREATE INDEX IF NOT EXISTS "association_created_at_idx" ON "association" ("created_at");
CREATE INDEX IF NOT EXISTS "student_guide_created_at_idx" ON "student_guide" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "student_guide_filename_idx" ON "student_guide" ("filename");
CREATE INDEX IF NOT EXISTS "link_created_at_idx" ON "link" ("created_at");
CREATE INDEX IF NOT EXISTS "position_created_at_idx" ON "position" ("created_at");
CREATE INDEX IF NOT EXISTS "board_section_members_order_idx" ON "board_section_members" ("_order");
CREATE INDEX IF NOT EXISTS "board_section_members_parent_id_idx" ON "board_section_members" ("_parent_id");
CREATE INDEX IF NOT EXISTS "board_section_subgroups_order_idx" ON "board_section_subgroups" ("_order");
CREATE INDEX IF NOT EXISTS "board_section_subgroups_parent_id_idx" ON "board_section_subgroups" ("_parent_id");
CREATE INDEX IF NOT EXISTS "board_section_created_at_idx" ON "board_section" ("created_at");
CREATE INDEX IF NOT EXISTS "president_created_at_idx" ON "president" ("created_at");
CREATE INDEX IF NOT EXISTS "event_link_order_idx" ON "event_link" ("_order");
CREATE INDEX IF NOT EXISTS "event_link_parent_id_idx" ON "event_link" ("_parent_id");
CREATE INDEX IF NOT EXISTS "event_created_at_idx" ON "event" ("created_at");
CREATE INDEX IF NOT EXISTS "document_folder_created_at_idx" ON "document_folder" ("created_at");
CREATE INDEX IF NOT EXISTS "document_folder_rels_order_idx" ON "document_folder_rels" ("order");
CREATE INDEX IF NOT EXISTS "document_folder_rels_parent_idx" ON "document_folder_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "document_folder_rels_path_idx" ON "document_folder_rels" ("path");
CREATE INDEX IF NOT EXISTS "docfile_created_at_idx" ON "docfile" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "docfile_filename_idx" ON "docfile" ("filename");
CREATE INDEX IF NOT EXISTS "video_created_at_idx" ON "video" ("created_at");
CREATE UNIQUE INDEX IF NOT EXISTS "video_filename_idx" ON "video" ("filename");
CREATE INDEX IF NOT EXISTS "faq_created_at_idx" ON "faq" ("created_at");
CREATE INDEX IF NOT EXISTS "place_schedule_order_idx" ON "place_schedule" ("_order");
CREATE INDEX IF NOT EXISTS "place_schedule_parent_id_idx" ON "place_schedule" ("_parent_id");
CREATE INDEX IF NOT EXISTS "place_created_at_idx" ON "place" ("created_at");
CREATE INDEX IF NOT EXISTS "testimonial_created_at_idx" ON "testimonial" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" ("key");
CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" ("created_at");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" ("order");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" ("path");
CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" ("created_at");
DO $$ BEGIN
 ALTER TABLE "person_socials" ADD CONSTRAINT "person_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "person"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "person" ADD CONSTRAINT "person_position_id_position_id_fk" FOREIGN KEY ("position_id") REFERENCES "position"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "person" ADD CONSTRAINT "person_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sports_team_workouts" ADD CONSTRAINT "sports_team_workouts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "sports_team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sports_team_lineup" ADD CONSTRAINT "sports_team_lineup_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "sports_team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sports_team" ADD CONSTRAINT "sports_team_coach_id_person_id_fk" FOREIGN KEY ("coach_id") REFERENCES "person"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sports_team" ADD CONSTRAINT "sports_team_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sports_team_rels" ADD CONSTRAINT "sports_team_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "sports_team"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sports_team_rels" ADD CONSTRAINT "sports_team_rels_person_fk" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sponsor" ADD CONSTRAINT "sponsor_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "association_socials" ADD CONSTRAINT "association_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "association"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "association" ADD CONSTRAINT "association_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "board_section_members" ADD CONSTRAINT "board_section_members_person_id_person_id_fk" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "board_section_members" ADD CONSTRAINT "board_section_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "board_section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "board_section_subgroups" ADD CONSTRAINT "board_section_subgroups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "board_section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "president" ADD CONSTRAINT "president_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "event_link" ADD CONSTRAINT "event_link_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "event"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "event" ADD CONSTRAINT "event_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "document_folder_rels" ADD CONSTRAINT "document_folder_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "document_folder"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "document_folder_rels" ADD CONSTRAINT "document_folder_rels_docfile_fk" FOREIGN KEY ("docfile_id") REFERENCES "docfile"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "video" ADD CONSTRAINT "video_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "place_schedule" ADD CONSTRAINT "place_schedule_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "place"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "testimonial" ADD CONSTRAINT "testimonial_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "users";
DROP TABLE "media";
DROP TABLE "person_socials";
DROP TABLE "person";
DROP TABLE "material";
DROP TABLE "space";
DROP TABLE "sports_team_workouts";
DROP TABLE "sports_team_lineup";
DROP TABLE "sports_team";
DROP TABLE "sports_team_rels";
DROP TABLE "sponsor";
DROP TABLE "association_socials";
DROP TABLE "association";
DROP TABLE "student_guide";
DROP TABLE "link";
DROP TABLE "position";
DROP TABLE "board_section_members";
DROP TABLE "board_section_subgroups";
DROP TABLE "board_section";
DROP TABLE "president";
DROP TABLE "event_link";
DROP TABLE "event";
DROP TABLE "document_folder";
DROP TABLE "document_folder_rels";
DROP TABLE "docfile";
DROP TABLE "video";
DROP TABLE "faq";
DROP TABLE "place_schedule";
DROP TABLE "place";
DROP TABLE "testimonial";
DROP TABLE "payload_preferences";
DROP TABLE "payload_preferences_rels";
DROP TABLE "payload_migrations";`)
}
