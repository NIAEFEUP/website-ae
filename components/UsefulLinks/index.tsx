"use client";

import { UsefulLink } from "@/payload-types";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Props {
  links: UsefulLink[]
}

const UsefulLinks = ({ links } : Props) => {
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
              Useful Links
            </h2>
            <div className="grid grid-cols-2">
              {links.map((link,_index) => (
                <div className="border solid rounded m-2 hover:shadow">
                  <div className="p-2 border rounded text-white bg-primary">
                    <a href={link.url} className="flex justify-center">
                      <ExternalLink size={20} className="mx-1"/>
                      {link.label}
                    </a>

                  </div>
                  <p >
                    {link.description}
                  </p>

                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
      {/* Motion Section End */}
    </>
  );
};

export default UsefulLinks;
