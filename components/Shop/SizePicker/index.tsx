import { Product } from "@/payload-types";
import { cartProduct } from "@/types/cartProduct";

type SizePickerProps = {
   product: Product,
   setInstance: (instance: cartProduct) => void,
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
         {product.sizes ? (
            product.sizes.map((option) => (
               <option key={option.id} value={option.size}>
                  {option.size}
               </option>
            ))
         ) : null}
      </select>
   );
};

export default SizePicker;
