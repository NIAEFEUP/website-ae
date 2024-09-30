import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
} from "@/components/ui/sheet"
import React from "react";
import CartItem from "../CartItem";
import { Product } from "@/payload-types";

type ShopCartProps = {
   isOpen: boolean,
   onOpenChange: (bool: boolean) => void,
   products: Product[],
}

const ShopCart = ({ isOpen, onOpenChange, products }: ShopCartProps) => {
   return <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="z-100000 flex flex-col justify-between">
         <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <SheetDescription className="flex flex-col gap-5">
               {products.map((p) => {
                  return <>
                     <CartItem product={p}></CartItem>
                     <hr></hr>
                  </>
               })}
            </SheetDescription>
         </SheetHeader>
         <SheetFooter>
            <button>Checkout</button>
         </SheetFooter>
      </SheetContent>
   </Sheet>
}

export default ShopCart;