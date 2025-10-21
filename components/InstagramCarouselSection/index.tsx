import React, { useEffect, useRef, useState } from "react";
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

interface Props {
  informativeVideos: InformativeVideo[];
  title?: string;
}

let instagramLoader: Promise<void> | null = null;

function loadInstagramScriptOnce(): Promise<void> {
  if (instagramLoader) return instagramLoader;

  instagramLoader = new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }

    // If already present and instgrm is ready resolve immediately
    if ((window as any).instgrm && (window as any).instgrm.Embeds) {
      resolve();
      return;
    }

    const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      // also try to resolve quickly if instgrm is already ready
      setTimeout(() => resolve(), 500);
      return;
    }

    const s = document.createElement("script");
    s.src = "https://www.instagram.com/embed.js";
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    document.head.appendChild(s);
  });

  return instagramLoader;
}

const InstagramCarouselSection: React.FC<Props> = ({ informativeVideos, title = "Vídeos Informativos" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkEmbedsInContainer = () => {
      const container = containerRef.current;
      if (!container) return false;

      const blockquotes = container.querySelectorAll('blockquote[data-instgrm-permalink]');


      if (blockquotes.length === 0) return true;

      return false;
    };

    const observer = new MutationObserver(() => {
      if (!mounted) return;
      if (checkEmbedsInContainer()) {
        setIsLoading(false);
      }
    });

    const container = containerRef.current;
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    loadInstagramScriptOnce().then(() => {
      try {
        (window as any).instgrm?.Embeds?.process?.();
      } catch { }
    });

    return () => {
      mounted = false;
      observer.disconnect();
    };
  }, [informativeVideos]);


  return (
    <section className="overflow-hidden pb-20 py-5 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader title={title} />
        </div>
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-6xl mt-10 px-2 sm:px-4 lg:px-8">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-75"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-150"></div>
            </div>
            <p className="mt-4 text-gray-600">A carregar vídeos...</p>
          </div>
        )}
        <div
          className={`transition-opacity duration-1000 ease-out ${isLoading ? "opacity-0" : "opacity-100"
            }`}
        >
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
                <CarouselItem
                  key={video.id}
                  className="pl-1 sm:pl-2 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="w-full h-full px-1 sm:px-2">
                    <InstagramEmbed url={video.url} title={video.title} />
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
  );
};

export default InstagramCarouselSection;
