"use client";

import { Media } from "@/payload-types";
import { motion } from "framer-motion";
import Image from "next/image";
import { getSociaIcon } from "./socials";
import Link from "next/link";

const AssociationCard = ({ association }) => {
    const logo = association.logo as Media;
    return (
        <div className="flex flex-col justify-center w-fit">
            <Image
                src={logo?.url ?? ""}
                alt={logo?.alt ?? ""}
                width={80}
                height={80}
                className="w-20 h-20 object-cover mx-auto"
            />

            <h2 className="text-center text-lg font-semibold mt-1">{association.name}</h2>
            <ul className="flex gap-1 mt-1 justify-center">
                {association.socials?.map((social) => {
                    return <Link key={social.type} href={social.link}>
                        {getSociaIcon(social.type)}
                    </Link>
                })}
            </ul>
        </div>
    );
}

const AssociationsClientPage = ({ associations }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const aefeup_associations = associations.docs
        .filter(association => association.in_aefeup)
        .sort((a, b) => a.name.localeCompare(b.name));

    const feup_associations = associations.docs
        .filter(association => !association.in_aefeup)
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <main className="py-20 lg:py-25 xl:py-30">
            <section>
                <h1 className="mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                    Núcleos da AEFEUP
                </h1>
                <div className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <div className="flex gap-5">
                            {aefeup_associations.map((association, index) => {
                                return (
                                    <motion.div
                                        key={association.id}
                                        variants={itemVariants}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <AssociationCard association={association} />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>


                <motion.section
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { delay: aefeup_associations.length * 0.1 + 0.5 }
                        },
                    }}
                >
                    <h1 className="mx-auto text-center mb-4 mt-10 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                        Núcleos e Associações da FEUP
                    </h1>
                    <div className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
                        <motion.ul
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            <div className="flex gap-5">
                                {feup_associations.map((association, index) => {
                                    return (
                                        <motion.li
                                            key={association.id}
                                            variants={itemVariants}
                                            transition={{ delay: aefeup_associations.length * 0.1 + 0.5 + index * 0.1 }}
                                        >
                                            <AssociationCard association={association} />
                                        </motion.li>
                                    );
                                })}
                            </div>
                        </motion.ul>
                    </div>
                </motion.section>
            </section>
        </main>
    );
};

export default AssociationsClientPage;
