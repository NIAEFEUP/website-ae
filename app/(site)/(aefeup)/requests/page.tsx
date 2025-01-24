import CalendarComponent from "@/components/Calendar"
import { Metadata } from "next"
import config from "payload.config"
import { getPayload } from "payload"
import RequestPageContent from "./client"

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

	const regulation = (await payload.find({
		collection: "docfile",
		limit: 1,
		where: {
			type: { equals: "regulation" },
		},
	})).docs;

	return (
		<RequestPageContent
			calendarID={calendarID}
			calendarApiKey={calendarApiKey}
			materialData={materialData}
			availableSpaces={availableSpaces}
			regulation={regulation.length > 0 ? regulation[0] : undefined}
		/>
	);
}