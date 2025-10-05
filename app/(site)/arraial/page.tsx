'use client';

import { useEffect, useState, useRef } from 'react';

type Bus = {
  busId: string;
  lat: number;
  lon: number;
  timestamp: string;
};

export default function ArraialPage() {
  const [buses, setBuses] = useState<Bus[]>([]);
  const evtSourceRef = useRef<EventSource | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/bus/list')
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setBuses((prev) => {
          if (prev.length === 0) {
            if (Array.isArray(data)) return data;
            if (Array.isArray(data.buses)) return data.buses;
          }
          return prev;
        });

        function connectSSE() {
          if (evtSourceRef.current) evtSourceRef.current.close();
          const evtSource = new EventSource('/api/bus/stream');
          evtSourceRef.current = evtSource;

          evtSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'connected') return;
            setBuses((prev) => {
              const index = prev.findIndex((b) => b.busId === data.busId);
              if (index >= 0) {
                const updated = [...prev];
                updated[index] = { ...updated[index], ...data };
                return updated;
              } else {
                return [...prev, data];
              }
            });
          };

          evtSource.onerror = () => {
            evtSource.close();
            reconnectTimeoutRef.current = setTimeout(connectSSE, 2000);
          };
        }

        connectSSE();
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      if (evtSourceRef.current) evtSourceRef.current.close();
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
    };
  }, []);

  return (
    <main className="p-8 font-sans">
      <h1 className="mb-4 text-2xl font-bold">Live Bus Locations</h1>
      {buses.length === 0 ? (
        <div className="text-gray-500">No buses currently tracked.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full max-w-2xl border border-gray-300 rounded-lg bg-white shadow">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Bus ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Latitude</th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Longitude</th>
                <th className="border border-gray-300 px-4 py-2 text-left bg-gray-100">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.busId} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{bus.busId}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.lat}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.lon}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(bus.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}