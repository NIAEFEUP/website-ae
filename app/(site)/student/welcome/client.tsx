"use client";

import InstagramCarouselSection from "@/components/InstagramCarouselSection";
import { InformativeVideo } from "@/payload-types";

interface Props {
  informativeVideos: InformativeVideo[];
}

const WelcomeClientPage = ({ informativeVideos }: Props) => {
    return (
    <section className="pt-20">
      <InstagramCarouselSection
        informativeVideos={informativeVideos}
        title="Vídeos Informativos"
      />
    </section>
  );
};

export default WelcomeClientPage;

