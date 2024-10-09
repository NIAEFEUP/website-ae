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
import { cartProduct } from "@/types/cartProduct";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { requestMBWAY } from "./apiCall";

type ShopCartProps = {
   isOpen: boolean,
   onOpenChange: (bool: boolean) => void,
   products: cartProduct[],
   removeFromCart: (productID: number) => void,
}

const ShopCart = ({ isOpen, onOpenChange, products, removeFromCart }: ShopCartProps) => {
   const [number, setNumber] = React.useState("")

   return <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="z-100000 flex flex-col justify-between">
         <SheetHeader>
            <SheetTitle className="mb-5">Cart</SheetTitle>
            <SheetDescription className="flex flex-col gap-5">
               {products.map((p) => {
                  return <>
                     <CartItem product={p} removeFromCart={removeFromCart}></CartItem>
                     <hr></hr>
                  </>
               })}
            </SheetDescription>
         </SheetHeader>
         <SheetFooter>
            <div className="flex w-full max-w-sm items-center space-x-2">
               <Input type="email" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
               <Button type="submit" onClick={() => requestMBWAY(number)}>Pay</Button>
            </div>
         </SheetFooter >
      </SheetContent >
   </Sheet >
}

export default ShopCart;