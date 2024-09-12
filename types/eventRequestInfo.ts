import { SingleMaterialRequest } from "./singleMaterialRequest"

export type EventRequestInfo = {
    isEvent: boolean,
    name: string,
    responsible_name: string,
    space: string,
    num_people?: number,
    start_date?: string,
    end_date?: string,
    contact_number: string,
    email: string,
    event_description?: string,
    requestedMaterial: Array<SingleMaterialRequest>
}