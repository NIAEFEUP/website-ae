import { Metadata } from "next";
import { Timeline } from "@/components/ui/timeline";
import SectionHeader from "@/components/Common/SectionHeader";
import { historyTimelineData } from "./historyTimelineData";
import Text from "@/components/Text";
import historyTextSections from "./historyTextSection";

export const metadata: Metadata = {
  title: "História e Troféus",
  description: "Descobre a história e os troféus da AEFEUP",
};

const HistoryPage = () => {
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
