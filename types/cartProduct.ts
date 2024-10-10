import { Product } from "@/payload-types";

export type cartProduct = {
   product: Product,
   quantity: number,
   size: string,
}