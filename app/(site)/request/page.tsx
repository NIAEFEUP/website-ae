import Material from "@/components/Materials"
import CalendarComponent  from "@/components/Calendar"
import { Metadata } from "next"
import RequestTab from "@/components/RequestTab"

export const metadata: Metadata = {
	title: "Request Page",
}

export default function Request() {
	const calendarID= process.env.GOOGLE_CALENDAR_ID
	const calendarApiKey= process.env.GOOGLE_CALENDAR_API_KEY
	return (
		<>
 			<CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey}/> 
			<Material />
			<RequestTab/>
		</>
	)
}