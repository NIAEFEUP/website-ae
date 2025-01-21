'use client'

import { useEffect, useRef, useState } from "react"
import SectionHeader from "../Common/SectionHeader";
import { EventRequestInfo } from "@/types/eventRequestInfo";
import { SingleMaterialRequest } from "@/types/singleMaterialRequest";
import { Material } from "@/types/material";
import DatePickerComponent from "./DatePickerComponent";
import MaterialSelector from "./MaterialSelector";
import { Space } from "@/payload-types";

interface Props {
  materialData: Material[],
  sendEmail: (eventRequest: EventRequestInfo) => void,
  availableSpaces: Space[]
}

export default function RequestTab({ materialData, sendEmail, availableSpaces }: Props) {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate)
  }, [startDate])

  const getRequestedMaterial = (data: FormData) => {
    return materialData
      .filter((material: Material) => (data.get(material.name) ?? 0) != 0)
      .map((material: Material) => {
        return { name: material.name, quantity: parseInt(data.get(material.name)?.toString() ?? '0') }
      })
  }

  const handleMaterialRequestSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    const requestedMaterial: Array<SingleMaterialRequest> = getRequestedMaterial(data)
    const requestInfo: EventRequestInfo = {
      isEvent: false,
      name: data.get("name")?.toString() ?? '',
      responsible_name: data.get("responsible_name")?.toString() ?? '',
      email: data.get("email")?.toString() ?? '',
      space: data.get("space")?.toString() ?? '',
      contact_number: data.get("contact_number")?.toString() ?? '',
      requestedMaterial: requestedMaterial
    }

    sendEmail(requestInfo);
    (document.getElementById("material-request-form") as HTMLFormElement).reset() // TODO: Change this
  }


  const handleEventRequestSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const requestedMaterial: Array<SingleMaterialRequest> = getRequestedMaterial(data);
    const requestInfo: EventRequestInfo = {
      isEvent: true,
      name: data.get("name")?.toString() ?? '',
      responsible_name: data.get("responsible_name")?.toString() ?? '',
      email: data.get("email")?.toString() ?? '',
      space: data.get("space")?.toString() ?? '',
      num_people: parseInt(data.get("num_people")?.toString() ?? ''),
      start_date: startDate.toUTCString(),
      end_date: endDate.toUTCString(),
      contact_number: data.get("contact_number")?.toString() ?? '',
      event_description: data.get("event_description")?.toString() ?? '',
      requestedMaterial: requestedMaterial
    }

    sendEmail(requestInfo);
    (document.getElementById("event-request-form") as HTMLFormElement).reset() // TODO: Change this
    //TODO: Remove the selected materials
    //TODO: Show snack bar
  }

  return (
    <>
      <section className="relative pb-20 pt-18.5 lg:pb-22.5">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "Request",
              subtitle: "Request Material or Space",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
          ante in maximus.`,
            }}
          />
          <div className="flex justify-center pt-18.5">
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full justify-center cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabOne"
                ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                : ""
                }`}
            >
              <div className="md:w-3/5 lg:w-auto ">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Pedido de Reserva de Evento
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full justify-center cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "tabTwo"
                ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                : ""
                }`}
            >
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Requisitar Material
                </button>
              </div>
            </div>

          </div>
          <div>
            <div className="lg:flex lg:justify-center lg:items-center">
              <div className={`lg:border lg:w-1/2 lg:p-10 mt-10 rounded ${currentTab == "tabOne" ? "block" : "hidden"}`}>
                <form onSubmit={handleEventRequestSubmit} id="event-request-form">
                  <div className="p-2 flex flex-col">
                    <label htmlFor="name">Nome do núcleo/associação</label>
                    <input type="text" name="name" id="name" className="p-2 border rounded" />
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="responsible_name">Nome do responsável*</label>
                    <input type="text" name="responsible_name" id="responsible_name" className="p-2 border rounded" required />
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="space">Espaço*</label>
                    <select name="space" id="space" className="p-3 border bg-white rounded" required>
                      <option value="" selected hidden>Escolha um lugar</option>
                      {availableSpaces.map((space: Space) => (
                        <option value={space.name}>{space.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="num_people">Número de pesssoas*</label>
                    <input type="number" min={0} max={250} name="num_people" id="num_people" className="p-2 border rounded" required />
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="start_date">Data de Início*</label>
                    <DatePickerComponent currentDate={startDate} setDate={setStartDate} />
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="end_date">Data de Fim*</label>
                    <DatePickerComponent currentDate={endDate} setDate={setEndDate} minDate={startDate} />
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="contact_number">Contacto telefónico*</label>
                    <input type="text" name="contact_number" id="contact_number" className="p-2 border rounded" required />
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="email">Email de Contacto*</label>
                    <input type="text" name="email" id="email" className="p-2 border rounded" required />
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="">Descrição do Evento*</label>
                    <textarea name="event_description" id="event_description" className="flex-grow p-2 border rounded" required />
                  </div>
                  <MaterialSelector materialData={materialData} />
                  <p className="text-gray-400 p-2">*: Obrigatório</p>
                  <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-gray-500 hover:text-white">Submeter</button>
                </form>
              </div>
              <div className={`lg:border lg:w-1/2 lg:p-10 mt-10 rounded ${currentTab == "tabTwo" ? "block" : "hidden"}`}>
                <form onSubmit={handleMaterialRequestSubmit} id="material-request-form">
                  <div className="p-2 flex flex-col">
                    <label htmlFor="name">Nome do núcleo/associação</label>
                    <input type="text" name="name" id="name" className="p-2 border rounded" />
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="responsible_name">Nome do responsável*</label>
                    <input type="text" name="responsible_name" id="responsible_name" className="p-2 border rounded" required />
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="contact_number">Contacto telefónico*</label>
                    <input type="text" name="contact_number" id="contact_number" className="p-2 border rounded" required />
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="email">Email de Contacto*</label>
                    <input type="text" name="email" id="email" className="p-2 border rounded" required />
                  </div>

                  <MaterialSelector materialData={materialData} />
                  <p className="text-gray-400 p-2">*: Obrigatório</p>

                  <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-gray-500 hover:text-white">Submeter</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
