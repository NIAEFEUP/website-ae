import { Product } from "@/payload-types";
import Image from 'next/image';

type CartItemProps = {
   product: Product,

}

const CartItem = ({ product }: CartItemProps) => {
   return <div className="flex gap-2">
      <Image
         src="/images/cactus.jpg"
         alt="hero"
         width={100}
         height={90}
         className="rounded-t-full"
      />
      <div className="flex flex-col">
         <h1>{product.name}</h1>
         <h3>{product.price}$</h3>
      </div>
   </div>
}

export default CartItem;