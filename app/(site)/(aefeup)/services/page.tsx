import { Metadata } from "next";
import Feature from "@/components/Features";
import servicesFeaturesData from './servicesFeaturesData';
import Info from "@/components/Info";
import { infoData } from "./servicesInfoData";

export const dynamic = 'force-dynamic'

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
          description: `Temos à tua disposição vários serviços dos quais podes usufruir!`,
        }}
      />
      <Info sections={infoData} />
    </main>
  );
}
export default ServicesPage;
