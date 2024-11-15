"use client";
import React from "react";
import { Place } from '@/payload-types';
import { motion } from "framer-motion";

interface Props {
  places: Place[];
  selected: null | number;
  onChange: (placeId: number | null) => void;
}

const PlaceBoard = ({ places, selected, onChange }: Props) => {
  return (
    <>
      <section id="features" className="flex justify-center gap-5 flex-wrap mx-5">
        {places.map((place, key) => (
          <motion.button
              key={place.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -10,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => onChange(place.id)}
              className={`w-1/4 min-w-90 p-2 animate_top z-40 rounded-lg border border-white dark:border-strokedark shadow-solid-3 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:bg-blacksection ${place.id === selected ? "bg-primary opacity-40" : "bg-white"}`}
            >
              <h3 className={`text-base font-semibold ${place.id === selected ? "text-white" : "text-black dark:text-white"}  xl:text-itemtitle`}>
                {place.name}
              </h3>
              {place.description && (
                <p className={`${place.id === selected ? "text-white" : "text-black dark:text-white"}`}>
                  {place.description}
                </p>
              )}
              {place.schedule?.map((slot) => (
                <p className={`${place.id === selected ? "text-white" : "text-black dark:text-white"}`}>{slot.day}: {slot.hours}</p>
              )
            )}
          </motion.button>
        ))}
      </section>
    </>
  );
};

export default PlaceBoard;
