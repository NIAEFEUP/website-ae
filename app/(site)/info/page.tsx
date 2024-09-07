import { Metadata } from "next";
import InfoPageContent from './pageContent';
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "Informações",
  description: "Informações e Oportunidades",
};

const InfoPage = async () => {
  const categories = await (await getPayload({ config })).find({
    collection: 'category',
  });

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <InfoPageContent categories={categories.docs} />
      </section>
    </>
  );
}

export default InfoPage;