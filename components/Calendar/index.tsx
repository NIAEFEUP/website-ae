'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import SectionHeader from '../Common/SectionHeader'
import ptLocale from '@fullcalendar/core/locales/pt'

interface CalendarProps {
  calendarID?: string;
  calendarApiKey?: string;
  embedUrl?: string;
  displayMode?: "fullcalendar" | "iframe";
}

const CalendarComponent = ({
  calendarID,
  calendarApiKey,
  embedUrl,
  displayMode = "fullcalendar",
}: CalendarProps) => {
  const showIframe = displayMode === "iframe" || (!calendarApiKey && !!embedUrl);

  return (
    <>
      <section id="calendar" className="py-20 md:px-10 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            title="Calendário"
          />
          <div className="bg-white rounded-lg overflow-hidden shadow-solid-3">
            {showIframe && embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-[700px] border-0"
                frameBorder="0"
                scrolling="no"
                title="Calendário de Ocupação"
              />
            ) : (
              <FullCalendar
                plugins={[dayGridPlugin, googleCalendarPlugin]}
                initialView='dayGridMonth'
                locale={ptLocale}
                headerToolbar={{
                  right: "today,prev,next"
                }}
                googleCalendarApiKey={calendarApiKey}
                events={calendarID && calendarApiKey ? {
                  googleCalendarId: calendarID
                } : []}
                eventDataTransform={(event) => {
                  delete event.url
                  event.allDay = true
                  event.title = "Ocupado"
                  return event
                }}
                height={700}
              />
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default CalendarComponent;