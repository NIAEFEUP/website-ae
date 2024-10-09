'use client'
import { Material } from "@/types/material";
import { Inbox } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";

interface Props {
    materialData: Material[]
}

export default function MaterialSelector( { materialData } : Props ) {
    const [selectedMaterials,setSelectedMaterials ] = useState<Array<Material>>([])

    const handleAddMaterialButton = (e) => {
        e.preventDefault()
        const copySelectedMaterials : Material[] = [...selectedMaterials]
        const material = materialData.filter((element) => element.name == e.target.value)[0]
        if(!copySelectedMaterials.includes(material)) copySelectedMaterials.push(material)
        setSelectedMaterials(copySelectedMaterials)
    }

    const handleRemoveMaterialButton = (e) => {
        e.preventDefault()
        const copySelectedMaterials : Material[] = [...selectedMaterials].filter((element) => element.name != e.target.id)
        setSelectedMaterials(copySelectedMaterials)
    }

    return (
        <div className="flex flex-col">
            {materialData.length > 0 
            ?
                <div>
                    <div className="flex flex-col">
                        <p className="p-2">Material</p>
                        <select name="space" id="space" className="flex p-3 border bg-white mx-2 rounded" required>
                            <option value="" selected >Escolha um material</option>
                            { materialData
                                .filter((material: Material) => !selectedMaterials.includes(material))
                                .map((material: Material) => (
                                    <option value={material.name} onClick={handleAddMaterialButton} >{material.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="pb-2">
                        {selectedMaterials.map((material : Material) => (
                            <div className="m-2 py-2 flex border rounded items-center place-content-center justify-between">
                                <div>
                                    <button onClick={handleRemoveMaterialButton} className="h-full border-r pr-1 m-2 border-gray">
                                        <X size={15} className="w-full h-full text-primary" id={material.name}/>
                                    </button>
                                </div>
                                <p className="">{material.name}</p>
                                <input type="number" name={material.name} id={material.name} min={0} max={material.quantity} defaultValue={0} className="pr-2 focus:outline-none w-12"/>
                            </div>
                        ))}
                    </div> 
                </div>
            :
                <div className="flex items-center justify-center p-2">
                    <Inbox size={80}/>
                    <p className="text-xl p-2 w-1/2 sm:w-fit">Não há materiais disponíveis</p>
                </div>
            }
        </div>
    )
}