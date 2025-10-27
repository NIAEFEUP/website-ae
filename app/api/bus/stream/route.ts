import { NextRequest } from 'next/server';
import { getClients, type Client } from './broadcast';

export async function GET(req: NextRequest) {
  const clients = getClients();
  
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  function write(data: string) {
    try {
      writer.write(encoder.encode(data));
    } catch (err) {
      console.error('[SSE] Write error:', err);
      throw err;
    }
  }

  function close() {
    try {
      writer.close();
    } catch (err) {
      // Already closed
    }
  }

  const client: Client = { 
    write, 
    close, 
    lastActive: Date.now() 
  };

  clients.add(client);
  console.log('[SSE] Client connected. Total clients:', clients.size);

  // Send initial connection message
  try {
    write(`data: ${JSON.stringify({ type: 'connected' })}\n\n`);
  } catch (err) {
    console.error('[SSE] Failed to send initial message:', err);
    clients.delete(client);
    close();
    return new Response('Connection failed', { status: 500 });
  }

  // Send keepalive comments every 15 seconds to prevent connection timeout
  client.keepaliveInterval = setInterval(() => {
    try {
      write(`: keepalive ${Date.now()}\n\n`);
    } catch (err) {
      console.error('[SSE] Keepalive failed, cleaning up client:', err);
      if (client.keepaliveInterval) {
        clearInterval(client.keepaliveInterval);
      }
      clients.delete(client);
      close();
    }
  }, 15000);

  // Clean up on abort
  const cleanup = () => {
    if (client.keepaliveInterval) {
      clearInterval(client.keepaliveInterval);
    }
    clients.delete(client);
    close();
    console.log('[SSE] Client disconnected. Total clients:', clients.size);
  };

  req.signal.addEventListener('abort', cleanup);

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no', // Disable buffering in nginx
    },
  });
}