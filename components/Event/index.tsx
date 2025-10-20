'use client'
import React, { useState } from "react";
import { Media } from "@/payload-types";
import { EventLink } from "@/types/eventType";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

type EventData = {
  eventId: number;
  eventType: string;
  eventTitle: string;
  eventContent: string;
  eventImages: Media[] | null;
  eventLinks: EventLink[] | null;
}

const EventComponent = ({ eventData }: { eventData: EventData }) => {
  return (
    <div className="pb-36 md:pb-24 xl:pb-32">
      <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
          <EventContent eventData={eventData} />
          <EventImage eventData={eventData} />
        </div>
      </div>
    </div>
  )
}
const EventImage = ({ eventData }: { eventData: EventData }) => {
  const images = eventData.eventImages ?? [];
  const [isReady, setIsReady] = useState(false);

  // No images - don't render anything
  if (images.length === 0) {
    return null;
  }

  // Single image case - original behavior
  if (images.length === 1) {
    return (
      <div className="animate_right relative mx-auto aspect-[3/2] md:w-1/2">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: 20,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={images[0]?.url ?? ""}
            alt={images[0]?.alt ?? "event-image"}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    );
  }

  // Multiple images - slider
  return (
    <div className="event-image-slider-01 animate_right relative mx-auto w-full md:w-1/2">

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 20,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full aspect-[3/2]">
          <div className="absolute inset-0">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
              }}
              onSwiper={() => setIsReady(true)}
              className="w-full h-full"
            >
              {images.map((img, i) => (
                <SwiperSlide key={img?.url ?? i} className="w-full h-full">
                  <img
                    src={img?.url ?? ""}
                    alt={img?.alt ?? `event-image-${i}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/*Pagination container below image */}
        <div className="custom-pagination mt-4 flex justify-center min-h-[20px]"></div>
      </motion.div>
    </div>
  );
}

const EventContent = ({ eventData }: { eventData: EventData }) => {
  const { eventType, eventTitle, eventContent } = eventData;

  return (
    <div className="animate_left md:w-1/2">
      <h4 className="font-medium uppercase text-black dark:text-white">
        {eventType}
      </h4>
      <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
        {eventTitle}
      </h2>
      <p>
        {eventContent}
      </p>
      <div className="my-6 flex flex-col">
        {eventData.eventLinks?.map((eventLink, idx) => (
          <a
            key={idx}
            href={eventLink.url! ?? '#'}
            className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            <span className="duration-300 group-hover:pr-2">
              {eventLink.description! ?? ''}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        ))}
      </div>
    </div>

  )

}
export default EventComponent;