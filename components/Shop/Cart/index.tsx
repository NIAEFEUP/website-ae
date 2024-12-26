import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import CartItem from "../CartItem";
import { cartProduct } from "@/types/cartProduct";
import PaymentForm from "../PaymentForm";
import PuffLoader from "react-spinners/PuffLoader";
import { Check, CircleAlert } from "lucide-react";

type ShopCartProps = {
  isOpen: boolean;
  onOpenChange: (bool: boolean) => void;
  products: cartProduct[];
  removeFromCart: (item: cartProduct) => void;
};

export enum paymentStatus {
  confirmed,
  declined,
  waiting,
}

const ShopCart = ({
  isOpen,
  onOpenChange,
  products,
  removeFromCart,
}: ShopCartProps) => {
  const [processingPayment, setProcessingPayment] = React.useState(false);
  const [paymentStatusState, setPaymentStatus] = React.useState<paymentStatus>(
    paymentStatus.waiting
  );

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="z-100000 flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="mb-5">Cart</SheetTitle>
          <SheetDescription className="flex flex-col gap-5">
            {products.map((p) => {
              return (
                <>
                  <CartItem item={p} removeFromCart={removeFromCart}></CartItem>
                </>
              );
            })}
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="!flex !flex-col">
          <SheetTitle className="mb-5">Payment</SheetTitle>
          {!processingPayment ? (
            <PaymentForm
              products={products}
              setProcessingPayment={setProcessingPayment}
              setPaymentStatus={setPaymentStatus}
            ></PaymentForm>
          ) : (
            <div className="flex gap-2 justify-center bg-gray-100 p-5 rounded">
              {paymentStatusState === paymentStatus.waiting ? (
                <>
                  <h2>Waiting for confirmation</h2>
                  <PuffLoader size={25} color="#90ee90" />
                </>
              ) : paymentStatusState == paymentStatus.declined ? (
                <>
                  <h2>Payment declined</h2>
                  <CircleAlert color="red" />
                </>
              ) : (
                <>
                  <h2>Payment processed</h2>
                  <Check color="#90ee90" />
                </>
              )}
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ShopCart;
