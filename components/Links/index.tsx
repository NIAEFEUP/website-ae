"use client";

import { motion } from "framer-motion";

const UsefulLinks = () => {
  const links = [
    {
      label: "CICA",
      url: "https://sigarra.up.pt/feup/pt/web_base.gera_pagina?P_pagina=21101",
    },
    {
      label: "Sasup",
      url: "https://www.up.pt/portal/pt/sasup/",
    },
    {
      label: "Serviços Académicos",
      url: "https://sigarra.up.pt/feup/pt/uni_geral.unidade_view?pv_unidade=73",
    },
    {
      label: "Uni – A FEUP no teu bolso",
      url: "https://play.google.com/store/apps/details?id=pt.up.fe.ni.uni&hl=pt_PT",
    },
    {
      label: "Time Table Selector (TTS)",
      url: "https://tts.niaefeup.pt/planner",
    },
  ];

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
              {links.map((link,index) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base m-2 p-1 dark:text-white hover:text-white hover:bg-[#97321D] hover:rounded transition-colors duration-200 block text-center"
                >
                  {link.label}
                </a>
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
