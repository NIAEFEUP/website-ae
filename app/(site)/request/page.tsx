import Material from "@/components/Materials"
import CalendarComponent  from "@/components/Calendar"
import { Metadata } from "next"
import RequestTab from "@/components/RequestTab"
import config from "payload.config"
import { getPayload } from "payload"
import { Resend } from "resend";
import { render } from "@react-email/render"
import { EventRequestInfo } from "@/types/eventRequestInfo"
import EmailTemplate from "@/emails"

export const metadata: Metadata = {
	title: "Request Page",
}

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function Request() {
	const calendarID= process.env.GOOGLE_CALENDAR_ID
	const calendarApiKey= process.env.GOOGLE_CALENDAR_API_KEY

	const payload = await getPayload({config});
	const result = await payload.find({
		collection: "material",
	})

	const sendEmail = async (requestInfo: EventRequestInfo) => {
		'use server'
		const {data,error} = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: [requestInfo.email],
			subject: `${requestInfo.isEvent ? "Marcação de Evento": "Pedido de Material"}`,
			html: await render(EmailTemplate({requestEventInfo: requestInfo})),
		})
	}

	return (
		<>
 			<CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey}/> 
			<Material materialData={result.docs}/>
			<RequestTab materialData={result.docs} sendEmail={sendEmail}/>
		</>
	)
}