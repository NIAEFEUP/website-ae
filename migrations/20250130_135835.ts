import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
await payload.db.drizzle.execute(sql`
 ALTER TYPE "enum_person_socials_type" ADD VALUE 'email';`)
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  // Migration code
}
