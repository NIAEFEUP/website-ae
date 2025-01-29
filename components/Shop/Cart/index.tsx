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
import { cancelOrder, confirmOrder } from "@/actions/processOrders";
import { Order } from "@/types/order";
import { checkPaymentStatus } from "@/actions/apiCall";
type ShopCartProps = {
  isOpen: boolean;
  onOpenChange: (bool: boolean) => void;
  cartProducts: cartProduct[];
  removeFromCart: (item: cartProduct) => void;
  setCartProducts: (cartProdcuts: cartProduct[]) => void;
};

export enum paymentStatus {
  confirmed,
  declined,
  waiting,
  idle,
  expired,
}

const ShopCart = ({
  isOpen,
  onOpenChange,
  cartProducts,
  removeFromCart,
  setCartProducts,
}: ShopCartProps) => {
  //TODO: to review
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentStatusState, setPaymentStatus] = useState<paymentStatus>(
    paymentStatus.idle
  );

  useEffect(() => {
    const savedOrder = localStorage.getItem("currentOrder");

    if (paymentStatusState === paymentStatus.idle && savedOrder) {
      // TODO: this is printing multiple times, not supposed to
      console.log("changing to waiting");
      setPaymentStatus(paymentStatus.waiting);
      setProcessingPayment(true);
    }

    if (paymentStatusState === paymentStatus.confirmed) {
      // client was not refreshed and order was confirmed
      localStorage.removeItem("currentOrder");
    } else if (
      paymentStatusState === paymentStatus.declined ||
      paymentStatusState === paymentStatus.expired
    ) {
      // client was not refreshed and order was denied
      localStorage.removeItem("currentOrder");
    } else if (paymentStatusState === paymentStatus.waiting) {
      // client was maybe refreshed, status became idle again, so we poll the API if an order is processed
      if (savedOrder) {
        const pollStatus = setInterval(async () => {
          const teste = await checkPaymentStatus(
            JSON.parse(savedOrder).requestID
          );

          if (teste.Message == "Success") {
            setPaymentStatus(paymentStatus.confirmed);
            clearInterval(pollStatus);
          } else if (teste.Message == "Declined by user") {
            setPaymentStatus(paymentStatus.declined);
            clearInterval(pollStatus);
          } else if (teste.Message == "Expired") {
            setPaymentStatus(paymentStatus.expired);
            clearInterval(pollStatus);
          } else {
            return;
          }

          setTimeout(() => {
            setProcessingPayment(false);
            setPaymentStatus(paymentStatus.idle);
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
                  if (paymentStatusState === paymentStatus.waiting) {
                    return (
                      <>
                        <h2>A aguardar confirmação</h2>
                        <PuffLoader size={25} color="#90ee90" />
                      </>
                    );
                  } else if (paymentStatusState === paymentStatus.declined) {
                    return (
                      <>
                        <h2>Pagamento Anulado</h2>
                        <CircleAlert color="red" />
                      </>
                    );
                  } else if (paymentStatusState === paymentStatus.confirmed) {
                    return (
                      <>
                        <h2>Pagamento com sucesso</h2>
                        <Check color="#90ee90" />
                      </>
                    );
                  } else if (paymentStatusState === paymentStatus.expired) {
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
