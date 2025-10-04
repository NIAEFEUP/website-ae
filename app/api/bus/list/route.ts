import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query(
      `SELECT bus_id AS "busId", lat, lon, updated_at AS "timestamp" FROM live_bus_locations`
    );
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error('Error fetching bus list:', err);
    return NextResponse.json({ error: 'Failed to fetch bus locations' }, { status: 500 });
  }
}
