import { Product } from "@/payload-types";
import Image from "next/image";
import SizePicker from "../SizePicker";
import React from "react";
import { CirclePlus } from "lucide-react";
import { cartProduct } from "@/types/cartProduct";

type ShopCardProps = {
  product: Product;
  setCartState: (bool: boolean) => void;
  addToCart: (product: cartProduct) => void;
};

const ShopCard = ({ product, setCartState, addToCart }: ShopCardProps) => {
  const [instance, setInstance] = React.useState<cartProduct>();

  const buildCartProduct = (instance: cartProduct) => {
    console.log(product);
    return {
      product: product,
      quantity: 1,
      size: instance.size,
    };
  };

  return (
    <div className="rounded-lg bg-white min-w-80 max-w-80 border dark:shadow-none">
      <Image
        src="/images/cactus.jpg"
        width={700}
        height={900}
        alt="Product image"
        className="w-full max-h-96 min-h-96 min-w-80 max-w-80 object-cover rounded-xl rounded-b-none"
      />
      <div className="p-4">
        <p className="mb-2.5 text-black dark:text-white tracking-tight font-semibold text-xl">
          {product.name}
        </p>
        <div className="flex justify-between">
          <p className="text-gray dark:text-white text-xl">{product.price}€</p>
          <div className="items-center flex gap-2">
            <SizePicker
              product={product}
              setInstance={setInstance}
            ></SizePicker>
            <button
              onClick={() => {
                addToCart(buildCartProduct(instance!));
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
