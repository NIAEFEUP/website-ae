import CalendarComponent from "@/components/Calendar";
import RequestTab from "@/components/RequestTab";
import EmailTemplate from "@/emails";
import { EventRequestInfo } from "@/types/eventRequestInfo";
import { render } from "@react-email/render";
import { Resend } from "resend";
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog"
import { Docfile, Material, Space } from "@/payload-types";

interface Props {
    calendarID?: string;
    calendarApiKey?: string;
    materialData: Material[];
    availableSpaces: Space[];
    regulation?: Docfile;
}


const RequestPageContent = ({ calendarID, calendarApiKey, materialData, availableSpaces, regulation }: Props) => {

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
        <Dialog>
            <CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey} />
            <RequestTab materialData={materialData} sendEmail={sendEmail} availableSpaces={availableSpaces} regulation={regulation} />
            <DialogContent>
                <DialogDescription>
                    <iframe
                        src={regulation?.url!}
                        className="w-full h-[700px]"
                    />
                </DialogDescription>
            </DialogContent>
        </Dialog>
    );
}

export default RequestPageContent;