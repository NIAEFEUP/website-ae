"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "@/components/Avatar";
import { ArrowUp , ArrowDown  } from "lucide-react";

const avatarGroups = {
  "Presidência": [
    <Avatar key="1" cargo="President" />,
    <Avatar key="2" cargo="Tesoureiro"  />,
    <Avatar key="3" cargo="Secretária-Geral" />,
  ],
  "Vice Presidentes": [
    <Avatar key="4" cargo="Política Educativa" />,
    <Avatar key="5" cargo="Atividades" />,
    <Avatar key="6" cargo="Administração" />,
    <Avatar key="7" cargo="Desporto e Bem-Estar" />,
  ],
  "Conselho Fiscal": [
    <Avatar key="8" cargo="Conselho Fiscal" />,
    <Avatar key="9" cargo="Conselho Fiscal" />,
    <Avatar key="10" cargo="Conselho Fiscal" />,
  ],
  "Mesa da Assembleia Geral": [
    <Avatar key="11" cargo="Mesa Assembleia" />,
    <Avatar key="12" cargo="Mesa Assembleia" />,
    <Avatar key="13" cargo="Mesa Assembleia" />,
  ],
};

const AvatarLineup = () => {
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
          {avatarGroups["Presidência"]}
        </div>
      </div>

      <AnimatePresence>
        {showAll && (
          Object.entries(avatarGroups).slice(1).map(([title, avatars], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center gap-7 mt-5">
                <h3 className="text-3xl font-medium text-black dark:text-white text-center">{title}</h3>
                <div className="flex justify-center gap-5 flex-wrap">
                  {avatars}
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