"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "@/components/Avatar";
import { ArrowUp , ArrowDown  } from "lucide-react";
import { BoardSection, Person } from "@/payload-types";


interface Props {
  presidentSection : BoardSection,
  sections: BoardSection[]
}

const AvatarLineup = ({ presidentSection,sections }: Props) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 1, delay: 0.1 }}
      style={{ marginTop: '2rem', paddingBottom: '2rem' }}
    >
      <div className="flex flex-col items-center mt-5 gap-7 ">
        <h3 className="text-black dark:text-white text-3xl font-medium  text-center">Presidência</h3>
        <div className="flex justify-center flex-wrap gap-5 ">
          {presidentSection.members.map((person) => (<Avatar person={person.person}/>))}
        </div>
      </div>

      <AnimatePresence>
        {showAll && (
          sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center gap-7 mt-5">
                <h3 className="text-3xl font-medium text-black dark:text-white text-center">{section.name}</h3>
                <div className="flex justify-center gap-5 flex-wrap">
                  {section.members.map((person) => (
                    <Avatar person={person.person}/>
                  ))}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.1 }}
        className="flex justify-center mt-8"
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-[#A42810] text-white rounded-full hover:bg-[#a42910] transition-all flex items-center"
        >
          {showAll ? <ArrowUp size={24} /> : <ArrowDown  size={24} />}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AvatarLineup;