import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import createPayment from "@/actions/payment";
import { cartProduct } from "@/types/cartProduct";
import { pollPaymentStatus } from "@/actions/apiCall";
import { PaymentStatus } from "@/types/paymentStatus";

type PaymentFormProps = {
  setProcessingPayment: (status: boolean) => void;
  setPaymentStatus: (status: PaymentStatus) => void;
  products: cartProduct[];
};

const PaymentForm = ({
  products,
  setPaymentStatus,
  setProcessingPayment,
}: PaymentFormProps) => {
  const [mobile, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisable] = useState(true);

  useEffect(() => {
    setDisable(!(emailIsValid() && mobileIsValid()));
  }, [mobile, email]);

  const handlePayment = async () => {
    setProcessingPayment(true);
    setPaymentStatus(PaymentStatus.waiting);
    const response = await createPayment(mobile, email, products);
    localStorage.setItem(
      "currentOrder",
      JSON.stringify({
        order: response.order,
        requestID: response.paymentID,
      })
    );

    if (response.paymentID) {
      console.log("Polling");
      const status = await pollPaymentStatus(response.paymentID, response.order);
      setPaymentStatus(status);
      setTimeout(() => {
        setProcessingPayment(false);
        setPaymentStatus(PaymentStatus.idle);
      }, 3000);
    } else {
      setProcessingPayment(false);
      console.error("Failed to create MBWAY request");
    }
  };

  const mobileIsValid = () => /^(\+351)?9\d{8}$/.test(mobile);

  const emailIsValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <div className="flex flex-col w-full gap-5">
        <div className="flex gap-2">
          <Card
            className="cursor-pointer w-25 h-20 border-blue-500"
            onClick={() => {}}
          >
            <CardHeader>
              <img
                src="/images/shop/mbway.svg"
                alt="mbway logo"
                width={100}
                height={100}
              />
            </CardHeader>
          </Card>
        </div>
        <div className="min-h-30 flex">
          <div className="flex flex-col gap-2 w-full items-center justify-between self-center">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="mobile"
              placeholder="Número de Telemóvel"
              onChange={(e) => setNumber(e.target.value)}
            />
            <Button
              type="submit"
              className="text-white w-full"
              onClick={handlePayment}
              disabled={disabled}
            >
              Pagar e Encomendar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
