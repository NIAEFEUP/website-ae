import CalendarComponent from "@/app/(site)/(aefeup)/requests/calendar"
import { Metadata } from "next"
import RequestTab from "@/app/(site)/(aefeup)/requests/RequestTab"
import config from "payload.config"
import { getPayload } from "payload"

export const metadata: Metadata = {
	title: "Cedências de Espaço",
	description: "Envia solicitações para reservas de espaço para eventos ou pedidos de material",
}

export default async function Request() {
	const calendarID = process.env.GOOGLE_CALENDAR_ID
	const calendarApiKey = process.env.GOOGLE_CALENDAR_API_KEY

	const payload = await getPayload({ config });
	const materialData = (await payload.find({
		collection: "material",
	})).docs

	const availableSpaces = (await payload.find({
		collection: "space",
	})).docs

	return (
		<>
			<CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey} />
			<RequestTab materialData={materialData} availableSpaces={availableSpaces} />
		</>
	)
}