import { Metadata } from "next";
import Feature from "@/components/Features";
import motorsportFeaturesData from "./motorsportFeaturesData";
import Info from "@/components/Info";
import { motorsportInfoData } from "./motorsportInfoData";

export const metadata: Metadata = {
  title: "Motorsport",
  description: "Na AEFEUP, os nossos engenheiros não só pensam em velocidade, como a fazem acontecer! Com a Moto Student FEUP e a Formula Student FEUP, estamos a projetar motos elétricas e carros de competição que vão mais longe, mais rápido e com mais inovação.",
};

const MotorsportPage = () => {
  return (
    <main>
      <Feature
        data={motorsportFeaturesData}
        headerInfo={{
          title: "Motorsport",
          subtitle: "As nossas equipas",
          description: 'Explora as nossas equipas do mundo do desporto motorizado, projetos para verdadeiros entusiastas.',
        }}
      />
      <Info sections={motorsportInfoData} />
    </main>
  );
};

export default MotorsportPage;
