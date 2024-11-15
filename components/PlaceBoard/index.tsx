"use client";
import React from "react";
import { Place } from '@/payload-types';
import { motion } from "framer-motion";
import ScheduleTable from "../Table";

interface Props {
  places: Place[];
  selected: null | number;
  onChange: (placeId: number | null) => void;
}

const PlaceBoard = ({ places, selected, onChange }: Props) => {
  return (
    <>
      <section className="flex justify-center gap-5 flex-wrap mx-5">
        {places.map((place, key) => (
            <motion.div
              key={key}
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
              className={`hover:cursor-pointer w-1/4 min-w-90 p-5 animate_top z-40 rounded-lg border border-white dark:border-strokedark shadow-solid-3 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:bg-blacksection ${place.id === selected ? "bg-primary opacity-40 text-white" : "bg-white text-black dark:text-white"}`}
            >
              <h3 className="text-itemtitle font-semibold">
              {place.name}
              </h3>
              {place.description && (
                <p>{place.description}</p>
              )}
              {place.schedule && (
                <ScheduleTable data={place.schedule.map(slot => ({ label: slot.day, value: slot.hours }))} />
              )}
            </motion.div>
        ))}
      </section>
    </>
  );
};

export default PlaceBoard;
