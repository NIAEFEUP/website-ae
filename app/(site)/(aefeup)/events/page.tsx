import EventComponent from "@/components/Event";
import { Media } from "@/payload-types";
import { getPayload } from "payload";
import config from "payload.config";
import HeaderEvents from "@/app/(site)/(aefeup)/events/HeaderEvents";
import { Metadata } from "next";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Eventos",
  description: "A AEFEUP organiza diversos eventos culturais, desportivos e académicos para os estudantes da FEUP.",
};

const EventsPage = async () => {
  const payload = await getPayload({ config })
  const events = (await payload.find({
    collection: "event"
  })).docs;

  return (
    <>
      <HeaderEvents />
      {
        events.map((event, key) => (
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