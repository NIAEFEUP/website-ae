import { cartProduct } from "@/types/cartProduct";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type CartItemProps = {
  item: cartProduct;
  removeFromCart: (item: cartProduct) => void;
};

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
  const [quantity, setQuantity] = React.useState(item.quantity);

  const increaseQuantity = () => {
    const instance = item.product.sizes?.find((s) => s.size === item.size);

    if (instance && quantity + 1 <= instance.quantity) {
      setQuantity(quantity + 1);
      item.quantity = quantity + 1;
    }
  };

  const decreaseQuantity = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
      item.quantity = quantity - 1;
    }
  };

  return (
    <div className="flex gap-5 border p-2 rounded">
      <Image
        src="/images/cactus.jpg"
        alt="hero"
        width={100}
        height={90}
        className="rounded"
      />
      <div className="flex flex-col text-black justify-between flex-grow">
        <div>
          <h1 className="text-base">{item.product.name}</h1>
          <h1 className="font-bold">{item.product.price} €</h1>
          <div className="mt-1 text-xs text-gray-500 flex">
            <div className="pr-5 border-r">
              <button onClick={() => decreaseQuantity()}>-</button>
              <span className="px-4">{item.quantity} un</span>
              <button onClick={() => increaseQuantity()}>+</button>
            </div>
            <span className="px-5 border-r">{item.size}</span>
            <span className="ml-5">{item.product.color}</span>
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
