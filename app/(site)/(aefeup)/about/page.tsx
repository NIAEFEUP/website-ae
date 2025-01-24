import { Metadata } from "next";
import AvatarLineup from "./AvatarLineup";
import SectionHeader from "@/components/Common/SectionHeader";
import MenuDescription from "./MenuDescription";
import { getPayload } from "payload";
import config from "payload.config";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Fundada em 15 de março de 1984, a AEFEUP tem como missão defender os interesses dos estudantes, promovendo atividades culturais, desportivas, pedagógicas e sociais.",
};

const AboutPage = async () => {

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "board_section",
  })

  const boards = result.docs;
  const departments = boards.filter((e) => e.type === 'departament');

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
            title="Quem Somos"
            subtitle="Quem Somos"
        />
      </div>
      <AvatarLineup sections={boards}></AvatarLineup>
      <MenuDescription sections={departments}></MenuDescription>
    </section>
  );
};

export default AboutPage;
