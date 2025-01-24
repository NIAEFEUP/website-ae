import { Metadata } from "next";
import Features from "@/components/Features";
import Info from "@/components/Info";
import FullScreenImage from "@/components/FullScreenImageProps";
import landingFeaturesData from "./landing/landingFeaturesData";
import { landingInfoData } from "./landing/landingInfoData";
import config from "payload.config"
import { getPayload } from "payload"
import TestimonialSection from "@/components/TestimonialSection";
import Sponsors from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "AEFEUP",
  description: "Website da Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto.",
};


const Homepage = async () => {

  const payload = await getPayload({ config });
  const testimonials = (await payload.find({
    collection: "testimonial",
  })).docs
  const sponsors = await (await getPayload({ config })).find({
    collection: 'sponsor',
  });

  return (
    <main>
      <FullScreenImage
        src="/images/landing/blog-04.png"
        alt="Landing Page Background"
        logoSrc="/images/logo/aefeup.png"
        logoAlt="AEFEUP Logo"
      />

      <Features
        data={landingFeaturesData}
        headerInfo={{
          title: "Welcome to AEFEUP!",
          subtitle: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
          description: `Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula mollis nisi justo feugiat facilisis non. [what we offer]`,
        }}
      />

      <Info sections={landingInfoData} />

      <TestimonialSection testimonialData={testimonials} />

      <Sponsors sponsors={sponsors.docs.filter(sponsor => sponsor.name)} />
    </main>
  );
};

export default Homepage;
