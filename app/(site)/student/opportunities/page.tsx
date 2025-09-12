import { Metadata } from "next";
import OpportunitiesClientPage from './client';
import config from "payload.config";
import { getPayload } from "payload";

export const metadata: Metadata = {
    title: "Oportunidades",
    description: "Voluntariado e Formações – AEFEUP: Ações Sociais, Desenvolvimento Pessoal e Cursos Certificados.",
};

async function getOpportunities() {
  if (process.env.IS_BUILD) {
    return null;
  }
  const payload = await getPayload({ config });
  const opportunities = (await payload.find({
    collection: "opportunities",
    limit: 1,
  })).docs[0];
  return opportunities;
}

const OpportunitiesPage = async () => {
    const opportunities = await getOpportunities();
    return (
        <OpportunitiesClientPage opportunities={opportunities} />
    );
}

export default OpportunitiesPage;