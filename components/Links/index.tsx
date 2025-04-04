"use client";

import { Link } from "@/payload-types";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";

interface Props {
  links: Link[];
}

const UsefulLinks = ({ links }: Props) => {
  const isMobileDevice = window.navigator.userAgent.toLowerCase().includes("mobi");
  const [selectedLinks,setSelectedLinks] = useState(-1)
  return (
    <>
      <div className="animate_top mx-auto text-center flex flex-col items-center">
{/*         <motion.div
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
        > */}
          <section className="mt-12 p-6 rounded-lg flex flex-col md:w-2/3">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
              Links Úteis
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="relative rounded hover:shadow group"
                >
                  <div
                    className="flex items-center justify-between text-base py-2 px-4 dark:text-white text-white bg-[#97321D] rounded-lg transition-colors duration-200"
                  >
                    { isMobileDevice
                      ? (
                      <button
                        onClick={() => selectedLinks == index ? setSelectedLinks(-1) : setSelectedLinks(index)}
                        className="flex-grow"
                      >
                        {link.label}
                      </button>
                      )
                      : <span>{link.label}</span>
                    }
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SquareArrowOutUpRight className="ml-2" />
                    </a>
                  </div>
                  {link.description && (
                    <div className={`max-h-0 overflow-hidden md:transition-[max-height] md:duration-300 md:ease-in-out md:group-hover:max-h-fit
                          ${selectedLinks == index ? 'max-h-fit' : ''}`}>
                      <div className="bg-gray-200 p-2 text-sm text-black">
                        {link.description}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
{/*         </motion.div> */}
      </div>
    </>
  );
};

export default UsefulLinks;
