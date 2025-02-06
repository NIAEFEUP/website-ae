import { Metadata } from "next";
import Feature from "@/components/Features";
import servicesFeaturesData from './servicesFeaturesData';
import Info from "@/components/Info";
import { infoData } from "./servicesInfoData";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Informações sobre os serviços oferecidos pela AEFEUP, incluindo a Secretaria e Loja, Cafetaria e Reprografia. Detalhes sobre horários de atendimento e formas de contato.",
};

const ServicesPage = () => {
  return (
    <main>
      <Feature
        data={servicesFeaturesData}
        headerInfo={{
          title: "Serviços",
          subtitle: "Conhece as nossas ofertas",
          description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula mollis nisi justo feugiat facilisis non.`,
        }}
      />
      <Info sections={infoData} />
    </main>
  );
}
export default ServicesPage;
