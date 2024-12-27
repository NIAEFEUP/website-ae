import { Metadata } from "next";
import Feature from "@/components/Features";
import Info from "@/components/Info";
import FullScreenImage from "@/components/FullScreenImageProps";
import landingFeaturesData from "./landing/landingFeaturesData";
import Testimonial from "@/components/Testimonial";
import { landingInfoData } from "./landing/landingInfoData";

export const metadata: Metadata = {
  title: "AEFEUP",
  description: "Website da Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto.",
};

const Homepage = () => {
  return (
    <main>
      <FullScreenImage
        src="/images/landing/blog-04.png"
        alt="Landing Page Background"
        logoSrc="/images/logo/aefeup.png"
        logoAlt="AEFEUP Logo"
      />

      <Feature
        data = {landingFeaturesData}
        headerInfo={{
          title: "Welcome to AEFEUP!",
          subtitle: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
          description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula mollis nisi justo feugiat facilisis non. [what we offer]`,
        }}
      />
    
        <Info sections={landingInfoData} />

      <Testimonial></Testimonial>
    </main>
  );
};

export default Homepage;
