"use client"

import SectionHeader from "@/components/Common/SectionHeader";
import { ArtistVideo, Media, Photobank } from "@/payload-types";
import Text from "@/components/Text";
import { Instagram, MapPin, PartyPopper } from "lucide-react";
import InstagramCarouselSection from "@/components/InstagramCarouselSection";
import EventComponent from "@/components/Event";
import { EventLink } from "@/types/eventType";
import dynamic from 'next/dynamic';
const BusMap = dynamic(() => import("@/components/BusMap"), { ssr: false });
const BusSchedule = dynamic(() => import("@/components/BusSchedule"), { ssr: false });
import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import type { BusLocation, BusAccount, BusScheduleEntry, EnrichedBusData } from "@/types/bus";
import LineupTimeline from "@/components/LineupTimeline";
import { lineupData } from "./lineupData";

interface Props {
  artistsVideos: ArtistVideo[];
  photobank: Photobank | null;
  busAccounts: BusAccount[];
  busSchedules: BusScheduleEntry[];
}

const ArraialClientPage = ({ artistsVideos, photobank, busAccounts, busSchedules }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedBusId, setSelectedBusId] = useState<string | null>(null);

  const [busLocations, setBusLocations] = useState<BusLocation[]>([]);
  const evtSourceRef = useRef<EventSource | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const heartbeatTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const lastMessageTimeRef = useRef<number>(Date.now());

  // Merge bus locations with bus account data
  const enrichedBuses: EnrichedBusData[] = useMemo(() => {
    return busLocations.map(location => {
      const account = busAccounts.find(acc => acc.busId === parseInt(location.busId));
      return {
        ...location,
        name: account?.name || `Autocarro ${location.busId}`,
        line: account?.line || 'Desconhecida',
      };
    });
  }, [busLocations, busAccounts]);

  // Get list of active bus IDs
  const activeBusIds = useMemo(() => {
    return enrichedBuses.map(bus => String(bus.busId));
  }, [enrichedBuses]);

  // Handle bus selection from schedule
  const handleScheduleClick = useCallback((busId: string | null) => {
    setSelectedBusId(busId);
    if (busId) {
      const mapSection = document.getElementById('live-map-section');
      mapSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  // Handle bus click from map
  const handleBusClick = useCallback((busId: string) => {
    setSelectedBusId(prev => prev === busId ? null : busId);
  }, []);

  // Handle legend click
  const handleLegendClick = useCallback((id: string) => {
    setSelectedBusId(prev => prev === id ? null : id);
    const mapSection = document.getElementById('live-map-section');
    mapSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  // Cleanup function for SSE and timers
  const cleanup = useCallback(() => {
    if (evtSourceRef.current) {
      evtSourceRef.current.close();
      evtSourceRef.current = null;
    }
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    if (heartbeatTimeoutRef.current) {
      clearTimeout(heartbeatTimeoutRef.current);
      heartbeatTimeoutRef.current = null;
    }
  }, []);

  // Function to connect to SSE
  const connectSSE = useCallback(() => {
    cleanup();
    const evtSource = new EventSource('/api/bus/stream');
    evtSourceRef.current = evtSource;
    lastMessageTimeRef.current = Date.now();

    // Set up heartbeat check
    const startHeartbeatCheck = () => {
      if (heartbeatTimeoutRef.current) {
        clearTimeout(heartbeatTimeoutRef.current);
      }
      heartbeatTimeoutRef.current = setTimeout(() => {
        const timeSinceLastMessage = Date.now() - lastMessageTimeRef.current;
        // If no message in 90 seconds, assume connection is dead
        if (timeSinceLastMessage > 90000) {
          setIsConnected(false);
          cleanup();
          scheduleReconnect();
        } else {
          // Check again in 30 seconds
          startHeartbeatCheck();
        }
      }, 30000);
    };

    evtSource.onopen = () => {
      setIsConnected(true);
      reconnectAttemptsRef.current = 0;
      lastMessageTimeRef.current = Date.now();
      startHeartbeatCheck();
    };

    evtSource.onmessage = (event) => {
      lastMessageTimeRef.current = Date.now();
      
      const data = JSON.parse(event.data);
      if (data.type === 'connected') {
        return;
      }

      setBusLocations((prev) => {
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

    evtSource.onerror = (error) => {
      setIsConnected(false);
      cleanup();
      scheduleReconnect();
    };
  }, [cleanup]);

  // Schedule a reconnection with exponential backoff
  const scheduleReconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) return;

    reconnectAttemptsRef.current++;
    // Exponential backoff: 2s, 4s, 8s, 16s, max 30s
    const delay = Math.min(2000 * Math.pow(2, reconnectAttemptsRef.current - 1), 30000);
    
    reconnectTimeoutRef.current = setTimeout(() => {
      reconnectTimeoutRef.current = null;
      // Check if tab is visible before reconnecting
      if (!document.hidden) {
        connectSSE();
      }
    }, delay);
  }, [connectSSE]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const evtSource = evtSourceRef.current;
        
        // Check if we need to reconnect
        if (!evtSource || evtSource.readyState !== EventSource.OPEN) {
          connectSSE();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [connectSSE]);

  // Periodic connection health check
  useEffect(() => {
    const healthCheckInterval = setInterval(() => {
      const evtSource = evtSourceRef.current;
      const timeSinceLastMessage = Date.now() - lastMessageTimeRef.current;
      
      // If tab is visible and either not connected or no message in 90s, reconnect
      if (!document.hidden) {
        if (!evtSource || evtSource.readyState !== EventSource.OPEN) {
          connectSSE();
        } else if (timeSinceLastMessage > 90000) {
          cleanup();
          connectSSE();
        }
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(healthCheckInterval);
  }, [connectSSE, cleanup]);

  // Initial data fetch and SSE connection
  useEffect(() => {
    let cancelled = false;

    fetch('/api/bus/list')
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        setBusLocations((prev) => {
          if (prev.length === 0) {
            if (Array.isArray(data)) return data;
            if (Array.isArray(data.buses)) return data.buses;
          }
          return prev;
        });

        // Connect to SSE after initial data load
        connectSSE();
      })
      .catch((err) => {
        console.error('[Bus] Failed to fetch initial bus list:', err);
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [connectSSE, cleanup]);

  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <SectionHeader
        title="Arraial D'Engenharia 2025"
        subtitle={
          <>
            29, 30 e 31 outubro
            <br />
            <a
              href="https://maps.app.goo.gl/KMc4yd6Ufjs6hHgYA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline inline-flex items-center gap-1"
            >
              <MapPin className="w-4 h-4 inline-block mb-0.5" />
              Exponor
            </a>
          </>
        }
      />

      <div className="flex justify-center">
        <a
          href="https://www.instagram.com/arraialdengenharia/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Arraial D'Engenharia"
          className="inline-flex items-center justify-center rounded-full w-10 h-10"
        >
          <Instagram className="w-6 h-6 hover:text-black" />
        </a>
      </div>

      <Text sections={[
        {
          id: 1,
          text: [
            <p className="text-center" key={1}>
              A maior festa de receção aos novos estudantes está quase a começar, e tu não vais querer perder! Compra já os teus bilhetes no site da BOL ou na secretaria da AEFEUP: <a
                href="https://aefeup.bol.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                aefeup.bol.pt
              </a>
            </p>,
            <p className="text-center" key={2}>
              E não te esqueças de trocar o teu passe por pulseira na secretaria da AEFEUP!
            </p>
          ]
        }
      ]} />

      <section className="mx-auto w-full max-w-6xl px-4 my-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Mapa em Tempo Real</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {/* Bus lines legend */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-semibold mb-2 text-gray-700">Autocarros Ativos</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0063EC] inline-block border-2 border-white"></span>
                    <span>Hospital São João ({enrichedBuses.filter(b => b.line === 'HSJ').length})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#9D2F21] inline-block border-2 border-white"></span>
                    <span>Baixa do Porto ({enrichedBuses.filter(b => b.line === 'BXP').length})</span>
                  </div>
                </div>
              </div>

              {/* Stops and festival legend */}
              <div className="bg-gray-50 rounded-lg p-3">
                <h3 className="font-semibold mb-2 text-gray-700">Paragens & Festival</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleLegendClick('FESTIVAL')}
                    className={`flex items-center gap-2 w-full text-left p-2 rounded transition-colors ${
                      selectedBusId === 'FESTIVAL'
                        ? 'bg-pink-100 ring-2 ring-pink-500'
                        : 'hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 shrink-0">
                      <PartyPopper className="w-4 h-4 text-white" />
                    </div>
                    <span>Arraial D'Engenharia</span>
                  </button>
                  <button
                    onClick={() => handleLegendClick('HSJ')}
                    className={`flex items-center gap-2 w-full text-left p-2 rounded transition-colors ${
                      selectedBusId === 'HSJ'
                        ? 'bg-blue-100 ring-2 ring-[#0063EC]'
                        : 'hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 border-2 border-white shadow-md shrink-0"
                      style={{
                        borderRadius: '50% 50% 50% 0',
                        transform: 'rotate(-45deg)',
                        background: '#0063EC',
                      }}
                    >
                      <span
                        className="text-white font-bold text-[12px]"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        HSJ
                      </span>
                    </div>
                    <span>Hospital São João</span>
                  </button>
                  <button
                    onClick={() => handleLegendClick('EXP')}
                    className={`flex items-center gap-2 w-full text-left p-2 rounded transition-colors ${
                      selectedBusId === 'EXP'
                        ? 'bg-emerald-100 ring-2 ring-emerald-500'
                        : 'hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 border-2 border-white shadow-md shrink-0"
                      style={{
                        borderRadius: '50% 50% 50% 0',
                        transform: 'rotate(-45deg)',
                        background: '#10b981',
                      }}
                    >
                      <span
                        className="text-white font-bold text-[12px]"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        EXP
                      </span>
                    </div>
                    <span>Exponor</span>
                  </button>
                  <button
                    onClick={() => handleLegendClick('BXP')}
                    className={`flex items-center gap-2 w-full text-left p-2 rounded transition-colors ${
                      selectedBusId === 'BXP'
                        ? 'bg-red-100 ring-2 ring-[#9D2F21]'
                        : 'hover:bg-gray-100 active:bg-gray-200'
                    }`}
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 border-2 border-white shadow-md shrink-0"
                      style={{
                        borderRadius: '50% 50% 50% 0',
                        transform: 'rotate(-45deg)',
                        background: '#9D2F21',
                      }}
                    >
                      <span
                        className="text-white font-bold text-[12px]"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        BXP
                      </span>
                    </div>
                    <span>Baixa do Porto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            id="live-map-section"
            className="h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <BusMap
              buses={enrichedBuses}
              isConnected={isConnected}
              selectedBusId={selectedBusId}
              onBusClick={handleBusClick}
              showStops={true}
              showFestival={true}
            />
          </div>

          {/* Bus Schedule */}
          <div>
            <BusSchedule
              schedules={busSchedules}
              activeBuses={activeBusIds}
              selectedBusId={selectedBusId}
              onScheduleClick={handleScheduleClick}
            />
          </div>
        </div>
      </section>

      <InstagramCarouselSection
        informativeVideos={artistsVideos}
        title="Artistas"
      />

      <section className="pt-12 pb-12">
        <LineupTimeline data={lineupData} />
      </section>

      {photobank && photobank.active && (
        <EventComponent
          eventData={{
            eventId: 1,
            eventType: "",
            eventTitle: "Banco de Fotografias",
            eventContent: photobank.description ?? "Os melhores registos da tua noite já estão disponíveis!",
            eventImages: (photobank.images ?? []) as Media[],
            eventLinks: (photobank.links ?? []) as EventLink[],
          }}
        />
      )}

    </main>
  );
}

export default ArraialClientPage;