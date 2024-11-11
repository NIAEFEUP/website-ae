import { Metadata } from "next";
import AvatarLineup from "./AvatarLineup";
import SectionHeader from "@/components/Common/SectionHeader";
import MenuDescription from "./MenuDescription";
import { getPayload } from "payload";
import config from "payload.config";

export const metadata: Metadata = {
  title: "About",
  description: "",
};

const payload = await getPayload({config});
const result = await payload.find({
  collection: "board_section",
})


const mainBoardSections = ["Vice Presidentes","Conselho Fiscal","Mesa da Assembleia Geral"]
const presidentSection = result.docs.filter((e) => e.name == "Presidência")[0]
const mainSections = result.docs.filter((e) => mainBoardSections.includes(e.name))
const otherSections = result.docs.filter((e) => !mainBoardSections.includes(e.name) && e.name != "Presidência")

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
        <AvatarLineup presidentSection={presidentSection} sections={mainSections}></AvatarLineup>
        <MenuDescription sections={otherSections}></MenuDescription>
    </section>
  );
};

export default AboutPage;
