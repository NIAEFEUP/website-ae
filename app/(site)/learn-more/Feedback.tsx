'use client';
import { Feedbacklink } from "@/payload-types";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";

interface Props {
  feedbackData: Feedbacklink[]
}

export const Feedback = ({ feedbackData }: Props) => {
  return (
    <div>
      <section className="overflow-hidden">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex justify-center gap-8 md:flex-nowrap md:items-center">
            <div className="animate_left w-full">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -20,
                  },

                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                // className="animate_left md:w-2/5 lg:w-1/2"
              >
                <span className="font-medium uppercase text-black dark:text-white">
                  Feedback
                </span>
                <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  Formulários de Feedback
                </h2>
                {feedbackData.length > 0 ? (
                  <div className="pt-5 grid grid-cols-3 gap-4">
                    {feedbackData.map((feedbackLink, index) => (
                      <div
                        key={index}
                        className="relative rounded hover:shadow group"
                      >
                        <a
                          href={feedbackLink.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between text-base py-2 px-4 dark:text-white text-white bg-[#97321D] rounded-lg transition-colors duration-200"
                        >
                          <span>{feedbackLink.name}</span>
                          <SquareArrowOutUpRight className="ml-2" />
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      Novidades em breve...
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}