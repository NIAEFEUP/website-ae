import { Metadata } from "next";
import LineupsSlider from "./LineupsSlider";
import { getPayload } from 'payload'
import config from 'payload.config'

export const metadata: Metadata = {
  title: "Desporto",
  description: "",
};

const SportsPage = async () => {

  const teams = await (await getPayload({ config })).find({
    collection: 'sports-team',
  });

  return (
    <>
      <section>
        <LineupsSlider teams={teams.docs} />
      </section>
    </>
  );
};

export default SportsPage;
