"use client"

import SectionHeader from "@/components/Common/SectionHeader";
import { President } from "@/payload-types";
import { motion } from "framer-motion";
import Text from "@/components/Text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PresidentCard from "@/components/PresidentCard";

interface Props {
  presidents: President[];
}

const AEFEUPHistoryClientPage = ({ presidents }: Props) => {
  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <SectionHeader
          title="História"
      />

      <Text sections={[
        {
          id: 1,
          text: [
            <p key={1}>
              A Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto (AEFEUP) foi fundada em <b>15 de Março de 1984</b> e é a entidade que legalmente representa todos os estudantes da Faculdade de Engenharia da Universidade do Porto.</p>,
            <p key={2}>
              É constituída por quatro órgãos: a Assembleia Geral, a Mesa da Assembleia Geral, a Direção e o Conselho Fiscal. Na Direção estão dispostos os diversos departamentos que promovem e fomentam todas as atividades desportivas, culturais, recreativas, pedagógicas e de responsabilidade social. Contudo, o seu foco é a resolução de todas as questões relacionadas com o ensino e defesa dos estudantes.
            </p>,
            <p key={3}>
              A AEFEUP tem se destacado no desenvolvimento de vários projetos e eventos ao longo dos anos, como o “Arraial d’Engenharia” e a feira de emprego “FEUP Engineering Days”, cujo reconhecimento tem aumentado notoriamente. A nível de competições desportivas, tem conquistado títulos a nível nacional e europeu nos últimos anos.
            </p>,
            <p key={4}>
              A AEFEUP é a maior Associação de Estudantes da Academia do Porto e uma das maiores em Portugal e tem uma sede própria, cujo edifício foi inaugurado a 15 de março de 2009.
            </p>
          ]
        }
      ]} />

      <section className="py-5">
        {presidents.length > 0 &&
          <>
            <SectionHeader
                title="Presidentes"
            />
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <section className="flex justify-center items-center">
                <Carousel
                  className="items-center w-4/6 md:w-3/5 lg:w-2/5"
                  opts={{
                    align: "end",
                    startIndex: presidents.length - 1
                  }}
                >
                  <CarouselContent>
                    {presidents.sort((a, b) => a.start_year - b.start_year).map((president, index) =>
                      <CarouselItem key={index} className="flex justify-center items-center">
                        <PresidentCard key={president.id} person={{ ...president, position: 0 }} description={`${president.start_year} - ${president.end_year}`} />
                      </CarouselItem>
                    )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </section>
            </motion.div>
          </>
        }
      </section>

    </main>
  );
}
export default AEFEUPHistoryClientPage;
