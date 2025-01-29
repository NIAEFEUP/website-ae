import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "board_section_rels" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer,
	"parent_id" integer NOT NULL,
	"path" varchar NOT NULL,
	"person_id" integer
);

DROP TABLE "board_section_members";
ALTER TABLE "video" RENAME COLUMN "t_tulo" TO "title";
CREATE INDEX IF NOT EXISTS "board_section_rels_order_idx" ON "board_section_rels" ("order");
CREATE INDEX IF NOT EXISTS "board_section_rels_parent_idx" ON "board_section_rels" ("parent_id");
CREATE INDEX IF NOT EXISTS "board_section_rels_path_idx" ON "board_section_rels" ("path");
DO $$ BEGIN
 ALTER TABLE "board_section_rels" ADD CONSTRAINT "board_section_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "board_section"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "board_section_rels" ADD CONSTRAINT "board_section_rels_person_fk" FOREIGN KEY ("person_id") REFERENCES "person"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "board_section_members" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"person_id" integer NOT NULL
);


DROP TABLE "board_section_rels";
ALTER TABLE "video" ADD COLUMN "t_tulo" varchar NOT NULL;
CREATE INDEX IF NOT EXISTS "board_section_members_order_idx" ON "board_section_members" ("_order");
CREATE INDEX IF NOT EXISTS "board_section_members_parent_id_idx" ON "board_section_members" ("_parent_id");
CREATE INDEX IF NOT EXISTS "faq_created_at_idx" ON "faq" ("created_at");
ALTER TABLE "video" DROP COLUMN IF EXISTS "title";
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
`)
}
