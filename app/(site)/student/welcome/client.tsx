"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import Text from "@/components/Text";
import { Video } from "@/payload-types";
import { sectionsData } from "./sectionsData";

interface Props {
  videos: Video[];
}

const WelcomeClientPage = ({ videos }: Props) => {
  return (
    <>
      {sectionsData.map((section) => (
        <section
          key={section.id}
          className="overflow-hidden pb-20 pt-25 lg:pb-25 xl:pb-30"
        >
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <div className="animate_top mx-auto text-center">
              <SectionHeader
                headerInfo={{
                  title: section.title,
                  subtitle: section.subtitle,
                  description: "",
                }}
              />
            </div>
          </div>
          {section.id === 2 && videos.length === 0 && (
            <Text sections={[section]} />
          )}
          {section.id !== 2 && <Text sections={[section]} />}
          {section.id === 2 && (
            <div className="flex gap-5 justify-center mt-10">
              {/* TODO: Add animation to delay in each animation */}
              {videos.map((video) => (
                video.url && (
                  <div key={video.id} className="flex flex-col justify-center items-center">
                    <h2 className="text-center mt-5 mb-2 text-xl">{video.título}</h2> {/* TODO: Change to tittle */}
                    <video src={video.url} controls width={300} />
                  </div>
                )))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default WelcomeClientPage;
