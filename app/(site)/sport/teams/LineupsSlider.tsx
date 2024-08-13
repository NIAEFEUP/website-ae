"use client";

import { Pagination, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import ReactDOMServer from "react-dom/server";
import AvatarHorizontal from "@/components/AvatarHorizontal";
import Avatar from "@/components/Avatar";

const sports_emojies = ["⚽", "🥎", "🏀", "🎾"];

const LineupsSlider = () => {
  return (
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
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top mx-auto mt-15 max-w-c-1235 xl:mt-20 xl:px-0"
    >
      <div className="swiper-custom-pagination flex justify-center my-2 gap-5 mt-20" />
      <div className="swiper testimonial-01 mb-20 pb-22.5">
        <Swiper
          autoHeight={true}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return ReactDOMServer.renderToString(
                <span
                  className={`${className} bg-white [&.swiper-pagination-bullet-active]:bg-slate-100 border border-stroke dark:border-strokedark  cursor-pointer w-15 h-15 flex justify-center items-center borderclassNamep-3 text-2xl rounded-full shadow-solid-10  dark:bg-blacksection dark:shadow-none`}
                >
                  {sports_emojies[index]}
                </span>
              );
            },
          }}
          modules={[Pagination, EffectCards]}
        >
          <SwiperSlide className="pb-5">
            <div className="flex justify-center gap-5 my-5">
              <AvatarHorizontal />
              <div className="flex flex-col justify-center">
                <p className="font-semibold">Treinos</p>
                <p>Segunda-feira: 10:00</p>
                <p>Quarta-feira: 10:00</p>
              </div>
            </div>

            <div
              className="flex flex-col gap-5 bg-cover bg-center bg-no-repeat p-5 bg-opacity-80"
              style={{
                backgroundImage: "url('/images/sports/football.png')",
              }}
            >
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-5">
            <div className="flex justify-center gap-5 my-5">
              <AvatarHorizontal />
              <div className="flex flex-col justify-center">
                <p className="font-semibold">Treinos</p>
                <p>Segunda-feira: 10:00</p>
                <p>Quarta-feira: 10:00</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 bg-cover bg-center bg-no-repeat p-5 bg-opacity-80"
              style={{
                backgroundImage: "url('/images/sports/football2.png')",
              }}
            >
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-5">
            <div className="flex justify-center gap-5 my-5">
              <AvatarHorizontal />
              <div className="flex flex-col justify-center">
                <p className="font-semibold">Treinos</p>
                <p>Segunda-feira: 10:00</p>
                <p>Quarta-feira: 10:00</p>
              </div>
            </div>
            <div
              className="flex flex-col gap-5 bg-cover bg-center bg-no-repeat p-5 bg-opacity-80"
              style={{
                backgroundImage: "url('/images/sports/basket.png')",
              }}
            >
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
                <Avatar />
              </div>
              <div className="flex gap-5 justify-center">
                <Avatar />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default LineupsSlider;
