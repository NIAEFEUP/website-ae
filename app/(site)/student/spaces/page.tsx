import { Metadata } from "next";
import SpacesPageContent from './pageContent';
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "Espaços",
  description: "Mapa Interativo para facilitar a tua experiência universitária: Espaços de Estudo, Alimentação, Alojamento e Transporte.",
};

const SpacesPage = async () => {

  const places = await (await getPayload({ config })).find({
    collection: 'place',
  });

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

  const placesFromPayload = places.docs;
  const mergedPlaces = placesFromPayload.concat(placesData);

  return (
    <section className="pb-20 pt-20 lg:pb-25 xl:pb-30">
      <SpacesPageContent places={mergedPlaces} />
    </section>
  );
}

export default SpacesPage;