import { render } from "@react-email/render";
import TestTemplate from "@/emails"
import { Resend } from "resend";
import { EventRequestInfo } from "@/types/eventRequestInfo";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request,res: Response) {
	const email = "rubemviscard2635@gmail.com"
    const values : EventRequestInfo = await request.json()

    const { data, error } = await resend.emails.send({
		from: "Acme <onboarding@resend.dev>",
		to: [email],
		subject: "Thank you",
		html: await render(TestTemplate({requestEventInfo: values})),
	});

	if (error) {
		return Response.json(error);
	}

	return Response.json({ message: "Email sent successfully" });
} 