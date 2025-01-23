import { Metadata } from "next";
import SpacesPageContent from './pageContent';
import { getPayload } from 'payload'
import config from 'payload.config'
import { Place } from '@/payload-types';

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
  })).docs as Place[]).sort((a,b) =>
    haversineDistance(refLat, refLon, a.position.lat, a.position.lng) -
    haversineDistance(refLat, refLon, b.position.lat, b.position.lng)
  );

  return (
    <section className="pb-20 pt-20 lg:pb-25 xl:pb-30">
      <SpacesPageContent places={places} />
    </section>
  );
}

export default SpacesPage;