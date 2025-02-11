"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  images?: string[];
}

export const HorizontalTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current && timelineRef.current) {
      setTimelineWidth(timelineRef.current.scrollWidth - containerRef.current.clientWidth);
    }
  }, [data]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (containerRef.current) {
        event.preventDefault();
        containerRef.current.scrollLeft += event.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const { scrollXProgress } = useScroll({
    container: containerRef,
    axis: "x",
  });

  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
  const lineWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);
  return (
    
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
            <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <h1 className="text-3xl font-bold text-black dark:text-white md:text-4xl lg:text-5xl text-center">
                Conquistas
            </h1>
            </motion.div>     
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="relative w-full font-sans overflow-hidden">
            {/* Timeline Progress Line*/}
          <div className="absolute top-[15%] left-0 right-0 transform -translate-y-1/2 h-[2px] bg-gray-300 dark:bg-neutral-700">
            <motion.div
              style={{ width: lineWidth }}
              className="absolute left-0 h-[2px] bg-gradient-to-r from-[#97321D] via-[#B14428] to-transparent rounded-full"
            />
          </div>
          {/* Timeline Container */}
          <div
            ref={containerRef}
            className="relative flex items-center py-10 overflow-x-auto scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              whiteSpace: "nowrap",
            }}
          >
            {/* Timeline Content */}
            <motion.div
              ref={timelineRef}
              className="relative flex space-x-20 pb-10"
              style={{ width: `${timelineWidth}px` }}
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center min-w-[300px] md:min-w-[400px] lg:min-w-[500px] flex-shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline Indicator */}
                <motion.div
                className="h-10 left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <div className="h-4 w-4 rounded-full border-2 border-primary bg-transparent flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold text-black dark:text-white mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Content */}
                  <motion.div
                    className="text-gray-600 dark:text-gray-300 text-justify max-w-md mt-2 break-words overflow-hidden"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                  >
                    {item.content}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};