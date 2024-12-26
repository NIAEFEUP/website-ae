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
          <Text sections={[section]} />
        </section>
      ))}
    </>
  );
};

export default WelcomeClientPage;
