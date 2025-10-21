"use client"

import SectionHeader from "@/components/Common/SectionHeader";
import { ArtistVideo, Media, Photobank, Place } from "@/payload-types";
import Text from "@/components/Text";
import { Instagram, MapPin } from "lucide-react";
import InstagramCarouselSection from "@/components/InstagramCarouselSection";
import EventComponent from "@/components/Event";
import { EventLink } from "@/types/eventType";
import dynamic from 'next/dynamic';
// load Map only on client to avoid Leaflet/window during SSR
const Map = dynamic(() => import("@/components/Map"), { ssr: false });
import { useEffect, useState, useRef } from 'react';

type Bus = {
  busId: string;
  lat: number;
  lon: number;
  timestamp: string;
};

interface Props {
  artistsVideos: ArtistVideo[];
  photobank: Photobank | null;
}
const ArraialClientPage = ({ artistsVideos, photobank }: Props) => {
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);
  const arraialPlaces: Place[] = [
    {
      id: 999,
      name: "Arraial D'Engenharia",
      category: "Festival",
      position: { lat: 41.198839, lng: -8.688565 },
    } as unknown as Place
  ];

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
      .catch(() => { });

    return () => {
      cancelled = true;
      if (evtSourceRef.current) evtSourceRef.current.close();
      if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
    };
  }, []);


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
              </a>  </p>,
            <p className="text-center" key={2}>
              E não te esqueças de trocar o teu passe por pulseira na secretaria da AEFEUP!
            </p>
          ]
        }
      ]} />

      <section className="my-8">
        <div className="mx-auto w-full max-w-6xl h-80 md:h-96 rounded-md overflow-hidden shadow-sm">
          <Map
            places={arraialPlaces}
            selected={selectedPlaceId}
            onChange={(id) => setSelectedPlaceId(id)}
          />
        </div>
      </section>

      <InstagramCarouselSection
        informativeVideos={artistsVideos}
        title="Artistas"
      />
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

      <section className="p-8 font-sans">
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
      </section>
    </main>
  );
}
export default ArraialClientPage;
