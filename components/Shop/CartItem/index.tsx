import { Media } from "@/payload-types";
import { cartProduct } from "@/types/cartProduct";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type CartItemProps = {
  item: cartProduct;
  removeFromCart: (item: cartProduct) => void;
  updateItem: (item: cartProduct, newQuantity: number) => void;
};

const CartItem = ({ item, removeFromCart, updateItem }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = () => {
    const instance = item.product.sizes?.find((s) => s.size === item.size);

    if (instance && quantity + 1 <= instance.quantity) {
      setQuantity(quantity + 1);
      updateItem(item, quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
      updateItem(item, quantity - 1);
    }
  };

  const productImage = item.product.photo as Media;

  return (
    <div className="flex gap-5 border p-2 rounded">
      <Image
        src={productImage.url ?? ""}
        alt={productImage.alt ?? ""}
        width={100}
        height={90}
        className="rounded"
        priority
      />
      <div className="flex flex-col text-black justify-between flex-grow">
        <div>
          <div className="flex gap-1 items-center">
            <h1>
              {item.product.name} · {item.product.price}€
            </h1>
          </div>
          <div className="mt-1 text-xs text-gray-500 flex flex-col items-start gap-2">
            <div className="flex">
              <button onClick={decreaseQuantity}>-</button>
              <span className="px-3">{item.quantity} un</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div className="flex items-center gap-1">
              Tamanho:
              <span>{item.size}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 self-end">
          <button onClick={() => removeFromCart(item)}>
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
