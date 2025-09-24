"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import Text from "@/components/Text";
import InstagramEmbed from "@/components/InstagramEmbed";
import { InformativeVideo } from "@/payload-types";
import { sectionsData } from "./sectionsData";
import { useEffect } from "react";
interface Props {
  informativeVideos: InformativeVideo[];
  mentoringLinks: { url: string; title: string }[];
}

const WelcomeClientPage = ({ informativeVideos, mentoringLinks }: Props) => {
  const sections = sectionsData.map((section) => {
    if (section.id === 2) {
      return {
        ...section,
        buttons: mentoringLinks.map((link) => ({ url: link.url, label: link.title })),
      };
    }
    return section;
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          className={`overflow-hidden pb-20 ${section.id === 1 ? 'pt-25' : ''} lg:pb-25 xl:pb-30`}
        >
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <div className="animate_top mx-auto text-center">
              <SectionHeader
                title={section.title}
              />
            </div>
          </div>
          {section.id !== 1 && <Text sections={[{ ...section, title: undefined }]} />}
          {section.id === 1 && (
            <div className="flex gap-5 justify-center mt-10 flex-wrap">
              {informativeVideos.map((video) => (
                <InstagramEmbed
                  key={video.id}
                  url={video.url}
                  title={video.title}
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default WelcomeClientPage;

