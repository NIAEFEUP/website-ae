"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import CartItem from "../CartItem";
import { cartProduct } from "@/types/cartProduct";
import PaymentForm from "../PaymentForm";
import PuffLoader from "react-spinners/PuffLoader";
import { Check, CircleAlert, ClockAlert } from "lucide-react";
import { checkPaymentStatus } from "@/actions/apiCall";
import { PaymentStatus } from "@/types/paymentStatus";
type ShopCartProps = {
  isOpen: boolean;
  onOpenChange: (bool: boolean) => void;
  cartProducts: cartProduct[];
  removeFromCart: (item: cartProduct) => void;
  setCartProducts: (cartProdcuts: cartProduct[]) => void;
};

const ShopCart = ({
  isOpen,
  onOpenChange,
  cartProducts,
  removeFromCart,
  setCartProducts,
}: ShopCartProps) => {
  //TODO: to review
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentStatusState, setPaymentStatus] = useState<PaymentStatus>(
    PaymentStatus.idle
  );

  useEffect(() => {
    const savedOrder = localStorage.getItem("currentOrder");

    if (paymentStatusState === PaymentStatus.idle && savedOrder) {
      // TODO: this is printing multiple times, not supposed to
      console.log("changing to waiting");
      setPaymentStatus(PaymentStatus.waiting);
      setProcessingPayment(true);
    }

    if (paymentStatusState === PaymentStatus.confirmed) {
      // client was not refreshed and order was confirmed
      localStorage.removeItem("currentOrder");
    } else if (
      paymentStatusState === PaymentStatus.declined ||
      paymentStatusState === PaymentStatus.expired
    ) {
      // client was not refreshed and order was denied
      localStorage.removeItem("currentOrder");
    } else if (paymentStatusState === PaymentStatus.waiting) {
      // client was maybe refreshed, status became idle again, so we poll the API if an order is processed
      if (savedOrder) {
        const pollStatus = setInterval(async () => {
          const teste = await checkPaymentStatus(
            JSON.parse(savedOrder).requestID
          );

          if (teste.Message == "Success") {
            setPaymentStatus(PaymentStatus.confirmed);
            clearInterval(pollStatus);
          } else if (teste.Message == "Declined by user") {
            setPaymentStatus(PaymentStatus.declined);
            clearInterval(pollStatus);
          } else if (teste.Message == "Expired") {
            setPaymentStatus(PaymentStatus.expired);
            clearInterval(pollStatus);
          } else {
            return;
          }

          setTimeout(() => {
            setProcessingPayment(false);
            setPaymentStatus(PaymentStatus.idle);
          }, 3000);
        }, 5000);
      }
    }
  }, [paymentStatusState]);

  function updateItem(item: cartProduct, newQuantity: number) {
    cartProducts.forEach((item, i) =>
      item === item ? (cartProducts[i].quantity = newQuantity) : {}
    );
    setCartProducts(cartProducts);
  }

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="z-100000 flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="mb-5">Carrinho</SheetTitle>
          <SheetDescription className="flex flex-col gap-5 max-h-[600px] overflow-y-auto">
            {cartProducts.map((p) => {
              return (
                <CartItem
                  item={p}
                  removeFromCart={removeFromCart}
                  updateItem={updateItem}
                />
              );
            })}
          </SheetDescription>
        </SheetHeader>
        {cartProducts.length > 0 && (
          <SheetFooter className="!flex !flex-col">
            <SheetTitle className="mb-5">Pagamento</SheetTitle>
            {!processingPayment ? (
              <PaymentForm
                products={cartProducts}
                setProcessingPayment={setProcessingPayment}
                setPaymentStatus={setPaymentStatus}
              />
            ) : (
              <div className="flex gap-2 justify-center bg-gray-100 p-5 rounded">
                {(() => {
                  if (paymentStatusState === PaymentStatus.waiting) {
                    return (
                      <>
                        <h2>A aguardar confirmação</h2>
                        <PuffLoader size={25} color="#90ee90" />
                      </>
                    );
                  } else if (paymentStatusState === PaymentStatus.declined) {
                    return (
                      <>
                        <h2>Pagamento Anulado</h2>
                        <CircleAlert color="red" />
                      </>
                    );
                  } else if (paymentStatusState === PaymentStatus.confirmed) {
                    return (
                      <>
                        <h2>Pagamento com sucesso</h2>
                        <Check color="#90ee90" />
                      </>
                    );
                  } else if (paymentStatusState === PaymentStatus.expired) {
                    return (
                      <>
                        <h2>Pagamento expirou</h2>
                        <ClockAlert />
                      </>
                    );
                  }
                })()}
              </div>
            )}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShopCart;
