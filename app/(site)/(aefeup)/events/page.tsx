import EventComponent from "@/components/Event";
import { Media } from "@/payload-types";
import { getPayload } from "payload";
import config from "payload.config";
import HeaderEvents from "@/app/(site)/(aefeup)/events/HeaderEvents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events Page",
  description: "This is Events Page",
};


const EventsPage = async () => {
  const payload = await getPayload({config})
  const events = (await payload.find({
    collection: "event"
  })).docs;

  return (
    <>
      <HeaderEvents/>
        {
          events.map((event,key) => (
              <EventComponent
                key={key}
                eventData={{
                  eventId: event.id,
                  eventType: event.type,
                  eventTitle: event.title,
                  eventContent: event.description,
                  eventImage: (event.image as Media),
                  eventLinks: event.link!
                }} 
              />
            )
          )
        }
    </>
  )
}; 

export default EventsPage;