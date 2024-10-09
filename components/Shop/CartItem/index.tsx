import { Product } from "@/payload-types";
<<<<<<< HEAD
import { cartProduct } from "@/types/cartProduct";
import Image from 'next/image';
import React from "react";

type CartItemProps = {
   product: cartProduct,
=======
import Image from 'next/image';

type CartItemProps = {
   product: Product,
>>>>>>> 5f6ab5d6260d4ed7fde50eeabe9188c0fca39636
   removeFromCart: (productID: number) => void,
}

const CartItem = ({ product, removeFromCart }: CartItemProps) => {
<<<<<<< HEAD
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

=======
>>>>>>> 5f6ab5d6260d4ed7fde50eeabe9188c0fca39636
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
<<<<<<< HEAD
            <div className="mt-1 text-xs text-gray-500 flex">
               <div className="pr-5 border-r">
                  <button onClick={() => decreaseQuantity()}>-</button>
                  <span className="px-4">{product.quantity} un</span>
                  <button onClick={() => increaseQuantity()}>+</button>
               </div>
               <span className="px-5 border-r">{product.size}</span>
               <span className="ml-5">{product.color}</span>
            </div>
         </div>
         <div className="flex gap-1 self-end">
=======
            <div className="mt-1 text-xs text-gray-500">
               <span className="pr-5 border-r">1 un</span>
               <span className="px-5 border-r">XS</span>
               <span className="ml-5">Green</span>
            </div>
         </div>
         <div className="flex gap-1 self-end">
            <button className="rounded-full w-8 h-8 bg-slate-400 text-white">E</button>
>>>>>>> 5f6ab5d6260d4ed7fde50eeabe9188c0fca39636
            <button className="rounded-full w-8 h-8 bg-slate-400 text-white" onClick={() => removeFromCart(product.id)}>R</button>
         </div>
      </div>
   </div >
}

export default CartItem;