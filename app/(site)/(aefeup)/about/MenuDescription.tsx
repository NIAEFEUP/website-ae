"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Avatar from "@/components/Avatar";
import SectionHeader from "@/components/Common/SectionHeader";
import { BoardSection, Person } from "@/payload-types";

interface Props {
  sections: BoardSection[]
}

const MenuDescription = ({ sections }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.clientHeight);
    }
    if (sections.length > 0) {
      setSelected(0);
    }
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <SectionHeader
          title="Departamentos"
          subtitle="Departamentos"
      />

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
        style={{ padding: '3rem 2rem' }}
        className="flex justify-center items-start h-full"
      >
        <div
          ref={menuRef}
          className="w-full flex items-start gap-8 flex-col sm:flex-row"
        >
          <div className="flex flex-col gap-4 w-full sm:w-1/4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`py-2 px-4 w-full rounded-lg text-center ${selected === index
                  ? "bg-[#97321D] text-white"
                  : "bg-gray-200 dark:bg-gray-400 dark:text-black hover:shadow-lg"
                  }`}
              >
                {section.name}
              </button>
            ))}
          </div>

          <div
            className="flex flex-col md:w-3/4 items-center"
            style={{ minHeight: menuHeight }}
          >
            {selected === null ? (
              <div className="w-full max-w-lg h-full bg-gray-300 rounded-lg flex justify-center items-center">
                <img
                  src="/images/about/placeholder.png"
                  alt="Image"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ) : (
              <div className="p-5 rounded-lg shadow-lg bg-gray-200 w-full min-h-80">
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {sections[selected]?.name}
                </h3>
                <p className="mb-4 text-center">
                  {sections[selected]?.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                  {sections[selected].members.map((person) => (<Avatar person={person.person as Person} />))}
                </div>

                <div className="space-y-6">
                  {sections[selected]?.subgroups?.map((subgroup, idx) => (
                    <div key={idx}>
                      <h4 className="text-xl font-semibold mb-2">
                        {subgroup.title}
                      </h4>
                      <p className="text-gray-700">{subgroup.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuDescription;