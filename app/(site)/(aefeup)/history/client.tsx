"use client"

import SectionHeader from "@/components/Common/SectionHeader";
import { President } from "@/payload-types";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PresidentCard from "@/components/PresidentCard";

interface Props {
  history_text: string;
  presidents: President[];
}

const AEFEUPHistoryClientPage = ({ history_text, presidents }: Props) => {
  return (
    <main className="py-20 lg:py-25 xl:py-30">
      <SectionHeader
        headerInfo={{
          title: "História",
          subtitle: "",
          description: history_text
        }}
      />

      <section className="py-5">
        {presidents.length > 0 &&
          <>
            <SectionHeader
              headerInfo={{
                title: "Presidentes",
                subtitle: "",
                description: ""
              }}
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
                  align:"end"
                }}
                >
                  <CarouselContent>
                    {presidents.map((president, index) =>
                      <CarouselItem key={index} className="lg:basis-1/2">
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
