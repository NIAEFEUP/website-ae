import { Metadata } from "next";
import AvatarLineup from "./AvatarLineup";
import SectionHeader from "@/components/Common/SectionHeader";
import MenuDescription from "./MenuDescription";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

const AboutPage = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
            headerInfo={{
              title: "Quem Somos",
              subtitle: "Quem Somos",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
        </div>
        <AvatarLineup></AvatarLineup>
        <MenuDescription></MenuDescription>
    </section>
  );
};

export default AboutPage;
