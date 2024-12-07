import { motion } from "framer-motion";
import React from "react";
import { FaDrumstickBite } from "react-icons/fa";

interface DayMenuCardProps {
    day: string;
    dishes: { icon: React.ReactNode; type: string; name: string }[];
}

const DayMenuCard = ({ day, dishes }: DayMenuCardProps) => {
    return (
        <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none min-w-67.5">
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
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-xl font-bold text-black">{day}</h2>
                <div className="mt-4">
                    <ul>
                        {dishes.map((dish, index) => (
                            <li
                                key={index}
                                className="flex flex-col items-start mb-4 text-black dark:text-white last:mb-0"
                            >
                                <div className="flex items-center">
                                    <span className="mr-3 text-primary dark:text-white">
                                        {dish.icon || <FaDrumstickBite />}
                                    </span>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {dish.type}
                                        </div>
                                        <div className="text-lg font-medium">{dish.name}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default DayMenuCard;
