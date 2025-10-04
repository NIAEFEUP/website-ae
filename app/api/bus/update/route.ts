import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';

// Initialize Postgres pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Process Payload secret for JWT verification
const JWT_SECRET = crypto
  .createHash('sha256')
  .update(process.env.PAYLOAD_SECRET || '')
  .digest('hex')
  .slice(0, 32);

// POST handler
export async function POST(req: NextRequest) {
  try {
    // Check Authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Missing or invalid Authorization header' }, { status: 401 });
    }
    const token = authHeader.split(' ')[1];

    // Verify JWT (Payload)
    let jwtPayload: any;
    try {
      // Verify using jsonwebtoken and Payload secret
      jwtPayload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Extract busId
    const busId = jwtPayload?.busId || jwtPayload?.id;
    if (!busId) {
      return NextResponse.json({ error: 'Invalid token payload: missing busId' }, { status: 401 });
    }

    // Parse and validate input
    const body = await req.json();
    const { lat, lon } = body;

    if (
      typeof lat !== 'number' ||
      typeof lon !== 'number' ||
      !isFinite(lat) ||
      !isFinite(lon) ||
      lat < -90 || lat > 90 ||
      lon < -180 || lon > 180
    ) {
      return NextResponse.json({ error: 'Invalid lat/lon values' }, { status: 400 });
    }

    // UPSERT location into Postgres
    await pool.query(
      `
      INSERT INTO live_bus_locations (bus_id, lat, lon, updated_at)
      VALUES ($1, $2, $3, NOW())
      ON CONFLICT (bus_id)
      DO UPDATE SET lat = EXCLUDED.lat, lon = EXCLUDED.lon, updated_at = NOW()
      `,
      [busId, lat, lon]
    );

    return NextResponse.json({ success: true, message: 'Bus location updated' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
