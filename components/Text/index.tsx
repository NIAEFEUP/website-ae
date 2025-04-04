"use client";

import React from "react";
import { motion } from "framer-motion";
import Table from "../ScheduleTable";
import Button from "../Button";

interface TextSection {
  id: number;
  title?: string;
  subtitle?: string;
  text?: React.ReactNode[];
  phone?: string;
  email?: string;
  schedule?: { label: string; value: string }[];
  buttons?: { url: string; label: string }[];
}

interface TextProps {
  sections: TextSection[];
}

const Text: React.FC<TextProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <section key={section.id} className="overflow-hidden pb-6">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            <div className="flex flex-col items-start gap-6 lg:gap-8">
{/*               <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? 20 : -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              > */}
                {section.title && <h2 className="relative mb-4 text-2xl font-bold text-black dark:text-white">
                  {section.title}
                </h2>}
                {section.subtitle && <span className="font-medium uppercase text-black dark:text-white">
                  {section.subtitle}
                </span>}
                {section.text && <div className="text-justify">{section.text}</div>}
                {section.schedule && <Table data={section.schedule} />}
                {section.phone && (
                  <div>
                    <strong>Phone:</strong>{" "}
                    <a href={`tel:${section.phone}`} className="text-primary">
                      {section.phone}
                    </a>
                  </div>
                )}
                {section.email && (
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${section.email}`} className="text-primary">
                      {section.email}
                    </a>
                  </div>
                )}
                {section.buttons && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {section.buttons.map((button, buttonIndex) => (
                      <Button key={buttonIndex} url={button.url} label={button.label} />
                    ))}
                  </div>
                )}
{/*               </motion.div> */}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Text;
