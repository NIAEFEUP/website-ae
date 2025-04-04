"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  images?: string[]; 
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current && ref.current) {
      const container = containerRef.current;
      const timelineContent = ref.current;
      const timelineRect = timelineContent.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setTimelineHeight(timelineRect.bottom - containerRect.top);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div
        ref={ref}
        className="relative mx-auto max-w-c-1315 pb-20 px-4 md:px-8 xl:px-0"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Sticky Title */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-[405px] md:w-full">
              <motion.div
                className="h-10 absolute left-1 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-transparent flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
              </motion.div>
              <motion.h3
                className="hidden md:block text-3xl font-bold text-black dark:text-white mx-auto"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {item.title}
              </motion.h3>
            </div>

            {/* Main Content */}
            <motion.div
              className="relative pl-10 pr-4 md:pl-4 w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="md:hidden block text-3xl font-bold text-black dark:text-white mb-4 mx-auto">
                {item.title}
              </h3>

              {/* Render Text */}
              <div
                className="mb-4 mx-auto text-gray-600 text-justify break-words"
              >
                {item.content}
              </div>

              {/* Render Images if Available */}
              {item.images && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.images.map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt={`Timeline Image ${idx + 1}`}
                      className="rounded-lg shadow-lg w-full"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
        <div
          style={{
            height: timelineHeight + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#97321D] via-[#B14428] to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
