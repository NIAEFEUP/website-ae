import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import startPaymentProcess from "../Cart/payment"
import { cartProduct } from "@/types/cartProduct"

type PaymentFormProps = {
   setNumber: (phone: string) => void
   setProcessingPayment: (status: boolean) => void,
   products: cartProduct[]
}

const PaymentForm = ({ setNumber, products, setProcessingPayment }: PaymentFormProps) => {
   return (
      <div className="flex w-full max-w-sm items-center space-x-2 justify-between" >
         <div className="flex flex-col gap-2" >
            <Input type="email" placeholder="Email" onChange={(e) => setNumber(e.target.value)} />
            < Input type="email" placeholder="Phone Number" onChange={(e) => setNumber(e.target.value)} />
         </div>
         < Button type="submit" className="self-end" onClick={() => setProcessingPayment(true)}> Pay </Button>
      </div>
   )
}

export default PaymentForm