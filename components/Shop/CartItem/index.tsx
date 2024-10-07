import { Product } from "@/payload-types";
import { cartProduct } from "@/types/cartProduct";
import Image from 'next/image';
import React from "react";

type CartItemProps = {
   product: cartProduct,
   removeFromCart: (productID: number) => void,
}

const CartItem = ({ product, removeFromCart }: CartItemProps) => {
   const [quantity, setQuantity] = React.useState(product.quantity);

   const increaseQuantity = () => {
      setQuantity(quantity + 1)
      product.quantity = quantity + 1
   }

   const decreaseQuantity = () => {
      if (quantity - 1 > 0) {
         setQuantity(quantity - 1)
         product.quantity = quantity - 1
      }
   }


   return <div className="flex gap-5">
      <Image
         src="/images/cactus.jpg"
         alt="hero"
         width={100}
         height={90}
      />
      <div className="flex flex-col text-black justify-between flex-grow">
         <div>
            <h1 className="text-base">{product.name}</h1>
            <h1 className="font-bold">{product.price} €</h1>
            <div className="mt-1 text-xs text-gray-500 flex">
               <div className="pr-5 border-r">
                  <button onClick={() => decreaseQuantity()}>-</button>
                  <span className="px-4">{product.quantity} un</span>
                  <button onClick={() => increaseQuantity()}>+</button>
               </div>
               <span className="px-5 border-r">XS</span>
               <span className="ml-5">Green</span>
            </div>
         </div>
         <div className="flex gap-1 self-end">
            <button className="rounded-full w-8 h-8 bg-slate-400 text-white" onClick={() => removeFromCart(product.id)}>R</button>
         </div>
      </div>
   </div >
}

export default CartItem;