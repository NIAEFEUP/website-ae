import { Metadata } from "next";
import Feature from "@/components/Features";


export const metadata: Metadata = {
  title: "Services Page",
  description: "This is Services Page",
};

const ServicesPage = () => {  
  return (
    <main>
      <Feature/>
    </main>
  );
}
export default ServicesPage;
