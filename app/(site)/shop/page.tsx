import { getProducts } from "components/Shop/SizePicker/payloadAction"
import React from "react";
import ShopPageContent from "./pageContent";

export default async function ShopPage() {

  const products = (await getProducts()).docs

  return <ShopPageContent products={products} />;
}
