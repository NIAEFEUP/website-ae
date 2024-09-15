"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StudentGuide } from "@/payload-types";

interface Props {
  files : StudentGuide[]
}

const PdfViewer = ({ files }: Props) => {

  // Initialize with the first PDF by default
  const [pdf, setPdf] = useState<string>((files[0] ?? []).url ?? '');

  const handleButtonClick = (file: string) => {
    setPdf(file);
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        
        {/* Title Section */}
        <motion.h2
          className="text-2xl font-bold mt-12 mb-6 text-center text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Guia de Estudante
        </motion.h2>

        {/* Buttons Section with the Same Motion as Links */}
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
          className="flex flex-col gap-2 justify-center mt-6 mb-4 md:mb-6 md:flex-row"
        >
          {files.map((pdfItem, index) => (
            <div key={index} className="w-full md:w-auto">
              <button
                onClick={() => handleButtonClick(pdfItem.url ?? '')}
                className={`w-full py-2 px-4 rounded-lg transition-all duration-300 ${
                  pdf === pdfItem.url
                    ? "bg-[#97321D] text-white"
                    : "bg-gray-200 dark:bg-gray-400 dark:text-black hover:shadow-lg"
                }`}
              >
                {pdfItem.language}
              </button>
            </div>
          ))}
        </motion.div>

        {/* PDF Viewer Section */}
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
          className="flex items-center gap-8 lg:gap-32.5 mt-4 md:mt-6 mx-auto w-full md:w-1/2"
        >
          <iframe
            src={pdf}
            className="w-full h-[915px] border border-gray-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PdfViewer;
