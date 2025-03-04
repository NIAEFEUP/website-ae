"use client";

import React from "react";
import { Media, Sponsor } from "@/payload-types";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  sponsors: Sponsor[];
}

const Sponsors = ({ sponsors }: Props) => {
  return (
    <section className="border-t bg-alabaster py-7 dark:border-y-strokedark dark:bg-black">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-center gap-7.5 lg:gap-12.5 xl:gap-29">
          {sponsors.map((sponsor, index) => {
            const logo = sponsor.logo as Media;
            return (
              <div className="animate_top mx-w-full relative block h-10 w-[98px]" key={sponsor.id}>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -10,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: index * 0.5 }}
                  viewport={{ once: true }}
                >
                  <Link href={sponsor.url}>
                    <Image
                      className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
                      src={logo?.url ?? ""}
                      alt={logo?.alt ?? ""}
                      fill
                      priority
                    />
                  </Link>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
