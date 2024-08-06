import Material from "@/components/Materials"
import CalendarComponent  from "@/components/Calendar"
import { Metadata } from "next"
import RequestTab from "@/components/RequestTab"

export const metadata: Metadata = {
	title: "Request Page",
	description: "yep"
}

export default function Request() {
	return (
		<>
 			<CalendarComponent /> 
			<Material />
			<RequestTab />
		</>
	)
}