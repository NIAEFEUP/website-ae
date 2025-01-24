'use client'
import { Material } from "@/types/material";
import { Inbox } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

import MultipleSelector, { Option } from '../../../../components/ui/multiple-selector';

interface Props {
    materialData: Material[]
}

export default function MaterialSelector({ materialData }: Props) {

    const [selectedMaterials, setSelectedMaterials] = useState<Option[]>([]);

    return (
        <div className="flex flex-col">
            {materialData.length > 0
                ?
                <div>
                    <div className="flex flex-col p-2">
                        <p className="p-2">Material</p>

                        <div className="flex w-full flex-col gap-5">
                            <MultipleSelector
                                className="text-md"
                                value={selectedMaterials}
                                onChange={setSelectedMaterials}
                                defaultOptions={materialData.map((material: Material) => ({ label: material.name, value: material.name }))}
                                placeholder="Escolher materiais"
                                emptyIndicator={
                                    <p className="text-center">
                                        Sem resultados
                                    </p>
                                }
                            />
                        </div>
                    </div>
                    <div className="pb-2">
                        {selectedMaterials.map((option: Option) => (
                            <div className="m-2 py-2 flex border rounded bg-white justify-between">
                                <div className="flex gap-2 items-center justify-center">
                                    <input type="number" name={option.value} id={option.value} min={1} max={materialData.filter((element) => element.name == option.value)[0].quantity} defaultValue={1} className="pl-5 focus:outline-none w-12" />
                                    <p className="">{option.label}</p>
                                </div>
                                <button onClick={() => setSelectedMaterials(selectedMaterials.filter((element) => element.value != option.value))} className="h-full m-2 border-gray pr-2">
                                    <X size={15} className="w-full h-full" id={option.value} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                :
                <div className="flex items-center justify-center p-2">
                    <Inbox size={80} />
                    <p className="text-xl p-2 w-1/2 sm:w-fit">Não há materiais disponíveis</p>
                </div>
            }
        </div >
    )
}