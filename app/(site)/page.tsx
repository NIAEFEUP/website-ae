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

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "AEFEUP",
  description: "A AEFEUP é mais do que uma Associação de Estudantes – é um símbolo de inovação, união e defesa dos interesses estudantis, representando com orgulho a maior comunidade académica do Porto. Inspirada pelos valores da Engenharia, promove a formação integral dos estudantes, desafiando o presente e moldando o futuro."
};

async function getTestimonials() {
  if(process.env.IS_BUILD) {
    console.log('skipping getTestimonials DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const testimonials = (await payload.find({
    collection: "testimonial",
  })).docs

  return testimonials
}

async function getSponsors() {
  if(process.env.IS_BUILD) {
    console.log('skipping getSponsors DB call during build')
    return []
  }

  const sponsors = await (await getPayload({ config })).find({
    collection: 'sponsor',
  });

  return sponsors.docs
}


const Homepage = async () => {
  const testimonials = await getTestimonials()
  const sponsors = await getSponsors()

  return (
    <main>
      <FullScreenImage
        src="/images/landing/aefeup.jpg"
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

      <Sponsors sponsors={sponsors.filter(sponsor => sponsor.name)} />
    </main>
  );
};

export default Homepage;
