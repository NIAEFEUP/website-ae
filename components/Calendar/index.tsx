'use client'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import SectionHeader from '../Common/SectionHeader'

const CalendarComponent = () => {
  return (
    <>
      <section id="calendar" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <SectionHeader 
            headerInfo={{
              title: "CALENDAR",
              subtitle: "Available Dates",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          <FullCalendar 
            plugins={[ dayGridPlugin, googleCalendarPlugin ]}
            initialView='dayGridMonth'
            headerToolbar={{
              right:"prev,next"
            }}
            googleCalendarApiKey='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'
            height={700}
          />
          </div>
      </section>
    </>
  )
}

export default CalendarComponent;