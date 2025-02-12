import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 CREATE TABLE IF NOT EXISTS "faq" (
	"id" serial PRIMARY KEY NOT NULL,
	"quest" varchar NOT NULL,
	"ans" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "feedbacklinks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"link" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "faq_created_at_idx" ON "faq" ("created_at");
CREATE INDEX IF NOT EXISTS "feedbacklinks_created_at_idx" ON "feedbacklinks" ("created_at");`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "faq";
DROP TABLE "feedbacklinks";`)
}
