import { Metadata } from "next";
import Feature from "@/components/Features";
import servicesFeaturesData from './servicesFeaturesData';
import Info from "@/components/Info";



export const metadata: Metadata = {
  title: "Services Page",
  description: "This is Services Page",
};

const ServicesPage = () => {  
  return (
    <main>
      <Feature
      data={servicesFeaturesData}
      headerInfo={{
        title: "Serviços",
        subtitle: "Conheça as Nossas Ofertas",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula mollis nisi justo feugiat facilisis non.`,
      }}
    />
    <Info/>
    </main>
  );
}
export default ServicesPage;
    