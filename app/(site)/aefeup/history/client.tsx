"use client"

import SectionHeader from "@/components/Common/SectionHeader";
import { President } from "@/payload-types";

interface Props {
  history_text: string;
  presidents: President[];
}

const AEFEUPHistoryClientPage = ({ history_text, presidents }: Props) => {
  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <SectionHeader
        headerInfo={{
          title: "História",
          subtitle: "",
          description: history_text
        }}
      />

      <section className="py-5">
        <SectionHeader
          headerInfo={{
            title: "Presidentes",
            subtitle: "",
            description: ""
          }}
        />
        {/* TODO: (thePeras) Nice fade transition here with delay in each president */}
        {presidents.map((president) => (
          <div key={president.id}>
            <h3>{president.name}</h3>
            <p>{president.start_year} - {president.end_year}</p>
          </div>
        ))}
      </section>

    </main>
  );
}
export default AEFEUPHistoryClientPage;
