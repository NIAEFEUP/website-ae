import { Product } from "@/payload-types";
import Image from "next/image";
import SizePicker from "../SizePicker";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { cartProduct } from "@/types/cartProduct";

type ShopCardProps = {
  product: Product;
  addToCart: (product: cartProduct) => void;
  isProductInCart: (product: cartProduct) => boolean;
};

const ShopCard = ({ product, addToCart, isProductInCart }: ShopCardProps) => {
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
            {product.sizes?.every((size) => size.quantity > 0) ? (
              <SizePicker
                product={product}
                setInstance={setInstance}
              ></SizePicker>
            ) : (
              "Sold out"
            )}

            {instance && (
              <button
                className="hover:shadow-lg flex gap-2 items-center rounded-lg bg-black py-2 px-2 text-white text-sm"
                onClick={() => {
                  addToCart(buildCartProduct(instance!));
                }}
                disabled={isProductInCart(instance)}
              >
                <ShoppingCart size={18} />
                {isProductInCart(instance) ? "Added" : "Add to Cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
