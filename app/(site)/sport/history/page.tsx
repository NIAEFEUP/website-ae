import { Metadata } from "next";
import { Timeline } from "@/components/ui/timeline";
import SectionHeader from "@/components/Common/SectionHeader";
import { historyTimelineData } from "./historyTimelineData";


export const metadata: Metadata = {
  title: "History Page",
  description: "Explore a nossa História e Campeonatos",
};

const HistoryPage = () => {
  return (
       <section className="pt-20 pb-12 lg:pt-25 xl:pt-30">
       <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
      <SectionHeader
        headerInfo={{
          title: "História e Campeonatos",
          subtitle: "Desporto",
          description: `Desde o início da AEFEUP, que esta tem grande relevância naquilo que é o Desporto Universitário, tanto a nível local no Porto, como a nível nacional. Todos os resultados obtidos ao longo da época são divulgados na plataforma da FAP (www.desporto.fap.pt). Para além dos resultados serem divulgados na plataforma da FAP, existe uma conta no Instagram exclusivamente dedicado ao desporto na AEFEUP, onde são publicados tanto os horários do jogos, como os resultados e até os treinadores, visita aqui @desporto_aefeup.`,
        }}

      />        
      </div>

      <Timeline data={historyTimelineData} />
      </section>
  );
};


export default HistoryPage;
