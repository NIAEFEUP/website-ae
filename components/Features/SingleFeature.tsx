import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, href } = feature;

  return (
    <Link href={href ? href : ''}>
{/*       <motion.div
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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5 h-full"
      > */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          {typeof icon === "string" ? (
            <img
            src={icon} 
            width={36} 
            height={36} 
            alt={title} 
            />
          ) : (
            //@ts-ignore
            React.cloneElement(icon, { className: "text-white" })
          )}
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        { description && (
          <p>{description}</p>
        )}
{/*       </motion.div> */}
    </Link>
  );
};

export default SingleFeature;