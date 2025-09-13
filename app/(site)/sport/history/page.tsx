import { Metadata } from "next";
import { Timeline } from "@/components/ui/timeline";
import SectionHeader from "@/components/Common/SectionHeader";
import { getPayload } from "payload";
import config from "payload.config";
import SportHistoryTable from "@/components/SportHistoryTable";
import Text from "@/components/Text";
import historyTextSections from "./historyTextSection";

export const metadata: Metadata = {
  title: "História e Troféus",
  description: "Descobre a história e os troféus da AEFEUP",
};

const HistoryPage = async () => {
  const payload = await getPayload({ config });
  const trophiesData = await payload.find({ collection: "trophies"});

  const historyTimelineData = trophiesData.docs.map((yearData: any) => ({
    title: yearData.year,
    content: (
      <SportHistoryTable
        data={yearData.trophies.map((trophy: any) => ({
          label: trophy.competition?.name || "",
          value: trophy.sportsTeam?.sport_name || "",
          classification: trophy.standing?.name || "",
        }))}
      />
    ),
  }));

  return (
    <section className="pt-20 pb-12 lg:pt-25 xl:pt-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader title="História e Troféus" />
        <Text sections={historyTextSections} />
      </div>
      <Timeline data={historyTimelineData} />
    </section>
  );
};

export default HistoryPage;
