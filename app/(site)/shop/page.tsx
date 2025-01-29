import React from "react";
import ShopPageContent from "./pageContent";
import { getProducts } from "@/actions/getShopProducts";

export default async function ShopPage() {
  const products = await getProducts();

  return <ShopPageContent products={products} />;
}
