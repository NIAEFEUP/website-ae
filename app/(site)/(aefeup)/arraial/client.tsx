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
import { useState } from "react";

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
    </main>
  );
}
export default ArraialClientPage;
