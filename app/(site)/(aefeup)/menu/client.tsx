"use client"

import SectionHeader from "@/components/Common/SectionHeader"
import DayMenuCard from "./DayMenuCard"
import { useState } from "react"

interface Props {
    categories: string[];
    items: { name: string; price: string }[];
    dayMenu: { day: string; dishes: { icon: React.ReactNode; type: string; name: string }[] }[];
}

const ClientMenuPage = ({ categories, items, dayMenu }: Props) => {

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (<>
        <section className="overflow-hidden pb-5 pt-25">
            <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
                {/* <!-- Section Title Start --> */}
                <div className="animate_top mx-auto text-center">
                    <SectionHeader
                        headerInfo={{
                            title: `Ementa Bar`,
                            subtitle: `Bar AEFEUP`,
                            description: ``,
                        }}
                    />
                </div>
                {/* <!-- Section Title End --> */}
                <div className="py-5">
                    <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
                        <DayMenuCard
                            day="Segunda-feira"
                            dishes={[
                                { icon: null, type: "Sopa", name: "Prato do dia" },
                                { icon: null, type: "Carne", name: "Prato do dia" },
                                { icon: null, type: "Peixe", name: "Prato do dia" },
                                { icon: null, type: "Dieta", name: "Prato do dia" },
                                { icon: null, type: "Sobremessa", name: "Prato do dia" },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>

        <div className="">
            <section className='flex justify-center gap-5 my-5'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`py-2 px-4 rounded-lg transition-all duration-300 flex justify-center gap-5 ${selectedCategory === category
                            ? "bg-primary text-white"
                            : "bg-gray-200 dark:bg-gray-400 dark:text-black hover:shadow-lg"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </section>
            <ul className="divide-y divide-gray-300 dark:divide-gray-600 max-w-[45%] mx-auto pb-15">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center py-3 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all bg-white"
                    >
                        <span className="text-lg font-medium text-gray-800">
                            {item.name}
                        </span>
                        <span className="text-lg">
                            {item.price}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </>)
}

export default ClientMenuPage