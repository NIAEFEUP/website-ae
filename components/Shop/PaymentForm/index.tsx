import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cartProduct } from "@/types/cartProduct"
import React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { University } from 'lucide-react';

type PaymentFormProps = {
   setNumber: (phone: string) => void
   setProcessingPayment: (status: boolean) => void,
   products: cartProduct[]
}

enum cardSelected {
   mbway,
   presential
}

const PaymentForm = ({ setNumber, products, setProcessingPayment }: PaymentFormProps) => {

   const [selectedCard, setSelectedCard] = React.useState<cardSelected | null>(null)

   return (
      <>
         <div className="flex flex-col items-center gap-5 justify-center">
            <div className="flex gap-2">
               <Card className={`cursor-pointer w-25 h-20 ${selectedCard == cardSelected.mbway ? "border-blue-500" : ""}`} onClick={() => setSelectedCard(cardSelected.mbway)}>
                  <CardHeader>
                     <Image src={"/images/shop/mbway.svg"} alt={"mbway logo"} width={100} height={100}></Image>
                  </CardHeader>
               </Card>
               <Card className={`cursor-pointer w-25 h-20 flex flex-col justify-center ${selectedCard == cardSelected.presential ? " border-blue-500" : ""}`} onClick={() => setSelectedCard(cardSelected.presential)}>
                  <CardHeader>
                     <div className="flex flex-col items-center gap-0.5">
                        <University className="w-5 h-5" />
                        <h2 className="text-sm">On-site</h2>
                     </div>

                  </CardHeader>
               </Card>
            </div >
            <div className="min-h-30 flex">
               {
                  selectedCard == cardSelected.mbway ?
                     <div className="flex w-full max-w-sm items-center space-x-2 justify-between self-center" >
                        <div className="flex flex-col gap-2" >
                           <Input type="email" placeholder="Email" onChange={(e) => setNumber(e.target.value)} />
                           <Input type="email" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <Button type="submit" className="self-end" onClick={() => { }}> Pay </Button>
                     </div> :
                     <div className="flex flex-row gap-2 self-end max-w-sm w-full" >
                        <Input type="email" placeholder="Email" onChange={(e) => setNumber(e.target.value)} />
                        <Button type="submit" className="self-end" onClick={() => { }}> Order </Button>
                     </div>
               }
            </div>
         </div>
      </>)

}

export default PaymentForm