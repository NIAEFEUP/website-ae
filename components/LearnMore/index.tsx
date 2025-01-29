// LearnMore.tsx
import { motion } from "framer-motion";
import React from "react";

interface LearnMoreProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  details?: string[]; // can be optional
  href?: string; // can be optional
  buttonLabel?: string; // can be optional
}

const LearnMore = ({
  icon,
  title,
  description,
  details,
  href,
  buttonLabel = 'Saber mais',
}: LearnMoreProps) => {
  return (
    <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">

    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
        },

        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      // className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
    >

      <div className="mb-4 text-primary dark:text-white">{icon}</div>
      <h4 className="mb-2.5 text-para2 font-bold text-black dark:text-white">
        {title}
      </h4>
      <p className="mb-2.5">{description}</p>

      {details && details.length > 0 && (
        <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
          <ul>
            {details.map((bullet, index) => (
              <li
                key={index}
                className="mb-4 text-black last:mb-0 dark:text-manatee"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      )}

      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={buttonLabel + " button"}
          className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover/btn:pr-2">{buttonLabel}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
              fill="currentColor"
            />
          </svg>
        </a>
      )}
      </motion.div>
    </div>
  );
};

export default LearnMore;
