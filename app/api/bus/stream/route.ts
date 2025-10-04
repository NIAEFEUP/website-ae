import { NextRequest } from 'next/server';

type Client = {
  write: (data: string) => void;
  close: () => void;
  lastActive: number;
};

const clients = new Set<Client>();

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
export async function broadcastBusUpdate(data: any) {
  console.log('[SSE] Broadcasting bus update:', data, `to ${clients.size} clients`);
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  const deadClients: Client[] = [];

  await Promise.all(
    Array.from(clients).map(async (client) => {
      try {
        await writeWithTimeout(client, payload);
      } catch {
        deadClients.push(client);
      }
    })
  );

  deadClients.forEach((client) => {
    clients.delete(client);
    client.close();
    //console.log('[SSE] Removed dead client. Remaining:', clients.size);
  });
}

export async function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();

  function write(data: string) {
    writer.write(new TextEncoder().encode(data));
  }
  function close() {
    writer.close();
  }

  const client: Client = { write, close, lastActive: Date.now() };
  clients.add(client);
  //console.log('[SSE] Client connected. Total clients:', clients.size);

  // Send initial connection message
  write(`data: ${JSON.stringify({ type: 'connected' })}\n\n`);

  // Remove client on abort
  req.signal.addEventListener('abort', () => {
    clients.delete(client);
    close();
    //console.log('[SSE] Client disconnected. Total clients:', clients.size);
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
