'use client'
import { useState } from "react"
import materialData from "./materialData";
import SectionHeader from "../Common/SectionHeader";

const RequestTab = () => {
  const [currentTab,setCurrentTab] = useState("tabOne");

  return (
    <>
    <section className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader 
          headerInfo={{
            title: "REQUEST",
            subtitle: "Request Material or Space",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
          ante in maximus.`,
          }}
        />
        <div className="flex justify-center pt-18.5">
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full justify-center cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
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
              className={`relative flex w-full justify-center cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
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
            <div className={`lg:border lg:w-1/2 lg:p-10 mt-10 rounded ${currentTab == "tabOne" ? "block": "hidden"}`}>
              <form action="#" method="post">
                  <div className="p-2 flex flex-col">
                    <label htmlFor="name">Nome do responsável</label>
                    <input type="text" name="name" id="name" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="space">Espaço</label>
                    <input type="text" name="space" id="space" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="num_people">Número de pesssoas</label>
                    <input type="number" min={0} max={250} name="num_people" id="num_people" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="start_date">Data de Início</label>
                    <input type="datetime-local" name="start_date" id="start_date" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="end_date">Data de Fim</label>
                    <input type="datetime-local" name="end_date" id="end_date" className="p-2 border"/>
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="contact_number">Contacto telefónico</label>
                    <input type="text" name="contact_number" id="contact_number" className="p-2 border"/>
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="">Descrição do Evento</label>
                    <textarea name="event_description" id="event_description" className="flex-grow p-2 border" />
                  </div>
                  <div>
                    <label htmlFor=""></label>
                  </div>

                  {/* Material Selector */}
                  <p className="p-2">Material (Opcional)</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 pb-2">
                    {materialData.map((material) => (
                      <div className="m-2 p-2 flex border rounded">
                        <label htmlFor={material.name} className="flex-grow">{material.name}</label>
                        <input type="number" name={material.name} id={material.name} min={0} max={material.quantity} defaultValue={0} className="pl-2 focus:outline-none"/>
                      </div>
                    ))}
                  </div>

                  <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-gray-500 hover:text-white">Submeter</button>
              </form>
            </div>
            <div className={`lg:border lg:w-1/2 lg:p-10 mt-10 rounded ${currentTab == "tabTwo" ? "block": "hidden"}`}>
              <form action="#" method="post">
                  <div className="p-2 flex flex-col">
                    <label htmlFor="name">Nome do núcleo/associação</label>
                    <input type="text" name="name" id="name" className="p-2 border"/>
                  </div>
                  <div>
                    <label htmlFor="name">Nome do responsável</label>
                    <input type="text" name="name" id="name" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="student_number">Número de estudante</label>
                    <input type="text" name="student_number" id="student_number" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="start_date">Data de Início</label>
                    <input type="datetime-local" name="start_date" id="start_date" className="p-2 border"/>
                  </div>
                  <div className="p-2 flex flex-col">
                    <label htmlFor="end_date">Data de Fim</label>
                    <input type="datetime-local" name="end_date" id="end_date" className="p-2 border"/>
                  </div>
                  <div className="flex flex-col p-2">
                    <label htmlFor="contact_number">Contacto telefónico</label>
                    <input type="text" name="contact_number" id="contact_number" className="p-2 border"/>
                  </div>
                  
                  {/* Material Selector */}
                  <p className="p-2">Material</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 pb-2">
                    {materialData.map((material) => (
                      <div className="m-2 p-2 flex border rounded">
                        <label htmlFor={material.name} className="flex-grow">{material.name}</label>
                        <input type="number" name={material.name} id={material.name} min={0} max={material.quantity} defaultValue={0} className="pl-2 focus:outline-none"/>
                      </div>
                    ))}
                  </div>

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

export default RequestTab