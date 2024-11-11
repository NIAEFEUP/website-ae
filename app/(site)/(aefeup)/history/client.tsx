"use client"

import AvatarHorizontal from "@/components/AvatarHorizontal";
import SectionHeader from "@/components/Common/SectionHeader";
import { President } from "@/payload-types";
import { motion } from "framer-motion";

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
            <section className="px-20 flex gap-5 justify-center">
              {presidents.map((president, index) =>
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
                  transition={{ duration: 1, delay: index * 0.3 }}
                  viewport={{ once: true }}
                >
                  <AvatarHorizontal className="w-fit" key={president.id} person={{ ...president, position: 0 }} description={`${president.start_year} - ${president.end_year}`} />
                </motion.div>
              )}
            </section>
          </>
        }
      </section>

    </main>
  );
}
export default AEFEUPHistoryClientPage;
