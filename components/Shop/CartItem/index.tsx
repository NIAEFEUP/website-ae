import { Product } from "@/payload-types";
import Image from 'next/image';

type CartItemProps = {
   product: Product,
   removeFromCart: (productID: number) => void,
}

const CartItem = ({ product, removeFromCart }: CartItemProps) => {
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
            <div className="mt-1 text-xs text-gray-500">
               <span className="pr-5 border-r">1 un</span>
               <span className="px-5 border-r">XS</span>
               <span className="ml-5">Green</span>
            </div>
         </div>
         <div className="flex gap-1 self-end">
            <button className="rounded-full w-8 h-8 bg-slate-400 text-white">E</button>
            <button className="rounded-full w-8 h-8 bg-slate-400 text-white" onClick={() => removeFromCart(product.id)}>R</button>
         </div>
      </div>
   </div >
}

export default CartItem;