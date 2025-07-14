import { Metadata } from "next";
import SpacesPageContent from './pageContent';
import { getPayload } from 'payload'
import config from 'payload.config'
import { Place } from '@/payload-types';

export const revalidate = 10
export const dynamicParams = true
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Espaços",
  description: "Mapa Interativo para facilitar a tua experiência universitária: Espaços de Estudo, Alimentação, Alojamento e Transporte.",
};

// Sanctuary coordinates
const refLat = 41.177565104264765;
const refLon = -8.595967114164843;

// Earth radius in meters
const R = 6371e3;

// Haversine formula to calculate distance
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const phi1 = lat1 * Math.PI / 180;
  const phi2 = lat2 * Math.PI / 180;
  const deltaPhi = (lat2 - lat1) * Math.PI / 180;
  const deltaLambda = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) *
    Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

const SpacesPage = async () => {

  const places = ((await (await getPayload({ config })).find({
    collection: 'place',
  })).docs as Place[]);

  const establishments = await fetch("http://ementas.sas.up.pt:3000/api/establishments").then((res) => res.json());

  // Converting establishments to places
  const placesData = establishments.map((establishment) => ({
    id: "up_menus_" + establishment.id,
    name: establishment.name_pt,
    schedule: establishment.schedules.map((schedule) => ({
      day: "",
      hours: schedule.startHour + " - " + schedule.finishHour,
    })),
    position: {
      lat: establishment.address.coordinates.split(",")[0],
      lng: establishment.address.coordinates.split(",")[1],
    },
    category: 'Alimentação',
  }));

  const mergedPlaces = places.concat(placesData).sort((a, b) =>
    haversineDistance(refLat, refLon, a.position.lat, a.position.lng) -
    haversineDistance(refLat, refLon, b.position.lat, b.position.lng)
  );

  return (
    <section className="pb-20 pt-15 lg:pb-25 xl:pb-30">
      <SpacesPageContent places={mergedPlaces} />
    </section>
  );
}

export default SpacesPage;
