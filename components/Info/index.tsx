"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Table from "../ScheduleTable";
import { InfoSection } from "@/types/infoSection";

interface InfoProps {
  sections: InfoSection[];
}

const Info: React.FC<InfoProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <section key={section.id} className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            <div
              className={`flex flex-col-reverse md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Image Section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 flex items-center ${index % 2 === 0 ? "ustify-start" : "justify-end"
                  }`}
              >
                <div className="w-full max-w-md aspect-[588/526.5] relative">
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    layout="fill"
                    objectFit="contain"
                    className="dark:hidden"
                  />
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    layout="fill"
                    objectFit="contain"
                    className="hidden dark:block"
                  />
                </div>
              </motion.div>

              {/* Text Section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? 20 : -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="md:w-1/2 flex-1 space-y-4"
              >
                <h2 className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  {section.title}
                </h2>
                <span className="font-medium uppercase text-black dark:text-white">
                  {section.subtitle}
                </span>
                {section.text && (
                  <p className={`mb-${section.text.length > 150 ? "8" : "4"} leading-relaxed text-gray-700 dark:text-gray-300`}>
                    {section.text}
                  </p>
                )}
                {section.phone && (
                  <div className="mb-2">
                    <strong>Telefone:</strong> <a href={`tel:+351${section.phone}`} className="text-primary hover:underline">{section.phone}</a>
                  </div>
                )}
                {section.email && (
                  <div className="mb-2">
                    <strong>Email:</strong> <a href={`mailto:${section.email}`} className="text-primary hover:underline">{section.email}</a>
                  </div>
                )}
                {section.schedule && <Table data={section.schedule} />}
                {section.link && (
                  <div>
                    <Link
                      href={`/${section.link.path ? section.link.path + "/" : ""}`}
                      rel="noopener noreferrer"
                      className="flex items-center w-fit py-2 px-4 rounded-lg transition-all duration-300 gap-3 bg-primary text-white hover:shadow-lg hover:bg-primary-dark"
                    >
                      <span className="duration-300">{section.link.text}</span>
                      {section.link.showIcon && section.link.icon}
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Info;
