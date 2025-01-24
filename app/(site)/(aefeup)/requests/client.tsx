"use client"

import CalendarComponent from "@/components/Calendar";
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog"
import { Docfile, Material, Space } from "@/payload-types";
import RequestTab from "./RequestTab";

interface Props {
    calendarID?: string;
    calendarApiKey?: string;
    materialData: Material[];
    availableSpaces: Space[];
    regulation?: Docfile;
}

const RequestPageContent = ({ calendarID, calendarApiKey, materialData, availableSpaces, regulation }: Props) => {
    return (
        <Dialog>
            <CalendarComponent calendarID={calendarID} calendarApiKey={calendarApiKey} />
            <RequestTab materialData={materialData} availableSpaces={availableSpaces} regulation={regulation} />
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