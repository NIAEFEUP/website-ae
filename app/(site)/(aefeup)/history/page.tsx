import { Metadata } from "next";
import AEFEUPHistoryClientPage from "./client";
import { getPayload } from 'payload'
import config from 'payload.config'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "História da AEFEUP",
  description: "Conhece a história da AEFEUP. A AEFEUP, fundada em 15 de março de 1984, representa os estudantes da FEUP e promove atividades culturais, desportivas e sociais. ",
};

const AEFEUPHistoryPage = async () => {

  const presidents = await (await getPayload({ config })).find({
    collection: 'president',
    limit: 100
  });

  return <AEFEUPHistoryClientPage presidents={presidents.docs} />;
}
export default AEFEUPHistoryPage;
