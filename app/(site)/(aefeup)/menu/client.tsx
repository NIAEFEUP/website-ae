"use client"

import SectionHeader from "@/components/Common/SectionHeader"
import DayMenuCard from "./DayMenuCard"
import { useEffect, useState } from "react"
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
    categories: any[];
    items: any[];
    dayMenus: any[];
}

const ClientMenuPage = ({ categories, items, dayMenus }: Props) => {

    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        setFilteredItems(items.filter((item) => item.category.id === selectedCategory).sort((a, b) => a.price - b.price));
    }, [selectedCategory, items]);

    return (<>
        <section className="overflow-hidden pb-5 pt-25">
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
            <div className="py-5 swiper">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {dayMenus.map(dayMenu => (
                        <SwiperSlide key={dayMenu.id}>
                            <DayMenuCard
                                key={dayMenu.id}
                                day={new Date(dayMenu.day).toLocaleDateString("pt-PT", { weekday: "long" })}
                                dishes={dayMenu.dishes.map(dish => ({
                                    icon: null,
                                    type: dish.dishType.name_pt,
                                    name: dish.dish.name_pt
                                }))}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >

        <div className="">
            <section className='flex justify-center gap-5 my-5 flex-wrap'>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`py-2 px-4 rounded-lg transition-all duration-300 flex justify-center gap-5 ${selectedCategory === category.id
                            ? "bg-primary text-white"
                            : "bg-gray-200 dark:bg-gray-400 dark:text-black hover:shadow-lg"
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </section>
            <ul className="divide-y divide-gray-300 dark:divide-gray-600 max-w-[45%] mx-auto pb-15">
                {filteredItems.filter((item) => item.category.id === selectedCategory).map((item) => (
                    <li key={item.id} className="py-5 bg-white">
                        <div className="flex justify-between items-center">
                            <p>{item.dish.name_pt}</p>
                            <p>{item.price.toFixed(2).replace(".", ",")}€</p>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
    </>)
}

export default ClientMenuPage