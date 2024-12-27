import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cartProduct } from "@/types/cartProduct";
import React from "react";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import startPaymentProcess from "../Cart/payment";
import { paymentStatus } from "../Cart";

type PaymentFormProps = {
  setProcessingPayment: (status: boolean) => void;
  setPaymentStatus: (status: paymentStatus) => void;
  products: cartProduct[];
};

const PaymentForm = ({
  products,
  setProcessingPayment,
  setPaymentStatus,
}: PaymentFormProps) => {
  const [number, setNumber] = React.useState("");

  return (
    <>
      <div className="flex flex-col w-full gap-5">
        <div className="flex gap-2">
          <Card
            className={"cursor-pointer w-25 h-20 border-blue-500"}
            onClick={() => {}}
          >
            <CardHeader>
              <Image
                src={"/images/shop/mbway.svg"}
                alt={"mbway logo"}
                width={100}
                height={100}
              ></Image>
            </CardHeader>
          </Card>
        </div>
        <div className="min-h-30 flex">
          <div className="flex w-full max-w-sm items-center space-x-2 justify-between self-center">
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setNumber(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Phone Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="self-end"
              onClick={() => {
                setProcessingPayment(true);
                startPaymentProcess(
                  number,
                  products,
                  setPaymentStatus,
                  setProcessingPayment
                );
              }}
            >
              {" "}
              Pay{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
