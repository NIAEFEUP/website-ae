import { useEffect, useState } from "react";
import { Product, ProductInstance } from "@/payload-types";
import { getInstances } from "components/Shop/SizePicker/payloadAction";

type SizePickerProps = {
   product: Product,
   setInstance: (instance: ProductInstance) => void,
};

const SizePicker = ({ product, setInstance }: SizePickerProps) => {
   const [instances, setInstances] = useState<ProductInstance[]>([]);

   useEffect(() => {
      const fetchInstances = async () => {
         const allInstances = (await getInstances()).docs;

         const filteredInstances = allInstances.filter(
            (instance: ProductInstance) => {
               return (instance.product as Product).id == product.id;
            }
         );
         setInstances(filteredInstances);
      };

      fetchInstances();
   }, [product]);

   const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedInstance = instances.find((instance) => instance.size === e.target.value);
      if (selectedInstance) {
         setInstance(selectedInstance);
      }
   };

   return (
      <select className="rounded-md py-2 px-3" defaultValue="-" onChange={handleSizeChange}>
         <option disabled>-</option>
         {instances.map((option) => (
            <option key={option.id} value={option.size}>
               {option.size}
            </option>
         ))}
      </select>
   );
};

export default SizePicker;
