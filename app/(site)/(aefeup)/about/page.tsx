import { Metadata } from "next";
import AvatarLineup from "./AvatarLineup";
import SectionHeader from "@/components/Common/SectionHeader";
import MenuDescription from "./MenuDescription";
import { getPayload } from "payload";
import config from "payload.config";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Fundada em 15 de março de 1984, a AEFEUP tem como missão defender os interesses dos estudantes, promovendo atividades culturais, desportivas, pedagógicas e sociais.",
};

async function getBoardSection() {
  if(process.env.IS_BUILD) {
    console.log('skipping getBoardSection DB call during build')
    return []
  }

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "board_section",
  })

  return result.docs;
}


const AboutPage = async () => {
  const boards = await getBoardSection()
  const departments = boards.filter((e) => e.type === 'departament');

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
      <AvatarLineup sections={boards}></AvatarLineup>
      <MenuDescription sections={departments}></MenuDescription>
    </section>
  );
};

export default AboutPage;
