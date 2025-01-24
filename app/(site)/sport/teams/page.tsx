import { Metadata } from "next";
import LineupsSlider from "./LineupsSlider";
import { getPayload } from 'payload'
import config from 'payload.config'
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Seleções",
  description: "Equipas de desporto da AEFEUP.",
};

const SportsPage = async () => {

  const teams = await (await getPayload({ config })).find({
    collection: 'sportsTeam',
  });

  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <section>
        {teams.docs.length > 0 ?
          <LineupsSlider teams={teams.docs} />
          :
          <SectionHeader
            title="Desporto"
          />
        }
      </section>
    </main>
  );
};

export default SportsPage;
