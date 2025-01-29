import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DO $$ BEGIN
 CREATE TYPE "enum_product_sizes_size" AS ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_order_products_size" AS ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "enum_order_status" AS ENUM('pending', 'paid', 'canceled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "product_sizes" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"size" "enum_product_sizes_size" NOT NULL,
	"quantity" numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"price" numeric NOT NULL,
	"photo_id" integer NOT NULL,
	"description" varchar NOT NULL,
	"color" varchar NOT NULL,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "order_products" (
	"_order" integer NOT NULL,
	"_parent_id" integer NOT NULL,
	"id" varchar PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"size" "enum_order_products_size" NOT NULL,
	"quantity" numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS "order" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar NOT NULL,
	"mobile" varchar NOT NULL,
	"total_price" numeric NOT NULL,
	"status" "enum_order_status" NOT NULL,
	"withdrawal" boolean,
	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "product_sizes_order_idx" ON "product_sizes" ("_order");
CREATE INDEX IF NOT EXISTS "product_sizes_parent_id_idx" ON "product_sizes" ("_parent_id");
CREATE INDEX IF NOT EXISTS "product_created_at_idx" ON "product" ("created_at");
CREATE INDEX IF NOT EXISTS "order_products_order_idx" ON "order_products" ("_order");
CREATE INDEX IF NOT EXISTS "order_products_parent_id_idx" ON "order_products" ("_parent_id");
CREATE INDEX IF NOT EXISTS "order_created_at_idx" ON "order" ("created_at");
DO $$ BEGIN
 ALTER TABLE "product_sizes" ADD CONSTRAINT "product_sizes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "product"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "product" ADD CONSTRAINT "product_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "media"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "order_products" ADD CONSTRAINT "order_products_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "order_products" ADD CONSTRAINT "order_products_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "order"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 DROP TABLE "product_sizes";
DROP TABLE "product";
DROP TABLE "order_products";
DROP TABLE "order";`)
}
