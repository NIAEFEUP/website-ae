import CalendarComponent from "@/components/Calendar"
import { Metadata } from "next"
import RequestTab from "@/components/RequestTab"
import config from "payload.config"
import { getPayload } from "payload"
import { Resend } from "resend";
import { render } from "@react-email/render"
import { EventRequestInfo } from "@/types/eventRequestInfo"
import EmailTemplate from "@/emails"

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

	const sendEmail = async (requestInfo: EventRequestInfo) => {
		'use server'
		const resend = new Resend(process.env.RESEND_API_KEY)

		if (!requestInfo.isEvent && materialData.length === 0) {
			return
		}
		const { data, error } = await resend.emails.send({
			from: process.env.RESEND_EMAIL ? `AEFEUP <${process.env.RESEND_EMAIL}>` : 'Acme <onboarding@resend.dev>',
			to: [requestInfo.email],
			subject: `${requestInfo.isEvent ? "Reserva de Espaço" : "Pedido de Material"}`,
			html: await render(EmailTemplate({ requestEventInfo: requestInfo })),
		})
	}

	return (
		<>
			<CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey} />
			<RequestTab materialData={materialData} sendEmail={sendEmail} availableSpaces={availableSpaces} />
		</>
	)
}