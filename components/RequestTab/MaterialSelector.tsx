import { Material } from "@/types/material";

export default function MaterialSelector( { materialData } ) {

    return (
        <div>
            <p className="p-2">Material</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 pb-2">
                {materialData.map((material : Material) => (
                    <div className="m-2 p-2 flex border rounded justify-between">
                        <label htmlFor={material.name}>{material.name}</label>
                        <input type="number" name={material.name} id={material.name} min={0} max={material.quantity} defaultValue={0} className="pl-2 focus:outline-none"/>
                    </div>
                ))}
            </div>
        </div>
    )
}