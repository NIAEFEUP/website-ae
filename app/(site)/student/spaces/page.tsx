import { Metadata } from "next";
import SpacesPageContent from './pageContent';
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "Espaços",
  description: "",
};

const SpacesPage = async () => {

  const places = await (await getPayload({ config })).find({
    collection: 'place',
  });

  return (
    <>
      <section className="pb-20 pt-20 lg:pb-25 xl:pb-30">
        <SpacesPageContent places={places.docs}/>
      </section>
    </>
  );
}

export default SpacesPage;