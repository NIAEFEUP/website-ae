import { Metadata } from "next";
import Feature from "@/components/Features";
import motorsportFeaturesData from "./motorsportFeaturesData";
import Info from "@/components/Info";
import { motorsportInfoData } from "./motorsportInfoData";

export const metadata: Metadata = {
  title: "Motorsport Page",
  description: "Explore our Motorsport Offerings",
};

const MotorsportPage = () => {
  return (
    <main>
      <Feature
        data={motorsportFeaturesData}
        headerInfo={{
          title: "Motorsport",
          subtitle: "Discover Our Motorsport Services",
          description: `Dive into our exciting motorsport offerings, featuring top-notch experiences for motorsport enthusiasts.`,
        }}
      />
      <Info sections={motorsportInfoData} />
    </main>
  );
};

export default MotorsportPage;
