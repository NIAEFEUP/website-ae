"use client";
import { HeaderInfo } from "@/types/headerInfo";
import { motion } from "framer-motion";


const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <div className="animate_top w-full px-4 md:px-8 xl:px-16 text-center">
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
        >
          <h1 className="mb-4 text-3xl font-bold text-black dark:text-white mx-auto">
            {title}
          </h1>
          <p
            className="mx-auto text-gray-600 text-center justify-start break-words"
            style={{
              textAlign: "justify",
              textAlignLast: "center", 
            }}
          >
  {description}
</p>
        </motion.div>
      </div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
