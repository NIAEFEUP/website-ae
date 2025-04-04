'use client'
import { Media } from "@/payload-types";
import { EventLink } from "@/types/eventType";
import { motion } from "framer-motion";

type EventData = {
  eventId: number;
  eventType: string;
  eventTitle: string;
  eventContent: string; 
  eventImage: Media | null;
  eventLinks : EventLink[] | null;
}

const EventComponent= ({eventData} : {eventData:EventData}) => {
  if(eventData.eventId % 2 == 0) {
    return (
      <div>
        <div className="pb-36 md:pb-24 xl:pb-32">
          <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
              {EventContent({eventData:eventData})}
              {EventImage({eventData:eventData})}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="pb-36 md:pb-24 xl:pb-32">
          <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
              {EventContent({eventData:eventData})}
              {EventImage({eventData:eventData})}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const EventImage= ({eventData} : {eventData:EventData}) => {
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
              // className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <img
                src={eventData.eventImage!.url!}
                alt="event-image"
              />
            </motion.div>
          </div>
  )
}

const EventContent = ({eventData} : {eventData:EventData}) => {
  const {eventType,eventTitle,eventContent} = eventData;
  
  return (
          <div className="animate_left md:w-1/2">
{/*             <motion.div
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              // className="animate_left md:w-1/2"
            > */}
              <h4 className="font-medium uppercase text-black dark:text-white">
                  {/* Festa de Receção */}
                  {eventType}
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  {/* Arraial D'Engenharia */}
                  {eventTitle}
              </h2>
              <p>
                {eventContent}
              </p>
              <div className= "my-6 flex flex-col">
                {eventData.eventLinks?.map((eventLink) => (
                  <a
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
{/*             </motion.div> */}
          </div>

  )

}
export default EventComponent;