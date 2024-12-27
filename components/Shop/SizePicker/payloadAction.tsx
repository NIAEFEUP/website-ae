"use server"

import { getPayload } from "payload";
import config from "payload.config";

export async function getProducts() {

   const payload = await getPayload({ config });

   const products = await payload.find({
      collection: "product",
   });

   return products;
}