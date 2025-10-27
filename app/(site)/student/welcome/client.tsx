"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramCarouselSection from "@/components/InstagramCarouselSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { InformativeVideo } from "@/payload-types";
import { useEffect, useState } from "react";

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

