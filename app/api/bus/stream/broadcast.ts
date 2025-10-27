export type Client = {
  write: (data: string) => void;
  close: () => void;
  lastActive: number;
  keepaliveInterval?: NodeJS.Timeout;
};

// Use globalThis to store all connected clients across requests
export const getClients = (): Set<Client> => {
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
  const payload = `data: ${JSON.stringify(data)}\n\n`;
  const deadClients: Client[] = [];

  await Promise.all(
    Array.from(clients).map(async (client) => {
      try {
        await writeWithTimeout(client, payload);
      } catch (err) {
        // minimal logging
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
      // ignore
    }
    console.log('[SSE] Removed dead client. Remaining:', clients.size);
  });

  console.log('[SSE] Broadcast complete. Clients remaining:', clients.size);
}
