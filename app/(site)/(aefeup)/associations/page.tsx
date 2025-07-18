import { Metadata } from "next";
import { getPayload } from 'payload'
import config from 'payload.config'
import AssociationsClientPage from "./client";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Núcleos e Associações",
  description: "Conhece o NIAEFEUP e os restantes Núcleos e Associações da FEUP.",
};

const AssociationsPage = async () => {

  const associations = await (await getPayload({ config })).find({
    collection: 'association',
    limit: 100,
  });

  return <AssociationsClientPage associations={associations.docs} />;
};

export default AssociationsPage;
