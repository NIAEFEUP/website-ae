"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import InstagramEmbed from "@/components/InstagramEmbed";
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
  const [isInstagramLoading, setIsInstagramLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // Watch for Instagram embeds to be processed
      const checkEmbeds = () => {
        const blockquotes = document.querySelectorAll('.instagram-media');
        const iframes = document.querySelectorAll('iframe[src*="instagram.com"]');

        // If we have iframes equal to blockquotes, embeds are loaded
        if (iframes.length >= blockquotes.length && blockquotes.length > 0) {
          setIsInstagramLoading(false);
          return;
        }

        // Keep checking every 500ms
        setTimeout(checkEmbeds, 500);
      };

      // Start checking after a brief delay to let Instagram script initialize
      setTimeout(checkEmbeds, 1000);
    };

    document.head.appendChild(script);
  }, []);

  return (
    <>
      {/* Single section with informativeVideos */}
      <section className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              title="Vídeos Informativos"
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl mt-10 px-2 sm:px-4 lg:px-8">
          {isInstagramLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-75"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-150"></div>
              </div>
              <p className="mt-4 text-gray-600">A carregar vídeos...</p>
            </div>
          )}
          <div className={isInstagramLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
            <Carousel
              opts={{
                align: "start",
                slidesToScroll: 1,
                containScroll: "trimSnaps",
                dragFree: false,
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 sm:-ml-2">
                {informativeVideos.map((video) => (
                  <CarouselItem key={video.id} className="pl-1 sm:pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="w-full h-full px-1 sm:px-2">
                      <InstagramEmbed
                        url={video.url}
                        title={video.title}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-1 sm:-left-2 top-1/2 -translate-y-1/2 h-8 w-8 z-10" />
              <CarouselNext className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 h-8 w-8 z-10" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeClientPage;

