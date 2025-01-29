"use client";

import { Link } from "@/payload-types";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";

interface Props {
  links: Link[];
}

const UsefulLinks = ({ links }: Props) => {
  return (
    <>
      <div className="animate_top mx-auto text-center">
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
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <section className="mt-12 p-6 rounded-lg flex flex-col w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
              Links Úteis
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative rounded hover:shadow group"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-base py-2 px-4 dark:text-white text-white bg-[#97321D] rounded-lg transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <SquareArrowOutUpRight className="ml-2" />
                  </a>
                  {link.description && (
                    <div className="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-in-out group-hover:max-h-40">
                      <div className="bg-gray-200 p-2 text-sm text-black">
                        {link.description}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default UsefulLinks;
