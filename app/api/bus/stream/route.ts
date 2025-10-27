import { NextRequest } from 'next/server';

type Client = {
  write: (data: string) => void;
  close: () => void;
  lastActive: number;
  keepaliveInterval?: NodeJS.Timeout;
};

// Use globalThis to store all connected clients across requests
const getClients = (): Set<Client> => {
  if (!(globalThis as any).__sseClients) {
    (globalThis as any).__sseClients = new Set<Client>();
  }
  return (globalThis as any).__sseClients;
};

// Sends data to a client, but fails if it takes longer than timeoutMs (default 3s).
// If writing fails or times out, the client is considered dead.
function writeWithTimeout(client: Client, data: string, timeoutMs = 3000): Promise<void> {
  return new Promise((resolve, reject) => {
    let done = false;
    const timer = setTimeout(() => {
      if (!done) {
        done = true;
        reject(new Error('Client write timeout'));
      }
    }, timeoutMs);

    try {
      client.write(data);
      if (!done) {
        done = true;
        clearTimeout(timer);
        client.lastActive = Date.now();
        resolve();
      }
    } catch (err) {
      if (!done) {
        done = true;
        clearTimeout(timer);
        reject(err);
      }
    }
  });
}

// Broadcast bus updates to all clients in parallel
// Removes and cleans up any clients that fail to receive the update.
export async function broadcastBusUpdate(data: any) {
  const clients = getClients();
  console.log('[SSE] Broadcasting bus update:', data, `to ${clients.size} clients`);
  console.log('[SSE] Client details:', Array.from(clients).map(c => ({ lastActive: c.lastActive })));
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  const deadClients: Client[] = [];

  await Promise.all(
    Array.from(clients).map(async (client) => {
      try {
        await writeWithTimeout(client, payload);
      } catch (err) {
        console.error('[SSE] Failed to write to client:', err);
        deadClients.push(client);
      }
    })
  );

  deadClients.forEach((client) => {
    if (client.keepaliveInterval) {
      clearInterval(client.keepaliveInterval);
    }
    clients.delete(client);
    try {
      client.close();
    } catch (err) {
      // Already closed
    }
    console.log('[SSE] Removed dead client. Remaining:', clients.size);
  });
}

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