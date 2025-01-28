import { cartProduct } from "./cartProduct";

export type Order = {
  id: number;
  orderProducts: cartProduct[];
};
