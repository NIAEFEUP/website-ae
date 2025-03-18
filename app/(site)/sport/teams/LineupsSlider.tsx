"use client";

import { Pagination, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import ReactDOMServer from "react-dom/server";
import AvatarHorizontal from "@/components/AvatarHorizontal";
import Avatar from "@/components/Avatar";
import { SportsTeam, Media, Person } from "@/payload-types";

interface Props {
  teams: SportsTeam[];
}

const LineupsSlider = ({ teams }: Props) => (
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
  //className="animate_top mx-auto mt-15 max-w-c-1235 xl:mt-20 xl:px-0"
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
                {teams[index].emoji}
              </span>
            );
          },
        }}
        modules={[Pagination, EffectCards]}
      >
        {teams.map((team) => {

          const background = team.backgroundImage as Media;

          return (
            <SwiperSlide key={team.id} className="pb-5 px-10">
              <div className="flex justify-center gap-5 my-5 flex-col-reverse sm:flex-row">
                <AvatarHorizontal person={team.coach as Person} description="Treinador" className="w-fit mx-auto sm:mx-0" />
                <div className="flex flex-col justify-center text-center sm:text-start">
                  {team.workouts && team.workouts.length > 0 &&
                    <p className="font-semibold">Treinos</p>
                  }
                  {team.workouts?.map((workout, index) => (
                    <p key={index}>{workout.weekDay}: {workout.hour}</p>
                  ))}
                </div>
              </div>

              <div
                className="flex flex-col gap-5 bg-cover bg-center bg-no-repeat p-5 bg-opacity-80 sm:bg-none"
                style={{
                  backgroundImage: `url('${background.url}')`,
                }}
              >
                {team.lineup?.map((line, index) => (
                  <div key={index} className="flex gap-5 justify-center flex-wrap">
                    {line.lineupRow?.map((player, index) => {
                      if (player) {
                        return (
                          <Avatar key={index} person={player as Person} />
                        );
                      }
                    })}
                  </div>
                ))}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  </motion.div>
);

export default LineupsSlider;
