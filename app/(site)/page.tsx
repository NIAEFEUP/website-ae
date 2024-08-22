import { Metadata } from "next";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "AEFEUP",
  description: "Website da Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Brevemente",
              description: `O Website encontra-se em construção e em breve estará disponível.`,
            }}
          />
        </div>
      </section>
    </main>
  );
}
