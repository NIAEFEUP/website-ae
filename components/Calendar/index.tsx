'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import SectionHeader from '../Common/SectionHeader'
import ptLocale from '@fullcalendar/core/locales/pt'

const CalendarComponent = ({ calendarID, calendarApiKey }: { calendarID: string | undefined, calendarApiKey: string | undefined }) => {
  return (
    <>
      <section id="calendar" className="py-20 md:px-10 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader
            title="Calendário"
          />
          <div className="bg-white">
            <FullCalendar
              plugins={[dayGridPlugin, googleCalendarPlugin]}
              initialView='dayGridMonth'
              locale={ptLocale}
              headerToolbar={{
                right: "today,prev,next"
              }}
              googleCalendarApiKey={calendarApiKey}
              events={{
                googleCalendarId: calendarID
              }}
              eventDataTransform={(event) => {
                delete event.url
                event.allDay = true
                event.title = "Ocupado"
                return event
              }}
              height={700}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default CalendarComponent;