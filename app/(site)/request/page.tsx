import Material from "@/components/Materials"
import CalendarComponent  from "@/components/Calendar"
import { Metadata } from "next"
import RequestTab from "@/components/RequestTab"
import config from "payload.config"
import { getPayload } from "payload"

export const metadata: Metadata = {
	title: "Request Page",
}

export default async function Request() {
	const calendarID= process.env.GOOGLE_CALENDAR_ID
	const calendarApiKey= process.env.GOOGLE_CALENDAR_API_KEY

	const payload = await getPayload({config});
	const result = await payload.find({
		collection: "material",
	})

	return (
		<>
 			<CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey}/> 
			<Material materialData={result.docs}/>
			<RequestTab materialData={result.docs}/>
		</>
	)
}