import { useEffect, useState } from "react";
import { Product } from "@/payload-types";
import { ProductInstance } from "@/types/productInstance";

type SizePickerProps = {
   product: Product,
   setInstance: (instance: ProductInstance) => void,
};

const SizePicker = ({ product, setInstance }: SizePickerProps) => {
   const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedInstance = { product: product, size: e.target.value, quantity: 0 };
      if (selectedInstance) {
         setInstance(selectedInstance);
      }
   };

   return (
      <select className="rounded-md py-2 px-3" defaultValue="-" onChange={handleSizeChange}>
         <option disabled>-</option>
         {product.instances!.map((option) => (
            <option key={option.id} value={option.Size}>
               {option.Size}
            </option>
         ))}
      </select>
   );
};

export default SizePicker;
