import { Material } from "@/types/material";
import { Inbox } from "lucide-react";

interface Props {
    materialData: Material[]
}

export default function MaterialSelector( { materialData } : Props ) {

    return (
        <div>
            <p className="p-2">Material</p>
            {materialData.length > 0 
            ?
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 pb-2">
                    {materialData.map((material : Material) => (
                        <div className="m-2 p-2 flex border rounded justify-between">
                            <label htmlFor={material.name}>{material.name}</label>
                            <input type="number" name={material.name} id={material.name} min={0} max={material.quantity} defaultValue={0} className="pl-2 focus:outline-none"/>
                        </div>
                    ))}
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